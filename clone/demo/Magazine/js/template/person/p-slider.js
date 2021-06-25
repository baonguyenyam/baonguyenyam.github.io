;$(document).ready(function() {
"use strict";

  $(".cc-person-slider .owl-carousel").owlCarousel({
    items:4,
    margin:25,
    loop:true,
    center:false,
    startPosition:1, //Bat dau o slider
    nav:true,
    navRewind:false,
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
  
});


$(window).load(function() {
"use strict";

});


$(window).resize(function() {
"use strict";

});


$(function(){

});


