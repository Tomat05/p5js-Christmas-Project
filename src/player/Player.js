// A class for the Player character
class Player {
  
    constructor(position) {
      this.speed = 500;
      this.position = position;
      this.gravity = -9.81;
      this.downVel = 0;
    }
  
    // Player graphics
    drawPlayer() {
      push();
      rect(this.position.x, this.position.y, 100, 100);
      pop();
    }
  
    // Updates player position along x-axis;
    move(direction) {
      this.position.set(this.position.x + (direction * this.speed * (deltaTime / 1000)), this.position.y);
    }

    // Simulates the force of gravity
    fall() {

      if (this.downVel / 1000 < 50) {
        this.downVel -= this.gravity;
      } else {
        this.downVel = 50;
      }

      this.position.set(this.position.x, this.position.y + (this.downVel * (deltaTime / 1000)));
    }

    // Handles input for the player character
    handleInput() {
      if (keyIsDown(65)) {
        this.move(-1);
      }
      if (keyIsDown(68)) {
        this.move(1);
      }
    }

    // Called once per frame
    onFrameUpdate() {
      this.drawPlayer();
      this.handleInput();
  }
}