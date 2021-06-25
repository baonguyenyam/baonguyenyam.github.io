///////////////////////////////////
// MENU BUTTON
///////////////////////////////////
document.querySelectorAll(".menu").forEach((btn) => {
	btn.addEventListener("click", (e) => {
		btn.classList.toggle("active");
	});
});

///////////////////////////////////
// HOME ANIMATION TEXT
///////////////////////////////////
$(".anim-text-flow").html(function (i, html) {
	var chars = $.trim(html).split("");
	return "<span>" + chars.join("</span><span>") + "</span>";
});

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
