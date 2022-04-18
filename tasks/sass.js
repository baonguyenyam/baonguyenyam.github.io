module.exports = function (gulp, $, browserSync) {
	const sass = require('gulp-sass')(require('sass'));
	gulp.task('tao-sass', function () {
		let defaultNotification = function (err) {
			return {
				subtitle: err.plugin,
				message: err.message,
				sound: 'Funk',
				onLast: true,
			};
		};
		return gulp.src([
				'./src/styles/**/*.sass',
				'!./src/styles/{**/\_*,**/\_*/**}'
			])
			.pipe($.sourcemaps.init())
			.pipe(sass().on('error', function (err) {
				$.util.log(err);
			}).on('error', $.notify.onError(defaultNotification)))
			.pipe($.sourcemaps.write(''))
			.pipe(gulp.dest('./docs/css'))
			.pipe(browserSync.stream())
	});
};
