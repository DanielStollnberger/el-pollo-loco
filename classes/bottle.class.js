class Bottle extends ThrowableObject {
    positionX;
    positionY = 280;
    width = 70;
    height = 70;


    cache = {
        throwing: [
            'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
            'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
            'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
            'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
        ]
    };

    constructor(positionX) {
        super(positionX).loadImg('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.cache.throwing);
        this.positionX = positionX;
        this.throw();
    }

    throw() {
        this.speedY = 30;
        setInterval(() => {
            this.positionX += 8;
        }, 1000 / 60);
        setInterval(() => {
            this.animation('throwing');
        }, 50)
    }
}