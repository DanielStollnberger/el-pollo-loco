class Level {
    enemies;
    clouds;
    background;
    endX;
    coins;
    collectableBottles;

    constructor(enemies, clouds, background, endX, coins, collectableBottles) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.background = background;
        this.endX = endX;
        this.coins = coins;
        this.collectableBottles = collectableBottles;
    }
}