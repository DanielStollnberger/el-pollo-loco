class Character extends MoveableObject {
    cache = [
        '../img/2_character_pepe/2_walk/W-21.png',
        '../img/2_character_pepe/2_walk/W-22.png',
        '../img/2_character_pepe/2_walk/W-23.png',
        '../img/2_character_pepe/2_walk/W-24.png',
        '../img/2_character_pepe/2_walk/W-25.png',
        '../img/2_character_pepe/2_walk/W-26.png'
    ];

    constructor(positionX, positionY, img) {
        super(positionX, positionY, img).loadImg(img);
        this.positionY = positionY;

        this.loadImages(this.cache);
        this.walk();
    }

    jump() {
        world.character.positionY = this.positionY - 10;
    };
}