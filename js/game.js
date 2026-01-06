let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    startscreen = new Startscreen(canvas);
    setTimeout(() => {
        loadWorld();
    }, 1500);
}


function loadWorld() {
    world = new World(canvas, keyboard);
}

