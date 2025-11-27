class Chicken extends MoveableObject {
    height = 90;
    width = 80;
    chickenCache = [
        '../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    constructor(positionX, positionY, img) {
        super(positionX, positionY, img).loadImg('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.chickenCache);

        this.positionX = Math.random() * 500 + 200;
        this.positionY = 340;
        setInterval(() => this.animationLeft(), 10);
    }


    eat() {

    };
}