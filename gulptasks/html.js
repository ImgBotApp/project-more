var gulp = require('gulp'),
  config = require('../gulpconfig'),
  nunjucksRender = require('gulp-nunjucks-render'),
  data = require('gulp-data'),
  argv = require('yargs').argv,
  production = argv.production;

gulp.task('build:html', function () {
  var baseDir = production ? config.paths.dist : config.paths.build;

  return gulp.src(config.paths.src.templates_sections)
    .pipe(data(function (file) {
      var sectionName = file.relative.split('.njk')[0];
      return {
        section: sectionName
      }
    }))
    .pipe(nunjucksRender({
      path: config.paths.src.templates_dir,
      ext: '.html',
      inheritExtension: false,
      manageEnv: function (environment) {
        environment.addGlobal('projectName', config.etc.projectName);
        environment.addGlobal('projectFilesName', config.etc.formattedName);
      }
    }))
    .pipe(gulp.dest(baseDir.root));
});
