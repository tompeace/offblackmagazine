/*
 * Bletchley Park build process
 */

const gulp = require('gulp');
const flatten = require('gulp-flatten');
const browserSync = require('browser-sync');

const config = {
    styles: {
        dev: true,
        src: './assets/css/index.css',
        dest: './build/css',
        postcss: {},
        autoprefixer: {
            browsers: ['last 5 versions']
        }
    },
    fonts: {
        src: './assets/fonts/**/*',
        dest: './build/fonts'
    },
    images: {
        src: './assets/images',
        dest: './build/images'
    },
    react: {
        dev: true,
        src: './src/',
        dest: './build/js',
        watch: './src/**/*',
        literalify: {
            'react/addons': 'window.React',
            'react': 'window.React'
        }
    }
};

// Tasks

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

require('bva-gulp-styles')(gulp, config.styles);
require('bva-gulp-react')(gulp, config.react);
require('bva-gulp-images')(gulp, config.images);

// watch
gulp.task('watch', () => {
    gulp.watch('./assets/css/**/*.css', ['styles']);
    gulp.watch(config.react.watch + '{*.js,*.jsx,**/*.js,**/*.jsx}', ['react']);
    gulp.watch(config.fonts.src, ['fonts']);
    gulp.watch(config.images.src + '/**/*.{jpg,png,gif}', ['images']);
});

gulp.task('fonts', () => {
    return gulp.src(config.fonts.src)
        .pipe(flatten())
		.pipe(gulp.dest(config.fonts.dest));
});

// build
gulp.task('default', ['react', 'styles', 'images', 'fonts']);
