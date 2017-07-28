import gulp from 'gulp'
import rename from 'gulp-rename'
import cleancss from 'gulp-clean-css'
import sass from 'gulp-sass'
import postcss from 'gulp-postcss'
import cssnext from 'postcss-cssnext'
import sourcemaps from 'gulp-sourcemaps'
// import config from './config/secret.js'
const isEnv = process.env.NODE_ENV == 'production'

const path = {
    dist: './dist',
    src: '/**/*',
    static: '/static/**/*',
    scss: {
        all: './src/**/*.scss',
        src: './src/ixu.scss',
        dest: './dist/css/'
    }
}
gulp.task('scss', function () {
    var plugins = [
		cssnext ({browsers: [
		  'last 5 iOS versions',
		  'last 5 Android versions',
		  'last 5 ExplorerMobile versions',
		  'last 5 ChromeAndroid versions',
		  'last 5 UCAndroid versions',
		  'last 5 FirefoxAndroid versions',
		  'last 5 OperaMobile versions',
		  'last 5 OperaMini versions',
		  'last 5 Samsung versions',

		  'last 3 Chrome versions',
		  'last 3 Firefox versions',
		  'last 3 Safari versions',
		  'last 3 Edge versions',
		]}),
	]
    return gulp.src(path.scss.src)
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(sourcemaps.init())
	.pipe(postcss(plugins))
	.pipe(gulp.dest(path.scss.dest))
	.pipe(cleancss({
        compatibility: '*' //类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
    }, function (details) {
        console.log('########## ' + details.name + ': ' + details.stats.originalSize)
        console.log('########## ' + details.name + ': ' + details.stats.minifiedSize)
    })) //执行压缩
	.pipe(rename({
    	suffix: '.min',
  	}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.scss.dest))
})

// 新版:
// var watcher = gulp.watch(path.scss.all);
gulp.task('watch:styles', function () {
	gulp.watch(path.scss.all,gulp.series('scss'))
});
/**
 * 上传到生产服务器上
 */

gulp.task('watch', gulp.series('watch:styles'))
gulp.task('default', gulp.series('watch'))
gulp.task('build', gulp.series('scss'))
// gulp.task('build:up', gulp.series('img:prod', minifyCss))

