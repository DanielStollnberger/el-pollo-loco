class MoveableObject {
    positionX;
    positionY;
    img;
    currentImage = 0;

    imageCache = {

    }

    constructor(positionX, positionY, img) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.img = img;

    }

    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    };

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        this.positionX = this.positionX + 10;
    }

    moveLeft() {
        this.positionX = this.positionX - 10;
    }

    animateLeft(v) {
        setInterval(() => this.positionX = this.positionX - 0.3, v);
        ;
    };

    walk() {
        setInterval(() => {
            let i = this.currentImage % this.cache.length
            let path = this.cache[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }
}