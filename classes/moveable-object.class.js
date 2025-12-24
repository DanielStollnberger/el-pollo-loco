class MoveableObject {
    positionX;
    positionY;
    img;
    flipImg = false;

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

    animation(cacheArray) {
        let i = this.currentImage % this.cache.walking.length
        let path = this.cache[cacheArray][i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    jump() {
        this.speedY = 30;
    }
    moveLeft() {
        this.positionX -= this.speed;
        this.flipImg = true;
    }
    moveRight() {
        this.positionX += this.speed;
        this.flipImg = false;
    }
}