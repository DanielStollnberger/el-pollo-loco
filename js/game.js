let canvas;
let world;
let keyboard;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);
    keyboard = new Keyboard();
}

