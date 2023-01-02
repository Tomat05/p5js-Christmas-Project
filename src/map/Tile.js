class Tile {
    constructor(tileSize) {
        this.size = tileSize;
        this.colour;
    }

    draw() {
        rect(0, 0, this.size, this.size);
    }
}