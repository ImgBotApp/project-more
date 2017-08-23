var gulp = require('gulp'),
  config = require('../gulpconfig'),
  portfinder = require('portfinder'),
  connect = require('gulp-connect'),
  argv = require('yargs').argv,
  production = argv.production,
  filesDir = production ? config.paths.dist : config.paths.build;

portfinder.basePort = 8080;

gulp.task('server:run', function() {
  portfinder.getPort(function (err, availablePort) {
    connect.server({
      port: availablePort,
      root: filesDir.root,
      livereload: true
    });
  });
});

gulp.task('server:reload', function () {
  var src = [
    filesDir.html,
    filesDir.js,
    filesDir.css,
    filesDir.fonts,
    filesDir.img
  ]
  gulp.src(src)
    .pipe(connect.reload());
});