'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass');


/**
 * @description
 * Pega todos os arquivos JS internos do app e joga para a pasta public/assets/js fazendo uglify
 */

gulp.task('concatjs', function () {
    return gulp.src([
    	'resources/js/*.js',
    ])
        .pipe(concat('app.js'))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest('public/assets/js'));
});

/**
 * @description
 * Concatena arquivos JS externos e jogar e usa uglify para minificar tudo assim você juntas todos os arquivos de terceiros em uma coisa só.
 */

gulp.task('concatjsvendors', function () {
    return gulp.src([
    	'node_modules/jquery/dist/jquery.min.js'

    ])
        .pipe(concat('vendor.js'))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest('./public/assets/js'));
});


/**
 * @description
 * Concatena arquivos CSS externos
 */

gulp.task('concatcssvendors', function () {
    return gulp.src([
        //caso precise colocar algo de css de vendors
        // 'bootstrap/dist/css/bootstrap.min.css'
    ])
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('./public/assets/css'));
});


/**
 * @description
 * Watch de todos os arquivos JS internos do app
 */

gulp.task('watch', function () {
    gulp.watch('resources/js/**/*.js', ['concatjs']);
    // gulp.watch('./resources/assets/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['concatcssvendors','concatjsvendors','concatjs']);