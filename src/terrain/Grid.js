class Grid {
    constructor() {
        this.tiles = []
        this.tilesX = 40;
        this.tilesY = 22;
        this.tileSize = 40;
    }

    createGrid() {
        for (let x = 0; x < this.tilesX; x++) {
            this.tiles[x] = [];
            for (let y = 0; y < this.tilesY; y++) {
                this.tiles[x][y] = new Tile(this.tileSize);
            }
        }
    }

    drawGrid() {
        push();
        translate((windowWidth / 2) - (this.tileSize * this.tilesX / 2), (windowHeight / 2) - (this.tileSize * this.tilesY / 2));
        for (let x = 0; x < this.tilesX; x++) {
            for (let y = 0; y < this.tilesY; y++) {
                push();
                fill(map(noise(x / 3, y / 3), 0, 1, 0, 255));
                translate(x * this.tileSize, y * this.tileSize);
                this.tiles[x][y].draw();
                pop();
            }
        }
        pop();
    }
}