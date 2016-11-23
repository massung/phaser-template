var game;
var logo;
window.onload = main;
function main() {
    game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
        preload: preload,
        create: create,
        update: update,
        render: render,
    });
}
function preload() {
    game.load.image('logo', 'data/phaser-logo-small.png');
    game.stage.backgroundColor = 0xB20059;
    game.antialias = true;
}
function create() {
    logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    logo.inputEnabled = true;
    logo.anchor.set(0.5, 0.5);
    logo.scale.set(0.5, 0.5);
}
function update() {
    if (logo.input.justPressed()) {
        game.add.tween(logo.scale)
            .to({ x: 1, y: 1 }, 500, Phaser.Easing.Cubic.InOut)
            .yoyo(true)
            .start();
    }
}
function render() {
    game.debug.spriteInfo(logo, 10, 20);
}
//# sourceMappingURL=game.js.map