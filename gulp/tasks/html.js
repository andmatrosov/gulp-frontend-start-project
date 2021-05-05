import gulp from 'gulp';
import config from '../config';

export const htmlBuild = () => (
  gulp.src(`${config.src.root}/*.html`)
  .pipe(gulp.dest(`${config.dest.html}`))
);

export const htmlWatch = () =>
  gulp.watch(`${config.src.root}/*.html`, htmlBuild);