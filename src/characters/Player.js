class Player {
    constructor() {
        this.thirsty = true;
        this.hungry = true;
        this.position = createVector(4, 4);
        this.health = 1;
        this.deathMsg = "";
        this.timeVal = 5;
    }

    damageCheck() {
        // DROWNING
        if (this.position.x % 7 === 0 || this.position.x % 7 === 6 || this.position.y % 9 === 0 || this.position.y % 9 === 8) {
            this.health = 0;
            this.deathMsg = "Player jumped into the ocean and drowned :(";
        }

        // HUNGRY || THIRSTY
        this.timeVal -= 1 * (deltaTime / 1000);
        if (this.timeVal <= 0) {
            this.health = 0;
            this.deathMsg = "Player died of " + (this.thirsty ? "thirst" : "hunger");
        }
    }

    eat() {
        this.timeVal = 5;
        this.hungry = false;
        this.thirsty = true;
    }

    drink() {
        this.timeVal = 5;
        this.thirsty = false;
        this.hungry = true;
    }

    flashHealth() {
        if (this.health === 1) {
            return;
        }
        push();
        fill(255, 0, 0, this.healthFlash);
        translate(this.position.x * this.tileSize, this.position.y * this.tileSize);
        if (this.health === 0) {
            this.healthFlash += 2;
        } if (this.healthFlash >= 300) {
            fill(0);
        }
        this.tiles[this.position.x][this.position.y].draw();
        pop();
    }

    move(keyCode) {
        if (this.health === 0) {
            return;
        }
        switch (keyCode) {
            // UP
            case 87:
                this.position.set(this.position.x, this.position.y - 1);
                break;
            // DOWN
            case 83:
                this.position.set(this.position.x, this.position.y + 1);
                break;
            // LEFT
            case 65:
                this.position.set(this.position.x - 1, this.position.y);
                break;
            // RIGHT
            case 68:
                this.position.set(this.position.x + 1, this.position.y);
                break;
            default:
                break;
        }
    }
}