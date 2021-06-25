$(document).ready(function() {

"use strict";

  //Index Slider
  var revapi;
  revapi = jQuery('#index .tp-banner').revolution({
    //dottedOverlay:"twoxtwo",
            delay:5000,
              startwidth:1170,
              startheight:500,
              hideThumbs:10,
              onHoverStop:"off",
              fullWidth:"on",
              fullScreen:"on",
              navigationType:"none",
              navigationArrows:"none",
              navigationStyle:"none",
              // stopAtSlide:1,             
              // stopAfterLoops:0,
              fullScreenOffsetContainer: ""
  });
  //########################################
  //  - API HANDLING  -
  //########################################



          revapi.bind("revolution.slide.onchange",function (e,data) {
            var setid = ''+data.slideIndex;
            //alert(setid);
            $(this).parents('.listslider').find('.bg').removeClass("active");
            $(this).addClass("active");
            if(setid==1){
              $('.listslider').find('.bg').removeClass("active");
              $('#room1').addClass("active");
            }
            else if(setid==2){
              $('.listslider').find('.bg').removeClass("active");
              $('#room2').addClass("active");
            }
            else if(setid==3){
              $('.listslider').find('.bg').removeClass("active");
              $('#room3').addClass("active");
            }
            else if(setid==4){
              $('.listslider').find('.bg').removeClass("active");
              $('#room4').addClass("active");
            }
            else if(setid==5){
              $('.listslider').find('.bg').removeClass("active");
              $('#room5').addClass("active");
            }
          });


          // bind to button click
          jQuery(".bg").mouseover(apiHandler)
          //jQuery(".bg").mouseover(apiHandler)

          function apiHandler(e) {
            switch (e.currentTarget.id) {
              case "room1":
                revapi.revshowslide(1);
                // $(this).parents('.listslider').find('.bg').removeClass("active");
                // $(this).addClass("active");
              break;
              case "room2":
                revapi.revshowslide(2);
                // $(this).parents('.listslider').find('.bg').removeClass("active");
                // $(this).addClass("active");
              break;
              case "room3":
                revapi.revshowslide(3);
                // $(this).parents('.listslider').find('.bg').removeClass("active");
                // $(this).addClass("active");
              break;
              case "room4":
                revapi.revshowslide(4);
                // $(this).parents('.listslider').find('.bg').removeClass("active");
                // $(this).addClass("active");
              break;
              case "room5":
                revapi.revshowslide(5);
                // $(this).parents('.listslider').find('.bg').removeClass("active");
                // $(this).addClass("active");
              break;
            }
            return false;
          }
//End Index Slider



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


});


/*===========================================================*/



$(window).load(function() {


});