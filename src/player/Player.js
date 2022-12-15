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
      if (this.downVel / 100 >= 50) {
        this.downVel = 5000;
        print("reset to" + this.downVel);
      } else {
        this.downVel -= this.gravity;
      }

      this.position.set(this.position.x, this.position.y + (this.downVel * (deltaTime / 1000)));
      if (this.position.y > windowHeight - 100) {
        this.position.set(this.position.x, windowHeight - 100);
        this.downVel = -this.downVel;
        this.downVel -= this.downVel / 5;
        // this.position.set(this.position.x, 0);
      }
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