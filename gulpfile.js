/* Importamos gulp */
const gulp = require('gulp');

/* Otros módulos que vayamos a necesitar */
// server
const browserSync = require('browser-sync').create();
const reload      = browserSync.reload;
// watch
const eslint = require('gulp-eslint');

gulp.task('lint', () => {
  return gulp.src(['src/**/*.js','!mocks/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Server
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src',
      index: 'index.html',
      https: false/*,
      middleware: [ apiFallback() ] */
    },
  });

  gulp.watch("src/app/**/*.js").on("change", reload);
});


/* El task default es el que se ejecuta cuando
no le pasamos ninguna a gulp   */
gulp.task('default', function() {
    console.log('Default');
});

/* Definimos un array con los tasks que deben ejecutarse concluida esta
gulp.task('default', ['lint'], function() {
  console.log('Executing gulp...');
});
 */

/*
gulp.task('default', ['browserSync'], function() {
    console.log('Default');
});
*/