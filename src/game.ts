/// <reference path="../phaser/phaser.d.ts" />

import * as States from "./states/states";

// ----------------------------------------------------

var game: Phaser.Game;

// ----------------------------------------------------

window.onload = main;

// ----------------------------------------------------

function main() {
    game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
        preload: preload,
        create: create,
    });
}

// ----------------------------------------------------

function preload() {
    // TODO: Common source assets can be loaded here...
}

// ----------------------------------------------------

function create() {
    game.state.add('boot', States.Boot);
    game.state.start('boot');
}
