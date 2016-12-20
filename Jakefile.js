let fs = require('fs');

// compile to browser unified file and transform with tsc
let browserify = require('browserify');
let exorcist = require('exorcist');
let mold = require('mold-source-map');
let tsify = require('tsify');

// where typescript sources are and compiled javascript goes
let srcDir = './src'
let outDir = './www/js'

// the main source module
let source = `${srcDir}/game.ts`;
let target = `${outDir}/game.js`;

// typescript configuration
let compilerOptions = {
    target: 'es5',
    module: 'commonjs',
    sourceMap: true,
    removeComments: true,
};

// build task
desc('Compile TypeScript sources and Browserify.');
task('build', (args) => {
    browserify({debug: true, fullPaths: true})
        .add(source)
        .plugin(tsify, compilerOptions)
        .bundle()
        .on('error', (err) => console.error(err.toString()))
        .pipe(mold.transformSourcesRelativeTo(outDir))
        .pipe(exorcist(`${target}.map`))
        .pipe(fs.createWriteStream(target));
});
