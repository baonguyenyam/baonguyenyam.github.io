module.exports = function (gulp, $, browserSync) {
	gulp.task('concat-js', function () {
		return gulp.src([
				'bower_components/jquery/dist/jquery.min.js',
				// 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
				'bower_components/popper.js/dist/umd/popper.min.js',
				'bower_components/bootstrap/dist/js/bootstrap.min.js',
				// Phần Plugins
				'bower_components/owl.carousel/dist/owl.carousel.min.js',
				'bower_components/fancybox/dist/jquery.fancybox.min.js',
				'bower_components/particles.js/particles.min.js',
				'bower_components/typed.js/lib/typed.min.js',
			])
			.pipe($.concat('nguyen.js'))
			.pipe(gulp.dest('./docs/js'));
	});
};
