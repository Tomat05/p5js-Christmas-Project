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

  let fr = Math.round(frameRate());
  fill(255);
  textSize(20);
  text(fr, 10, 10, 20, 20);
}