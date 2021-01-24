class Background {
	constructor(gameEngine, x, y) {
		Object.assign(this, {gameEngine, x, y });

		this.spriteSheet = ASSET_MANAGER.getAsset("./sprites/bambooforest.png");
	};

	update() {
		// ctx.drawImage(this.spriteSheet, 0, 0);
	};

	draw(ctx) {

		ctx.drawImage(this.spriteSheet, 0, 0);
	};
};
