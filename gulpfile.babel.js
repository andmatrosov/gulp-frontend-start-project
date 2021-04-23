import gulp from 'gulp';
import config from './gulp/config';
import clean from './gulp/tasks/clean';
import server from './gulp/tasks/server';
import { scriptsBuild, scriptsWatch } from './gulp/tasks/scripts';
import { sassBuild, sassWatch } from './gulp/tasks/styles';

config.setInv();

export const build = gulp.series(clean, gulp.parallel(scriptsBuild, sassBuild));

export const watch = gulp.series(
  // build,
  server,
  gulp.parallel(scriptsWatch, sassWatch)
);

exports.sass = sassBuild;
