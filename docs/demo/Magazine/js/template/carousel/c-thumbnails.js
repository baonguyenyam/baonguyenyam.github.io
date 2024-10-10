;$(document).ready(function() {
"use strict";

  $(".cc-carousel.thumbnails .owl-carousel").owlCarousel({
    items:1,
    margin:0,
    loop:true,
    nav:false,
    animateOut: 'fadeOut',
    smartSpeed:200,
    center: true,
    callbacks: true,
    URLhashListener:true,
    startPosition: 'URLHash',
    lazyLoad: true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots:false,
    responsive:{
        0:{items:1,dots:true},
        600:{items:1},
        1000:{items:1}
      }
  });


});


$(window).load(function() {
"use strict";

});


$(window).resize(function() {
"use strict";

});


$(function(){

});


