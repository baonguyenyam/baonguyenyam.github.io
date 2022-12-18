module.exports = function (gulp, $, browserSync) {
	gulp.task('concat-js', function () {
		return gulp.src([
				'bower_components/jquery/dist/jquery.min.js',
				// 'src/vendor/macy.js',
				'src/vendor/masonry.pkgd.min.js',
				'src/vendor/imgloader.js',
				// 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
				// 'bower_components/popper.js/dist/umd/popper.min.js',
				'bower_components/bootstrap/dist/js/bootstrap.min.js',
				'src/vendor/modernizr.js',
				'src/vendor/fancybox.umd.js',
				// Phần Plugins
				// 'bower_components/owl.carousel/dist/owl.carousel.min.js',
				// 'bower_components/particles.js/particles.min.js',
				// 'bower_components/typed.js/lib/typed.min.js',
			])
			.pipe($.concat('nguyen.js'))
			.pipe(gulp.dest('./docs/js'));
	});
};
