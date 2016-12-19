"use strict";
var States = require("./states/states");
var game;
window.onload = main;
function main() {
    console.log('here');
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
//# sourceMappingURL=game.js.map