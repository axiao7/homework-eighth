module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name1 %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/<%= pkg.name1 %>.js',
        dest: 'Project/js/<%= pkg.name1 %>.min.js'
      }
    },
    // jshint: {
    //   files: ['Gruntfile.js', 'src/js/<%= pkg.name1 %>.js'],
    //   options: {
    //     //这里是覆盖JSHint默认配置的选项
    //     globals: {
    //       jQuery: false,
    //       console: true,
    //       module: true,
    //       document: true
    //     }
    //   }
    // },
    //不实用。。。老是报错，只能看一些语法错误，不能智能识别，反而阻塞watch进程
    less: {
      production: {
        options: {
          compress: true,
        },
        files: {
          "Project/css/<%= pkg.name2 %>.min.css": "src/less/<%= pkg.name2 %>.less"
        }
      }
    },
    watch: {
      // files: ['<%= jshint.files %>'],
      // tasks: ['jshint']
      scripts: {
        files: ['src/js/<%= pkg.name1 %>.js'],
        tasks: ['uglify']
      },
      lessc: {
        files: ['src/less/<%= pkg.name2 %>.less'],
        tasks: ['less']
      }
      // files: ['src/less/<%= pkg.name2 %>.less', 'src/js/<%= pkg.name1 %>.js'],
      // tasks: ['less', 'uglify']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['watch']);

};