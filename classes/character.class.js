class Character extends MoveableObject {
    speed = 10;
    cache = {
        walking: [
            '../img/2_character_pepe/2_walk/W-21.png',
            '../img/2_character_pepe/2_walk/W-22.png',
            '../img/2_character_pepe/2_walk/W-23.png',
            '../img/2_character_pepe/2_walk/W-24.png',
            '../img/2_character_pepe/2_walk/W-25.png',
            '../img/2_character_pepe/2_walk/W-26.png'],
        jumping: [
            'img/2_character_pepe/3_jump/J-31.png',
            'img/2_character_pepe/3_jump/J-32.png',
            'img/2_character_pepe/3_jump/J-33.png',
            'img/2_character_pepe/3_jump/J-34.png',
            'img/2_character_pepe/3_jump/J-35.png',
            'img/2_character_pepe/3_jump/J-36.png',
            'img/2_character_pepe/3_jump/J-37.png',
            'img/2_character_pepe/3_jump/J-38.png',
            'img/2_character_pepe/3_jump/J-39.png',
        ]
    };

    constructor(positionX, positionY, img) {
        super(positionX, positionY, img).loadImg(img);
        this.positionY = positionY;

        this.moveRight();
        this.moveLeft();
    }

    jump() {
        this.loadImages(this.cache.jumping);
    };

    moveRight() {
        this.loadImages(this.cache.walking);
        this.walk();
    };

    moveLeft() {
        this.loadImages(this.cache.walking);
        this.walk();
    };
}