class Bottle extends ThrowableObject {
    positionX = 100;
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

    constructor() {
        super().loadImg('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.throw();
    }

    throw(){
        this.speedY = 30;
        setInterval(() => {
            this.positionX += 8;
        }, 1000/60);
    }
}