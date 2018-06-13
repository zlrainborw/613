require(['jquery'],function($){
    // alert(1)
    $.ajax({
        url:'/api/list',
        dataType:'json',
        success:function(res){
            console.log(res)
        },
        error:function(err){
            console.log(err)
        }
    })
})