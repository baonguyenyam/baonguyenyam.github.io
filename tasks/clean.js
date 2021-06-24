module.exports = function (gulp, $, browserSync) {
	gulp.task('clean', function () {
		return gulp.src('./docs', {read: false, allowEmpty: true })
			.pipe($.clean({force: true}));
	});
};
