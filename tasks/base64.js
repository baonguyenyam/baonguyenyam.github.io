module.exports = function (gulp, $, browserSync) {
	let image64 = require('gulp-base64-inline');
	gulp.task('base64', function () {

		return gulp.src([
			'./docs/*.html',
		])
		.pipe(image64('./',{
            prefix: "",
            suffix: ""
        }))
		.pipe(gulp.dest('./docs'));
	});
};
