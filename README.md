# Phaser TypeScript Template

This is a template project for [Phaser](http://phaser.io/), [TypeScript](http://www.typescriptlang.org/), and [Visual Studio Code](http://code.visualstudio.com). It is already setup to launch as an application with [Electron](http://electron.atom.io/) or as a simple server using [NodeJS](https://nodejs.org) and [Express](http://expressjs.com/) for serving the compiled game files and assets.

## Quickstart

You will need [GulpJS](http://gulpjs.com/) globally installed to build your project, so make sure you have it:

```
npm install -g gulp-cli
```

After you've [downloaded](https://github.com/massung/phaser-template/archive/master.zip) or [forked](https://github.com/massung/phaser-template) this repository, you'll need to install all the required [NodeJS](https://nodejs.org) packages used for compiling and running it installed local to the project.

```
phaser-template (master)$ npm install
```

At this point, you can already build and launch the template as-is:

```
phaser-template (master)$ gulp build
[10:40:14] Using gulpfile e:\phaser-projects\phaser-template\gulpfile.js
[10:40:14] Starting 'build'...

phaser-template (master)$ .\node_modules\.bin\electron.cmd .
```

Now, we'll dive into using Visual Studio Code.

## Using Visual Studio Code

Open [Visual Studio Code](http://code.visualstudio.com) and `File -> Open Folder...` to where the template directory is. 

Next, open the Debug side panel (or press `Ctrl+Shift+D`). There should be three launch options:

* `Launch` runs the game using Electron.
* `Debug` runs the game using Electron and attaches the debugger.
* `Server` runs the game using Express as a local server on port 5858.

*NOTE: If you want to be able to set breakpoints, single step, and inspect variables, you'll need to install the [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) extension.*

To compile your game code, simply press `Ctrl+Shift+B`, and then launch the currently selected option with `F5`. If you choose the `Server` option, open your browser to [localhost:5858](http://localhost:5858/).

## Basic Framework

Here's a quick breakdown of the top-level folders and files:

* `.vscode/` holds config files used by VS Code to build and run.
* `assets/` is where you put source data that isn't public.
* `src/` is where your game's source code lives.
* `www/` is where your compiled game lives.
* `gulpfile.js` is the gulp build script.
* `main.js` is the Electron main source code file.
* `server.js` is the Express server source code file.

Here's the `src/` folder breakdown:

* `src/game.ts` is the entry point of your game.
* `src/states.ts` imports all your states.
* `src/boot.ts` is a default, initial state.

Here's the `www/` folder breakdown:

* `www/data/` is where all the public/baked assets are stored.
* `www/js/` is where your compiled JavaScript and Phaser sources are.
* `www/index.html` is the HTML page for the game.
