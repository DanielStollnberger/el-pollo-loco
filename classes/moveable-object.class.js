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

    animateLeft(v) {
        setInterval(() => this.positionX = this.positionX - 0.3, v);
    };

    walk() {
        setInterval(() => {
            if (world.keyboard.right) {
                this.positionX += 10;
                let i = this.currentImage % this.cache.walking.length
                let path = this.cache.walking[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            } else if (world.keyboard.left) {
                this.positionX -= 10;
                let i = this.currentImage % this.cache.walking.length
                let path = this.cache.walking[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            } else if (world.keyboard.space == true) {
                this.positionY -= 20;
                setInterval(() => {
                    let i = this.currentImage % this.cache.jumping.length;
                    let path = this.cache.jumping[i];
                    this.img = this.imageCache[path];
                    this.currentImage++;
                }, 100);
            }
        }, 100);
    }
}