/*
 * Bletchley Park build process
 */

const gulp = require('gulp');
const nodemon = require('nodemon');

const config = {
    styles: {
        dev: true,
        src: './assets/src/css/index.css',
        dest: './assets/dest/css',
        postcss: {},
        autoprefixer: {
            browsers: ['last 5 versions']
        }
    },
    react: {
        dev: true,
        src: './src/',
        dest: './assets/dest/js',
        watch: './src/components/',
        literalify: {
            'react/addons': 'window.React',
            'react': 'window.React'
        }
    }
};

// Tasks

require('bva-gulp-styles')(gulp, config.styles);
require('bva-gulp-react')(gulp, config.react);

// watch
gulp.task('watch', () => {
    gulp.watch('./assets/src/css/**/*.css', ['styles']);
    gulp.watch(config.react.watch + '{*.js,*.jsx,**/*.js,**/*.jsx}', ['react']);
});

// // server
// gulp.task('server', ['watch'], () => {
//     nodemon({
//         script: 'index.js',
//         ext: 'js jsx html'
//     });
// });

// build
gulp.task('default', ['react', 'styles']);
