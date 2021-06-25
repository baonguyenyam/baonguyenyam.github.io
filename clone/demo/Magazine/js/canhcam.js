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

  //Source jquery scrollto cua bootstrap 
  $('body').scrollspy({ target: '#bs-example-navbar-collapse-1' });

//Sticky Header//////////////////////////////////////////////////////////////
  $('#header.scroll2fix').scrollToFixed();
  $('.titlepage').scrollToFixed({ marginTop: 50 });

//Menu Hover//////////////////////////////////////////////////////////////
  $('.dropdown').hover(function () {
      $(this).toggleClass("open");
  });  

  $(".cc-carousel.news .owl-carousel").owlCarousel({
    items:1,
    margin:0,
    lazyLoad: true,
    navRewind:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots:true,
  });

  $(".cc-carousel.brands .owl-carousel").owlCarousel({
    items:6,
    margin:0,
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
        0:{items:2},
        600:{items:4},
        1000:{items:6}
      }
  });



});


/*==========================================================================================================================================================================================
=FUNCTIONS==================================================================================================================================================================================
===========================================================================================================================================================================================*/
$(function(){
  $('.scroll-pane').jScrollPane();
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
  
  fakewaffle.responsiveTabs(['xs', 'sm']);

});

