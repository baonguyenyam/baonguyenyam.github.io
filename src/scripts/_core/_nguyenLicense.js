(function () {
	'use strict';
	var _npnb = {
		s: '&#x43;&#x6f;&#x64;&#x65;&#x20;&#x62;&#x79;&#x20;&#x4e;&#x67;&#x75;&#x79;&#x65;&#x6e;&#x20;&#x50;&#x68;&#x61;&#x6d;&#xa;&#x54;&#x65;&#x6c;&#x3a;&#x20;&#x36;&#x38;&#x32;&#x2d;&#x32;&#x30;&#x33;&#x2d;&#x31;&#x33;&#x33;&#x34;&#xa;&#x45;&#x6d;&#x61;&#x69;&#x6c;&#x3a;&#x20;&#x62;&#x61;&#x6f;&#x6e;&#x67;&#x75;&#x79;&#x65;&#x6e;&#x79;&#x61;&#x6d;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;',
		HTMLEntity: (s) => {
			var t = document.createElement("textarea");
			t.innerHTML = s;
			return t.value;
		}, 
		init: () => {
			document.onkeyup = function (e) {
				if (e.shiftKey && e.altKey && e.ctrlKey && e.which == 13) {
					alert(_npnb.HTMLEntity(_npnb.s))
				}
			}
		}
	}
	_npnb.init()
})();