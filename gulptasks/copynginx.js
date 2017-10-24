var gulp = require('gulp'),
config = require('../gulpconfig'),
argv = require('yargs').argv,
production = argv.production;

gulp.task('copy:nginx', function () {
  var baseDir = production ? config.paths.dist : config.paths.build;
  return gulp.src(config.paths.src.nginx) // 
    .pipe(gulp.dest(baseDir.root));
});