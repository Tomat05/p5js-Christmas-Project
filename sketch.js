let player;

// A class for the Player character
class Player {
  
  constructor(position) {
    this.speed = 500;
    this.position = position;
  }

  drawPlayer() {
    push();
    rect(this.position.x, this.position.y, 100, 100);
    pop();
  }

  // Updates player position along x-axis;
  move(direction) {
    this.position.set(this.position.x + (direction * this.speed * (deltaTime / 1000)), this.position.y);
  }
}

// Handles input for the player character
function playerInput() {
  if (keyIsDown(65)) {
    player.move(-1);
  }
  if (keyIsDown(68)) {
    player.move(1);
  }

  if (keyIsDown(75)) {
    frameRate(30);
  } else {
    frameRate(60);
  }
}

// Initial setup
function setup() {
  createCanvas(windowWidth, windowHeight);

  player = new Player(createVector(200, 200))
}

// Update loop (FRAMERATE DEPENDANT)
function draw() {
  background(0);
  player.drawPlayer();

  playerInput();
}