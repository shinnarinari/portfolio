$(document).ready(function(){

    $(window).scroll(function(){
        let sc = $(this).scrollTop()
        let aof = $('.bigBox>section').eq(0).offset().top;
        let con =$('.content').eq(2).offset().top;

        if(sc<aof){
            $('.slideImg').removeClass('on')
        }
        if(sc>aof){
            $('.slideImg').addClass('on')
        }
        if(sc>con){
            $('.slideImg').removeClass('on')
        }

        let st = $('.story').offset().top

        if(sc>st) {
            setTimeout(function(){
                $('.story .meail .storyImg').addClass('on')
            },0)
        }
    })

    // hero 이미지 슬라이드
    let si=0;

    setInterval(function(){

        si++;
        if(si==3)si=0;

    $('.heroBox li').eq(si-1).css({'left':0}).stop().animate({'left':'-100%'},800); 
    $('.heroBox li').eq(si).css({'left':'100%'}).stop().animate({'left':'0'},800);

    },2000)

    // 팝업창

    $('.up li').click(function(){
        let i= $(this).index()
        console.log(i)
        $('.popup01').removeClass('on')
        $('.popup01').eq(i).addClass('on')
    })
    $('.popup01 span').click(function(){
        $('.popup01').removeClass('on')
    })

    $('.down li').click(function(){
        let p= $(this).index()
        console.log(p)
        $('.popup02').removeClass('on')
        $('.popup02').eq(p).addClass('on')
    })
    $('.popup02 span').click(function(){
        $('.popup02').removeClass('on')
    })

    // 굿즈탭바 구조 만들기 
    $('.goodsTab li').click(function(){

        let aa= $(this).index()

        $('.goodsTab li').removeClass('on')
        $(this).addClass('on')
        $('.goodslist ul').removeClass('on')
        $('.goodslist ul').eq(aa).addClass('on')
    })

})