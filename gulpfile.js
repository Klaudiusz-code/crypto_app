const gulp = require('gulp');
const sass = require('node-sass');
const gulp_sass = require('gulp-sass')(sass);

gulp.task('sass', () => {
    return gulp
        .src(['scss/**/*.scss', '!scss/**/_*.scss']) // --------
        .pipe(gulp_sass({outputStyle: 'expanded'}).on('error', gulp_sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', () => {
    gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass'));