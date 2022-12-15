let player;
let physicsManager;

// Initial setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player(createVector(500, 0));
  physicsManager = new PhysicsManager(player);
}

// Update loop (FRAMERATE DEPENDANT)
function draw() {
  background(0);
  player.onFrameUpdate();
  physicsManager.onFrameUpdate();
}