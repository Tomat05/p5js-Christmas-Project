let scene = 0;

let intro;
let menuImg;

let grid;
let screenMask;
let menu;

let started = false;

// Here be files to load
function preload() {
    intro = createVideo('src/resources/intro.mp4');

    menuImg = loadImage('src/resources/menu.png');
}

// Initial setup
function setup() {
	createCanvas(windowWidth, windowHeight);
    screenMask = new ScreenMask();
    grid = new Grid();
    menu = new Menu(menuImg, grid);
    grid.createGrid();
    intro.hide();
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

// da loop for the main game
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

// I forgor 💀
function win() {
    push();
    fill(0);
    textSize(60);
    textAlign('center', 'top');
    text("You Win!", (width / 2), 20);
    text("Imagine an amazing cutscene where you escape and get your neck\nfixed or something and everyone claps because you're so cool and\nyou finally achieved something with your pitiful little life.", width / 2, 130);
    fill(255, 0, 0);
    if (mouseX > (width / 2) - 250 && mouseX < (width / 2) + 250 &&
    mouseY > (height / 2) && mouseY < (height / 2) + 200) {
        fill(255, 0, 0, 150)
        if (mouseIsPressed) {
            scene = 1;
        }
    }
    rect((width / 2) - 250, (height / 2), 500, 200);
    textAlign('center', 'center');
    fill(0);
    text("menu", width / 2, (height / 2) + 95);
    pop();
}

// Main draw loop
function draw() {
    switch (scene) {
        case 0:
            introCutscene();
            break;
        case 1:
            scene = menu.draw();
            break;
        case 2:
            menu.sceneToLoad = 1;
            mainGame();
            break;
        case 3:
            background(255);
            win();
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