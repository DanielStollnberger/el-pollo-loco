class BackgroundObject extends MoveableObject {
    positionY = 0;
    positionX = 0;
    height = 480;
    width = 720;

    constructor(img, positionX) {
        super(img).loadImg(img);

        this.positionX = positionX;
    }
}