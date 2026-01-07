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
        this.handleMovement();
        this.handleAnimation();
    }

    handleMovement() {
        setInterval(() => {
            if (world.keyboard.right && this.positionX < world.level.endX) this.moveRight();
            if (world.keyboard.left && this.positionX > 0) this.moveLeft();
            if ((world.keyboard.space || world.keyboard.up) && !this.aboveGround()) this.jump();
            this.flippedImg = world.keyboard.left;
            world.cameraX = -this.positionX + 100;
        }, 1000 / 60);
    }

    handleAnimation() {
        setInterval(() => {
            if (this.isDead()) return this.handleDeath();
            if (this.gotHurt()) return this.animation('hurt');
            if (this.aboveGround()) return this.animation('jumping');
            if (world.keyboard.left || world.keyboard.right) return this.animation('walking');
        }, 100);
    }

    handleDeath() {
        this.animation('die');
        setTimeout(() => {
            world.gamestate = 'lost';
            world.showEndscreen('lost');
            world.sounds[1].play();
        }, 500);
    }

    // move() {
    //     setInterval(() => {
    //         if (world.keyboard.right && world.character.positionX < world.level.endX) {
    //             this.flippedImg = false;
    //             this.moveRight();
    //         }

    //         if (world.keyboard.left && world.character.positionX > 0) {
    //             this.flippedImg = true;
    //             this.moveLeft();
    //         }

    //         if ((world.keyboard.space || world.keyboard.up) && !this.aboveGround()) {
    //             this.jump()
    //         }
    //         world.cameraX = -this.positionX + 100;
    //     }, 1000 / 60);


    //     setInterval(() => {
    //         if ((world.keyboard.right || world.keyboard.left) && !this.aboveGround()) {
    //             this.animation('walking');
    //         } else if (this.aboveGround()) {
    //             this.animation('jumping');
    //         } else if (this.isDead()) {
    //             this.animation('die');
    //             setTimeout(() => {
    //             world.gamestate = 'lost';
    //             world.showEndscreen('lost');
    //             world.sounds[1].play();
    //             }, 500);
    //         } else if (this.gotHurt()) {
    //             this.animation('hurt');
    //         }
    //     }, 100);
    // }
}