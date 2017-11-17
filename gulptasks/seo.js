var gulp = require('gulp'),
  config = require('../gulpconfig'),
  argv = require('yargs').argv,
  production = argv.production;

gulp.task('copy:seo', function () {
  var baseDir = production ? config.paths.dist : config.paths.build;
  return gulp.src(config.paths.src.seo) //
    .pipe(gulp.dest(baseDir.root));
});