// A sample boot state.

export class Boot extends Phaser.State {
    private logo: Phaser.Sprite;

    // ----------------------------------------------------

    preload() {
        this.game.load.image('logo', 'data/phaser-logo-small.png');
    }

    // ----------------------------------------------------

    create() {
        let x = this.game.world.centerX;
        let y = this.game.world.centerY;

        // change the background color
        this.game.stage.backgroundColor = 0xB20059;

        // create a simple sprite
        this.logo = this.game.add.sprite(x, y, 'logo');

        // respond to input events
        this.logo.inputEnabled = true;

        // pivot about the center of the sprite
        this.logo.anchor.set(0.5, 0.5);
        this.logo.scale.set(0.5, 0.5);
    }

    // ----------------------------------------------------

    update() {
        if (this.logo.input.justPressed()) {
            this.game.add.tween(this.logo.scale)
                .to({x: 1, y: 1}, 500, Phaser.Easing.Cubic.InOut)
                .yoyo(true)
                .start();
        }
    }
}
