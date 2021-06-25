module.exports = function (gulp, $, browserSync) {
	gulp.task('clean', function () {
		return gulp.src([
			'./docs/**/*.*',
			'!./docs/demo/**/*.*',
			'!./docs/editor/**/*.*',
			'!./docs/fpt/**/*.*',
			'!./docs/old/**/*.*',
		], {read: false, allowEmpty: true })
			.pipe($.clean({force: true}));
	});
};
