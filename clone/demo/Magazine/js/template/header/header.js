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



});


$(window).load(function() {
"use strict";

});


$(window).resize(function() {
"use strict";

});


$(function(){

});


