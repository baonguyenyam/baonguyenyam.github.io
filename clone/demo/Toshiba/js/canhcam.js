/**
 * VienSoi - the best Web Solutions Provider - http://www.canhcam.vn
 * 156 Nguyen Van Thu, District 1, Ho Chi Minh City, Viet Nam.       
 * Phone: (+84) 8 38238364 – Fax: (+84) 8 38238365 - Email: info@canhcam.vn 
 * Facebook: https://www.facebook.com/canhcam.vn 
 */
; var wdW = 0, wdH = 0;
function winresize(){
    wdW = $(window).width();
    wdH = $(window).height();

    if(wdW>740 && wdW<960){
        $('.listpro .pro-img').each(function(index, el) {
            $(this).height($(this).parent().height())
        });
    }
        
}

$(document).ready(function() {
    winresize();
    var slcrr = 0;
    var timeoutID;
    var sltotal = $('.slide-item').length;
    var delaytimer = 0;
    
    function showNextItem(){
        if(!$('.at-slider').hasClass('isPlay')){
            $('.at-slider').addClass('isPlay');
            slcrr ++;
            if(slcrr == sltotal)(slcrr = 0)
            showItem(slcrr);
        }
    }
    function showPrevItem(){
        if(!$('.at-slider').hasClass('isPlay')){
            $('.at-slider').addClass('isPlay');
            slcrr --;
            if(slcrr == -1)(slcrr = sltotal-1)
            showItem(slcrr);
        }
    }
    
    
    $('.at-nav li').click(function(){
        var nitem = $(this).index()
        if(!$('.at-slider').hasClass('isPlay')){
            $('.at-slider').addClass('isPlay');
            showItem(nitem);
        }
        
    })

    $('.slide-next').click(function(event) {
        showNextItem();
        return false;
    });
    $('.slide-prev').click(function(event) {
        showPrevItem();
        return false;
    });

    function showItem(id){
        $('.at-slider').addClass('isPlay');
        slcrr = id;
        if($('.slcrr').length){
            // if($('.slcrr').hasClass('gotoright')){
            //     $('.slcrr').find('.container div').animate({'right':'-960px','opacity':0},1000,'easeInExpo');
            // }else{
            //     $('.slcrr').find('.container div').animate({'left':'-960px','opacity':0},1000,'easeInExpo');
            // }
            
            $('.slcrr').fadeOut(1200,function(){
                $(this).removeClass('slcrr');

            });
        }
        $('.slide-item').removeClass('slcrr').eq(id).addClass('slcrr').addClass('playslider')
        $('.slide-item').eq(id).find('.right>*').css({'position':'relative','right':'100px','opacity':0})
        $('.slide-item').eq(id).delay(delaytimer).fadeIn(1000,function(){
            $('.at-nav li').removeClass().eq(id).addClass('active');
            $(this).find('.right>*').each(function(index, el) {
                $(this).delay(index*300).animate({'right':'0','opacity':1},800,'easeOutExpo');
            });
            setTimeout(function(){
                $('.slide-item').removeClass('playslider');
                $('.at-slider').removeClass('isPlay');
            },2000)
           
        })
        delaytimer = 1000;
        clearTimeout(timeoutID);
        timeoutID = setTimeout(function(){showNextItem();} , 8000);
    }
    
    showItem(0);
    //timeoutID = setTimeout(function(){showItem(1);} , 6000);
    // timeoutID = setTimeout(function(){showNextItem();} , 8000);
});
$(window).resize(function(){
    winresize()
})
$(window).load(function(){
    winresize()
})