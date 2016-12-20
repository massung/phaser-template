(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var States = require("./states/states");
var game;
window.onload = main;
function main() {
    game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
        preload: preload,
        create: create,
    });
}
function preload() {
}
function create() {
    game.state.add('boot', States.Boot);
    game.state.start('boot');
}
},{"./states/states":3}],2:[function(require,module,exports){
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
        this.logo.anchor.set(0.5);
        this.logo.scale.set(0.5);
    };
    Boot.prototype.update = function () {
        if (this.logo.input.justPressed()) {
            this.game.add.tween(this.logo.scale)
                .to({ x: 1, y: 1 }, 500, Phaser.Easing.Cubic.InOut)
                .yoyo(true)
                .start();
        }
    };
    Boot.prototype.render = function () {
        this.game.debug.spriteInfo(this.logo, 10, 18);
    };
    return Boot;
}(Phaser.State));
exports.Boot = Boot;
},{}],3:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("./boot"));
},{"./boot":2}]},{},[1])
//# sourceMappingURL=game.js.map
