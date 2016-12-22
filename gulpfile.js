let fs = require('fs');
let gulp = require('gulp');

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

// browserify configuration
let browserifyOptions = {
    debug: true,
    fullPaths: true,
};

// build task
gulp.task('build', (args) => {
    browserify(browserifyOptions)
        .add(source)
        .plugin(tsify, compilerOptions)
        .bundle()

        // report any errors and stop here
        .on('error', (err) => console.error(err.toString()))

        // fix up the source paths
        .pipe(mold.transformSourcesRelativeTo(outDir))

        // pull out the source maps into their own file
        .pipe(exorcist(`${target}.map`))

        // write the final js file
        .pipe(fs.createWriteStream(target));
});
