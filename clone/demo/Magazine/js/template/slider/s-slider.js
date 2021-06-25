;$(document).ready(function() {
"use strict";



  var revapifullwidth;
  revapifullwidth = jQuery('.cc-rv-slider-basic.fullwidth .tp-banner').revolution({
    delay:9000,
    startwidth:1170,
    startheight:500,
    hideThumbs:10,
    fullWidth:"on",
    forceFullWidth:"on"
  });
  revapifullwidth.bind("revolution.slide.onchange",function (e,data) {
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


