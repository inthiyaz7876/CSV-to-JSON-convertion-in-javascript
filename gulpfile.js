const gulp = require('gulp');
const eslint = require('gulp-eslint');
gulp.task('eslint', function() {
  return gulp.src([
     'js/**/*', '!dist/**/*'
    ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('build', ['eslint']);
