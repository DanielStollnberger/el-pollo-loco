class DrawableObject {
    positionX;
    positionY;
    img;
    currentImage = 0;
    health = 100;
    bottles = 100;
    coins = 0;
    percentage = 100;
    imageCache = {

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

    drawFrame(ctx) {
        if (this instanceof Bottle || this instanceof Boss || this instanceof Coin || this instanceof Character) {
            ctx.beginPath();
            ctx.rect(this.positionX, this.positionY, this.width, this.height);
            ctx.stroke();
        }
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.positionX, this.positionY, this.width, this.height);
    }

    setPercentage(percentage) {
        this.percentage = percentage;

        let path = this.cache[this.resolvePercentage(percentage)];
        this.img = this.imageCache[path];
    }

    resolvePercentage(percentage) {
        if (percentage > 85) {
            return 5;
        } else if (percentage > 65) {
            return 4;
        } else if (percentage > 45) {
            return 3;
        } else if (percentage > 25) {
            return 2;
        } else if (percentage > 5) {
            return 1;
        } else {
            return 0;
        }
    }
}