import gulp from 'gulp';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';
import gcmq from 'gulp-group-css-media-queries';
import cleanCSS from 'gulp-clean-css';
import gulpif from 'gulp-if';
import rename from 'gulp-rename';
import config from '../config';

export const sassBuild = () =>
  gulp
    .src(`${config.src.sass}/**/main.scss`, { sourscemaps: config.siDev})
    .pipe(plumber())
    .pipe(sass({
      outputStyle: "expanded"
    }))
    .pipe(gulpif(config.isProd, gcmq()))
    .pipe(gulpif(config.isProd, autoprefixer()))
    .pipe(gulp.dest(config.dest.css))
    .pipe(gulpif(config.isProd, cleanCSS({ level: 2 })))
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(gulp.dest(config.dest.css, {sourcemaps: config.isDev }));

export const sassWatch = () =>
  gulp.watch(`${config.src.sass}/**/*.scss`, sassBuild);
