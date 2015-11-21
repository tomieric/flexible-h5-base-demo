var gulp = require('gulp')
var less = require('gulp-less')
var px2rem = require('gulp-px3rem')

gulp.task('less', function() {
	return gulp.src('./less/main.less')
				.pipe(less())
				.pipe(px2rem())
				.pipe(gulp.dest('./css'))
});

gulp.task('watch', function() {
	gulp.watch(['./less/**'], ['less'])
})

gulp.task('default', ['less', 'watch'])