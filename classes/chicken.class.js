class Chicken extends MoveableObject {
    height = 70;
    width = 60;
    speed = Math.random() + 1;
    dead = false;

    cache = {
        walking: [
            '../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
            '../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
            '../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
        ],
        die: [
            'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
        ]
    };
    positionX = Math.random() * 500 + 200;
    positionY = 350;

    constructor(positionX, positionY, img) {
        super(positionX, positionY, img).loadImg('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.cache.walking);
        this.loadImg(this.cache.die);
        this.chickenWalk();
    }

    eat() {

    };

    chickenWalk() {
        setInterval(() => {
            if (!this.dead) {
                this.moveLeft();
            }
        }, 1000 / 60);
        setInterval(() => {
            if (!this.dead) {
                this.animation('walking');
            }
        }, 100);

    }

    die() {
        this.dead = true;
        setInterval(() => {
            this.loadImg(this.cache.die);
        }, 100);
    }
}