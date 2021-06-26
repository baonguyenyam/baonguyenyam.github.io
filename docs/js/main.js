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
});
//# sourceMappingURL=main.js.map
