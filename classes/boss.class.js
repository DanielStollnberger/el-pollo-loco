class Boss extends MoveableObject {
    height = 500;
    width = 300;
    cache = {
        walking: [
            'img/4_enemie_boss_chicken/2_alert/G5.png',
            'img/4_enemie_boss_chicken/2_alert/G6.png',
            'img/4_enemie_boss_chicken/2_alert/G7.png',
            'img/4_enemie_boss_chicken/2_alert/G8.png',
            'img/4_enemie_boss_chicken/2_alert/G9.png',
            'img/4_enemie_boss_chicken/2_alert/G10.png',
            'img/4_enemie_boss_chicken/2_alert/G11.png',
            'img/4_enemie_boss_chicken/2_alert/G12.png'
        ],
        hurt: [
            'img/4_enemie_boss_chicken/4_hurt/G21.png',
            'img/4_enemie_boss_chicken/4_hurt/G22.png',
            'img/4_enemie_boss_chicken/4_hurt/G23.png'
        ],
        die: [
            'img/4_enemie_boss_chicken/5_dead/G24.png',
            'img/4_enemie_boss_chicken/5_dead/G25.png',
            'img/4_enemie_boss_chicken/5_dead/G26.png'
        ]
    };
    positionX = 2400;
    positionY = -40;

    constructor(positionX, positionY, img) {
        super(positionX, positionY, img).loadImg('img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.cache.walking);
        this.loadImages(this.cache.hurt);
        this.loadImages(this.cache.die);
        this.bossAnimation();
    }

    bossAnimation() {
        setInterval(() => {
            this.animation('walking');
        }, 200);
        setInterval(() => {
            if (this.gotHurt()) {
                this.animation('hurt');
            } else if (this.isDead()) {
                this.animation('die');
                setTimeout(() => {
                    world.gamestate = 'won';
                    world.showEndscreen('won A');
                    world.sounds[2].play();
                    }, 500);
            }
        }, 100);
    }
}