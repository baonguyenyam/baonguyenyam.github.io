

///////////////////////////////////
// HEADER
///////////////////////////////////
function setHeader(elm) {
	var mmn;
	if ($(window).width <= 768) {
		mmn = 70;
	} else {
		mmn = 120;
	}
	if (elm >= mmn) {
		$("header").addClass("active");
	} else {
		$("header").removeClass("active");
	}
}
$(document).ready(function () {
	var mmn;
	if ($(window).width <= 768) {
		mmn = 70;
	} else {
		mmn = 120;
	}
	$("header").addClass("fixedheader");
	if ($(window).scrollTop() >= mmn) {
		setHeader($(window).scrollTop());
	}
	if ($("header").hasClass("fixedheader")) {
		$("main").addClass("main-fixedheader");
	}

});
// Fixed Header
$(window).scroll(function () {
	setHeader($(document).scrollTop());
});
