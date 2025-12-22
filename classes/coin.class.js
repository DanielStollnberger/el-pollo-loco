class Coin extends MoveableObject{
    positionY;
    positionX;
    height = 200;
    width = 200;

    constructor() {
        super().loadImg('img/8_coin/coin_2.png');

        this.positionX = Math.random() * 1500 + 200;
        this.positionY = Math.random() * 200 + 100;
    }
}