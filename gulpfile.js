'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const exec = require('child_process').exec;
const webpack = require('webpack-stream');
const Server = require('karma').Server;

const paths = ['*.js', 'src/**/*.js', 'test/*_spec.js', 'models/*.js'];

var runCommand = function(command) {
  exec(command, (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    if (err !== null) {
      console.log('exec error: ' + err);
    }
  });
};

gulp.task('lint', () => {
  return gulp.src(paths)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('test', (done) => {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('watch', () => {
  gulp.watch([paths], ['lint']);
});

gulp.task('mongo-start', () => {
  var command = 'mongod --dbpath ./data';
  runCommand(command);
});

gulp.task('mongo-stop', () => {
  var command = 'mongo admin --eval "db.shutdownServer()"';
  runCommand(command);
});

gulp.task('static', function() {
  return gulp.src(['src/*.html', 'src/**/*.html', 'src/**/*.jpg', 'src/*.ico'])
    .pipe(gulp.dest('dist'));
});


gulp.task('copy-html', () => {
  return gulp.src('/src/**/*.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('webpack:dist', () => {
  return gulp.src('./entry.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      },
      module: {
        loaders: [{
          test: /\.css$/,
          loaders: ['style', 'css']
        }]
      }
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('webpack:test', () => {
  return gulp.src('./test/*_spec.js')
    .pipe(webpack({output: {filename: 'test_bundle.js'}}))
    .pipe(gulp.dest('./test'));
});

gulp.task('push', ['static', 'webpack:dist']);

gulp.task('default', ['lint', 'static', 'webpack:dist', 'webpack:test']);
