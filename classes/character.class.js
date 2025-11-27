class Character extends MoveableObject {
    characterCache = [
        '../img/2_character_pepe/2_walk/W-21.png',
        '../img/2_character_pepe/2_walk/W-22.png',
        '../img/2_character_pepe/2_walk/W-23.png',
        '../img/2_character_pepe/2_walk/W-24.png',
        '../img/2_character_pepe/2_walk/W-25.png',
        '../img/2_character_pepe/2_walk/W-26.png'
    ];

    currentImage = 0;
    constructor(positionX, positionY, img) {
        super(positionX, positionY, img).loadImg(img);
        this.positionY = positionY;

        this.loadImages(this.characterCache);
        this.walk();
    }

    walk() {
        setInterval(() => {
            let path = this.characterCache[this.currentImage];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 1000)
    }

    jump() {
        world.character.positionY = this.positionY - 10;
    };
}