;$(document).ready(function() {
"use strict";

//Slider//////////////////////////////////////////////////////////////
  var revapi;
  revapi = jQuery('.tp-banner').revolution({
      delay:15000,
      startwidth:1170,
      startheight:500,
      hideThumbs:10,
      onHoverStop:"on",
      fullWidth:"off",
      fullScreen: "on",
      navigationType:"none",
      navigationArrows:"none",
      navigationStyle:"none",
      minFullScreenHeight: "320",
      videoJsPath: "js/plugins/videojs/",
      fullScreenOffsetContainer: "header"
  });

  // jQuery("input").click(apiHandler)
  //   function apiHandler(e) {
  //     switch (e.currentTarget.id) {
  //       case "current":
  //         alert(revapi.revcurrentslide()+$(this).attr('data-types'));
  //       break;
  //     }
  //     return false;
  //   }





  revapi.bind("revolution.slide.onchange",function (e,data) {
    var setid = ''+data.slideIndex;
    var backanimT = data.slideIndex;
    if(setid==1 || setid==5 || setid==6){
      $('footer').hide();
      $('#header').hide();
    }
    else{
      $('footer').show(50);
      $('#header').show(50);
      //alert($(this).find('li').attr('data-masterspeed'));
    }


    //owlCarousel//////////////////////////////////////////////////////////////
      $(".owl-carousel.basic").owlCarousel({
        animateOut: 'bounceOutUp',
        animateIn: 'bounceInUp',
        loop:true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        freeDrag: false,
        dots:false,
        margin:0,
        responsiveClass:true,
        autoplay:true,
        //autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{items:1,nav:false},
            600:{items:1,nav:false},
            1000:{items:1,nav:false}
          }
      });


  });


  //Load background for div
  $("[data-bg]").each(function() {
    var backanim = $(this).attr('data-bg');
    $(this).css("background-image", "url(" + backanim + ")");
  });
  $("[data-bg-size]").each(function() {
    var backanim = $(this).attr('data-bg-size');
    $(this).css("background-size", backanim);
  });
  $("[data-color]").each(function() {
    var backanimc = $(this).attr('data-color');
    $(this).css("background-color", "#" + backanimc + "");
  });
  $("[data-bg-po]").each(function() {
    var backanimc = $(this).attr('data-bg-po');
    $(this).css("background-position", "#" + backanimc + "");
  });  

  //Change IMG Source
  $("[data-changeimg-src]").click(function() {
    var backanim = $(this).attr('data-changeimg-src');
    var backanimto = $(this).attr('data-changeimg');
    $('#' + backanimto).fadeIn('slow', function() {
      $(this).attr('src', '' + backanim + '');
    });
  });



});
/*==========================================================================================================================================================================================
=WINDOWS LOAD===============================================================================================================================================================================
===========================================================================================================================================================================================*/
$(window).load(function() {
"use strict";





  $(".marquee").marquee({
      pauseOnHover: false,
      pauseSpeed: 5000,
      scrollSpeed: 20
  })


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



});