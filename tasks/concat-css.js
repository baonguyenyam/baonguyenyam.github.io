module.exports = function (gulp, $, browserSync) {
	gulp.task('concat-css', function () {
		return gulp.src([
				'bower_components/font-awesome-5/css/all.min.css',
				'src/css/chat.css',
				'bower_components/animate.css/animate.min.css',
				// OWL
				'bower_components/owl.carousel/dist/assets/owl.carousel.min.css',
				'bower_components/owl.carousel/dist/assets/owl.theme.default.min.css',
				'bower_components/fancybox/dist/jquery.fancybox.min.css',
			])
			.pipe($.concat('nguyen.css'))
			.pipe(gulp.dest('./docs/css'));
	});
};
