var gulp       = require('gulp'),
	watch        = require('gulp-watch'),
	nib          = require('nib'),
	concat       = require('gulp-concat'),
	minifyCss    = require('gulp-minify-css'),
	spritesmith  = require('gulp.spritesmith'),
	stylus       = require('gulp-stylus'),
  map          = require('gulp-sourcemaps');


gulp.task('style', function() {
	gulp.src(['./public/styl/index.styl',
            './public/styl/tea.styl'
			     ])
    .pipe(map.init())
		.pipe(stylus({
				import: __dirname + '/public/styl/conf.styl',
				compress: true,
				use:[nib()]
			}))
    .pipe(map.write())
		.pipe(gulp.dest('./public/css/'));
});	

gulp.task('css', function() {
  return gulp.src(['./public/css/reset.css',
  				         // './public/css/ie-fonts.css'
                   './public/css/animation.css',
                   './public/css/fontello-codes.css',
                   './public/css/fontello-embedded.css',
                   './public/css/fontello.css',
                   './public/css/index.css',
                   './public/css/tea.css'
                  ])
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('minify-css', function() {
  return gulp.src('./build/css/*.css')
    .pipe(minifyCss({compatibility: 'ie7'}))
    .pipe(gulp.dest('./build/css-min/'));
});

gulp.task('sprite', function() {
    var spriteData = 
        gulp.src('./public/sprites/*.*') // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: '../images/sprite.png',
                cssName: 'sprite.css'
            }));

    spriteData.img.pipe(gulp.dest('./build/images/')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('./public/css/')); // путь, куда сохраняем стили
});

gulp.task('watch', function() {
	gulp.watch('./public/styl/*.styl', ['style']);
	gulp.watch('./public/css/*.css', ['css'/*, 'minify-css'*/]);
});


gulp.task('default', ['watch', 'sprite']);

console.log(__dirname);