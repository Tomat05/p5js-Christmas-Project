class Player extends Charcter {
    constructor(position, colour) {
        super(position, colour);
        this.oldKey = key;
    }

    update() {
        this.draw();
        this.input();
    }

    input() {
        (keyIsDown(65) || keyIsDown(68) || keyIsDown(87) || keyIsDown(83)) ? this.isInput = true : this.isInput = false;
        let direction = createVector(0, 0);
        if (keyIsDown(65)) {direction.set(-1, direction.y);} // Left
        if (keyIsDown(68)) {direction.set(1, direction.y);} // Right
        if (keyIsDown(87)) {direction.set(direction.x, -1);} // Up
        if (keyIsDown(83)) {direction.set(direction.x, 1);} // Down
        this.move(direction);
    }
}