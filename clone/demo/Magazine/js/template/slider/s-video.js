;$(document).ready(function() {
"use strict";


  var revapifullvideo;
  revapifullvideo = jQuery('.cc-rv-slider-basic.fullscreen .tp-banner').revolution({
    startwidth: 1170,
    startheight: 500,
    onHoverStop:"off",
    fullScreen: "on",
    fullWidth:"off",
    navigationType:"none",
    navigationArrows:"none",
    navigationStyle:"none",
    minFullScreenHeight: "320",
    videoJsPath: "js/plugins/videojs/",
    //videoJsPath: "/js/plugins/videojs/",
    fullScreenOffsetContainer: "header"
  });
  revapifullvideo.bind("revolution.slide.onchange",function (e,data) {
      var demotext = data.slideIndex;
      if(demotext==1){
          //
      } else{
          //
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


