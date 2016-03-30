module.exports = function(grunt) {

  // Project configuration.

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      js: {
        src: ['js/**/*.js', 'js/global.js'], //input
        dest: 'build/global.min.js', //output
      },
      css: {
        src: 'sass/*.scss', //input
        dest: 'build/main.css', //output
      },
    },

    sass: {
      dist: { // Target
        options: { // Target options... 'expanded'
          style: 'compressed'
        },
        files: { // Dictionary of files
          'build/main.css': 'sass/main.scss', // 'destination': 'source'
        }
      }
    },

    watch: {
      js: {
        files: ['js/**/*.js'],
        tasks: ['concat:js'],
        },
      //},
      css: {
        files: ['sass/**/*.scss', 'sass/*.scss'],
        tasks: ['concat:css'],
        },
      },

  });


  // Load the plugin that provides the task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
 

  // Default task(s).
  grunt.registerTask('default', ['concat', 'sass', 'watch']);
  //grunt.registerTask('default', ['concat', 'sass']);
  //grunt.registerTask('default', ['sass', 'watch', 'concat']);
 

};