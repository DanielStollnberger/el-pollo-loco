class Character extends MoveableObject {
    positionY = 180;
    width = 150;
    height = 250;
    speed = 10;
    speedY = 0;
    acceleration = 2.5;

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

    constructor(positionX, img) {
        super(positionX, img).loadImg(img);

        this.loadImages(this.cache.jumping);
        this.loadImages(this.cache.walking);
        this.gravitation();
        this.move();
    }

    gravitation() {
        setInterval(() => {
            if (this.aboveGround() || this.speedY > 0) {
                this.positionY -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)

        setInterval(() => {
            if (this.aboveGround() || world.keyboard.space) {
                this.animation('jumping');
            }
        }, 120)
    }

    move() {
        setInterval(() => {
            if (world.keyboard.right && world.character.positionX < world.level.endX) {
               this.moveRight();
            }

            if (world.keyboard.left && world.character.positionX > 0) {
                this.moveLeft();
            }

            if ((world.keyboard.space || world.keyboard.up) && !this.aboveGround()) {
                this.jump()
            }
            world.cameraX = -this.positionX + 100;
        }, 1000 / 60);


        setInterval(() => {
            if (world.keyboard.right || world.keyboard.left) {
                this.animation('walking');
            }
        }, 50);
    }

    aboveGround() {
        return this.positionY < 180
    }
}