const gulp = require('gulp');
const zip = require('gulp-zip');
const rimraf = require('gulp-rimraf');

gulp.task('build', ['zip']);

gulp.task('zip',['rimraf'], () => {
    return gulp.src(['app.js', 'extensions.js', '*.txt'])
        .pipe(zip('bphack.zip'))
        .pipe(gulp.dest('bin'));
});

gulp.task('rimraf', () => {
    return gulp.src('./dist/*', {read: false})
    .pipe(rimraf({force:true}));
});