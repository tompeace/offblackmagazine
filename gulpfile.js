const gulp = require('gulp');
const Path = require('path');
const browserSync = require('browser-sync').create();
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const gulpif = require('gulp-if');
const flatten = require('gulp-flatten');
const uglify = require('gulp-uglify');
const streamify = require('gulp-streamify');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const literalify = require('literalify');
const babelify = require('babelify');
const babelEs2015 = require('babel-preset-env');
const babelReact = require('babel-preset-react');
const deamdify = require('deamdify');
const postcss = require('gulp-postcss');
const postcssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const customProperties = require('postcss-custom-properties');
const customMedia = require('postcss-custom-media');
const calc = require('postcss-calc');


const dev = true;

const config = {
    styles: {
        dev: dev,
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
        dev: dev,
        src: './src/',
        dest: './build/js',
        watch: './src/**/*',
        literalify: {
            'react/addons': 'window.React',
            'react': 'window.React'
        }
    }
};

/**
 * React
 */
gulp.task('react', () => {
    const b = browserify({
        entries: [Path.join(process.cwd(), config.react.src, 'index.js')],
        debug: dev
    });
    const bundle = function() {
        return b.bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(gulpif(!dev, streamify(uglify())))
        .pipe(gulp.dest(config.react.dest));
    };
    b.transform(babelify, {
        presets: [
            require('babel-preset-env'),
            require('babel-preset-react')
        ]
    });
    b.transform(deamdify);
    b.transform(
        {global: true},
        literalify.configure(config.react.literalify)
    );
    b.on('update', bundle);
    b.on('err', (err) => {
        console.log(err);
        this.emit('end');
    });
    bundle();
});

/**
 * Styles
 */
gulp.task('styles', () => {
    let processors = [
        postcssImport(),
        customProperties(),
        customMedia(),
        calc(),
        autoprefixer(config.styles.autoprefixer)
    ];
    if (!dev) {
        processors.push(cssnano());
    }
    return gulp.src(Path.join(process.cwd(), config.styles.src))
        .pipe(postcss(processors))
        .pipe(gulp.dest(config.styles.dest));
});


/**
 * Images
 */
gulp.task('images', () => {
    return gulp.src(Path.join(process.cwd(), config.images.src, '**/*'))
        .pipe(flatten())
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(config.images.dest));
});


gulp.task('fonts', () => {
    return gulp.src(config.fonts.src)
    .pipe(flatten())
    .pipe(gulp.dest(config.fonts.dest));
});

// watch
gulp.task('watch', ['react', 'styles', 'images', 'fonts'], () => {
    gulp.watch('./assets/css/**/*.css', ['styles']);
    gulp.watch(config.react.watch + '{*.js,*.jsx,**/*.js,**/*.jsx}', ['react'])
    gulp.watch(config.fonts.src, ['fonts']);
    gulp.watch(config.images.src + '/**/*.{jpg,png,gif}', ['images']);
});


/**
 * Server
 */
gulp.task('server', ['watch'], () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    // const server = nodemon({
    //     script: 'index.html',
    //     ext: 'js jsx html',
    //     verbose: false
    // });
});

// build
gulp.task('default', ['react', 'styles', 'images', 'fonts']);
