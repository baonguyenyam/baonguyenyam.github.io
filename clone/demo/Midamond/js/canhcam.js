;$(document).ready(function() {
"use strict";

//Search////////////////////////////////////////////////
  $("#dropdownSearchBtn").click(function(){
    $(this).hide();
    $(".search").fadeToggle(200, function(){$("#searchinput").focus();});
    return false;      
  });
  $("#searchclose").click(function(){
    $(".search").fadeToggle(200, function(){$("#dropdownSearchBtn").show();});
    return false;      
  });


//Sticky Header//////////////////////////////////////////////////////////////
  // $('#header').scrollToFixed();
  $('.titlepage').scrollToFixed({ marginTop: 50 });

//Menu Hover//////////////////////////////////////////////////////////////
  $('.dropdown').hover(function () {
      $(this).toggleClass('open');
  });  

//Accordion Arrow//////////////////////////////////////////////////////////////
  $(".panel-group .panel-title a").click(function() {
    $(this).children('i').toggleClass('fa-rotate-90');
  });


//owlCarousel//////////////////////////////////////////////////////////////

  $(".cc-carousel.relates .owl-carousel").owlCarousel({
    items:4,
    margin:15,
    loop:true,
    nav:true,
    lazyLoad: true,
    navRewind:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    slideBy:1,
    dots:false,
    responsive:{
        0:{items:1},
        600:{items:2},
        1000:{items:4}
      }
  });


  $(".cc-carousel.products .owl-carousel").owlCarousel({
    items:3,
    margin:15,
    loop:true,
    nav:true,
    lazyLoad: true,
    navRewind:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    slideBy:1,
    dots:false,
    responsive:{
        0:{items:1},
        600:{items:2},
        1000:{items:3}
      }
  });

  $(".cc-carousel.customnavi .owl-carousel").owlCarousel({
    items:4,
    margin:10,
    loop:true,
    nav:true,
    lazyLoad: true,
    navRewind:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    slideBy:1,
    dots:false,
    responsive:{
        0:{items:1},
        600:{items:2},
        1000:{items:4,nav:false}
      }
  });

  // Custom Navigation Events
  $(".next").click(function(){
    $(".cc-carousel.customnavi .owl-carousel").trigger('next.owl.carousel', [300]);
  })
  $(".prev").click(function(){
    $(".cc-carousel.customnavi .owl-carousel").trigger('prev.owl.carousel', [300]);
  })
     

//Slider//////////////////////////////////////////////////////////////
  var revapiadvanced;
  revapiadvanced = jQuery('.indexslider .tp-banner').revolution({
    delay:4000,
          startwidth:1900,
          startheight:550,

          hideThumbs:300,

          thumbWidth:150,
          thumbHeight:50,
          thumbAmount:3,

          navigationType:"bullet",                // bullet, thumb, none
          navigationArrows:"solo",
          navigationStyle:"round",


          touchenabled:"on",
          onHoverStop:"on"    
  });

// bind to button click
  jQuery(".sliderbutton a").click(apiHandler)

  function apiHandler(e) {
    switch (e.currentTarget.id) {
      case "prev":
        revapiadvanced.revprev()
      break;
      case "next":
        revapiadvanced.revnext()
      break;
    }
    return false;
  }  




/////////////////////////////////////////////////////////////////////////
  //Gmap Toggle
  $('.collapse').on('show.bs.collapse', function(e){
    var newfa = $(this).find('iframe');
    var ABCVa = $(this).find('iframe').attr('src');
       setTimeout(function(){
          newfa.attr('src',ABCVa);
          newfa.height('400px');
          newfa.width('100%');
     }, 100);
  });

//Gmap Modal
  $('.modal').on('show.bs.modal', function(e){
    var newf = $(this).find('iframe');
    var ABCV = $(this).find('iframe').attr('src');
     setTimeout(function(){
        newf.attr('src',ABCV);
        newf.height('400px');
        newf.width('100%');
   }, 100);
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
  // $('.scroll-pane').jScrollPane();
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
  // mixItUp
  // mixItUp
  $('.mixItUp').mixItUp({
    selectors: {
      target: '.newmix'
    }
  });
  // TinyNav.js 1
  $('.tinynavmain').tinyNav({
    active: 'selected',
    indent: '→',
    label: 'Menu',
    // header: 'Navigation' // Writing any title with this option triggers the header
  });

});


