class World {
    ctx;
    canvas;
    keyboard;
    cameraX = 0;
    level = level1;
    gamestate = 'running';
    sounds = [
        new Audio('audio/collect.mp3'),
        new Audio('audio/die.mp3'),
        new Audio('audio/win.mp3'),
    ]

    statusbars = {
        healthBar: new HealthBar(),
        coinBar: new CoinBar(),
        bottleBar: new BottleBar()
    };
    bottles = [];
    character = new Character(0, '../img/2_character_pepe/1_idle/idle/I-1.png');
    boss = new Boss();

    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
            this.draw();
            this.checkWorld();
            this.check();
    };

    checkWorld() {
        setInterval(() => {
            this.checkCollisions();
            this.checkBottles();
        }, 200);
    }

    check() {
        setInterval(() => {
            this.collisionCharacterWithEnemieFromAbove();
        }, 1000 / 60);
    }

    showEndscreen(state) {
        this.img = new Image();
        this.img.src = `img/You won, you lost/You ${state}.png`;

        this.img.onload = () => {
            this.ctx.drawImage(this.img, 180, 60, 360, 240);
        };
    }

    checkCollisions() {
        this.collisionCharacterWithEnemie();
        this.characterCollectingCoin();
        this.characterCollectingBottle();
        this.bottleHitBoss();
        this.bottleHitChicken();
    }

    collisionCharacterWithEnemie() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.gotHit('character');
            }
        });
    }

    collisionCharacterWithEnemieFromAbove() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isCollidingFromAbove(enemy)) {
                enemy.die();
            }
        });
    }

    characterCollectingCoin() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.character.collectCoin(index);
                world.sounds[0].play();
            }
        });
    }

    characterCollectingBottle() {
        this.level.collectableBottles.forEach((collectableBottle, index) => {
            if (this.character.isColliding(collectableBottle) && this.statusbars.bottleBar.bottles < 100) {
                this.character.collectBottle(index);
            }
        });
    }

    bottleHitBoss() {
        this.bottles.forEach((bottle, index) => {
            if (this.boss.isColliding(bottle)) {
                this.bottles[index].hitted();
                this.bottles[index].animation('break');
                setTimeout(() => {
                    this.bottles.splice(index, 1);
                }, 300);
                this.boss.gotHit('boss');
            } else if (this.bottles[index].broke) {
                setTimeout(() => {
                    this.bottles.splice(index, 1);
                }, 500);
            }
        });
    }

    bottleHitChicken() {
        this.bottles.forEach((bottle, index) => {
            let hit = false;
            for (let i = 0; i < this.level.enemies.length; i++) {
                if (this.level.enemies[i].isColliding(bottle)) {
                    hit = true;
                    this.level.enemies[i].die();
                    break;
                }
            }

            if (hit) {
                this.bottles[index].hitted();
                this.bottles[index].animation('break');

                setTimeout(() => {
                    this.bottles.splice(index, 1);
                }, 300);
            }
        });
    }



    checkBottles() {
        if (this.keyboard.d && this.statusbars.bottleBar.bottles > 0) {
            this.bottles.push(
                new Bottle(this.character.positionX)
            );
            this.character.throwedBottle();
        }
    }

    draw() {
        if (this.gamestate !== 'running') {
            return;
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.cameraX, 0);
        this.setObjectsAndBackground();
        this.ctx.translate(-this.cameraX, 0);
        this.setStatusBars();
        this.ctx.translate(this.cameraX, 0);
        this.setEnemiesAndCharacter();
        this.ctx.translate(-this.cameraX, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    };

    setObjectsAndBackground() {
        this.addObjectsToMap(this.level.background);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.collectableBottles);
        this.addObjectsToMap(this.bottles);
    }

    setStatusBars() {
        this.addToMap(this.statusbars.healthBar);
        this.addToMap(this.statusbars.coinBar);
        this.addToMap(this.statusbars.bottleBar);
    }

    setEnemiesAndCharacter() {
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.character);
        this.addToMap(this.boss);
    }

    addObjectsToMap(array) {
        array.forEach(object => {
            this.addToMap(object);
        })
    };

    addToMap(object) {
        if (object.flippedImg) {
            this.flipImg(object);
        }

        object.draw(this.ctx);
        object.drawFrame(this.ctx);

        if (object.flippedImg) {
            this.flipImgBack(object);
        }
    }

    flipImg(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.positionX *= -1;
    }

    flipImgBack(object) {
        object.positionX *= -1;
        this.ctx.restore();
    }
}