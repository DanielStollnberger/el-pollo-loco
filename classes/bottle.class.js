class Bottle extends ThrowableObject {
    positionX;
    positionY = 280;
    width = 70;
    height = 70;
    broke = false;
    index;


    cache = {
        throwing: [
            'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
            'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
            'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
            'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
        ],
        break: [
            'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
            'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
            'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
            'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
            'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
            'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
        ]
    };

    constructor(positionX) {
        super(positionX).loadImg('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.cache.throwing);
        this.loadImages(this.cache.break);
        this.positionX = positionX;
        this.throw();
    }

    throw() {
        this.speedY = 30;
        console.log(this);

        setInterval(() => {
            if (this.aboveGround() && this.broke == false) {
                this.positionX += 8;
            } else {
                setInterval(() => {
                    this.animation('break');
                }, 100);
                this.broke = true;
            }
        }, 1000 / 60);
        setInterval(() => {
            this.animation('throwing');
        }, 50)
    }
    hitted() {
        return this.broke = true;
    }
}

