;
$(document).ready(function() {

  $("#header").sticky({
    topSpacing: 0
  });  

//Carousel
  $(".brands .slider").owlCarousel({
    items: 4,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [768, 2],
    itemsMobile: [479, 1],
    lazyLoad: true,
    navigation: true,
    paginationNumbers: false,
    autoHeight: false,
    autoPlay: false,
    margin:20,
    pagination : false,
    navigationText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    scrollPerPage: true
  });


//Carousel
  $(".products .sliderwomen").owlCarousel({
    items: 4,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [768, 2],
    itemsMobile: [479, 1],
    lazyLoad: true,
    navigation: true,
    paginationNumbers: false,
    autoHeight: false,
    autoPlay: false,
    margin:20,
    pagination : false,
    navigationText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    scrollPerPage: true
  });  



//Products Slider
  var revapi;
  revapi = jQuery('#minslider .tp-banner, #indexslider .tp-banner').revolution({
    //dottedOverlay:"twoxtwo",
    delay:4000,
          startwidth:1140,
          startheight:500,

          hideThumbs:300,

          thumbWidth:150,
          thumbHeight:50,
          thumbAmount:3,

          navigationType:"none",
          navigationArrows:"solo",
          navigationStyle:"round",

          navigationHAlign:"center",
          navigationHOffset:0,
          navigationVOffset:0,

          soloArrowLeftHalign:"left",
          soloArrowLeftHOffset:50,
          soloArrowLeftVOffset:0,

          soloArrowRightHalign:"right",
          soloArrowRightHOffset:50,
          soloArrowRightVOffset:0,
          touchenabled:"on",
          onHoverStop:"on"
  });



});

/*===========================================================*/
$(window).load(function() {

});