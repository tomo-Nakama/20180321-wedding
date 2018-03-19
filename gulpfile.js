// gulpプラグインの読みこみ
var gulp = require('gulp');

var rename = require("gulp-rename");
var replace = require('gulp-replace');
var scss = require("gulp-sass");
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();

var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');

gulp.task('bs-reload', function () {
    browserSync.reload();
});

//sources
//var scssSrc = 'scss/bootstrap/bootstrap.scss','scss/style.scss';

var scssSrc = [ 'scss/*.scss'];
var watchScss = [ 'scss/*.scss'];

//scssファイルのcss化・autoprefixer-PC
gulp.task('scss-compile', function () {
    gulp.src(scssSrc)
        .pipe(plumber({
            errorHandler: notify.onError({
            title : `ERROR : scss`,
            message : `<%= error.message %>`})
        }))
        .pipe(scss({
        outputStyle: 'expanded'
    }))
    .pipe(autoprefixer({
            browsers: ['last 4 versions','Android >= 4.0'],
            cascade: false
        }))
    .pipe(gulp.dest('css'))
    .pipe(notify('scssをコンパイルしました！'));
});

// watchタスク(scss/*?/*.scss変更時に実行するタスク)-PC
gulp.task('watch-scss', ['scss-compile'], function () {
    var watcher = gulp.watch(watchScss, ['scss-compile']);
    watcher.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

// ファイルが更新されたらブラウザをリロード
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('browser-sync-watch', ['browser-sync'], function() {
    gulp.watch("*.html", ['bs-reload']);
    gulp.watch("css/*.css", ['bs-reload']);
    gulp.watch("js/*.js", ['bs-reload']);
    gulp.watch("app/**/**/*.css", ['bs-reload']);
    gulp.watch("app/**/**/*.html", ['bs-reload']);
});

// css paths
var cssFiles = [
	'css/bootstrap.css',
	'css/style.css'
];
var cssDest = 'css/';

gulp.task('minify-css', function () {
	return gulp.src(cssFiles)
	.pipe(concat('styles.css'))
	.pipe(gulp.dest(cssDest))
	.pipe(rename('styles.min.css'))
	.pipe(cssmin())
	.pipe(gulp.dest(cssDest));
});

// gulpのデフォルト動作としてwatchを実行
// gulp.task('default', ['watch-scss']);
gulp.task('default', function() {
    runSequence('watch-scss', 'browser-sync-watch');
});

gulp.task('minify', ['minify-css']);
