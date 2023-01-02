let grid;
let screenMask;

// Initial setup
function setup() {
	createCanvas(windowWidth, windowHeight);
    screenMask = new ScreenMask();
    grid = new Grid();
    grid.createGrid();
}

// Update loop (FRAMERATE DEPENDANT)
function draw() {
	background(0);
    noStroke();

    grid.draw();
    push();
    stroke(0);
    strokeWeight(3);
    fill(0, 0, 0, 75);
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

// I hate that I have to put this outside of my player class
function keyPressed() {
    grid.move(keyCode);
}