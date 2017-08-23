var gulp = require('gulp'),
  config = require('../gulpconfig'),
  ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src(config.paths.dist.all)
    .pipe(ghPages());
});