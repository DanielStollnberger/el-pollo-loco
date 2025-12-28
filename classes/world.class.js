class World {
    ctx;
    canvas;
    keyboard;
    cameraX = 0;
    level = level1;

    statusbars = {
       healthBar : new HealthBar(),
       coinBar : new CoinBar(),
       bottleBar : new BottleBar()
    };
    bottles = [];
    character = new Character(0, '../img/2_character_pepe/1_idle/idle/I-1.png');
    boss = new Boss();

    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.draw();
        this.checkCollisions();
    };

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.gotHit();
                }
            })
        }, 200);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.cameraX, 0);

        this.addObjectsToMap(this.level.background);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);

        this.ctx.translate(-this.cameraX, 0);
        this.addToMap(this.statusbars.healthBar);
        this.addToMap(this.statusbars.coinBar);
        this.addToMap(this.statusbars.bottleBar);
        this.addObjectsToMap(this.bottles)
        this.ctx.translate(this.cameraX, 0);

        this.addToMap(this.character);
        this.addToMap(this.boss);

        this.ctx.translate(-this.cameraX, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    };

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