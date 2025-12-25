class MoveableObject {
    positionX;
    positionY;
    health = 100;
    lastHit = 0;

    img;
    flippedImg = false;

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
        let i = this.currentImage % this.cache[cacheArray].length
        let path = this.cache[cacheArray][i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    jump() {
        this.speedY = 30;
    }

    moveLeft() {
        this.positionX -= this.speed;
    }

    moveRight() {
        this.positionX += this.speed;
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.rect(this.positionX, this.positionY, this.width, this.height);
            ctx.stroke();
        }
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.positionX, this.positionY, this.width, this.height);
    }

    isColliding(object) {
        return this.positionX + this.width > object.positionX &&
            this.positionY + this.height > object.positionY &&
            this.positionX < object.positionX &&
            this.positionY < object.positionY + object.height
    }

    gotHit() {
        this.health -= 5;
        if (this.health < 0) {
            this.health = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    gotHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }

    isDead() {
        return this.health == 0;
    }
}