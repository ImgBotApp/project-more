var gulp = require('gulp'),
  config = require('./gulpconfig'),
  requireDir = require('require-dir'),
  argv = require('yargs').argv,
  production = argv.production,
  buildTasks = [
    'build:bower',
    'build:styles',
    'build:scripts',
    'copy:fonts',
    'copy:images',
    'build:html',
    'copy:nginx'
  ],
  defaultTasks = [
    'build'
  ];

requireDir('./gulptasks');

if (production) {
  buildTasks.push('create:cname');
} else {
  defaultTasks.push('serve', 'watch');
}

gulp.task('build', buildTasks);

gulp.task('watch', function () {
  gulp.watch(config.paths.bower(''), ['build:bower', 'server:reload']);
  gulp.watch([config.paths.src.styles_all, config.paths.src.svg_files], ['build:styles', 'server:reload']);
  gulp.watch(config.paths.src.scripts_all, ['build:scripts', 'server:reload']);
  gulp.watch(config.paths.src.fonts, ['copy:fonts', 'server:reload']);
  gulp.watch(config.paths.src.img, ['copy:images', 'server:reload']);
  gulp.watch(config.paths.src.templates_all, ['build:html', 'server:reload']);
});

gulp.task('serve', ['server:run', 'server:reload']);

gulp.task('default', defaultTasks);