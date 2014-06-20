module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
        dist: {
            options: {
              style: 'expanded'
            },
            files: {
                'css/style.css': 'src/css/style.scss',
                'css/pygments.css': 'src/css/pygments.scss'
            }
        }
    },
    cssmin: {
      combine: {
        files: {
          'css/style.min.css': ['css/style.css', 'css/pygments.css']
        }
      }
    },
    watch: {
      css: {
        files: 'src/css/*.scss',
        tasks: ['sass'],
        options: {
          debounceDelay: 250
        }
      },
      // Reload the watcher when this config file changes
      grunt: {
        files: ['Gruntfile.js'],
        options: {
          reload: true
        }
      }
    }
});

  // Load all required tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('dev', ['watch']);
  grunt.registerTask('min', ['cssmin']);
};