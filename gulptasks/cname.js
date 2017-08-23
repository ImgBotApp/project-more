var gulp = require('gulp'),
  config = require('../gulpconfig'),
  fs = require('fs'),
  domain = config.etc.domain;

gulp.task('create:cname', function () {
  if (domain) {
    try {
      fs.writeFileSync(config.paths.dist.root + '/CNAME', config.etc.domain);
    } catch (e) {
      console.error(e);
    }
  } else {
    console.log('Skipping task: No custom domain');
  }
});