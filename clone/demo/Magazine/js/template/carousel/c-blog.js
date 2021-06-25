;$(document).ready(function() {
"use strict";

  $(".cc-carousel.blog .owl-carousel").owlCarousel({
    items:4,
    margin:20,
    loop:true,
    nav:true,
    lazyLoad: true,
    navRewind:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    slideBy:1,
    dots:true,
    responsive:{
        0:{items:1,dots:false},
        600:{items:2},
        1000:{items:4}
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


