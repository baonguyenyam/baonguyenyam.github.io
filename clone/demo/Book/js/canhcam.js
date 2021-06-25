;$(document).ready(function() {
"use strict";

//Cutting text////////////////////////////////////////////////
$('.fixedJustify').textTailor({
  fit: false,
  justify: true
});


//owlCarousel//////////////////////////////////////////////////////////////
  $(".owl-carousel.bookslider").owlCarousel({
    items:5,
    margin:25,
    loop:true,
    nav:true,
    navRewind:false,
    navText: ["", ""],
    dots:false,
    responsive:{
        0:{items:1},
        600:{items:3},
        1000:{items:5}
      }
  });  

//Accordion Arrow//////////////////////////////////////////////////////////////
  $(".panel-group .panel-title a").click(function() {
    $(this).children('i').toggleClass('fa-rotate-90');
  });

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
  //Tab Responsive
  fakewaffle.responsiveTabs(['xs', 'sm']);
});