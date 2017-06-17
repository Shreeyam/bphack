const gulp = require('gulp'),
      zip = require('gulp-zip'),
      rimraf = require('gulp-rimraf');

gulp.task('build', ['zip']);

gulp.task('zip',['rimraf'], () => {
    return gulp.src(['**/*.js', '!gulpfile.js'])
        .pipe(zip('bphack.zip'))
        .pipe(gulp.dest('bin'));
});

gulp.task('rimraf', () => {
    return gulp.src('./bin/*', {read: false})
    .pipe(rimraf({force:true}));
});