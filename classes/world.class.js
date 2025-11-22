class World {
    ctx;
    canvas;
    character = new Character(50, 220, '../img/2_character_pepe/2_walk/W-21.png');
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];
    clouds = [
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud()
    ];
    background = [
        new BackgroundObject('../img/5_background/layers/air.png'),
        new BackgroundObject('../img/5_background/layers/3_third_layer/1.png'),
        new BackgroundObject('../img/5_background/layers/2_second_layer/1.png'),
        new BackgroundObject('../img/5_background/layers/1_first_layer/1.png')
    ]

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.background);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        this.ctx.drawImage(this.character.img, this.character.positionX, this.character.positionY, 200, 200);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    };

    addObjectsToMap(array) {
        array.forEach(object => { this.ctx.drawImage(object.img, object.positionX, object.positionY, object.width, object.height) })
    };
}