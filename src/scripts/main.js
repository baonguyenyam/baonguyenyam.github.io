///////////////////////////////////
// SLIDER
///////////////////////////////////
$(document).ready(function () {
	// Phần Slider
	$(".home-slider .owl-carousel").owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		navText: [
			'<i class="fa fa-chevron-left"></i>',
			'<i class="fa fa-chevron-right"></i>',
		],
	});
	// Phần Clients
	$(".home-clients .owl-carousel").owlCarousel({
		items: 2,
		nav: true,
		dots: false,
		navText: [
			'<i class="fa fa-chevron-left"></i>',
			'<i class="fa fa-chevron-right"></i>',
		],
		responsive: {
			// breakpoint from 480 up
			480: {
				items: 2,
			},
			// breakpoint from 768 up
			768: {
				items: 4,
			},
			// breakpoint from 992 up
			992: {
				items: 6,
			},
		},
	});
	// Phần testimonial
	$(".section-testimonial .owl-carousel").owlCarousel({
		items: 1,
		nav: false,
		autoplay: true,
		dots: true,
		loop: true,
		navText: [
			'<i class="fa fa-chevron-left"></i>',
			'<i class="fa fa-chevron-right"></i>',
		],
		responsive: {
			// breakpoint from 480 up
			480: {
				items: 1,
			},
			// breakpoint from 768 up
			768: {
				items: 1,
			},
			// breakpoint from 992 up
			992: {
				items: 1,
			},
		},
	});
});

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

///////////////////////////////////
// SMOOTHLY SCROLL
///////////////////////////////////
$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function (event) {
		// On-page links
		if (
			location.pathname.replace(/^\//, "") ==
				this.pathname.replace(/^\//, "") &&
			location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length
				? target
				: $("[name=" + this.hash.slice(1) + "]");
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$("html, body").animate(
					{
						scrollTop: target.offset().top,
					},
					1000,
					function () {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) {
							// Checking if the target was focused
							return false;
						} else {
							$target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						}
					}
				);
			}
		}
	});


///////////////////////////////////
// TYPE
///////////////////////////////////
var typed = new Typed(".typed span", {
	stringsElement: "#typed-strings",
	typeSpeed: 140,
	backSpeed: 50,
	smartBackspace: true,
	loop: true,
});

///////////////////////////////////
// ANIMATION
///////////////////////////////////
$(function() {

	var $window           = $(window),
		win_height_padded = $window.height() * 1.1,
		isTouch           = Modernizr.touch;
  
	if (isTouch) { $('.flit-animation').addClass('animated'); }
  
	$window.on('scroll', revealOnScroll);
  
	function revealOnScroll() {
	  var scrolled = $window.scrollTop(),
		  win_height_padded = $window.height() * 1.1;
  
	  // Showed...
	  $(".flit-animation:not(.animated)").each(function () {
		var $this     = $(this),
			offsetTop = $this.offset().top;
  
		if (scrolled + win_height_padded> offsetTop) {
		  if ($this.data('timeout')) {
			window.setTimeout(function(){
			  $this.addClass('animated ' + $this.data('animation'));
			}, parseInt($this.data('timeout'),500));
		  } else {
			$this.addClass('animated ' + $this.data('animation'));
		  }
		}
	  });
	  // Hidden...
	 $(".flit-animation.animated").each(function (index) {
		var $this     = $(this),
			offsetTop = $this.offset().top;
		if (scrolled + win_height_padded < offsetTop) {
		  $(this).removeClass('animated fadeInUp flipInX lightSpeedIn')
		}
	  });
	}
  
	revealOnScroll();
  });
