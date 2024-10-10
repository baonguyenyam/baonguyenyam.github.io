;function autoCutStr(prefix) {

    if (!prefix || prefix === undefined) {
        prefix = "autoCutStr_";
    }
    $('[class^="' + prefix + '"]').each(function () {
        if ($(this).length > 0) {
            var str = $(this).html();
            str = str.replace('<br/>', '');
            str = str.replace('<br>', '');
            $(this).html(str);
            var len = parseInt($(this).attr("class").substr($(this).attr("class").lastIndexOf("_") + 1));
            var length = str.length;
            if (length > len) {
                if (str.charAt(len) == ' ') {
                    str = str.substr(0, len);
                }
                else {
                    str = str.substr(0, len);
                    str = str.substr(0, str.lastIndexOf(" "));
                }
                $(this).html(str + "...");
            }
        }

    });
};

;$(document).ready(function() {
"use strict";

    $('.dropdown').hover(function() {
         $(this).toggleClass('open');
    });
    
$('body').prepend('<div id="fb-root"></div>');

//Breakcbum
//$('.name_title').append($('.breadcrum li a.active').find('span').html());
$('.breadcrumbsline').detach().appendTo('.breakcum');
$('.tit').append($('.breakcum li a.active').find('span').html());

//search
  $("#searchbtn a, #top-search-trigger .close").click(function() {
    $('#top-search-trigger').toggleClass('open');
  });
  
//owlCarousel//////////////////////////////////////////////////////////////
  $(".sliderlist").owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:false,
    autoplayTimeout:0,
    autoplayHoverPause:true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots:false,
    responsive:{
        0:{items:1,nav:true},
        600:{items:2,nav:true},
        1000:{items:3,nav:true}
      }
  });

  $(".slidernopad").owlCarousel({
    items:1,
    margin:0,
    loop:true,
    startPosition:0, //Bat dau o slider
    nav:true,
    navRewind:false,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots:false,
    autoHeight : true,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
      }
  });  

  $(".slider").owlCarousel({
    items:10,
    margin:0,
    loop:true,
    startPosition:0, //Bat dau o slider
    nav:true,
    autoplay:true,
    navRewind:false,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots:false,
    responsive:{
        0:{items:4},
        600:{items:6},
        1000:{items:10}
      }
  });  

  $(".sliderplace, .placedetails").owlCarousel({
    items:3,
    margin:20,
    loop:true,
    startPosition:0, //Bat dau o slider
    nav:true,
    navRewind:false,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots:false,
    responsive:{
        0:{items:1},
        600:{items:2},
        1000:{items:3}
      }
  });  

//Slider//////////////////////////////////////////////////////////////
  var revapi;
  revapi = jQuery('.srrslider.basic .tp-banner').revolution({
    delay:9000,
    startwidth:850,
    startheight:400,
    hideThumbs:10,
    thumbWidth:160,
    thumbHeight:90,
    thumbAmount:5,

    navigationType:"thumb",
    navigationHAlign:"center",
    navigationVAlign:"bottom",
    navigationHOffset:0,
    navigationVOffset:0,

    soloArrowLeftHalign:"left",
    soloArrowLeftValign:"center",
    soloArrowLeftHOffset:0,
    soloArrowLeftVOffset:0,

    soloArrowRightHalign:"right",
    soloArrowRightValign:"center",
    soloArrowRightHOffset:0,
    soloArrowRightVOffset:0,    
  });

  var revapiplace;
  revapiplace = jQuery('.srrslider.place .tp-banner').revolution({
    delay:9000,
    startwidth:550,
    startheight:310,
    hideThumbs:10,
    thumbWidth:100,
    thumbHeight:55,
    thumbAmount:5,

    navigationType:"thumb",
    navigationHAlign:"center",
    navigationVAlign:"bottom",
    navigationHOffset:0,
    navigationVOffset:0,

    soloArrowLeftHalign:"left",
    soloArrowLeftValign:"center",
    soloArrowLeftHOffset:0,
    soloArrowLeftVOffset:0,

    soloArrowRightHalign:"right",
    soloArrowRightValign:"center",
    soloArrowRightHOffset:0,
    soloArrowRightVOffset:0,    
  });

  var revapiadvanced;
  revapiadvanced = jQuery('.srrslider.advanced .tp-banner').revolution({
    delay:9000,
    startwidth:1170,
    startheight:500,
    fullWidth:"on",
    forceFullWidth:"on",

    hideThumbs:0,
    thumbWidth:85,
    thumbHeight:40,
    thumbAmount:3,

    navigationType:"thumb",
    //navigationArrows:"none",
    //navigationStyle:"round",

    navigationHAlign:"center",
    navigationVAlign:"bottom",
    navigationHOffset:0,
    navigationVOffset:-30,

    soloArrowLeftHalign:"left",
    soloArrowLeftValign:"center",
    soloArrowLeftHOffset:0,
    soloArrowLeftVOffset:0,

    soloArrowRightHalign:"right",
    soloArrowRightValign:"center",
    soloArrowRightHOffset:0,
    soloArrowRightVOffset:0,

    touchenabled:"on",
    onHoverStop:"on"
  });

    $('.amaps').fancybox({
        // 'autoScale'    : false, // not valid in v2.x, use autoSize instead
        // 'transitionIn' : 'none', // not valid in v2.x, use openEffect instead
        // 'transitionOut': 'none', // not valid in v2.x, use closeEffect instead
        autoSize: false,
        openEffect: 'none',
        closeEffect: 'none',
        type: "iframe",
        iframe: {
            preload: false // this will prevent to place map off center
        }
    });   

//Accordion Arrow//////////////////////////////////////////////////////////////
  $(".panel-group .panel-title a").click(function() {
    $(this).children('i').toggleClass('fa-rotate-90');
  });

  //Gmap Loading
  $('[id^=collapse]').on('show.bs.collapse', function(e){
     $(this).find('iframe').attr('src', $(this).find('iframe').attr('src'));
     $('iframe').height('400px');
     $('iframe').width('100%');
  });

  //Gmap Loading
  $('[id^=modal]').on('show.bs.modal', function(e){
     $(this).find('iframe').attr('src', $(this).find('iframe').attr('src'));
     $('iframe').height('400px');
     $('iframe').width('100%');
  });

});

/*==========================================================================================================================================================================================
=WINDOWS LOAD===============================================================================================================================================================================
===========================================================================================================================================================================================*/
$(window).load(function() {
"use strict";



});

/*==========================================================================================================================================================================================
=WINDOWS RESIZE===============================================================================================================================================================================
===========================================================================================================================================================================================*/
$(window).resize(function() {
"use strict";


});

/*==========================================================================================================================================================================================
=FUNCTIONS==================================================================================================================================================================================
===========================================================================================================================================================================================*/
$(function(){
  $('.scroll-pane').jScrollPane();
  $('html').scrollUp({
    scrollName: 'scrollUp-text', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
    activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
  //Tab Responsive
  fakewaffle.responsiveTabs(['xs', 'sm']);
});