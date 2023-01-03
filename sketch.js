let scene = 1;

let intro;
let drown;
let cliveDeath;
let starve;
let dehydrate;

let grid;
let screenMask;
let menu;
let menuImg;
let started = false;

function preload() {
    intro = createVideo('src/resources/intro.mp4');

    // It pains me that I can't do this in an array but p5.js moment I guess
    drown = createVideo('src/resources/Drown.mp4');
    cliveDeath = createVideo('src/resources/CliveDeath.mp4');
    starve = createVideo('src/resources/Starve.mp4');
    dehydrate = createVideo('src/resources/Dehydrate.mp4');

    menuImg = loadImage('src/resources/menu.png');
}

// Initial setup
function setup() {
	createCanvas(windowWidth, windowHeight);
    screenMask = new ScreenMask();
    grid = new Grid(drown, cliveDeath, starve, dehydrate);
    menu = new Menu(menuImg, grid);
    grid.createGrid();
    intro.hide();
    drown.hide();
    cliveDeath.hide();
    starve.hide();
    dehydrate.hide();
}

function onIntroFinish() {
    scene = 1;
}

function introCutscene() {
    background(0);
    // A hacky way of avoiding dumb browser autoplay blocking
    if (!started && !mouseIsPressed) {
            push();
            fill(255);
            textSize(100);
            text("click to start!", (width / 2) - 300, (height / 2) - 300, (width / 2) + 300, (height / 2) + 300);
            pop();
            return;
        } else {
            started = true;
        }
    intro.play();
    image(intro, 0, 0);
    intro.onended(onIntroFinish);
}

function mainGame() {
    background(0);
    noStroke();

    grid.update();

    if (menu.difficulty != 0) {
        screenMask.draw();
    } else {
        push();
        stroke(0);
        strokeWeight(3);
        fill(0, 0);
        rect((windowWidth / 2) - 25, (windowHeight / 2) - 25, 50, 50);
        pop();
    }
    if (menu.difficulty != 2) {
        grid.drawNameTag();
    }
}

function draw() {
    switch (scene) {
        case 0:
            introCutscene();
            break;
        case 1:
            scene = menu.draw();
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