class Ogre {
  constructor(game) {
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/ogre-gold_1_orig.png");
        //this.animation = new Animator(this.spritesheet, x, y, width, height, frameCount, frameDuration, framePadding, reverse, loop);

        // Starting Coordinates
        this.x = 200;
        this.y = 250;

        this.game = game;
        this.animations = [];

        //new Animator(spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop)
        //this.animations.push(new Animator(this.spritesheet, 0, 0, 36, 32, 23, 0.05, 1, false, true)); //attack animation
        this.animations.push(new Animator(this.spritesheet, 0, 0, 127, 122, 7, 0.3, 1, false, true));
        this.animations.push(new Animator(this.spritesheet, 0, 128, 127, 122, 7, 0.3, 1, false, true));
    }

    draw(ctx) {
        this.animations[0].drawFrame(this.game.clockTick, ctx, 525, 400, 3);

    }

    update() {
        // this.animations[1].drawFrame(this.game.clockTick, ctx, 525, 400, 3);
    }
}
