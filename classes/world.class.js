class World {
    ctx;
    canvas;
    keyboard;

    character = new Character(50, 180, '../img/2_character_pepe/1_idle/idle/I-1.png');
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
        new BackgroundObject('../img/5_background/layers/1_first_layer/1.png')
    ]

    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.background);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);

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
            this.ctx.translate(object.positionX + object.width / -2, object.positionY);
            this.ctx.scale(-1, 1);
            object.positionX *= -1;
        }
        this.ctx.drawImage(object.img, object.positionX, object.positionY, 150, 250);
        if (object.flipImg) {
            object.positionX *= -1;
            this.ctx.restore();
        }
    }
}