class Chicken extends MoveableObject {
    height = 90;
    width = 80;
    speed = Math.random() + 2;

    cache = {
        walking: [
            '../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
            '../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
            '../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
        ]
    };
    positionX = Math.random() * 500 + 200;
    positionY = 340;

    constructor(positionX, positionY, img) {
        super(positionX, positionY, img).loadImg('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.cache.walking);
        this.chickenWalk();
    }

    eat() {

    };

    chickenWalk() {
        setInterval(() => {
            this.moveLeft();
        }, 1000/60);
        setInterval(() => {
            this.animation('walking');
        }, 100);
    }
}