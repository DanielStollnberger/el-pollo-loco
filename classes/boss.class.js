class Boss extends MoveableObject{
    height = 500;
    width = 300;
    cache = {walking:[
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ]};
    positionX = 2400;
    positionY = -40;
    
    constructor(positionX, positionY, img) {
        super(positionX, positionY, img).loadImg('img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.cache.walking);
        this.animation();
        this.eat();
    }
    
    eat() {
        console.log(this.world);
    };
    
    animation() {
        setInterval(() => {
            this.walkAnimation();
        }, 200);
    }
}