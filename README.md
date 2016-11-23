# Phaser Template

This is a template project for [Phaser](http://phaser.io/), [TypeScript](http://www.typescriptlang.org/), and [Visual Studio Code](http://code.visualstudio.com). It is already setup to launch as an application with [Electron](http://electron.atom.io/) or as a simple server using [NodeJS](https://nodejs.org) and [Express](http://expressjs.com/) for serving the compiled game files and assets.

## Quickstart

After you've [downloaded](https://github.com/massung/phaser-template/archive/master.zip) or [forked](https://github.com/massung/phaser-template) this repository, you'll next need to install [Electron](http://electron.atom.io/) and/or [Express](http://expressjs.com/). Assuming you want to try both...

```
phaser-template (master)$ npm install electron --save
phaser-template (master)$ npm install express --save
```

At this point, you can already launch the template as-is via Electron:

```
phaser-template (master)$ .\node_modules\bin\electron.cmd .
```

Next, we'll dive into using Visual Studio Code.

## Using Visual Studio Code

Open [Visual Studio Code](http://code.visualstudio.com) and `File -> Open Folder...` to where the template directory is. 

Next, open the Debug side panel (or press `Ctrl+Shift+D`). There should be three launch options:

* `Launch` runs the game using Electron.
* `Debug` runs the game using Electron and attaches the debugger.
* `Server` runs the game using Express as a local server on port 5858.

*NOTE: If you want to be able to debug your game, you'll need to install the [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) extension.*

To compile your game code, simply press `Ctrl+Shift+B`, and then launch the currently selected option with `F5`. If you choose the `Server` option, open your browser to [localhost:5858](http://localhost:5858/).

## Basic Framework

Here's a quick breakdown of the folders and files:

* `.vscode/` holds config files used by VS Code to build and run.
* `bin/` is where your compiled game lives.
* `bin/assets/` is where you put source data that isn't public.
* `bin/public/data/` is where your game assets should go.
* `phaser/` is where TypeScript descriptor files live for code completion, etc.
* `server/` is where the Express server source code is.
* `src/` is where your game's source code lives.
* `main.js` is the Electron main source code file.
* `package.json` is the Electron configuration file.
* `tsconfig.json` is the TypeScript configuration file.
