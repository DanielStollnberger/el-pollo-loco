class Chicken extends MoveableObject {
    height = 100;
    width = 100;
    constructor(positionX,positionY,img) {
        super(positionX,positionY,img).loadImg('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.positionX = Math.random() * 500 + 200;
        this.positionY = 310;
    }

    eat(){

    };
}