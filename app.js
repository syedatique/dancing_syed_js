$(function(){
    $("button").on({
        mouseover:function(){
            $(this).css({
                left:(Math.random()*800)+"px",
                top:(Math.random()*900)+"px",
            });
        }
    });
});