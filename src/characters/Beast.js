class Beast {
    constructor(tilesize, playerPosition) {
        this.defaultPosition = createVector(2, 1);
		this.position = createVector(this.defaultPosition.x, this.defaultPosition.y);
        this.size = tilesize;
        this.target = playerPosition;
		this.time = 1;
    }

    move() {
        let distanceX = this.target.x - this.position.x;
		let distanceY = this.target.y - this.position.y;
		let directionX;
		let directionY;

		if (distanceX > 0) {directionX = 1}
		else if (distanceX < 0) {directionX = -1}
		else {directionX = 0}

		if (distanceY > 0) {directionY = 1}
		else if (distanceY < 0) {directionY = -1}
		else {directionY = 0};

    	push();
    	stroke(100);
    	strokeWeight(5);
    	line(this.position.x * this.size, this.position.y * this.size, this.target.x * this.size, this.position.y * this.size);
		line(this.position.x * this.size, this.position.y * this.size, this.position.x * this.size, this.target.y * this.size);
    	pop();

		if (abs(distanceX) > abs(distanceY)) {
			this.position.set(this.position.x + directionX, this.position.y);
		} else {
			this.position.set(this.position.x, this.position.y + directionY);
		}
    }

	timer() {
		if (this.time <= 0) {
			this.move();
			this.time = 1.5;
		}
		this.time -= (deltaTime / 1000);
	}

    draw() {
        push();
        fill(0);
        rect(this.position.x * this.size, this.position.y * this.size, this.size, this.size);
        push();
        fill(0, 0, 0, 150);
        rect(this.position.x * this.size, (this.position.y + 1) * this.size, this.size, this.size);
        rect(this.position.x * this.size, (this.position.y - 1) * this.size, this.size, this.size);
        rect((this.position.x + 1) * this.size, this.position.y * this.size, this.size, this.size);
        rect((this.position.x - 1) * this.size, this.position.y * this.size, this.size, this.size);
        pop();
        pop();
    }

    update() {
		this.timer();
        this.draw();
		return (this.position.x === this.target.x && this.position.y === this.target.y);
    }
}