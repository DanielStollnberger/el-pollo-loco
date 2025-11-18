class MoveableObject {
    positionX;
    positionY;
    img;

    constructor(positionX, positionY, img) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.img = img;
    }

    moveRight() {
        console.log('moving right');
    }
}