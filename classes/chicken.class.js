class Chicken extends MoveableObject {
    height = 90;
    width = 80;
    cache = [
        '../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    positionX = Math.random() * 500 + 200;
    positionY = 340;
    v = Math.random() * 8;

    constructor(positionX, positionY, img) {
        super(positionX, positionY, img).loadImg('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.cache);
        this.chickenWalk();
    }

    eat() {

    };

    chickenWalk() {
        this.animateLeft(this.v);
        setInterval(() => {
            let i = this.currentImage % this.cache.length
            let path = this.cache[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }
}