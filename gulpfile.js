var gulp = require('gulp'),
	sass = require('gulp-sass'),
	minifyCSS = require('gulp-cssnano'),
	path = require('path'),
	minifyJS = require('gulp-minify'), 
	AutoPreFixer = require('gulp-autoprefixer'),
    minifyHTML = require('gulp-htmlmin'),
    scssPath = './scss/',
    cssPath = './css/'
    bootstrap =  {
        in: './node_modules/bootstrap/scss/'
    },
	scss = {
		in: scssPath + '**/*.scss',
		out: cssPath,
		sassOpts: {
			outputStyle: 'nested',
			precison: 8,
			errLogToConsole: true,
			includePaths: [bootstrap.in]
		}
    },
    sourcemaps = require('gulp-sourcemaps');

//Default/main task:
gulp.task('main', ['doSass', 'sassWatch']);

gulp.task('doJs', function() {
    //copy JS files from source to dest:
	gulp.src(['**/*.js'])
    .pipe(minifyJS( {
        ext: { 
            min: '.min.js' 
        },
        ignoreFiles: [ '-min.js', '.min.js' ],
        noSource: true
    }))
    .pipe(gulp.dest(pdest));
});

gulp.task('bs_fonts', function() {
	return gulp.src(fonts.in)
		.pipe(gulp.dest(fonts.out));
});

gulp.task('doSass', function() {
	return gulp.src(scss.in)
        .pipe(sourcemaps.init())
		.pipe(sass(scss.sassOpts).on('error', sass.logError))
        .pipe(AutoPreFixer({ browsers: ['last 2 versions'], cascade: false }))
        .pipe(minifyCSS())
        .pipe(sourcemaps.write())
		.pipe(gulp.dest(scss.out));
});

gulp.task('sassWatch', function () {
    return gulp
            .watch(scss.in, ['doSass'])
            .on('change', function(e) {
                console.log(e.type + ' file ' + e.path)
            });
});