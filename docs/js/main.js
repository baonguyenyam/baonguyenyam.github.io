"use strict";

function _typeof3(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol") { _typeof3 = function _typeof(obj) { return typeof obj === "undefined" ? "undefined" : _typeof3(obj); }; } else { _typeof3 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof3(obj); }; } return _typeof3(obj); }

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
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-setclasses !*/

!function (n, e, s) {
  function o(n, e) {
    return (typeof n === "undefined" ? "undefined" : _typeof3(n)) === e;
  }

  function a() {
    var n, e, s, a, i, l, r;

    for (var c in f) {
      if (f.hasOwnProperty(c)) {
        if (n = [], e = f[c], e.name && (n.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length)) for (s = 0; s < e.options.aliases.length; s++) {
          n.push(e.options.aliases[s].toLowerCase());
        }

        for (a = o(e.fn, "function") ? e.fn() : e.fn, i = 0; i < n.length; i++) {
          l = n[i], r = l.split("."), 1 === r.length ? Modernizr[r[0]] = a : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = a), t.push((a ? "" : "no-") + r.join("-"));
        }
      }
    }
  }

  function i(n) {
    var e = r.className,
        s = Modernizr._config.classPrefix || "";

    if (c && (e = e.baseVal), Modernizr._config.enableJSClass) {
      var o = new RegExp("(^|\\s)" + s + "no-js(\\s|$)");
      e = e.replace(o, "$1" + s + "js$2");
    }

    Modernizr._config.enableClasses && (e += " " + s + n.join(" " + s), c ? r.className.baseVal = e : r.className = e);
  }

  var t = [],
      f = [],
      l = {
    _version: "3.6.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(n, e) {
      var s = this;
      setTimeout(function () {
        e(s[n]);
      }, 0);
    },
    addTest: function addTest(n, e, s) {
      f.push({
        name: n,
        fn: e,
        options: s
      });
    },
    addAsyncTest: function addAsyncTest(n) {
      f.push({
        name: null,
        fn: n
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = l, Modernizr = new Modernizr();
  var r = e.documentElement,
      c = "svg" === r.nodeName.toLowerCase();
  a(), i(t), delete l.addTest, delete l.addAsyncTest;

  for (var u = 0; u < Modernizr._q.length; u++) {
    Modernizr._q[u]();
  }

  n.Modernizr = Modernizr;
}(window, document);
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
});
"use strict";

function b64EncodeUnicode(t) {
  return btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function (t, e) {
    return String.fromCharCode("0x" + e);
  }));
}

function b64DecodeUnicode(t) {
  return decodeURIComponent(atob(t).split("").map(function (t) {
    return "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
}

!function (t) {
  var o = +new Date(),
      c = 100,
      a = [];

  function d() {
    var t = +new Date();

    if (c < t - o) {
      for (var e = 0; e < a.length; e++) {
        a[e]();
      }

      o = t;
    }
  }

  var s = {},
      l = document.documentElement,
      i = 3;

  function n() {
    var i, n;
    s.DOMNodeInserted ? t.addEventListener("DOMContentLoaded", function () {
      s.DOMSubtreeModified ? l.addEventListener("DOMSubtreeModified", d, !1) : (l.addEventListener("DOMNodeInserted", d, !1), l.addEventListener("DOMNodeRemoved", d, !1));
    }, !1) : document.onpropertychange ? document.onpropertychange = d : (i = document.querySelector("#lift-chat-box"), n = i.length, setTimeout(function t() {
      var e = document.querySelector("#lift-chat-box"),
          o = e.length;
      o != n && (i = []);

      for (var a = 0; a < o; a++) {
        if (e[a] !== i[a]) {
          d(), i = e, n = o;
          break;
        }
      }

      setTimeout(t, c);
    }, c));
  }

  function e(e) {
    l.addEventListener(e, function t() {
      s[e] = !0, l.removeEventListener(e, t, !1), 0 == --i && n();
    }, !1);
  }

  t.addEventListener ? (e("DOMSubtreeModified"), e("DOMNodeInserted"), e("DOMNodeRemoved")) : n();
  var r = document.createElement("div");
  l.appendChild(r), l.removeChild(r), t.liftDOMChange = function (t, e) {
    e && (c = e), a.push(t);
  };
}(window), function (t, e) {
  t = t || "LIFTReady", e = e || window;
  var o = [],
      a = !1,
      i = !1;

  function n() {
    if (!a) {
      a = !0;

      for (var t = 0; t < o.length; t++) {
        o[t].fn.call(window, o[t].ctx);
      }

      o = [];
    }
  }

  function c() {
    "complete" === document.readyState && n();
  }

  e[t] = function (t, e) {
    if ("function" != typeof t) throw new TypeError("callback for LIFTReady(fn) must be a function");
    a ? setTimeout(function () {
      t(e);
    }, 1) : (o.push({
      fn: t,
      ctx: e
    }), "complete" === document.readyState ? setTimeout(n, 1) : i || (document.addEventListener ? (document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1)) : (document.attachEvent("onreadystatechange", c), window.attachEvent("onload", n)), i = !0));
  };
}("LIFTReady", window);
var LIFT_CHAT_APP = {
  buildHTML: "",
  chat: function chat() {
    return document.createElement("section");
  },
  buildChatHTML: function buildChatHTML() {
    var t = LIFT_CHAT_APP.chat();
    return t.innerHTML = '<div class="lift-js-chatbox__body__header"><nav class="lift-js-chatbox__body__header-cta-text"><span class="lift-js-chatbox__body__header-cta-icon"><span class="lift-js-chatbox__body__header-cta-icon-avatar"></span></span><span class="lift-js-chatbox__body__header-title-chat">Chat with me!</span></nav></div><div class="lift-js-chatbox__body-display lift-js-chatbox__body__display"></div><div class="lift-js-chatbox__body__footer"><div class="lift-js-chatbox__body__footer-copyright"><a href="' + b64DecodeUnicode("aHR0cHM6Ly9iYW9uZ3V5ZW55YW0uZ2l0aHViLmlv") + '" target="blank">' + b64DecodeUnicode("UE9XRVJFRCBCWQ==") + " <span>" + b64DecodeUnicode("TkdVWUVOIFBIQU0=") + " </span></a></div></div>", t.classList.add("lift-js-chatbox__body"), t.classList.add("chatbox--is-visible"), t;
  },
  icon: function icon() {
    return document.createElement("section");
  },
  button: function button() {
    return document.createElement("button");
  },
  main: function main() {
    return document.createElement("div");
  },
  mainHTML: function mainHTML() {
    var t = LIFT_CHAT_APP.main();
    return t.innerHTML = "", t.id = "lift-chat-box", t.classList.add("lift-js-chatbox"), t.appendChild(LIFT_CHAT_APP.buildChatHTML()), t;
  },
  iconEl: function iconEl() {
    var t = LIFT_CHAT_APP.icon();
    return t.classList.add("lift-js-chatbox__icon"), t.classList.add("lift-js-chatbox__icon-pulse"), t.innerHTML = '<svg version="1.1" x="0px" y="0px" viewBox="0 0 60 60" xml:space="preserve"><path d="M0,28.5c0,14.888,13.458,27,30,27c4.263,0,8.379-0.79,12.243-2.349c6.806,3.928,16.213,5.282,16.618,5.339 c0.047,0.007,0.093,0.01,0.139,0.01c0.375,0,0.725-0.211,0.895-0.554c0.192-0.385,0.116-0.85-0.188-1.153 c-2.3-2.3-3.884-7.152-4.475-13.689C58.354,38.745,60,33.704,60,28.5c0-14.888-13.458-27-30-27S0,13.612,0,28.5z M40,28.5 c0-2.206,1.794-4,4-4s4,1.794,4,4s-1.794,4-4,4S40,30.706,40,28.5z M26,28.5c0-2.206,1.794-4,4-4s4,1.794,4,4s-1.794,4-4,4 S26,30.706,26,28.5z M12,28.5c0-2.206,1.794-4,4-4s4,1.794,4,4s-1.794,4-4,4S12,30.706,12,28.5z"></path></svg>', document.querySelector("#lift-chat-box").appendChild(t), t.addEventListener("click", function () {
      t.classList.toggle("chaticon--is-visible"), LIFT_CHAT_APP.buildChatHTML().classList.contains("chatbox--is-visible") && document.querySelector("#lift-chat-box .lift-js-chatbox__body").classList.toggle("chatbox--is-visible"), LIFT_CHAT_APP.buildChatHTML().classList.contains("chatbox--is-visible"), LIFT_CHAT_APP.checkHeight();
    }), t;
  },
  buttonEl: function buttonEl() {
    var t = LIFT_CHAT_APP.button();
    return t.classList.add("lift-js-chatbox__body-toggle"), t.classList.add("lift-js-chatbox__body__header-cta-btn"), t.innerHTML = '<svg version="1.1" x="0px" y="0px" viewBox="0 0 492.002 492.002" xml:space="preserve"><g><g><path d="M484.136,328.473L264.988,109.329c-5.064-5.064-11.816-7.844-19.172-7.844c-7.208,0-13.964,2.78-19.02,7.844L7.852,328.265C2.788,333.333,0,340.089,0,347.297c0,7.208,2.784,13.968,7.852,19.032l16.124,16.124c5.064,5.064,11.824,7.86,19.032,7.86s13.964-2.796,19.032-7.86l183.852-183.852l184.056,184.064c5.064,5.06,11.82,7.852,19.032,7.852c7.208,0,13.96-2.792,19.028-7.852l16.128-16.132C494.624,356.041,494.624,338.965,484.136,328.473z"></path></g></g></svg>', document.querySelector("#lift-chat-box .lift-js-chatbox__body .lift-js-chatbox__body__header").appendChild(t), t.addEventListener("click", function () {
      document.querySelector("#lift-chat-box .lift-js-chatbox__body").classList.toggle("chatbox--is-visible"), document.querySelector("#lift-chat-box .lift-js-chatbox__icon").classList.toggle("chaticon--is-visible");
    }), t;
  },
  checkHeight: function checkHeight() {
    var t = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    if (t < 600) {
      var e = t - (document.querySelector("#lift-chat-box .lift-js-chatbox__body .lift-js-chatbox__body__header").offsetHeight + document.querySelector("#lift-chat-box .lift-js-chatbox__body .lift-js-chatbox__body__footer").offsetHeight + 20 + t / 5);
      document.querySelector("#lift-chat-box .lift-js-chatbox__body .lift-js-chatbox__body__display").style.maxHeight = e + "px", setTimeout(function () {
        document.querySelector("#lift-chat-box .lift-js-chatbox__body .lift-js-chatbox__body__display").style.maxHeight = e + "px";
      }, 1e3);
    } else 600 <= t && t < 1e3 && (document.querySelector("#lift-chat-box .lift-js-chatbox__body .lift-js-chatbox__body__display").style.maxHeight = "400px", setTimeout(function () {
      document.querySelector("#lift-chat-box .lift-js-chatbox__body .lift-js-chatbox__body__display").style.maxHeight = "400px";
    }, 1e3));
  },
  iniBtnAction: function iniBtnAction() {
    liftDOMChange(function () {
      var t = document.querySelectorAll(".lift-js-chatbox__body__display-chat-item");
      [].forEach.call(t, function (t) {
        t.getAttribute("data-chat-show") && t.addEventListener("click", function () {
          t.closest(".lift-js-chatbox__body__display .lift-js-chatbox__body__display-chat").classList.remove("chatitem--is-active"), document.getElementById(t.getAttribute("data-chat-show")).classList.add("chatitem--is-active"), LIFT_CHAT_APP.checkHeight();
        });
      });
    });
  },
  createChatContent: function createChatContent() {
    LIFT_CHAT_APP.jsonLoad("/data.json", function (t) {
      for (var e = 0; e < t.data.length; e++) {
        var o = 0 == e ? " chatitem--is-active" : "";
        LIFT_CHAT_APP.buildHTML += '<div id="' + t.data[e].id + '" class="lift-js-chatbox__body__display-chat' + o + '">';

        for (var a = 0; a < t.data[e].items.length; a++) {
          var i = "undefined" != t.data[e].items[a].target && null != t.data[e].items[a].target && "" != t.data[e].items[a].target ? " lift-js-chatbox__body__display-chat-item-sms-arrow" : "",
              n = document.createElement("div"),
              c = "";

          if (c += '<div class="lift-js-chatbox__body__display-chat-item-sms' + i + '">', c += t.data[e].items[a].content, c += "</div>\n", n.classList.add("lift-js-chatbox__body__display-chat-item"), "undefined" != t.data[e].items[a].target && null != t.data[e].items[a].target && "" != t.data[e].items[a].target) {
            var d = Math.random().toString(36).substr(2, 9);
            n.setAttribute("data-chat-show", t.data[e].items[a].target), n.setAttribute("id", d);
          }

          n.innerHTML = c, LIFT_CHAT_APP.buildHTML += n.outerHTML;
        }

        LIFT_CHAT_APP.buildHTML += "</div>\n";
      }

      document.querySelector("#lift-chat-box .lift-js-chatbox__body__display").innerHTML = LIFT_CHAT_APP.buildHTML;
    }, function (t) {});
  },
  init: function init() {
    LIFT_CHAT_APP.createChatContent(), LIFT_CHAT_APP.buttonEl(), LIFT_CHAT_APP.iconEl(), LIFT_CHAT_APP.iniBtnAction();
  },
  jsonLoad: function jsonLoad(t, e, o) {
    var a = new XMLHttpRequest();
    a.onreadystatechange = function () {
      a.readyState === XMLHttpRequest.DONE && (200 === a.status ? e && e(JSON.parse(a.responseText)) : o && o(a));
    }, a.open("GET", t, !0), a.send();
  }
};
LIFTReady(function () {
  var t = document.getElementById("lift-chat-box");
  void 0 !== t && null != t && "" != t || document.body.appendChild(LIFT_CHAT_APP.mainHTML()), LIFT_CHAT_APP.init();
}); ///////////////////////////////////
// SLIDER
///////////////////////////////////

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
}); ///////////////////////////////////
// MENU BUTTON
///////////////////////////////////

document.querySelectorAll(".menu").forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    btn.classList.toggle("active");
  });
}); ///////////////////////////////////
// HOME ANIMATION TEXT
///////////////////////////////////

$(".anim-text-flow").html(function (i, html) {
  var chars = $.trim(html).split("");
  return "<span>" + chars.join("</span><span>") + "</span>";
}); ///////////////////////////////////
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
}); // Fixed Header

$(window).scroll(function () {
  setHeader($(document).scrollTop());
}); ///////////////////////////////////
// SMOOTHLY SCROLL
///////////////////////////////////

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
}); ///////////////////////////////////
// TYPE
///////////////////////////////////

var typed = new Typed(".typed span", {
  stringsElement: "#typed-strings",
  typeSpeed: 140,
  backSpeed: 50,
  smartBackspace: true,
  loop: true
}); ///////////////////////////////////
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
        win_height_padded = $window.height() * 1.1; // Showed...

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
    }); // Hidden...

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
//# sourceMappingURL=main.js.map
