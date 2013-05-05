module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
	
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
	
    qunit: {
      files: ['test/**/*.html']
    },
	
    jshint: {
      files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
	
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    },
	
	jasmine: {
		pivotal: {
			src: 'src/**/*.js',
			options: {
				specs: 'spec/tests/*Spec.js',
				helpers: 'spec/runtimes/*.html'
			}
		}
	},
	
	gcc: {
	    dist: {
			options: {
				compilation_level: 'ADVANCED_OPTIMIZATIONS',
				create_source_map: 'dist/<%= pkg.name %>.min.js.map'
			},
			src: 'src/**/*.js',
			dest: 'dist/<%= pkg.name %>.min.js'
		}
	}
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-gcc');

  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['concat', 'uglify']);
  
  //grunt.registerTask('jasmine', ['jasmine']);
  
//  grunt.registerTask('gcc', ['gcc']);

};