class World {
    ctx;
    canvas;
    character = new Character(200, 200);
    enemies = [
        new Chicken(400, 250),
        new Chicken(300, 250),
        new Chicken(500, 250)
    ];

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.drawImage(this.character.img, this.character.positionX, this.character.positionY, 100, 100);

        for (let i = 0; i < this.enemies.length; i++) {
            this.ctx.drawImage(this.enemies[i].img, this.enemies[i].positionX, this.enemies[i].positionY, 50, 50);
        }

        this.enemies.forEach(enemy => {this.ctx.drawImage(enemy.img, enemy.positionX, enemy.positionY, 50, 50)});

        let self = this;

        requestAnimationFrame(function () {
            self.draw();
        });
    };
}