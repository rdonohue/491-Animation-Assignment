var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/bambooforest.png");
ASSET_MANAGER.queueDownload("./sprites/ogre-gold_1_orig.png");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	gameEngine.init(ctx);

	gameEngine.addEntity(new Background(gameEngine, 1365, 768));
	gameEngine.addEntity(new Ogre(this.gameEngine));

	gameEngine.start();
});
