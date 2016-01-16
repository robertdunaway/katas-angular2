/// <binding ProjectOpened='tsd, default' />
var onError = function (err) {
    console.log(err);
};

var gulp = require('gulp')
    , rename = require('gulp-rename')
    , sourcemaps = require('gulp-sourcemaps')
    , runSequence = require('run-sequence')
    , plumber = require('gulp-plumber')
    , clean = require('gulp-clean')
    , newer = require('gulp-newer')
    , minifyhtml = require('gulp-minify-html')
    , ts = require('gulp-typescript')
    , tslint = require('gulp-tslint')
    , tsstylish = require('gulp-tslint-stylish')
    , watch = require('gulp-watch')
    , uglify = require('gulp-uglify')
    , tsd = require('gulp-tsd')
    , tsProject = ts.createProject('tsconfig.json')
    , livereload = require('gulp-livereload')
;



gulp.task('clean-wwwroot', function () {
    return gulp.src('wwwroot', { read: false })
      .pipe(plumber({
          errorHandler: onError
      }))
      .pipe(clean());
});

gulp.task('copy-to-wwwroot', function () {
    return gulp.src(['src/**/*'])
      .pipe(plumber({
          errorHandler: onError
      }))
    .pipe(newer('wwwroot'))
    .pipe(gulp.dest('wwwroot'));
});

gulp.task('minifyhtml', function () {
    return gulp.src(['wwwroot/**/*.html', '!/**/*.min.html', '!wwwroot/lib/**/*'])
      .pipe(plumber({
          errorHandler: onError
      }))
     .pipe(sourcemaps.init())
     .pipe(minifyhtml())
     .pipe(rename({
         extname: '.min.html'
     }))
     .pipe(sourcemaps.write('./'))
     .pipe(gulp.dest('wwwroot/./'));
});

gulp.task('tscompile', function () {
    return gulp.src(['./wwwroot/**/*.ts', '!wwwroot/lib/**/*.*', '!wwwroot/css/**/*.*'])
      .pipe(plumber({
          errorHandler: onError
      }))
    .pipe(sourcemaps.init())

    .pipe(ts(tsProject))

    .pipe(rename({ extname: '.js' }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('wwwroot/./'));
});


gulp.task('tslint', function () {
    return gulp.src(['./wwwroot/**/*.ts', '!wwwroot/lib/**/*.*', '!wwwroot/css/**/*.*'])
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(tslint())
        .pipe(tslint.report('verbose', {
            emitError: false,
            sort: true,
            bell: true
        }));
});

gulp.task('tsd', function () {
    return gulp.src('./gulp_tsd.json').pipe(tsd());
});

gulp.task('libs', function () {
    return gulp.src(['bower_components/**//normalize-css/normalize.css'
                    , 'bower_components/**//font-awesome/css/font-awesome.min.css'
                    , 'bower_components/**/font-awesome/fonts/*.*'
                    , 'bower_components/**//jquery/dist/jquery.min.js'
                    , 'bower_components/**//lodash/lodash.min.js'
                    
                    // for angular2
                    , 'node_modules/**//es6-shim/es6-shim.min.js'
                    , 'node_modules/**//angular2/bundles/angular2-polyfills.min.js'
                    , 'node_modules/**//systemjs/dist/system.src.js'
                    , 'node_modules/**//rxjs/bundles/rx.min.js'
                    , 'node_modules/**//angular2/bundles/angular2.min.js'
                    , 'node_modules/**//angular2/bundles/angular2.dev.js'
                    
    ])
      .pipe(plumber({
          errorHandler: onError
      }))
      .pipe(gulp.dest('wwwroot/lib/./'));
});


gulp.task('reload', function () {
    // Change the filepath, when you want to live reload a different page in your project.
    livereload.reload("./index.min.html");
});




// ----------------------------------------------------------------
// Default Task
// ----------------------------------------------------------------
gulp.task('default', function () {
    runSequence('clean-wwwroot', 'copy-to-wwwroot', 'libs',
                ['minifyhtml', 'tscompile', 'tslint']
                , 'watch'
                );
});


gulp.task('watch', function () {

    livereload.listen();

    // ---------------------------------------------------------------
    // Watching JS files
    // ---------------------------------------------------------------
    // Copy all files except *.js files.
    gulp.watch(['src/**/*', '!bower_components/**.*'], function () { runSequence('copy-to-wwwroot'); });

    // ---------------------------------------------------------------
    // Watching TypeScript files
    // ---------------------------------------------------------------
    gulp.watch(['wwwroot/**/*.ts', '!wwwroot/lib/**/*.*', '!wwwroot/css/**/*.*'], function () { runSequence('tscompile', 'reload'); });

    // ---------------------------------------------------------------
    // Watch - Execute linters
    // ---------------------------------------------------------------
    gulp.watch(['wwwroot/**/*.ts', '!wwwroot/lib/**/*.*', '!wwwroot/css/**/*.*'], function () { runSequence('tslint'); });

    // ---------------------------------------------------------------
    // Watching HTML files
    // ---------------------------------------------------------------
    gulp.watch(['wwwroot/**/*.html', '!wwwroot/**/*.min.html', '!wwwroot/lib/**/*'], function () { runSequence('minifyhtml', 'reload'); });


});