import { src, dest } from 'gulp';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import plumber from 'gulp-plumber';
import cleanCSS from 'gulp-clean-css';
import { reload, notify } from './serve';
import config from './config';
const sass = require('gulp-sass')(require('sass'));


const { pathSrc, pathDest, sassIndex } = config;

/* Production ***************************** */
export const sassProd = () =>
  src(`${pathSrc}${sassIndex}`)
    .pipe(
      sass({
        includePaths: ['node_modules'],
      }).on('error', sass.logError),
    )

    .pipe(
      autoprefixer({
        cascade: false,
      }),
    )
    .pipe(cleanCSS())
    .pipe(concat('bundle.css'))
    .pipe(dest(pathDest));

/* Development ***************************** */
const sassDev = () =>
  src(`${pathSrc}${sassIndex}`)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        includePaths: ['node_modules'],
      }).on('error', ({ message }) => {
        console.error(message);
        notify(message, 3000);
        this.emit('end');
      }),
    )
    .pipe(
      autoprefixer({
        cascade: false,
      }),
    )
    .pipe(concat('bundle.css'))
    .pipe(sourcemaps.write())
    .pipe(dest(pathDest))
    .pipe(reload({ stream: true }));

export default sassDev;
