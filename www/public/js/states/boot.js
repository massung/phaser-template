"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Boot = (function (_super) {
    __extends(Boot, _super);
    function Boot() {
        return _super.apply(this, arguments) || this;
    }
    Boot.prototype.preload = function () {
        this.game.load.image('logo', 'data/phaser-logo-small.png');
    };
    Boot.prototype.create = function () {
        var x = this.game.world.centerX;
        var y = this.game.world.centerY;
        this.game.stage.backgroundColor = 0xB20059;
        this.logo = this.game.add.sprite(x, y, 'logo');
        this.logo.inputEnabled = true;
        this.logo.anchor.set(0.5, 0.5);
        this.logo.scale.set(0.5, 0.5);
    };
    Boot.prototype.update = function () {
        if (this.logo.input.justPressed()) {
            this.game.add.tween(this.logo.scale)
                .to({ x: 1, y: 1 }, 500, Phaser.Easing.Cubic.InOut)
                .yoyo(true)
                .start();
        }
    };
    return Boot;
}(Phaser.State));
exports.Boot = Boot;
//# sourceMappingURL=boot.js.map