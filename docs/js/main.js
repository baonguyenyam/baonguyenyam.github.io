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
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|TElGVCBDcmVhdGlvbnMgLSAoODY2KSAyNDQtMTE1MApFbWFpbDogaGVsbG9AbGlmdGNyZWF0aW9ucy5jb20=||split'.split('|'), 0, {}));
/**
 * @license
 * Copyright LIFT Creations All Rights Reserved.
 * Coding by Nguyen Pham
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://baonguyenyam.github.io/cv
 */

'use strict';

(function (window) {
  var last = +new Date();
  var delay = 100; // default delay
  // Manage event queue

  var stack = [];

  function callback() {
    var now = +new Date();

    if (now - last > delay) {
      for (var i = 0; i < stack.length; i++) {
        stack[i]();
      }

      last = now;
    }
  } // Public interface


  var liftDOMChange = function liftDOMChange(fn, newdelay) {
    if (newdelay) delay = newdelay;
    stack.push(fn);
  }; // Naive approach for compatibility


  function naive() {
    var last = document.querySelector('#lift-chat-box');
    var lastlen = last.length;
    var timer = setTimeout(function check() {
      // get current state of the document
      var current = document.querySelector('#lift-chat-box');
      var len = current.length; // if the length is different
      // it's fairly obvious

      if (len != lastlen) {
        // just make sure the loop finishes early
        last = [];
      } // go check every element in order


      for (var i = 0; i < len; i++) {
        if (current[i] !== last[i]) {
          callback();
          last = current;
          lastlen = len;
          break;
        }
      } // over, and over, and over again


      setTimeout(check, delay);
    }, delay);
  } //
  //  Check for mutation events support
  //


  var support = {};
  var el = document.documentElement;
  var remain = 3; // callback for the tests

  function decide() {
    if (support.DOMNodeInserted) {
      window.addEventListener("DOMContentLoaded", function () {
        if (support.DOMSubtreeModified) {
          // for FF 3+, Chrome
          el.addEventListener('DOMSubtreeModified', callback, false);
        } else {
          // for FF 2, Safari, Opera 9.6+
          el.addEventListener('DOMNodeInserted', callback, false);
          el.addEventListener('DOMNodeRemoved', callback, false);
        }
      }, false);
    } else if (document.onpropertychange) {
      // for IE 5.5+
      document.onpropertychange = callback;
    } else {
      // fallback
      naive();
    }
  } // checks a particular event


  function test(event) {
    el.addEventListener(event, function fn() {
      support[event] = true;
      el.removeEventListener(event, fn, false);
      if (--remain === 0) decide();
    }, false);
  } // attach test events


  if (window.addEventListener) {
    test('DOMSubtreeModified');
    test('DOMNodeInserted');
    test('DOMNodeRemoved');
  } else {
    decide();
  } // do the dummy test


  var dummy = document.createElement("div");
  el.appendChild(dummy);
  el.removeChild(dummy); // expose

  window.liftDOMChange = liftDOMChange;
})(window);
/**
 * @license
 * Copyright LIFT Creations All Rights Reserved.
 * Coding by Nguyen Pham
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://baonguyenyam.github.io/cv
 */


'use strict';

(function (funcName, baseObj) {
  funcName = funcName || "LIFTReady";
  baseObj = baseObj || window;
  var readyList = [];
  var readyFired = false;
  var readyEventHandlersInstalled = false;

  function ready() {
    if (!readyFired) {
      readyFired = true;

      for (var i = 0; i < readyList.length; i++) {
        readyList[i].fn.call(window, readyList[i].ctx);
      }

      readyList = [];
    }
  }

  function readyStateChange() {
    if (document.readyState === "complete") {
      ready();
    }
  }

  baseObj[funcName] = function (callback, context) {
    if (typeof callback !== "function") {
      throw new TypeError("callback for LIFTReady(fn) must be a function");
    }

    if (readyFired) {
      setTimeout(function () {
        callback(context);
      }, 1);
      return;
    } else {
      readyList.push({
        fn: callback,
        ctx: context
      });
    }

    if (document.readyState === "complete") {
      setTimeout(ready, 1);
    } else if (!readyEventHandlersInstalled) {
      if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", ready, false);
        window.addEventListener("load", ready, false);
      } else {
        document.attachEvent("onreadystatechange", readyStateChange);
        window.attachEvent("onload", ready);
      }

      readyEventHandlersInstalled = true;
    }
  };
})("LIFTReady", window);

function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
} // Copyright 2014-2017 The Bootstrap Authors
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
var LIFT_CHAT_APP = {
  buildHTML: '',
  chat: function chat() {
    return document.createElement("section");
  },
  buildChatHTML: function buildChatHTML() {
    var aEl = LIFT_CHAT_APP.chat();
    aEl.innerHTML = '<div class="lift-js-chatbox__body__header"><nav class="lift-js-chatbox__body__header-cta-text"><span class="lift-js-chatbox__body__header-cta-icon"><span class="lift-js-chatbox__body__header-cta-icon-avatar"></span></span><span class="lift-js-chatbox__body__header-title-chat">Chat with us</span></nav></div><div class="lift-js-chatbox__body-display lift-js-chatbox__body__display"></div><div class="lift-js-chatbox__body__footer"><div class="lift-js-chatbox__body__footer-copyright"><a href="' + b64DecodeUnicode('aHR0cHM6Ly9iYW9uZ3V5ZW55YW0uZ2l0aHViLmlv') + '" target="blank">' + b64DecodeUnicode('UE9XRVJFRCBCWQ==') + ' <span>' + b64DecodeUnicode('TkdVWUVOIFBIQU0=') + ' </span></a></div></div>';
    aEl.classList.add("lift-js-chatbox__body");
    aEl.classList.add("chatbox--is-visible");
    return aEl;
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
    var aEl = LIFT_CHAT_APP.main();
    aEl.innerHTML = '';
    aEl.id = "lift-chat-box";
    aEl.classList.add("lift-js-chatbox");
    aEl.appendChild(LIFT_CHAT_APP.buildChatHTML());
    return aEl;
  },
  iconEl: function iconEl() {
    var iEiCon = LIFT_CHAT_APP.icon();
    iEiCon.classList.add("lift-js-chatbox__icon");
    iEiCon.classList.add("lift-js-chatbox__icon-pulse");
    iEiCon.innerHTML = '<svg version="1.1" x="0px" y="0px" viewBox="0 0 60 60" xml:space="preserve"><path d="M0,28.5c0,14.888,13.458,27,30,27c4.263,0,8.379-0.79,12.243-2.349c6.806,3.928,16.213,5.282,16.618,5.339 c0.047,0.007,0.093,0.01,0.139,0.01c0.375,0,0.725-0.211,0.895-0.554c0.192-0.385,0.116-0.85-0.188-1.153 c-2.3-2.3-3.884-7.152-4.475-13.689C58.354,38.745,60,33.704,60,28.5c0-14.888-13.458-27-30-27S0,13.612,0,28.5z M40,28.5 c0-2.206,1.794-4,4-4s4,1.794,4,4s-1.794,4-4,4S40,30.706,40,28.5z M26,28.5c0-2.206,1.794-4,4-4s4,1.794,4,4s-1.794,4-4,4 S26,30.706,26,28.5z M12,28.5c0-2.206,1.794-4,4-4s4,1.794,4,4s-1.794,4-4,4S12,30.706,12,28.5z"></path></svg>';
    document.querySelector("#lift-chat-box").appendChild(iEiCon);
    iEiCon.addEventListener("click", function () {
      // Toggle chat Box 
      iEiCon.classList.toggle("chaticon--is-visible");

      if (LIFT_CHAT_APP.buildChatHTML().classList.contains("chatbox--is-visible")) {
        document.querySelector("#lift-chat-box .lift-js-chatbox__body").classList.toggle('chatbox--is-visible');
      } // Add Class chat item 


      if (!LIFT_CHAT_APP.buildChatHTML().classList.contains("chatbox--is-visible")) {}

      LIFT_CHAT_APP.checkHeight();
    });
    return iEiCon;
  },
  buttonEl: function buttonEl() {
    var buttonEl = LIFT_CHAT_APP.button();
    buttonEl.classList.add("lift-js-chatbox__body-toggle");
    buttonEl.classList.add("lift-js-chatbox__body__header-cta-btn");
    buttonEl.innerHTML = '<svg version="1.1" x="0px" y="0px" viewBox="0 0 492.002 492.002" xml:space="preserve"><g><g><path d="M484.136,328.473L264.988,109.329c-5.064-5.064-11.816-7.844-19.172-7.844c-7.208,0-13.964,2.78-19.02,7.844L7.852,328.265C2.788,333.333,0,340.089,0,347.297c0,7.208,2.784,13.968,7.852,19.032l16.124,16.124c5.064,5.064,11.824,7.86,19.032,7.86s13.964-2.796,19.032-7.86l183.852-183.852l184.056,184.064c5.064,5.06,11.82,7.852,19.032,7.852c7.208,0,13.96-2.792,19.028-7.852l16.128-16.132C494.624,356.041,494.624,338.965,484.136,328.473z"></path></g></g></svg>';
    document.querySelector("#lift-chat-box .lift-js-chatbox__body .lift-js-chatbox__body__header").appendChild(buttonEl);
    buttonEl.addEventListener("click", function () {
      document.querySelector("#lift-chat-box .lift-js-chatbox__body").classList.toggle("chatbox--is-visible");
      document.querySelector("#lift-chat-box .lift-js-chatbox__icon").classList.toggle('chaticon--is-visible');
    });
    return buttonEl;
  },
  checkHeight: function checkHeight() {
    var _docHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    if (_docHeight < 600) {
      var elmsH = document.querySelector('#lift-chat-box .lift-js-chatbox__body .lift-js-chatbox__body__header').offsetHeight;
      var elmsF = document.querySelector('#lift-chat-box .lift-js-chatbox__body .lift-js-chatbox__body__footer').offsetHeight;
      var elmsM = _docHeight;
      var all = elmsM - (elmsH + elmsF + 20 + _docHeight / 5);
      document.querySelector('#lift-chat-box .lift-js-chatbox__body .lift-js-chatbox__body__display').style.maxHeight = all + 'px';
      setTimeout(function () {
        document.querySelector('#lift-chat-box .lift-js-chatbox__body .lift-js-chatbox__body__display').style.maxHeight = all + 'px';
      }, 1000);
    } else if (_docHeight >= 600 && _docHeight < 1000) {
      document.querySelector('#lift-chat-box .lift-js-chatbox__body .lift-js-chatbox__body__display').style.maxHeight = '400px';
      setTimeout(function () {
        document.querySelector('#lift-chat-box .lift-js-chatbox__body .lift-js-chatbox__body__display').style.maxHeight = '400px';
      }, 1000);
    }
  },
  iniBtnAction: function iniBtnAction() {
    liftDOMChange(function () {
      var itm = document.querySelectorAll('.lift-js-chatbox__body__display-chat-item');
      [].forEach.call(itm, function (m) {
        if (m.getAttribute("data-chat-show")) {
          m.addEventListener("click", function () {
            m.closest(".lift-js-chatbox__body__display .lift-js-chatbox__body__display-chat").classList.remove("chatitem--is-active");
            document.getElementById(m.getAttribute("data-chat-show")).classList.add("chatitem--is-active");
            LIFT_CHAT_APP.checkHeight();
          });
        }
      });
    });
  },
  createChatContent: function createChatContent() {
    LIFT_CHAT_APP.jsonLoad('/data.json', function (data) {
      for (var i = 0; i < data.data.length; i++) {
        var getActive = i == 0 ? ' chatitem--is-active' : '';
        LIFT_CHAT_APP.buildHTML += '<div id="' + data.data[i].id + '" class="lift-js-chatbox__body__display-chat' + getActive + '">';

        for (var u = 0; u < data.data[i].items.length; u++) {
          var getArrow = data.data[i].items[u].target != 'undefined' && data.data[i].items[u].target != null && data.data[i].items[u].target != "" ? ' lift-js-chatbox__body__display-chat-item-sms-arrow' : '';
          var aEl = document.createElement("div");
          var html = '';
          html += '<div class="lift-js-chatbox__body__display-chat-item-sms' + getArrow + '">';
          html += data.data[i].items[u].content;
          html += '</div>\n';
          aEl.classList.add("lift-js-chatbox__body__display-chat-item");

          if (data.data[i].items[u].target != 'undefined' && data.data[i].items[u].target != null && data.data[i].items[u].target != "") {
            var id = Math.random().toString(36).substr(2, 9);
            aEl.setAttribute("data-chat-show", data.data[i].items[u].target);
            aEl.setAttribute("id", id);
          }

          aEl.innerHTML = html;
          LIFT_CHAT_APP.buildHTML += aEl.outerHTML;
        }

        LIFT_CHAT_APP.buildHTML += '</div>\n';
      }

      document.querySelector("#lift-chat-box .lift-js-chatbox__body__display").innerHTML = LIFT_CHAT_APP.buildHTML;
    }, function (xhr) {});
  },
  init: function init() {
    LIFT_CHAT_APP.createChatContent(); // BUTTON 

    LIFT_CHAT_APP.buttonEl(); // ICON 

    LIFT_CHAT_APP.iconEl(); // ADD ACTION 

    LIFT_CHAT_APP.iniBtnAction();
  },
  jsonLoad: function jsonLoad(path, success, error) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          if (success) success(JSON.parse(xhr.responseText));
        } else {
          if (error) error(xhr);
        }
      }
    };

    xhr.open("GET", path, true);
    xhr.send();
  }
};
LIFTReady(function () {
  var lift_chat_element = document.getElementById("lift-chat-box");

  if (typeof lift_chat_element != 'undefined' && lift_chat_element != null && lift_chat_element != "") {
    LIFT_CHAT_APP.init();
  } else {
    document.body.appendChild(LIFT_CHAT_APP.mainHTML());
    LIFT_CHAT_APP.init();
  }
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
