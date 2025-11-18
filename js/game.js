let canvas;
let ctx;
let character = new Character(400, 200);

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
}