"use strict";

var app = {
  ready: function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  },
  scroll: function scroll(fn) {
    window.addEventListener('scroll', fn);
  },
  resize: function resize(fn) {
    window.addEventListener('resize', fn);
  },
  select: function select(el) {
    return document.querySelector(el);
  },
  selectAll: function selectAll(el) {
    return document.querySelectorAll(el);
  },
  toggleClass: function toggleClass(el, cl) {
    el.classList.toggle(cl);
  },
  addClass: function addClass(el, className) {
    if (el.classList) el.classList.add(className);else el.className += ' ' + className;
  },
  removeClass: function removeClass(el, className) {
    if (el.classList) el.classList.remove(className);else el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  },
  checkExist: function checkExist(el) {
    return document.body.contains(el);
  },
  avoidNull: function avoidNull(f) {
    try {
      f();
    } catch (error) {}
  },
  bgImg: function bgImg() {
    var a = app.selectAll('[bg-img]');

    for (var i = 0; i < a.length; i++) {
      var el = a[i],
          bgimg = el.getAttribute('bg-img'),
          pos = el.getAttribute('bg-pos'),
          size = el.getAttribute('bg-size');

      if (pos != null) {
        el.style.backgroundPosition = pos;
      } else {
        el.style.backgroundPosition = 'center center';
      }

      if (size != null) {
        el.style.backgroundSize = size;
      } else {
        el.style.backgroundSize = 'cover';
      }

      el.style.backgroundImage = 'url(' + bgimg + ')';
    }
  },
  backToTop: function backToTop() {
    app.select('#backToTop').addEventListener('click', function () {
      main.scrollTop = 0;
    });
  },
  ie: function ie() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
      app.addClass(app.select('html'), 'ie-browser');
    }
  },
  slideUp: function slideUp(element, duration) {
    return new Promise(function (resolve, reject) {
      element.style.height = element.offsetHeight + 'px';
      element.style.transitionProperty = "height, margin, padding";
      element.style.transitionDuration = duration + 'ms';
      element.offsetHeight;
      element.style.overflow = 'hidden';
      element.style.height = 0;
      element.style.paddingTop = 0;
      element.style.paddingBottom = 0;
      element.style.marginTop = 0;
      element.style.marginBottom = 0;
      window.setTimeout(function () {
        element.style.display = 'none';
        element.style.removeProperty('height');
        element.style.removeProperty('padding-top');
        element.style.removeProperty('padding-bottom');
        element.style.removeProperty('margin-top');
        element.style.removeProperty('margin-bottom');
        element.style.removeProperty('overflow');
        element.style.removeProperty('transition-duration');
        element.style.removeProperty('transition-property');
        resolve(false);
      }, duration);
    });
  },
  slideDown: function slideDown(element, duration) {
    return new Promise(function (resolve, reject) {
      element.style.removeProperty('display');
      var display = window.getComputedStyle(element).display;
      if (display === 'none') display = 'block';
      element.style.display = display;
      var height = element.offsetHeight;
      element.style.overflow = 'hidden';
      element.style.height = 0;
      element.style.paddingTop = 0;
      element.style.paddingBottom = 0;
      element.style.marginTop = 0;
      element.style.marginBottom = 0;
      element.offsetHeight;
      element.style.transitionProperty = "height, margin, padding";
      element.style.transitionDuration = duration + 'ms';
      element.style.height = height + 'px';
      element.style.removeProperty('padding-top');
      element.style.removeProperty('padding-bottom');
      element.style.removeProperty('margin-top');
      element.style.removeProperty('margin-bottom');
      window.setTimeout(function () {
        element.style.removeProperty('height');
        element.style.removeProperty('overflow');
        element.style.removeProperty('transition-duration');
        element.style.removeProperty('transition-property');
      }, duration);
    });
  },
  slideToggle: function slideToggle(element, duration) {
    if (window.getComputedStyle(element).display === 'none') {
      return app.slideDown(element, duration);
    } else {
      return app.slideUp(element, duration);
    }
  }
};
app.ready(function () {
  app.bgImg();
  app.ie();
});
var main = Scrollbar.init(app.select('.scroll-Animate'), {
  damping: 0.11,
  thumbMinSize: 36,
  renderByPixels: false,
  alwaysShowTracks: false,
  continuousScrolling: false
});

if (window.innerWidth < 992) {
  var headerMainNav = Scrollbar.init(app.select('.dh-header .main-nav'), {
    damping: 0.11,
    thumbMinSize: 36,
    renderByPixels: false,
    alwaysShowTracks: false,
    continuousScrolling: false
  });
}

var customSelect = function customSelect() {
  var el = app.selectAll('.custom-select');

  var _loop = function _loop(i) {
    el[i].querySelector('.select-show').addEventListener('click', function (e) {
      app.toggleClass(el[i], 'active');
      app.slideToggle(el[i].querySelector('.select-list'), 500);
      e.stopPropagation();
    });
  };

  for (var i = 0; i < el.length; i++) {
    _loop(i);
  }

  document.addEventListener("click", function (e) {
    for (var i = 0; i < el.length; i++) {
      app.removeClass(el[i], 'active');
      app.slideUp(el[i].querySelector('.select-list'), 500);
    }
  });
};

app.ready(function () {
  app.avoidNull(customSelect);
});

var fixedElement = function fixedElement() {
  main.addListener(function () {
    var scroll = main.scrollTop;
    app.select('.grid .lineY').style.transform = 'translateY(' + scroll + 'px)';
    app.select('.grid .lineX').style.transform = 'translateY(' + scroll + 'px)';
    app.select('.find-shop').style.transform = 'translateY(' + scroll + 'px)';
    app.select('.dh-header .main-wrapper').style.transform = 'translateY(' + scroll + 'px)';
    app.select('.dh-header .header-wrapper').style.transform = 'translateY(' + scroll + 'px)';
  });
};

var inPage = function inPage() {
  main.addListener(function () {
    var scroll = main.scrollTop;

    if (scroll > 368.5) {
      app.addClass(app.select('.find-shop'), 'inPage');
    } else {
      app.removeClass(app.select('.find-shop'), 'inPage');
    }
  });
};

app.ready(function () {
  fixedElement();
  inPage();
});
var lastNavFMapping = new MappingListener({
  selector: '.dh-footer .last-nav',
  mobileWrapper: '.dh-footer .top-nav',
  mobileMethod: 'prependTo',
  desktopWrapper: '.dh-footer .top-nav',
  desktopMethod: 'appendTo',
  breakpoint: 992
}).watch();

var footerButtonCircle = function footerButtonCircle() {
  var el = app.select('.dh-footer .button .button-circle');
  var offset = app.select('.dh-footer .button .button-main').offsetHeight;
  el.style.width = offset + 'px';
  el.style.height = offset + 'px';
};

app.ready(function () {
  app.avoidNull(footerButtonCircle);
});
app.resize(function () {
  app.avoidNull(footerButtonCircle);
});

var toggleHeaderButton = function toggleHeaderButton() {
  app.select('.dh-header .toggle-button').addEventListener('click', function () {
    app.toggleClass(this, 'active');
  });
};

var headerInPage = function headerInPage() {
  main.addListener(function () {
    var scroll = main.scrollTop;
    var header = app.select('.main-wrapper').offsetHeight;
    var hei = window.innerHeight - header;

    if (app.checkExist(app.select('.homepage'))) {
      if (scroll > hei) {
        app.addClass(app.select('.dh-header'), 'inPage');
      } else {
        app.removeClass(app.select('.dh-header'), 'inPage');
      }
    }
  });
};

var headerOnScroll = function headerOnScroll() {
  main.addListener(function () {
    var scroll = main.scrollTop;

    if (scroll > 0) {
      app.addClass(app.select('.dh-header'), 'onScroll');
      app.addClass(app.select('.grid'), 'onScroll');
    } else {
      app.removeClass(app.select('.dh-header'), 'onScroll');
      app.removeClass(app.select('.grid'), 'onScroll');
    }
  });
};

var toggleHeaderWrapper = function toggleHeaderWrapper() {
  app.select('.dh-header .toggle-button').addEventListener('click', function () {
    app.toggleClass(app.select('.dh-header'), 'active');
    app.toggleClass(app.select('.grid'), 'active');
    app.toggleClass(app.select('.scroll-Animate'), 'active'); // animate

    if (app.select('.dh-header').classList.contains('active') == true) {
      var navListActive = app.selectAll('.dh-header .nav-list-active ul li');
      var mainNavActive = app.selectAll('.dh-header .main-nav-active ul li');
      var delay = 0.3;

      for (var i = 0; i < navListActive.length; i++) {
        navListActive[i].style.transitionDelay = delay + 0.05 * i + 's';
      }

      for (var k = 0; k < mainNavActive.length; k++) {
        mainNavActive[k].style.transitionDelay = delay + 0.05 * k + 's';
      }
    } else {
      var _navListActive = app.selectAll('.dh-header .nav-list-active ul li');

      var _mainNavActive = app.selectAll('.dh-header .main-nav-active ul li');

      for (var _i = 0; _i < _navListActive.length; _i++) {
        _navListActive[_i].style.transitionDelay = '0s';
      }

      for (var _k = 0; _k < _mainNavActive.length; _k++) {
        _mainNavActive[_k].style.transitionDelay = '0s';
      }
    }
  });
};

var cloneHeaderElemnt = function cloneHeaderElemnt() {
  var lastNav = app.select('.dh-header .last-nav').innerHTML;
  app.select('.dh-header .nav-list').innerHTML += lastNav;
  var mainNav = app.select('.dh-header .nav ul');
  var clone = mainNav.cloneNode(true);
  app.select('.dh-header .main-nav .main-nav-active').appendChild(clone);
};

var navListMapping = new MappingListener({
  selector: '.dh-header .nav-list',
  mobileWrapper: '.dh-header .main-nav .scroll-content',
  mobileMethod: 'prependTo',
  desktopWrapper: '.dh-header .top-nav',
  desktopMethod: 'appendTo',
  breakpoint: 992
}).watch();
app.ready(function () {
  app.avoidNull(toggleHeaderButton);
  app.avoidNull(headerInPage);
  app.avoidNull(headerOnScroll);
  app.avoidNull(toggleHeaderWrapper);
  app.avoidNull(cloneHeaderElemnt);
});

var homeSlider = function homeSlider() {
  var swiper = new Swiper('.dh-slider .swiper-container', {
    effect: 'fade',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    speed: 1000,
    // navigation: {
    //     nextEl: '.dh-slider .swiper-button-next',
    //     prevEl: '.dh-slider .swiper-button-prev',
    // },
    loop: true,
    pagination: {
      el: '.dh-slider .swiper-pagination',
      type: 'progressbar'
    }
  });
};

var circle = function circle() {
  var height = app.select('.dh-slider .circle').offsetHeight;
  var el = app.selectAll('.dh-slider .circle');

  for (var i = 0; i < el.length; i++) {
    el[i].style.width = height + 'px';
  }
};

var buttonCircle = function buttonCircle() {
  var el = app.selectAll('.dh-slider .button .button-circle');
  var offset = app.select('.dh-slider .button .button-main').offsetHeight; // console.log(off)

  for (var i = 0; i < el.length; i++) {
    el[i].style.width = offset + 'px';
    el[i].style.height = offset + 'px';
  }
};

app.ready(function () {
  app.avoidNull(homeSlider);
  app.avoidNull(circle);
  app.avoidNull(buttonCircle);
});
app.resize(function () {
  app.avoidNull(circle);
  app.avoidNull(buttonCircle);
});

var navCategory = function navCategory() {
  if (app.checkExist(app.select('.dh-nav .mobileNav'))) {
    app.select('.dh-nav .mobileNav').addEventListener('click', function () {
      app.toggleClass(app.select('.dh-nav .mobileNav'), 'active');
      app.slideToggle(app.select('.dh-nav ul'), 500);
    });
  }
};

app.ready(function () {
  app.avoidNull(navCategory);
});

var sliderSync = function sliderSync() {
  var swiperTop = new Swiper('.dh-home-2 .swiper-top', {
    // spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    touchRatio: 0,
    speed: 800,
    scrollbar: {
      el: '.dh-home-2 .swiper-scrollbar',
      hide: true
    },
    breakpoints: {
      768: {
        slidesPerView: 3.5,
        touchRatio: 1,
        freeMode: true
      },
      500: {
        slidesPerView: 2.5,
        touchRatio: 1,
        freeMode: true
      }
    }
  });
  var swiperBottom = new Swiper('.dh-home-2 .swiper-bottom', {
    spaceBetween: 10,
    speed: 800,
    thumbs: {
      swiper: swiperTop
    }
  });
};

var progressSlider = function progressSlider() {
  var el = app.selectAll('.dh-home-2 .swiper-top .item');

  var _loop2 = function _loop2(i) {
    el[i].addEventListener('click', function () {
      for (var u = 0; u < el.length; u++) {
        app.removeClass(el[u], 'active');
      }

      app.removeClass(el[i], 'active');

      for (var k = 1; k < i + 2; k++) {
        app.addClass(app.select('.dh-home-2 .swiper-top .swiper-slide:nth-child(' + k + ') .item'), 'active');
      }
    });
  };

  for (var i = 0; i < el.length; i++) {
    _loop2(i);
  }
};

app.ready(function () {
  app.avoidNull(progressSlider);
  app.avoidNull(sliderSync);
});

var imageAnimate = function imageAnimate() {
  var sec = app.select('.dh-home-3').offsetTop + 92;
  var scroll = main.scrollTop;
  var i = (scroll - sec) / 5;

  if (scroll > sec - 150) {
    app.select('.dh-home-3 .img').style.transform = 'translateY(' + i + 'px)';
  }
};

main.addListener(function () {
  app.avoidNull(imageAnimate);
});

var productAnimate = function productAnimate() {
  if (window.innerWidth > 992) {
    var el = app.selectAll('.dh-home-4 .item');
    var sec = app.select('.dh-home-4').offsetTop;
    var scroll = main.scrollTop;
    var e = (sec - scroll) / 4;

    if (sec < scroll + 200) {
      for (var i = 0; i < el.length; i++) {
        var speed = el[i].getAttribute('data-speed');
        el[i].style.transform = 'translateY(' + e / speed + 'px)';
      }
    }
  }
};

main.addListener(function () {
  app.avoidNull(productAnimate);
});

var collectionSlider = function collectionSlider() {
  var slider = new Swiper('.dh-home-5 .swiper-container', {
    speed: 400,
    initialSlide: 0,
    autoHeight: false,
    direction: 'horizontal',
    loop: true,
    autoplay: 5000,
    autoplayStopOnLast: false,
    effect: 'slide',
    spaceBetween: 270,
    slidesPerView: 1.5,
    centeredSlides: true,
    slidesOffsetBefore: 0,
    grabCursor: true,
    breakpoints: {
      992: {
        spaceBetween: 30,
        slidesPerView: 1
      }
    }
  });
};

var slideCircle = function slideCircle() {
  var wid = app.select('.dh-home-5 .dh-circle').offsetWidth;
  app.select('.dh-home-5 .dh-circle').style.height = wid + 'px';
};

app.ready(function () {
  app.avoidNull(slideCircle);
  app.avoidNull(collectionSlider);
});
app.resize(function () {
  app.avoidNull(slideCircle);
});

var showProduct = function showProduct() {
  if (app.checkExist(app.select('.dh-khuyenmai'))) {
    var num = 9;
    var el = app.selectAll('.dh-khuyenmai .package');

    for (var i = 0; i < num; i++) {
      app.slideDown(el[i], 900);
    }

    app.select('.dh-khuyenmai .viewAll a').addEventListener('click', function () {
      app.toggleClass(app.select('.dh-khuyenmai .list-item'), 'active');
      app.toggleClass(app.select('.dh-khuyenmai .viewAll'), 'active');
      if (app.select('.dh-khuyenmai .list-item').classList.contains('active')) for (var k = num; k < el.length; k++) {
        app.slideDown(el[k], 500);
      } else {
        for (var _k2 = num; _k2 < el.length; _k2++) {
          app.slideUp(el[_k2], 500);
        } // scroll to button


        var off = app.select('.dh-filter').offsetTop;
        main.scrollTo(0, off, 600);
      }
    });
  }
};

app.ready(function () {
  app.avoidNull(showProduct);
});

var otherNewsSlide = function otherNewsSlide() {
  var slider = new Swiper('.dh-tinkhac .swiper-container', {
    slidesPerView: 2,
    breakpoints: {
      992: {
        slidesPerView: 1
      }
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.dh-tinkhac .swiper-next',
      prevEl: '.dh-tinkhac .swiper-prev'
    }
  });
};

app.ready(function () {
  app.avoidNull(otherNewsSlide);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInNjcm9sbGJhci5qcyIsInNlbGVjdC5qcyIsImN1c3RvbS9pbmRleC5qcyIsImZvb3Rlci9pbmRleC5qcyIsImhlYWRlci9pbmRleC5qcyIsInNsaWRlci9pbmRleC5qcyIsImJvc3V1dGFwL25hdi9pbmRleC5qcyIsImhvbWUvaC0yL2luZGV4LmpzIiwiaG9tZS9oLTMvaW5kZXguanMiLCJob21lL2gtNC9pbmRleC5qcyIsImhvbWUvaC01L2luZGV4LmpzIiwia2h1eWVubWFpL2xpc3QvaW5kZXguanMiLCJ0aW50dWMvdGlua2hhYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJyZWFkeSIsImZuIiwiZG9jdW1lbnQiLCJhdHRhY2hFdmVudCIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsIiwid2luZG93IiwicmVzaXplIiwic2VsZWN0IiwiZWwiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0QWxsIiwicXVlcnlTZWxlY3RvckFsbCIsInRvZ2dsZUNsYXNzIiwiY2wiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJhZGRDbGFzcyIsImNsYXNzTmFtZSIsImFkZCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwicmVwbGFjZSIsIlJlZ0V4cCIsInNwbGl0Iiwiam9pbiIsImNoZWNrRXhpc3QiLCJib2R5IiwiY29udGFpbnMiLCJhdm9pZE51bGwiLCJmIiwiZXJyb3IiLCJiZ0ltZyIsImEiLCJpIiwibGVuZ3RoIiwiYmdpbWciLCJnZXRBdHRyaWJ1dGUiLCJwb3MiLCJzaXplIiwic3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tUb1RvcCIsIm1haW4iLCJzY3JvbGxUb3AiLCJpZSIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibXNpZSIsImluZGV4T2YiLCJtYXRjaCIsInNsaWRlVXAiLCJlbGVtZW50IiwiZHVyYXRpb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zaXRpb25EdXJhdGlvbiIsIm92ZXJmbG93IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJzZXRUaW1lb3V0IiwiZGlzcGxheSIsInJlbW92ZVByb3BlcnR5Iiwic2xpZGVEb3duIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInNsaWRlVG9nZ2xlIiwiU2Nyb2xsYmFyIiwiaW5pdCIsImRhbXBpbmciLCJ0aHVtYk1pblNpemUiLCJyZW5kZXJCeVBpeGVscyIsImFsd2F5c1Nob3dUcmFja3MiLCJjb250aW51b3VzU2Nyb2xsaW5nIiwiaW5uZXJXaWR0aCIsImhlYWRlck1haW5OYXYiLCJjdXN0b21TZWxlY3QiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiZml4ZWRFbGVtZW50IiwiYWRkTGlzdGVuZXIiLCJ0cmFuc2Zvcm0iLCJpblBhZ2UiLCJsYXN0TmF2Rk1hcHBpbmciLCJNYXBwaW5nTGlzdGVuZXIiLCJzZWxlY3RvciIsIm1vYmlsZVdyYXBwZXIiLCJtb2JpbGVNZXRob2QiLCJkZXNrdG9wV3JhcHBlciIsImRlc2t0b3BNZXRob2QiLCJicmVha3BvaW50Iiwid2F0Y2giLCJmb290ZXJCdXR0b25DaXJjbGUiLCJvZmZzZXQiLCJ3aWR0aCIsInRvZ2dsZUhlYWRlckJ1dHRvbiIsImhlYWRlckluUGFnZSIsImhlYWRlciIsImhlaSIsImlubmVySGVpZ2h0IiwiaGVhZGVyT25TY3JvbGwiLCJ0b2dnbGVIZWFkZXJXcmFwcGVyIiwibmF2TGlzdEFjdGl2ZSIsIm1haW5OYXZBY3RpdmUiLCJkZWxheSIsInRyYW5zaXRpb25EZWxheSIsImsiLCJjbG9uZUhlYWRlckVsZW1udCIsImxhc3ROYXYiLCJpbm5lckhUTUwiLCJtYWluTmF2IiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJhcHBlbmRDaGlsZCIsIm5hdkxpc3RNYXBwaW5nIiwiaG9tZVNsaWRlciIsInN3aXBlciIsIlN3aXBlciIsImVmZmVjdCIsImF1dG9wbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJzcGVlZCIsImxvb3AiLCJwYWdpbmF0aW9uIiwidHlwZSIsImNpcmNsZSIsImJ1dHRvbkNpcmNsZSIsIm5hdkNhdGVnb3J5Iiwic2xpZGVyU3luYyIsInN3aXBlclRvcCIsInNsaWRlc1BlclZpZXciLCJmcmVlTW9kZSIsIndhdGNoU2xpZGVzVmlzaWJpbGl0eSIsIndhdGNoU2xpZGVzUHJvZ3Jlc3MiLCJ0b3VjaFJhdGlvIiwic2Nyb2xsYmFyIiwiaGlkZSIsImJyZWFrcG9pbnRzIiwic3dpcGVyQm90dG9tIiwic3BhY2VCZXR3ZWVuIiwidGh1bWJzIiwicHJvZ3Jlc3NTbGlkZXIiLCJ1IiwiaW1hZ2VBbmltYXRlIiwic2VjIiwib2Zmc2V0VG9wIiwicHJvZHVjdEFuaW1hdGUiLCJjb2xsZWN0aW9uU2xpZGVyIiwic2xpZGVyIiwiaW5pdGlhbFNsaWRlIiwiYXV0b0hlaWdodCIsImRpcmVjdGlvbiIsImF1dG9wbGF5U3RvcE9uTGFzdCIsImNlbnRlcmVkU2xpZGVzIiwic2xpZGVzT2Zmc2V0QmVmb3JlIiwiZ3JhYkN1cnNvciIsInNsaWRlQ2lyY2xlIiwid2lkIiwib2Zmc2V0V2lkdGgiLCJzaG93UHJvZHVjdCIsIm51bSIsIm9mZiIsInNjcm9sbFRvIiwib3RoZXJOZXdzU2xpZGUiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUFBLEdBQUEsR0FBQTtBQUNBQyxFQUFBQSxLQUFBLEVBQUEsZUFBQUMsRUFBQSxFQUFBO0FBQ0EsUUFBQUMsUUFBQSxDQUFBQyxXQUFBLEdBQUFELFFBQUEsQ0FBQUUsVUFBQSxLQUFBLFVBQUEsR0FBQUYsUUFBQSxDQUFBRSxVQUFBLEtBQUEsU0FBQSxFQUFBO0FBQ0FILE1BQUFBLEVBQUE7QUFDQSxLQUZBLE1BRUE7QUFDQUMsTUFBQUEsUUFBQSxDQUFBRyxnQkFBQSxDQUFBLGtCQUFBLEVBQUFK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QUFBLENBQUEwSSxXQUFBO0FBQ0EsQ0FGQTs7QUN4QkEsSUFBQUksY0FBQSxHQUFBLFNBQUFBLGNBQUEsR0FBQTtBQUNBLE1BQUFmLE1BQUEsR0FBQSxJQUFBL0IsTUFBQSxDQUFBLCtCQUFBLEVBQUE7QUFDQWEsSUFBQUEsYUFBQSxFQUFBLENBREE7QUFFQU8sSUFBQUEsV0FBQSxFQUFBO0FBQ0EsV0FBQTtBQUNBUCxRQUFBQSxhQUFBLEVBQUE7QUFEQTtBQURBLEtBRkE7QUFPQVgsSUFBQUEsUUFBQSxFQUFBO0FBQ0FmLE1BQUFBLEtBQUEsRUFBQSxJQURBO0FBRUFnQixNQUFBQSxvQkFBQSxFQUFBO0FBRkEsS0FQQTtBQVdBNEMsSUFBQUEsVUFBQSxFQUFBO0FBQ0FDLE1BQUFBLE1BQUEsRUFBQSwwQkFEQTtBQUVBQyxNQUFBQSxNQUFBLEVBQUE7QUFGQTtBQVhBLEdBQUEsQ0FBQTtBQWdCQSxDQWpCQTs7QUFrQkFoTCxHQUFBLENBQUFDLEtBQUEsQ0FBQSxZQUFBO0FBQ0FELEVBQUFBLEdBQUEsQ0FBQStCLFNBQUEsQ0FBQThJLGNBQUE7QUFDQSxDQUZBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcHAgPSB7XHJcbiAgICByZWFkeTogKGZuKSA9PiB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50ID8gZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIDogZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpIHtcclxuICAgICAgICAgICAgZm4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzY3JvbGw6IChmbikgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmbilcclxuICAgIH0sXHJcbiAgICByZXNpemU6IChmbikgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmbilcclxuICAgIH0sXHJcbiAgICBzZWxlY3Q6IChlbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxyXG4gICAgfSxcclxuICAgIHNlbGVjdEFsbDogKGVsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWwpXHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlQ2xhc3M6IChlbCwgY2wpID0+IHtcclxuICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKGNsKVxyXG4gICAgfSxcclxuICAgIGFkZENsYXNzOiAoZWwsIGNsYXNzTmFtZSkgPT4ge1xyXG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QpXHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGVsLmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlQ2xhc3M6IChlbCwgY2xhc3NOYW1lKSA9PiB7XHJcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdClcclxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzTmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKSwgJyAnKTtcclxuICAgIH0sXHJcbiAgICBjaGVja0V4aXN0IDogKGVsKSA9PntcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jb250YWlucyhlbClcclxuICAgIH0sXHJcbiAgICBhdm9pZE51bGw6IChmKSA9PiB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRmKClcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7IH1cclxuXHR9LFxyXG4gICAgYmdJbWc6ICgpID0+IHtcclxuICAgICAgICBsZXQgYSA9IGFwcC5zZWxlY3RBbGwoJ1tiZy1pbWddJylcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGVsID0gYVtpXSxcclxuICAgICAgICAgICAgICAgIGJnaW1nID0gZWwuZ2V0QXR0cmlidXRlKCdiZy1pbWcnKSxcclxuICAgICAgICAgICAgICAgIHBvcyA9IGVsLmdldEF0dHJpYnV0ZSgnYmctcG9zJyksXHJcbiAgICAgICAgICAgICAgICBzaXplID0gZWwuZ2V0QXR0cmlidXRlKCdiZy1zaXplJylcclxuICAgICAgICAgICAgaWYgKHBvcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBwb3M7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnY2VudGVyIGNlbnRlcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2l6ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IHNpemU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3ZlcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBiZ2ltZyArICcpJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBiYWNrVG9Ub3A6ICgpID0+IHtcclxuICAgICAgICBhcHAuc2VsZWN0KCcjYmFja1RvVG9wJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbWFpbi5zY3JvbGxUb3AgPSAwXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBpZTogKCkgPT4ge1xyXG4gICAgICAgIHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgICAgIHZhciBtc2llID0gdWEuaW5kZXhPZihcIk1TSUUgXCIpO1xyXG4gICAgICAgIGlmIChtc2llID4gMCB8fCAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnQuKnJ2XFw6MTFcXC4vKSkge1xyXG4gICAgICAgICAgICBhcHAuYWRkQ2xhc3MoYXBwLnNlbGVjdCgnaHRtbCcpLCAnaWUtYnJvd3NlcicpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNsaWRlVXA6IChlbGVtZW50LCBkdXJhdGlvbikgPT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBgaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmdgO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcclxuICAgICAgICAgICAgZWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1hcmdpblRvcCA9IDA7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgICAgfSwgZHVyYXRpb24pXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBzbGlkZURvd246IChlbGVtZW50LCBkdXJhdGlvbikgPT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpO1xyXG4gICAgICAgICAgICBsZXQgZGlzcGxheSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpc3BsYXk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlzcGxheSA9PT0gJ25vbmUnKSBcclxuICAgICAgICAgICAgICAgIGRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcclxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICAgICAgICAgIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IGBoZWlnaHQsIG1hcmdpbiwgcGFkZGluZ2A7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpO1xyXG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XHJcbiAgICAgICAgICAgIH0sIGR1cmF0aW9uKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgc2xpZGVUb2dnbGU6IGZ1bmN0aW9uIChlbGVtZW50LCBkdXJhdGlvbikge1xyXG5cclxuICAgICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXBwLnNsaWRlRG93bihlbGVtZW50LCBkdXJhdGlvbik7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXBwLnNsaWRlVXAoZWxlbWVudCwgZHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5hcHAucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICBhcHAuYmdJbWcoKVxyXG4gICAgYXBwLmllKClcclxufSkiLCJcclxuXHJcbmNvbnN0IG1haW4gPSBTY3JvbGxiYXIuaW5pdChhcHAuc2VsZWN0KCcuc2Nyb2xsLUFuaW1hdGUnKSx7XHJcbiAgICAgICAgICAgIGRhbXBpbmc6IDAuMTEsXHJcbiAgICAgICAgICAgIHRodW1iTWluU2l6ZTogMzYsXHJcbiAgICAgICAgICAgIHJlbmRlckJ5UGl4ZWxzOiBmYWxzZSxcclxuICAgICAgICAgICAgYWx3YXlzU2hvd1RyYWNrczogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRpbnVvdXNTY3JvbGxpbmc6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG5pZih3aW5kb3cuaW5uZXJXaWR0aCA8IDk5Mil7XHJcbiAgICBjb25zdCBoZWFkZXJNYWluTmF2ID0gU2Nyb2xsYmFyLmluaXQoYXBwLnNlbGVjdCgnLmRoLWhlYWRlciAubWFpbi1uYXYnKSx7XHJcbiAgICAgICAgICAgICAgICBkYW1waW5nOiAwLjExLFxyXG4gICAgICAgICAgICAgICAgdGh1bWJNaW5TaXplOiAzNixcclxuICAgICAgICAgICAgICAgIHJlbmRlckJ5UGl4ZWxzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFsd2F5c1Nob3dUcmFja3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29udGludW91c1Njcm9sbGluZzogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxufVxyXG5cclxuIiwiY29uc3QgY3VzdG9tU2VsZWN0ID0gKCkgPT57XHJcbiAgICBsZXQgZWwgPSBhcHAuc2VsZWN0QWxsKCcuY3VzdG9tLXNlbGVjdCcpXHJcbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IGVsLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBlbFtpXS5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LXNob3cnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XHJcbiAgICAgICAgICAgIGFwcC50b2dnbGVDbGFzcyhlbFtpXSwgJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIGFwcC5zbGlkZVRvZ2dsZShlbFtpXS5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LWxpc3QnKSwgNTAwKVxyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGZvciggbGV0IGkgPSAwOyBpIDwgZWwubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBhcHAucmVtb3ZlQ2xhc3MoZWxbaV0sICdhY3RpdmUnKVxyXG4gICAgICAgICAgICBhcHAuc2xpZGVVcChlbFtpXS5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LWxpc3QnKSwgNTAwKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmFwcC5yZWFkeSgoKT0+e1xyXG4gICAgYXBwLmF2b2lkTnVsbChjdXN0b21TZWxlY3QpXHJcbn0pIiwiY29uc3QgZml4ZWRFbGVtZW50ID0gKCkgPT57XHJcbiAgICBtYWluLmFkZExpc3RlbmVyKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbGV0IHNjcm9sbCA9IG1haW4uc2Nyb2xsVG9wXHJcbiAgICAgICAgYXBwLnNlbGVjdCgnLmdyaWQgLmxpbmVZJykuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoJyArIHNjcm9sbCArJ3B4KSdcclxuICAgICAgICBhcHAuc2VsZWN0KCcuZ3JpZCAubGluZVgnKS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgnICsgc2Nyb2xsICsncHgpJ1xyXG4gICAgICAgIGFwcC5zZWxlY3QoJy5maW5kLXNob3AnKS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgnICsgc2Nyb2xsICsncHgpJ1xyXG4gICAgICAgIGFwcC5zZWxlY3QoJy5kaC1oZWFkZXIgLm1haW4td3JhcHBlcicpLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKCcgKyBzY3JvbGwgKydweCknXHJcbiAgICAgICAgYXBwLnNlbGVjdCgnLmRoLWhlYWRlciAuaGVhZGVyLXdyYXBwZXInKS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgnICsgc2Nyb2xsICsncHgpJ1xyXG4gICAgfSlcclxufVxyXG5jb25zdCBpblBhZ2UgPSAoKSA9PntcclxuICAgIG1haW4uYWRkTGlzdGVuZXIoZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgc2Nyb2xsID0gbWFpbi5zY3JvbGxUb3BcclxuICAgICAgICBpZiAoc2Nyb2xsID4gMzY4LjUpe1xyXG4gICAgICAgICAgICBhcHAuYWRkQ2xhc3MoYXBwLnNlbGVjdCgnLmZpbmQtc2hvcCcpLCAnaW5QYWdlJylcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgYXBwLnJlbW92ZUNsYXNzKGFwcC5zZWxlY3QoJy5maW5kLXNob3AnKSwgJ2luUGFnZScpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5hcHAucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgIGZpeGVkRWxlbWVudCgpXHJcbiAgICBpblBhZ2UoKVxyXG59KSIsImNvbnN0IGxhc3ROYXZGTWFwcGluZyA9IG5ldyBNYXBwaW5nTGlzdGVuZXIoe1xyXG4gICAgc2VsZWN0b3I6ICcuZGgtZm9vdGVyIC5sYXN0LW5hdicsXHJcbiAgICBtb2JpbGVXcmFwcGVyOiAnLmRoLWZvb3RlciAudG9wLW5hdicsXHJcbiAgICBtb2JpbGVNZXRob2Q6ICdwcmVwZW5kVG8nLFxyXG4gICAgZGVza3RvcFdyYXBwZXI6ICcuZGgtZm9vdGVyIC50b3AtbmF2JyxcclxuICAgIGRlc2t0b3BNZXRob2Q6ICdhcHBlbmRUbycsXHJcbiAgICBicmVha3BvaW50OiA5OTIsXHJcbn0pLndhdGNoKClcclxuXHJcbmNvbnN0IGZvb3RlckJ1dHRvbkNpcmNsZSA9ICgpPT57XHJcbiAgICBsZXQgZWwgPSBhcHAuc2VsZWN0KCcuZGgtZm9vdGVyIC5idXR0b24gLmJ1dHRvbi1jaXJjbGUnKVxyXG4gICAgbGV0IG9mZnNldCA9IGFwcC5zZWxlY3QoJy5kaC1mb290ZXIgLmJ1dHRvbiAuYnV0dG9uLW1haW4nKS5vZmZzZXRIZWlnaHRcclxuICAgIGVsLnN0eWxlLndpZHRoID0gb2Zmc2V0ICsgJ3B4J1xyXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gb2Zmc2V0ICsgJ3B4J1xyXG59XHJcbmFwcC5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgYXBwLmF2b2lkTnVsbChmb290ZXJCdXR0b25DaXJjbGUpXHJcbn0pXHJcbmFwcC5yZXNpemUoZnVuY3Rpb24oKXtcclxuICAgIGFwcC5hdm9pZE51bGwoZm9vdGVyQnV0dG9uQ2lyY2xlKVxyXG59KSIsImNvbnN0IHRvZ2dsZUhlYWRlckJ1dHRvbiA9ICgpID0+IHtcclxuICAgIGFwcC5zZWxlY3QoJy5kaC1oZWFkZXIgLnRvZ2dsZS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGFwcC50b2dnbGVDbGFzcyh0aGlzLCdhY3RpdmUnKVxyXG4gICAgfSlcclxufVxyXG5jb25zdCBoZWFkZXJJblBhZ2UgPSAoKSA9PntcclxuICAgIG1haW4uYWRkTGlzdGVuZXIoZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgc2Nyb2xsID0gbWFpbi5zY3JvbGxUb3BcclxuICAgICAgICBsZXQgaGVhZGVyID0gYXBwLnNlbGVjdCgnLm1haW4td3JhcHBlcicpLm9mZnNldEhlaWdodFxyXG4gICAgICAgIGxldCBoZWkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBoZWFkZXJcclxuICAgICAgICBpZiAoYXBwLmNoZWNrRXhpc3QoYXBwLnNlbGVjdCgnLmhvbWVwYWdlJykpKXtcclxuICAgICAgICAgICAgaWYoc2Nyb2xsID4gaGVpKXtcclxuICAgICAgICAgICAgICAgIGFwcC5hZGRDbGFzcyhhcHAuc2VsZWN0KCcuZGgtaGVhZGVyJyksICdpblBhZ2UnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBhcHAucmVtb3ZlQ2xhc3MoYXBwLnNlbGVjdCgnLmRoLWhlYWRlcicpLCAnaW5QYWdlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuY29uc3QgaGVhZGVyT25TY3JvbGwgPSAoKSA9PntcclxuICAgIG1haW4uYWRkTGlzdGVuZXIoZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgc2Nyb2xsID0gbWFpbi5zY3JvbGxUb3BcclxuICAgICAgICBpZihzY3JvbGwgPiAwKXtcclxuICAgICAgICAgICAgYXBwLmFkZENsYXNzKGFwcC5zZWxlY3QoJy5kaC1oZWFkZXInKSwgJ29uU2Nyb2xsJylcclxuICAgICAgICAgICAgYXBwLmFkZENsYXNzKGFwcC5zZWxlY3QoJy5ncmlkJyksICdvblNjcm9sbCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGFwcC5yZW1vdmVDbGFzcyhhcHAuc2VsZWN0KCcuZGgtaGVhZGVyJyksICdvblNjcm9sbCcpXHJcbiAgICAgICAgICAgIGFwcC5yZW1vdmVDbGFzcyhhcHAuc2VsZWN0KCcuZ3JpZCcpLCAnb25TY3JvbGwnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuY29uc3QgdG9nZ2xlSGVhZGVyV3JhcHBlciA9ICgpID0+e1xyXG4gICAgYXBwLnNlbGVjdCgnLmRoLWhlYWRlciAudG9nZ2xlLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgYXBwLnRvZ2dsZUNsYXNzKGFwcC5zZWxlY3QoJy5kaC1oZWFkZXInKSwnYWN0aXZlJylcclxuICAgICAgICBhcHAudG9nZ2xlQ2xhc3MoYXBwLnNlbGVjdCgnLmdyaWQnKSwnYWN0aXZlJylcclxuICAgICAgICBhcHAudG9nZ2xlQ2xhc3MoYXBwLnNlbGVjdCgnLnNjcm9sbC1BbmltYXRlJyksJ2FjdGl2ZScpXHJcbiAgICAgICAgLy8gYW5pbWF0ZVxyXG4gICAgICAgIGlmKGFwcC5zZWxlY3QoJy5kaC1oZWFkZXInKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpID09IHRydWUpe1xyXG4gICAgICAgICAgICBsZXQgbmF2TGlzdEFjdGl2ZSA9IGFwcC5zZWxlY3RBbGwoJy5kaC1oZWFkZXIgLm5hdi1saXN0LWFjdGl2ZSB1bCBsaScpXHJcbiAgICAgICAgICAgIGxldCBtYWluTmF2QWN0aXZlID0gYXBwLnNlbGVjdEFsbCgnLmRoLWhlYWRlciAubWFpbi1uYXYtYWN0aXZlIHVsIGxpJylcclxuICAgICAgICAgICAgbGV0IGRlbGF5ID0gMC4zXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2TGlzdEFjdGl2ZS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBuYXZMaXN0QWN0aXZlW2ldLnN0eWxlLnRyYW5zaXRpb25EZWxheSA9IGRlbGF5ICsgKDAuMDUgKiBpKSArICdzJ31cclxuICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBtYWluTmF2QWN0aXZlLmxlbmd0aDsgaysrKXtcclxuICAgICAgICAgICAgICAgIG1haW5OYXZBY3RpdmVba10uc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gZGVsYXkgKyAoMC4wNSAqIGspICsgJ3MnfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgbGV0IG5hdkxpc3RBY3RpdmUgPSBhcHAuc2VsZWN0QWxsKCcuZGgtaGVhZGVyIC5uYXYtbGlzdC1hY3RpdmUgdWwgbGknKVxyXG4gICAgICAgICAgICBsZXQgbWFpbk5hdkFjdGl2ZSA9IGFwcC5zZWxlY3RBbGwoJy5kaC1oZWFkZXIgLm1haW4tbmF2LWFjdGl2ZSB1bCBsaScpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2TGlzdEFjdGl2ZS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIG5hdkxpc3RBY3RpdmVbaV0uc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gJzBzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbWFpbk5hdkFjdGl2ZS5sZW5ndGg7IGsrKyl7XHJcbiAgICAgICAgICAgICAgICBtYWluTmF2QWN0aXZlW2tdLnN0eWxlLnRyYW5zaXRpb25EZWxheSA9ICcwcydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuY29uc3QgY2xvbmVIZWFkZXJFbGVtbnQgPSAoKSA9PntcclxuICAgIGxldCBsYXN0TmF2ID0gYXBwLnNlbGVjdCgnLmRoLWhlYWRlciAubGFzdC1uYXYnKS5pbm5lckhUTUxcclxuICAgIGFwcC5zZWxlY3QoJy5kaC1oZWFkZXIgLm5hdi1saXN0JykuaW5uZXJIVE1MICs9IGxhc3ROYXZcclxuICAgIGxldCBtYWluTmF2ID0gYXBwLnNlbGVjdCgnLmRoLWhlYWRlciAubmF2IHVsJylcclxuICAgIGxldCBjbG9uZSA9IG1haW5OYXYuY2xvbmVOb2RlKHRydWUpXHJcbiAgICBhcHAuc2VsZWN0KCcuZGgtaGVhZGVyIC5tYWluLW5hdiAubWFpbi1uYXYtYWN0aXZlJykuYXBwZW5kQ2hpbGQoY2xvbmUpXHJcbn1cclxuY29uc3QgbmF2TGlzdE1hcHBpbmcgPSBuZXcgTWFwcGluZ0xpc3RlbmVyKHtcclxuICAgIHNlbGVjdG9yOiAnLmRoLWhlYWRlciAubmF2LWxpc3QnLFxyXG4gICAgbW9iaWxlV3JhcHBlcjogJy5kaC1oZWFkZXIgLm1haW4tbmF2IC5zY3JvbGwtY29udGVudCcsXHJcbiAgICBtb2JpbGVNZXRob2Q6ICdwcmVwZW5kVG8nLFxyXG4gICAgZGVza3RvcFdyYXBwZXI6ICcuZGgtaGVhZGVyIC50b3AtbmF2JyxcclxuICAgIGRlc2t0b3BNZXRob2Q6ICdhcHBlbmRUbycsXHJcbiAgICBicmVha3BvaW50OiA5OTIsXHJcbn0pLndhdGNoKClcclxuYXBwLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICBhcHAuYXZvaWROdWxsKHRvZ2dsZUhlYWRlckJ1dHRvbilcclxuICAgIGFwcC5hdm9pZE51bGwoaGVhZGVySW5QYWdlKVxyXG4gICAgYXBwLmF2b2lkTnVsbChoZWFkZXJPblNjcm9sbClcclxuICAgIGFwcC5hdm9pZE51bGwodG9nZ2xlSGVhZGVyV3JhcHBlcilcclxuICAgIGFwcC5hdm9pZE51bGwoY2xvbmVIZWFkZXJFbGVtbnQpXHJcbn0pIiwiY29uc3QgaG9tZVNsaWRlciA9ICgpPT57XHJcbiAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLmRoLXNsaWRlciAuc3dpcGVyLWNvbnRhaW5lcicse1xyXG4gICAgICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgICAgIGRlbGF5OiA0MDAwLFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgICAgICAgICAvLyBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgIC8vICAgICBuZXh0RWw6ICcuZGgtc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICAvLyAgICAgcHJldkVsOiAnLmRoLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgZWw6ICcuZGgtc2xpZGVyIC5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAncHJvZ3Jlc3NiYXInLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxufVxyXG5jb25zdCBjaXJjbGUgPSAoKT0+e1xyXG4gICAgbGV0IGhlaWdodCA9IGFwcC5zZWxlY3QoJy5kaC1zbGlkZXIgLmNpcmNsZScpLm9mZnNldEhlaWdodFxyXG4gICAgbGV0IGVsID0gYXBwLnNlbGVjdEFsbCgnLmRoLXNsaWRlciAuY2lyY2xlJylcclxuICAgIGZvcihsZXQgaSA9IDA7IGk8ZWwubGVuZ3RoO2krKyl7XHJcbiAgICBlbFtpXS5zdHlsZS53aWR0aCA9IGhlaWdodCArICdweCdcclxufX1cclxuY29uc3QgYnV0dG9uQ2lyY2xlID0gKCk9PntcclxuICAgIGxldCBlbCA9IGFwcC5zZWxlY3RBbGwoJy5kaC1zbGlkZXIgLmJ1dHRvbiAuYnV0dG9uLWNpcmNsZScpXHJcbiAgICBsZXQgb2Zmc2V0ID0gYXBwLnNlbGVjdCgnLmRoLXNsaWRlciAuYnV0dG9uIC5idXR0b24tbWFpbicpLm9mZnNldEhlaWdodFxyXG4gICAgLy8gY29uc29sZS5sb2cob2ZmKVxyXG4gICAgZm9yKGxldCBpID0gMDsgaTxlbC5sZW5ndGg7aSsrKXtcclxuICAgICAgICBlbFtpXS5zdHlsZS53aWR0aCA9IG9mZnNldCArICdweCdcclxuICAgICAgICBlbFtpXS5zdHlsZS5oZWlnaHQgPSBvZmZzZXQgKyAncHgnXHJcbiAgICB9XHJcbn1cclxuXHJcbmFwcC5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgYXBwLmF2b2lkTnVsbChob21lU2xpZGVyKVxyXG4gICAgYXBwLmF2b2lkTnVsbChjaXJjbGUpXHJcbiAgICBhcHAuYXZvaWROdWxsKGJ1dHRvbkNpcmNsZSlcclxufSlcclxuYXBwLnJlc2l6ZShmdW5jdGlvbigpe1xyXG4gICAgYXBwLmF2b2lkTnVsbChjaXJjbGUpXHJcbiAgICBhcHAuYXZvaWROdWxsKGJ1dHRvbkNpcmNsZSlcclxufSkiLCJjb25zdCBuYXZDYXRlZ29yeSA9ICgpID0+e1xyXG4gICAgaWYoYXBwLmNoZWNrRXhpc3QoYXBwLnNlbGVjdCgnLmRoLW5hdiAubW9iaWxlTmF2JykpKXtcclxuICAgICAgICBhcHAuc2VsZWN0KCcuZGgtbmF2IC5tb2JpbGVOYXYnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgIGFwcC50b2dnbGVDbGFzcyhhcHAuc2VsZWN0KCcuZGgtbmF2IC5tb2JpbGVOYXYnKSwgJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIGFwcC5zbGlkZVRvZ2dsZShhcHAuc2VsZWN0KCcuZGgtbmF2IHVsJyksIDUwMClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmFwcC5yZWFkeSgoKT0+e1xyXG4gICAgYXBwLmF2b2lkTnVsbChuYXZDYXRlZ29yeSlcclxufSkiLCJjb25zdCBzbGlkZXJTeW5jID0gKCkgPT57XHJcbiAgICB2YXIgc3dpcGVyVG9wID0gbmV3IFN3aXBlcignLmRoLWhvbWUtMiAuc3dpcGVyLXRvcCcsIHtcclxuICAgICAgICAvLyBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXHJcbiAgICAgICAgZnJlZU1vZGU6IHRydWUsXHJcbiAgICAgICAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxyXG4gICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcbiAgICAgICAgdG91Y2hSYXRpbzogMCxcclxuICAgICAgICBzcGVlZDogODAwLFxyXG4gICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5kaC1ob21lLTIgLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgICAgICAgICBoaWRlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLjUsXHJcbiAgICAgICAgICAgICAgICB0b3VjaFJhdGlvOiAxLFxyXG4gICAgICAgICAgICAgICAgZnJlZU1vZGU6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNTAwOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLjUsXHJcbiAgICAgICAgICAgICAgICB0b3VjaFJhdGlvOiAxLFxyXG4gICAgICAgICAgICAgICAgZnJlZU1vZGU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICB2YXIgc3dpcGVyQm90dG9tID0gbmV3IFN3aXBlcignLmRoLWhvbWUtMiAuc3dpcGVyLWJvdHRvbScsIHtcclxuICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgIHNwZWVkOiA4MDAsXHJcbiAgICAgICAgdGh1bWJzOiB7XHJcbiAgICAgICAgc3dpcGVyOiBzd2lwZXJUb3BcclxuICAgICAgICB9fSlcclxuICAgIH1cclxuY29uc3QgcHJvZ3Jlc3NTbGlkZXIgPSAoKSA9PntcclxuICAgIGxldCBlbCA9IGFwcC5zZWxlY3RBbGwoJy5kaC1ob21lLTIgLnN3aXBlci10b3AgLml0ZW0nKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7aTxlbC5sZW5ndGg7aSsrKXtcclxuICAgICAgICBlbFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHUgPSAwOyB1PGVsLmxlbmd0aDsgdSsrKXtcclxuICAgICAgICAgICAgICAgIGFwcC5yZW1vdmVDbGFzcyhlbFt1XSwgJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXBwLnJlbW92ZUNsYXNzKGVsW2ldLCAnYWN0aXZlJylcclxuICAgICAgICAgICAgZm9yKGxldCBrID0gMTtrIDwgKGkrMik7aysrKXtcclxuICAgICAgICAgICAgICAgIGFwcC5hZGRDbGFzcyhhcHAuc2VsZWN0KCcuZGgtaG9tZS0yIC5zd2lwZXItdG9wIC5zd2lwZXItc2xpZGU6bnRoLWNoaWxkKCcrIGsgKycpIC5pdGVtJyksICdhY3RpdmUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuYXBwLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICBhcHAuYXZvaWROdWxsKHByb2dyZXNzU2xpZGVyKVxyXG4gICAgYXBwLmF2b2lkTnVsbChzbGlkZXJTeW5jKVxyXG59KSIsImNvbnN0IGltYWdlQW5pbWF0ZSA9ICgpPT57XHJcbiAgICBsZXQgc2VjID0gKGFwcC5zZWxlY3QoJy5kaC1ob21lLTMnKS5vZmZzZXRUb3AgKyA5MilcclxuICAgIGxldCBzY3JvbGwgPSBtYWluLnNjcm9sbFRvcFxyXG4gICAgbGV0IGkgPSAgKHNjcm9sbCAtIHNlYykgLyA1XHJcbiAgICBpZihzY3JvbGwgPiAoc2VjIC0gMTUwKSl7XHJcbiAgICAgICAgYXBwLnNlbGVjdCgnLmRoLWhvbWUtMyAuaW1nJykuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoJysgaSArICdweCknXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5tYWluLmFkZExpc3RlbmVyKGZ1bmN0aW9uKCl7XHJcbiAgICBhcHAuYXZvaWROdWxsKGltYWdlQW5pbWF0ZSlcclxufSkiLCJcclxuY29uc3QgcHJvZHVjdEFuaW1hdGUgPSAoKT0+e1xyXG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPiA5OTIpe1xyXG4gICAgICAgIGxldCBlbCA9IGFwcC5zZWxlY3RBbGwoJy5kaC1ob21lLTQgLml0ZW0nKVxyXG4gICAgICAgIGxldCBzZWMgPSBhcHAuc2VsZWN0KCcuZGgtaG9tZS00Jykub2Zmc2V0VG9wXHJcbiAgICAgICAgbGV0IHNjcm9sbCA9IG1haW4uc2Nyb2xsVG9wXHJcbiAgICAgICAgbGV0IGUgPSAoc2VjIC0gc2Nyb2xsKSAvIDRcclxuICAgICAgICBpZihzZWMgPCAoc2Nyb2xsICsgMjAwKSl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7aTxlbC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIGxldCBzcGVlZCA9IGVsW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1zcGVlZCcpXHJcbiAgICAgICAgICAgICAgICBlbFtpXS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgnKyAoZSAvIHNwZWVkKSArJ3B4KSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5tYWluLmFkZExpc3RlbmVyKGZ1bmN0aW9uKCl7XHJcbiAgICBhcHAuYXZvaWROdWxsKHByb2R1Y3RBbmltYXRlKVxyXG59KVxyXG5cclxuIiwiY29uc3QgY29sbGVjdGlvblNsaWRlciA9ICgpPT57XHJcbiAgICB2YXIgc2xpZGVyID0gbmV3IFN3aXBlcignLmRoLWhvbWUtNSAuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgICBzcGVlZDogNDAwLFxyXG4gICAgICAgIGluaXRpYWxTbGlkZTogMCxcclxuICAgICAgICBhdXRvSGVpZ2h0OiBmYWxzZSxcclxuICAgICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiA1MDAwLFxyXG4gICAgICAgIGF1dG9wbGF5U3RvcE9uTGFzdDogZmFsc2UsXHJcbiAgICAgICAgZWZmZWN0OiAnc2xpZGUnLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjcwLFxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEuNSxcclxuICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgICBzbGlkZXNPZmZzZXRCZWZvcmU6IDAsXHJcbiAgICAgICAgZ3JhYkN1cnNvcjogdHJ1ZSxcclxuICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbmNvbnN0IHNsaWRlQ2lyY2xlID0gKCkgPT4ge1xyXG4gICAgbGV0IHdpZCA9IGFwcC5zZWxlY3QoJy5kaC1ob21lLTUgLmRoLWNpcmNsZScpLm9mZnNldFdpZHRoXHJcbiAgICBhcHAuc2VsZWN0KCcuZGgtaG9tZS01IC5kaC1jaXJjbGUnKS5zdHlsZS5oZWlnaHQgPSB3aWQgKyAncHgnXHJcbn1cclxuYXBwLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICBhcHAuYXZvaWROdWxsKHNsaWRlQ2lyY2xlKVxyXG4gICAgYXBwLmF2b2lkTnVsbChjb2xsZWN0aW9uU2xpZGVyKVxyXG59KVxyXG5hcHAucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgICBhcHAuYXZvaWROdWxsKHNsaWRlQ2lyY2xlKVxyXG59KSIsImNvbnN0IHNob3dQcm9kdWN0ID0gKCkgPT57XHJcbiAgICBpZihhcHAuY2hlY2tFeGlzdChhcHAuc2VsZWN0KCcuZGgta2h1eWVubWFpJykpKXtcclxuICAgICAgICBsZXQgbnVtID0gOVxyXG4gICAgICAgIGxldCBlbCA9IGFwcC5zZWxlY3RBbGwoJy5kaC1raHV5ZW5tYWkgLnBhY2thZ2UnKVxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGk8bnVtOyBpKyspe1xyXG4gICAgICAgICAgICBhcHAuc2xpZGVEb3duKGVsW2ldLCA5MDApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFwcC5zZWxlY3QoJy5kaC1raHV5ZW5tYWkgLnZpZXdBbGwgYScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgYXBwLnRvZ2dsZUNsYXNzKGFwcC5zZWxlY3QoJy5kaC1raHV5ZW5tYWkgLmxpc3QtaXRlbScpLCAnYWN0aXZlJylcclxuICAgICAgICAgICAgYXBwLnRvZ2dsZUNsYXNzKGFwcC5zZWxlY3QoJy5kaC1raHV5ZW5tYWkgLnZpZXdBbGwnKSwgJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIGlmKGFwcC5zZWxlY3QoJy5kaC1raHV5ZW5tYWkgLmxpc3QtaXRlbScpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGsgPSBudW07IGsgPCBlbC5sZW5ndGggO2srKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwLnNsaWRlRG93bihlbFtrXSwgNTAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBrID0gbnVtOyBrIDwgZWwubGVuZ3RoIDtrKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcC5zbGlkZVVwKGVsW2tdLCA1MDApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBzY3JvbGwgdG8gYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBsZXQgb2ZmID0gYXBwLnNlbGVjdCgnLmRoLWZpbHRlcicpLm9mZnNldFRvcFxyXG4gICAgICAgICAgICAgICAgbWFpbi5zY3JvbGxUbygwLCBvZmYsIDYwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pfVxyXG59XHJcbmFwcC5yZWFkeSgoKT0+e1xyXG4gICAgYXBwLmF2b2lkTnVsbChzaG93UHJvZHVjdClcclxufSkiLCJjb25zdCBvdGhlck5ld3NTbGlkZSA9ICgpID0+e1xyXG4gICAgdmFyIHNsaWRlciA9IG5ldyBTd2lwZXIgKCcuZGgtdGlua2hhYyAuc3dpcGVyLWNvbnRhaW5lcicse1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiA0MDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgIG5leHRFbDogJy5kaC10aW5raGFjIC5zd2lwZXItbmV4dCcsXHJcbiAgICAgICAgICAgIHByZXZFbDogJy5kaC10aW5raGFjIC5zd2lwZXItcHJldidcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbmFwcC5yZWFkeSgoKT0+e1xyXG4gICAgYXBwLmF2b2lkTnVsbChvdGhlck5ld3NTbGlkZSlcclxufSkiXX0=
