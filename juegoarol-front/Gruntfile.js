module.exports = function(grunt) {

    externalSources = []

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        uglify: {

            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },

            app: {
                src: ['app/js/**/*.js', 'app/js/*.js'],
                dest: 'app/dist/app.js'
            },

            libs: {
                src: externalSources,
                dest: 'app/dist/libs.js'
            }

        },

        watch: {
            files: ['**/*.js'],
            tasks: ['uglify']
        },

        connect: {

            devserver: {
                options: {
                    port: 9001,
                    base: 'html',
                    directory: 'html',
                }
            }

        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'uglify',
        'connect:devserver',
        'watch'
    ]);

};
