module.exports = function(grunt) {
    grunt.initConfig({
        sprite:{
            all: {
                src: 'images/*',
                dest: 'images/spritesheet.png',
                destCss: 'styles/sprites.css'
            }
        },
        watch: {
            options: {
                livereLoad: true
            },
            scripts: {
                files: ['scripts/main.less'],
                tasks: ['less']
            }
        },
        less: {
            development: {
                options: {
                    paths: ["styles"]
                },
                files: {
                    "styles/main.css": "styles/main.less"
                }
            },
            production: {
                options: {
                    paths: ["styles"],
                    plugins: [
                        new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]})
                    ],
                    modifyVars: {
                        imgPath: '',
                        bgColor: 'red'
                    }
                },
                files: {
                    "styles/main.css": "styles/main.less"
                }
            }
        },
        jade: {
            files: {

                options: {
                    data: {
                        debug: false
                    },
                    pretty: true
                },

                expand: true,
                cwd: "jade/",
                src: "*.jade",
                dest: "",
                ext: ".html"
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-spritesmith');
}
