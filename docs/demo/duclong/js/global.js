;$(document).ready(function() {

"use strict";

  $(".panel-group .panel-title a").click(function() {
    $(this).children('i').toggleClass('fa-rotate-90');
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

  //Change IMG Source
  $("[data-changeimg-src]").click(function() {
    var backanim = $(this).attr('data-changeimg-src');
    var backanimto = $(this).attr('data-changeimg');
    $('#' + backanimto).fadeIn('slow', function() {
      $(this).attr('src', '' + backanim + '');
    });
  });


/* Index Slider
  ==========================================*/
//Products Slider
  var revapi;
  revapi = jQuery('#indexslider .tp-banner').revolution({
    //dottedOverlay:"twoxtwo",
    delay:4000,
          startwidth:780,
          startheight:780,

          hideThumbs:300,

          thumbWidth:150,
          thumbHeight:50,
          thumbAmount:3,

          navigationType:"bullet",                // bullet, thumb, none
          navigationArrows:"solo",
          navigationStyle:"round",

          navigationHAlign:"center",
          navigationHOffset:0,
          navigationVOffset:20,

          soloArrowLeftHalign:"left",
          soloArrowLeftHOffset:0,
          soloArrowLeftVOffset:0,

          soloArrowRightHalign:"right",
          soloArrowRightHOffset:0,
          soloArrowRightVOffset:0,
          touchenabled:"on",
          onHoverStop:"on"
  });

  var revapi2;
  revapi2 = jQuery('#minsliderdetails .tp-banner').revolution({
    //dottedOverlay:"twoxtwo",
    delay:4000,
          startwidth:780,
          startheight:400,

          hideThumbs:300,

          thumbWidth:150,
          thumbHeight:50,
          thumbAmount:3,

          navigationType:"thumb",                // bullet, thumb, none
          navigationArrows:"solo",
          navigationStyle:"round",

          navigationHAlign:"center",
          navigationHOffset:0,
          navigationVOffset:20,

          soloArrowLeftHalign:"left",
          soloArrowLeftHOffset:0,
          soloArrowLeftVOffset:0,

          soloArrowRightHalign:"right",
          soloArrowRightHOffset:0,
          soloArrowRightVOffset:0,
          touchenabled:"on",
          onHoverStop:"on"
  });

  $('.newsticker').newsTicker({
    max_rows: 1,
    duration: 4000,
    prevButton: $('#nt-example1-prev'),
    nextButton: $('#nt-example1-next')
  });    
  
  //Carousel
  $(".products .slider").owlCarousel({
    items: 4,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [768, 2],
    itemsMobile: [479, 1],
    lazyLoad: true,
    navigation: true,
    paginationNumbers: false,
    autoHeight: false,
    autoPlay: true,
    scrollPerPage: true
  });



  $('.productsreview').bxSlider({
    pagerCustom: '#bx-pager'
  });



  /* Header Sticky 
  ==========================================*/
  //$("#header").sticky({
  //  topSpacing: 0
  //});




  // NiceScroll
  //$("html").niceScroll();



  //Control
  $("#control .con").click(function() {
    $("#control").toggleClass('open');
  });



  //Parallax background
  $('.pax').parallax("50%", 0);
  $('.title-full').parallax("50%", 0.9);



/*
  $('#videos').videoBG({
    position:"fixed",
    zIndex: 0,
    mp4: './videos/tunnel_animation.mp4',
    ogv: './videos/tunnel_animation.ogv',
    webm: './videos/tunnel_animation.webm',
    poster: './images/slider-bg-03.jpg',
    opacity:1,
    fullscreen:false,
    scale: true
  });
*/


});


/*===========================================================*/



$(window).load(function() {

  //Scrollbar
  $(".scrollbar").mCustomScrollbar();

});