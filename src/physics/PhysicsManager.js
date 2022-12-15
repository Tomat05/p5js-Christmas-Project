class PhysicsManager {
    constructor(player) {
        this.player = player;
    }

    onPhysicsUpdate() {
        this.player.fall();
    }

    onFrameUpdate() {
        setInterval(this.onPhysicsUpdate(), 10);
    }
}