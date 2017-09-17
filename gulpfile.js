/*
 * Bletchley Park build process
 */

const gulp = require('gulp');
const flatten = require('gulp-flatten');


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
    fonts: {
        src: './assets/src/fonts/**/*',
        dest: './assets/dest/fonts'
    },
    images: {
        src: './assets/src/images',
        dest: './assets/dest/images'
    },
    react: {
        dev: true,
        src: './src/',
        dest: './assets/dest/js',
        watch: './src/**/*',
        literalify: {
            'react/addons': 'window.React',
            'react': 'window.React'
        }
    }
};

// Tasks

require('bva-gulp-styles')(gulp, config.styles);
require('bva-gulp-react')(gulp, config.react);
require('bva-gulp-images')(gulp, config.images);

// watch
gulp.task('watch', () => {
    gulp.watch('./assets/src/css/**/*.css', ['styles']);
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
