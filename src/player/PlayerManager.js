class PlayerManager {
    constructor() {
        this.player = new Player(createVector(200, 200));
    }

    onFrameUpdate() {
        this.player.drawPlayer();
        this.handleInput();
    }

    // Handles input for the player character
    handleInput() {
        if (keyIsDown(65)) {
          this.player.move(-1);
        }
        if (keyIsDown(68)) {
          this.player.move(1);
        }
      }
}