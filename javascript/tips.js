$(function(){
    $("div.tooltip").css("opacity","1.0").hide()
    $("#bai_gai").mouseover(function(){
        $("div.tooltip").fadeIn().css({
            "top":$(this).offset().top-10+"px",
            "left":$(this).offset().left+$(this).width()+"px"
        });
    }).mouseout(function(){
        $("div.tooltip").fadeOut()
    })
})



$(function(){
    $("div.tooltip02").css("opacity","0.9").hide()
    $("#tips02").mouseover(function(){
        $("div.tooltip02").fadeIn().css({
            "top":$(this).offset().top+$(this).height()+"px",
            "left":$(this).offset().left+40+"px"
        });
    }).mouseout(function(){
        $("div.tooltip02").fadeOut()
    })
})



// JavaScript Document