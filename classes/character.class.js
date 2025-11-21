class Character extends MoveableObject {
    positionY;
    constructor(positionX, positionY, img) {
        super(positionX, positionY, img).loadImg('../img/2_character_pepe/2_walk/W-21.png');
        this.positionY = positionY;
    }

    jump() {
        world.character.positionY = this.positionY - 10;
    };
}