class Character extends MoveableObject {
    positionY = 180;
    width = 150;
    height = 250;
    speed = 10;

    cache = {
        walking: [
            '../img/2_character_pepe/2_walk/W-21.png',
            '../img/2_character_pepe/2_walk/W-22.png',
            '../img/2_character_pepe/2_walk/W-23.png',
            '../img/2_character_pepe/2_walk/W-24.png',
            '../img/2_character_pepe/2_walk/W-25.png',
            '../img/2_character_pepe/2_walk/W-26.png'
        ],
        jumping: [
            'img/2_character_pepe/3_jump/J-31.png',
            'img/2_character_pepe/3_jump/J-32.png',
            'img/2_character_pepe/3_jump/J-33.png',
            'img/2_character_pepe/3_jump/J-34.png',
            'img/2_character_pepe/3_jump/J-35.png',
            'img/2_character_pepe/3_jump/J-36.png',
            'img/2_character_pepe/3_jump/J-37.png',
            'img/2_character_pepe/3_jump/J-38.png',
            'img/2_character_pepe/3_jump/J-39.png'
        ],
        die: [
            'img/2_character_pepe/5_dead/D-51.png',
            'img/2_character_pepe/5_dead/D-52.png',
            'img/2_character_pepe/5_dead/D-53.png',
            'img/2_character_pepe/5_dead/D-54.png',
            'img/2_character_pepe/5_dead/D-55.png',
            'img/2_character_pepe/5_dead/D-56.png',
            'img/2_character_pepe/5_dead/D-57.png'
        ],
        hurt: [
            'img/2_character_pepe/4_hurt/H-41.png',
            'img/2_character_pepe/4_hurt/H-42.png',
            'img/2_character_pepe/4_hurt/H-43.png'
        ]
    };

    constructor(positionX, img) {
        super(positionX, img).loadImg(img);

        this.loadImages(this.cache.jumping);
        this.loadImages(this.cache.walking);
        this.loadImages(this.cache.die);
        this.loadImages(this.cache.hurt);
        this.gravitation();
        this.move();
    }

    move() {
        setInterval(() => {
            if (world.keyboard.right && world.character.positionX < world.level.endX) {
                this.flippedImg = false;
                this.moveRight();
            }

            if (world.keyboard.left && world.character.positionX > 0) {
                this.flippedImg = true;
                this.moveLeft();
            }

            if ((world.keyboard.space || world.keyboard.up) && !this.aboveGround()) {
                this.jump()
            }
            world.cameraX = -this.positionX + 100;
        }, 1000 / 60);


        setInterval(() => {
            if ((world.keyboard.right || world.keyboard.left) && !this.aboveGround()) {
                this.animation('walking');
            } else if (this.aboveGround()) {
                this.animation('jumping');
            } else if (this.isDead()) {
                this.animation('die');
                console.log('die');
            } else if (this.gotHurt()) {
                this.animation('hurt');
            }
        }, 100);
    }
}