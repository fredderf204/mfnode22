module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //mocha for unit tests
    UnitTest: {
      test: {
        src: ['test/unit.js']
      }
    },
    //code security check
    nsp: {
      package: grunt.file.readJSON('package.json')
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-nsp');

  // Default task(s).
  grunt.registerTask('default', ['UnitTest','nsp']);

};