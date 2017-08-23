var gulp = require('gulp'),
  paths = require('../gulpconfig').paths,
  argv = require('yargs').argv;

gulp.task('copy:fonts', function () {
  var dest = argv.production ? paths.dist.fonts : paths.build.fonts;

  return gulp.src(paths.src.fonts)
    .pipe(gulp.dest(dest));
});