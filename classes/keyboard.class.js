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
                    world.character.jump();
                    break;
                case "KeyD":
                    world.character.moveRight();
                    break;
                case "KeyA":
                    world.character.moveLeft();
                    break;
                default:
                    console.log("Unknown move");
            }
        })
    }
}