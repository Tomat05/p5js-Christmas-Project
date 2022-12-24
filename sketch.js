let player;
let grid;

// Initial setup
function setup() {
	createCanvas(windowWidth, windowHeight);
	player = new Player(createVector((width / 2) - (25 / 2), (height / 2) - (25 / 2)), color(100, 255, 0));
    grid = new Grid();
    grid.createGrid();
}

// Update loop (FRAMERATE DEPENDANT)
function draw() {
	background(0);

    grid.drawGrid();
	player.update();


	push();
	let fr = Math.round(frameRate() * 10) / 10;
	fill(255);
	textSize(20);
	text(fr, 10, 10, 20, 20);
	pop();
}