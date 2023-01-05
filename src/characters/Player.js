class Player {
    constructor() {
        this.thirsty = true;
        this.hungry = true;
        this.defaultPosition = createVector(4, 4);
        this.position = createVector(this.defaultPosition.x, this.defaultPosition.y);
        this.health = 1;
        this.deathMsg = "";
        this.timeVal = 5;
        this.hasWood = false;
        this.boatHealth = 0;
        this.healthFlash = 0;
    }

    damageCheck(beast) {
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

        // BEAST :O
        if (beast) {
            this.health = 0;
            this.deathMsg = "Player felt the wrath of Clive";
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

    collectWood() {
        this.hasWood = true;
    }

    repairBoat() {
        if (this.hasWood) {
            this.boatHealth++;
            this.hasWood = false;
        }
        if (this.boatHealth >= 5) {
            scene = 3;
        }
    }

    death() {
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
        } if (this.healthFlash >= 400) {
            return true;
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