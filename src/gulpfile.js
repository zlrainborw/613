var gulp=require('gulp');
var server=require('gulp-webserver');
var path=require('path');
var fs=require('fs');
var url=require('url');
var data=require('./src/data/data.json');

gulp.task('server',function(){
    gulp.src('./src')
    .pipe(server({
        port:9090,
        open:true,
        middleware:function(req,res,next){
                var pathname=url.parse(req.url).pathname;
                if(pathname==='/api/list'){
                    res.end(JSON.stringify(data))
                }
            next();
        }
    }))
})