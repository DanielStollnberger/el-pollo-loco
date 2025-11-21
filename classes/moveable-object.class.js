class MoveableObject {
    positionX;
    positionY;
    img;

    constructor(positionX, positionY, img) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.img = img;
    }

    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    };

    moveRight() {
       this.positionX + 1;
    }
}