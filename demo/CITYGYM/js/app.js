"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CANHCAM_APP = { "ACTIVE_FIXED_HEADER": true, "HEADER_TRANPARENT": false, "ACTIVE_HEADER_POSITION": 1, "ACTIVE_PADDING_MAIN": true, "ACTIVE_VALIDATOR": true, "ACTIVE_SELECT": true, "ACTIVE_FIXED_FOOTER": true, "ACTIVE_LIST_TO_SELECT": true, "DISPLAY_FOOTER": 600, "ACTIVE_RESPONSIVE": true, "ACTIVE_BACKTOTOP": true, "DISPLAY_BACKTOTOP": 100, "CHANGE_GRID": 991, "CHANGE_GRID_SM": 767, "CHANGE_GRID_NEW": 1214, "DEV_MODE": false, "DEV_MODE_GIRD_FULL": false };
function backToTop() {
	if ($('#back-to-top').length) {
		var backToTop = function backToTop() {
			var scrollTop = $(window).scrollTop();
			if (scrollTop > CANHCAM_APP.DISPLAY_BACKTOTOP) {
				$('#back-to-top').addClass('show');
			} else {
				$('#back-to-top').removeClass('show');
			}
		};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
}

$(document).ready(function () {
	if (CANHCAM_APP.ACTIVE_BACKTOTOP) {
		backToTop();
	}
});
function CanhCamResponsive() {
	// Set BG Mask
	$('[bg-mask]').each(function () {
		var bgimg = $(this).attr('bg-mask');
		$(this).css({
			"mask-image": "url(" + bgimg + ")",
			"mask-position": "center center",
			"mask-repeat": "no-repeat",
			"-webkit-mask-image": "url(" + bgimg + ")",
			"-webkit-mask-position": "center center",
			"-webkit-mask-repeat": "no-repeat"
		});
	});
	// Set BG Resposive
	$('[bg-img]').each(function () {
		var bgimg = $(this).attr('bg-img');
		var pos = $(this).attr('bg-pos');
		var size = $(this).attr('bg-size');
		if (pos && pos.length > 0) {
			$(this).css({
				"background-position": pos
			});
		} else {
			$(this).css({
				"background-position": "center center"
			});
		}
		if (size && size.length > 0) {
			$(this).css({
				"background-size": size
			});
		} else {
			$(this).css({
				"background-size": "cover"
			});
		}
		$(this).css({
			"background-image": "url(" + bgimg + ")"
		});
	});

	$('[bg-img-responsive]').each(function () {
		var bgimg = $(this).attr('bg-img-responsive');
		var bgimgsm = $(this).attr('bg-img-responsive-sm');
		var bgimgxs = $(this).attr('bg-img-responsive-xs');
		if ($(window).width() >= CANHCAM_APP.CHANGE_GRID) {
			$(this).css({
				"background-image": "url(" + bgimg + ")",
				"background-position": "center center",
				"background-size": "cover"
			});
		} else if ($(window).width() < CANHCAM_APP.CHANGE_GRID && $(window).width() > CANHCAM_APP.CHANGE_GRID_SM) {
			$(this).css({
				"background-image": "url(" + bgimgsm + ")",
				"background-position": "center center",
				"background-size": "cover"
			});
		} else {
			$(this).css({
				"background-image": "url(" + bgimgxs + ")",
				"background-position": "center center",
				"background-size": "cover"
			});
		}
	});

	$('[img-src-responsive]').each(function () {
		var bgimg2 = $(this).attr('img-src-responsive');
		var bgimg2sm = $(this).attr('img-src-responsive-sm');
		var bgimg2xs = $(this).attr('img-src-responsive-xs');
		if ($(window).width() >= CANHCAM_APP.CHANGE_GRID) {
			$(this).attr("src", "" + bgimg2 + "");
		} else if ($(window).width() < CANHCAM_APP.CHANGE_GRID && $(window).width() > CANHCAM_APP.CHANGE_GRID_SM) {
			$(this).attr("src", "" + bgimg2sm + "");
		} else {
			$(this).attr("src", "" + bgimg2xs + "");
		}
	});
};

$(function () {
	if (CANHCAM_APP.ACTIVE_RESPONSIVE) {
		CanhCamResponsive();
	}
});

$(window).resize(function () {
	if (CANHCAM_APP.ACTIVE_RESPONSIVE) {
		CanhCamResponsive();
	}
});

$(function () {
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover({
		trigger: 'focus'
	});
});
// // Thêm [dropdown-type="hover"] vào thẻ a để bật tính năng hover open dropdown
// if ($(window).width() > CANHCAM_APP.CHANGE_GRID) {
// 	$('.dropdown').on('mouseenter mouseleave', function () {
// 		var ___d = $(this).find('[dropdown-type="hover"]').parents('.dropdown')
// 		if (___d && ___d.length > 0) {
// 			$(this).find('[dropdown-type="hover"]').removeAttr('data-toggle')
// 			setTimeout(function () {
// 				___d[___d.is(':hover') ? 'addClass' : 'removeClass']('show');
// 				___d.is(':hover') ? ___d.find('.dropdown-menu').show() : ___d.find('.dropdown-menu').hide()
// 			}, 10);
// 		}
// 	})
// } else {
// 	$('.dropdown').each(function () {
// 		$(this).addClass('show')
// 		$(this).find('.dropdown-menu').show()
// 	})
// }


$(document).ready(function () {
	checkDev();
});

$(window).resize(function () {
	checkDev();
});

function checkDev() {
	if ($('#devtools').length) {
		if ($(window).width() < 576) {
			$('.canhcam-develop #devtools .header-devtools h3').html('Dev - XS');
		} else if ($(window).width() >= 576 && $(window).width() < 768) {
			$('.canhcam-develop #devtools .header-devtools h3').html('Dev - SM');
		} else if ($(window).width() >= 768 && $(window).width() < 992) {
			$('.canhcam-develop #devtools .header-devtools h3').html('Dev - MD');
		} else if ($(window).width() >= 992 && $(window).width() < 1200) {
			$('.canhcam-develop #devtools .header-devtools h3').html('Dev - LG');
		} else {
			$('.canhcam-develop #devtools .header-devtools h3').html('Dev - XL');
		}
	}
}

(function ($) {
	$.fn.drags = function (opt) {

		opt = $.extend({ handle: "", cursor: "move" }, opt);

		if (opt.handle === "") {
			var $el = this;
		} else {
			var $el = this.find(opt.handle);
		}

		return $el.find('.header-devtools').css('cursor', opt.cursor).on("mousedown", function (e) {
			// getSizeDevTo()
			if (opt.handle === "") {
				var $drag = $(this).parent().addClass('draggable');
			} else {
				var $drag = $(this).parent().addClass('active-handle').parent().addClass('draggable');
			}
			var z_idx = $drag.css('z-index'),
			    drg_h = $drag.outerHeight(),
			    drg_w = $drag.outerWidth(),
			    pos_y = $drag.offset().top + drg_h - e.pageY,
			    pos_x = $drag.offset().left + drg_w - e.pageX;
			$drag.css('z-index', 99999).parents().on("mousemove", function (e) {
				getSizeDevTo();
				$('.draggable').offset({
					top: e.pageY + pos_y - drg_h,
					left: e.pageX + pos_x - drg_w
				}).on("mouseup", function () {
					// getSizeDevTo()
					$(this).removeClass('draggable').css('z-index', z_idx);
				});
				$('#devtools .inline').offset({
					top: e.pageY + pos_y - drg_h
				});
				$('#devtools .online').offset({
					left: e.pageX + pos_x - drg_w
				});
			});
			e.preventDefault(); // disable selection
		}).on("mouseup", function () {
			// getSizeDevTo()
			if (opt.handle === "") {
				$(this).removeClass('draggable');
			} else {
				$(this).removeClass('active-handle').parent().removeClass('draggable');
			}
		});
	};
})(jQuery);

if (CANHCAM_APP.DEV_MODE) {

	$('body').append('<div id="devtools"> <div class="online"></div><div class="inline"></div><div class="header-devtools"> <h3>Dev - XL</h3> </div><div class="body-devtools"> <button class="btn btn-block btn-secondary btn-sm" type="button">Toogle Grid</button> </div></div>');

	$('#devtools').drags();
	createDevTo();

	$(document).ready(function () {
		if ($('.canhcam-develop #devtools').length) {
			var devtls = $('.canhcam-develop #devtools').find('.body-devtools button');
			devtls.click(function () {
				if ($(this).attr('data-click-state') == 1) {
					$(this).attr('data-click-state', 0);
					$('body').toggleClass('active');
					$('body').find('.devtool-gird').remove();
				} else {
					$(this).attr('data-click-state', 1);
					$('body').toggleClass('active');
					if (CANHCAM_APP.DEV_MODE_GIRD_FULL) {
						$('body').append('<div class="devtool-gird"><div class="container-fluid d-flex"><div class="row d-flex align-items-stretch bd-highlight"><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div></div></div></div>');
					} else {
						$('body').append('<div class="devtool-gird"><div class="container d-flex"><div class="row d-flex align-items-stretch bd-highlight"><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div><div class="col d-flex align-items-stretch"><div class="item"></div></div></div></div></div>');
					}
				}
			});
		}
	});
}

function getSizeDevTo() {
	$('#devtools .body-devtools .size .width').html('W: ' + $(window).width() + '');
	$('#devtools .body-devtools .size .height').html('H: ' + $(window).height() + '');
	$('#devtools .body-devtools .size .top').html('T: ' + $('#devtools').offset().top + '');
	$('#devtools .body-devtools .size .left').html('L: ' + $('#devtools').offset().left + '');
}

$(window).resize(function () {
	if ($('#devtools').length) {
		getSizeDevTo();
	}
});

function createDevTo() {
	$('#devtools .body-devtools').append('<div class="size"><div class="width">W: ' + $(window).width() + '</div><div class="height">H: ' + $(window).height() + '</div><div class="top">T: ' + $('#devtools').offset().top + '</div><div class="left">L: ' + $('#devtools').offset().left + '</div></div>');
}

function countUpCanhCam() {

	$('[data-count]').each(function () {
		var elm = $(this).offset().top;
		var docH = $(window).height();
		var docS = $(window).scrollTop();
		var padingTop = 0;
		if ($(this).attr('data-top') && $(this).attr('data-top').length) {
			padingTop = parseInt($(this).attr('data-top'));
		}
		var result = elm + padingTop - (docH + docS);
		var run = false;

		if (result <= 0 && !run) {
			var $this = $(this),
			    countTo = $this.attr('data-count'),
			    durationTo = parseInt($this.attr('data-duration'));
			$({ countNum: $this.text() }).animate({
				countNum: countTo
			}, {
				duration: durationTo,
				easing: 'linear',
				step: function step() {
					$this.text(Math.floor(this.countNum));
				},
				complete: function complete() {
					$this.text(this.countNum);
					run = true;
				}
			});
		}
	});
}

$(document).ready(function () {
	countUpCanhCam();
});

$(window).scroll(function () {
	countUpCanhCam();
});

$(window).resize(function () {
	countUpCanhCam();
});

function CanhCamChangeDataHoverClick() {
	$('[data-change]').each(function () {
		var newSrc = $(this).attr('data-new');
		var oldSrc = $(this).attr('data-old');
		var typeChange = $(this).attr('data-change');
		if (typeChange && typeChange.length > 0) {
			if (typeChange === 'src') {
				$(this).hover(function () {
					$(this).attr(typeChange, newSrc);
				}, function () {
					$(this).attr(typeChange, oldSrc);
				});
			} else if (typeChange === 'background' || typeChange === 'background-image') {
				$(this).hover(function () {
					$(this).css(typeChange, "url(" + newSrc + ")");
				}, function () {
					$(this).css(typeChange, "url(" + oldSrc + ")");
				});
			} else if (typeChange === 'class') {
				$(this).hover(function () {
					$(this).removeClass(oldSrc).addClass(newSrc);
				}, function () {
					$(this).removeClass(newSrc).addClass(oldSrc);
				});
			}
		}
	});
};

$(function () {
	CanhCamChangeDataHoverClick();
});

function setFooter() {
	var bodyHeight = $("body").outerHeight(),
	    headerHeight = $("header").outerHeight(),
	    footerHeight = $("footer").outerHeight(),
	    mainHeight = $("main").outerHeight(),
	    curentHeight = mainHeight + headerHeight + footerHeight,
	    curentfixedHeight = mainHeight + footerHeight,
	    newHeight = bodyHeight - (headerHeight + footerHeight),
	    newfixedHeight = bodyHeight - footerHeight;
	if ($(window).width() > CANHCAM_APP.DISPLAY_FOOTER) {
		if ($(window).width() <= CANHCAM_APP.CHANGE_GRID) {
			$("main").css('min-height', newfixedHeight + 'px');
		} else {
			if (!CANHCAM_APP.ACTIVE_FIXED_HEADER) {
				$("main").css('min-height', newHeight + 'px');
			} else {
				$("main").css('min-height', newfixedHeight + 'px');
			}
		}
	} else {
		$("main").css('min-height', 'initial');
	}
}

$(document).ready(function () {
	if (CANHCAM_APP.ACTIVE_FIXED_FOOTER) {
		setFooter();
	}
});

$(window).resize(function () {
	if (CANHCAM_APP.ACTIVE_FIXED_FOOTER) {
		setFooter();
	}
});
function setHeader(elm) {
	if (elm >= CANHCAM_APP.ACTIVE_HEADER_POSITION) {
		$("header").addClass('active');
	} else {
		$("header").removeClass('active');
	}
}

$(document).ready(function () {
	if (CANHCAM_APP.ACTIVE_FIXED_HEADER) {
		$("header").addClass('fixedheader');
		if ($(window).scrollTop() >= CANHCAM_APP.ACTIVE_HEADER_POSITION) {
			setHeader($(window).scrollTop());
		}
	} else {
		if ($(window).width() <= CANHCAM_APP.CHANGE_GRID) {
			$("header").addClass('fixedheader');
		} else {
			$("header").removeClass('fixedheader');
		}
	}
	if ($("header").hasClass("fixedheader")) {
		$("main").addClass('main-fixedheader');
	}
});

// Fixed Header
$(window).scroll(function () {
	setHeader($(document).scrollTop());
});
// Fixed Header
$(window).resize(function () {
	if (!CANHCAM_APP.ACTIVE_FIXED_HEADER) {
		if ($(window).width() <= CANHCAM_APP.CHANGE_GRID) {
			$("header").addClass('fixedheader');
		} else {
			$("header").removeClass('fixedheader');
		}
	}
});

function setMain() {
	var headerHeight = $("header").outerHeight();
	if ($(window).width() <= CANHCAM_APP.CHANGE_GRID) {
		$("main").css('padding-top', headerHeight + 'px');
	} else {
		if (!CANHCAM_APP.ACTIVE_PADDING_MAIN) {
			$("main").css('padding-top', '0px');
		} else {
			if (!CANHCAM_APP.ACTIVE_FIXED_HEADER) {
				$("main").css('padding-top', 'initial');
			} else {
				$("main").css('padding-top', headerHeight + 'px');
			}
		}
	}
}

$(document).ready(function () {
	setMain();
});

$(window).resize(function () {
	setMain();
});

function setHeaderTranparent(elm) {
	if (elm >= CANHCAM_APP.ACTIVE_HEADER_POSITION) {
		$("header").removeClass('has-tranparent');
	} else {
		$("header").addClass('has-tranparent');
	}
}

$(document).ready(function () {
	if (CANHCAM_APP.HEADER_TRANPARENT) {
		$("header").addClass('has-tranparent');
		if ($(window).scrollTop() >= CANHCAM_APP.ACTIVE_HEADER_POSITION) {
			setHeaderTranparent($(window).scrollTop());
		}
	}
});

// Tranparent Header
$(window).scroll(function () {
	if (CANHCAM_APP.HEADER_TRANPARENT) {
		setHeaderTranparent($(document).scrollTop());
	}
});

function canhcamID(e) {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	for (var i = 0; i < e; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}return text;
}

function b64EncodeUnicode(str) {
	return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
		return String.fromCharCode('0x' + p1);
	}));
}

function b64DecodeUnicode(str) {
	return decodeURIComponent(atob(str).split('').map(function (c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(''));
}

// Copyright 2014-2017 The Bootstrap Authors
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
function listToSelect() {
	$('[data-select]').each(function () {
		var list = $(this),
		    select = $(document.createElement('select')).insertBefore($(this).hide());
		select.addClass('custom-select').attr('data-select-show', '');
		$('>li a', this).each(function () {
			var option = $(document.createElement('option')).appendTo(select).val(this.href).html($(this).html());
		});
		list.hide().removeAttr('data-select').attr('data-select-changed', '');
		select.on('change', function () {
			var url = $(this).val();
			if (url) {
				window.location = url;
			}
			return false;
		});
	});
}

function selectChangeToList() {
	if (CANHCAM_APP.ACTIVE_LIST_TO_SELECT) {
		if ($(window).width() > CANHCAM_APP.CHANGE_GRID) {
			$('[data-select-changed]').each(function () {
				$(this).show().removeAttr('data-select-changed').attr('data-select', '');
			});
			$('[data-select-show]').remove();
		} else {
			listToSelect();
		}
	}
}

$(document).ready(function () {
	if (CANHCAM_APP.ACTIVE_LIST_TO_SELECT) {
		if ($(window).width() <= CANHCAM_APP.CHANGE_GRID_SM) {
			listToSelect();
		}
	}
});

$(window).resize(function () {
	if (CANHCAM_APP.ACTIVE_LIST_TO_SELECT) {
		selectChangeToList();
	}
});

console.log('%cCANHCAM', 'font-size:100px;color:#ff451a;text-shadow:0 1px 0 #f73936,0 2px 0 #f73936 ,0 3px 0 #f73936 ,0 4px 0 #f73936 ,0 5px 0 #f73936 ,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);');
console.log('%c CANHCAM ' + '%c - The best Web Solutions Provider', 'border-radius: 2px; padding: 3px; background: #ff451a; color: #FFF', 'color: #ff451a');
console.warn("CANHCAM warning: This is a browser feature intended for developers. If someone told you to copy and paste something here to enable a CANHCAM feature or 'hack' someone's account, it is a scam and will give them access to your CANHCAM account.");
document.onkeyup = function (a) {
	if ((a = a || window.event).altKey && a.ctrlKey && a.shiftKey && 13 == a.which) return $("body"), alert(b64DecodeUnicode("U0FORyBOR1VZ4buETiAtIDAxODg5NDgzODUwCmdpdGh1YjogZ2l0aHViLmNvbS9zYW5nc2FuZ2c5OQplbWFpbDogbm5zYW5nMjRAZ21haWwuY29tCg==")), !1;
};

// Ripple
function ccCreateRipple() {
	$('[ripple]').on('click', function (e) {
		var rippleDiv = $('<div class="ripple" />'),
		    rippleOffset = $(this).offset(),
		    rippleY = e.pageY - rippleOffset.top,
		    rippleX = e.pageX - rippleOffset.left,
		    ripple = $('.ripple');

		rippleDiv.css({
			top: rippleY - ripple.height() / 2,
			left: rippleX - ripple.width() / 2,
			background: $(this).attr("ripple-color")
		}).appendTo($(this));
		window.setTimeout(function () {
			rippleDiv.remove();
		}, 1500);
	});
}

$(document).ready(function () {
	ccCreateRipple();
});

$(document).ready(function () {
	if (CANHCAM_APP.ACTIVE_SELECT) {
		$(".select2").select2({
			placeholder: "Chọn một"
		});

		$('.select2').on("select2:select", function (e) {
			var valSelect = $(e.currentTarget).val();
		});
		$('.select2').on("select2:unselect", function (e) {
			var valUnselect = $(e.currentTarget).val();
		});
	}
});

function selectResset(e) {
	$(e).val(null).trigger("change", 0);
}

function canhCamStickyComtent() {

	$('[data-fix]').each(function () {
		$(this).css({
			"z-index": '500'
		});
		if ($(this).attr('data-top') && $(this).attr('data-top').length) {
			$(this).css({
				"top": $(this).attr('data-top')
			});
		}
		if ($(this).attr('data-left') && $(this).attr('data-left').length) {
			$(this).css({
				"left": $(this).attr('data-left')
			});
		}
		if ($(this).attr('data-bottom') && $(this).attr('data-bottom').length) {
			$(this).css({
				"bottom": $(this).attr('data-bottom')
			});
		}
		if ($(this).attr('data-right') && $(this).attr('data-right').length) {
			$(this).css({
				"right": $(this).attr('data-right')
			});
		}

		var toFix = 0;
		var typeFix = 'fixed';
		var changeFix = 'static';

		if ($(this).attr('data-fix') && $(this).attr('data-fix').length) {
			toFix = parseInt($(this).attr('data-fix'));
		}
		if ($(this).attr('data-fix-type') && $(this).attr('data-fix-type').length) {
			typeFix = $(this).attr('data-fix-type');
		}
		if ($(this).attr('data-fix-change') && $(this).attr('data-fix-change').length) {
			changeFix = $(this).attr('data-fix-change');
		}

		$(this).css({
			"position": typeFix
		});

		var scrollTop = $(window).scrollTop();
		var elementOffset = $(this).offset().top;
		var currentElementOffset = elementOffset - scrollTop;
		if (currentElementOffset <= toFix) {
			$(this).css({
				"position": changeFix,
				"top": toFix + 'px'
			});
		}
	});
}

$(document).ready(function () {
	canhCamStickyComtent();
});

$(window).scroll(function () {
	canhCamStickyComtent();
});

$(window).resize(function () {
	canhCamStickyComtent();
});

$(document).ready(function () {
	if (CANHCAM_APP.ACTIVE_VALIDATOR) {
		$('[data-toggle="validator"]').validator({
			feedback: {
				success: 'fa fa-check',
				error: 'fa fa-close'
			}
		}).on('submit', function (e) {
			if (e.isDefaultPrevented()) {
				$('[data-toggle="validator"]').find('select').parent('.form-group').addClass('has-danger');
			}
		});
		if ($('[data-toggle="validator"]').find('select').hasClass('has-success')) {
			this.removeClass('has-danger');
		}
	}
});

function CCHeader13() {
	$('.canhcam-header-13 #demoResAllInOneMenu').kResponsiveMenu({
		animationSpeed: 'fast', // slow, fast, 200
		resizeWidth: 'lg', // 'xs', 'sm', 'md', 'lg', 'xl', 480,
		menuType: 'horizontal', // horizontal, vertical
		menuPush: 'right', // right, left
		menuPushPosition: 'fixed', // absolute
		menuPushWidth: '300px', // px, %, rem
		menuBackDrop: true // px, %, rem
	});
};

$(document).ready(function () {
	CCHeader13();
	$('#language .dropdown .dropdown-menu').removeAttr('style');
});
// Fixed Header
$(window).scroll(function () {});

$(window).resize(function () {});

$(document).ready(function () {
	if (window.location.pathname === '/tin-tuc/tat-ca') {
		$('.canhcam-header-13 .k-responsive-menu .mainnav-2 .nav-item:nth-child(3) ').addClass('active');
	}
	// myFunction()
});

// var myVar;

// function myFunction() {
// 	myVar = setTimeout(showPage, 3000);
// }

// function showPage() {
// 	document.getElementById("myloader").style.display = "none";
// }

function startVideo() {
	var i = $('.canhcam-banner-1 .list-items , .canhcam-banner-3 .list-items');
	i.on('init', function (event, slick, currentSlide) {
		$('video').get(0).play();
	});
	$('.canhcam-banner-1 .list-items , .canhcam-banner-3 .list-items').each(function () {
		$('.canhcam-banner-1 .list-items , .canhcam-banner-3 .list-items').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: false,
			infinite: true,
			dots: true,
			speed: 300,
			// autoplay: true,
			autoplaySpeed: 2000,
			// centerMode: true,
			// variableWidth: true,
			responsive: [{
				breakpoint: 992,
				settings: {}
			}, {
				breakpoint: 480,
				settings: {}
			}]
		});
	});
};
// function resizeVideo() {
// 	var h = $('.canhcam-banner-1 .list-items .item video').height()
// 	var v = $('.canhcam-banner-1 .list-items .item')
// 	v.css({
// 		'height': h
// 	})
// }
function setHeight() {
	var getHeader = $('header').outerHeight();
	var getHeight = $('.canhcam-tab-1 .tab-list .tab-control').outerHeight();
	$('.canhcam-banner-1 .list-items .item ').css({
		'height': 'calc( 100vh - ' + (getHeight + getHeader) + 'px )'
	});
}
function setHeight2() {
	var getHeader = $('header').outerHeight();
	var getHeight = $('.canhcam-nav-1 .Module-180 .ModuleContent .tab-list .tab-control').outerHeight();
	$('.canhcam-banner-3 .list-items .item').css({
		'height': 'calc( 100vh - ' + (getHeight + getHeader) + 'px )'
	});
}
$(document).ready(function () {
	setHeight();
	setHeight2();
	startVideo();
	// resizeVideo()
});
$(window).resize(function () {
	setHeight();
	setHeight2();
});

$(function () {
	$('.canhcam-banner-2 .list-items').each(function () {
		$('.canhcam-banner-2 .list-items').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: false,
			infinite: false,
			dots: false,
			speed: 300,
			autoplay: false,
			autoplaySpeed: 2000
			// centerMode: true,
			// variableWidth: true,
		});
	});
});

$(function () {
	if ($('.canhcam-carousel-3 .owl-carousel').length) {
		$('.canhcam-carousel-3 .owl-carousel').owlCarousel({
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			items: 1,
			false: true,
			loop: false,
			center: false,
			padding: 10,
			margin: 20,
			navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
			nav: true,
			dots: false,
			autoplay: false,
			autoplayTimeout: 3000,
			autoplayHoverPause: false,
			callbacks: true,
			responsive: {
				480: {
					items: 1
				},
				768: {
					items: 2
				},
				992: {
					items: 3
				},
				1140: {
					items: 4
				}
			}
		});
	}
});

$(function () {
	if ($('.canhcam-slider-1 .owl-carousel , .canhcam-slider-2 .owl-carousel ').length) {
		$('.canhcam-slider-1 .owl-carousel , .canhcam-slider-2 .owl-carousel ').owlCarousel({
			items: 1,
			// stagePadding: 30,
			loop: true,
			center: true,
			padding: 0,
			margin: 0,
			navText: ['<i class="lnr lnr-arrow-left"></i>', '<i class="lnr lnr-arrow-right"></i>'],
			nav: true,
			dots: false,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			callbacks: true
			// responsive: {
			// 	768: {
			// 		nav: true
			// 	}
			// }
		});
	}
});

$(function () {
	if ($('.canhcam-carousel-6 .owl-carousel').length) {
		$('.canhcam-carousel-6 .owl-carousel').owlCarousel({
			items: 1,
			loop: false,
			center: false,
			navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
			nav: true,
			dots: false,
			autoplay: false,
			autoplayTimeout: 3000,
			autoplayHoverPause: false,
			callbacks: true,
			responsive: {
				480: {
					items: 1
				},
				768: {
					items: 2
				},
				992: {
					items: 4,
					nav: false
				}
			}
		});
	}
});

$(document).ready(function () {

	$('.canhcam-tab-1 .tab-pane .boxContainer4 .wrap-contact input').addClass('form-control');
	$('.canhcam-tab-1 .tab-content .list-key-time-nav li').click(function (e) {
		e.preventDefault();
		$('.canhcam-tab-1 .tab-content .list-key-time-nav li').removeClass('active');
		$(this).addClass('active');
	});
	$('.canhcam-schedule-1  .box-items a ').click(function (e) {
		e.preventDefault();
		$('.canhcam-schedule-1 .box-items a').removeClass('active');
		$(this).addClass('active');
	});
	$(function () {
		if ($('.canhcam-tab-1 .owl-carousel ').length) {
			var _$$owlCarousel;

			$('.canhcam-tab-1 .owl-carousel ').owlCarousel((_$$owlCarousel = {
				items: 1,
				center: true,
				loop: false
			}, _defineProperty(_$$owlCarousel, "center", false), _defineProperty(_$$owlCarousel, "navText", ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']), _defineProperty(_$$owlCarousel, "nav", true), _defineProperty(_$$owlCarousel, "dots", false), _defineProperty(_$$owlCarousel, "autoplay", false), _defineProperty(_$$owlCarousel, "autoplayTimeout", 3000), _defineProperty(_$$owlCarousel, "autoplayHoverPause", false), _defineProperty(_$$owlCarousel, "callbacks", true), _defineProperty(_$$owlCarousel, "margin", 15), _defineProperty(_$$owlCarousel, "responsive", {
				480: {
					items: 1
				},
				768: {
					items: 2
				},
				992: {
					items: 5,
					nav: false
				}
			}), _$$owlCarousel));
		}
	});
	var modalManager = $("body").data("modalmanager");
	var openModals = modalManager.getOpenModals();
	modalManager.removeLoading();
});
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	// e.stopPropagation();
	// var target = $(e.target).attr("href");
	var target = $(this).attr('href');

	$('html, body').stop().animate({
		scrollTop: $(target).offset().top - 60
	}, 'slow');

	$('.canhcam-tab-1 .tab-content .box-items a ').click(function (e) {
		e.preventDefault();
		$('.canhcam-tab-1 .tab-content .box-items a').removeClass('active');
		$(this).addClass('active');
	});
});
// $('a[href*=\\#]:not([href=\\#]').on('click', function (e) {
// 	var href = $(this).attr('href');
// 	$('html, body').animate({
// 		scrollTop: $(href).offset().top - 50
// 	}, 'slow');
// 	e.preventDefault();
// });

$(function () {});

$(function () {
	// if ($('.canhcam-carousel-2 .owl-carousel').length) {
	//     $('.canhcam-carousel-2 .owl-carousel').owlCarousel({
	//         items: 1,
	// 		loop: false,
	//         center: false,
	//         navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
	// 		nav: true,
	//         dots: false,
	//         autoplay: false,
	//         autoplayTimeout: 3000,
	//         autoplayHoverPause: false,
	//         callbacks: true,
	//         margin: 30,
	//         responsive: {
	//             480: {
	// 				items: 1
	//             },
	//             768: {
	// 				items: 2,
	//             },
	//             992: {
	// 				items: 4,
	// 				nav: false
	//             }
	//         }
	//     });
	// }


});

// $(function() {
//     if ($('.canhcam-slider-1 .owl-carousel').length) {
// 		$('.canhcam-slider-1 .owl-carousel').owlCarousel({
//             items: 1,
//             // stagePadding: 30,
//             loop: true,
//             center: true,
//             padding: 0,
//             margin: 0,
//             navText: ['<i class="lnr lnr-arrow-left"></i>', '<i class="lnr lnr-arrow-right"></i>'],
//             nav: true,
// 			dots: false,
//             autoplay: true,
//             autoplayTimeout: 5000,
// 			autoplayHoverPause: true,
// 			callbacks: true,
// 			// responsive: {
// 			// 	768: {
// 			// 		nav: true
// 			// 	}
// 			// }
//         });
//     }

// });


function TabClick() {

	var swiper = new Swiper('.canhcam-slider-6 .swiper-container', {
		// loop: true,
		lazy: true,
		autoHeight: true,
		// spaceBetween: 20,
		slidesPerView: 1,
		centeredSlides: true,
		// loopFillGroupWithBlank: true,
		// slidesPerGroup: 3,
		// slidesPerView: 'auto',
		autoplay: {
			delay: 3000,
			disableOnInteraction: true
		},
		// pagination: {
		// 	el: '.swiper-pagination',
		// 	dynamicBullets: true,
		// 	clickable: true,
		// 	renderBullet: function (index, className) {
		// 		return '<span class="' + className + '">' + (index + 1) + '</span>';
		// 	},
		// },
		// hashNavigation: {
		// 	watchState: true,
		// },
		navigation: {
			nextEl: '.canhcam-slider-6 .swiper-button-next',
			prevEl: '.canhcam-slider-6 .swiper-button-prev'
		},
		// breakpoints: {
		// 	1024: {
		// 		slidesPerView: 3,
		// 	},
		// 	768: {
		// 		slidesPerView: 3,
		// 	},
		// 	640: {
		// 		slidesPerView: 2,
		// 	},
		// 	320: {
		// 		slidesPerView: 1,
		// 	}
		// },
		on: {
			init: function init() {
				checkIndexSlider(this);
			},
			slideChange: function slideChange() {
				checkIndexSlider(this);
			}
		}
	});

	console.log('123');
	// swiper.on('init', function (e) {
	// 	console.log(e);
	// });

	//Set Active Slide 2
	// swiper.slideTo(1);

	// $('.canhcam-slider-6 .list-nav .item').on('click', function() {

	// 	swiper.slideTo($(this).attr('slide-to'));
	// })
}
function widthContent() {
	var widthImg = $('.canhcam-slider-6 .swiper-container .swiper-wrapper .swiper-slide img').outerWidth();
	$('.canhcam-slider-6 .swiper-container .swiper-wrapper .swiper-slide .content').css({
		'width': widthImg
	});
}
$(document).ready(function () {
	$('.canhcam-nav-1 .tab-control .col4[data-toggle="tab"]').on('shown.bs.tab', function (e) {

		TabClick();
		widthContent();
	});

	// $('.canhcam-nav-1 .tab-control .col4 ').click(function() {
	// 	setTimeout(() => {
	// 	}, 1000);

	// });
});
$(window).resize(function () {
	$('.canhcam-nav-1 .tab-control .col4[data-toggle="tab"]').on('shown.bs.tab', function (e) {

		TabClick();
		widthContent();
	});
});
function checkIndexSlider(e) {
	var trai, phai;
	var defaultelm = $(e.slides[0]).attr('bg-img');
	console.log(defaultelm);
	// console.log(e.previousIndex);
	// console.log(e.realIndex);
	// console.log(e.activeIndex);
	// console.log(e.slides);
	if (!e.previousIndex || e.previousIndex === 'undefined') {
		trai = defaultelm;
		phai = $(e.slides[e.activeIndex + 1]).attr('bg-img') ? $(e.slides[e.activeIndex + 1]).attr('bg-img') : defaultelm;
	} else {
		trai = $(e.slides[e.activeIndex - 1]).attr('bg-img') ? $(e.slides[e.activeIndex - 1]).attr('bg-img') : $(e.slides[e.activeIndex]).attr('bg-img');
		phai = $(e.slides[e.activeIndex + 1]).attr('bg-img') ? $(e.slides[e.activeIndex + 1]).attr('bg-img') : $(e.slides[e.activeIndex]).attr('bg-img');
	}
	// $('.canhcam-slider-6 div[slide-to]').removeClass('active')
	// $('.canhcam-slider-6 div[slide-to="'+e.realIndex+'"]').addClass('active')

	$('.canhcam-slider-6 .swiper-button-prev-thumb').css({
		"background-image": "url(" + trai + ")"
	});
	$('.canhcam-slider-6 .swiper-button-next-thumb').css({
		"background-image": "url(" + phai + ")"
	});
}

$(function () {
	if ($('.canhcam-schedule-1 .owl-carousel').length) {
		var _$$owlCarousel2;

		$('.canhcam-schedule-1 .owl-carousel').owlCarousel((_$$owlCarousel2 = {
			items: 3,
			center: true,
			loop: false
		}, _defineProperty(_$$owlCarousel2, "center", false), _defineProperty(_$$owlCarousel2, "navText", ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']), _defineProperty(_$$owlCarousel2, "nav", true), _defineProperty(_$$owlCarousel2, "dots", false), _defineProperty(_$$owlCarousel2, "autoplay", false), _defineProperty(_$$owlCarousel2, "autoplayTimeout", 3000), _defineProperty(_$$owlCarousel2, "autoplayHoverPause", false), _defineProperty(_$$owlCarousel2, "callbacks", true), _defineProperty(_$$owlCarousel2, "margin", 0), _defineProperty(_$$owlCarousel2, "responsive", {
			768: {
				items: 2,
				margin: 15
			},
			992: {
				items: 5,
				nav: false
			}
		}), _$$owlCarousel2));
	}
});

$(document).ready(function () {
	$(".canhcam-nav-5 .nav-list .custom-select").on("change", function () {
		if ($(this).val() != '') window.location.href = $(this).val();
	});
});

$(document).ready(function () {});

$(document).ready(function () {
	AOS.init();
});

$(function () {});

function changeNewsItemNews2() {
	if ($(window).width() > CANHCAM_APP.CHANGE_GRID) {
		$('.canhcam-news-2 .news-hot').each(function () {
			var geth = $(this).find('.top-list .item:first-child figure').outerHeight();
			var countitem = $(this).find('.part-list').find('.item').length;
			$(this).find('.part-list .item figure').each(function () {
				$(this).css({
					'height': 'calc(' + geth / countitem + 'px - 1rem)'
				});
			});
		});
	} else {
		$('.canhcam-news-2 .part-list .item figure').each(function () {
			$(this).css({
				'height': 'initial'
			});
		});
	}
}

$(document).ready(function () {
	changeNewsItemNews2();
	$('.canhcam-news-2 .news-list #list').click(function (event) {
		event.preventDefault();
		$(this).addClass('active');
		$('.canhcam-news-2 .news-list #grid').removeClass('active');
		$('.canhcam-news-2 #products').addClass('list-group-wrapper').removeClass('grid-group-wrapper');
	});
	$('.canhcam-news-2 .news-list #grid').click(function (event) {
		event.preventDefault();
		$(this).addClass('active');
		$('.canhcam-news-2 .news-list #list').removeClass('active');
		$('.canhcam-news-2 #products').removeClass('list-group-wrapper').addClass('grid-group-wrapper');
	});
	setTimeout(function () {
		var nav = $('.ccnews .canhcam-nav-2');
		if (nav.length) {
			if (!$(".ccnews .canhcam-nav-2 .nav-item").first().hasClass("active")) {
				var $container = $("html,body");
				var $scrollTo = $('.ccnews .canhcam-nav-2 .nav-item').first();
				var temp = $scrollTo.offset().top - $container.offset().top + $container.scrollTop();
				$container.animate({ scrollTop: temp - 150, scrollLeft: 0 }, 300);
			}
		}
	}, 100);
});

$(window).resize(function () {
	changeNewsItemNews2();
});

$(document).ready(function () {

	// $('.canhcam-about-5 .c-accordion__list')
	$('.canhcam-suppport-1 .list-detail .item .lead').hide();
	// $('.canhcam-suppport-1 .list-detail .content ').trigger('click');
	$('.canhcam-suppport-1 .list-detail .content ').click(function () {
		if ($(this).next().is(':hidden') === true) {
			$('.canhcam-suppport-1 .list-detail .lead').slideUp('fast');
			$('.canhcam-suppport-1 .list-detail .content ').removeClass('active');
			$(this).next().slideDown('fast');
			$(this).addClass('active');
		} else {
			$('.canhcam-suppport-1 .list-detail .content ').removeClass('active');
			$(this).next().slideUp('fast');
		}
	});
});
function CCForm1() {
	$('.canhcam-form-1 .validator').validator().on('submit', function (e) {
		if (e.isDefaultPrevented()) {} else {
			$(this)[0].reset();
		}
	});
};

$(function () {
	CCForm1();
});

$(window).resize(function () {});
$(document).ready(function () {
	$('.canhcam-form-1 .wrap-contact .form-group input').addClass('form-control');
});

$(function () {
	$(".Module-207").appendTo($("#jobsub"));
});

function changeNewsDetail1() {
	$(".canhcam-news-details-1 .news-read").lightGallery({
		thumbnail: true,
		animateThumb: false,
		showThumbByDefault: false,
		selector: '.item-news-read'
	});
}
function createNewsSocial1() {
	var newsFullPath = document.URL;
	var newsFullPathEncode = encodeURIComponent(document.URL);
	$('.fb-share-button').attr('data-href', newsFullPath);
	$('.fb-share-button .fb-xfbml-parse-ignore').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + newsFullPathEncode + '&src=sdkpreparse');
	$('.twitter-share-button').attr('data-url', newsFullPath);
}

function changeIMGtoDiv1() {
	$('.canhcam-news-details-1 .othernews .item figure').each(function () {
		var tmp = $(this).find('img').attr('src');
		$(this).append('<div class="thumb"></div>');
		$(this).find('.thumb').css({
			"background-image": "url(" + tmp + ")",
			"background-position": "center center",
			"background-size": "cover"
		});
	});
}

$(document).ready(function () {
	changeNewsDetail1();
	createNewsSocial1();
	changeIMGtoDiv1();
});

$(window).resize(function () {
	changeIMGtoDiv1();
});

$(document).ready(function () {});

$(window).resize(function () {});

function CCForm3() {
	$('.canhcam-form-3 .validator').validator().on('submit', function (e) {
		if (e.isDefaultPrevented()) {} else {
			$(this)[0].reset();
		}
	});
};

$(function () {
	CCForm3();
});

$(window).resize(function () {});

$(document).ready(function () {
	$('.canhcam-form-3 .form-group input,.canhcam-form-3 .form-group textarea').addClass('form-control');
	$('.canhcam-form-3 .frm-btnwrap .frm-btn input').addClass('citiBtn btnGrey');
	$('.canhcam-form-3 .qdropdown select').addClass('custom-select');
	$('.ccrightform').appendTo('#faqform');
	$('.canhcam-suppport-1 .form-group input[type="text"],.canhcam-suppport-1 .form-group textarea').addClass('form-control');
	$('.canhcam-suppport-1 .frm-btnwrap .frm-btn input[type="submit"]').addClass('text-center mt-4 citiBtn btnGrey text-uppercase');
});
function navCollapseAllPanels3() {
	var searchTerm, panelContainerId;
	$.expr[':'].containsCaseInsensitive = function (n, i, m) {
		return jQuery(n).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
	};

	$('.canhcam-nav-3 #accordion_search_bar').on('change keyup paste click', function () {
		searchTerm = $(this).val();
		$('.canhcam-nav-3 #accordion > .card').each(function () {
			panelContainerId = '#' + $(this).attr('id');
			$(panelContainerId + ':not(:containsCaseInsensitive(' + searchTerm + '))').hide();
			$(panelContainerId + ':containsCaseInsensitive(' + searchTerm + ')').show();
		});
	});
	$(".canhcam-nav-3 #accordion .card").on("click", function () {
		checkClickPanel3($(this));
	});
}

function checkOpenPanel3() {
	$('.canhcam-nav-3 #accordion .card').each(function () {
		var getactive = $(this).find('.collapse.show').length;
		if (getactive > 0) {
			$(this).addClass('active');
		} else {
			$(this).removeClass('active');
		}
	});
}
function checkClickPanel3(e) {
	var name = e.find('a').attr('href');
	$(name).on('hidden.bs.collapse', function () {
		e.removeClass('active');
	});
	$(name).on('shown.bs.collapse', function () {
		e.addClass('active');
	});
}

function navCollapseForm3() {
	$('.canhcam-nav-3 .validator').validator().on('submit', function (e) {
		if (e.isDefaultPrevented()) {} else {
			$(this)[0].reset();
		}
	});
};

$(function () {
	navCollapseForm3();
});

$(document).ready(function () {

	navCollapseAllPanels3();
	checkOpenPanel3();
});

// $(document).ready(function(){
// 	$('.canhcam-about-3 .list-img').lightGallery({
// 		thumbnail:true,
// 		selector: '.item'
// 	});
// })


$(document).ready(function () {});

$(window).resize(function () {});

$(document).ready(function () {

	$(".canhcam-gallery-3 .gallery-details .gallery-lists").lightGallery({
		width: '700px',
		height: '470px',
		mode: 'lg-fade',
		addClass: 'canhcam-gallery-3 canhcam-video-fixed-size',
		counter: false,
		download: false,
		startClass: '',
		enableSwipe: false,
		enableDrag: false,
		speed: 500,
		thumbnail: true,
		animateThumb: false,
		showThumbByDefault: false,
		selector: '.item'
	});
});

function changeNewsDetail1() {
	$(".canhcam-news-details-1 .news-read").lightGallery({
		thumbnail: true,
		animateThumb: false,
		showThumbByDefault: false,
		selector: '.item-news-read'
	});
}
function createNewsSocial1() {
	var newsFullPath = document.URL;
	var newsFullPathEncode = encodeURIComponent(document.URL);
	$('.fb-share-button').attr('data-href', newsFullPath);
	$('.fb-share-button .fb-xfbml-parse-ignore').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + newsFullPathEncode + '&src=sdkpreparse');
	$('.twitter-share-button').attr('data-url', newsFullPath);
}

function changeIMGtoDiv1() {
	$('.canhcam-news-details-1 .othernews .item figure').each(function () {
		var tmp = $(this).find('img').attr('src');
		$(this).append('<div class="thumb"></div>');
		$(this).find('.thumb').css({
			"background-image": "url(" + tmp + ")",
			"background-position": "center center",
			"background-size": "cover"
		});
	});
}

$(document).ready(function () {
	changeNewsDetail1();
	createNewsSocial1();
	changeIMGtoDiv1();
	if (window.location.pathname === '/tin-tuc/tat-ca') {
		$('.canhcam-nav-5 ').hide();
	}
});

$(window).resize(function () {
	changeIMGtoDiv1();
});
// $(document).ready(function(){
// 	$('.canhcam-service-1 .list-item').isotope({
// 		itemSelector: '.item',
// 		layoutMode: 'fitRows'
// 	})
// 	// $('.canhcam-service-1 .list-button ul li ').click(function(e){
// 	// 	// e.preventDefault();
// 	// 	// $('.canhcam-service-1 .list-button ul li ').removeClass('active');
// 	// 	// $(this).addClass('active');
// 	// 	var selector = $(this).attr('data-filter');
// 	// 	var $grid = $('.canhcam-service-1 .list-item').isotope({
// 	// 		filter: selector,
// 	// 		isAnimated: false,
// 	// 		transitionDuration: '2s',
// 	// 		// gutterWidth: 10
// 	// 	});
// 	// 	$grid.imagesLoaded().progress( function() {
// 	// 		$grid.isotope('layout');
// 	// 	});
// 	// })
// 	return false;
// 	// $( ".Module-223" ).appendTo( $( "#servicesub" ) );
// });


function CCForm4() {
	$('.canhcam-form-4 .validator').validator().on('submit', function (e) {
		if (e.isDefaultPrevented()) {} else {
			$(this)[0].reset();
		}
	});
};

$(function () {
	CCForm4();
});

$(window).resize(function () {});

// $(function(){

// 	$('.canhcam-tab-1 .tab-list .tab-control a').click(function(){
// 	$(this).addClass('active show').siblings().removeClass('active show');
// 	});
// })
// $(document).ready(function(){
// 	$('.canhcam-club-details-04 .canhcam-slider-6 .list-nav').owlCarousel({
// 		items: 6,
// 		margin: 20,
// 		nav: false,
// 		dots: false,
// 		// responsive : {
// 		// 	768 : {
// 		// 		items: 3
// 		// 	},
// 		// 	992: {
// 		// 		nav: false,
// 		// 		items: 6

// 		// 	}
// 		// }
// 	});
// })
// function getBG1(time) {
//     $('.canhcam-boxes-1 .item').each(function() {
//         var newgt = $(this).find('figcaption p').innerHeight()
//         $(this).find('figcaption p').css({
//             "height": "0px",
//             "overflow": "hidden"
//         })
//         var em = $(this).find('figure').innerHeight()
//         var newg = $(this).find('figcaption').innerHeight()
//         $(this).hover(function() {
//             $(this).find('figcaption').stop().animate({
//                 height: em + "px"
//             }, {
//                 duration: time,
//                 complete: function() {}
//             })
//             $(this).find('figcaption p').stop().animate({
//                 height: newgt + "px"
//             }, {
//                 duration: time,
//                 complete: function() {}
//             })
//         }, function() {
//             $(this).find('figcaption').stop().animate({
//                 height: newg + "px"
//             }, {
//                 duration: time,
//                 complete: function() {}
//             })
//             $(this).find('figcaption p').stop().animate({
//                 height: "0px"
//             }, {
//                 duration: time,
//                 complete: function() {}
//             })
//         });
//     })
// }

// $(document).ready(function() {
//     if ($(window).width() > CANHCAM_APP.CHANGE_GRID) {
//         getBG1(1000)
//     }
// });

$(document).ready(function () {
	$('.lichhoc .content:not(:first) .lead').hide();
	$('.lichhoc .lead').hide();
	$(".lichhoc .list-detail").on("click", ".content", function () {
		// if ($(this).next().is(':hidden') === true) {
		// $(this).addClass('active');
		// $(this).next().show();
		// } else {
		// $('.lichhoc .content').removeClass('active');
		// }
		if ($(this).next().is(':hidden') === true) {
			$('.lichhoc .lead').slideUp('fast');
			$('.lichhoc .content').removeClass('active');
			$(this).next().slideDown('fast');
			$(this).addClass('active');
		} else {
			$('.lichhoc .content').removeClass('active');
			$(this).next().slideUp('fast');
		}
	});

	$('.canhcam-club-details-02 .nav-calender  li').click(function (e) {
		e.preventDefault();
		$('.canhcam-club-details-02 .nav-calender  li').removeClass('active');
		$(this).addClass('active');
	});
});
$(document).ready(function () {});

// $(function() {
// 	$('.canhcam-club-details-04 .list-thumb').slick({
// 		centerMode: true,
// 		centerPadding: '25%',
// 		slidesToShow: 1,
// 		arrows: true,
// 		asNavFor: '.canhcam-club-details-04 .list-nav',
// 		responsive: [{
// 				breakpoint: 992,
// 				settings: {
// 					centerPadding: '0',
// 					slidesToShow: 1
// 				}
// 			}

// 		]

// 	});
// 	$('.canhcam-club-details-04 .list-nav').slick({
// 		slidesToShow: 7,
// 		slidesToScroll: 7,
// 		dots: false,
// 		asNavFor: '.canhcam-club-details-04 .list-thumb',
// 		focusOnSelect: true,
// 		infinite: false,
// 		centerPadding: 30
// 	});
// });
// $('.list-thumb').on('afterChange', function(event, slick, currentSlide) {
// 	$('.list-nav').slick('slickGoTo', currentSlide);
// 	var currrentNavSlideElem = '.list-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
// 	$('.list-nav .slick-slide.is-active').removeClass('is-active');
// 	$(currrentNavSlideElem).addClass('is-active');
// });

// $('.list-nav').on('click', '.slick-slide', function(event) {
// 	event.preventDefault();
// 	var goToSingleSlide = $(this).data('slick-index');

// 	$('.list-thumb').slick('slickGoTo', goToSingleSlide);
// });


$(document).ready(function () {
	$('.canhcam-club-details-04 .list-nav .item').on('click', function () {
		$('.canhcam-club-details-04 .list-nav .item').removeClass('active');
		$(this).addClass('active');
	});
});

$(function () {
	$('.canhcam-club-details-05 .list-thumb').slick({
		centerMode: true,
		centerPadding: '30%',
		slidesToShow: 1,
		arrows: true,
		responsive: [{
			breakpoint: 992,
			settings: {
				centerPadding: '0',
				slidesToShow: 1
			}
		}, {
			breakpoint: 480,
			settings: {
				centerPadding: '0',
				slidesToShow: 1
			}
		}]

	});
	$('.canhcam-club-details-05 .list-nav').slick({
		slidesToShow: 7,
		slidesToScroll: 7,
		dots: false,
		focusOnSelect: false,
		infinite: false,
		centerPadding: 30
		// responsive: [{
		//     breakpoint: 1024,
		//     settings: {
		//         slidesToShow: 5,
		//         slidesToScroll: 5,
		//     }
		// }, {
		//     breakpoint: 640,
		//     settings: {
		//         slidesToShow: 4,
		//         slidesToScroll: 4,
		//     }
		// }, {
		//     breakpoint: 420,
		//     settings: {
		//         slidesToShow: 3,
		//         slidesToScroll: 3,
		//     }
		// }]


	});
});
// $('.list-thumb').on('afterChange', function(event, slick, currentSlide) {
//     $('.list-nav').slick('slickGoTo', currentSlide);
//     var currrentNavSlideElem = '.list-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
//     $('.list-nav .slick-slide.is-active').removeClass('is-active');
//     $(currrentNavSlideElem).addClass('is-active');
// });

// $('.list-nav').on('click', '.slick-slide', function(event) {
//     event.preventDefault();
//     var goToSingleSlide = $(this).data('slick-index');

//     $('.list-thumb').slick('slickGoTo', goToSingleSlide);
// });

// $(".canhcam-club-details-05 .list-thumb").lightGallery({
//     youtubePlayerParams: {
//         modestbranding: 1,
//         showinfo: 0,
//         rel: 0,
//         controls: 0
//     },
//     // width: '700px',
//     // height: '470px',
//     mode: 'lg-fade',
//     addClass: 'canhcam-slider-5 canhcam-video-fixed-size',
//     counter: false,
//     download: false,
//     startClass: '',
//     enableSwipe: false,
//     enableDrag: false,
//     speed: 500,
//     loadYoutubeThumbnail: true,
//     youtubeThumbSize: 'default',
//     thumbnail: true,
//     animateThumb: false,
//     showThumbByDefault: false,
//     selector: '.item'
// });
function checkTab1() {
	$('.canhcam-club-details-06 #cct-01-tab').tab('show').parents('li').addClass('active');
	$('.canhcam-club-details-06 a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		$(this).parents('ul').find('li').removeClass('active');
		$(this).parents('li').addClass('active');
	});
}

$(document).ready(function () {
	checkTab1();
});
//# sourceMappingURL=app.js.map
