class Character extends MoveableObject {
    
    constructor(positionX, positionY, img) {
        super(positionX, positionY, img).loadImg(img);
        this.positionY = positionY;
    }

    jump() {
        world.character.positionY = this.positionY - 10;
    };
}