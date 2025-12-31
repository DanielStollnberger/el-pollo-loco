class Keyboard {
    space = false;
    left = false;
    right = false;
    down = false;
    up = false;
    d = false;

    constructor() {
        window.addEventListener('keydown', (e) => {
            switch (e.code) {
                case "Space":
                    this.space = true;
                    break;
                case "ArrowRight":
                    this.right = true;
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
                case "KeyD":
                    this.d = true;
                default:
            }
        })
        window.addEventListener('keyup', (e) => {
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
                case "KeyD":
                    this.d = false;
                default:
            }
        })
    }
}