class BackgroundObject extends MoveableObject {
    positionY = 0;
    positionX = 0;
    height = 480;
    width = 720;
    backPos;

    constructor(img, positionX) {
        super().loadImg(img);

        this.positionX = positionX -100;
    }
}