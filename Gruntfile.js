/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// Task configuration.
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				unused: true,
				boss: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true
				}
			},
			gruntfile: {
				src: 'Gruntfile.js'
			},
			lib_test: {
				src: ['lib/**/*.js', 'test/**/*.js']
			}
		},
		qunit: {
			files: ['test/**/*.html']
		},
		watch: {
			gruntfile: {
				files: '<%= jshint.gruntfile.src %>',
				tasks: ['jshint:gruntfile']
			},
			lib_test: {
				files: '<%= jshint.lib_test.src %>',
				tasks: ['jshint:lib_test', 'qunit']
			}
		},
		bower: {
		    install: {
		       //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
				options:{targetDir: "./app/lib"}
		    }
		},
		wiredep:{
			task:{
			
				src: ["./app/index.html"]
			}
		}
	});

	// These plugins provide necessary tasks.
//	grunt.loadNpmTasks('grunt-contrib-qunit');
//	grunt.loadNpmTasks('grunt-contrib-jshint');
//	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-wiredep');
	
	// Default task.
//	grunt.registerTask('default', ['jshint', 'qunit']);


};
