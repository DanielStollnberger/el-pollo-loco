class MoveableObject extends DrawableObject {
    flippedImg = false;
    lastHit = 0;
    speedY = 0;
    acceleration = 2.5;

    constructor(positionX, positionY, img) {
        super(positionX, positionY, img);
        this.positionX = positionX;
        this.positionY = positionY;
        this.img = img;
    }

    gravitation() {
        setInterval(() => {
            if (this instanceof ThrowableObject) {
                this.positionY -= this.speedY;
                this.speedY -= this.acceleration;
            } else if (this.aboveGround() || this.speedY > 0) {
                this.positionY -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)
    }

    aboveGround() {
        return this.positionY < 180
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

    collectCoin(i) {
        world.level.coins.splice(i, 1);
        world.statusbars.coinBar.coins += 10;
        world.statusbars.coinBar.setPercentage(world.statusbars.coinBar.coins);
    }

    throwedBottle() {
        world.statusbars.bottleBar.bottles -= 20;
        world.statusbars.bottleBar.setPercentage(world.statusbars.bottleBar.bottles);
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