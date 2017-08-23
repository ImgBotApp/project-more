var gulp = require('gulp'),
  config = require('../gulpconfig'),
  stylus = require('gulp-stylus'),
  stylusIconFont = require('stylus-iconfont'),
  autoprefixer = require('autoprefixer-stylus'),
  import_tree = require('stylus-import-tree'),
  cssmin = require('gulp-minify-css'),
  gulpIf = require('gulp-if'),
  argv = require('yargs').argv,
  production = argv.production;

gulp.task('build:styles', function () {
  var baseDir = production ? config.paths.dist : config.paths.build,
    fontFactory = new stylusIconFont({
      glyphsDir: config.paths.src.svg_dir,
      outputDir: baseDir.fonts,
      fontFacePath: '../fonts/',
      watchMode: false
    });

  return gulp.src(config.paths.src.styles_main)
    .pipe(stylus({
      use: [fontFactory.register, autoprefixer('last 2 versions')],
      define: {
        import_tree: import_tree
      }
    }))
    .pipe(gulpIf(production, cssmin({processImport: false})))
    .pipe(gulp.dest(baseDir.css))
    .on('end', function () {
      fontFactory.run();
    });
});