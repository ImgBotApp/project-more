var src = './src',
  dist = './dist',
  build = './build',
  bower = './bower_components',
  package = 'project-more';

module.exports = {
  paths: {
    src: {
      styles_all: src + '/styl/**/*.styl',
      styles_main: src + '/styl/main.styl',
      svg_files: src + '/svg/**/*.svg',
      svg_dir: src + '/svg/',
      scripts_all: src + '/js/**/*.js',
      scripts_main: src + '/js/app.js',
      img: src + '/img/**/*.*',
      favicon: src + '/img/favicon/*',
      fonts: src + '/fonts/**/*.*',
      templates_all: src + '/templates/**/*.njk',
      templates_dir: src + '/templates/',
      templates_partials: src + '/templates/partials/*.njk',
      templates_sections: src + '/templates/sections/*.njk',
      root: src
    },
    build: {
      css: build + '/css/',
      js: build + '/js/',
      img: build + '/img/',
      fonts: build + '/fonts/',
      html: build + '/*.html',
      root: build
    },
    dist: {
      css: dist + '/css/',
      js: dist + '/js/',
      img: dist + '/img/',
      fonts: dist + '/fonts/',
      html: dist + '/*.html',
      all: dist + '/**/*',
      root: dist
    },
    bower: function (package) {
      return bower + '/' + package;
    }
  },
  outputs: {
    libs: function (extension) {
      return package + '.libs.' + extension;
    },
    files: function (extension) {
      return package + '.' + extension;
    }
  },
  etc: {
    domain: '',
    projectName: 'More Co.',
    formattedName: package
  }
};