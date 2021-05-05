import gulp from 'gulp';
import config from './gulp/config';
import clean from './gulp/tasks/clean';
import server from './gulp/tasks/server';
import { scriptsBuild, scriptsWatch } from './gulp/tasks/scripts';
import { sassBuild, sassWatch } from './gulp/tasks/styles';
import { assetsBuild, assetsWatch } from './gulp/tasks/assets';
import { imagesBuild, imagesWatch } from './gulp/tasks/images';
import { spritesBuild, spritesWatch } from './gulp/tasks/sprites';
import { htmlBuild, htmlWatch } from './gulp/tasks/html';


config.setInv();

export const build = gulp.series(
  clean,
  gulp.parallel(
    scriptsBuild,
    sassBuild,
    assetsBuild,
    imagesBuild,
    spritesBuild,
    htmlBuild,
    ),
  );

export const watch = gulp.series(
  build,
  server,
  gulp.parallel(
    scriptsWatch,
    sassWatch,
    assetsWatch,
    imagesWatch,
    spritesWatch,
    htmlWatch,
    ),
);

exports.assetsWatch = assetsWatch;