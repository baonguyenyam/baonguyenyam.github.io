module.exports = function (gulp, $, browserSync) {
	gulp.task('copy-files', function () {
		return gulp.src([
				'./src/*.*',
				'./clone/*.*',
			])
			.pipe(gulp.dest('./docs'));
	});
};

