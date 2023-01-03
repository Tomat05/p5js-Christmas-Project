let scene = 0;

let grid;
let screenMask;
let intro;

function preload() {
    intro = createVideo('src/resources/intro.mov');
}

// Initial setup
function setup() {
	createCanvas(windowWidth, windowHeight);
    screenMask = new ScreenMask();
    grid = new Grid();
    grid.createGrid();
    intro.hide();

    try {
        intro.play();
    } catch (error) {
        console.log(error);
    }
}

function onIntroFinish() {
    scene = 1;
}

function introCutscene() {
    background(0);
    image(intro, 0, 0);
    intro.onended(onIntroFinish);
}

function mainGame() {
    background(0);
    noStroke();

    grid.update();
    push();
    stroke(0);
    strokeWeight(3);
    fill(0, 0);
    rect((windowWidth / 2) - 25, (windowHeight / 2) - 25, 50, 50);
    pop();
    // screenMask.draw();
}

// Update loop (FRAMERATE DEPENDANT)
function draw() {
    switch (scene) {
        case 0:
            introCutscene();
            break;
        case 1:
            // TODO: Menu screen
            background(0);
            push();
            fill(255);
            textSize(100);
            text("Menu", 100, 100, 200, 200);
            pop();
            break;
        case 2:
            mainGame();
            break;
        case 3:
            // TODO: End cutscene
            break;
        default:
            scene = 1;
            break;
    }

    push();
    let fr = Math.round(frameRate() * 10) / 10;
    fill(255);
    textSize(20);
    text(fr, 10, 10, 20, 20);
    pop();
}

// I hate that I have to put this outside of my player class
function keyPressed() {
    grid.move(keyCode);
}