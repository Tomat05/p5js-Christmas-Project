class ScreenMask {
    constructor() {

    }

    draw() {
        fill(0);
        rect(0, 0, (windowWidth / 2) - 25, windowHeight);
        rect(0, 0, windowWidth, (windowHeight / 2) - 25);
        rect(0, (windowHeight / 2) + 25, windowWidth, windowHeight);
        rect((windowWidth / 2) + 25, 0, windowWidth, windowHeight)
    }
}