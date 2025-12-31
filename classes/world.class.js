class World {
    ctx;
    canvas;
    keyboard;
    cameraX = 0;
    level = level1;

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
    };

    checkWorld() {
        setInterval(() => {
            this.checkCollisions();
            this.checkBottles();
        }, 200);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.gotHit();
            }
        });
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.character.collectCoin(index);
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
        this.addObjectsToMap(this.bottles)
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