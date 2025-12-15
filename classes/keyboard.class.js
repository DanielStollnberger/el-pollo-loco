class Keyboard {
    space = false;
    left = false;
    right = false;
    down = false;
    up = false;

    constructor() {
        window.addEventListener('keypress', (e) => {
            // console.log(e);
            switch (e.code) {
                case "Space":
                    this.space = true;
                    break;
                default:
                    console.log("Unknown move");
            }
        })
        window.addEventListener('keydown', (e) => {
            // console.log(e);
            switch (e.code) {
                case "Space":
                    this.space = true;
                    world.character.jump();
                    break;
                case "ArrowRight":
                    this.right = true;
                    console.log(world.character.positionX);
                    break;
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowUp":
                    this.up = true;
                    break;
                case "ArrowDown":
                    this.down = true;
                    break;
                default:
                    console.log("Unknown move");
            }
        })
        window.addEventListener('keyup', (e) => {
            // console.log(e);
            switch (e.code) {
                case "Space":
                    this.space = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowUp":
                    this.up = false;
                    break;
                case "ArrowDown":
                    this.down = false;
                    break;
                default:
                    console.log("Unknown move");
            }
        })
    }
}