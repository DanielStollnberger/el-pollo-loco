class Character extends MoveableObject {
    constructor(positionX, positionY) {
        super(positionX, positionY);
    }

    jump() {
        console.log(this.positionY + 1);
    };
}