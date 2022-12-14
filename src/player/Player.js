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