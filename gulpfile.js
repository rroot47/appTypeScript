var gulp = require('gulp');
var ts = require('gulp-typescript');
 
var browserify=require('browserify');
var source=require('vinyl-source-stream');
var tsify=require('tsify');

gulp.task("html", function(){
    return gulp.src('src/*.html')
          .pipe(gulp.dest('dist'));
});

gulp.task("default", gulp.series("html",function () {
    return browserify({
        basedir:'.',
        debug:true,
        entries:['src/main.ts'],
        cache:{},
        packageCache:{}
    })
    .plugin(tsify)//ts vers js
    .bundle()//un seul fichier
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
  
    /*  gulp.src('src/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            //outFile: 'main.js'
        }))
        .pipe(gulp.dest('dist'));
    */
}));