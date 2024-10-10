;$(document).ready(function() {
"use strict";

//Accordion Rotate Arrow//////////////////////////////////////////////////////////////
  $(".accordion-rotate .panel-group .panel-title a").click(function() {
  	$(this).parents('.panel-group').find('i.fa-rotate-90').toggleClass('fa-rotate-90');
    $(this).children('i').toggleClass('fa-rotate-90');
  });

//Accordion Change Arrow//////////////////////////////////////////////////////////////
	$('.accordion-change .collapse').on('shown.bs.collapse', function(){
		$(this).parent().find(".fa-plus-square").removeClass("fa-plus-square").addClass("fa-minus-square");
	}).on('hidden.bs.collapse', function(){
		$(this).parent().find(".fa-minus-square").removeClass("fa-minus-square").addClass("fa-plus-square");
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


