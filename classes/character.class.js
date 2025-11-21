class Character extends MoveableObject {
    constructor(positionX,positionY,img) {
        super(positionX,positionY,img).loadImg('../img/2_character_pepe/2_walk/W-21.png');
    }

    jump() {
this.positionY + 1;
    };
}