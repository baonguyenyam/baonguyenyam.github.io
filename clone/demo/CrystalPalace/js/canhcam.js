;$(document).ready(function() {
"use strict";

//Sticky Header//////////////////////////////////////////////////////////////
    $("header").sticky({
        topSpacing: 0
    });  

    $('.dropdown').hover(function() {
         $(this).toggleClass('open');
    });  


//Slider//////////////////////////////////////////////////////////////
  var revapiadvanced;
  revapiadvanced = jQuery('.srrslider.advanced .tp-banner').revolution({
    delay:4000,
    startwidth:1920,
    startheight:660,
    hideThumbs:10,
    fullWidth:"on",
    forceFullWidth:"on",

    navigationType:"none",
    //navigationArrows:"none",
    //navigationStyle:"round",

    navigationHAlign:"center",
    navigationVAlign:"bottom",
    navigationHOffset:0,
    navigationVOffset:-20,

    soloArrowLeftHalign:"left",
    soloArrowLeftValign:"center",
    soloArrowLeftHOffset:0,
    soloArrowLeftVOffset:0,

    soloArrowRightHalign:"right",
    soloArrowRightValign:"center",
    soloArrowRightHOffset:0,
    soloArrowRightVOffset:0,

    touchenabled:"on",
    onHoverStop:"on"
  });

//Slider//////////////////////////////////////////////////////////////
  var revapiadvanced;
  revapiadvanced = jQuery('.srrslider.mini .tp-banner').revolution({
    delay:4000,
    startwidth:1920,
    startheight:350,
    hideThumbs:10,
    fullWidth:"on",
    forceFullWidth:"on",

    navigationType:"none",
    //navigationArrows:"none",
    //navigationStyle:"round",

    navigationHAlign:"center",
    navigationVAlign:"bottom",
    navigationHOffset:0,
    navigationVOffset:0,

    soloArrowLeftHalign:"left",
    soloArrowLeftValign:"center",
    soloArrowLeftHOffset:0,
    soloArrowLeftVOffset:0,

    soloArrowRightHalign:"right",
    soloArrowRightValign:"center",
    soloArrowRightHOffset:0,
    soloArrowRightVOffset:0,

    touchenabled:"on",
    onHoverStop:"on"
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

  function initialization(){
    $('#fullpage').fullpage({
      anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06', 'page07'],
      //sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
      menu: '#globalmenu',
      navigation: false,
      slidesNavigation: false,
      navigationPosition: 'right',
      navigationTooltips: ['Page 01','Page 02','Page 03','Page 04','Page 05','Page 06','Page 07'],
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

 if ($('#fullpage').length){

  initialization();
  $('#moveSlideRight,#moveSlideRight2').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveSlideRight();
  });
  $('#moveSlideLeft,#moveSlideLeft2').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveSlideLeft();
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


 }




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



$(window).scroll( function(){
  if ($('#fullpage').length){
      var bottom_of_about = $('.news').offset().top + $('.news').outerHeight();  //options 1
      var top_of_about = $('.news').offset().top; //options 2
      var top_of_slider3 = $('#opt1').offset().top; //options 3
      var bottom_of_windowabout = $(window).scrollTop() + $(window).height();

      if( bottom_of_windowabout > top_of_about ){
        //$('footer').hide();
        $('#scrollUp-text').css("opacity","1");
      } else{
        //$('footer').show();
        $('#scrollUp-text').css("opacity","0");
      }

      if( bottom_of_windowabout < top_of_slider3 || bottom_of_windowabout > top_of_about ){
        $('footer').hide();
      } else{
        $('footer').show();
      }
  }
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