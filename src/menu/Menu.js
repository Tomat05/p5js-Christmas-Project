class Menu {
    constructor(img, grid) {
        this.background = img;
        this.sceneToLoad = 1;
        this.difficulty = 2;
        this.grid = grid;
    }

    start() {
        push();
        if (mouseX > 656 && mouseX < 1156 &&
            mouseY > 675 && mouseY < 875) {
            fill(0, 150);
            if (mouseIsPressed) {
                this.sceneToLoad = 2;
            }
        } else {
            fill(0, 0);
        }
        rect(656, 675, 500, 200);
        pop();
        this.grid.difficulty = this.difficulty;
        return this.sceneToLoad;
    }

    diffChange() {
        switch (this.difficulty) {
            case 0:
                fill(255, 50);
                rect(1285, 760, 625, 90);
                break;
            case 1:
                fill(255, 50);
                rect(1285, 667, 625, 90);
                break;
            case 2:
                fill(255, 50);
                rect(1285, 575, 625, 90);
                break;
            default:
                break;
        }

        // Easy
        if (mouseX > 1285 && mouseY > 760 && mouseY < 860) {
            if (mouseIsPressed) {
                this.difficulty = 0;
            }
            fill(100, 50);
            rect(1285, 760, 625, 90);
        // Medium
        } else if (mouseX > 1285 && mouseY > 662 && mouseY < 762) {
            if (mouseIsPressed) {
                this.difficulty = 1;
            }
            fill(100, 50);
            rect(1285, 667, 625, 90);
        // Hard
        } else if (mouseX > 1285 && mouseY > 565 && mouseY < 665) {
            if (mouseIsPressed) {
                this.difficulty = 2;
            }
            fill(100, 50);
            rect(1285, 575, 625, 90);
        }
    }

    draw() {
        background(0);
        this.diffChange();
        image(this.background, 0, 0, 1920, 1080);
        return this.start();
    }
}