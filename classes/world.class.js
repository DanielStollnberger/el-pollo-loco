class World {
    ctx;
    canvas;
    keyboard;
    cameraX = 0;

    character = new Character(0, 180, '../img/2_character_pepe/1_idle/idle/I-1.png');
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];
    clouds = [
        new Cloud(),
        new Cloud()
    ];
    background = [
        new BackgroundObject('../img/5_background/layers/air.png'),
        new BackgroundObject('../img/5_background/layers/3_third_layer/1.png'),
        new BackgroundObject('../img/5_background/layers/2_second_layer/1.png'),
        new BackgroundObject('../img/5_background/layers/1_first_layer/1.png'),
        new BackgroundObjectTwo('../img/5_background/layers/air.png'),
        new BackgroundObjectTwo('../img/5_background/layers/3_third_layer/2.png'),
        new BackgroundObjectTwo('../img/5_background/layers/2_second_layer/2.png'),
        new BackgroundObjectTwo('../img/5_background/layers/1_first_layer/2.png'),
    ]

    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.cameraX, 0);

        this.addObjectsToMap(this.background);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);

        this.ctx.translate(-this.cameraX, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    };

    addObjectsToMap(array) {
        array.forEach(object => { this.ctx.drawImage(object.img, object.positionX, object.positionY, object.width, object.height) })
    };

    addToMap(object) {
        if (object.flipImg) {
            this.ctx.save();
            this.ctx.translate(object.width, 0);
            this.ctx.scale(-1, 1);
            object.positionX *= -1;
        }
        this.ctx.drawImage(object.img, object.positionX, object.positionY, object.width, object.height);
        if (object.flipImg) {
            object.positionX *= -1;
            this.ctx.restore();
        }
    }
}