class Cloud extends MoveableObject {
    positionY = 0;
    height = 400;
    width = 700;

    constructor(positionX, positionY, img) {
        super(positionX, positionY, img).loadImg('../img/5_background/layers/4_clouds/1.png');

        this.positionX = Math.random() * 500;

        setInterval(() => this.animationLeft(), 10);
    }
}