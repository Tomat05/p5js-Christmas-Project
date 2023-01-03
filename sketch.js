let scene = 1;

let grid;
let screenMask;

// Initial setup
function setup() {
	createCanvas(windowWidth, windowHeight);
    screenMask = new ScreenMask();
    grid = new Grid();
    grid.createGrid();
}

function mainGame() {
    background(0);
    frameRate(0);
    noStroke();

    grid.update();
    push();
    stroke(0);
    strokeWeight(3);
    fill(0, 0);
    rect((windowWidth / 2) - 25, (windowHeight / 2) - 25, 50, 50);
    pop();
    // screenMask.draw();


    push();
    let fr = Math.round(frameRate() * 10) / 10;
    fill(255);
    textSize(20);
    text(fr, 10, 10, 20, 20);
    pop();
}

// Update loop (FRAMERATE DEPENDANT)
function draw() {
    switch (scene) {
        case 0:
            // TODO: Intro cutscene
            break;
        case 1:
            mainGame();
            break;
        case 2:
            // TODO: End cutscene
            break;
        default:
            scene = 1;
            break;
    }
}

// I hate that I have to put this outside of my player class
function keyPressed() {
    grid.move(keyCode);
}