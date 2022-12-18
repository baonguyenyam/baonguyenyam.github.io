module.exports = function (gulp, $, browserSync) {
	gulp.task('css-min', function () {
		let cleanCSS = require('gulp-clean-css');
		return gulp.src([
				'./docs/css/*.css',
			])
			.pipe(cleanCSS({compatibility: 'ie8', level: {1: {specialComments: 0}}}))
			.pipe($.rename({
                suffix: '.min'
            }))
			.pipe(gulp.dest('./docs/css'));
	});
};
