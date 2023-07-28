$(document).ready(function(){

    // 마우스가 움직이는 값을 찾아라

    $(window).mousemove(function(e){

        let x=e.pageX;
        let y=e.pageY;

        $('.cursor').css({'left':x,'top':y})
    })

// 커서가 em안에 들어갔을때에 커서에 보더색이 바뀌어라.

$('.main p em').mouseenter(function(){

    $('.cursor').addClass('style1')
})
$('.main p em').mouseleave(function(){

    $('.cursor').removeClass('style1')
})


$('.main p span').mouseenter(function(){

    $('.cursor').addClass('style2')
})
$('.main p span').mouseleave(function(){

    $('.cursor').removeClass('style2')
})


})