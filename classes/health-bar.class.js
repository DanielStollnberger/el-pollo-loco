class HealthBar extends MoveableObject {
    positionX = -70;
    positionY = 20;
    width = 250;
    height = 50;

    constructor(img) {
        super().loadImg(img);
    }
}