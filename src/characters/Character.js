class Charcter {
    constructor(/*vec2*/startPos, /*color*/colour, /*float*/speed) {
        this.colour = colour;
        this.position = startPos;
        this.speed = 0;
        this.maxSpeed = 650;
        this.acceleration = 50;
        this.deceleration = -100;
        this.currentDirection = createVector(0, 0);
        this.isInput = false;
    }

    draw() {
        push();
        noStroke();
        fill(this.colour);
        rect(this.position.x, this.position.y, 40, 40);
        pop();
    }

    move(/*vec2*/direction) {
        if (this.isInput) {
            this.currentDirection.set(direction.normalize());
            this.speed += this.acceleration * (deltaTime / 1000);
        } else {
            if (this.speed <= 0) {
                this.speed = 0;
            } else {
                this.speed += this.deceleration * (deltaTime / 1000);
            }
        }

        if (this.speed / (deltaTime / 1000) >= this.maxSpeed) {
            this.speed = this.maxSpeed * (deltaTime / 1000);
        }
        this.position.set(this.position.x + (this.currentDirection.x * this.speed), this.position.y + (this.currentDirection.y * this.speed));
    }
}