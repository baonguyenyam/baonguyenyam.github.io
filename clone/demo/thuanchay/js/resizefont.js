$(document).ready(function () {
	var min=9; 	
	var max=16;	
	var reset = $('p').css('fontSize'); 
	var elm = $('p,td,th,div,a,li,span');  
	var size = str_replace(reset, 'px', ''); 
	$('a.fontSizePlus').click(function() {
		if (size<=max) {
			size++;
			elm.css({'fontSize' : size});
			$("ul.fontsize").removeClass("bigfont");
			$("ul.fontsize").addClass("smallfont");
		}
		return false;	
		
	});

	$('a.fontSizeMinus').click(function() {
		if (size>=min) {
			size--;
			elm.css({'fontSize' : size});
			$("ul.fontsize").removeClass("smallfont");
			$("ul.fontsize").addClass("bigfont");
		}
		return false;	
		
	});
	$('a.fontReset').click(function () {
		 elm.css({'fontSize' : reset});		
	});
		
});
function str_replace(haystack, needle, replacement) {
	var temp = haystack.split(needle);
	return temp.join(replacement);
}
