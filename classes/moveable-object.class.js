class MoveableObject {
    positionX;
    positionY;
    img;
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

    animationLeft() {
        this.positionX = this.positionX - 0.3;
    };

    walk(cache) {
        setInterval(() => {
            let path = cache[this.currentImage];
            this.img = this.imageCache[path];
            this.currentImage++;
            if (this.currentImage >= cache.length) {
                this.currentImage = 0;
            }
        }, 1000);
    }
}