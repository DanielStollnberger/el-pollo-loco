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

    animateLeft(v) {
        setInterval(() => this.positionX = this.positionX - 0.3, v);
    };

    walk() {
        setInterval(() => {
            if (world.keyboard.right) {
                this.positionX += this.speed;
                this.flipImg = false;
            } else if (world.keyboard.left) {
                this.positionX -= this.speed;
                this.flipImg = true;
            } else if (world.keyboard.space == true) {
                this.positionY -= this.speed;
            }
            world.cameraX = -this.positionX;
        }, 1000 / 60);


        setInterval(() => {
            if (world.keyboard.right) {
                let i = this.currentImage % this.cache.walking.length
                let path = this.cache.walking[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            } else if (world.keyboard.left) {
                let i = this.currentImage % this.cache.walking.length
                let path = this.cache.walking[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            } else if (world.keyboard.space == true) {
                setInterval(() => {
                    let i = this.currentImage % this.cache.jumping.length;
                    let path = this.cache.jumping[i];
                    this.img = this.imageCache[path];
                    this.currentImage++;
                }, 100);
            }
        }, 50);
    }
}