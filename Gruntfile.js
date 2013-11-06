'use strict';

module.exports = function (grunt) {
  // time it!
  require('time-grunt')(grunt);

  // skip the formalities, just load the tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    app: {
      src: 'app',
      dist: 'dist'
    },
    watch: {
      compass: {
        files: ['<%= app.src %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer']
      },
      styles: {
        files: ['<%= app.src %>/styles/{,*/}*.css'],
        tasks: ['copy:styles', 'autoprefixer']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= app.src %>/*.html',
          '.tmp/styles/{,*/}*.css',
          '{.tmp,<%= app.src %>}/scripts/{,*/}*.js',
          '<%= app.src %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
        ]
      },
      coffee: {
        files: ['<%= app.src %>/scripts/{,*/}*.coffee'],
        tasks: ['coffee:dist']
      }
    },
    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= app.src %>/scripts',
          src: '{,*/}*.coffee',
          dest: '.tmp/scripts',
          ext: '.js'
        }]
      },
      test: {
        files: [{
          expand: true,
          cwd: 'test/spec',
          src: '{,*/}*.coffee',
          dest: '.tmp/spec',
          ext: '.js'
        }]
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },
    'bower-install': {
      app: {
        html: '<%= app.src %>/index.html',
        ignorePath: '<%= app.src %>/'
      }
    },
    compass: {
      options: {
        sassDir: '<%= app.src %>/styles',
        cssDir: '.tmp/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= app.src %>/images',
        javascriptsDir: '<%= app.src %>/scripts',
        fontsDir: '<%= app.src %>/styles/fonts',
        importPath: '<%= app.src %>/bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        // outputStyle: nested, expanded, compact, compressed
        outputStyle: 'nested'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= app.dist %>/images/generated'
        }
      },
      server: {
        options: {
          debugInfo: true
        }
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['<%= app.src %>/**/*.js'],
        dest: '<%= app.dist %>/<%= pkg.name %>.js'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      files: [
        'Gruntfile.js',
        '<%= app.src %>/scripts/{,*/}*.js',
        '!<%= app.src %>/scripts/vendor/*',
        'test/spec/{,*/}*.js'
      ]
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          '<%= app.dist %>/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    useminPrepare: {
      options: {
        dest: '<%= app.dist %>'
      },
      html: '<%= app.src %>/index.html'
    },
    usemin: {
      options: {
        assetsDirs: ['<%= app.dist %>']
      },
      html: ['<%= app.dist %>/{,*/}*.html'],
      css: ['<%= app.dist %>/styles/{,*/}*.css']
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= app.src %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            '.tmp',
            'test',
            '<%= app.src %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= app.dist %>',
          livereload: false
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= app.dist %>/*',
            '!<%= app.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= app.src %>',
          dest: '<%= app.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'images/{,*/}*.{webp,gif}',
            'styles/fonts/{,*/}*.*'
          ]
        }]
      },
      styles: {
        expand: true,
        dot: true,
        cwd: '<%= app.src %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },
    concurrent: {
      server: [
        'coffee:dist',
        'compass',
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'coffee:dist',
        'compass',
        'copy:styles'
      ]
    },
    rev: {
      dist: {
        files: {
          src: [
            '<%= app.dist %>/scripts/{,*/}*.js',
            '<%= app.dist %>/styles/{,*/}*.css',
            '<%= app.dist %>/images/{,*/}*.{gif,jpeg,jpg,png,webp}',
            '<%= app.dist %>/styles/fonts/{,*/}*.*'
          ]
        }
      }
    }
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('default', [
    'jshint',
    'concat',
    'uglify'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'cssmin',
    'uglify',
    'copy:dist',
    'rev',
    'usemin'
  ]);
};
