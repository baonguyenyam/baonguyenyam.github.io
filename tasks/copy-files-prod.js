module.exports = function (gulp, $, browserSync) {
	gulp.task('copy-files-prod', function () {
		return gulp.src([
				'./clone/**/*',
			])
			.pipe(gulp.dest('./docs'));
	});
};

