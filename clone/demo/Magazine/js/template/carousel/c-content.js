;$(document).ready(function() {
"use strict";

  $(".cc-carousel.content .owl-carousel").owlCarousel({
    items:1,
    margin:0,
    loop:true,
    animateOut: 'fadeOut',
    smartSpeed:200,
    nav:false,
    lazyLoad: true,
    navRewind:true,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    slideBy:1,
    dots:true,
    responsive:{
        0:{items:1},
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


