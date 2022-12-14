let playerManager;

// Initial setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  playerManager = new PlayerManager();
}

// Update loop (FRAMERATE DEPENDANT)
function draw() {
  background(0);
  playerManager.onFrameUpdate();
}