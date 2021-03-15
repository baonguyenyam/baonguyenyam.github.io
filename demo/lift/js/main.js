"use strict";

eval(function (p, a, c, k, _e, r) {
  _e = function e(c) {
    return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
  };

  if (!''.replace(/^/, String)) {
    while (c--) {
      r[_e(c)] = k[c] || _e(c);
    }

    k = [function (e) {
      return r[e];
    }];

    _e = function _e() {
      return '\\w+';
    };

    c = 1;
  }

  ;

  while (c--) {
    if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
  }

  return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|TElGVCBDcmVhdGlvbnMgLSAoODY2KSAyNDQtMTE1MApFbWFpbDogaGVsbG9AbGlmdGNyZWF0aW9ucy5jb20=||split'.split('|'), 0, {})); // Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style');
  msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
  document.head.appendChild(msViewportStyle);
}

$(function () {
  var nua = navigator.userAgent;
  var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;

  if (isAndroid) {
    $('select.form-control').removeClass('form-control').css('width', '100%');
  }
});
particlesJS("particles-js", {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 200
      }
    },
    color: {
      value: ["#fff", "#fff", "#fff", "#fff"]
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#fff"
      },
      polygon: {
        nb_sides: 15
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1.5,
        opacity_min: 0.15,
        sync: false
      }
    },
    size: {
      value: 2.5,
      random: false,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.15,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 110,
      color: "#fff",
      opacity: 0.25,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse"
      },
      onclick: {
        enable: false,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
}); // Main

$(document).ready(function () {
  // Phần Slider
  $(".home-slider .owl-carousel").owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
  }); // Phần Clients

  $(".home-clients .owl-carousel").owlCarousel({
    items: 2,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
      // breakpoint from 480 up
      480: {
        items: 2
      },
      // breakpoint from 768 up
      768: {
        items: 4
      },
      // breakpoint from 992 up
      992: {
        items: 6
      }
    }
  }); // Phần testimonial

  $(".section-testimonial .owl-carousel").owlCarousel({
    items: 1,
    nav: false,
    autoplay: true,
    dots: true,
    loop: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
      // breakpoint from 480 up
      480: {
        items: 1
      },
      // breakpoint from 768 up
      768: {
        items: 1
      },
      // breakpoint from 992 up
      992: {
        items: 1
      }
    }
  });
});
document.querySelectorAll(".menu").forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    btn.classList.toggle("active");
  });
});
$(".anim-text-flow").html(function (i, html) {
  var chars = $.trim(html).split("");
  return "<span>" + chars.join("</span><span>") + "</span>";
});

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
}); // Fixed Header

$(window).scroll(function () {
  setHeader($(document).scrollTop());
}); // Select all links with hashes

$('a[href*="#"]') // Remove links that don't actually link to anything
.not('[href="#"]').not('[href="#0"]').click(function (event) {
  // On-page links
  if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]"); // Does a scroll target exist?

    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $("html, body").animate({
        scrollTop: target.offset().top
      }, 1000, function () {
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
      });
    }
  }
});
var typed = new Typed(".typed span", {
  stringsElement: "#typed-strings",
  typeSpeed: 140,
  backSpeed: 50,
  smartBackspace: true,
  loop: true
});
$(function () {
  setInterval(function () {
    var $next = $(".tricker em.active").removeClass("active").next("em");

    if ($next.length) {
      $next.addClass("active");
    } else {
      $("em:first").addClass("active");
    }
  }, 5000);
});
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  if (wScroll > $(".flit-animation").offset().top - $(window).height() + 100) {
    $(".flit-animation").each(function (i) {
      setTimeout(function () {
        $(".flit-animation").eq(i).addClass("animated");
      }, 300 * (i + 1));
    });
  } else {
    $(".flit-animation").removeClass("animated");
  }
});
//# sourceMappingURL=main.js.map
