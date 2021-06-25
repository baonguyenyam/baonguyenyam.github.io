;$(document).ready(function() {
"use strict";

//Sticky Header//////////////////////////////////////////////////////////////
  $("header").sticky({
    topSpacing: 0
  });  

    $('.dropdown').hover(function() {
         $(this).toggleClass('open');
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

//owlCarousel//////////////////////////////////////////////////////////////
  $(".owl-carousel.basic").owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:false,
    autoplayTimeout:0,
    autoplayHoverPause:true,
    responsive:{
        0:{items:1,nav:false},
        600:{items:3,nav:false},
        1000:{items:4,nav:false,}
      }
  });

   $(".owl-carousel.custom").owlCarousel({
    items:6,
    margin:0,
    loop:true,
    merge:true,
    startPosition:0, //Bat dau o slider
    nav:true,
    navRewind:false,
    autoplay:true,
    autoplayTimeout:3000,
    // slideSpeed:  600,
    // paginationSpeed: 1,
    // rewindSpeed: 1000,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots:false,
    responsive:{
        0:{items:1},
        600:{items:3},
        1000:{items:6}
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

$('html').scrollUp({
    scrollName: 'scrollUp-text', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-sort-asc"></i> Lên đầu trang', // Text for element
    activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

});