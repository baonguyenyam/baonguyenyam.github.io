module.exports = function (gulp, $, browserSync) {
	gulp.task('copy-data', function () {
		return gulp.src([
				'./src/data/**.*',
			])
			.pipe(gulp.dest('./docs/data'));
	});
};

