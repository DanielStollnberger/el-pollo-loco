class Character extends MoveableObject {
    cache = {walking : [
        '../img/2_character_pepe/2_walk/W-21.png',
        '../img/2_character_pepe/2_walk/W-22.png',
        '../img/2_character_pepe/2_walk/W-23.png',
        '../img/2_character_pepe/2_walk/W-24.png',
        '../img/2_character_pepe/2_walk/W-25.png',
        '../img/2_character_pepe/2_walk/W-26.png'],
    };

    constructor(positionX, positionY, img) {
        super(positionX, positionY, img).loadImg(img);
        this.positionY = positionY;

        this.loadImages(this.cache.walking);
        this.walk();
    }

    jump() {
        world.character.positionY = this.positionY - 30;
        setInterval(() => (world.character.positionY = this.positionY + 1), 30)
        keyboard.space = true;
    };

    moveRight() {
        this.positionX = this.positionX + 10;
        keyboard.right = true;
    };

    moveLeft() {
        this.positionX = this.positionX - 10;
        keyboard.left = true;
    };
}