class Grid extends Player{
    constructor(drown, cliveDeath, starve, dehydrate) {
        super(drown, cliveDeath, starve, dehydrate);
        this.tiles = []
        this.tilesX = 7;
        this.tilesY = 9;
        this.tileSize = 50;
        this.beast = new Beast(this.tileSize, this.position);
        this.difficulty = 2;
    }

    //#region SETUP
    createGrid() {
        for (let x = 0; x < this.tilesX; x++) {
            this.tiles[x] = [];
            for (let y = 0; y < this.tilesY; y++) {
                this.tiles[x][y] = new Tile(this.tileSize);
            }
        }
    }
    //#endregion

    //#region GAME LOOP
    drawMap() {
        for (let x = 0; x < this.tilesX; x++) {
            for (let y = 0; y < this.tilesY; y++) {
                push();
                // OCEAN
                if (x % 7 === 0 || x % 7 === 6 || y % 9 === 0 || y % 9 === 8) {
                    fill(0, 0, 255);      
                // SAND
                } else if(x % 7 === 1 || x % 7 === 5 || y % 9 === 1 || y % 9 === 7) {
                    fill(255, 255, 0);
                // GRASS
                } else {
                    fill(0, 255, 0);
                }
                translate(x * this.tileSize, y * this.tileSize);
                this.tiles[x][y].draw();
                pop();
            }
        }
    }

    drawBerries() {
        let pos = createVector(3, 6);
        fill(255, 0, 255);
        if (!this.hungry && this.timeVal < 4.8) {
            return;
        }
        push();
        translate(pos.x * this.tileSize, pos.y * this.tileSize);
        this.tiles[pos.x][pos.y].draw();
        pop();
        if (pos.x === this.position.x && pos.y === this.position.y && this.hungry) {
            this.eat();
        }
    }

    drawWater() {
        push();
        let pos1 = createVector(3, 2);
        translate(pos1.x * this.tileSize, pos1.y * this.tileSize);
        fill(0, 255, 255);
        this.tiles[pos1.x][pos1.y].draw();
        pop();
        push();
        let pos2 = createVector(4, 2);
        translate(pos2.x * this.tileSize, pos2.y * this.tileSize);
        fill(0, 255, 255);
        this.tiles[pos2.x][pos2.y].draw();
        pop();

        if ((pos1.x === this.position.x || pos2.x === this.position.x) && pos1.y === this.position.y && this.thirsty) {
            this.drink();
        }
    }

    drawForest() {
        let pos = createVector(2, 4);
        fill(138, 67, 6);
        push();
        translate(pos.x * this.tileSize, pos.y * this.tileSize);
        this.tiles[pos.x][pos.y].draw()
        pop();
        if (pos.x === this.position.x && pos.y === this.position.y && !this.hasWood) {
            this.collectWood();
        }
    }

    drawBoat() {
        let pos = createVector(5, 3);
        fill(150);
        push();
        translate(pos.x * this.tileSize, pos.y * this.tileSize);
        this.tiles[pos.x][pos.y].draw();
        pop();

        if (pos.x === this.position.x && pos.y === this.position.y && this.hasWood) {
            this.repairBoat();
        }
    }

    reset() {
        this.beast.position.set(this.beast.defaultPosition.x, this.beast.defaultPosition.y);
        this.position.set(this.defaultPosition.x, this.defaultPosition.y);
        this.hungry = true;
        this.thirsty = true;
        this.health = 1;
        this.healthFlash = 0;
        this.timeVal = 5;
    }

    update() {
        push();
        translate((windowWidth / 2) - (this.tileSize / 2), (windowHeight / 2) - (this.tileSize / 2));
        translate(-this.position.x * this.tileSize, -this.position.y * this.tileSize);
        this.drawMap();
        this.drawBerries();
        this.drawWater();
        this.drawForest();
        this.drawBoat();
        this.damageCheck(this.beast.update());
        if (this.death()) {
            print("lmao you dead");
            this.reset();
        }
        pop();
    }

    drawNameTag() {
        push()
        translate((windowWidth / 2) - (this.tileSize / 2), (windowHeight / 2) - (this.tileSize / 2));
        translate(-this.position.x * this.tileSize, -this.position.y * this.tileSize);
        this.beast.displayName();
        pop();
    }
    //#endregion
}