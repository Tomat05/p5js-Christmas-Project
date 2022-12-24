class Tile {
    constructor(tileSize) {
        this.size = tileSize;
    }

    draw() {
        rect(0, 0, this.size, this.size);
    }
}