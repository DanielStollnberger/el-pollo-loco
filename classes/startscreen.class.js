class Startscreen {
    ctx;
    canvas;
    keyboard;
    img;

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        this.img = new Image();
        this.img.src = 'img/9_intro_outro_screens/start/startscreen_1.png';

        this.img.onload = () => {
            this.ctx.drawImage(this.img, 0, 0, 720, 480);
        };
    }
}