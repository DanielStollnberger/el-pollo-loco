class MoveableObject extends DrawableObject {
    flippedImg = false;
    lastHit = 0;

    constructor(positionX, positionY, img) {
        super(positionX, positionY, img);
        this.positionX = positionX;
        this.positionY = positionY;
        this.img = img;
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

    isColliding(object) {
        return this.positionX + this.width > object.positionX &&
            this.positionY + this.height > object.positionY &&
            this.positionX < object.positionX &&
            this.positionY < object.positionY + object.height
    }

    gotHit() {
        this.health -= 5;
        world.statusbars.healthBar.setPercentage(this.health);
        
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