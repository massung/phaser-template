let fs = require('fs');

// compile to browser unified file and transform with tsc
let browserify = require('browserify');
let tsify = require('tsify');

// the main source module
let source = "./src/game.ts";
let target = './www/public/js/game.js';

// build task
desc('Compile TypeScript sources and Browserify.');
task('build', (args) => {
    let out = fs.createWriteStream(target);

    browserify({debug: true})
        .add(source)
        .plugin(tsify, {})
        .bundle()
        .on('error', (err) => console.error(err.toString()))
        .pipe(out);
});
