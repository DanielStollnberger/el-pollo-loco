class CollectableBottle extends DrawableObject {
    positionY = 320;
    height = 100;
    width = 100;

    constructor() {
        super().loadImg('img/6_salsa_bottle/2_salsa_bottle_on_ground.png');

        this.positionX = Math.random() * 1500 + 200;
    }
}