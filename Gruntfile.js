module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      options: {
         transform: [ require('grunt-react').browserify ]
       },
      app: {
        src: 'src/main.js',
        dest: 'build/binky.js'
      }
    },
    react: {
      files: {
        expand: true,
        cwd: 'src/components',
        src: ['**/*.jsx'],
        dest: 'build',
        ext: '.js'
      }
    },
    watch: {
      src: {
        files: ['src/**/*.js'],
        tasks: ['browserify']
      },
      jsx: {
        files: ['src/**/*.jsx'],
        tasks: ['browserify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-bower');

  grunt.registerTask('default', ['browserify']);
};
