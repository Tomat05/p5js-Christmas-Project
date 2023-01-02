class Grid extends Player{
    constructor() {
        super();
        this.tiles = []
        this.tilesX = 7;
        this.tilesY = 9;
        this.tileSize = 50;
        this.berryPos = round(random(0, 3));
        this.thirsty = false;
        this.healthFlash = 0;
    }

    createGrid() {
        for (let x = 0; x < this.tilesX; x++) {
            this.tiles[x] = [];
            for (let y = 0; y < this.tilesY; y++) {
                this.tiles[x][y] = new Tile(this.tileSize);
            }
        }
    }

    drawMap() {
        for (let x = 0; x < this.tilesX; x++) {
            for (let y = 0; y < this.tilesY; y++) {
                push();
                // OCEAN
                if (x % 7 === 0 || x % 7 === 6 || y % 9 === 0 || y % 9 === 8) {
                    fill(0, 0, 255);
                // BOAT
                } else if (x % 7 === 5 && y % 9 === 3) {
                    fill(150);
                // FOREST
                } else if(x % 7 === 2 && y % 9 === 4) {
                    fill(138, 67, 6);        
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
        let pos = createVector(0, 0);
        fill(255, 0, 255);
        if (!this.hungry && this.timeVal < 4.8) {
            this.berryPos = round(random(0, 3));
            return;
        }
        switch (this.berryPos) {
            case 0:
                pos.set(3,5);
                break;
            case 1:
                pos.set(4,6);
                break;
            case 2:
                pos.set(3,7);
                break;
            case 3:
                pos.set(2,6);
                break;
            default:
                break;
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

    draw() {
        push();
        translate((windowWidth / 2) - (this.tileSize / 2), (windowHeight / 2) - (this.tileSize / 2));
        translate(-this.position.x * this.tileSize, -this.position.y * this.tileSize);
        this.drawMap();
        this.drawBerries();
        this.drawWater();
        this.flashHealth();
        pop();
        this.damageCheck();
    }
}