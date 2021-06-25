;$(document).ready(function() {
"use strict";

//Sticky Header//////////////////////////////////////////////////////////////
  // $("#header").sticky({
  //   topSpacing: 0
  // });  
  // $(".titlepage").sticky({
  //   topSpacing: 150
  // }); 

  $('.drag').drags();

  $('#header').scrollToFixed(); 
  $('.titlepage').scrollToFixed({marginTop: 50});

  $('.dropdown').hover(function() {
       $(this).toggleClass('open');
  });    

//Accordion Arrow//////////////////////////////////////////////////////////////
  $(".panel-group .panel-title a").click(function() {
    $(this).children('i').toggleClass('fa-rotate-180');
    $(this).children('#name').toggleClass('show');
  });


// ToggleMenu
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    $(this).parent().toggleClass("active");
  });    

  $(".drag").click(function(e) {
    e.preventDefault();
    $(this).children('.ActionMenu').toggleClass("active");
  });  

  $("#pullmenucms").click(function(e) {
    e.preventDefault();
    $(this).parents('.cmsadminpanel').toggleClass("toggled");
    $(this).children('i').toggleClass('fa-rotate-180');
  });

  $("#setposet li a").click(function(e) {
    e.preventDefault();
    $(this).parents('ul').find('li').removeClass();
    $(this).parent().toggleClass("active");
    var setposet = $(this).attr('data-poset');
    if(setposet!==""){
      $(".adminpanel").removeClass().addClass('adminpanel '+ setposet);
      $(".cmsadminpanel").removeClass().addClass('cmsadminpanel '+ setposet);
    }
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

