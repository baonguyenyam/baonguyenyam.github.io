"use strict";

(function () {
  'use strict';

  var _npnb = {
    s: '&#x43;&#x6f;&#x64;&#x65;&#x20;&#x62;&#x79;&#x20;&#x4e;&#x67;&#x75;&#x79;&#x65;&#x6e;&#x20;&#x50;&#x68;&#x61;&#x6d;&#xa;&#x54;&#x65;&#x6c;&#x3a;&#x20;&#x36;&#x38;&#x32;&#x2d;&#x32;&#x30;&#x33;&#x2d;&#x31;&#x33;&#x33;&#x34;&#xa;&#x45;&#x6d;&#x61;&#x69;&#x6c;&#x3a;&#x20;&#x62;&#x61;&#x6f;&#x6e;&#x67;&#x75;&#x79;&#x65;&#x6e;&#x79;&#x61;&#x6d;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;',
    HTMLEntity: function HTMLEntity(s) {
      var t = document.createElement("textarea");
      t.innerHTML = s;
      return t.value;
    },
    init: function init() {
      document.onkeyup = function (e) {
        if (e.shiftKey && e.altKey && e.ctrlKey && e.which == 13) {
          alert(_npnb.HTMLEntity(_npnb.s));
        }
      };
    }
  };
  _npnb.init();
})();
///////////////////////////////////
// ANIMATION
///////////////////////////////////
$(function () {
  var $window = $(window),
    win_height_padded = $window.height() * 1.1,
    isTouch = Modernizr.touch;
  if (isTouch) {
    $('.flit-animation').addClass('animated');
  }
  $window.on('scroll', revealOnScroll);
  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
      win_height_padded = $window.height() * 1.1;

    // Showed...
    $(".flit-animation:not(.animated)").each(function () {
      var $this = $(this),
        offsetTop = $this.offset().top;
      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function () {
            $this.addClass('animated ' + $this.data('animation'));
          }, parseInt($this.data('timeout'), 500));
        } else {
          $this.addClass('animated ' + $this.data('animation'));
        }
      }
    });
    // Hidden...
    $(".flit-animation.animated").each(function (index) {
      var $this = $(this),
        offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated fadeInUp flipInX lightSpeedIn');
      }
    });
  }
  revealOnScroll();
});

// ///////////////////////////////////
// // SLIDER
// ///////////////////////////////////
// $(document).ready(function () {
// 	// Phần Slider
// 	$(".home-slider .owl-carousel").owlCarousel({
// 		items: 1,
// 		nav: false,
// 		dots: true,
// 		navText: [
// 			'<i class="fa fa-chevron-left"></i>',
// 			'<i class="fa fa-chevron-right"></i>',
// 		],
// 	});
// 	// Phần Clients
// 	$(".home-clients .owl-carousel").owlCarousel({
// 		items: 2,
// 		nav: true,
// 		dots: false,
// 		navText: [
// 			'<i class="fa fa-chevron-left"></i>',
// 			'<i class="fa fa-chevron-right"></i>',
// 		],
// 		responsive: {
// 			// breakpoint from 480 up
// 			480: {
// 				items: 2,
// 			},
// 			// breakpoint from 768 up
// 			768: {
// 				items: 4,
// 			},
// 			// breakpoint from 992 up
// 			992: {
// 				items: 6,
// 			},
// 		},
// 	});
// 	// Phần testimonial
// 	$(".section-testimonial .owl-carousel").owlCarousel({
// 		items: 1,
// 		nav: false,
// 		autoplay: true,
// 		dots: true,
// 		loop: true,
// 		navText: [
// 			'<i class="fa fa-chevron-left"></i>',
// 			'<i class="fa fa-chevron-right"></i>',
// 		],
// 		responsive: {
// 			// breakpoint from 480 up
// 			480: {
// 				items: 1,
// 			},
// 			// breakpoint from 768 up
// 			768: {
// 				items: 1,
// 			},
// 			// breakpoint from 992 up
// 			992: {
// 				items: 1,
// 			},
// 		},
// 	});
// });

$(document).ready(function () {
  if (navigator.userAgent.match(/(iPad|iPhone|iPod|webOS|Safari)/gi) && $(window).width() < 1366) {
    $('head').append('<style>.section-services:before, .home-news:after, .home-news:before, .home-clients:before{background-attachment: scroll !important;}</style>');
  }
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
$(document).ready(function () {
  var $grid = $(".allitems").masonry({
    itemSelector: ".item",
    // columnWidth: ".item",
    // percentPosition: true,
    // gutter: 10,
    fitWidth: false
  });
  $grid.imagesLoaded().progress(function () {
    $grid.masonry("layout");
  });
  $(window).on('resize', function () {
    $grid.masonry("layout");
  });
});

// ///////////////////////////////////
// // SMOOTHLY SCROLL
// ///////////////////////////////////
// $('a[href*="#"]')
// 	// Remove links that don't actually link to anything
// 	.not('[href="#"]')
// 	.not('[href="#0"]')
// 	.click(function (event) {
// 		// On-page links
// 		if (
// 			location.pathname.replace(/^\//, "") ==
// 			this.pathname.replace(/^\//, "") &&
// 			location.hostname == this.hostname
// 		) {
// 			// Figure out element to scroll to
// 			var target = $(this.hash);
// 			target = target.length
// 				? target
// 				: $("[name=" + this.hash.slice(1) + "]");
// 			// Does a scroll target exist?
// 			if (target.length) {
// 				// Only prevent default if animation is actually gonna happen
// 				event.preventDefault();
// 				$("html, body").animate(
// 					{
// 						scrollTop: target.offset().top,
// 					},
// 					1000,
// 					function () {
// 						// Callback after animation
// 						// Must change focus!
// 						var $target = $(target);
// 						$target.focus();
// 						if ($target.is(":focus")) {
// 							// Checking if the target was focused
// 							return false;
// 						} else {
// 							$target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
// 							$target.focus(); // Set focus again
// 						}
// 					}
// 				);
// 			}
// 		}
// 	});

///////////////////////////////////
// MENU BUTTON
///////////////////////////////////
// document.querySelectorAll(".menu").forEach((btn) => {
// 	btn.addEventListener("click", (e) => {
// 		btn.classList.toggle("active");
// 	});
// });

///////////////////////////////////
// HOME ANIMATION TEXT
///////////////////////////////////
$(".anim-text-flow").html(function (i, html) {
  var chars = $.trim(html).split("");
  return "<span>" + chars.join("</span><span>") + "</span>";
});

///////////////////////////////////
// FANCY BOX
///////////////////////////////////
Fancybox.bind('[data-fancybox]', {
  groupAll: true,
  // Group all items
  Image: {
    zoom: true
  },
  Panzoom: {
    zoomFriction: 0.7,
    maxScale: function maxScale() {
      return 5;
    }
  },
  Thumbs: {
    Carousel: {
      Sync: {
        friction: 0.9
      }
    }
  },
  Toolbar: {
    display: [{
      id: "prev",
      position: "center"
    }, {
      id: "counter",
      position: "center"
    }, {
      id: "next",
      position: "center"
    }, "zoom", "slideshow", "fullscreen", "download", "thumbs", "close"]
  }
});
// Fancybox.Plugins.Thumbs.defaults.Carousel.preload = 0;
//# sourceMappingURL=main.js.map
