;$(document).ready(function() {
"use strict";

//parallax//////////////////////////////////////////////////////////////
  $('.pax').parallax("50%", 0.3);

  // $('footer').scrollToFixed( {
  //     bottom: 0,
  //     limit: $('#about').offset().top
  // });
$(window).scroll( function(){
  var bottom_of_about = $('#about').offset().top + $('#about').outerHeight();  //options 1
  var top_of_about = $('#about').offset().top; //options 2
  var bottom_of_windowabout = $(window).scrollTop() + $(window).height();

  if( bottom_of_windowabout > top_of_about ){
    $('footer').hide();
    $('#scrollUp-text').css("opacity","1");
  } else{
    $('footer').show();
    $('#scrollUp-text').css("opacity","0");
  }
});


  function initialization(){
    $('#fullpage').fullpage({
      anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],
      //sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
      menu: '#globalmenu',
      navigation: false,
      slidesNavigation: false,
      navigationPosition: 'right',
      navigationTooltips: ['Page 01','Page 02','Page 03','Page 04','Page 05','Page 06'],
      responsive: 900,
      autoScrolling: false,
      css3: true,
      'afterLoad': function(anchorLink, index){
          if(index == 1){
            $('#ac01, #ac02').addClass('fadeInUp duration3 delay1');
          }
       },
      'onLeave': function(index, nextIndex, direction){
          $('#ac01').toggleClass('animated fadeInUp duration3 delay1', nextIndex == 1);
        }
    });
  }
  initialization();
  $('#moveSlideRight,#moveSlideRight2').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveSlideRight();
  });
  $('#moveSlideLeft,#moveSlideLeft2').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveSlideLeft();
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
  $("[data-bg-po]").each(function() {
    var backanimc = $(this).attr('data-bg-po');
    $(this).css("background-position", "#" + backanimc + "");
  });  

  //Change IMG Source
  $("[data-changeimg-src]").click(function() {
    var backanim = $(this).attr('data-changeimg-src');
    var backanimto = $(this).attr('data-changeimg');
    $('#' + backanimto).fadeIn('slow', function() {
      $(this).attr('src', '' + backanim + '');
    });
  });

//owlCarousel//////////////////////////////////////////////////////////////
  $(".owl-carousel.basic").owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:false,
    autoplayTimeout:0,
    autoplayHoverPause:true,
    responsive:{
        0:{items:1,nav:false},
        600:{items:3,nav:false},
        1000:{items:4,nav:false,}
      }
  });

   $(".owl-carousel.custom").owlCarousel({
    items:6,
    margin:0,
    loop:true,
    merge:true,
    startPosition:0, //Bat dau o slider
    nav:true,
    navRewind:false,
    autoplay:true,
    autoplayTimeout:3000,
    // slideSpeed:  600,
    // paginationSpeed: 1,
    // rewindSpeed: 1000,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots:false,
    responsive:{
        0:{items:1},
        600:{items:3},
        1000:{items:6}
      }
  });  

  var incntWidth = $('body').outerWidth();
  var incntHeight = $('#section0').outerHeight();
  $('.slider').css({'width':incntWidth+'px','height':incntHeight+'px'});

  var incntWidthBlock01 = $('.block01').innerHeight();
  var incntWidthBlock01h2 = $('.block01 h2').innerHeight();
  $('.block01 h2').css({'top':'50%','margin-top':'-'+incntWidthBlock01h2/2+'px'});

  var incntWidthBlock02 = $('.block02').innerHeight();
  var incntWidthBlock02h2 = $('.block02 h2').innerHeight();
  $('.block02 h2').css({'top':'50%','margin-top':'-'+incntWidthBlock02h2/2+'px'});

  var incntWidthBlock03 = $('.block03').innerHeight();
  var incntWidthBlock03h2 = $('.block03 h2').innerHeight();
  $('.block03 h2').css({'top':'50%','margin-top':'-'+incntWidthBlock03h2/2+'px'});

//   var revapiadvanced;
//   revapiadvanced = jQuery('.srrslider.fullscreen .tp-banner').revolution({
//     startwidth: 1170,
//     startheight: 500,
//     onHoverStop:"off",
//     fullScreen: "on",
//     fullWidth:"off",
//     navigationType:"none",
//     navigationArrows:"none",
//     navigationStyle:"none",
//     fullScreenOffsetContainer: "header"
//   });

// // bind to button click
//     jQuery("footer a").click(apiHandler)

//       function apiHandler(e) {
//         switch (e.currentTarget.id) {
//           case "slider01":
//             revapiadvanced.revshowslide(1);
//           break;
//           case "slider02":
//             revapiadvanced.revshowslide(2);
//           break;
//           case "slider03":
//             revapiadvanced.revshowslide(3);
//           break;
//           case "slider04":
//             revapiadvanced.revshowslide(4);
//           break;
//           case "slider05":
//             revapiadvanced.revshowslide(5);
//           break;
//           case "slider06":
//             revapiadvanced.revshowslide(6);
//           break;
//           case "slider07":
//             revapiadvanced.revshowslide(7);
//           break;

//         }
//         return false;
//       }

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

$('html').scrollUp({
    scrollName: 'scrollUp-text', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-sort-asc"></i> Lên đầu trang', // Text for element
    activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

});