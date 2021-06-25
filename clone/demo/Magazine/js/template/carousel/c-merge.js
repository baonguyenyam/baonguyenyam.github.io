;$(document).ready(function() {
"use strict";

  $(".cc-carousel.merge .owl-carousel").owlCarousel({
    items:5,
    margin:0,
    loop:true,
    nav:false,
    lazyLoad: true,
    navRewind:true,
    autoplay:false,
    autoplayTimeout:3000,
    merge:true,
    autoplayHoverPause:true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    slideBy:1,
    dots:true,
    responsive:{
        0:{items:1,mergeFit:false},
        600:{items:1},
        1000:{items:5}
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


