;$(document).ready(function() {
"use strict";

/////////////////////////////////////////////////////////////////////////
  //Gmap Toggle
  $('.cc-m-multi .collapse').on('show.bs.collapse', function(e){
    var newfa = $(this).find('iframe');
    var ABCVa = $(this).find('iframe').attr('src');
       setTimeout(function(){
          newfa.attr('src',ABCVa);
          newfa.height('400px');
          newfa.width('100%');
     }, 100);
  });


//Gmap Modal
  // $('.modal').on('show.bs.modal', function(e){
  //   var newf = $(this).find('iframe');
  //   var ABCV = $(this).find('iframe').attr('src');
  //    setTimeout(function(){
  //       newf.attr('src',ABCV);
  //       newf.height('400px');
  //       newf.width('100%');
  //  }, 100);
  // });


});


$(window).load(function() {
"use strict";

});


$(window).resize(function() {
"use strict";

});


$(function(){

});


