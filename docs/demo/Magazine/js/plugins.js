/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function J(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return I("flexWrap")},s.flexboxlegacy=function(){return I("boxDirection")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!I("indexedDB",a)},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.backgroundColor,"rgba")},s.hsla=function(){return C("background-color:hsla(120,40%,100%,.5)"),F(j.backgroundColor,"rgba")||F(j.backgroundColor,"hsla")},s.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return I("backgroundSize")},s.borderimage=function(){return I("borderImage")},s.borderradius=function(){return I("borderRadius")},s.boxshadow=function(){return I("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return D("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return I("animationName")},s.csscolumns=function(){return I("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.cssreflections=function(){return I("boxReflect")},s.csstransforms=function(){return!!I("transform")},s.csstransforms3d=function(){var a=!!I("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return I("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var K in s)B(s,K)&&(x=K.toLowerCase(),e[x]=s[K](),v.push((e[x]?"":"no-")+x));return e.input||J(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
;
/*//////////////////////////////////////////////////////////////////////*/
/*//ANIMATED////////////////////////////////////////////////////////////*/
/*//////////////////////////////////////////////////////////////////////*/

/*ANIMATED IN-OUT
==========================================*/
$(function() {
	$('[data-animated-box=click]').click(function(){
		$(this).find("[data-animated-in]").each(function() {
			var animOut = $(this).attr('data-animated-out');
			$(this).removeClass('animated '+ animOut);
			var animIn = $(this).attr('data-animated-in');
			$(this).addClass('animated '+ animIn);
		});
	});
	$('[data-animated-box=hover]').hover(function(){
		$(this).find("[data-animated-in]").each(function() {
			var animOut = $(this).attr('data-animated-out');
			$(this).removeClass('animated '+ animOut);
			var animIn = $(this).attr('data-animated-in');
			$(this).addClass('animated '+ animIn);
		});
	});
	$('[data-animated-box]').mouseleave(function(){
		$(this).find("[data-animated-out]").each(function() {
			var animIn = $(this).attr('data-animated-in');
			$(this).removeClass('animated '+ animIn);
			var animOut = $(this).attr('data-animated-out');
			$(this).addClass('animated '+ animOut);
		});
	});

	

});

(function ($) {$.extend($.fn, {
	
	FVN_FW_DataFade: function (x) {

			$(window).scroll( function(){
				$('[data-fade]').each(function(i){
					var me = this;
					var bottom_of_object = $(this).offset().top + $(this).outerHeight();  //options 1
					var top_of_object = $(this).offset().top; //options 2
					var bottom_of_window = $(window).scrollTop() + $(window).height();
					// FADE FOREVER
					//var animfade = $(this).attr('data-fade');
					//$(this).removeClass(animfade);
					if( bottom_of_window > top_of_object ){
					  var animfade = $(this).attr('data-fade');
					  $(this).addClass('animated '+ animfade);
						//setInterval(function(){
						//$(me).addClass('opacity10');
						//}, 2000);
					}

				}); 
			 });
	},

	FVN_FW_DataReplay: function (x) {

		return this.each(function () {
			var me = this;
			var animtype = $(this).attr('data-replay');
			var anim = $(this).attr('data-animated-auto');

			if(!animtype || animtype=="" || isNaN(animtype)){		
				
			} else if(animtype<0){
				$(this).addClass('runloop');
		    }
			else {
				
			setInterval(function(){
				$(me).removeClass('animated '+ anim);
			}, (animtype-100));
			 
			setInterval(function(){
				$(me).addClass('animated '+ anim);
			}, animtype);

				
			}

		})
	}, 


	FVN_FW_DataAnimated: function (x) {
	
	return this.each(function () {
		
		var animtype = $(this).attr('data-type');
		var anim = $(this).attr('data-animated');
		
		if(!animtype || animtype=="hover"){
			$(this).hover(function(){
				$(this).addClass('animated '+ anim);
			});
			$(this).mouseleave(function(){
				$(this).removeClass('animated '+ anim);
			});
		}
		else if(animtype=="click"){
			
			$(this).click(function() {
		        $(this).removeClass('animated '+ anim).delay(10).queue(function(next){
		            $(this).addClass('animated '+ anim);
		            next();
		        });
		        return false;
		    });		

		}
		else if(animtype=="focus"){
			$(this).focus(function(){
				$(this).addClass('animated '+ anim);
			});
			$(this).focusout(function(){
				$(this).removeClass('animated '+ anim);
			});
		}
	

	})	

	},

	FVN_FW_DataAnimatedAuto: function (x) {

	return this.each(function () {
		var anim = $(this).attr('data-animated-auto');
		$(this).addClass('animated '+ anim);
	
	})
	

	}
	
})})(jQuery);

$(document).ready(function(e) {
	$('[data-fade]').FVN_FW_DataFade();
	$('[data-replay]').FVN_FW_DataReplay();
	$('[data-animated]').FVN_FW_DataAnimated();
	$('[data-animated-auto]').FVN_FW_DataAnimatedAuto();
});

/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') { throw new Error('Bootstrap\'s JavaScript requires jQuery') }

/* ========================================================================
 * Bootstrap: transition.js v3.1.1
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd',
      'MozTransition'    : 'transitionend',
      'OTransition'      : 'oTransitionEnd otransitionend',
      'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.1.1
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent.trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one($.support.transition.end, removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.1.1
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (!data.resetText) $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
    e.preventDefault()
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.1.1
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true
  }

  Carousel.prototype.cycle =  function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getActiveIndex = function () {
    this.$active = this.$element.find('.item.active')
    this.$items  = this.$active.parent().children()

    return this.$items.index(this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getActiveIndex()

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) })
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    if ($next.hasClass('active')) return this.sliding = false

    var e = $.Event('slide.bs.carousel', { relatedTarget: $next[0], direction: direction })
    this.$element.trigger(e)
    if (e.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      this.$element.one('slid.bs.carousel', function () {
        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
        $nextIndicator && $nextIndicator.addClass('active')
      })
    }

    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid.bs.carousel') }, 0)
        })
        .emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger('slid.bs.carousel')
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this   = $(this), href
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      $carousel.carousel($carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.1.1
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      actives.collapse('hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')
      [dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')
        [dimension]('auto')
      this.transitioning = 0
      this.$element.trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
      [dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element
      [dimension](this.$element[dimension]())
      [0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && option == 'show') option = !option
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    $target.collapse(option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.1.1
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle=dropdown]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)

      $this.focus()
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).focus()
      return $this.click()
    }

    var desc = ' li:not(.divider):visible a'
    var $items = $parent.find('[role=menu]' + desc + ', [role=listbox]' + desc)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).focus()
  }

  function clearMenus(e) {
    $(backdrop).remove()
    $(toggle).each(function () {
      var $parent = getParent($(this))
      var relatedTarget = { relatedTarget: this }
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu], [role=listbox]', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.1.1
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options   = options
    this.$element  = $(element)
    this.$backdrop =
    this.isShown   = null

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.escape()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(document.body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one($.support.transition.end, function () {
            that.$element.focus().trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.focus().trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one($.support.transition.end, $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.focus()
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.removeBackdrop()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (callback) {
      callback()
    }
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  var old = $.fn.modal

  $.fn.modal = function (option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target
      .modal(option, this)
      .one('hide', function () {
        $this.is(':visible') && $this.focus()
      })
  })

  $(document)
    .on('show.bs.modal', '.modal', function () { $(document.body).addClass('modal-open') })
    .on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.1.1
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled  = true
    this.type     = type
    this.$element = $(element)
    this.options  = this.getOptions(options)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return
      var that = this;

      var $tip = this.tip()

      this.setContent()

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var $parent = this.$element.parent()

        var orgPlacement = placement
        var docScroll    = document.documentElement.scrollTop || document.body.scrollTop
        var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
        var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left

        placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
                    placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)
      this.hoverState = null

      var complete = function() {
        that.$element.trigger('shown.bs.' + that.type)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one($.support.transition.end, complete)
          .emulateTransitionEnd(150) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var replace
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      replace = true
      offset.top = offset.top + height - actualHeight
    }

    if (/bottom|top/.test(placement)) {
      var delta = 0

      if (offset.left < 0) {
        delta       = offset.left * -2
        offset.left = 0

        $tip.offset(offset)

        actualWidth  = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight
      }

      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
    } else {
      this.replaceArrow(actualHeight - height, actualHeight, 'top')
    }

    if (replace) $tip.offset(offset)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element.trigger('hidden.bs.' + that.type)
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one($.support.transition.end, complete)
        .emulateTransitionEnd(150) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function () {
    var el = this.$element[0]
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
      width: el.offsetWidth,
      height: el.offsetHeight
    }, this.$element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template)
  }

  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    clearTimeout(this.timeout)
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  var old = $.fn.tooltip

  $.fn.tooltip = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.1.1
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content')[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow')
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.1.1
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var href
    var process  = $.proxy(this.process, this)

    this.$element       = $(element).is('body') ? $(window) : $(element)
    this.$body          = $('body')
    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.offsets        = $([])
    this.targets        = $([])
    this.activeTarget   = null

    this.refresh()
    this.process()
  }

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = this.$element[0] == window ? 'offset' : 'position'

    this.offsets = $([])
    this.targets = $([])

    var self     = this
    var $targets = this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
    var maxScroll    = scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets.last()[0]) && this.activate(i)
    }

    if (activeTarget && scrollTop <= offsets[0]) {
      return activeTarget != (i = targets[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate( targets[i] )
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')

    var selector = this.selector +
        '[data-target="' + target + '"],' +
        this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.1.1
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.parent('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one($.support.transition.end, next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.1.1
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)
    this.$window = $(window)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      =
    this.unpin        =
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.RESET = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$window.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$window.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (this.affixed == 'top') position.top += scrollTop

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin) this.$element.css('top', '')

    var affixType = 'affix' + (affix ? '-' + affix : '')
    var e         = $.Event(affixType + '.bs.affix')

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

    this.$element
      .removeClass(Affix.RESET)
      .addClass(affixType)
      .trigger($.Event(affixType.replace('affix', 'affixed')))

    if (affix == 'bottom') {
      this.$element.offset({ top: scrollHeight - offsetBottom - this.$element.height() })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      $spy.affix(data)
    })
  })

}(jQuery);

/*!
 * scrollup v2.4.0
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear — @markgdyr — http://markgoodyear.com
 * License: MIT
 */
(function ($, window, document) {
    'use strict';

    // Main function
    $.fn.scrollUp = function (options) {

        // Ensure that only one scrollUp exists
        if (!$.data(document.body, 'scrollUp')) {
            $.data(document.body, 'scrollUp', true);
            $.fn.scrollUp.init(options);
        }
    };

    // Init
    $.fn.scrollUp.init = function (options) {

        // Define vars
        var o = $.fn.scrollUp.settings = $.extend({}, $.fn.scrollUp.defaults, options),
            triggerVisible = false,
            animIn, animOut, animSpeed, scrollDis, scrollEvent, scrollTarget, $self;

        // Create element
        if (o.scrollTrigger) {
            $self = $(o.scrollTrigger);
        } else {
            $self = $('<a/>', {
                id: o.scrollName,
                href: '#top'
            });
        }

        // Set scrollTitle if there is one
        if (o.scrollTitle) {
            $self.attr('title', o.scrollTitle);
        }

        $self.appendTo('body');

        // If not using an image display text
        if (!(o.scrollImg || o.scrollTrigger)) {
            $self.html(o.scrollText);
        }

        // Minimum CSS to make the magic happen
        $self.css({
            display: 'none',
            position: 'fixed',
            zIndex: o.zIndex
        });

        // Active point overlay
        if (o.activeOverlay) {
            $('<div/>', {
                id: o.scrollName + '-active'
            }).css({
                position: 'absolute',
                'top': o.scrollDistance + 'px',
                width: '100%',
                borderTop: '1px dotted' + o.activeOverlay,
                zIndex: o.zIndex
            }).appendTo('body');
        }

        // Switch animation type
        switch (o.animation) {
            case 'fade':
                animIn = 'fadeIn';
                animOut = 'fadeOut';
                animSpeed = o.animationSpeed;
                break;

            case 'slide':
                animIn = 'slideDown';
                animOut = 'slideUp';
                animSpeed = o.animationSpeed;
                break;

            default:
                animIn = 'show';
                animOut = 'hide';
                animSpeed = 0;
        }

        // If from top or bottom
        if (o.scrollFrom === 'top') {
            scrollDis = o.scrollDistance;
        } else {
            scrollDis = $(document).height() - $(window).height() - o.scrollDistance;
        }

        // Scroll function
        scrollEvent = $(window).scroll(function () {
            if ($(window).scrollTop() > scrollDis) {
                if (!triggerVisible) {
                    $self[animIn](animSpeed);
                    triggerVisible = true;
                }
            } else {
                if (triggerVisible) {
                    $self[animOut](animSpeed);
                    triggerVisible = false;
                }
            }
        });

        if (o.scrollTarget) {
            if (typeof o.scrollTarget === 'number') {
                scrollTarget = o.scrollTarget;
            } else if (typeof o.scrollTarget === 'string') {
                scrollTarget = Math.floor($(o.scrollTarget).offset().top);
            }
        } else {
            scrollTarget = 0;
        }

        // To the top
        $self.click(function (e) {
            e.preventDefault();

            $('html, body').animate({
                scrollTop: scrollTarget
            }, o.scrollSpeed, o.easingType);
        });
    };

    // Defaults
    $.fn.scrollUp.defaults = {
        scrollName: 'scrollUp',      // Element ID
        scrollDistance: 300,         // Distance from top/bottom before showing element (px)
        scrollFrom: 'top',           // 'top' or 'bottom'
        scrollSpeed: 300,            // Speed back to top (ms)
        easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
        animation: 'fade',           // Fade, slide, none
        animationSpeed: 200,         // Animation in speed (ms)
        scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
        scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
        scrollText: 'Scroll to top', // Text for element, can contain HTML
        scrollTitle: false,          // Set a custom <a> title if required. Defaults to scrollText
        scrollImg: false,            // Set true to use image
        activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647           // Z-Index for the overlay
    };

    // Destroy scrollUp plugin and clean all modifications to the DOM
    $.fn.scrollUp.destroy = function (scrollEvent) {
        $.removeData(document.body, 'scrollUp');
        $('#' + $.fn.scrollUp.settings.scrollName).remove();
        $('#' + $.fn.scrollUp.settings.scrollName + '-active').remove();

        // If 1.7 or above use the new .off()
        if ($.fn.jquery.split('.')[1] >= 7) {
            $(window).off('scroll', scrollEvent);

        // Else use the old .unbind()
        } else {
            $(window).unbind('scroll', scrollEvent);
        }
    };

    $.scrollUp = $.fn.scrollUp;

})(jQuery, window, document);

;/*!
 * jScrollPane - v2.0.20 - 2014-10-23
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2014 Kelvin Luck
 * Dual licensed under the MIT or GPL licenses.
 */

// Script: jScrollPane - cross browser customisable scrollbars
//
// *Version: 2.0.20, Last updated: 2014-10-23*
//
// Project Home - http://jscrollpane.kelvinluck.com/
// GitHub       - http://github.com/vitch/jScrollPane
// Source       - http://github.com/vitch/jScrollPane/raw/master/script/jquery.jscrollpane.js
// (Minified)   - http://github.com/vitch/jScrollPane/raw/master/script/jquery.jscrollpane.min.js
//
// About: License
//
// Copyright (c) 2014 Kelvin Luck
// Dual licensed under the MIT or GPL Version 2 licenses.
// http://jscrollpane.kelvinluck.com/MIT-LICENSE.txt
// http://jscrollpane.kelvinluck.com/GPL-LICENSE.txt
//
// About: Examples
//
// All examples and demos are available through the jScrollPane example site at:
// http://jscrollpane.kelvinluck.com/
//
// About: Support and Testing
//
// This plugin is tested on the browsers below and has been found to work reliably on them. If you run
// into a problem on one of the supported browsers then please visit the support section on the jScrollPane
// website (http://jscrollpane.kelvinluck.com/) for more information on getting support. You are also
// welcome to fork the project on GitHub if you can contribute a fix for a given issue. 
//
// jQuery Versions - tested in 1.4.2+ - reported to work in 1.3.x
// Browsers Tested - Firefox 3.6.8, Safari 5, Opera 10.6, Chrome 5.0, IE 6, 7, 8
//
// About: Release History
//
// 2.0.20 - (2014-10-23) Adds AMD support (thanks @carlosrberto) and support for overflow-x/overflow-y (thanks @darimpulso)
// 2.0.19 - (2013-11-16) Changes for more reliable scroll amount with latest mousewheel plugin (thanks @brandonaaron)
// 2.0.18 - (2013-10-23) Fix for issue with gutters and scrollToElement (thanks @Dubiy)
// 2.0.17 - (2013-08-17) Working correctly when box-sizing is set to border-box (thanks @pieht)
// 2.0.16 - (2013-07-30) Resetting left position when scroll is removed. Fixes #189
// 2.0.15 - (2013-07-29) Fixed issue with scrollToElement where the destX and destY are undefined.
// 2.0.14 - (2013-05-01) Updated to most recent mouse wheel plugin (see #106) and related changes for sensible scroll speed
// 2.0.13 - (2013-05-01) Switched to semver compatible version name
// 2.0.0beta12 - (2012-09-27) fix for jQuery 1.8+
// 2.0.0beta11 - (2012-05-14)
// 2.0.0beta10 - (2011-04-17) cleaner required size calculation, improved keyboard support, stickToBottom/Left, other small fixes
// 2.0.0beta9 - (2011-01-31) new API methods, bug fixes and correct keyboard support for FF/OSX
// 2.0.0beta8 - (2011-01-29) touchscreen support, improved keyboard support
// 2.0.0beta7 - (2011-01-23) scroll speed consistent (thanks Aivo Paas)
// 2.0.0beta6 - (2010-12-07) scrollToElement horizontal support
// 2.0.0beta5 - (2010-10-18) jQuery 1.4.3 support, various bug fixes
// 2.0.0beta4 - (2010-09-17) clickOnTrack support, bug fixes
// 2.0.0beta3 - (2010-08-27) Horizontal mousewheel, mwheelIntent, keyboard support, bug fixes
// 2.0.0beta2 - (2010-08-21) Bug fixes
// 2.0.0beta1 - (2010-08-17) Rewrite to follow modern best practices and enable horizontal scrolling, initially hidden
//							 elements and dynamically sized elements.
// 1.x - (2006-12-31 - 2010-07-31) Initial version, hosted at googlecode, deprecated

(function (plugin, window) {
	var factory = function($){
		return plugin($, window);
	}
  if ( typeof define === 'function' && define.amd ) {
      // AMD. Register as an anonymous module.
      define(['jquery'], factory);
  } else if (typeof exports === 'object') {
      // Node/CommonJS style for Browserify
      module.exports = factory;
  } else {
      // Browser globals
      factory(jQuery);
  }
}(function($,window,undefined){

	$.fn.jScrollPane = function(settings)
	{
		// JScrollPane "class" - public methods are available through $('selector').data('jsp')
		function JScrollPane(elem, s)
		{
			var settings, jsp = this, pane, paneWidth, paneHeight, container, contentWidth, contentHeight,
				percentInViewH, percentInViewV, isScrollableV, isScrollableH, verticalDrag, dragMaxY,
				verticalDragPosition, horizontalDrag, dragMaxX, horizontalDragPosition,
				verticalBar, verticalTrack, scrollbarWidth, verticalTrackHeight, verticalDragHeight, arrowUp, arrowDown,
				horizontalBar, horizontalTrack, horizontalTrackWidth, horizontalDragWidth, arrowLeft, arrowRight,
				reinitialiseInterval, originalPadding, originalPaddingTotalWidth, previousContentWidth,
				wasAtTop = true, wasAtLeft = true, wasAtBottom = false, wasAtRight = false,
				originalElement = elem.clone(false, false).empty(),
				mwEvent = $.fn.mwheelIntent ? 'mwheelIntent.jsp' : 'mousewheel.jsp';

			if (elem.css('box-sizing') === 'border-box') {
				originalPadding = 0;
				originalPaddingTotalWidth = 0;
			} else {
				originalPadding = elem.css('paddingTop') + ' ' +
									elem.css('paddingRight') + ' ' +
									elem.css('paddingBottom') + ' ' +
									elem.css('paddingLeft');	
				originalPaddingTotalWidth = (parseInt(elem.css('paddingLeft'), 10) || 0) +
											(parseInt(elem.css('paddingRight'), 10) || 0);
			}

			function initialise(s)
			{

				var /*firstChild, lastChild, */isMaintainingPositon, lastContentX, lastContentY,
						hasContainingSpaceChanged, originalScrollTop, originalScrollLeft,
						maintainAtBottom = false, maintainAtRight = false;

				settings = s;

				if (pane === undefined) {
					originalScrollTop = elem.scrollTop();
					originalScrollLeft = elem.scrollLeft();

					elem.css(
						{
							overflow: 'hidden',
							padding: 0
						}
					);
					// TODO: Deal with where width/ height is 0 as it probably means the element is hidden and we should
					// come back to it later and check once it is unhidden...
					paneWidth = elem.innerWidth() + originalPaddingTotalWidth;
					paneHeight = elem.innerHeight();

					elem.width(paneWidth);
					
					pane = $('<div class="jspPane" />').css('padding', originalPadding).append(elem.children());
					container = $('<div class="jspContainer" />')
						.css({
							'width': paneWidth + 'px',
							'height': paneHeight + 'px'
						}
					).append(pane).appendTo(elem);

					/*
					// Move any margins from the first and last children up to the container so they can still
					// collapse with neighbouring elements as they would before jScrollPane 
					firstChild = pane.find(':first-child');
					lastChild = pane.find(':last-child');
					elem.css(
						{
							'margin-top': firstChild.css('margin-top'),
							'margin-bottom': lastChild.css('margin-bottom')
						}
					);
					firstChild.css('margin-top', 0);
					lastChild.css('margin-bottom', 0);
					*/
				} else {
					elem.css('width', '');

					maintainAtBottom = settings.stickToBottom && isCloseToBottom();
					maintainAtRight  = settings.stickToRight  && isCloseToRight();

					hasContainingSpaceChanged = elem.innerWidth() + originalPaddingTotalWidth != paneWidth || elem.outerHeight() != paneHeight;

					if (hasContainingSpaceChanged) {
						paneWidth = elem.innerWidth() + originalPaddingTotalWidth;
						paneHeight = elem.innerHeight();
						container.css({
							width: paneWidth + 'px',
							height: paneHeight + 'px'
						});
					}

					// If nothing changed since last check...
					if (!hasContainingSpaceChanged && previousContentWidth == contentWidth && pane.outerHeight() == contentHeight) {
						elem.width(paneWidth);
						return;
					}
					previousContentWidth = contentWidth;
					
					pane.css('width', '');
					elem.width(paneWidth);

					container.find('>.jspVerticalBar,>.jspHorizontalBar').remove().end();
				}

				pane.css('overflow', 'auto');
				if (s.contentWidth) {
					contentWidth = s.contentWidth;
				} else {
					contentWidth = pane[0].scrollWidth;
				}
				contentHeight = pane[0].scrollHeight;
				pane.css('overflow', '');

				percentInViewH = contentWidth / paneWidth;
				percentInViewV = contentHeight / paneHeight;
				isScrollableV = percentInViewV > 1;

				isScrollableH = percentInViewH > 1;

				//console.log(paneWidth, paneHeight, contentWidth, contentHeight, percentInViewH, percentInViewV, isScrollableH, isScrollableV);

				if (!(isScrollableH || isScrollableV)) {
					elem.removeClass('jspScrollable');
					pane.css({
            top: 0,
            left: 0,
						width: container.width() - originalPaddingTotalWidth
					});
					removeMousewheel();
					removeFocusHandler();
					removeKeyboardNav();
					removeClickOnTrack();
				} else {
					elem.addClass('jspScrollable');

					isMaintainingPositon = settings.maintainPosition && (verticalDragPosition || horizontalDragPosition);
					if (isMaintainingPositon) {
						lastContentX = contentPositionX();
						lastContentY = contentPositionY();
					}

					initialiseVerticalScroll();
					initialiseHorizontalScroll();
					resizeScrollbars();

					if (isMaintainingPositon) {
						scrollToX(maintainAtRight  ? (contentWidth  - paneWidth ) : lastContentX, false);
						scrollToY(maintainAtBottom ? (contentHeight - paneHeight) : lastContentY, false);
					}

					initFocusHandler();
					initMousewheel();
					initTouch();
					
					if (settings.enableKeyboardNavigation) {
						initKeyboardNav();
					}
					if (settings.clickOnTrack) {
						initClickOnTrack();
					}
					
					observeHash();
					if (settings.hijackInternalLinks) {
						hijackInternalLinks();
					}
				}

				if (settings.autoReinitialise && !reinitialiseInterval) {
					reinitialiseInterval = setInterval(
						function()
						{
							initialise(settings);
						},
						settings.autoReinitialiseDelay
					);
				} else if (!settings.autoReinitialise && reinitialiseInterval) {
					clearInterval(reinitialiseInterval);
				}

				originalScrollTop && elem.scrollTop(0) && scrollToY(originalScrollTop, false);
				originalScrollLeft && elem.scrollLeft(0) && scrollToX(originalScrollLeft, false);

				elem.trigger('jsp-initialised', [isScrollableH || isScrollableV]);
			}

			function initialiseVerticalScroll()
			{
				if (isScrollableV) {

					container.append(
						$('<div class="jspVerticalBar" />').append(
							$('<div class="jspCap jspCapTop" />'),
							$('<div class="jspTrack" />').append(
								$('<div class="jspDrag" />').append(
									$('<div class="jspDragTop" />'),
									$('<div class="jspDragBottom" />')
								)
							),
							$('<div class="jspCap jspCapBottom" />')
						)
					);

					verticalBar = container.find('>.jspVerticalBar');
					verticalTrack = verticalBar.find('>.jspTrack');
					verticalDrag = verticalTrack.find('>.jspDrag');

					if (settings.showArrows) {
						arrowUp = $('<a class="jspArrow jspArrowUp" />').bind(
							'mousedown.jsp', getArrowScroll(0, -1)
						).bind('click.jsp', nil);
						arrowDown = $('<a class="jspArrow jspArrowDown" />').bind(
							'mousedown.jsp', getArrowScroll(0, 1)
						).bind('click.jsp', nil);
						if (settings.arrowScrollOnHover) {
							arrowUp.bind('mouseover.jsp', getArrowScroll(0, -1, arrowUp));
							arrowDown.bind('mouseover.jsp', getArrowScroll(0, 1, arrowDown));
						}

						appendArrows(verticalTrack, settings.verticalArrowPositions, arrowUp, arrowDown);
					}

					verticalTrackHeight = paneHeight;
					container.find('>.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow').each(
						function()
						{
							verticalTrackHeight -= $(this).outerHeight();
						}
					);


					verticalDrag.hover(
						function()
						{
							verticalDrag.addClass('jspHover');
						},
						function()
						{
							verticalDrag.removeClass('jspHover');
						}
					).bind(
						'mousedown.jsp',
						function(e)
						{
							// Stop IE from allowing text selection
							$('html').bind('dragstart.jsp selectstart.jsp', nil);

							verticalDrag.addClass('jspActive');

							var startY = e.pageY - verticalDrag.position().top;

							$('html').bind(
								'mousemove.jsp',
								function(e)
								{
									positionDragY(e.pageY - startY, false);
								}
							).bind('mouseup.jsp mouseleave.jsp', cancelDrag);
							return false;
						}
					);
					sizeVerticalScrollbar();
				}
			}

			function sizeVerticalScrollbar()
			{
				verticalTrack.height(verticalTrackHeight + 'px');
				verticalDragPosition = 0;
				scrollbarWidth = settings.verticalGutter + verticalTrack.outerWidth();

				// Make the pane thinner to allow for the vertical scrollbar
				pane.width(paneWidth - scrollbarWidth - originalPaddingTotalWidth);

				// Add margin to the left of the pane if scrollbars are on that side (to position
				// the scrollbar on the left or right set it's left or right property in CSS)
				try {
					if (verticalBar.position().left === 0) {
						pane.css('margin-left', scrollbarWidth + 'px');
					}
				} catch (err) {
				}
			}

			function initialiseHorizontalScroll()
			{
				if (isScrollableH) {

					container.append(
						$('<div class="jspHorizontalBar" />').append(
							$('<div class="jspCap jspCapLeft" />'),
							$('<div class="jspTrack" />').append(
								$('<div class="jspDrag" />').append(
									$('<div class="jspDragLeft" />'),
									$('<div class="jspDragRight" />')
								)
							),
							$('<div class="jspCap jspCapRight" />')
						)
					);

					horizontalBar = container.find('>.jspHorizontalBar');
					horizontalTrack = horizontalBar.find('>.jspTrack');
					horizontalDrag = horizontalTrack.find('>.jspDrag');

					if (settings.showArrows) {
						arrowLeft = $('<a class="jspArrow jspArrowLeft" />').bind(
							'mousedown.jsp', getArrowScroll(-1, 0)
						).bind('click.jsp', nil);
						arrowRight = $('<a class="jspArrow jspArrowRight" />').bind(
							'mousedown.jsp', getArrowScroll(1, 0)
						).bind('click.jsp', nil);
						if (settings.arrowScrollOnHover) {
							arrowLeft.bind('mouseover.jsp', getArrowScroll(-1, 0, arrowLeft));
							arrowRight.bind('mouseover.jsp', getArrowScroll(1, 0, arrowRight));
						}
						appendArrows(horizontalTrack, settings.horizontalArrowPositions, arrowLeft, arrowRight);
					}

					horizontalDrag.hover(
						function()
						{
							horizontalDrag.addClass('jspHover');
						},
						function()
						{
							horizontalDrag.removeClass('jspHover');
						}
					).bind(
						'mousedown.jsp',
						function(e)
						{
							// Stop IE from allowing text selection
							$('html').bind('dragstart.jsp selectstart.jsp', nil);

							horizontalDrag.addClass('jspActive');

							var startX = e.pageX - horizontalDrag.position().left;

							$('html').bind(
								'mousemove.jsp',
								function(e)
								{
									positionDragX(e.pageX - startX, false);
								}
							).bind('mouseup.jsp mouseleave.jsp', cancelDrag);
							return false;
						}
					);
					horizontalTrackWidth = container.innerWidth();
					sizeHorizontalScrollbar();
				}
			}

			function sizeHorizontalScrollbar()
			{
				container.find('>.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow').each(
					function()
					{
						horizontalTrackWidth -= $(this).outerWidth();
					}
				);

				horizontalTrack.width(horizontalTrackWidth + 'px');
				horizontalDragPosition = 0;
			}

			function resizeScrollbars()
			{
				if (isScrollableH && isScrollableV) {
					var horizontalTrackHeight = horizontalTrack.outerHeight(),
						verticalTrackWidth = verticalTrack.outerWidth();
					verticalTrackHeight -= horizontalTrackHeight;
					$(horizontalBar).find('>.jspCap:visible,>.jspArrow').each(
						function()
						{
							horizontalTrackWidth += $(this).outerWidth();
						}
					);
					horizontalTrackWidth -= verticalTrackWidth;
					paneHeight -= verticalTrackWidth;
					paneWidth -= horizontalTrackHeight;
					horizontalTrack.parent().append(
						$('<div class="jspCorner" />').css('width', horizontalTrackHeight + 'px')
					);
					sizeVerticalScrollbar();
					sizeHorizontalScrollbar();
				}
				// reflow content
				if (isScrollableH) {
					pane.width((container.outerWidth() - originalPaddingTotalWidth) + 'px');
				}
				contentHeight = pane.outerHeight();
				percentInViewV = contentHeight / paneHeight;

				if (isScrollableH) {
					horizontalDragWidth = Math.ceil(1 / percentInViewH * horizontalTrackWidth);
					if (horizontalDragWidth > settings.horizontalDragMaxWidth) {
						horizontalDragWidth = settings.horizontalDragMaxWidth;
					} else if (horizontalDragWidth < settings.horizontalDragMinWidth) {
						horizontalDragWidth = settings.horizontalDragMinWidth;
					}
					horizontalDrag.width(horizontalDragWidth + 'px');
					dragMaxX = horizontalTrackWidth - horizontalDragWidth;
					_positionDragX(horizontalDragPosition); // To update the state for the arrow buttons
				}
				if (isScrollableV) {
					verticalDragHeight = Math.ceil(1 / percentInViewV * verticalTrackHeight);
					if (verticalDragHeight > settings.verticalDragMaxHeight) {
						verticalDragHeight = settings.verticalDragMaxHeight;
					} else if (verticalDragHeight < settings.verticalDragMinHeight) {
						verticalDragHeight = settings.verticalDragMinHeight;
					}
					verticalDrag.height(verticalDragHeight + 'px');
					dragMaxY = verticalTrackHeight - verticalDragHeight;
					_positionDragY(verticalDragPosition); // To update the state for the arrow buttons
				}
			}

			function appendArrows(ele, p, a1, a2)
			{
				var p1 = "before", p2 = "after", aTemp;
				
				// Sniff for mac... Is there a better way to determine whether the arrows would naturally appear
				// at the top or the bottom of the bar?
				if (p == "os") {
					p = /Mac/.test(navigator.platform) ? "after" : "split";
				}
				if (p == p1) {
					p2 = p;
				} else if (p == p2) {
					p1 = p;
					aTemp = a1;
					a1 = a2;
					a2 = aTemp;
				}

				ele[p1](a1)[p2](a2);
			}

			function getArrowScroll(dirX, dirY, ele)
			{
				return function()
				{
					arrowScroll(dirX, dirY, this, ele);
					this.blur();
					return false;
				};
			}

			function arrowScroll(dirX, dirY, arrow, ele)
			{
				arrow = $(arrow).addClass('jspActive');

				var eve,
					scrollTimeout,
					isFirst = true,
					doScroll = function()
					{
						if (dirX !== 0) {
							jsp.scrollByX(dirX * settings.arrowButtonSpeed);
						}
						if (dirY !== 0) {
							jsp.scrollByY(dirY * settings.arrowButtonSpeed);
						}
						scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.arrowRepeatFreq);
						isFirst = false;
					};

				doScroll();

				eve = ele ? 'mouseout.jsp' : 'mouseup.jsp';
				ele = ele || $('html');
				ele.bind(
					eve,
					function()
					{
						arrow.removeClass('jspActive');
						scrollTimeout && clearTimeout(scrollTimeout);
						scrollTimeout = null;
						ele.unbind(eve);
					}
				);
			}

			function initClickOnTrack()
			{
				removeClickOnTrack();
				if (isScrollableV) {
					verticalTrack.bind(
						'mousedown.jsp',
						function(e)
						{
							if (e.originalTarget === undefined || e.originalTarget == e.currentTarget) {
								var clickedTrack = $(this),
									offset = clickedTrack.offset(),
									direction = e.pageY - offset.top - verticalDragPosition,
									scrollTimeout,
									isFirst = true,
									doScroll = function()
									{
										var offset = clickedTrack.offset(),
											pos = e.pageY - offset.top - verticalDragHeight / 2,
											contentDragY = paneHeight * settings.scrollPagePercent,
											dragY = dragMaxY * contentDragY / (contentHeight - paneHeight);
										if (direction < 0) {
											if (verticalDragPosition - dragY > pos) {
												jsp.scrollByY(-contentDragY);
											} else {
												positionDragY(pos);
											}
										} else if (direction > 0) {
											if (verticalDragPosition + dragY < pos) {
												jsp.scrollByY(contentDragY);
											} else {
												positionDragY(pos);
											}
										} else {
											cancelClick();
											return;
										}
										scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.trackClickRepeatFreq);
										isFirst = false;
									},
									cancelClick = function()
									{
										scrollTimeout && clearTimeout(scrollTimeout);
										scrollTimeout = null;
										$(document).unbind('mouseup.jsp', cancelClick);
									};
								doScroll();
								$(document).bind('mouseup.jsp', cancelClick);
								return false;
							}
						}
					);
				}
				
				if (isScrollableH) {
					horizontalTrack.bind(
						'mousedown.jsp',
						function(e)
						{
							if (e.originalTarget === undefined || e.originalTarget == e.currentTarget) {
								var clickedTrack = $(this),
									offset = clickedTrack.offset(),
									direction = e.pageX - offset.left - horizontalDragPosition,
									scrollTimeout,
									isFirst = true,
									doScroll = function()
									{
										var offset = clickedTrack.offset(),
											pos = e.pageX - offset.left - horizontalDragWidth / 2,
											contentDragX = paneWidth * settings.scrollPagePercent,
											dragX = dragMaxX * contentDragX / (contentWidth - paneWidth);
										if (direction < 0) {
											if (horizontalDragPosition - dragX > pos) {
												jsp.scrollByX(-contentDragX);
											} else {
												positionDragX(pos);
											}
										} else if (direction > 0) {
											if (horizontalDragPosition + dragX < pos) {
												jsp.scrollByX(contentDragX);
											} else {
												positionDragX(pos);
											}
										} else {
											cancelClick();
											return;
										}
										scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.trackClickRepeatFreq);
										isFirst = false;
									},
									cancelClick = function()
									{
										scrollTimeout && clearTimeout(scrollTimeout);
										scrollTimeout = null;
										$(document).unbind('mouseup.jsp', cancelClick);
									};
								doScroll();
								$(document).bind('mouseup.jsp', cancelClick);
								return false;
							}
						}
					);
				}
			}

			function removeClickOnTrack()
			{
				if (horizontalTrack) {
					horizontalTrack.unbind('mousedown.jsp');
				}
				if (verticalTrack) {
					verticalTrack.unbind('mousedown.jsp');
				}
			}

			function cancelDrag()
			{
				$('html').unbind('dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp');

				if (verticalDrag) {
					verticalDrag.removeClass('jspActive');
				}
				if (horizontalDrag) {
					horizontalDrag.removeClass('jspActive');
				}
			}

			function positionDragY(destY, animate)
			{
				if (!isScrollableV) {
					return;
				}
				if (destY < 0) {
					destY = 0;
				} else if (destY > dragMaxY) {
					destY = dragMaxY;
				}

				// can't just check if(animate) because false is a valid value that could be passed in...
				if (animate === undefined) {
					animate = settings.animateScroll;
				}
				if (animate) {
					jsp.animate(verticalDrag, 'top', destY,	_positionDragY);
				} else {
					verticalDrag.css('top', destY);
					_positionDragY(destY);
				}

			}

			function _positionDragY(destY)
			{
				if (destY === undefined) {
					destY = verticalDrag.position().top;
				}

				container.scrollTop(0);
				verticalDragPosition = destY || 0;

				var isAtTop = verticalDragPosition === 0,
					isAtBottom = verticalDragPosition == dragMaxY,
					percentScrolled = destY/ dragMaxY,
					destTop = -percentScrolled * (contentHeight - paneHeight);

				if (wasAtTop != isAtTop || wasAtBottom != isAtBottom) {
					wasAtTop = isAtTop;
					wasAtBottom = isAtBottom;
					elem.trigger('jsp-arrow-change', [wasAtTop, wasAtBottom, wasAtLeft, wasAtRight]);
				}
				
				updateVerticalArrows(isAtTop, isAtBottom);
				pane.css('top', destTop);
				elem.trigger('jsp-scroll-y', [-destTop, isAtTop, isAtBottom]).trigger('scroll');
			}

			function positionDragX(destX, animate)
			{
				if (!isScrollableH) {
					return;
				}
				if (destX < 0) {
					destX = 0;
				} else if (destX > dragMaxX) {
					destX = dragMaxX;
				}

				if (animate === undefined) {
					animate = settings.animateScroll;
				}
				if (animate) {
					jsp.animate(horizontalDrag, 'left', destX,	_positionDragX);
				} else {
					horizontalDrag.css('left', destX);
					_positionDragX(destX);
				}
			}

			function _positionDragX(destX)
			{
				if (destX === undefined) {
					destX = horizontalDrag.position().left;
				}

				container.scrollTop(0);
				horizontalDragPosition = destX ||0;

				var isAtLeft = horizontalDragPosition === 0,
					isAtRight = horizontalDragPosition == dragMaxX,
					percentScrolled = destX / dragMaxX,
					destLeft = -percentScrolled * (contentWidth - paneWidth);

				if (wasAtLeft != isAtLeft || wasAtRight != isAtRight) {
					wasAtLeft = isAtLeft;
					wasAtRight = isAtRight;
					elem.trigger('jsp-arrow-change', [wasAtTop, wasAtBottom, wasAtLeft, wasAtRight]);
				}
				
				updateHorizontalArrows(isAtLeft, isAtRight);
				pane.css('left', destLeft);
				elem.trigger('jsp-scroll-x', [-destLeft, isAtLeft, isAtRight]).trigger('scroll');
			}

			function updateVerticalArrows(isAtTop, isAtBottom)
			{
				if (settings.showArrows) {
					arrowUp[isAtTop ? 'addClass' : 'removeClass']('jspDisabled');
					arrowDown[isAtBottom ? 'addClass' : 'removeClass']('jspDisabled');
				}
			}

			function updateHorizontalArrows(isAtLeft, isAtRight)
			{
				if (settings.showArrows) {
					arrowLeft[isAtLeft ? 'addClass' : 'removeClass']('jspDisabled');
					arrowRight[isAtRight ? 'addClass' : 'removeClass']('jspDisabled');
				}
			}

			function scrollToY(destY, animate)
			{
				var percentScrolled = destY / (contentHeight - paneHeight);
				positionDragY(percentScrolled * dragMaxY, animate);
			}

			function scrollToX(destX, animate)
			{
				var percentScrolled = destX / (contentWidth - paneWidth);
				positionDragX(percentScrolled * dragMaxX, animate);
			}

			function scrollToElement(ele, stickToTop, animate)
			{
				var e, eleHeight, eleWidth, eleTop = 0, eleLeft = 0, viewportTop, viewportLeft, maxVisibleEleTop, maxVisibleEleLeft, destY, destX;

				// Legal hash values aren't necessarily legal jQuery selectors so we need to catch any
				// errors from the lookup...
				try {
					e = $(ele);
				} catch (err) {
					return;
				}
				eleHeight = e.outerHeight();
				eleWidth= e.outerWidth();

				container.scrollTop(0);
				container.scrollLeft(0);
				
				// loop through parents adding the offset top of any elements that are relatively positioned between
				// the focused element and the jspPane so we can get the true distance from the top
				// of the focused element to the top of the scrollpane...
				while (!e.is('.jspPane')) {
					eleTop += e.position().top;
					eleLeft += e.position().left;
					e = e.offsetParent();
					if (/^body|html$/i.test(e[0].nodeName)) {
						// we ended up too high in the document structure. Quit!
						return;
					}
				}

				viewportTop = contentPositionY();
				maxVisibleEleTop = viewportTop + paneHeight;
				if (eleTop < viewportTop || stickToTop) { // element is above viewport
					destY = eleTop - settings.horizontalGutter;
				} else if (eleTop + eleHeight > maxVisibleEleTop) { // element is below viewport
					destY = eleTop - paneHeight + eleHeight + settings.horizontalGutter;
				}
				if (!isNaN(destY)) {
					scrollToY(destY, animate);
				}
				
				viewportLeft = contentPositionX();
	            maxVisibleEleLeft = viewportLeft + paneWidth;
	            if (eleLeft < viewportLeft || stickToTop) { // element is to the left of viewport
	                destX = eleLeft - settings.horizontalGutter;
	            } else if (eleLeft + eleWidth > maxVisibleEleLeft) { // element is to the right viewport
	                destX = eleLeft - paneWidth + eleWidth + settings.horizontalGutter;
	            }
	            if (!isNaN(destX)) {
	                scrollToX(destX, animate);
	            }

			}

			function contentPositionX()
			{
				return -pane.position().left;
			}

			function contentPositionY()
			{
				return -pane.position().top;
			}

			function isCloseToBottom()
			{
				var scrollableHeight = contentHeight - paneHeight;
				return (scrollableHeight > 20) && (scrollableHeight - contentPositionY() < 10);
			}

			function isCloseToRight()
			{
				var scrollableWidth = contentWidth - paneWidth;
				return (scrollableWidth > 20) && (scrollableWidth - contentPositionX() < 10);
			}

			function initMousewheel()
			{
				container.unbind(mwEvent).bind(
					mwEvent,
					function (event, delta, deltaX, deltaY) {

                        if (!horizontalDragPosition) horizontalDragPosition = 0;
                        if (!verticalDragPosition) verticalDragPosition = 0;

						var dX = horizontalDragPosition, dY = verticalDragPosition, factor = event.deltaFactor || settings.mouseWheelSpeed;
						jsp.scrollBy(deltaX * factor, -deltaY * factor, false);
						// return true if there was no movement so rest of screen can scroll
						return dX == horizontalDragPosition && dY == verticalDragPosition;
					}
				);
			}

			function removeMousewheel()
			{
				container.unbind(mwEvent);
			}

			function nil()
			{
				return false;
			}

			function initFocusHandler()
			{
				pane.find(':input,a').unbind('focus.jsp').bind(
					'focus.jsp',
					function(e)
					{
						scrollToElement(e.target, false);
					}
				);
			}

			function removeFocusHandler()
			{
				pane.find(':input,a').unbind('focus.jsp');
			}
			
			function initKeyboardNav()
			{
				var keyDown, elementHasScrolled, validParents = [];
				isScrollableH && validParents.push(horizontalBar[0]);
				isScrollableV && validParents.push(verticalBar[0]);
				
				// IE also focuses elements that don't have tabindex set.
				pane.focus(
					function()
					{
						elem.focus();
					}
				);
				
				elem.attr('tabindex', 0)
					.unbind('keydown.jsp keypress.jsp')
					.bind(
						'keydown.jsp',
						function(e)
						{
							if (e.target !== this && !(validParents.length && $(e.target).closest(validParents).length)){
								return;
							}
							var dX = horizontalDragPosition, dY = verticalDragPosition;
							switch(e.keyCode) {
								case 40: // down
								case 38: // up
								case 34: // page down
								case 32: // space
								case 33: // page up
								case 39: // right
								case 37: // left
									keyDown = e.keyCode;
									keyDownHandler();
									break;
								case 35: // end
									scrollToY(contentHeight - paneHeight);
									keyDown = null;
									break;
								case 36: // home
									scrollToY(0);
									keyDown = null;
									break;
							}

							elementHasScrolled = e.keyCode == keyDown && dX != horizontalDragPosition || dY != verticalDragPosition;
							return !elementHasScrolled;
						}
					).bind(
						'keypress.jsp', // For FF/ OSX so that we can cancel the repeat key presses if the JSP scrolls...
						function(e)
						{
							if (e.keyCode == keyDown) {
								keyDownHandler();
							}
							return !elementHasScrolled;
						}
					);
				
				if (settings.hideFocus) {
					elem.css('outline', 'none');
					if ('hideFocus' in container[0]){
						elem.attr('hideFocus', true);
					}
				} else {
					elem.css('outline', '');
					if ('hideFocus' in container[0]){
						elem.attr('hideFocus', false);
					}
				}
				
				function keyDownHandler()
				{
					var dX = horizontalDragPosition, dY = verticalDragPosition;
					switch(keyDown) {
						case 40: // down
							jsp.scrollByY(settings.keyboardSpeed, false);
							break;
						case 38: // up
							jsp.scrollByY(-settings.keyboardSpeed, false);
							break;
						case 34: // page down
						case 32: // space
							jsp.scrollByY(paneHeight * settings.scrollPagePercent, false);
							break;
						case 33: // page up
							jsp.scrollByY(-paneHeight * settings.scrollPagePercent, false);
							break;
						case 39: // right
							jsp.scrollByX(settings.keyboardSpeed, false);
							break;
						case 37: // left
							jsp.scrollByX(-settings.keyboardSpeed, false);
							break;
					}

					elementHasScrolled = dX != horizontalDragPosition || dY != verticalDragPosition;
					return elementHasScrolled;
				}
			}
			
			function removeKeyboardNav()
			{
				elem.attr('tabindex', '-1')
					.removeAttr('tabindex')
					.unbind('keydown.jsp keypress.jsp');
			}

			function observeHash()
			{
				if (location.hash && location.hash.length > 1) {
					var e,
						retryInt,
						hash = escape(location.hash.substr(1)) // hash must be escaped to prevent XSS
						;
					try {
						e = $('#' + hash + ', a[name="' + hash + '"]');
					} catch (err) {
						return;
					}

					if (e.length && pane.find(hash)) {
						// nasty workaround but it appears to take a little while before the hash has done its thing
						// to the rendered page so we just wait until the container's scrollTop has been messed up.
						if (container.scrollTop() === 0) {
							retryInt = setInterval(
								function()
								{
									if (container.scrollTop() > 0) {
										scrollToElement(e, true);
										$(document).scrollTop(container.position().top);
										clearInterval(retryInt);
									}
								},
								50
							);
						} else {
							scrollToElement(e, true);
							$(document).scrollTop(container.position().top);
						}
					}
				}
			}

			function hijackInternalLinks()
			{
				// only register the link handler once
				if ($(document.body).data('jspHijack')) {
					return;
				}

				// remember that the handler was bound
				$(document.body).data('jspHijack', true);

				// use live handler to also capture newly created links
				$(document.body).delegate('a[href*=#]', 'click', function(event) {
					// does the link point to the same page?
					// this also takes care of cases with a <base>-Tag or Links not starting with the hash #
					// e.g. <a href="index.html#test"> when the current url already is index.html
					var href = this.href.substr(0, this.href.indexOf('#')),
						locationHref = location.href,
						hash,
						element,
						container,
						jsp,
						scrollTop,
						elementTop;
					if (location.href.indexOf('#') !== -1) {
						locationHref = location.href.substr(0, location.href.indexOf('#'));
					}
					if (href !== locationHref) {
						// the link points to another page
						return;
					}

					// check if jScrollPane should handle this click event
					hash = escape(this.href.substr(this.href.indexOf('#') + 1));

					// find the element on the page
					element;
					try {
						element = $('#' + hash + ', a[name="' + hash + '"]');
					} catch (e) {
						// hash is not a valid jQuery identifier
						return;
					}

					if (!element.length) {
						// this link does not point to an element on this page
						return;
					}

					container = element.closest('.jspScrollable');
					jsp = container.data('jsp');

					// jsp might be another jsp instance than the one, that bound this event
					// remember: this event is only bound once for all instances.
					jsp.scrollToElement(element, true);

					if (container[0].scrollIntoView) {
						// also scroll to the top of the container (if it is not visible)
						scrollTop = $(window).scrollTop();
						elementTop = element.offset().top;
						if (elementTop < scrollTop || elementTop > scrollTop + $(window).height()) {
							container[0].scrollIntoView();
						}
					}

					// jsp handled this event, prevent the browser default (scrolling :P)
					event.preventDefault();
				});
			}
			
			// Init touch on iPad, iPhone, iPod, Android
			function initTouch()
			{
				var startX,
					startY,
					touchStartX,
					touchStartY,
					moved,
					moving = false;
  
				container.unbind('touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick').bind(
					'touchstart.jsp',
					function(e)
					{
						var touch = e.originalEvent.touches[0];
						startX = contentPositionX();
						startY = contentPositionY();
						touchStartX = touch.pageX;
						touchStartY = touch.pageY;
						moved = false;
						moving = true;
					}
				).bind(
					'touchmove.jsp',
					function(ev)
					{
						if(!moving) {
							return;
						}
						
						var touchPos = ev.originalEvent.touches[0],
							dX = horizontalDragPosition, dY = verticalDragPosition;
						
						jsp.scrollTo(startX + touchStartX - touchPos.pageX, startY + touchStartY - touchPos.pageY);
						
						moved = moved || Math.abs(touchStartX - touchPos.pageX) > 5 || Math.abs(touchStartY - touchPos.pageY) > 5;
						
						// return true if there was no movement so rest of screen can scroll
						return dX == horizontalDragPosition && dY == verticalDragPosition;
					}
				).bind(
					'touchend.jsp',
					function(e)
					{
						moving = false;
						/*if(moved) {
							return false;
						}*/
					}
				).bind(
					'click.jsp-touchclick',
					function(e)
					{
						if(moved) {
							moved = false;
							return false;
						}
					}
				);
			}
			
			function destroy(){
				var currentY = contentPositionY(),
					currentX = contentPositionX();
				elem.removeClass('jspScrollable').unbind('.jsp');
				elem.replaceWith(originalElement.append(pane.children()));
				originalElement.scrollTop(currentY);
				originalElement.scrollLeft(currentX);

				// clear reinitialize timer if active
				if (reinitialiseInterval) {
					clearInterval(reinitialiseInterval);
				}
			}

			// Public API
			$.extend(
				jsp,
				{
					// Reinitialises the scroll pane (if it's internal dimensions have changed since the last time it
					// was initialised). The settings object which is passed in will override any settings from the
					// previous time it was initialised - if you don't pass any settings then the ones from the previous
					// initialisation will be used.
					reinitialise: function(s)
					{
						s = $.extend({}, settings, s);
						initialise(s);
					},
					// Scrolls the specified element (a jQuery object, DOM node or jQuery selector string) into view so
					// that it can be seen within the viewport. If stickToTop is true then the element will appear at
					// the top of the viewport, if it is false then the viewport will scroll as little as possible to
					// show the element. You can also specify if you want animation to occur. If you don't provide this
					// argument then the animateScroll value from the settings object is used instead.
					scrollToElement: function(ele, stickToTop, animate)
					{
						scrollToElement(ele, stickToTop, animate);
					},
					// Scrolls the pane so that the specified co-ordinates within the content are at the top left
					// of the viewport. animate is optional and if not passed then the value of animateScroll from
					// the settings object this jScrollPane was initialised with is used.
					scrollTo: function(destX, destY, animate)
					{
						scrollToX(destX, animate);
						scrollToY(destY, animate);
					},
					// Scrolls the pane so that the specified co-ordinate within the content is at the left of the
					// viewport. animate is optional and if not passed then the value of animateScroll from the settings
					// object this jScrollPane was initialised with is used.
					scrollToX: function(destX, animate)
					{
						scrollToX(destX, animate);
					},
					// Scrolls the pane so that the specified co-ordinate within the content is at the top of the
					// viewport. animate is optional and if not passed then the value of animateScroll from the settings
					// object this jScrollPane was initialised with is used.
					scrollToY: function(destY, animate)
					{
						scrollToY(destY, animate);
					},
					// Scrolls the pane to the specified percentage of its maximum horizontal scroll position. animate
					// is optional and if not passed then the value of animateScroll from the settings object this
					// jScrollPane was initialised with is used.
					scrollToPercentX: function(destPercentX, animate)
					{
						scrollToX(destPercentX * (contentWidth - paneWidth), animate);
					},
					// Scrolls the pane to the specified percentage of its maximum vertical scroll position. animate
					// is optional and if not passed then the value of animateScroll from the settings object this
					// jScrollPane was initialised with is used.
					scrollToPercentY: function(destPercentY, animate)
					{
						scrollToY(destPercentY * (contentHeight - paneHeight), animate);
					},
					// Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
					// the value of animateScroll from the settings object this jScrollPane was initialised with is used.
					scrollBy: function(deltaX, deltaY, animate)
					{
						jsp.scrollByX(deltaX, animate);
						jsp.scrollByY(deltaY, animate);
					},
					// Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
					// the value of animateScroll from the settings object this jScrollPane was initialised with is used.
					scrollByX: function(deltaX, animate)
					{
						var destX = contentPositionX() + Math[deltaX<0 ? 'floor' : 'ceil'](deltaX),
							percentScrolled = destX / (contentWidth - paneWidth);
						positionDragX(percentScrolled * dragMaxX, animate);
					},
					// Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
					// the value of animateScroll from the settings object this jScrollPane was initialised with is used.
					scrollByY: function(deltaY, animate)
					{
						var destY = contentPositionY() + Math[deltaY<0 ? 'floor' : 'ceil'](deltaY),
							percentScrolled = destY / (contentHeight - paneHeight);
						positionDragY(percentScrolled * dragMaxY, animate);
					},
					// Positions the horizontal drag at the specified x position (and updates the viewport to reflect
					// this). animate is optional and if not passed then the value of animateScroll from the settings
					// object this jScrollPane was initialised with is used.
					positionDragX: function(x, animate)
					{
						positionDragX(x, animate);
					},
					// Positions the vertical drag at the specified y position (and updates the viewport to reflect
					// this). animate is optional and if not passed then the value of animateScroll from the settings
					// object this jScrollPane was initialised with is used.
					positionDragY: function(y, animate)
					{
						positionDragY(y, animate);
					},
					// This method is called when jScrollPane is trying to animate to a new position. You can override
					// it if you want to provide advanced animation functionality. It is passed the following arguments:
					//  * ele          - the element whose position is being animated
					//  * prop         - the property that is being animated
					//  * value        - the value it's being animated to
					//  * stepCallback - a function that you must execute each time you update the value of the property
					// You can use the default implementation (below) as a starting point for your own implementation.
					animate: function(ele, prop, value, stepCallback)
					{
						var params = {};
						params[prop] = value;
						ele.animate(
							params,
							{
								'duration'	: settings.animateDuration,
								'easing'	: settings.animateEase,
								'queue'		: false,
								'step'		: stepCallback
							}
						);
					},
					// Returns the current x position of the viewport with regards to the content pane.
					getContentPositionX: function()
					{
						return contentPositionX();
					},
					// Returns the current y position of the viewport with regards to the content pane.
					getContentPositionY: function()
					{
						return contentPositionY();
					},
					// Returns the width of the content within the scroll pane.
					getContentWidth: function()
					{
						return contentWidth;
					},
					// Returns the height of the content within the scroll pane.
					getContentHeight: function()
					{
						return contentHeight;
					},
					// Returns the horizontal position of the viewport within the pane content.
					getPercentScrolledX: function()
					{
						return contentPositionX() / (contentWidth - paneWidth);
					},
					// Returns the vertical position of the viewport within the pane content.
					getPercentScrolledY: function()
					{
						return contentPositionY() / (contentHeight - paneHeight);
					},
					// Returns whether or not this scrollpane has a horizontal scrollbar.
					getIsScrollableH: function()
					{
						return isScrollableH;
					},
					// Returns whether or not this scrollpane has a vertical scrollbar.
					getIsScrollableV: function()
					{
						return isScrollableV;
					},
					// Gets a reference to the content pane. It is important that you use this method if you want to
					// edit the content of your jScrollPane as if you access the element directly then you may have some
					// problems (as your original element has had additional elements for the scrollbars etc added into
					// it).
					getContentPane: function()
					{
						return pane;
					},
					// Scrolls this jScrollPane down as far as it can currently scroll. If animate isn't passed then the
					// animateScroll value from settings is used instead.
					scrollToBottom: function(animate)
					{
						positionDragY(dragMaxY, animate);
					},
					// Hijacks the links on the page which link to content inside the scrollpane. If you have changed
					// the content of your page (e.g. via AJAX) and want to make sure any new anchor links to the
					// contents of your scroll pane will work then call this function.
					hijackInternalLinks: $.noop,
					// Removes the jScrollPane and returns the page to the state it was in before jScrollPane was
					// initialised.
					destroy: function()
					{
							destroy();
					}
				}
			);
			
			initialise(s);
		}

		// Pluginifying code...
		settings = $.extend({}, $.fn.jScrollPane.defaults, settings);
		
		// Apply default speed
		$.each(['arrowButtonSpeed', 'trackClickSpeed', 'keyboardSpeed'], function() {
			settings[this] = settings[this] || settings.speed;
		});

		return this.each(
			function()
			{
				var elem = $(this), jspApi = elem.data('jsp');
				if (jspApi) {
					jspApi.reinitialise(settings);
				} else {
					$("script",elem).filter('[type="text/javascript"],:not([type])').remove();
					jspApi = new JScrollPane(elem, settings);
					elem.data('jsp', jspApi);
				}
			}
		);
	};

	$.fn.jScrollPane.defaults = {
		showArrows					: false,
		maintainPosition			: true,
		stickToBottom				: false,
		stickToRight				: false,
		clickOnTrack				: true,
		autoReinitialise			: false,
		autoReinitialiseDelay		: 500,
		verticalDragMinHeight		: 0,
		verticalDragMaxHeight		: 99999,
		horizontalDragMinWidth		: 0,
		horizontalDragMaxWidth		: 99999,
		contentWidth				: undefined,
		animateScroll				: false,
		animateDuration				: 300,
		animateEase					: 'linear',
		hijackInternalLinks			: false,
		verticalGutter				: 4,
		horizontalGutter			: 4,
		mouseWheelSpeed				: 3,
		arrowButtonSpeed			: 0,
		arrowRepeatFreq				: 50,
		arrowScrollOnHover			: false,
		trackClickSpeed				: 0,
		trackClickRepeatFreq		: 70,
		verticalArrowPositions		: 'split',
		horizontalArrowPositions	: 'split',
		enableKeyboardNavigation	: true,
		hideFocus					: false,
		keyboardSpeed				: 0,
		initialDelay                : 300,        // Delay before starting repeating
		speed						: 30,		// Default speed when others falsey
		scrollPagePercent			: .8		// Percent of visible area scrolled when pageUp/Down or track area pressed
	};

},this));
;/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.9
 *
 * Requires: jQuery 1.2.2+
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.9',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
        },

        getLineHeight: function(elem) {
            return parseInt($(elem)['offsetParent' in $.fn ? 'offsetParent' : 'parent']().css('fontSize'), 10);
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));


/*!
 * TextTailor - v0.1.0
 * https://github.com/jpntex
 *
 * http://jpntex.com
 *
 * Copyright (c) 2014 João Teixeira; Licensed MIT
 *
 */

(function($, window) {
	'use strict';

	var defaults = {
		minFont: 1,
		maxFont: 9999,
		preWrapText: false,
		lineHeight: 1.45,
		resizable: true,
		debounce: false,
		fit: true,
		ellipsis: true,
		center: false,
		justify: false
	};

	function Tailor(el, options) {
		this.el = el;
		this.options = $.extend({}, defaults, options);
		this.init();
	}

	Tailor.prototype = {
		init: function() {
			var error = (this.options.minFont > this.options.maxFont),
				el = $(this.el);

			if (error && window.console) {
				console.log('TextTailor error: minFont needs to be smaller than maxFont!');
			}

			// store original html source from element
			this.HTML = this.el.innerHTML;

			if (!error) {
				var resize,
					_self = this;

				if (this.options.resizable) {
					$(window).on('resize', function() {
						if (_self.options.debounce) {
							clearTimeout(resize);
							resize = setTimeout(function() {
								_self.start();
							}, 200);
						} else {
							_self.start();
						}
					});
				}

				this.start();
			}
		},
		start: function() {
			var el = $(this.el);

			// reset element
			this.el.innerHTML = this.HTML;
			el.wrapInner('<div/>');
			this.wraped = $(this.el.firstChild);
			this.wraped.css({
				'line-height': this.options.lineHeight,
				'tranform': 'translateZ(0)',
				'height': 'auto'
			});


			if (this.options.preWrapText) this.wraped.css('white-space', 'pre-line');

			this.maxHeight = el.height();
			this.maxWidth = el.width();

			this.fit().ellipsis().center().justify();
		},
		fit: function() {
			if (this.options.fit) {
				var _self = this,
					el = this.wraped,
					maxIter = 30,
					iterCount = 0,
					fitCalc = function calcMe(size, min, max) {
						if (++iterCount === maxIter) return size;
						if (size <= _self.options.minFont) return _self.options.minFont;
						if (size >= _self.options.maxFont) return _self.options.maxFont;
						if (min === max) return min;

						// force DOM height update
						el.css('fontSize', (size));

						if (el[0].scrollHeight < _self.maxHeight) {
							el.css('fontSize', (size + 1));
							if (el[0].scrollHeight >= _self.maxHeight) return size;
							return calcMe(Math.round((max + size) / 2), size, max);
						} else {
							el.css('fontSize', (size - 1));
							return calcMe(Math.round((min + size) / 2), min, size);
						}
					};

				var m = Math.round((this.options.maxFont + this.options.minFont) / 2);
				el.css('fontSize', m);

				var measure = fitCalc(m, this.options.minFont, this.options.maxFont);
				el.css('fontSize', measure);
			}

			return this;

		},
		ellipsis: function() {
			if (this.options.ellipsis) {
				var el = this.wraped;

				el.css({
					'overflow': 'hidden',
					'text-overflow': 'ellipsis'
				});

				if (el.height() > this.maxHeight) {
					var tmpText = el.html();
					el.html('O');

					var rowHeight = el.height(),
						start = 1,
						end = tmpText.length;

					while (start < end) {
						var length = Math.ceil((start + end) / 2);
						el.html(tmpText.slice(0, length) + '...');

						if (el.height() <= this.maxHeight) {
							start = length;
						} else {
							end = length - 1;
						}
					}

					el.html(tmpText.slice(0, start) + '...');
				}
			}

			return this;
		},
		center: function() {
			if (this.options.center) {
				var pos = $(this.el).css('position');

				if (pos !== 'relative' && pos !== 'absolute') {
					$(this.el).css("position", "relative");
				}

				this.wraped.css({
					"position": "absolute",
					"width": this.wraped.width() + "px",
					"left": "0",
					"right": "0",
					"top": "0",
					"bottom": "0",
					"height": this.wraped.height() + "px",
					"margin": "auto"
				});
			}
			return this;
		},
		justify: function() {
			if (this.options.justify) {
				this.wraped.css({
					"text-align": "justify"
				});
			}
			return this;
		}
	};

	$.fn.textTailor = function(options) {
		return this.each(function() {
			// prevent multiple instantiations
			if (!$.data(this, 'TextTailor')) {
				$.data(this, 'TextTailor',
					new Tailor(this, options));
			}
		});
	};

})(jQuery, window);
;(function() {var b=void 0,f=!0,h=null,l=!1;function m(){return function(){}}function p(a){return function(){return this[a]}}function r(a){return function(){return a}}var t;document.createElement("video");document.createElement("audio");document.createElement("track");function u(a,c,d){if("string"===typeof a){0===a.indexOf("#")&&(a=a.slice(1));if(u.va[a])return u.va[a];a=u.u(a)}if(!a||!a.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");return a.player||new u.Player(a,c,d)}
var videojs=u;window.Vd=window.Wd=u;u.Qb="4.4";u.Dc="https:"==document.location.protocol?"https://":"http://";u.options={techOrder:["html5","flash"],html5:{},flash:{},width:300,height:150,defaultVolume:0,children:{mediaLoader:{},posterImage:{},textTrackDisplay:{},loadingSpinner:{},bigPlayButton:{},controlBar:{}},notSupportedMessage:'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'};
"GENERATED_CDN_VSN"!==u.Qb&&(videojs.options.flash.swf=u.Dc+"vjs.zencdn.net/"+u.Qb+"/video-js.swf");u.va={};"function"===typeof define&&define.amd?define([],function(){return videojs}):"object"===typeof exports&&"object"===typeof module&&(module.exports=videojs);u.ka=u.CoreObject=m();
u.ka.extend=function(a){var c,d;a=a||{};c=a.init||a.h||this.prototype.init||this.prototype.h||m();d=function(){c.apply(this,arguments)};d.prototype=u.k.create(this.prototype);d.prototype.constructor=d;d.extend=u.ka.extend;d.create=u.ka.create;for(var e in a)a.hasOwnProperty(e)&&(d.prototype[e]=a[e]);return d};u.ka.create=function(){var a=u.k.create(this.prototype);this.apply(a,arguments);return a};
u.d=function(a,c,d){var e=u.getData(a);e.z||(e.z={});e.z[c]||(e.z[c]=[]);d.s||(d.s=u.s++);e.z[c].push(d);e.U||(e.disabled=l,e.U=function(c){if(!e.disabled){c=u.hc(c);var d=e.z[c.type];if(d)for(var d=d.slice(0),k=0,q=d.length;k<q&&!c.oc();k++)d[k].call(a,c)}});1==e.z[c].length&&(document.addEventListener?a.addEventListener(c,e.U,l):document.attachEvent&&a.attachEvent("on"+c,e.U))};
u.o=function(a,c,d){if(u.lc(a)){var e=u.getData(a);if(e.z)if(c){var g=e.z[c];if(g){if(d){if(d.s)for(e=0;e<g.length;e++)g[e].s===d.s&&g.splice(e--,1)}else e.z[c]=[];u.dc(a,c)}}else for(g in e.z)c=g,e.z[c]=[],u.dc(a,c)}};u.dc=function(a,c){var d=u.getData(a);0===d.z[c].length&&(delete d.z[c],document.removeEventListener?a.removeEventListener(c,d.U,l):document.detachEvent&&a.detachEvent("on"+c,d.U));u.Ab(d.z)&&(delete d.z,delete d.U,delete d.disabled);u.Ab(d)&&u.sc(a)};
u.hc=function(a){function c(){return f}function d(){return l}if(!a||!a.Bb){var e=a||window.event;a={};for(var g in e)"layerX"!==g&&("layerY"!==g&&"keyboardEvent.keyLocation"!==g)&&("returnValue"==g&&e.preventDefault||(a[g]=e[g]));a.target||(a.target=a.srcElement||document);a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;a.preventDefault=function(){e.preventDefault&&e.preventDefault();a.returnValue=l;a.zb=c};a.zb=d;a.stopPropagation=function(){e.stopPropagation&&e.stopPropagation();
a.cancelBubble=f;a.Bb=c};a.Bb=d;a.stopImmediatePropagation=function(){e.stopImmediatePropagation&&e.stopImmediatePropagation();a.oc=c;a.stopPropagation()};a.oc=d;if(a.clientX!=h){g=document.documentElement;var j=document.body;a.pageX=a.clientX+(g&&g.scrollLeft||j&&j.scrollLeft||0)-(g&&g.clientLeft||j&&j.clientLeft||0);a.pageY=a.clientY+(g&&g.scrollTop||j&&j.scrollTop||0)-(g&&g.clientTop||j&&j.clientTop||0)}a.which=a.charCode||a.keyCode;a.button!=h&&(a.button=a.button&1?0:a.button&4?1:a.button&2?2:
0)}return a};u.j=function(a,c){var d=u.lc(a)?u.getData(a):{},e=a.parentNode||a.ownerDocument;"string"===typeof c&&(c={type:c,target:a});c=u.hc(c);d.U&&d.U.call(a,c);if(e&&!c.Bb()&&c.bubbles!==l)u.j(e,c);else if(!e&&!c.zb()&&(d=u.getData(c.target),c.target[c.type])){d.disabled=f;if("function"===typeof c.target[c.type])c.target[c.type]();d.disabled=l}return!c.zb()};u.T=function(a,c,d){function e(){u.o(a,c,e);d.apply(this,arguments)}e.s=d.s=d.s||u.s++;u.d(a,c,e)};var v=Object.prototype.hasOwnProperty;
u.e=function(a,c){var d,e;d=document.createElement(a||"div");for(e in c)v.call(c,e)&&(-1!==e.indexOf("aria-")||"role"==e?d.setAttribute(e,c[e]):d[e]=c[e]);return d};u.Y=function(a){return a.charAt(0).toUpperCase()+a.slice(1)};u.k={};u.k.create=Object.create||function(a){function c(){}c.prototype=a;return new c};u.k.ra=function(a,c,d){for(var e in a)v.call(a,e)&&c.call(d||this,e,a[e])};u.k.B=function(a,c){if(!c)return a;for(var d in c)v.call(c,d)&&(a[d]=c[d]);return a};
u.k.Vc=function(a,c){var d,e,g;a=u.k.copy(a);for(d in c)v.call(c,d)&&(e=a[d],g=c[d],a[d]=u.k.Ma(e)&&u.k.Ma(g)?u.k.Vc(e,g):c[d]);return a};u.k.copy=function(a){return u.k.B({},a)};u.k.Ma=function(a){return!!a&&"object"===typeof a&&"[object Object]"===a.toString()&&a.constructor===Object};u.bind=function(a,c,d){function e(){return c.apply(a,arguments)}c.s||(c.s=u.s++);e.s=d?d+"_"+c.s:c.s;return e};u.pa={};u.s=1;u.expando="vdata"+(new Date).getTime();
u.getData=function(a){var c=a[u.expando];c||(c=a[u.expando]=u.s++,u.pa[c]={});return u.pa[c]};u.lc=function(a){a=a[u.expando];return!(!a||u.Ab(u.pa[a]))};u.sc=function(a){var c=a[u.expando];if(c){delete u.pa[c];try{delete a[u.expando]}catch(d){a.removeAttribute?a.removeAttribute(u.expando):a[u.expando]=h}}};u.Ab=function(a){for(var c in a)if(a[c]!==h)return l;return f};u.n=function(a,c){-1==(" "+a.className+" ").indexOf(" "+c+" ")&&(a.className=""===a.className?c:a.className+" "+c)};
u.t=function(a,c){var d,e;if(-1!=a.className.indexOf(c)){d=a.className.split(" ");for(e=d.length-1;0<=e;e--)d[e]===c&&d.splice(e,1);a.className=d.join(" ")}};u.ea=u.e("video");u.I=navigator.userAgent;u.Jc=/iPhone/i.test(u.I);u.Ic=/iPad/i.test(u.I);u.Kc=/iPod/i.test(u.I);u.Hc=u.Jc||u.Ic||u.Kc;var aa=u,w;var x=u.I.match(/OS (\d+)_/i);w=x&&x[1]?x[1]:b;aa.Hd=w;u.Gc=/Android/i.test(u.I);var ba=u,y;var z=u.I.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),A,B;
z?(A=z[1]&&parseFloat(z[1]),B=z[2]&&parseFloat(z[2]),y=A&&B?parseFloat(z[1]+"."+z[2]):A?A:h):y=h;ba.Ec=y;u.Lc=u.Gc&&/webkit/i.test(u.I)&&2.3>u.Ec;u.Tb=/Firefox/i.test(u.I);u.Id=/Chrome/i.test(u.I);u.Zb=!!("ontouchstart"in window||window.Fc&&document instanceof window.Fc);
u.wb=function(a){var c,d,e,g;c={};if(a&&a.attributes&&0<a.attributes.length){d=a.attributes;for(var j=d.length-1;0<=j;j--){e=d[j].name;g=d[j].value;if("boolean"===typeof a[e]||-1!==",autoplay,controls,loop,muted,default,".indexOf(","+e+","))g=g!==h?f:l;c[e]=g}}return c};
u.Md=function(a,c){var d="";document.defaultView&&document.defaultView.getComputedStyle?d=document.defaultView.getComputedStyle(a,"").getPropertyValue(c):a.currentStyle&&(d=a["client"+c.substr(0,1).toUpperCase()+c.substr(1)]+"px");return d};u.yb=function(a,c){c.firstChild?c.insertBefore(a,c.firstChild):c.appendChild(a)};u.Nb={};u.u=function(a){0===a.indexOf("#")&&(a=a.slice(1));return document.getElementById(a)};
u.ta=function(a,c){c=c||a;var d=Math.floor(a%60),e=Math.floor(a/60%60),g=Math.floor(a/3600),j=Math.floor(c/60%60),k=Math.floor(c/3600);if(isNaN(a)||Infinity===a)g=e=d="-";g=0<g||0<k?g+":":"";return g+(((g||10<=j)&&10>e?"0"+e:e)+":")+(10>d?"0"+d:d)};u.Rc=function(){document.body.focus();document.onselectstart=r(l)};u.Cd=function(){document.onselectstart=r(f)};u.trim=function(a){return(a+"").replace(/^\s+|\s+$/g,"")};u.round=function(a,c){c||(c=0);return Math.round(a*Math.pow(10,c))/Math.pow(10,c)};
u.sb=function(a,c){return{length:1,start:function(){return a},end:function(){return c}}};
u.get=function(a,c,d){var e,g;"undefined"===typeof XMLHttpRequest&&(window.XMLHttpRequest=function(){try{return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new window.ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw Error("This browser does not support XMLHttpRequest.");});g=new XMLHttpRequest;try{g.open("GET",a)}catch(j){d(j)}e=0===a.indexOf("file:")||0===window.location.href.indexOf("file:")&&-1===a.indexOf("http");
g.onreadystatechange=function(){4===g.readyState&&(200===g.status||e&&0===g.status?c(g.responseText):d&&d())};try{g.send()}catch(k){d&&d(k)}};u.ud=function(a){try{var c=window.localStorage||l;c&&(c.volume=a)}catch(d){22==d.code||1014==d.code?u.log("LocalStorage Full (VideoJS)",d):18==d.code?u.log("LocalStorage not allowed (VideoJS)",d):u.log("LocalStorage Error (VideoJS)",d)}};u.jc=function(a){a.match(/^https?:\/\//)||(a=u.e("div",{innerHTML:'<a href="'+a+'">x</a>'}).firstChild.href);return a};
u.log=function(){u.log.history=u.log.history||[];u.log.history.push(arguments);window.console&&window.console.log(Array.prototype.slice.call(arguments))};u.bd=function(a){var c,d;a.getBoundingClientRect&&a.parentNode&&(c=a.getBoundingClientRect());if(!c)return{left:0,top:0};a=document.documentElement;d=document.body;return{left:c.left+(window.pageXOffset||d.scrollLeft)-(a.clientLeft||d.clientLeft||0),top:c.top+(window.pageYOffset||d.scrollTop)-(a.clientTop||d.clientTop||0)}};u.ja={};
u.ja.Fb=function(a,c){var d,e,g;a=u.k.copy(a);for(d in c)c.hasOwnProperty(d)&&(e=a[d],g=c[d],a[d]=u.k.Ma(e)&&u.k.Ma(g)?u.ja.Fb(e,g):c[d]);return a};
u.b=u.ka.extend({h:function(a,c,d){this.c=a;this.g=u.k.copy(this.g);c=this.options(c);this.Q=c.id||(c.el&&c.el.id?c.el.id:a.id()+"_component_"+u.s++);this.jd=c.name||h;this.a=c.el||this.e();this.J=[];this.Ia={};this.Ja={};this.mc();this.H(d);if(c.tc!==l){var e,g;e=u.bind(this.C(),this.C().reportUserActivity);this.d("touchstart",function(){e();clearInterval(g);g=setInterval(e,250)});a=function(){e();clearInterval(g)};this.d("touchmove",e);this.d("touchend",a);this.d("touchcancel",a)}}});t=u.b.prototype;
t.dispose=function(){this.j({type:"dispose",bubbles:l});if(this.J)for(var a=this.J.length-1;0<=a;a--)this.J[a].dispose&&this.J[a].dispose();this.Ja=this.Ia=this.J=h;this.o();this.a.parentNode&&this.a.parentNode.removeChild(this.a);u.sc(this.a);this.a=h};t.c=f;t.C=p("c");t.options=function(a){return a===b?this.g:this.g=u.ja.Fb(this.g,a)};t.e=function(a,c){return u.e(a,c)};t.u=p("a");t.Ka=function(){return this.F||this.a};t.id=p("Q");t.name=p("jd");t.children=p("J");t.dd=function(a){return this.Ia[a]};
t.fa=function(a){return this.Ja[a]};t.X=function(a,c){var d,e;"string"===typeof a?(e=a,c=c||{},d=c.componentClass||u.Y(e),c.name=e,d=new window.videojs[d](this.c||this,c)):d=a;this.J.push(d);"function"===typeof d.id&&(this.Ia[d.id()]=d);(e=e||d.name&&d.name())&&(this.Ja[e]=d);"function"===typeof d.el&&d.el()&&this.Ka().appendChild(d.el());return d};
t.removeChild=function(a){"string"===typeof a&&(a=this.fa(a));if(a&&this.J){for(var c=l,d=this.J.length-1;0<=d;d--)if(this.J[d]===a){c=f;this.J.splice(d,1);break}c&&(this.Ia[a.id]=h,this.Ja[a.name]=h,(c=a.u())&&c.parentNode===this.Ka()&&this.Ka().removeChild(a.u()))}};t.mc=function(){var a=this.g;if(a&&a.children){var c=this;u.k.ra(a.children,function(a,e){e!==l&&!e.loadEvent&&(c[a]=c.X(a,e))})}};t.P=r("");t.d=function(a,c){u.d(this.a,a,u.bind(this,c));return this};
t.o=function(a,c){u.o(this.a,a,c);return this};t.T=function(a,c){u.T(this.a,a,u.bind(this,c));return this};t.j=function(a,c){u.j(this.a,a,c);return this};t.H=function(a){a&&(this.$?a.call(this):(this.Ta===b&&(this.Ta=[]),this.Ta.push(a)));return this};t.Wa=function(){this.$=f;var a=this.Ta;if(a&&0<a.length){for(var c=0,d=a.length;c<d;c++)a[c].call(this);this.Ta=[];this.j("ready")}};t.n=function(a){u.n(this.a,a);return this};t.t=function(a){u.t(this.a,a);return this};
t.show=function(){this.a.style.display="block";return this};t.D=function(){this.a.style.display="none";return this};function D(a){a.t("vjs-lock-showing")}t.disable=function(){this.D();this.show=m()};t.width=function(a,c){return E(this,"width",a,c)};t.height=function(a,c){return E(this,"height",a,c)};t.Xc=function(a,c){return this.width(a,f).height(c)};
function E(a,c,d,e){if(d!==b)return a.a.style[c]=-1!==(""+d).indexOf("%")||-1!==(""+d).indexOf("px")?d:"auto"===d?"":d+"px",e||a.j("resize"),a;if(!a.a)return 0;d=a.a.style[c];e=d.indexOf("px");return-1!==e?parseInt(d.slice(0,e),10):parseInt(a.a["offset"+u.Y(c)],10)}
u.q=u.b.extend({h:function(a,c){u.b.call(this,a,c);var d=l;this.d("touchstart",function(a){a.preventDefault();d=f});this.d("touchmove",function(){d=l});var e=this;this.d("touchend",function(a){d&&e.p(a);a.preventDefault()});this.d("click",this.p);this.d("focus",this.Pa);this.d("blur",this.Oa)}});t=u.q.prototype;
t.e=function(a,c){c=u.k.B({className:this.P(),innerHTML:'<div class="vjs-control-content"><span class="vjs-control-text">'+(this.oa||"Need Text")+"</span></div>",role:"button","aria-live":"polite",tabIndex:0},c);return u.b.prototype.e.call(this,a,c)};t.P=function(){return"vjs-control "+u.b.prototype.P.call(this)};t.p=m();t.Pa=function(){u.d(document,"keyup",u.bind(this,this.aa))};t.aa=function(a){if(32==a.which||13==a.which)a.preventDefault(),this.p()};
t.Oa=function(){u.o(document,"keyup",u.bind(this,this.aa))};u.N=u.b.extend({h:function(a,c){u.b.call(this,a,c);this.Qc=this.fa(this.g.barName);this.handle=this.fa(this.g.handleName);a.d(this.qc,u.bind(this,this.update));this.d("mousedown",this.Qa);this.d("touchstart",this.Qa);this.d("focus",this.Pa);this.d("blur",this.Oa);this.d("click",this.p);this.c.d("controlsvisible",u.bind(this,this.update));a.H(u.bind(this,this.update));this.O={}}});t=u.N.prototype;
t.e=function(a,c){c=c||{};c.className+=" vjs-slider";c=u.k.B({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},c);return u.b.prototype.e.call(this,a,c)};t.Qa=function(a){a.preventDefault();u.Rc();this.O.move=u.bind(this,this.Hb);this.O.end=u.bind(this,this.Ib);u.d(document,"mousemove",this.O.move);u.d(document,"mouseup",this.O.end);u.d(document,"touchmove",this.O.move);u.d(document,"touchend",this.O.end);this.Hb(a)};
t.Ib=function(){u.Cd();u.o(document,"mousemove",this.O.move,l);u.o(document,"mouseup",this.O.end,l);u.o(document,"touchmove",this.O.move,l);u.o(document,"touchend",this.O.end,l);this.update()};t.update=function(){if(this.a){var a,c=this.xb(),d=this.handle,e=this.Qc;isNaN(c)&&(c=0);a=c;if(d){a=this.a.offsetWidth;var g=d.u().offsetWidth;a=g?g/a:0;c*=1-a;a=c+a/2;d.u().style.left=u.round(100*c,2)+"%"}e.u().style.width=u.round(100*a,2)+"%"}};
function F(a,c){var d,e,g,j;d=a.a;e=u.bd(d);j=g=d.offsetWidth;d=a.handle;if(a.g.Dd)return j=e.top,e=c.changedTouches?c.changedTouches[0].pageY:c.pageY,d&&(d=d.u().offsetHeight,j+=d/2,g-=d),Math.max(0,Math.min(1,(j-e+g)/g));g=e.left;e=c.changedTouches?c.changedTouches[0].pageX:c.pageX;d&&(d=d.u().offsetWidth,g+=d/2,j-=d);return Math.max(0,Math.min(1,(e-g)/j))}t.Pa=function(){u.d(document,"keyup",u.bind(this,this.aa))};
t.aa=function(a){37==a.which?(a.preventDefault(),this.wc()):39==a.which&&(a.preventDefault(),this.xc())};t.Oa=function(){u.o(document,"keyup",u.bind(this,this.aa))};t.p=function(a){a.stopImmediatePropagation();a.preventDefault()};u.V=u.b.extend();u.V.prototype.defaultValue=0;u.V.prototype.e=function(a,c){c=c||{};c.className+=" vjs-slider-handle";c=u.k.B({innerHTML:'<span class="vjs-control-text">'+this.defaultValue+"</span>"},c);return u.b.prototype.e.call(this,"div",c)};u.la=u.b.extend();
function ca(a,c){a.X(c);c.d("click",u.bind(a,function(){D(this)}))}u.la.prototype.e=function(){var a=this.options().Tc||"ul";this.F=u.e(a,{className:"vjs-menu-content"});a=u.b.prototype.e.call(this,"div",{append:this.F,className:"vjs-menu"});a.appendChild(this.F);u.d(a,"click",function(a){a.preventDefault();a.stopImmediatePropagation()});return a};u.M=u.q.extend({h:function(a,c){u.q.call(this,a,c);this.selected(c.selected)}});
u.M.prototype.e=function(a,c){return u.q.prototype.e.call(this,"li",u.k.B({className:"vjs-menu-item",innerHTML:this.g.label},c))};u.M.prototype.p=function(){this.selected(f)};u.M.prototype.selected=function(a){a?(this.n("vjs-selected"),this.a.setAttribute("aria-selected",f)):(this.t("vjs-selected"),this.a.setAttribute("aria-selected",l))};
u.R=u.q.extend({h:function(a,c){u.q.call(this,a,c);this.ua=this.La();this.X(this.ua);this.K&&0===this.K.length&&this.D();this.d("keyup",this.aa);this.a.setAttribute("aria-haspopup",f);this.a.setAttribute("role","button")}});t=u.R.prototype;t.na=l;t.La=function(){var a=new u.la(this.c);this.options().title&&a.u().appendChild(u.e("li",{className:"vjs-menu-title",innerHTML:u.Y(this.A),Ad:-1}));if(this.K=this.createItems())for(var c=0;c<this.K.length;c++)ca(a,this.K[c]);return a};t.qa=m();
t.P=function(){return this.className+" vjs-menu-button "+u.q.prototype.P.call(this)};t.Pa=m();t.Oa=m();t.p=function(){this.T("mouseout",u.bind(this,function(){D(this.ua);this.a.blur()}));this.na?G(this):H(this)};t.aa=function(a){a.preventDefault();32==a.which||13==a.which?this.na?G(this):H(this):27==a.which&&this.na&&G(this)};function H(a){a.na=f;a.ua.n("vjs-lock-showing");a.a.setAttribute("aria-pressed",f);a.K&&0<a.K.length&&a.K[0].u().focus()}
function G(a){a.na=l;D(a.ua);a.a.setAttribute("aria-pressed",l)}
u.Player=u.b.extend({h:function(a,c,d){this.L=a;a.id=a.id||"vjs_video_"+u.s++;c=u.k.B(da(a),c);this.v={};this.rc=c.poster;this.rb=c.controls;a.controls=l;c.tc=l;u.b.call(this,this,c,d);this.controls()?this.n("vjs-controls-enabled"):this.n("vjs-controls-disabled");this.T("play",function(a){u.j(this.a,{type:"firstplay",target:this.a})||(a.preventDefault(),a.stopPropagation(),a.stopImmediatePropagation())});this.d("ended",this.kd);this.d("play",this.Kb);this.d("firstplay",this.ld);this.d("pause",this.Jb);
this.d("progress",this.nd);this.d("durationchange",this.pc);this.d("error",this.Gb);this.d("fullscreenchange",this.md);u.va[this.Q]=this;c.plugins&&u.k.ra(c.plugins,function(a,c){this[a](c)},this);var e,g,j,k;e=u.bind(this,this.reportUserActivity);this.d("mousedown",function(){e();clearInterval(g);g=setInterval(e,250)});this.d("mousemove",e);this.d("mouseup",function(){e();clearInterval(g)});this.d("keydown",e);this.d("keyup",e);j=setInterval(u.bind(this,function(){this.ia&&(this.ia=l,this.userActive(f),
clearTimeout(k),k=setTimeout(u.bind(this,function(){this.ia||this.userActive(l)}),2E3))}),250);this.d("dispose",function(){clearInterval(j);clearTimeout(k)})}});t=u.Player.prototype;t.g=u.options;t.dispose=function(){this.j("dispose");this.o("dispose");u.va[this.Q]=h;this.L&&this.L.player&&(this.L.player=h);this.a&&this.a.player&&(this.a.player=h);clearInterval(this.Sa);this.wa();this.i&&this.i.dispose();u.b.prototype.dispose.call(this)};
function da(a){var c={sources:[],tracks:[]};u.k.B(c,u.wb(a));if(a.hasChildNodes()){var d,e,g,j;a=a.childNodes;g=0;for(j=a.length;g<j;g++)d=a[g],e=d.nodeName.toLowerCase(),"source"===e?c.sources.push(u.wb(d)):"track"===e&&c.tracks.push(u.wb(d))}return c}
t.e=function(){var a=this.a=u.b.prototype.e.call(this,"div"),c=this.L;c.removeAttribute("width");c.removeAttribute("height");if(c.hasChildNodes()){var d,e,g,j,k;d=c.childNodes;e=d.length;for(k=[];e--;)g=d[e],j=g.nodeName.toLowerCase(),"track"===j&&k.push(g);for(d=0;d<k.length;d++)c.removeChild(k[d])}a.id=c.id;a.className=c.className;c.id+="_html5_api";c.className="vjs-tech";c.player=a.player=this;this.n("vjs-paused");this.width(this.g.width,f);this.height(this.g.height,f);c.parentNode&&c.parentNode.insertBefore(a,
c);u.yb(c,a);return a};
function I(a,c,d){a.i&&(a.$=l,a.i.dispose(),a.Db&&(a.Db=l,clearInterval(a.Sa)),a.Eb&&J(a),a.i=l);"Html5"!==c&&a.L&&(u.l.fc(a.L),a.L=h);a.xa=c;a.$=l;var e=u.k.B({source:d,parentEl:a.a},a.g[c.toLowerCase()]);d&&(d.src==a.v.src&&0<a.v.currentTime&&(e.startTime=a.v.currentTime),a.v.src=d.src);a.i=new window.videojs[c](a,e);a.i.H(function(){this.c.Wa();if(!this.m.progressEvents){var a=this.c;a.Db=f;a.Sa=setInterval(u.bind(a,function(){this.v.mb<this.buffered().end(0)?this.j("progress"):1==this.bufferedPercent()&&
(clearInterval(this.Sa),this.j("progress"))}),500);a.i.T("progress",function(){this.m.progressEvents=f;var a=this.c;a.Db=l;clearInterval(a.Sa)})}this.m.timeupdateEvents||(a=this.c,a.Eb=f,a.d("play",a.Ac),a.d("pause",a.wa),a.i.T("timeupdate",function(){this.m.timeupdateEvents=f;J(this.c)}))})}function J(a){a.Eb=l;a.wa();a.o("play",a.Ac);a.o("pause",a.wa)}t.Ac=function(){this.ec&&this.wa();this.ec=setInterval(u.bind(this,function(){this.j("timeupdate")}),250)};t.wa=function(){clearInterval(this.ec)};
t.Kb=function(){u.t(this.a,"vjs-paused");u.n(this.a,"vjs-playing")};t.ld=function(){this.g.starttime&&this.currentTime(this.g.starttime);this.n("vjs-has-started")};t.Jb=function(){u.t(this.a,"vjs-playing");u.n(this.a,"vjs-paused")};t.nd=function(){1==this.bufferedPercent()&&this.j("loadedalldata")};t.kd=function(){this.g.loop&&(this.currentTime(0),this.play())};t.pc=function(){var a=K(this,"duration");a&&this.duration(a)};t.md=function(){this.isFullScreen()?this.n("vjs-fullscreen"):this.t("vjs-fullscreen")};
t.Gb=function(a){u.log("Video Error",a)};function L(a,c,d){if(a.i&&!a.i.$)a.i.H(function(){this[c](d)});else try{a.i[c](d)}catch(e){throw u.log(e),e;}}function K(a,c){if(a.i&&a.i.$)try{return a.i[c]()}catch(d){throw a.i[c]===b?u.log("Video.js: "+c+" method not defined for "+a.xa+" playback technology.",d):"TypeError"==d.name?(u.log("Video.js: "+c+" unavailable on "+a.xa+" playback technology element.",d),a.i.$=l):u.log(d),d;}}t.play=function(){L(this,"play");return this};
t.pause=function(){L(this,"pause");return this};t.paused=function(){return K(this,"paused")===l?l:f};t.currentTime=function(a){return a!==b?(L(this,"setCurrentTime",a),this.Eb&&this.j("timeupdate"),this):this.v.currentTime=K(this,"currentTime")||0};t.duration=function(a){if(a!==b)return this.v.duration=parseFloat(a),this;this.v.duration===b&&this.pc();return this.v.duration||0};
t.buffered=function(){var a=K(this,"buffered"),c=a.length-1,d=this.v.mb=this.v.mb||0;a&&(0<=c&&a.end(c)!==d)&&(d=a.end(c),this.v.mb=d);return u.sb(0,d)};t.bufferedPercent=function(){return this.duration()?this.buffered().end(0)/this.duration():0};t.volume=function(a){if(a!==b)return a=Math.max(0,Math.min(1,parseFloat(a))),this.v.volume=a,L(this,"setVolume",a),u.ud(a),this;a=parseFloat(K(this,"volume"));return isNaN(a)?1:a};
t.muted=function(a){return a!==b?(L(this,"setMuted",a),this):K(this,"muted")||l};t.Va=function(){return K(this,"supportsFullScreen")||l};t.nc=l;t.isFullScreen=function(a){return a!==b?(this.nc=a,this):this.nc};
t.requestFullScreen=function(){var a=u.Nb.requestFullScreen;this.isFullScreen(f);a?(u.d(document,a.ub,u.bind(this,function(c){this.isFullScreen(document[a.isFullScreen]);this.isFullScreen()===l&&u.o(document,a.ub,arguments.callee);this.j("fullscreenchange")})),this.a[a.uc]()):this.i.Va()?L(this,"enterFullScreen"):(this.ed=f,this.Yc=document.documentElement.style.overflow,u.d(document,"keydown",u.bind(this,this.ic)),document.documentElement.style.overflow="hidden",u.n(document.body,"vjs-full-window"),
this.j("enterFullWindow"),this.j("fullscreenchange"));return this};t.cancelFullScreen=function(){var a=u.Nb.requestFullScreen;this.isFullScreen(l);if(a)document[a.ob]();else this.i.Va()?L(this,"exitFullScreen"):(M(this),this.j("fullscreenchange"));return this};t.ic=function(a){27===a.keyCode&&(this.isFullScreen()===f?this.cancelFullScreen():M(this))};
function M(a){a.ed=l;u.o(document,"keydown",a.ic);document.documentElement.style.overflow=a.Yc;u.t(document.body,"vjs-full-window");a.j("exitFullWindow")}
t.src=function(a){if(a instanceof Array){var c;a:{c=a;for(var d=0,e=this.g.techOrder;d<e.length;d++){var g=u.Y(e[d]),j=window.videojs[g];if(j.isSupported())for(var k=0,q=c;k<q.length;k++){var n=q[k];if(j.canPlaySource(n)){c={source:n,i:g};break a}}}c=l}c?(a=c.source,c=c.i,c==this.xa?this.src(a):I(this,c,a)):this.a.appendChild(u.e("p",{innerHTML:this.options().notSupportedMessage}))}else a instanceof Object?window.videojs[this.xa].canPlaySource(a)?this.src(a.src):this.src([a]):(this.v.src=a,this.$?
(L(this,"src",a),"auto"==this.g.preload&&this.load(),this.g.autoplay&&this.play()):this.H(function(){this.src(a)}));return this};t.load=function(){L(this,"load");return this};t.currentSrc=function(){return K(this,"currentSrc")||this.v.src||""};t.Ra=function(a){return a!==b?(L(this,"setPreload",a),this.g.preload=a,this):K(this,"preload")};t.autoplay=function(a){return a!==b?(L(this,"setAutoplay",a),this.g.autoplay=a,this):K(this,"autoplay")};
t.loop=function(a){return a!==b?(L(this,"setLoop",a),this.g.loop=a,this):K(this,"loop")};t.poster=function(a){if(a===b)return this.rc;this.rc=a;L(this,"setPoster",a);this.j("posterchange")};t.controls=function(a){return a!==b?(a=!!a,this.rb!==a&&((this.rb=a)?(this.t("vjs-controls-disabled"),this.n("vjs-controls-enabled"),this.j("controlsenabled")):(this.t("vjs-controls-enabled"),this.n("vjs-controls-disabled"),this.j("controlsdisabled"))),this):this.rb};u.Player.prototype.Pb;t=u.Player.prototype;
t.usingNativeControls=function(a){return a!==b?(a=!!a,this.Pb!==a&&((this.Pb=a)?(this.n("vjs-using-native-controls"),this.j("usingnativecontrols")):(this.t("vjs-using-native-controls"),this.j("usingcustomcontrols"))),this):this.Pb};t.error=function(){return K(this,"error")};t.ended=function(){return K(this,"ended")};t.seeking=function(){return K(this,"seeking")};t.ia=f;t.reportUserActivity=function(){this.ia=f};t.Ob=f;
t.userActive=function(a){return a!==b?(a=!!a,a!==this.Ob&&((this.Ob=a)?(this.ia=f,this.t("vjs-user-inactive"),this.n("vjs-user-active"),this.j("useractive")):(this.ia=l,this.i.T("mousemove",function(a){a.stopPropagation();a.preventDefault()}),this.t("vjs-user-active"),this.n("vjs-user-inactive"),this.j("userinactive"))),this):this.Ob};var N,O,P;P=document.createElement("div");O={};
P.Jd!==b?(O.uc="requestFullscreen",O.ob="exitFullscreen",O.ub="fullscreenchange",O.isFullScreen="fullScreen"):(document.mozCancelFullScreen?(N="moz",O.isFullScreen=N+"FullScreen"):(N="webkit",O.isFullScreen=N+"IsFullScreen"),P[N+"RequestFullScreen"]&&(O.uc=N+"RequestFullScreen",O.ob=N+"CancelFullScreen"),O.ub=N+"fullscreenchange");document[O.ob]&&(u.Nb.requestFullScreen=O);u.Ca=u.b.extend();
u.Ca.prototype.g={Od:"play",children:{playToggle:{},currentTimeDisplay:{},timeDivider:{},durationDisplay:{},remainingTimeDisplay:{},progressControl:{},fullscreenToggle:{},volumeControl:{},muteToggle:{}}};u.Ca.prototype.e=function(){return u.e("div",{className:"vjs-control-bar"})};u.Wb=u.q.extend({h:function(a,c){u.q.call(this,a,c);a.d("play",u.bind(this,this.Kb));a.d("pause",u.bind(this,this.Jb))}});t=u.Wb.prototype;t.oa="Play";t.P=function(){return"vjs-play-control "+u.q.prototype.P.call(this)};
t.p=function(){this.c.paused()?this.c.play():this.c.pause()};t.Kb=function(){u.t(this.a,"vjs-paused");u.n(this.a,"vjs-playing");this.a.children[0].children[0].innerHTML="Pause"};t.Jb=function(){u.t(this.a,"vjs-playing");u.n(this.a,"vjs-paused");this.a.children[0].children[0].innerHTML="Play"};u.$a=u.b.extend({h:function(a,c){u.b.call(this,a,c);a.d("timeupdate",u.bind(this,this.ca))}});
u.$a.prototype.e=function(){var a=u.b.prototype.e.call(this,"div",{className:"vjs-current-time vjs-time-controls vjs-control"});this.F=u.e("div",{className:"vjs-current-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span>0:00',"aria-live":"off"});a.appendChild(this.F);return a};u.$a.prototype.ca=function(){var a=this.c.Ua?this.c.v.currentTime:this.c.currentTime();this.F.innerHTML='<span class="vjs-control-text">Current Time </span>'+u.ta(a,this.c.duration())};
u.ab=u.b.extend({h:function(a,c){u.b.call(this,a,c);a.d("timeupdate",u.bind(this,this.ca))}});u.ab.prototype.e=function(){var a=u.b.prototype.e.call(this,"div",{className:"vjs-duration vjs-time-controls vjs-control"});this.F=u.e("div",{className:"vjs-duration-display",innerHTML:'<span class="vjs-control-text">Duration Time </span>0:00',"aria-live":"off"});a.appendChild(this.F);return a};
u.ab.prototype.ca=function(){var a=this.c.duration();a&&(this.F.innerHTML='<span class="vjs-control-text">Duration Time </span>'+u.ta(a))};u.ac=u.b.extend({h:function(a,c){u.b.call(this,a,c)}});u.ac.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-time-divider",innerHTML:"<div><span>/</span></div>"})};u.gb=u.b.extend({h:function(a,c){u.b.call(this,a,c);a.d("timeupdate",u.bind(this,this.ca))}});
u.gb.prototype.e=function(){var a=u.b.prototype.e.call(this,"div",{className:"vjs-remaining-time vjs-time-controls vjs-control"});this.F=u.e("div",{className:"vjs-remaining-time-display",innerHTML:'<span class="vjs-control-text">Remaining Time </span>-0:00',"aria-live":"off"});a.appendChild(this.F);return a};u.gb.prototype.ca=function(){this.c.duration()&&(this.F.innerHTML='<span class="vjs-control-text">Remaining Time </span>-'+u.ta(this.c.duration()-this.c.currentTime()))};
u.Da=u.q.extend({h:function(a,c){u.q.call(this,a,c)}});u.Da.prototype.oa="Fullscreen";u.Da.prototype.P=function(){return"vjs-fullscreen-control "+u.q.prototype.P.call(this)};u.Da.prototype.p=function(){this.c.isFullScreen()?(this.c.cancelFullScreen(),this.a.children[0].children[0].innerHTML="Fullscreen"):(this.c.requestFullScreen(),this.a.children[0].children[0].innerHTML="Non-Fullscreen")};u.fb=u.b.extend({h:function(a,c){u.b.call(this,a,c)}});u.fb.prototype.g={children:{seekBar:{}}};
u.fb.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-progress-control vjs-control"})};u.Xb=u.N.extend({h:function(a,c){u.N.call(this,a,c);a.d("timeupdate",u.bind(this,this.za));a.H(u.bind(this,this.za))}});t=u.Xb.prototype;t.g={children:{loadProgressBar:{},playProgressBar:{},seekHandle:{}},barName:"playProgressBar",handleName:"seekHandle"};t.qc="timeupdate";t.e=function(){return u.N.prototype.e.call(this,"div",{className:"vjs-progress-holder","aria-label":"video progress bar"})};
t.za=function(){var a=this.c.Ua?this.c.v.currentTime:this.c.currentTime();this.a.setAttribute("aria-valuenow",u.round(100*this.xb(),2));this.a.setAttribute("aria-valuetext",u.ta(a,this.c.duration()))};t.xb=function(){return this.c.currentTime()/this.c.duration()};t.Qa=function(a){u.N.prototype.Qa.call(this,a);this.c.Ua=f;this.Ed=!this.c.paused();this.c.pause()};t.Hb=function(a){a=F(this,a)*this.c.duration();a==this.c.duration()&&(a-=0.1);this.c.currentTime(a)};
t.Ib=function(a){u.N.prototype.Ib.call(this,a);this.c.Ua=l;this.Ed&&this.c.play()};t.xc=function(){this.c.currentTime(this.c.currentTime()+5)};t.wc=function(){this.c.currentTime(this.c.currentTime()-5)};u.cb=u.b.extend({h:function(a,c){u.b.call(this,a,c);a.d("progress",u.bind(this,this.update))}});u.cb.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text">Loaded: 0%</span>'})};
u.cb.prototype.update=function(){this.a.style&&(this.a.style.width=u.round(100*this.c.bufferedPercent(),2)+"%")};u.Vb=u.b.extend({h:function(a,c){u.b.call(this,a,c)}});u.Vb.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-play-progress",innerHTML:'<span class="vjs-control-text">Progress: 0%</span>'})};u.Fa=u.V.extend({h:function(a,c){u.V.call(this,a,c);a.d("timeupdate",u.bind(this,this.ca))}});u.Fa.prototype.defaultValue="00:00";
u.Fa.prototype.e=function(){return u.V.prototype.e.call(this,"div",{className:"vjs-seek-handle","aria-live":"off"})};u.Fa.prototype.ca=function(){var a=this.c.Ua?this.c.v.currentTime:this.c.currentTime();this.a.innerHTML='<span class="vjs-control-text">'+u.ta(a,this.c.duration())+"</span>"};u.ib=u.b.extend({h:function(a,c){u.b.call(this,a,c);a.i&&(a.i.m&&a.i.m.volumeControl===l)&&this.n("vjs-hidden");a.d("loadstart",u.bind(this,function(){a.i.m&&a.i.m.volumeControl===l?this.n("vjs-hidden"):this.t("vjs-hidden")}))}});
u.ib.prototype.g={children:{volumeBar:{}}};u.ib.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-volume-control vjs-control"})};u.hb=u.N.extend({h:function(a,c){u.N.call(this,a,c);a.d("volumechange",u.bind(this,this.za));a.H(u.bind(this,this.za));setTimeout(u.bind(this,this.update),0)}});t=u.hb.prototype;t.za=function(){this.a.setAttribute("aria-valuenow",u.round(100*this.c.volume(),2));this.a.setAttribute("aria-valuetext",u.round(100*this.c.volume(),2)+"%")};
t.g={children:{volumeLevel:{},volumeHandle:{}},barName:"volumeLevel",handleName:"volumeHandle"};t.qc="volumechange";t.e=function(){return u.N.prototype.e.call(this,"div",{className:"vjs-volume-bar","aria-label":"volume level"})};t.Hb=function(a){this.c.muted()&&this.c.muted(l);this.c.volume(F(this,a))};t.xb=function(){return this.c.muted()?0:this.c.volume()};t.xc=function(){this.c.volume(this.c.volume()+0.1)};t.wc=function(){this.c.volume(this.c.volume()-0.1)};
u.bc=u.b.extend({h:function(a,c){u.b.call(this,a,c)}});u.bc.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})};u.jb=u.V.extend();u.jb.prototype.defaultValue="00:00";u.jb.prototype.e=function(){return u.V.prototype.e.call(this,"div",{className:"vjs-volume-handle"})};
u.da=u.q.extend({h:function(a,c){u.q.call(this,a,c);a.d("volumechange",u.bind(this,this.update));a.i&&(a.i.m&&a.i.m.volumeControl===l)&&this.n("vjs-hidden");a.d("loadstart",u.bind(this,function(){a.i.m&&a.i.m.volumeControl===l?this.n("vjs-hidden"):this.t("vjs-hidden")}))}});u.da.prototype.e=function(){return u.q.prototype.e.call(this,"div",{className:"vjs-mute-control vjs-control",innerHTML:'<div><span class="vjs-control-text">Mute</span></div>'})};
u.da.prototype.p=function(){this.c.muted(this.c.muted()?l:f)};u.da.prototype.update=function(){var a=this.c.volume(),c=3;0===a||this.c.muted()?c=0:0.33>a?c=1:0.67>a&&(c=2);this.c.muted()?"Unmute"!=this.a.children[0].children[0].innerHTML&&(this.a.children[0].children[0].innerHTML="Unmute"):"Mute"!=this.a.children[0].children[0].innerHTML&&(this.a.children[0].children[0].innerHTML="Mute");for(a=0;4>a;a++)u.t(this.a,"vjs-vol-"+a);u.n(this.a,"vjs-vol-"+c)};
u.ma=u.R.extend({h:function(a,c){u.R.call(this,a,c);a.d("volumechange",u.bind(this,this.update));a.i&&(a.i.m&&a.i.m.Bc===l)&&this.n("vjs-hidden");a.d("loadstart",u.bind(this,function(){a.i.m&&a.i.m.Bc===l?this.n("vjs-hidden"):this.t("vjs-hidden")}));this.n("vjs-menu-button")}});u.ma.prototype.La=function(){var a=new u.la(this.c,{Tc:"div"}),c=new u.hb(this.c,u.k.B({Dd:f},this.g.Xd));a.X(c);return a};u.ma.prototype.p=function(){u.da.prototype.p.call(this);u.R.prototype.p.call(this)};
u.ma.prototype.e=function(){return u.q.prototype.e.call(this,"div",{className:"vjs-volume-menu-button vjs-menu-button vjs-control",innerHTML:'<div><span class="vjs-control-text">Mute</span></div>'})};u.ma.prototype.update=u.da.prototype.update;u.Ea=u.q.extend({h:function(a,c){u.q.call(this,a,c);a.poster()&&this.src(a.poster());(!a.poster()||!a.controls())&&this.D();a.d("posterchange",u.bind(this,function(){this.src(a.poster())}));a.d("play",u.bind(this,this.D))}});var Q="backgroundSize"in u.ea.style;
u.Ea.prototype.e=function(){var a=u.e("div",{className:"vjs-poster",tabIndex:-1});Q||a.appendChild(u.e("img"));return a};u.Ea.prototype.src=function(a){var c=this.u();a!==b&&(Q?c.style.backgroundImage='url("'+a+'")':c.firstChild.src=a)};u.Ea.prototype.p=function(){this.C().controls()&&this.c.play()};
u.Ub=u.b.extend({h:function(a,c){u.b.call(this,a,c);a.d("canplay",u.bind(this,this.D));a.d("canplaythrough",u.bind(this,this.D));a.d("playing",u.bind(this,this.D));a.d("seeked",u.bind(this,this.D));a.d("seeking",u.bind(this,this.show));a.d("seeked",u.bind(this,this.D));a.d("error",u.bind(this,this.show));a.d("waiting",u.bind(this,this.show))}});u.Ub.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-loading-spinner"})};u.Ya=u.q.extend();
u.Ya.prototype.e=function(){return u.q.prototype.e.call(this,"div",{className:"vjs-big-play-button",innerHTML:'<span aria-hidden="true"></span>',"aria-label":"play video"})};u.Ya.prototype.p=function(){this.c.play()};
u.r=u.b.extend({h:function(a,c,d){c=c||{};c.tc=l;u.b.call(this,a,c,d);var e,g;g=this;e=this.C();a=function(){if(e.controls()&&!e.usingNativeControls()){var a;g.d("mousedown",g.p);g.d("touchstart",function(c){c.preventDefault();a=this.c.userActive()});g.d("touchmove",function(){a&&this.C().reportUserActivity()});var c,d,n,s;c=0;g.d("touchstart",function(){c=(new Date).getTime();n=f});s=function(){n=l};g.d("touchmove",s);g.d("touchleave",s);g.d("touchcancel",s);g.d("touchend",function(){n===f&&(d=(new Date).getTime()-
c,250>d&&this.j("tap"))});g.d("tap",g.od)}};c=u.bind(g,g.rd);this.H(a);e.d("controlsenabled",a);e.d("controlsdisabled",c)}});u.r.prototype.rd=function(){this.o("tap");this.o("touchstart");this.o("touchmove");this.o("touchleave");this.o("touchcancel");this.o("touchend");this.o("click");this.o("mousedown")};u.r.prototype.p=function(a){0===a.button&&this.C().controls()&&(this.C().paused()?this.C().play():this.C().pause())};u.r.prototype.od=function(){this.C().userActive(!this.C().userActive())};
u.r.prototype.m={volumeControl:f,fullscreenResize:l,progressEvents:l,timeupdateEvents:l};u.media={};u.media.Xa="play pause paused currentTime setCurrentTime duration buffered volume setVolume muted setMuted width height supportsFullScreen enterFullScreen src load currentSrc preload setPreload autoplay setAutoplay loop setLoop error networkState readyState seeking initialTime startOffsetTime played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks defaultPlaybackRate playbackRate mediaGroup controller controls defaultMuted".split(" ");
function ea(){var a=u.media.Xa[i];return function(){throw Error('The "'+a+"\" method is not available on the playback technology's API");}}for(var i=u.media.Xa.length-1;0<=i;i--)u.r.prototype[u.media.Xa[i]]=ea();
u.l=u.r.extend({h:function(a,c,d){this.m.volumeControl=u.l.Sc();this.m.movingMediaElementInDOM=!u.Hc;this.m.fullscreenResize=f;u.r.call(this,a,c,d);for(d=u.l.bb.length-1;0<=d;d--)u.d(this.a,u.l.bb[d],u.bind(this.c,this.$c));(c=c.source)&&this.a.currentSrc===c.src&&0<this.a.networkState?a.j("loadstart"):c&&(this.a.src=c.src);if(u.Zb&&a.options().nativeControlsForTouch!==l){var e,g,j,k;e=this;g=this.C();c=g.controls();e.a.controls=!!c;j=function(){e.a.controls=f};k=function(){e.a.controls=l};g.d("controlsenabled",
j);g.d("controlsdisabled",k);c=function(){g.o("controlsenabled",j);g.o("controlsdisabled",k)};e.d("dispose",c);g.d("usingcustomcontrols",c);g.usingNativeControls(f)}a.H(function(){this.L&&(this.g.autoplay&&this.paused())&&(delete this.L.poster,this.play())});this.Wa()}});t=u.l.prototype;t.dispose=function(){u.r.prototype.dispose.call(this)};
t.e=function(){var a=this.c,c=a.L,d;if(!c||this.m.movingMediaElementInDOM===l)c?(d=c.cloneNode(l),u.l.fc(c),c=d,a.L=h):c=u.e("video",{id:a.id()+"_html5_api",className:"vjs-tech"}),c.player=a,u.yb(c,a.u());d=["autoplay","preload","loop","muted"];for(var e=d.length-1;0<=e;e--){var g=d[e];a.g[g]!==h&&(c[g]=a.g[g])}return c};t.$c=function(a){this.j(a);a.stopPropagation()};t.play=function(){this.a.play()};t.pause=function(){this.a.pause()};t.paused=function(){return this.a.paused};t.currentTime=function(){return this.a.currentTime};
t.td=function(a){try{this.a.currentTime=a}catch(c){u.log(c,"Video is not ready. (Video.js)")}};t.duration=function(){return this.a.duration||0};t.buffered=function(){return this.a.buffered};t.volume=function(){return this.a.volume};t.yd=function(a){this.a.volume=a};t.muted=function(){return this.a.muted};t.wd=function(a){this.a.muted=a};t.width=function(){return this.a.offsetWidth};t.height=function(){return this.a.offsetHeight};
t.Va=function(){return"function"==typeof this.a.webkitEnterFullScreen&&(/Android/.test(u.I)||!/Chrome|Mac OS X 10.5/.test(u.I))?f:l};t.gc=function(){var a=this.a;a.paused&&a.networkState<=a.Gd?(this.a.play(),setTimeout(function(){a.pause();a.webkitEnterFullScreen()},0)):a.webkitEnterFullScreen()};t.ad=function(){this.a.webkitExitFullScreen()};t.src=function(a){this.a.src=a};t.load=function(){this.a.load()};t.currentSrc=function(){return this.a.currentSrc};t.poster=function(){return this.a.poster};
t.Ra=function(){return this.a.Ra};t.xd=function(a){this.a.Ra=a};t.autoplay=function(){return this.a.autoplay};t.sd=function(a){this.a.autoplay=a};t.controls=function(){return this.a.controls};t.loop=function(){return this.a.loop};t.vd=function(a){this.a.loop=a};t.error=function(){return this.a.error};t.seeking=function(){return this.a.seeking};t.ended=function(){return this.a.ended};u.l.isSupported=function(){return!!u.ea.canPlayType};u.l.nb=function(a){try{return!!u.ea.canPlayType(a.type)}catch(c){return""}};
u.l.Sc=function(){var a=u.ea.volume;u.ea.volume=a/2+0.1;return a!==u.ea.volume};u.l.bb="loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");u.l.fc=function(a){if(a){a.player=h;for(a.parentNode&&a.parentNode.removeChild(a);a.hasChildNodes();)a.removeChild(a.firstChild);a.removeAttribute("src");"function"===typeof a.load&&a.load()}};
u.Lc&&(document.createElement("video").constructor.prototype.canPlayType=function(a){return a&&-1!=a.toLowerCase().indexOf("video/mp4")?"maybe":""});
u.f=u.r.extend({h:function(a,c,d){u.r.call(this,a,c,d);var e=c.source;d=c.parentEl;var g=this.a=u.e("div",{id:a.id()+"_temp_flash"}),j=a.id()+"_flash_api";a=a.g;var k=u.k.B({readyFunction:"videojs.Flash.onReady",eventProxyFunction:"videojs.Flash.onEvent",errorEventProxyFunction:"videojs.Flash.onError",autoplay:a.autoplay,preload:a.Ra,loop:a.loop,muted:a.muted},c.flashVars),q=u.k.B({wmode:"opaque",bgcolor:"#000000"},c.params),n=u.k.B({id:j,name:j,"class":"vjs-tech"},c.attributes),s;e&&(e.type&&u.f.gd(e.type)?
(a=u.f.yc(e.src),k.rtmpConnection=encodeURIComponent(a.qb),k.rtmpStream=encodeURIComponent(a.Mb)):k.src=encodeURIComponent(u.jc(e.src)));this.setCurrentTime=function(a){s=a;this.a.vjs_setProperty("currentTime",a)};this.currentTime=function(){return this.seeking()?s:this.a.vjs_getProperty("currentTime")};u.yb(g,d);c.startTime&&this.H(function(){this.load();this.play();this.currentTime(c.startTime)});u.Tb&&this.H(function(){u.d(this.u(),"mousemove",u.bind(this,function(){this.C().j({type:"mousemove",
bubbles:l})}))});if(c.iFrameMode===f&&!u.Tb){var C=u.e("iframe",{id:j+"_iframe",name:j+"_iframe",className:"vjs-tech",scrolling:"no",marginWidth:0,marginHeight:0,frameBorder:0});k.readyFunction="ready";k.eventProxyFunction="events";k.errorEventProxyFunction="errors";u.d(C,"load",u.bind(this,function(){var a,d=C.contentWindow;a=C.contentDocument?C.contentDocument:C.contentWindow.document;a.write(u.f.kc(c.swf,k,q,n));d.player=this.c;d.ready=u.bind(this.c,function(c){var d=this.i;d.a=a.getElementById(c);
u.f.pb(d)});d.events=u.bind(this.c,function(a,c){this&&"flash"===this.xa&&this.j(c)});d.errors=u.bind(this.c,function(a,c){u.log("Flash Error",c)})}));g.parentNode.replaceChild(C,g)}else u.f.Zc(c.swf,g,k,q,n)}});t=u.f.prototype;t.dispose=function(){u.r.prototype.dispose.call(this)};t.play=function(){this.a.vjs_play()};t.pause=function(){this.a.vjs_pause()};
t.src=function(a){u.f.fd(a)?(a=u.f.yc(a),this.Sd(a.qb),this.Td(a.Mb)):(a=u.jc(a),this.a.vjs_src(a));if(this.c.autoplay()){var c=this;setTimeout(function(){c.play()},0)}};t.currentSrc=function(){var a=this.a.vjs_getProperty("currentSrc");if(a==h){var c=this.Qd(),d=this.Rd();c&&d&&(a=u.f.zd(c,d))}return a};t.load=function(){this.a.vjs_load()};t.poster=function(){this.a.vjs_getProperty("poster")};t.buffered=function(){return u.sb(0,this.a.vjs_getProperty("buffered"))};t.Va=r(l);t.gc=r(l);
var R=u.f.prototype,S="rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),T="error currentSrc networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" ");function fa(){var a=S[U],c=a.charAt(0).toUpperCase()+a.slice(1);R["set"+c]=function(c){return this.a.vjs_setProperty(a,c)}}
function V(a){R[a]=function(){return this.a.vjs_getProperty(a)}}var U;for(U=0;U<S.length;U++)V(S[U]),fa();for(U=0;U<T.length;U++)V(T[U]);u.f.isSupported=function(){return 10<=u.f.version()[0]};u.f.nb=function(a){if(!a.type)return"";a=a.type.replace(/;.*/,"").toLowerCase();if(a in u.f.cd||a in u.f.zc)return"maybe"};u.f.cd={"video/flv":"FLV","video/x-flv":"FLV","video/mp4":"MP4","video/m4v":"MP4"};u.f.zc={"rtmp/mp4":"MP4","rtmp/flv":"FLV"};
u.f.onReady=function(a){a=u.u(a);var c=a.player||a.parentNode.player,d=c.i;a.player=c;d.a=a;u.f.pb(d)};u.f.pb=function(a){a.u().vjs_getProperty?a.Wa():setTimeout(function(){u.f.pb(a)},50)};u.f.onEvent=function(a,c){u.u(a).player.j(c)};u.f.onError=function(a,c){u.u(a).player.j("error");u.log("Flash Error",c,a)};
u.f.version=function(){var a="0,0,0";try{a=(new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(c){try{navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(a=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])}catch(d){}}return a.split(",")};
u.f.Zc=function(a,c,d,e,g){a=u.f.kc(a,d,e,g);a=u.e("div",{innerHTML:a}).childNodes[0];d=c.parentNode;c.parentNode.replaceChild(a,c);var j=d.childNodes[0];setTimeout(function(){j.style.display="block"},1E3)};
u.f.kc=function(a,c,d,e){var g="",j="",k="";c&&u.k.ra(c,function(a,c){g+=a+"="+c+"&amp;"});d=u.k.B({movie:a,flashvars:g,allowScriptAccess:"always",allowNetworking:"all"},d);u.k.ra(d,function(a,c){j+='<param name="'+a+'" value="'+c+'" />'});e=u.k.B({data:a,width:"100%",height:"100%"},e);u.k.ra(e,function(a,c){k+=a+'="'+c+'" '});return'<object type="application/x-shockwave-flash"'+k+">"+j+"</object>"};u.f.zd=function(a,c){return a+"&"+c};
u.f.yc=function(a){var c={qb:"",Mb:""};if(!a)return c;var d=a.indexOf("&"),e;-1!==d?e=d+1:(d=e=a.lastIndexOf("/")+1,0===d&&(d=e=a.length));c.qb=a.substring(0,d);c.Mb=a.substring(e,a.length);return c};u.f.gd=function(a){return a in u.f.zc};u.f.Nc=/^rtmp[set]?:\/\//i;u.f.fd=function(a){return u.f.Nc.test(a)};
u.Mc=u.b.extend({h:function(a,c,d){u.b.call(this,a,c,d);if(!a.g.sources||0===a.g.sources.length){c=0;for(d=a.g.techOrder;c<d.length;c++){var e=u.Y(d[c]),g=window.videojs[e];if(g&&g.isSupported()){I(a,e);break}}}else a.src(a.g.sources)}});u.Player.prototype.textTracks=function(){return this.ya=this.ya||[]};function W(a,c,d){for(var e=a.ya,g=0,j=e.length,k,q;g<j;g++)k=e[g],k.id()===c?(k.show(),q=k):d&&(k.G()==d&&0<k.mode())&&k.disable();(c=q?q.G():d?d:l)&&a.j(c+"trackchange")}
u.w=u.b.extend({h:function(a,c){u.b.call(this,a,c);this.Q=c.id||"vjs_"+c.kind+"_"+c.language+"_"+u.s++;this.vc=c.src;this.Wc=c["default"]||c.dflt;this.Bd=c.title;this.Nd=c.srclang;this.hd=c.label;this.Z=[];this.kb=[];this.ga=this.ha=0;this.c.d("fullscreenchange",u.bind(this,this.Pc))}});t=u.w.prototype;t.G=p("A");t.src=p("vc");t.tb=p("Wc");t.title=p("Bd");t.label=p("hd");t.Uc=p("Z");t.Oc=p("kb");t.readyState=p("ha");t.mode=p("ga");
t.Pc=function(){this.a.style.fontSize=this.c.isFullScreen()?140*(screen.width/this.c.width())+"%":""};t.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-"+this.A+" vjs-text-track"})};t.show=function(){X(this);this.ga=2;u.b.prototype.show.call(this)};t.D=function(){X(this);this.ga=1;u.b.prototype.D.call(this)};
t.disable=function(){2==this.ga&&this.D();this.c.o("timeupdate",u.bind(this,this.update,this.Q));this.c.o("ended",u.bind(this,this.reset,this.Q));this.reset();this.c.fa("textTrackDisplay").removeChild(this);this.ga=0};function X(a){0===a.ha&&a.load();0===a.ga&&(a.c.d("timeupdate",u.bind(a,a.update,a.Q)),a.c.d("ended",u.bind(a,a.reset,a.Q)),("captions"===a.A||"subtitles"===a.A)&&a.c.fa("textTrackDisplay").X(a))}
t.load=function(){0===this.ha&&(this.ha=1,u.get(this.vc,u.bind(this,this.pd),u.bind(this,this.Gb)))};t.Gb=function(a){this.error=a;this.ha=3;this.j("error")};t.pd=function(a){var c,d;a=a.split("\n");for(var e="",g=1,j=a.length;g<j;g++)if(e=u.trim(a[g])){-1==e.indexOf("--\x3e")?(c=e,e=u.trim(a[++g])):c=this.Z.length;c={id:c,index:this.Z.length};d=e.split(" --\x3e ");c.startTime=Y(d[0]);c.sa=Y(d[1]);for(d=[];a[++g]&&(e=u.trim(a[g]));)d.push(e);c.text=d.join("<br/>");this.Z.push(c)}this.ha=2;this.j("loaded")};
function Y(a){var c=a.split(":");a=0;var d,e,g;3==c.length?(d=c[0],e=c[1],c=c[2]):(d=0,e=c[0],c=c[1]);c=c.split(/\s+/);c=c.splice(0,1)[0];c=c.split(/\.|,/);g=parseFloat(c[1]);c=c[0];a+=3600*parseFloat(d);a+=60*parseFloat(e);a+=parseFloat(c);g&&(a+=g/1E3);return a}
t.update=function(){if(0<this.Z.length){var a=this.c.currentTime();if(this.Lb===b||a<this.Lb||this.Na<=a){var c=this.Z,d=this.c.duration(),e=0,g=l,j=[],k,q,n,s;a>=this.Na||this.Na===b?s=this.vb!==b?this.vb:0:(g=f,s=this.Cb!==b?this.Cb:c.length-1);for(;;){n=c[s];if(n.sa<=a)e=Math.max(e,n.sa),n.Ha&&(n.Ha=l);else if(a<n.startTime){if(d=Math.min(d,n.startTime),n.Ha&&(n.Ha=l),!g)break}else g?(j.splice(0,0,n),q===b&&(q=s),k=s):(j.push(n),k===b&&(k=s),q=s),d=Math.min(d,n.sa),e=Math.max(e,n.startTime),n.Ha=
f;if(g)if(0===s)break;else s--;else if(s===c.length-1)break;else s++}this.kb=j;this.Na=d;this.Lb=e;this.vb=k;this.Cb=q;a=this.kb;c="";d=0;for(e=a.length;d<e;d++)c+='<span class="vjs-tt-cue">'+a[d].text+"</span>";this.a.innerHTML=c;this.j("cuechange")}}};t.reset=function(){this.Na=0;this.Lb=this.c.duration();this.Cb=this.vb=0};u.Rb=u.w.extend();u.Rb.prototype.A="captions";u.Yb=u.w.extend();u.Yb.prototype.A="subtitles";u.Sb=u.w.extend();u.Sb.prototype.A="chapters";
u.$b=u.b.extend({h:function(a,c,d){u.b.call(this,a,c,d);if(a.g.tracks&&0<a.g.tracks.length){c=this.c;a=a.g.tracks;var e;for(d=0;d<a.length;d++){e=a[d];var g=c,j=e.kind,k=e.label,q=e.language,n=e;e=g.ya=g.ya||[];n=n||{};n.kind=j;n.label=k;n.language=q;j=u.Y(j||"subtitles");g=new window.videojs[j+"Track"](g,n);e.push(g)}}}});u.$b.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-text-track-display"})};
u.W=u.M.extend({h:function(a,c){var d=this.ba=c.track;c.label=d.label();c.selected=d.tb();u.M.call(this,a,c);this.c.d(d.G()+"trackchange",u.bind(this,this.update))}});u.W.prototype.p=function(){u.M.prototype.p.call(this);W(this.c,this.ba.Q,this.ba.G())};u.W.prototype.update=function(){this.selected(2==this.ba.mode())};u.eb=u.W.extend({h:function(a,c){c.track={G:function(){return c.kind},C:a,label:function(){return c.kind+" off"},tb:r(l),mode:r(l)};u.W.call(this,a,c);this.selected(f)}});
u.eb.prototype.p=function(){u.W.prototype.p.call(this);W(this.c,this.ba.Q,this.ba.G())};u.eb.prototype.update=function(){for(var a=this.c.textTracks(),c=0,d=a.length,e,g=f;c<d;c++)e=a[c],e.G()==this.ba.G()&&2==e.mode()&&(g=l);this.selected(g)};u.S=u.R.extend({h:function(a,c){u.R.call(this,a,c);1>=this.K.length&&this.D()}});
u.S.prototype.qa=function(){var a=[],c;a.push(new u.eb(this.c,{kind:this.A}));for(var d=0;d<this.c.textTracks().length;d++)c=this.c.textTracks()[d],c.G()===this.A&&a.push(new u.W(this.c,{track:c}));return a};u.Aa=u.S.extend({h:function(a,c,d){u.S.call(this,a,c,d);this.a.setAttribute("aria-label","Captions Menu")}});u.Aa.prototype.A="captions";u.Aa.prototype.oa="Captions";u.Aa.prototype.className="vjs-captions-button";
u.Ga=u.S.extend({h:function(a,c,d){u.S.call(this,a,c,d);this.a.setAttribute("aria-label","Subtitles Menu")}});u.Ga.prototype.A="subtitles";u.Ga.prototype.oa="Subtitles";u.Ga.prototype.className="vjs-subtitles-button";u.Ba=u.S.extend({h:function(a,c,d){u.S.call(this,a,c,d);this.a.setAttribute("aria-label","Chapters Menu")}});t=u.Ba.prototype;t.A="chapters";t.oa="Chapters";t.className="vjs-chapters-button";
t.qa=function(){for(var a=[],c,d=0;d<this.c.textTracks().length;d++)c=this.c.textTracks()[d],c.G()===this.A&&a.push(new u.W(this.c,{track:c}));return a};
t.La=function(){for(var a=this.c.textTracks(),c=0,d=a.length,e,g,j=this.K=[];c<d;c++)if(e=a[c],e.G()==this.A&&e.tb()){if(2>e.readyState()){this.Kd=e;e.d("loaded",u.bind(this,this.La));return}g=e;break}a=this.ua=new u.la(this.c);a.a.appendChild(u.e("li",{className:"vjs-menu-title",innerHTML:u.Y(this.A),Ad:-1}));if(g){e=g.Z;for(var k,c=0,d=e.length;c<d;c++)k=e[c],k=new u.Za(this.c,{track:g,cue:k}),j.push(k),a.X(k)}0<this.K.length&&this.show();return a};
u.Za=u.M.extend({h:function(a,c){var d=this.ba=c.track,e=this.cue=c.cue,g=a.currentTime();c.label=e.text;c.selected=e.startTime<=g&&g<e.sa;u.M.call(this,a,c);d.d("cuechange",u.bind(this,this.update))}});u.Za.prototype.p=function(){u.M.prototype.p.call(this);this.c.currentTime(this.cue.startTime);this.update(this.cue.startTime)};u.Za.prototype.update=function(){var a=this.cue,c=this.c.currentTime();this.selected(a.startTime<=c&&c<a.sa)};
u.k.B(u.Ca.prototype.g.children,{subtitlesButton:{},captionsButton:{},chaptersButton:{}});
if("undefined"!==typeof window.JSON&&"function"===window.JSON.parse)u.JSON=window.JSON;else{u.JSON={};var Z=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;u.JSON.parse=function(a,c){function d(a,e){var k,q,n=a[e];if(n&&"object"===typeof n)for(k in n)Object.prototype.hasOwnProperty.call(n,k)&&(q=d(n,k),q!==b?n[k]=q:delete n[k]);return c.call(a,e,n)}var e;a=String(a);Z.lastIndex=0;Z.test(a)&&(a=a.replace(Z,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));
if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+a+")"),"function"===typeof c?d({"":e},""):e;throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");}}
u.cc=function(){var a,c,d=document.getElementsByTagName("video");if(d&&0<d.length)for(var e=0,g=d.length;e<g;e++)if((c=d[e])&&c.getAttribute)c.player===b&&(a=c.getAttribute("data-setup"),a!==h&&(a=u.JSON.parse(a||"{}"),videojs(c,a)));else{u.lb();break}else u.Cc||u.lb()};u.lb=function(){setTimeout(u.cc,1)};"complete"===document.readyState?u.Cc=f:u.T(window,"load",function(){u.Cc=f});u.lb();u.qd=function(a,c){u.Player.prototype[a]=c};var ga=this;ga.Fd=f;function $(a,c){var d=a.split("."),e=ga;!(d[0]in e)&&e.execScript&&e.execScript("var "+d[0]);for(var g;d.length&&(g=d.shift());)!d.length&&c!==b?e[g]=c:e=e[g]?e[g]:e[g]={}};$("videojs",u);$("_V_",u);$("videojs.options",u.options);$("videojs.players",u.va);$("videojs.TOUCH_ENABLED",u.Zb);$("videojs.cache",u.pa);$("videojs.Component",u.b);u.b.prototype.player=u.b.prototype.C;u.b.prototype.options=u.b.prototype.options;u.b.prototype.init=u.b.prototype.h;u.b.prototype.dispose=u.b.prototype.dispose;u.b.prototype.createEl=u.b.prototype.e;u.b.prototype.contentEl=u.b.prototype.Ka;u.b.prototype.el=u.b.prototype.u;u.b.prototype.addChild=u.b.prototype.X;
u.b.prototype.getChild=u.b.prototype.fa;u.b.prototype.getChildById=u.b.prototype.dd;u.b.prototype.children=u.b.prototype.children;u.b.prototype.initChildren=u.b.prototype.mc;u.b.prototype.removeChild=u.b.prototype.removeChild;u.b.prototype.on=u.b.prototype.d;u.b.prototype.off=u.b.prototype.o;u.b.prototype.one=u.b.prototype.T;u.b.prototype.trigger=u.b.prototype.j;u.b.prototype.triggerReady=u.b.prototype.Wa;u.b.prototype.show=u.b.prototype.show;u.b.prototype.hide=u.b.prototype.D;
u.b.prototype.width=u.b.prototype.width;u.b.prototype.height=u.b.prototype.height;u.b.prototype.dimensions=u.b.prototype.Xc;u.b.prototype.ready=u.b.prototype.H;u.b.prototype.addClass=u.b.prototype.n;u.b.prototype.removeClass=u.b.prototype.t;u.b.prototype.buildCSSClass=u.b.prototype.P;u.Player.prototype.ended=u.Player.prototype.ended;$("videojs.MediaLoader",u.Mc);$("videojs.TextTrackDisplay",u.$b);$("videojs.ControlBar",u.Ca);$("videojs.Button",u.q);$("videojs.PlayToggle",u.Wb);
$("videojs.FullscreenToggle",u.Da);$("videojs.BigPlayButton",u.Ya);$("videojs.LoadingSpinner",u.Ub);$("videojs.CurrentTimeDisplay",u.$a);$("videojs.DurationDisplay",u.ab);$("videojs.TimeDivider",u.ac);$("videojs.RemainingTimeDisplay",u.gb);$("videojs.Slider",u.N);$("videojs.ProgressControl",u.fb);$("videojs.SeekBar",u.Xb);$("videojs.LoadProgressBar",u.cb);$("videojs.PlayProgressBar",u.Vb);$("videojs.SeekHandle",u.Fa);$("videojs.VolumeControl",u.ib);$("videojs.VolumeBar",u.hb);
$("videojs.VolumeLevel",u.bc);$("videojs.VolumeMenuButton",u.ma);$("videojs.VolumeHandle",u.jb);$("videojs.MuteToggle",u.da);$("videojs.PosterImage",u.Ea);$("videojs.Menu",u.la);$("videojs.MenuItem",u.M);$("videojs.MenuButton",u.R);u.R.prototype.createItems=u.R.prototype.qa;u.S.prototype.createItems=u.S.prototype.qa;u.Ba.prototype.createItems=u.Ba.prototype.qa;$("videojs.SubtitlesButton",u.Ga);$("videojs.CaptionsButton",u.Aa);$("videojs.ChaptersButton",u.Ba);$("videojs.MediaTechController",u.r);
u.r.prototype.features=u.r.prototype.m;u.r.prototype.m.volumeControl=u.r.prototype.m.Bc;u.r.prototype.m.fullscreenResize=u.r.prototype.m.Ld;u.r.prototype.m.progressEvents=u.r.prototype.m.Pd;u.r.prototype.m.timeupdateEvents=u.r.prototype.m.Ud;$("videojs.Html5",u.l);u.l.Events=u.l.bb;u.l.isSupported=u.l.isSupported;u.l.canPlaySource=u.l.nb;u.l.prototype.setCurrentTime=u.l.prototype.td;u.l.prototype.setVolume=u.l.prototype.yd;u.l.prototype.setMuted=u.l.prototype.wd;u.l.prototype.setPreload=u.l.prototype.xd;
u.l.prototype.setAutoplay=u.l.prototype.sd;u.l.prototype.setLoop=u.l.prototype.vd;u.l.prototype.enterFullScreen=u.l.prototype.gc;u.l.prototype.exitFullScreen=u.l.prototype.ad;$("videojs.Flash",u.f);u.f.isSupported=u.f.isSupported;u.f.canPlaySource=u.f.nb;u.f.onReady=u.f.onReady;$("videojs.TextTrack",u.w);u.w.prototype.label=u.w.prototype.label;u.w.prototype.kind=u.w.prototype.G;u.w.prototype.mode=u.w.prototype.mode;u.w.prototype.cues=u.w.prototype.Uc;u.w.prototype.activeCues=u.w.prototype.Oc;
$("videojs.CaptionsTrack",u.Rb);$("videojs.SubtitlesTrack",u.Yb);$("videojs.ChaptersTrack",u.Sb);$("videojs.autoSetup",u.cc);$("videojs.plugin",u.qd);$("videojs.createTimeRange",u.sb);$("videojs.util",u.ja);u.ja.mergeOptions=u.ja.Fb;})();

;(function() {
  /**
   * @fileoverview YouTube Media Controller - Wrapper for YouTube Media API
   */

  /**
   * YouTube Media Controller - Wrapper for YouTube Media API
   * @param {videojs.Player|Object} player
   * @param {Object=} options
   * @param {Function=} ready
   * @constructor
   */

  function addEventListener(element, event, cb) {
    if(!element.addEventListener) {
      element.attachEvent(event, cb);
    } else {
      element.addEventListener(event, cb, true);
    }
  }

  videojs.Youtube = videojs.MediaTechController.extend({
    /** @constructor */
    init: function(player, options, ready) {
      // Save this for internal usage
      this.player_ = player;
      
      // No event is triggering this for YouTube
      this['featuresProgressEvents'] = false;
      this['featuresTimeupdateEvents'] = false;
      // Enable rate changes
      this['featuresPlaybackRate'] = true;

      videojs.MediaTechController.call(this, player, options, ready);

      this.isIos = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
      this.isAndroid = /(Android)/g.test( navigator.userAgent );
      //used to prevent play events on IOS7 and Android > 4.2 until the user has clicked the player
      this.playVideoIsAllowed = !(this.isIos || this.isAndroid);
      
      // autoplay is disabled for mobile
      if (this.isIos || this.isAndroid) {
        this.player_.options()['autoplay'] = false;
      }

      // Copy the JavaScript options if they exists
      if(typeof options['source'] !== 'undefined') {
        for(var key in options['source']) {
          if(options['source'].hasOwnProperty(key)) {
            player.options()[key] = options['source'][key];
          }
        }
      }

      this.userQuality = videojs.Youtube.convertQualityName(player.options()['quality']);

      this.playerEl_ = document.getElementById(player.id());
      this.playerEl_.className += ' vjs-youtube';

      // Create the Quality button
      this.qualityButton = document.createElement('div');
      this.qualityButton.setAttribute('class', 'vjs-quality-button vjs-menu-button vjs-control');
      this.qualityButton.setAttribute('tabindex', 0);

      var qualityContent = document.createElement('div');
      qualityContent.setAttribute('class', 'vjs-control-content');
      this.qualityButton.appendChild(qualityContent);

      this.qualityTitle = document.createElement('span');
      this.qualityTitle.setAttribute('class', 'vjs-control-text');
      qualityContent.appendChild(this.qualityTitle);

      if(player.options()['quality'] !== 'undefined') {
        setInnerText(this.qualityTitle, player.options()['quality'] || 'auto');
      }

      var qualityMenu = document.createElement('div');
      qualityMenu.setAttribute('class', 'vjs-menu');
      qualityContent.appendChild(qualityMenu);

      this.qualityMenuContent = document.createElement('ul');
      this.qualityMenuContent.setAttribute('class', 'vjs-menu-content');
      qualityMenu.appendChild(this.qualityMenuContent);

      this.id_ = this.player_.id() + '_youtube_api';

      this.el_ = videojs.Component.prototype.createEl('iframe', {
        id: this.id_,
        className: 'vjs-tech',
        scrolling: 'no',
        marginWidth: 0,
        marginHeight: 0,
        frameBorder: 0
      });

      this.el_.setAttribute('allowFullScreen', '');

      this.playerEl_.insertBefore(this.el_, this.playerEl_.firstChild);

      if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
        var ieVersion = Number(RegExp.$1);
        this.addIframeBlocker(ieVersion);
      } else if(!/(iPad|iPhone|iPod|Android)/g.test(navigator.userAgent)) {
        // the pointer-events: none block the mobile player
        this.el_.className += ' onDesktop';
        this.addIframeBlocker();
      }

      this.parseSrc(player.options()['src']);

      this.playOnReady = this.player_.options()['autoplay'] && this.playVideoIsAllowed;
      this.forceSSL = !!(
        typeof this.player_.options()['forceSSL'] === 'undefined' ||
          this.player_.options()['forceSSL'] === true
        );
      this.forceHTML5 = !!(
        typeof this.player_.options()['forceHTML5'] === 'undefined' ||
          this.player_.options()['forceHTML5'] === true
        );

      this.updateIframeSrc();

      var self = this;

      player.ready(function() {
        if (self.player_.options()['controls']) {
          var controlBar = self.playerEl_.querySelectorAll('.vjs-control-bar')[0];
          if (controlBar) {
            controlBar.appendChild(self.qualityButton);
          }
        }

        if(self.playOnReady && !self.player_.options()['ytcontrols']) {
          if(typeof self.player_.loadingSpinner !== 'undefined') {
            self.player_.loadingSpinner.show();
          }
          if(typeof self.player_.bigPlayButton !== 'undefined') {
            self.player_.bigPlayButton.hide();
          }
        }

        player.trigger('loadstart');
      });

      this.on('dispose', function() {
        if(this.ytplayer) {
          this.ytplayer.destroy();
        }

        if(!this.player_.options()['ytcontrols']) {
          this.player_.off('waiting', this.bindedWaiting);
        }

        // Remove the poster
        this.playerEl_.querySelectorAll('.vjs-poster')[0].style.backgroundImage = 'none';

        // If still connected to the DOM, remove it.
        if(this.el_.parentNode) {
          this.el_.parentNode.removeChild(this.el_);
        }

        // Get rid of the created DOM elements
        if (this.qualityButton.parentNode) {
          this.qualityButton.parentNode.removeChild(this.qualityButton);
        }

        if(typeof this.player_.loadingSpinner !== 'undefined') {
          this.player_.loadingSpinner.hide();
        }
        if(typeof this.player_.bigPlayButton !== 'undefined') {
          this.player_.bigPlayButton.hide();
        }

        if(this.iframeblocker) {
          this.playerEl_.removeChild(this.iframeblocker);
        }
      });
    }
  });

  videojs.Youtube.prototype.updateIframeSrc = function() {
    var params = {
      enablejsapi: 1,
      /*jshint -W106 */
      iv_load_policy: 3,
      /*jshint +W106 */
      playerapiid: this.id(),
      disablekb: 1,
      wmode: 'transparent',
      controls: (this.player_.options()['ytcontrols']) ? 1 : 0,
      html5: (this.player_.options()['forceHTML5']) ? 1 : null,
      playsinline: (this.player_.options()['playsInline']) ? 1 : 0,
      showinfo: 0,
      rel: 0,
      autoplay: (this.playOnReady) ? 1 : 0,
      loop: (this.player_.options()['loop']) ? 1 : 0,
      list: this.playlistId,
      vq: this.userQuality,
      origin: window.location.protocol + '//' + window.location.host
    };

    // When running with no Web server, we can't specify the origin or it will break the YouTube API messages
    if(window.location.protocol === 'file:') {
      delete params.origin;
    }

    // Delete unset properties
    for(var prop in params) {
      if(params.hasOwnProperty(prop) &&
        ( typeof params[ prop ] === 'undefined' || params[ prop ] === null )
        ) {
        delete params[ prop ];
      }
    }
    var self = this;

    if(!this.videoId) {
      this.el_.src = 'about:blank';
      setTimeout(function() {
        self.triggerReady();
      }, 500);
    } else {
      this.el_.src = (
        (this.forceSSL || window.location.protocol === 'file:') ?
          'https:'
          : window.location.protocol
        ) + '//www.youtube.com/embed/' + this.videoId + '?' + videojs.Youtube.makeQueryString(params);

      if(this.player_.options()['ytcontrols']) {
        // Disable the video.js controls if we use the YouTube controls
        this.player_.controls(false);
      } else if(typeof this.player_.poster() === 'undefined' || this.player_.poster().length === 0) {
        // Wait here because the tech is still null in constructor
        setTimeout(function() {
          self.player_.poster('https://img.youtube.com/vi/' + self.videoId + '/0.jpg');
        }, 100);
      }

      this.bindedWaiting = function() {
        self.onWaiting();
      };

      this.player_.on('waiting', this.bindedWaiting);

      if(videojs.Youtube.apiReady) {
        this.loadYoutube();
      } else {
        // Add to the queue because the YouTube API is not ready
        videojs.Youtube.loadingQueue.push(this);

        // Load the YouTube API if it is the first YouTube video
        if(!videojs.Youtube.apiLoading) {
          var tag = document.createElement('script');
          tag.onerror = function(e) {
            self.onError(e);
          };
          tag.src = ( !this.forceSSL && window.location.protocol !== 'file:' ) ?
            '//www.youtube.com/iframe_api'
            : 'https://www.youtube.com/iframe_api';
          var firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
          videojs.Youtube.apiLoading = true;
        }
      }
    }
  };

  videojs.Youtube.prototype.onWaiting = function(/*e*/) {
    // Make sure to hide the play button while the spinner is there
    if(typeof this.player_.bigPlayButton !== 'undefined') {
      this.player_.bigPlayButton.hide();
    }
  };

  videojs.Youtube.prototype.addIframeBlocker = function(ieVersion) {
    this.iframeblocker = videojs.Component.prototype.createEl('div');

    this.iframeblocker.className = 'iframeblocker';

    this.iframeblocker.style.position = 'absolute';
    this.iframeblocker.style.left = 0;
    this.iframeblocker.style.right = 0;
    this.iframeblocker.style.top = 0;
    this.iframeblocker.style.bottom = 0;

    // Odd quirk for IE8 (doesn't support rgba)
    if(ieVersion && ieVersion < 9) {
      this.iframeblocker.style.opacity = 0.01;
    } else {
      this.iframeblocker.style.background = 'rgba(255, 255, 255, 0.01)';
    }

    var self = this;
    addEventListener(this.iframeblocker, 'mousemove', function(e) {
      if(!self.player_.userActive()) {
        self.player_.userActive(true);
      }

      e.stopPropagation();
      e.preventDefault();
    });

    addEventListener(this.iframeblocker, 'click', function(/*e*/) {
      if(self.paused()) {
        self.play();
      } else {
        self.pause();
      }
    });

    this.playerEl_.insertBefore(this.iframeblocker, this.el_.nextSibling);
  };

  videojs.Youtube.prototype.parseSrc = function(src) {
    this.srcVal = src;

    if(src) {
      // Regex to parse the video ID
      var regId = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      var match = src.match(regId);

      if(match && match[2].length === 11) {
        this.videoId = match[2];
      } else {
        this.videoId = null;
      }

      // Regex to parse the playlist ID
      var regPlaylist = /[?&]list=([^#\&\?]+)/;
      match = src.match(regPlaylist);

      if(match !== null && match.length > 1) {
        this.playlistId = match[1];
      } else {
        // Make sure their is no playlist
        if(this.playlistId) {
          delete this.playlistId;
        }
      }

      // Parse video quality option
      var regVideoQuality = /[?&]vq=([^#\&\?]+)/;
      match = src.match(regVideoQuality);

      if(match !== null && match.length > 1) {
        this.userQuality = match[1];
        setInnerText(this.qualityTitle, videojs.Youtube.parseQualityName(this.userQuality));
      }
    }
  };

  videojs.Youtube.prototype.src = function(src) {
    if(typeof src !== 'undefined') {
      this.parseSrc(src);

      if(this.el_.src === 'about:blank') {
        this.updateIframeSrc();
        return;
      }

      delete this.defaultQuality;

      if(this.videoId !== null) {
        if(this.player_.options()['autoplay'] && this.playVideoIsAllowed) {
          this.ytplayer.loadVideoById({
            videoId: this.videoId,
            suggestedQuality: this.userQuality
          });
        } else {
          this.ytplayer.cueVideoById({
            videoId: this.videoId,
            suggestedQuality: this.userQuality
          });
        }

        // Update the poster
        this.playerEl_.querySelectorAll('.vjs-poster')[0].style.backgroundImage =
          'url(https://img.youtube.com/vi/' + this.videoId + '/0.jpg)';
        this.player_.poster('https://img.youtube.com/vi/' + this.videoId + '/0.jpg');
      }
      /* else Invalid URL */
    }

    return this.srcVal;
  };

  videojs.Youtube.prototype.load = function() {
  };

  videojs.Youtube.prototype.play = function() {
    if(this.videoId !== null) {

      // Make sure to not display the spinner for mobile
      if(!this.player_.options()['ytcontrols']) {
        // Display the spinner until the video is playing by YouTube
        this.player_.trigger('waiting');
      }

      if(this.isReady_) {
        // Sync the player volume with YouTube
        this.ytplayer.setVolume(this.player_.volume() * 100);

        if(this.volumeVal > 0) {
          this.ytplayer.unMute();
        } else {
          this.ytplayer.mute();
        }

        if(this.playVideoIsAllowed) {
          this.ytplayer.playVideo();
        }
      } else {
        this.playOnReady = true;
      }
    }
  };

  videojs.Youtube.prototype.pause = function() {
    this.ytplayer.pauseVideo();
  };
  videojs.Youtube.prototype.paused = function() {
    return (this.ytplayer) ?
      (this.lastState !== YT.PlayerState.PLAYING && this.lastState !== YT.PlayerState.BUFFERING)
      : true;
  };
  videojs.Youtube.prototype.currentTime = function() {
    return (this.ytplayer && this.ytplayer.getCurrentTime) ? this.ytplayer.getCurrentTime() : 0;
  };
  videojs.Youtube.prototype.setCurrentTime = function(seconds) {
    this.ytplayer.seekTo(seconds, true);
    this.player_.trigger('timeupdate');
    this.player_.trigger('seeking');
    this.isSeeking = true;
  };
  videojs.Youtube.prototype.playbackRate = function() {
    return (this.ytplayer && this.ytplayer.getPlaybackRate) ? this.ytplayer.getPlaybackRate() : 1.0;
  };
  videojs.Youtube.prototype.setPlaybackRate = function(suggestedRate) {
    if (this.ytplayer && this.ytplayer.setPlaybackRate) {
      this.ytplayer.setPlaybackRate(suggestedRate);
      this.player_.trigger('ratechange');
    }
  };
  videojs.Youtube.prototype.duration = function() {
    return (this.ytplayer && this.ytplayer.getDuration) ? this.ytplayer.getDuration() : 0;
  };
  videojs.Youtube.prototype.currentSrc = function() {
    return this.srcVal;
  };
  videojs.Youtube.prototype.ended = function() {
    return (this.ytplayer) ? (this.lastState === YT.PlayerState.ENDED) : false;
  };

  videojs.Youtube.prototype.volume = function() {
    if(this.ytplayer && isNaN(this.volumeVal)) {
      this.volumeVal = this.ytplayer.getVolume() / 100.0;
      this.player_.volume(this.volumeVal);
    }

    return this.volumeVal;
  };

  videojs.Youtube.prototype.setVolume = function(percentAsDecimal) {
    if(typeof(percentAsDecimal) !== 'undefined' && percentAsDecimal !== this.volumeVal) {
      this.ytplayer.setVolume(percentAsDecimal * 100.0);
      this.volumeVal = percentAsDecimal;
      this.player_.trigger('volumechange');
    }
  };

  videojs.Youtube.prototype.muted = function() {
    return this.mutedVal;
  };
  videojs.Youtube.prototype.setMuted = function(muted) {
    if(muted) {
      this.storedVolume = this.volumeVal;
      this.ytplayer.mute();
      this.player_.volume(0);
    } else {
      this.ytplayer.unMute();
      this.player_.volume(this.storedVolume);
    }

    this.mutedVal = muted;

    this.player_.trigger('volumechange');
  };

  videojs.Youtube.prototype.buffered = function() {
    if(this.ytplayer && this.ytplayer.getVideoBytesLoaded) {
      var loadedBytes = this.ytplayer.getVideoBytesLoaded();
      var totalBytes = this.ytplayer.getVideoBytesTotal();
      if(!loadedBytes || !totalBytes) {
        return 0;
      }

      var duration = this.ytplayer.getDuration();
      var secondsBuffered = (loadedBytes / totalBytes) * duration;
      var secondsOffset = (this.ytplayer.getVideoStartBytes() / totalBytes) * duration;

      return videojs.createTimeRange(secondsOffset, secondsOffset + secondsBuffered);
    } else {
      return videojs.createTimeRange(0, 0);
    }
  };

  videojs.Youtube.prototype.supportsFullScreen = function() {
    if (typeof this.el_.webkitEnterFullScreen === 'function') {

        // Seems to be broken in Chromium/Chrome && Safari in Leopard
        if (/Android/.test(videojs.USER_AGENT) || !/Chrome|Mac OS X 10.5/.test(videojs.USER_AGENT)) {
            return true;
        }
    }
    return false;
  };

  // YouTube is supported on all platforms
  videojs.Youtube.isSupported = function() {
    return true;
  };

  // You can use video/youtube as a media in your HTML5 video to specify the source
  videojs.Youtube.canPlaySource = function(srcObj) {
    return (srcObj.type === 'video/youtube');
  };

  // Always can control the volume
  videojs.Youtube.canControlVolume = function() {
    return true;
  };

  ////////////////////////////// YouTube specific functions //////////////////////////////

  // All videos created before YouTube API is loaded
  videojs.Youtube.loadingQueue = [];

  // Create the YouTube player
  videojs.Youtube.prototype.loadYoutube = function() {
    this.ytplayer = new YT.Player(this.id_, {
      events: {
        onReady: function(e) {
          e.target.vjsTech.onReady();
        },
        onStateChange: function(e) {
          e.target.vjsTech.onStateChange(e.data);
        },
        onPlaybackQualityChange: function(e) {
          e.target.vjsTech.onPlaybackQualityChange(e.data);
        },
        onError: function(e) {
          e.target.vjsTech.onError(e.data);
        }
      }
    });

    this.ytplayer.vjsTech = this;
  };

  // Transform a JavaScript object into URL params
  videojs.Youtube.makeQueryString = function(args) {
    var array = ['modestbranding=1'];
    for(var key in args) {
      if(args.hasOwnProperty(key)) {
        array.push(key + '=' + args[key]);
      }
    }

    return array.join('&');
  };

  // Called when YouTube API is ready to be used
  window.onYouTubeIframeAPIReady = function() {
    var yt;
    while((yt = videojs.Youtube.loadingQueue.shift())) {
      yt.loadYoutube();
    }
    videojs.Youtube.loadingQueue = [];
    videojs.Youtube.apiReady = true;
  };

  videojs.Youtube.prototype.onReady = function() {
    this.isReady_ = true;
    this.triggerReady();

    this.player_.trigger('loadedmetadata');

    // The duration is loaded so we might as well fire off the timeupdate and duration events
    // this allows for the duration of the video (timeremaining) to be displayed if styled
    // to show the control bar initially. This gives the user the ability to see how long the video
    // is before clicking play
    this.player_.trigger('durationchange');
    this.player_.trigger('timeupdate');

    // Let the player take care of itself as soon as the YouTube is ready
    // The loading spinner while waiting for the tech would be impossible otherwise
    if (typeof this.player_.loadingSpinner !== 'undefined' && !this.isIos && !this.isAndroid) {
      this.player_.loadingSpinner.hide();
    }

    if(this.player_.options()['muted']) {
      this.setMuted(true);
    }

    // Play ASAP if they clicked play before it's ready
    if(this.playOnReady) {
      this.playOnReady = false;
      this.play();
    }
  };

  videojs.Youtube.prototype.updateQualities = function() {

    function setupEventListener(el) {
      addEventListener(el, 'click', function() {
        var quality = this.getAttribute('data-val');
        self.ytplayer.setPlaybackQuality(quality);

        self.userQuality = quality;
        setInnerText(self.qualityTitle, videojs.Youtube.parseQualityName(quality));

        var selected = self.qualityMenuContent.querySelector('.vjs-selected');
        if(selected) {
          videojs.Youtube.removeClass(selected, 'vjs-selected');
        }

        videojs.Youtube.addClass(this, 'vjs-selected');
      });
    }

    var qualities = this.ytplayer.getAvailableQualityLevels();
    var self = this;

    if(qualities.indexOf(this.userQuality) < 0) {
      setInnerText(self.qualityTitle, videojs.Youtube.parseQualityName(this.defaultQuality));
    }

    if(qualities.length === 0) {
      this.qualityButton.style.display = 'none';
    } else {
      this.qualityButton.style.display = '';

      while(this.qualityMenuContent.hasChildNodes()) {
        this.qualityMenuContent.removeChild(this.qualityMenuContent.lastChild);
      }

      for(var i = 0; i < qualities.length; ++i) {
        var el = document.createElement('li');
        el.setAttribute('class', 'vjs-menu-item');
        setInnerText(el, videojs.Youtube.parseQualityName(qualities[i]));
        el.setAttribute('data-val', qualities[i]);
        if(qualities[i] === this.quality) {
          videojs.Youtube.addClass(el, 'vjs-selected');
        }
        setupEventListener(el);


        this.qualityMenuContent.appendChild(el);
      }
    }
  };

  videojs.Youtube.prototype.onStateChange = function(state) {
    if(state !== this.lastState) {
      switch(state) {
        case -1:
          this.player_.trigger('durationchange');
          break;

        case YT.PlayerState.ENDED:
          // Replace YouTube play button by our own
          if(!this.player_.options()['ytcontrols']) {
            this.playerEl_.querySelectorAll('.vjs-poster')[0].style.display = 'block';
            if(typeof this.player_.bigPlayButton !== 'undefined') {
              this.player_.bigPlayButton.show();
            }
          }

          this.player_.trigger('ended');
          break;

        case YT.PlayerState.PLAYING:
          this.playerEl_.querySelectorAll('.vjs-poster')[0].style.display = '';

          this.playVideoIsAllowed = true;
          this.updateQualities();
          this.player_.trigger('timeupdate');
          this.player_.trigger('durationchange');
          this.player_.trigger('playing');
          this.player_.trigger('play');

          if (this.isSeeking) {
            this.player_.trigger('seeked');
            this.isSeeking = false;
          }
          break;

        case YT.PlayerState.PAUSED:
          this.player_.trigger('pause');
          break;

        case YT.PlayerState.BUFFERING:
          this.player_.trigger('timeupdate');

          // Make sure to not display the spinner for mobile
          if(!this.player_.options()['ytcontrols']) {
            this.player_.trigger('waiting');
          }
          break;

        case YT.PlayerState.CUED:
          break;
      }

      this.lastState = state;
    }
  };

  videojs.Youtube.convertQualityName = function(name) {
    switch(name) {
      case '144p':
        return 'tiny';

      case '240p':
        return 'small';

      case '360p':
        return 'medium';

      case '480p':
        return 'large';

      case '720p':
        return 'hd720';

      case '1080p':
        return 'hd1080';
    }

    return 'auto';
  };

  videojs.Youtube.parseQualityName = function(name) {
    switch(name) {
      case 'tiny':
        return '144p';

      case 'small':
        return '240p';

      case 'medium':
        return '360p';

      case 'large':
        return '480p';

      case 'hd720':
        return '720p';

      case 'hd1080':
        return '1080p';
    }

    return 'auto';
  };

  videojs.Youtube.prototype.onPlaybackQualityChange = function(quality) {
    if(typeof this.defaultQuality === 'undefined') {
      this.defaultQuality = quality;

      if(typeof this.userQuality !== 'undefined') {
        return;
      }
    }

    this.quality = quality;
    setInnerText(this.qualityTitle, videojs.Youtube.parseQualityName(quality));

    switch(quality) {
      case 'medium':
        this.player_.videoWidth = 480;
        this.player_.videoHeight = 360;
        break;

      case 'large':
        this.player_.videoWidth = 640;
        this.player_.videoHeight = 480;
        break;

      case 'hd720':
        this.player_.videoWidth = 960;
        this.player_.videoHeight = 720;
        break;

      case 'hd1080':
        this.player_.videoWidth = 1440;
        this.player_.videoHeight = 1080;
        break;

      case 'highres':
        this.player_.videoWidth = 1920;
        this.player_.videoHeight = 1080;
        break;

      case 'small':
        this.player_.videoWidth = 320;
        this.player_.videoHeight = 240;
        break;

      case 'tiny':
        this.player_.videoWidth = 144;
        this.player_.videoHeight = 108;
        break;

      default:
        this.player_.videoWidth = 0;
        this.player_.videoHeight = 0;
        break;
    }

    this.player_.trigger('ratechange');
  };

  videojs.Youtube.prototype.onError = function(error) {
    this.player_.error(error);

    if(error === 100 || error === 101 || error === 150) {
      this.player_.bigPlayButton.hide();
      this.player_.loadingSpinner.hide();
      this.player_.posterImage.hide();
    }
  };

  /**
   * Add a CSS class name to an element
   * @param {Element} element    Element to add class name to
   * @param {String} classToAdd Classname to add
   */
  videojs.Youtube.addClass = function(element, classToAdd) {
    if((' ' + element.className + ' ').indexOf(' ' + classToAdd + ' ') === -1) {
      element.className = element.className === '' ? classToAdd : element.className + ' ' + classToAdd;
    }
  };

  /**
   * Remove a CSS class name from an element
   * @param {Element} element    Element to remove from class name
   * @param {String} classToRemove Classname to remove
   */
  videojs.Youtube.removeClass = function(element, classToRemove) {
    var classNames, i;

    if(element.className.indexOf(classToRemove) === -1) {
      return;
    }

    classNames = element.className.split(' ');

    // no arr.indexOf in ie8, and we don't want to add a big shim
    for(i = classNames.length - 1; i >= 0; i--) {
      if(classNames[i] === classToRemove) {
        classNames.splice(i, 1);
      }
    }

    element.className = classNames.join(' ');
  };

  // Cross-browsers support (IE8 wink wink)
  function setInnerText(element, text) {
    if(typeof element === 'undefined') {
      return false;
    }

    var textProperty = ('innerText' in element) ? 'innerText' : 'textContent';

    try {
      element[textProperty] = text;
    } catch(anException) {
      //IE<9 FIX
      element.setAttribute('innerText', text);
    }
  }


// Stretch the YouTube poster
  var style = document.createElement('style');
  var def = ' ' +
    '.vjs-youtube .vjs-poster { background-size: 100%!important; }' +
    '.vjs-youtube .vjs-poster, ' +
    '.vjs-youtube .vjs-loading-spinner, ' +
    '.vjs-youtube .vjs-big-play-button, .vjs-youtube .vjs-text-track-display{ pointer-events: none !important; }' +
    '.vjs-youtube.vjs-user-active .iframeblocker { display: none; }' +
    '.vjs-youtube.vjs-user-inactive .vjs-tech.onDesktop { pointer-events: none; }' +
    '.vjs-quality-button > div:first-child > span:first-child { position:relative;top:7px }';

  style.setAttribute('type', 'text/css');
  document.getElementsByTagName('head')[0].appendChild(style);

  if(style.styleSheet) {
    style.styleSheet.cssText = def;
  } else {
    style.appendChild(document.createTextNode(def));
  }

  // IE8 fix for indexOf
  if(!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(elt /*, from*/) {
      var len = this.length >>> 0; // jshint ignore:line

      var from = Number(arguments[1]) || 0;
      from = (from < 0) ?
        Math.ceil(from)
        : Math.floor(from);
      if(from < 0) {
        from += len;
      }

      for(; from < len; from++) {
        if(from in this && this[from] === elt) {
          return from;
        }
      }
      return -1;
    };
  }
})();

;/**
 * Owl carousel
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	var drag, state, e;

	/**
	 * Template for status information about drag and touch events.
	 * @private
	 */
	drag = {
		start: 0,
		startX: 0,
		startY: 0,
		current: 0,
		currentX: 0,
		currentY: 0,
		offsetX: 0,
		offsetY: 0,
		distance: null,
		startTime: 0,
		endTime: 0,
		updatedX: 0,
		targetEl: null
	};

	/**
	 * Template for some status informations.
	 * @private
	 */
	state = {
		isTouch: false,
		isScrolling: false,
		isSwiping: false,
		direction: false,
		inMotion: false
	};

	/**
	 * Event functions references.
	 * @private
	 */
	e = {
		_onDragStart: null,
		_onDragMove: null,
		_onDragEnd: null,
		_transitionEnd: null,
		_resizer: null,
		_responsiveCall: null,
		_goToLoop: null,
		_checkVisibile: null
	};

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Caches informations about drag and touch events.
		 */
		this.drag = $.extend({}, drag);

		/**
		 * Caches some status informations.
		 * @protected
		 */
		this.state = $.extend({}, state);

		/**
		 * @protected
		 * @todo Must be documented
		 */
		this.e = $.extend({}, e);

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key[0].toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Pipe, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,
		responsiveClass: false,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		// Classes and Names
		themeClass: 'owl-theme',
		baseClass: 'owl-carousel',
		itemClass: 'owl-item',
		centerClass: 'center',
		activeClass: 'active'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * Update pipe.
	 */
	Owl.Pipe = [ {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var cached = this._clones,
				clones = this.$stage.children('.cloned');

			if (clones.length !== cached.length || (!this.settings.loop && cached.length > 0)) {
				this.$stage.children('.cloned').remove();
				this._clones = [];
			}
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var i, n,
				clones = this._clones,
				items = this._items,
				delta = this.settings.loop ? clones.length - Math.max(this.settings.items * 2, 4) : 0;

			for (i = 0, n = Math.abs(delta / 2); i < n; i++) {
				if (delta > 0) {
					this.$stage.children().eq(items.length + clones.length - 1).remove();
					clones.pop();
					this.$stage.children().eq(0).remove();
					clones.pop();
				} else {
					clones.push(clones.length / 2);
					this.$stage.append(items[clones[clones.length - 1]].clone().addClass('cloned'));
					clones.push(items.length - 1 - (clones.length - 1) / 2);
					this.$stage.prepend(items[clones[clones.length - 1]].clone().addClass('cloned'));
				}
			}
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = (this.settings.rtl ? 1 : -1),
				width = (this.width() / this.settings.items).toFixed(3),
				coordinate = 0, merge, i, n;

			this._coordinates = [];
			for (i = 0, n = this._clones.length + this._items.length; i < n; i++) {
				merge = this._mergers[this.relative(i)];
				merge = (this.settings.mergeFit && Math.min(merge, this.settings.items)) || merge;
				coordinate += (this.settings.autoWidth ? this._items[this.relative(i)].width() + this.settings.margin : width * merge) * rtl;

				this._coordinates.push(coordinate);
			}
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var i, n, width = (this.width() / this.settings.items).toFixed(3), css = {
				'width': Math.abs(this._coordinates[this._coordinates.length - 1]) + this.settings.stagePadding * 2,
				'padding-left': this.settings.stagePadding || '',
				'padding-right': this.settings.stagePadding || ''
			};

			this.$stage.css(css);

			css = { 'width': this.settings.autoWidth ? 'auto' : width - this.settings.margin };
			css[this.settings.rtl ? 'margin-left' : 'margin-right'] = this.settings.margin;

			if (!this.settings.autoWidth && $.grep(this._mergers, function(v) { return v > 1 }).length > 0) {
				for (i = 0, n = this._coordinates.length; i < n; i++) {
					css.width = Math.abs(this._coordinates[i]) - Math.abs(this._coordinates[i - 1] || 0) - this.settings.margin;
					this.$stage.children().eq(i).css(css);
				}
			} else {
				this.$stage.children().css(css);
			}
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current && this.reset(this.$stage.children().index(cache.current));
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.' + this.settings.activeClass).removeClass(this.settings.activeClass);
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass(this.settings.activeClass);

			if (this.settings.center) {
				this.$stage.children('.' + this.settings.centerClass).removeClass(this.settings.centerClass);
				this.$stage.children().eq(this.current()).addClass(this.settings.centerClass);
			}
		}
	} ];

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.trigger('initialize');

		this.$element
			.addClass(this.settings.baseClass)
			.addClass(this.settings.themeClass)
			.toggleClass('owl-rtl', this.settings.rtl);

		// check support
		this.browserSupport();

		if (this.settings.autoWidth && this.state.imagesLoaded !== true) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
				return false;
			}
		}

		this.$element.addClass('owl-loading');

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="owl-stage"/>')
			.wrap('<div class="owl-stage-outer">');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// set view width
		this._width = this.$element.width();

		// update view
		this.refresh();

		this.$element.removeClass('owl-loading').addClass('owl-loaded');

		// attach generic events
		this.eventsCall();

		// attach generic events
		this.internalEvents();

		// attach custom control events
		this.addTriggerableEvents();

		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class', function(i, c) {
					return c.replace(/\b owl-responsive-\S+/g, '');
				}).addClass('owl-responsive-' + match);
			}
		}

		if (this.settings === null || this._breakpoint !== match) {
			this.trigger('change', { property: { name: 'settings', value: settings } });
			this._breakpoint = match;
			this.settings = settings;
			this.invalidate('settings');
			this.trigger('changed', { property: { name: 'settings', value: this.settings } });
		}
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		// Toggle Center class
		this.$element.toggleClass('owl-center', this.settings.center);

		// if items number is less than in body
		if (this.settings.loop && this._items.length < this.settings.items) {
			this.settings.loop = false;
		}

		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.settings.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		if (this._items.length === 0) {
			return false;
		}

		var start = new Date().getTime();

		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		// hide and show methods helps here to set a proper widths,
		// this prevents scrollbar to be calculated in stage width
		this.$stage.addClass('owl-refresh');

		this.update();

		this.$stage.removeClass('owl-refresh');

		this.state.orientation = window.orientation;

		this.watchVisibility();

		this.trigger('refreshed');
	};

	/**
	 * Save internal event references and add event based functions.
	 * @protected
	 */
	Owl.prototype.eventsCall = function() {
		// Save events references
		this.e._onDragStart = $.proxy(function(e) {
			this.onDragStart(e);
		}, this);
		this.e._onDragMove = $.proxy(function(e) {
			this.onDragMove(e);
		}, this);
		this.e._onDragEnd = $.proxy(function(e) {
			this.onDragEnd(e);
		}, this);
		this.e._onResize = $.proxy(function(e) {
			this.onResize(e);
		}, this);
		this.e._transitionEnd = $.proxy(function(e) {
			this.transitionEnd(e);
		}, this);
		this.e._preventClick = $.proxy(function(e) {
			this.preventClick(e);
		}, this);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (this.trigger('resize').isDefaultPrevented()) {
			return false;
		}

		this._width = this.$element.width();

		this.invalidate('width');

		this.refresh();

		this.trigger('resized');
	};

	/**
	 * Checks for touch/mouse drag event type and add run event handlers.
	 * @protected
	 */
	Owl.prototype.eventsRouter = function(event) {
		var type = event.type;

		if (type === "mousedown" || type === "touchstart") {
			this.onDragStart(event);
		} else if (type === "mousemove" || type === "touchmove") {
			this.onDragMove(event);
		} else if (type === "mouseup" || type === "touchend") {
			this.onDragEnd(event);
		} else if (type === "touchcancel") {
			this.onDragEnd(event);
		}
	};

	/**
	 * Checks for touch/mouse drag options and add necessery event handlers.
	 * @protected
	 */
	Owl.prototype.internalEvents = function() {
		var isTouch = isTouchSupport(),
			isTouchIE = isTouchSupportIE();

		if (this.settings.mouseDrag){
			this.$stage.on('mousedown', $.proxy(function(event) { this.eventsRouter(event) }, this));
			this.$stage.on('dragstart', function() { return false });
			this.$stage.get(0).onselectstart = function() { return false };
		} else {
			this.$element.addClass('owl-text-select-on');
		}

		if (this.settings.touchDrag && !isTouchIE){
			this.$stage.on('touchstart touchcancel', $.proxy(function(event) { this.eventsRouter(event) }, this));
		}

		// catch transitionEnd event
		if (this.transitionEndVendor) {
			this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, false);
		}

		// responsive
		if (this.settings.responsive !== false) {
			this.on(window, 'resize', $.proxy(this.onThrottledResize, this));
		}
	};

	/**
	 * Handles touchstart/mousedown event.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var ev, isTouchEvent, pageX, pageY, animatedPos;

		ev = event.originalEvent || event || window.event;

		// prevent right click
		if (ev.which === 3 || this.state.isTouch) {
			return false;
		}

		if (ev.type === 'mousedown') {
			this.$stage.addClass('owl-grab');
		}

		this.trigger('drag');
		this.drag.startTime = new Date().getTime();
		this.speed(0);
		this.state.isTouch = true;
		this.state.isScrolling = false;
		this.state.isSwiping = false;
		this.drag.distance = 0;

		pageX = getTouches(ev).x;
		pageY = getTouches(ev).y;

		// get stage position left
		this.drag.offsetX = this.$stage.position().left;
		this.drag.offsetY = this.$stage.position().top;

		if (this.settings.rtl) {
			this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width()
				+ this.settings.margin;
		}

		// catch position // ie to fix
		if (this.state.inMotion && this.support3d) {
			animatedPos = this.getTransformProperty();
			this.drag.offsetX = animatedPos;
			this.animate(animatedPos);
			this.state.inMotion = true;
		} else if (this.state.inMotion && !this.support3d) {
			this.state.inMotion = false;
			return false;
		}

		this.drag.startX = pageX - this.drag.offsetX;
		this.drag.startY = pageY - this.drag.offsetY;

		this.drag.start = pageX - this.drag.startX;
		this.drag.targetEl = ev.target || ev.srcElement;
		this.drag.updatedX = this.drag.start;

		// to do/check
		// prevent links and images dragging;
		if (this.drag.targetEl.tagName === "IMG" || this.drag.targetEl.tagName === "A") {
			this.drag.targetEl.draggable = false;
		}

		$(document).on('mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents', $.proxy(function(event) {this.eventsRouter(event)},this));
	};

	/**
	 * Handles the touchmove/mousemove events.
	 * @todo Simplify
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var ev, isTouchEvent, pageX, pageY, minValue, maxValue, pull;

		if (!this.state.isTouch) {
			return;
		}

		if (this.state.isScrolling) {
			return;
		}

		ev = event.originalEvent || event || window.event;

		pageX = getTouches(ev).x;
		pageY = getTouches(ev).y;

		// Drag Direction
		this.drag.currentX = pageX - this.drag.startX;
		this.drag.currentY = pageY - this.drag.startY;
		this.drag.distance = this.drag.currentX - this.drag.offsetX;

		// Check move direction
		if (this.drag.distance < 0) {
			this.state.direction = this.settings.rtl ? 'right' : 'left';
		} else if (this.drag.distance > 0) {
			this.state.direction = this.settings.rtl ? 'left' : 'right';
		}
		// Loop
		if (this.settings.loop) {
			if (this.op(this.drag.currentX, '>', this.coordinates(this.minimum())) && this.state.direction === 'right') {
				this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
			} else if (this.op(this.drag.currentX, '<', this.coordinates(this.maximum())) && this.state.direction === 'left') {
				this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
			}
		} else {
			// pull
			minValue = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maxValue = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? this.drag.distance / 5 : 0;
			this.drag.currentX = Math.max(Math.min(this.drag.currentX, minValue + pull), maxValue + pull);
		}

		// Lock browser if swiping horizontal

		if ((this.drag.distance > 8 || this.drag.distance < -8)) {
			if (ev.preventDefault !== undefined) {
				ev.preventDefault();
			} else {
				ev.returnValue = false;
			}
			this.state.isSwiping = true;
		}

		this.drag.updatedX = this.drag.currentX;

		// Lock Owl if scrolling
		if ((this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === false) {
			this.state.isScrolling = true;
			this.drag.updatedX = this.drag.start;
		}

		this.animate(this.drag.updatedX);
	};

	/**
	 * Handles the touchend/mouseup events.
	 * @protected
	 */
	Owl.prototype.onDragEnd = function(event) {
		var compareTimes, distanceAbs, closest;

		if (!this.state.isTouch) {
			return;
		}

		if (event.type === 'mouseup') {
			this.$stage.removeClass('owl-grab');
		}

		this.trigger('dragged');

		// prevent links and images dragging;
		this.drag.targetEl.removeAttribute("draggable");

		// remove drag event listeners

		this.state.isTouch = false;
		this.state.isScrolling = false;
		this.state.isSwiping = false;

		// to check
		if (this.drag.distance === 0 && this.state.inMotion !== true) {
			this.state.inMotion = false;
			return false;
		}

		// prevent clicks while scrolling

		this.drag.endTime = new Date().getTime();
		compareTimes = this.drag.endTime - this.drag.startTime;
		distanceAbs = Math.abs(this.drag.distance);

		// to test
		if (distanceAbs > 3 || compareTimes > 300) {
			this.removeClick(this.drag.targetEl);
		}

		closest = this.closest(this.drag.updatedX);

		this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
		this.current(closest);
		this.invalidate('position');
		this.update();

		// if pullDrag is off then fire transitionEnd event manually when stick
		// to border
		if (!this.settings.pullDrag && this.drag.updatedX === this.coordinates(closest)) {
			this.transitionEnd();
		}

		this.drag.distance = 0;

		$(document).off('.owl.dragEvents');
	};

	/**
	 * Attaches `preventClick` to disable link while swipping.
	 * @protected
	 * @param {HTMLElement} [target] - The target of the `click` event.
	 */
	Owl.prototype.removeClick = function(target) {
		this.drag.targetEl = target;
		$(target).on('click.preventClick', this.e._preventClick);
		// to make sure click is removed:
		window.setTimeout(function() {
			$(target).off('click.preventClick');
		}, 300);
	};

	/**
	 * Suppresses click event.
	 * @protected
	 * @param {Event} ev - The event arguments.
	 */
	Owl.prototype.preventClick = function(ev) {
		if (ev.preventDefault) {
			ev.preventDefault();
		} else {
			ev.returnValue = false;
		}
		if (ev.stopPropagation) {
			ev.stopPropagation();
		}
		$(ev.target).off('click.preventClick');
	};

	/**
	 * Catches stage position while animate (only CSS3).
	 * @protected
	 * @returns
	 */
	Owl.prototype.getTransformProperty = function() {
		var transform, matrix3d;

		transform = window.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + 'transform');
		// var transform = this.$stage.css(this.vendorName + 'transform')
		transform = transform.replace(/matrix(3d)?\(|\)/g, '').split(',');
		matrix3d = transform.length === 16;

		return matrix3d !== true ? transform[4] : transform[12];
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate) {
		var position = -1, pull = 30, width = this.width(), coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				if (coordinate > value - pull && coordinate < value + pull) {
					position = index;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = this.state.direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		this.trigger('translate');
		this.state.inMotion = this.speed() > 0;

		if (this.support3d) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px' + ',0px, 0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (this.state.isTouch) {
			this.$stage.css({
				left: coordinate + 'px'
			});
		} else {
			this.$stage.animate({
				left: coordinate
			}, this.speed() / 1000, this.settings.fallbackEasing, $.proxy(function() {
				if (this.state.inMotion) {
					this.transitionEnd();
				}
			}, this));
		}
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} part - The part to invalidate.
	 */
	Owl.prototype.invalidate = function(part) {
		this._invalidated[part] = true;
	}

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position for an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = (relative ? this._items.length : this._items.length + this._clones.length);

		if (!$.isNumeric(position) || n < 1) {
			return undefined;
		}

		if (this._clones.length) {
			position = ((position % n) + n) % n;
		} else {
			position = Math.max(this.minimum(relative), Math.min(this.maximum(relative), position));
		}

		return position;
	};

	/**
	 * Converts an absolute position for an item into a relative position.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position = this.normalize(position);
		position = position - this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for an item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var maximum, width, i = 0, coordinate,
			settings = this.settings;

		if (relative) {
			return this._items.length - 1;
		}

		if (!settings.loop && settings.center) {
			maximum = this._items.length - 1;
		} else if (!settings.loop && !settings.center) {
			maximum = this._items.length - settings.items;
		} else if (settings.loop || settings.center) {
			maximum = this._items.length + settings.items;
		} else if (settings.autoWidth || settings.merge) {
			revert = settings.rtl ? 1 : -1;
			width = this.$stage.width() - this.$element.width();
			while (coordinate = this.coordinates(i)) {
				if (coordinate * revert >= width) {
					break;
				}
				maximum = ++i;
			}
		} else {
			throw 'Can not detect maximum absolute position.'
		}

		return maximum;
	};

	/**
	 * Gets the minimum position for an item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		if (relative) {
			return 0;
		}

		return this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var coordinate = null;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[position - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1);
		} else {
			coordinate = this._coordinates[position - 1] || 0;
		}

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		if (this.settings.loop) {
			var distance = position - this.relative(this.current()),
				revert = this.current(),
				before = this.current(),
				after = this.current() + distance,
				direction = before - after < 0 ? true : false,
				items = this._clones.length + this._items.length;

			if (after < this.settings.items && direction === false) {
				revert = before + this._items.length;
				this.reset(revert);
			} else if (after >= items - this.settings.items && direction === true) {
				revert = before - this._items.length;
				this.reset(revert);
			}
			window.clearTimeout(this.e._goToLoop);
			this.e._goToLoop = window.setTimeout($.proxy(function() {
				this.speed(this.duration(this.current(), revert + distance, speed));
				this.current(revert + distance);
				this.update();
			}, this), 30);
		} else {
			this.speed(this.duration(this.current(), position, speed));
			this.current(position);
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.transitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.state.inMotion = false;
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			throw 'Can not detect viewport width.';
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		position = position === undefined ? this._items.length : this.normalize(position, true);

		this.trigger('add', { content: content, position: position });

		if (this._items.length === 0 || position === this._items.length) {
			this.$stage.append(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Adds triggerable events.
	 * @protected
	 */
	Owl.prototype.addTriggerableEvents = function() {
		var handler = $.proxy(function(callback, event) {
			return $.proxy(function(e) {
				if (e.relatedTarget !== this) {
					this.suppress([ event ]);
					callback.apply(this, [].slice.call(arguments, 1));
					this.release([ event ]);
				}
			}, this);
		}, this);

		$.each({
			'next': this.next,
			'prev': this.prev,
			'to': this.to,
			'destroy': this.destroy,
			'refresh': this.refresh,
			'replace': this.replace,
			'add': this.add,
			'remove': this.remove
		}, $.proxy(function(event, callback) {
			this.$element.on(event + '.owl.carousel', handler(callback, event + '.owl.carousel'));
		}, this));

	};

	/**
	 * Watches the visibility of the carousel element.
	 * @protected
	 */
	Owl.prototype.watchVisibility = function() {

		// test on zepto
		if (!isElVisible(this.$element.get(0))) {
			this.$element.addClass('owl-hidden');
			window.clearInterval(this.e._checkVisibile);
			this.e._checkVisibile = window.setInterval($.proxy(checkVisible, this), 500);
		}

		function isElVisible(el) {
			return el.offsetWidth > 0 && el.offsetHeight > 0;
		}

		function checkVisible() {
			if (isElVisible(this.$element.get(0))) {
				this.$element.removeClass('owl-hidden');
				this.refresh();
				window.clearInterval(this.e._checkVisibile);
			}
		}
	};

	/**
	 * Preloads images with auto width.
	 * @protected
	 * @todo Still to test
	 */
	Owl.prototype.preloadAutoWidthImages = function(imgs) {
		var loaded, that, $el, img;

		loaded = 0;
		that = this;
		imgs.each(function(i, el) {
			$el = $(el);
			img = new Image();

			img.onload = function() {
				loaded++;
				$el.attr('src', img.src);
				$el.css('opacity', 1);
				if (loaded >= imgs.length) {
					that.state.imagesLoaded = true;
					that.initialize();
				}
			};

			img.src = $el.attr('src') || $el.attr('data-src') || $el.attr('data-src-retina');
		});
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		if (this.$element.hasClass(this.settings.themeClass)) {
			this.$element.removeClass(this.settings.themeClass);
		}

		if (this.settings.responsive !== false) {
			$(window).off('resize.owl.carousel');
		}

		if (this.transitionEndVendor) {
			this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
		}

		for ( var i in this._plugins) {
			this._plugins[i].destroy();
		}

		if (this.settings.mouseDrag || this.settings.touchDrag) {
			this.$stage.off('mousedown touchstart touchcancel');
			$(document).off('.owl.dragEvents');
			this.$stage.get(0).onselectstart = function() {};
			this.$stage.off('dragstart', function() { return false });
		}

		// remove event handlers in the ".owl.carousel" namespace
		this.$element.off('.owl');

		this.$stage.children('.cloned').remove();
		this.e = null;
		this.$element.removeData('owlCarousel');

		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.unwrap();
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers an public event.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=.owl.carousel] - The event namespace.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].apply(this, event);
			}
		}

		return event;
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	}

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	}

	/**
	 * Checks the availability of some browser features.
	 * @protected
	 */
	Owl.prototype.browserSupport = function() {
		this.support3d = isPerspective();

		if (this.support3d) {
			this.transformVendor = isTransform();

			// take transitionend event name by detecting transition
			var endVendors = [ 'transitionend', 'webkitTransitionEnd', 'transitionend', 'oTransitionEnd' ];
			this.transitionEndVendor = endVendors[isTransition()];

			// take vendor name from transform name
			this.vendorName = this.transformVendor.replace(/Transform/i, '');
			this.vendorName = this.vendorName !== '' ? '-' + this.vendorName.toLowerCase() + '-' : '';
		}

		this.state.orientation = window.orientation;
	};

	/**
	 * Get touch/drag coordinats.
	 * @private
	 * @param {event} - mousedown/touchstart event
	 * @returns {object} - Contains X and Y of current mouse/touch position
	 */

	function getTouches(event) {
		if (event.touches !== undefined) {
			return {
				x: event.touches[0].pageX,
				y: event.touches[0].pageY
			};
		}

		if (event.touches === undefined) {
			if (event.pageX !== undefined) {
				return {
					x: event.pageX,
					y: event.pageY
				};
			}

		if (event.pageX === undefined) {
			return {
					x: event.clientX,
					y: event.clientY
				};
			}
		}
	}

	/**
	 * Checks for CSS support.
	 * @private
	 * @param {Array} array - The CSS properties to check for.
	 * @returns {Array} - Contains the supported CSS property name and its index or `false`.
	 */
	function isStyleSupported(array) {
		var p, s, fake = document.createElement('div'), list = array;
		for (p in list) {
			s = list[p];
			if (typeof fake.style[s] !== 'undefined') {
				fake = null;
				return [ s, p ];
			}
		}
		return [ false ];
	}

	/**
	 * Checks for CSS transition support.
	 * @private
	 * @todo Realy bad design
	 * @returns {Number}
	 */
	function isTransition() {
		return isStyleSupported([ 'transition', 'WebkitTransition', 'MozTransition', 'OTransition' ])[1];
	}

	/**
	 * Checks for CSS transform support.
	 * @private
	 * @returns {String} The supported property name or false.
	 */
	function isTransform() {
		return isStyleSupported([ 'transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform' ])[0];
	}

	/**
	 * Checks for CSS perspective support.
	 * @private
	 * @returns {String} The supported property name or false.
	 */
	function isPerspective() {
		return isStyleSupported([ 'perspective', 'webkitPerspective', 'MozPerspective', 'OPerspective', 'MsPerspective' ])[0];
	}

	/**
	 * Checks wether touch is supported or not.
	 * @private
	 * @returns {Boolean}
	 */
	function isTouchSupport() {
		return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);
	}

	/**
	 * Checks wether touch is supported or not for IE.
	 * @private
	 * @returns {Boolean}
	 */
	function isTouchSupportIE() {
		return window.navigator.msPointerEnabled;
	}

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @public
	 */
	$.fn.owlCarousel = function(options) {
		return this.each(function() {
			if (!$(this).data('owlCarousel')) {
				$(this).data('owlCarousel', new Owl(this, options));
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = ((e.property && e.property.value) || this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position++)), load);
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	}

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	}

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url(' + url + ')',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function() {
				if (this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass)
					=== this._core.$stage.children().eq(this._core.current())) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		this._core.$stage.parent()
			.height(this._core.$stage.children().eq(this._core.current()).height())
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * Whether this is in fullscreen or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._fullscreen = false;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'resize.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.video && !this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refresh.owl.carousel changed.owl.carousel': $.proxy(function(e) {
				if (this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				var $element = $(e.content).find('.owl-video');
				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {

		var type = target.attr('data-vimeo-id') ? 'vimeo' : 'youtube',
			id = target.attr('data-vimeo-id') || target.attr('data-youtube-id'),
			width = target.attr('data-width') || this._core.settings.videoWidth,
			height = target.attr('data-height') || this._core.settings.videoHeight,
			url = target.attr('href');

		if (url) {
			id = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {

		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: 'http://vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} ev - The event arguments.
	 */
	Video.prototype.play = function(ev) {
		this._core.trigger('play', null, 'video');

		if (this._playing) {
			this.stop();
		}

		var target = $(ev.target || ev.srcElement),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html, wrap;

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/'
				+ video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="http://player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width
				+ '" height="' + height
				+ '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		}

		item.addClass('owl-video-playing');
		this._playing = item;

		wrap = $('<div style="height:' + height + 'px; width:' + width + 'px" class="owl-video-frame">'
			+ html + '</div>');
		target.after(wrap);
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {

		// if Vimeo Fullscreen mode
		var element = document.fullscreenElement || document.mozFullScreenElement
			|| document.webkitFullscreenElement;

		if (element && $(element).parent().hasClass('owl-video-frame')) {
			this._core.speed(0);
			this._fullscreen = true;
		}

		if (element && this._fullscreen && this._playing) {
			return false;
		}

		// comming back from fullscreen
		if (this._fullscreen) {
			this._fullscreen = false;
			return false;
		}

		// check full screen mode and window orientation
		if (this._playing) {
			if (this._core.state.orientation !== window.orientation) {
				this._core.state.orientation = window.orientation;
				return false;
			}
		}

		return true;
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				this.swapping = e.type == 'translated';
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1 || !this.core.support3d) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing)
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
		}

		if (incoming) {
			next.addClass('animated owl-animated-in')
				.addClass(incoming)
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.transitionEnd();
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Autoplay.Defaults, this.core.options);

		this.handlers = {
			'translated.owl.carousel refreshed.owl.carousel': $.proxy(function() {
				this.autoplay();
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				this.play(t, s);
			}, this),
			'stop.owl.autoplay': $.proxy(function() {
				this.stop();
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this.core.settings.autoplayHoverPause) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this.core.settings.autoplayHoverPause) {
					this.autoplay();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * @protected
	 * @todo Must be documented.
	 */
	Autoplay.prototype.autoplay = function() {
		if (this.core.settings.autoplay && !this.core.state.videoPlay) {
			window.clearInterval(this.interval);

			this.interval = window.setInterval($.proxy(function() {
				this.play();
			}, this), this.core.settings.autoplayTimeout);
		} else {
			window.clearInterval(this.interval);
		}
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - ...
	 * @param {Number} [speed] - ...
	 * @returns {Boolean|undefined} - ...
	 * @todo Must be documented.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		// if tab is inactive - doesnt work in <IE10
		if (document.hidden === true) {
			return;
		}

		if (this.core.state.isTouch || this.core.state.isScrolling
			|| this.core.state.isSwiping || this.core.state.inMotion) {
			return;
		}

		if (this.core.settings.autoplay === false) {
			window.clearInterval(this.interval);
			return;
		}

		this.core.next(this.core.settings.autoplaySpeed);
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		window.clearInterval(this.interval);
	};

	/**
	 * Pauses the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		window.clearInterval(this.interval);
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this.interval);

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.0.0
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.dotsData) {
					this._templates.push($(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
				}
			}, this),
			'add.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, $(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
				}
			}, this),
			'remove.owl.carousel prepared.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'change.owl.carousel': $.proxy(function(e) {
				if (e.property.name == 'position') {
					if (!this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
						var current = this._core.current(),
							maximum = this._core.maximum(),
							minimum = this._core.minimum();
						e.data = e.property.value > maximum
							? current >= maximum ? minimum : maximum
							: e.property.value < minimum ? maximum : e.property.value;
					}
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function() {
				if (!this._initialized) {
					this.initialize();
					this._initialized = true;
				}
				this._core.trigger('refresh', null, 'navigation');
				this.update();
				this.draw();
				this._core.trigger('refreshed', null, 'navigation');
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	}

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navRewind: true,
		navText: [ 'prev', 'next' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotData: false,
		dotsSpeed: false,
		dotsContainer: false,
		controlsClass: 'owl-controls'
	}

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var $container, override,
			options = this._core.settings;

		// create the indicator template
		if (!options.dotsData) {
			this._templates = [ $('<div>')
				.addClass(options.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		// create controls container if needed
		if (!options.navContainer || !options.dotsContainer) {
			this._controls.$container = $('<div>')
				.addClass(options.controlsClass)
				.appendTo(this.$element);
		}

		// create DOM structure for absolute navigation
		this._controls.$indicators = options.dotsContainer ? $(options.dotsContainer)
			: $('<div>').hide().addClass(options.dotsClass).appendTo(this._controls.$container);

		this._controls.$indicators.on('click', 'div', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$indicators)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, options.dotsSpeed);
		}, this));

		// create DOM structure for relative navigation
		$container = options.navContainer ? $(options.navContainer)
			: $('<div>').addClass(options.navContainerClass).prependTo(this._controls.$container);

		this._controls.$next = $('<' + options.navElement + '>');
		this._controls.$previous = this._controls.$next.clone();

		this._controls.$previous
			.addClass(options.navClass[0])
			.html(options.navText[0])
			.hide()
			.prependTo($container)
			.on('click', $.proxy(function(e) {
				this.prev(options.navSpeed);
			}, this));
		this._controls.$next
			.addClass(options.navClass[1])
			.html(options.navText[1])
			.hide()
			.appendTo($container)
			.on('click', $.proxy(function(e) {
				this.next(options.navSpeed);
			}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	}

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			options = this._core.settings,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			size = options.center || options.autoWidth || options.dotData
				? 1 : options.dotsEach || options.items;

		if (options.slideBy !== 'page') {
			options.slideBy = Math.min(options.slideBy, options.items);
		}

		if (options.dots || options.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: i - lower,
						end: i - lower + size - 1
					});
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	}

	/**
	 * Draws the user interface.
	 * @todo The option `dotData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference, i, html = '',
			options = this._core.settings,
			$items = this._core.$stage.children(),
			index = this._core.relative(this._core.current());

		if (options.nav && !options.loop && !options.navRewind) {
			this._controls.$previous.toggleClass('disabled', index <= 0);
			this._controls.$next.toggleClass('disabled', index >= this._core.maximum());
		}

		this._controls.$previous.toggle(options.nav);
		this._controls.$next.toggle(options.nav);

		if (options.dots) {
			difference = this._pages.length - this._controls.$indicators.children().length;

			if (options.dotData && difference !== 0) {
				for (i = 0; i < this._controls.$indicators.children().length; i++) {
					html += this._templates[this._core.relative(i)];
				}
				this._controls.$indicators.html(html);
			} else if (difference > 0) {
				html = new Array(difference + 1).join(this._templates[0]);
				this._controls.$indicators.append(html);
			} else if (difference < 0) {
				this._controls.$indicators.children().slice(difference).remove();
			}

			this._controls.$indicators.find('.active').removeClass('active');
			this._controls.$indicators.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}

		this._controls.$indicators.toggle(options.dots);
	}

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotData
				? 1 : settings.dotsEach || settings.items)
		};
	}

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var index = this._core.relative(this._core.current());
		return $.grep(this._pages, function(o) {
			return o.start <= index && o.end >= index;
		}).pop();
	}

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			options = this._core.settings;

		if (options.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += options.slideBy : position -= options.slideBy;
		}
		return position;
	}

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	}

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	}

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.0.0
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash table for the hashes.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function() {
				if (this._core.settings.startPosition == 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				var hash = $(e.content).find('[data-hash]').andSelf('[data-hash]').attr('data-hash');
				this._hashes[hash] = e.content;
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function() {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]) || 0;

			if (!hash) {
				return false;
			}

			this._core.to(position, false, true);
		}, this));
	}

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

;(function(){var b,d,c;b=jQuery;c=(function(){function b(){this.fadeDuration=500;this.fitImagesInViewport=true;this.resizeDuration=700;this.showImageNumberLabel=true;this.wrapAround=false}b.prototype.albumLabel=function(b,c){return"Image "+b+" of "+c};return b})();d=(function(){function c(b){this.options=b;this.album=[];this.currentImageIndex=void 0;this.init()}c.prototype.init=function(){this.enable();return this.build()};c.prototype.enable=function(){var c=this;return b('body').on('click','a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]',function(d){c.start(b(d.currentTarget));return false})};c.prototype.build=function(){var c=this;b("<div id='lightboxOverlay' class='lightboxOverlay'></div><div id='lightbox' class='lightbox'><div class='lb-outerContainer'><div class='lb-container'><img class='lb-image' src='' /><div class='lb-nav'><a class='lb-prev' href='' ></a><a class='lb-next' href='' ></a></div><div class='lb-loader'><a class='lb-cancel'></a></div></div></div><div class='lb-dataContainer'><div class='lb-data'><div class='lb-details'><span class='lb-caption'></span><span class='lb-number'></span></div><div class='lb-closeContainer'><a class='lb-close'></a></div></div></div></div>").appendTo(b('body'));this.$lightbox=b('#lightbox');this.$overlay=b('#lightboxOverlay');this.$outerContainer=this.$lightbox.find('.lb-outerContainer');this.$container=this.$lightbox.find('.lb-container');this.containerTopPadding=parseInt(this.$container.css('padding-top'),10);this.containerRightPadding=parseInt(this.$container.css('padding-right'),10);this.containerBottomPadding=parseInt(this.$container.css('padding-bottom'),10);this.containerLeftPadding=parseInt(this.$container.css('padding-left'),10);this.$overlay.hide().on('click',function(){c.end();return false});this.$lightbox.hide().on('click',function(d){if(b(d.target).attr('id')==='lightbox'){c.end()}return false});this.$outerContainer.on('click',function(d){if(b(d.target).attr('id')==='lightbox'){c.end()}return false});this.$lightbox.find('.lb-prev').on('click',function(){if(c.currentImageIndex===0){c.changeImage(c.album.length-1)}else{c.changeImage(c.currentImageIndex-1)}return false});this.$lightbox.find('.lb-next').on('click',function(){if(c.currentImageIndex===c.album.length-1){c.changeImage(0)}else{c.changeImage(c.currentImageIndex+1)}return false});return this.$lightbox.find('.lb-loader, .lb-close').on('click',function(){c.end();return false})};c.prototype.start=function(c){var f,e,j,d,g,n,o,k,l,m,p,h,i;b(window).on("resize",this.sizeOverlay);b('select, object, embed').css({visibility:"hidden"});this.$overlay.width(b(document).width()).height(b(document).height()).fadeIn(this.options.fadeDuration);this.album=[];g=0;j=c.attr('data-lightbox');if(j){h=b(c.prop("tagName")+'[data-lightbox="'+j+'"]');for(d=k=0,m=h.length;k<m;d=++k){e=h[d];this.album.push({link:b(e).attr('href'),title:b(e).attr('title')});if(b(e).attr('href')===c.attr('href')){g=d}}}else{if(c.attr('rel')==='lightbox'){this.album.push({link:c.attr('href'),title:c.attr('title')})}else{i=b(c.prop("tagName")+'[rel="'+c.attr('rel')+'"]');for(d=l=0,p=i.length;l<p;d=++l){e=i[d];this.album.push({link:b(e).attr('href'),title:b(e).attr('title')});if(b(e).attr('href')===c.attr('href')){g=d}}}}f=b(window);o=f.scrollTop()+f.height()/10;n=f.scrollLeft();this.$lightbox.css({top:o+'px',left:n+'px'}).fadeIn(this.options.fadeDuration);this.changeImage(g)};c.prototype.changeImage=function(f){var d,c,e=this;this.disableKeyboardNav();d=this.$lightbox.find('.lb-image');this.sizeOverlay();this.$overlay.fadeIn(this.options.fadeDuration);b('.lb-loader').fadeIn('slow');this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide();this.$outerContainer.addClass('animating');c=new Image();c.onload=function(){var m,g,h,i,j,k,l;d.attr('src',e.album[f].link);m=b(c);d.width(c.width);d.height(c.height);if(e.options.fitImagesInViewport){l=b(window).width();k=b(window).height();j=l-e.containerLeftPadding-e.containerRightPadding-20;i=k-e.containerTopPadding-e.containerBottomPadding-110;if((c.width>j)||(c.height>i)){if((c.width/j)>(c.height/i)){h=j;g=parseInt(c.height/(c.width/h),10);d.width(h);d.height(g)}else{g=i;h=parseInt(c.width/(c.height/g),10);d.width(h);d.height(g)}}}return e.sizeContainer(d.width(),d.height())};c.src=this.album[f].link;this.currentImageIndex=f};c.prototype.sizeOverlay=function(){return b('#lightboxOverlay').width(b(document).width()).height(b(document).height())};c.prototype.sizeContainer=function(f,g){var b,d,e,h,c=this;h=this.$outerContainer.outerWidth();e=this.$outerContainer.outerHeight();d=f+this.containerLeftPadding+this.containerRightPadding;b=g+this.containerTopPadding+this.containerBottomPadding;this.$outerContainer.animate({width:d,height:b},this.options.resizeDuration,'swing');setTimeout(function(){c.$lightbox.find('.lb-dataContainer').width(d);c.$lightbox.find('.lb-prevLink').height(b);c.$lightbox.find('.lb-nextLink').height(b);c.showImage()},this.options.resizeDuration)};c.prototype.showImage=function(){this.$lightbox.find('.lb-loader').hide();this.$lightbox.find('.lb-image').fadeIn('slow');this.updateNav();this.updateDetails();this.preloadNeighboringImages();this.enableKeyboardNav()};c.prototype.updateNav=function(){this.$lightbox.find('.lb-nav').show();if(this.album.length>1){if(this.options.wrapAround){this.$lightbox.find('.lb-prev, .lb-next').show()}else{if(this.currentImageIndex>0){this.$lightbox.find('.lb-prev').show()}if(this.currentImageIndex<this.album.length-1){this.$lightbox.find('.lb-next').show()}}}};c.prototype.updateDetails=function(){var b=this;if(typeof this.album[this.currentImageIndex].title!=='undefined'&&this.album[this.currentImageIndex].title!==""){this.$lightbox.find('.lb-caption').html(this.album[this.currentImageIndex].title).fadeIn('fast')}if(this.album.length>1&&this.options.showImageNumberLabel){this.$lightbox.find('.lb-number').text(this.options.albumLabel(this.currentImageIndex+1,this.album.length)).fadeIn('fast')}else{this.$lightbox.find('.lb-number').hide()}this.$outerContainer.removeClass('animating');this.$lightbox.find('.lb-dataContainer').fadeIn(this.resizeDuration,function(){return b.sizeOverlay()})};c.prototype.preloadNeighboringImages=function(){var c,b;if(this.album.length>this.currentImageIndex+1){c=new Image();c.src=this.album[this.currentImageIndex+1].link}if(this.currentImageIndex>0){b=new Image();b.src=this.album[this.currentImageIndex-1].link}};c.prototype.enableKeyboardNav=function(){b(document).on('keyup.keyboard',b.proxy(this.keyboardAction,this))};c.prototype.disableKeyboardNav=function(){b(document).off('.keyboard')};c.prototype.keyboardAction=function(g){var d,e,f,c,b;d=27;e=37;f=39;b=g.keyCode;c=String.fromCharCode(b).toLowerCase();if(b===d||c.match(/x|o|c/)){this.end()}else if(c==='p'||b===e){if(this.currentImageIndex!==0){this.changeImage(this.currentImageIndex-1)}}else if(c==='n'||b===f){if(this.currentImageIndex!==this.album.length-1){this.changeImage(this.currentImageIndex+1)}}};c.prototype.end=function(){this.disableKeyboardNav();b(window).off("resize",this.sizeOverlay);this.$lightbox.fadeOut(this.options.fadeDuration);this.$overlay.fadeOut(this.options.fadeDuration);return b('select, object, embed').css({visibility:"visible"})};return c})();b(function(){var e,b;b=new c();return e=new d(b)})}).call(this);
/**!
 * MixItUp v2.1.7
 *
 * @copyright Copyright 2014 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://mixitup.kunkalabs.com
 *
 * @license   Commercial use requires a commercial license.
 *            https://mixitup.kunkalabs.com/licenses/
 *
 *            Non-commercial use permitted under terms of CC-BY-NC license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */
!function(a,b){a.MixItUp=function(){var b=this;b._execAction("_constructor",0),a.extend(b,{selectors:{target:".mix",filter:".filter",sort:".sort"},animation:{enable:!0,effects:"fade scale",duration:600,easing:"ease",perspectiveDistance:"3000",perspectiveOrigin:"50% 50%",queue:!0,queueLimit:1,animateChangeLayout:!1,animateResizeContainer:!0,animateResizeTargets:!1,staggerSequence:!1,reverseOut:!1},callbacks:{onMixLoad:!1,onMixStart:!1,onMixBusy:!1,onMixEnd:!1,onMixFail:!1,_user:!1},controls:{enable:!0,live:!1,toggleFilterButtons:!1,toggleLogic:"or",activeClass:"active"},layout:{display:"inline-block",containerClass:"",containerClassFail:"fail"},load:{filter:"all",sort:!1},_$body:null,_$container:null,_$targets:null,_$parent:null,_$sortButtons:null,_$filterButtons:null,_suckMode:!1,_mixing:!1,_sorting:!1,_clicking:!1,_loading:!0,_changingLayout:!1,_changingClass:!1,_changingDisplay:!1,_origOrder:[],_startOrder:[],_newOrder:[],_activeFilter:null,_toggleArray:[],_toggleString:"",_activeSort:"default:asc",_newSort:null,_startHeight:null,_newHeight:null,_incPadding:!0,_newDisplay:null,_newClass:null,_targetsBound:0,_targetsDone:0,_queue:[],_$show:a(),_$hide:a()}),b._execAction("_constructor",1)},a.MixItUp.prototype={constructor:a.MixItUp,_instances:{},_handled:{_filter:{},_sort:{}},_bound:{_filter:{},_sort:{}},_actions:{},_filters:{},extend:function(b){for(var c in b)a.MixItUp.prototype[c]=b[c]},addAction:function(b,c,d,e){a.MixItUp.prototype._addHook("_actions",b,c,d,e)},addFilter:function(b,c,d,e){a.MixItUp.prototype._addHook("_filters",b,c,d,e)},_addHook:function(b,c,d,e,f){var g=a.MixItUp.prototype[b],h={};f=1===f||"post"===f?"post":"pre",h[c]={},h[c][f]={},h[c][f][d]=e,a.extend(!0,g,h)},_init:function(b,c){var d=this;if(d._execAction("_init",0,arguments),c&&a.extend(!0,d,c),d._$body=a("body"),d._domNode=b,d._$container=a(b),d._$container.addClass(d.layout.containerClass),d._id=b.id,d._platformDetect(),d._brake=d._getPrefixedCSS("transition","none"),d._refresh(!0),d._$parent=d._$targets.parent().length?d._$targets.parent():d._$container,d.load.sort&&(d._newSort=d._parseSort(d.load.sort),d._newSortString=d.load.sort,d._activeSort=d.load.sort,d._sort(),d._printSort()),d._activeFilter="all"===d.load.filter?d.selectors.target:"none"===d.load.filter?"":d.load.filter,d.controls.enable&&d._bindHandlers(),d.controls.toggleFilterButtons){d._buildToggleArray();for(var e=0;e<d._toggleArray.length;e++)d._updateControls({filter:d._toggleArray[e],sort:d._activeSort},!0)}else d.controls.enable&&d._updateControls({filter:d._activeFilter,sort:d._activeSort});d._filter(),d._init=!0,d._$container.data("mixItUp",d),d._execAction("_init",1,arguments),d._buildState(),d._$targets.css(d._brake),d._goMix(d.animation.enable)},_platformDetect:function(){var a=this,c=["Webkit","Moz","O","ms"],d=["webkit","moz"],e=window.navigator.appVersion.match(/Chrome\/(\d+)\./)||!1,f="undefined"!=typeof InstallTrigger,g=function(a){for(var b=0;b<c.length;b++)if(c[b]+"Transition"in a.style)return{prefix:"-"+c[b].toLowerCase()+"-",vendor:c[b]};return"transition"in a.style?"":!1},h=g(a._domNode);a._execAction("_platformDetect",0),a._chrome=e?parseInt(e[1],10):!1,a._ff=f?parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1]):!1,a._prefix=h.prefix,a._vendor=h.vendor,a._suckMode=window.atob&&a._prefix?!1:!0,a._suckMode&&(a.animation.enable=!1),a._ff&&a._ff<=4&&(a.animation.enable=!1);for(var i=0;i<d.length&&!window.requestAnimationFrame;i++)window.requestAnimationFrame=window[d[i]+"RequestAnimationFrame"];"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"==typeof"test".__proto__?function(a){return a.__proto__}:function(a){return a.constructor.prototype}),a._domNode.nextElementSibling===b&&Object.defineProperty(Element.prototype,"nextElementSibling",{get:function(){for(var a=this.nextSibling;a;){if(1===a.nodeType)return a;a=a.nextSibling}return null}}),a._execAction("_platformDetect",1)},_refresh:function(a,c){var d=this;d._execAction("_refresh",0,arguments),d._$targets=d._$container.find(d.selectors.target);for(var e=0;e<d._$targets.length;e++){var f=d._$targets[e];if(f.dataset===b||c){f.dataset={};for(var g=0;g<f.attributes.length;g++){var h=f.attributes[g],i=h.name,j=h.value;if(i.indexOf("data-")>-1){var k=d._helpers._camelCase(i.substring(5,i.length));f.dataset[k]=j}}}f.mixParent===b&&(f.mixParent=d._id)}if(d._$targets.length&&a||!d._origOrder.length&&d._$targets.length){d._origOrder=[];for(var e=0;e<d._$targets.length;e++){var f=d._$targets[e];d._origOrder.push(f)}}d._execAction("_refresh",1,arguments)},_bindHandlers:function(){var c=this,d=a.MixItUp.prototype._bound._filter,e=a.MixItUp.prototype._bound._sort;c._execAction("_bindHandlers",0),c.controls.live?c._$body.on("click.mixItUp."+c._id,c.selectors.sort,function(){c._processClick(a(this),"sort")}).on("click.mixItUp."+c._id,c.selectors.filter,function(){c._processClick(a(this),"filter")}):(c._$sortButtons=a(c.selectors.sort),c._$filterButtons=a(c.selectors.filter),c._$sortButtons.on("click.mixItUp."+c._id,function(){c._processClick(a(this),"sort")}),c._$filterButtons.on("click.mixItUp."+c._id,function(){c._processClick(a(this),"filter")})),d[c.selectors.filter]=d[c.selectors.filter]===b?1:d[c.selectors.filter]+1,e[c.selectors.sort]=e[c.selectors.sort]===b?1:e[c.selectors.sort]+1,c._execAction("_bindHandlers",1)},_processClick:function(c,d){var e=this,f=function(c,d,f){var g=a.MixItUp.prototype;g._handled["_"+d][e.selectors[d]]=g._handled["_"+d][e.selectors[d]]===b?1:g._handled["_"+d][e.selectors[d]]+1,g._handled["_"+d][e.selectors[d]]===g._bound["_"+d][e.selectors[d]]&&(c[(f?"remove":"add")+"Class"](e.controls.activeClass),delete g._handled["_"+d][e.selectors[d]])};if(e._execAction("_processClick",0,arguments),!e._mixing||e.animation.queue&&e._queue.length<e.animation.queueLimit){if(e._clicking=!0,"sort"===d){var g=c.attr("data-sort");(!c.hasClass(e.controls.activeClass)||g.indexOf("random")>-1)&&(a(e.selectors.sort).removeClass(e.controls.activeClass),f(c,d),e.sort(g))}if("filter"===d){var h,i=c.attr("data-filter"),j="or"===e.controls.toggleLogic?",":"";e.controls.toggleFilterButtons?(e._buildToggleArray(),c.hasClass(e.controls.activeClass)?(f(c,d,!0),h=e._toggleArray.indexOf(i),e._toggleArray.splice(h,1)):(f(c,d),e._toggleArray.push(i)),e._toggleArray=a.grep(e._toggleArray,function(a){return a}),e._toggleString=e._toggleArray.join(j),e.filter(e._toggleString)):c.hasClass(e.controls.activeClass)||(a(e.selectors.filter).removeClass(e.controls.activeClass),f(c,d),e.filter(i))}e._execAction("_processClick",1,arguments)}else"function"==typeof e.callbacks.onMixBusy&&e.callbacks.onMixBusy.call(e._domNode,e._state,e),e._execAction("_processClickBusy",1,arguments)},_buildToggleArray:function(){var a=this,b=a._activeFilter.replace(/\s/g,"");if(a._execAction("_buildToggleArray",0,arguments),"or"===a.controls.toggleLogic)a._toggleArray=b.split(",");else{a._toggleArray=b.split("."),!a._toggleArray[0]&&a._toggleArray.shift();for(var c,d=0;c=a._toggleArray[d];d++)a._toggleArray[d]="."+c}a._execAction("_buildToggleArray",1,arguments)},_updateControls:function(c,d){var e=this,f={filter:c.filter,sort:c.sort},g=function(a,b){d&&"filter"===h&&"none"!==f.filter&&""!==f.filter?a.filter(b).addClass(e.controls.activeClass):a.removeClass(e.controls.activeClass).filter(b).addClass(e.controls.activeClass)},h="filter",i=null;e._execAction("_updateControls",0,arguments),c.filter===b&&(f.filter=e._activeFilter),c.sort===b&&(f.sort=e._activeSort),f.filter===e.selectors.target&&(f.filter="all");for(var j=0;2>j;j++)i=e.controls.live?a(e.selectors[h]):e["_$"+h+"Buttons"],i&&g(i,"[data-"+h+'="'+f[h]+'"]'),h="sort";e._execAction("_updateControls",1,arguments)},_filter:function(){var b=this;b._execAction("_filter",0);for(var c=0;c<b._$targets.length;c++){var d=a(b._$targets[c]);d.is(b._activeFilter)?b._$show=b._$show.add(d):b._$hide=b._$hide.add(d)}b._execAction("_filter",1)},_sort:function(){var a=this,b=function(a){for(var b=a.slice(),c=b.length,d=c;d--;){var e=parseInt(Math.random()*c),f=b[d];b[d]=b[e],b[e]=f}return b};a._execAction("_sort",0),a._startOrder=[];for(var c=0;c<a._$targets.length;c++){var d=a._$targets[c];a._startOrder.push(d)}switch(a._newSort[0].sortBy){case"default":a._newOrder=a._origOrder;break;case"random":a._newOrder=b(a._startOrder);break;case"custom":a._newOrder=a._newSort[0].order;break;default:a._newOrder=a._startOrder.concat().sort(function(b,c){return a._compare(b,c)})}a._execAction("_sort",1)},_compare:function(a,b,c){c=c?c:0;var d=this,e=d._newSort[c].order,f=function(a){return a.dataset[d._newSort[c].sortBy]||0},g=isNaN(1*f(a))?f(a).toLowerCase():1*f(a),h=isNaN(1*f(b))?f(b).toLowerCase():1*f(b);return h>g?"asc"===e?-1:1:g>h?"asc"===e?1:-1:g===h&&d._newSort.length>c+1?d._compare(a,b,c+1):0},_printSort:function(a){var b=this,c=a?b._startOrder:b._newOrder,d=b._$parent[0].querySelectorAll(b.selectors.target),e=d.length?d[d.length-1].nextElementSibling:null,f=document.createDocumentFragment();b._execAction("_printSort",0,arguments);for(var g=0;g<d.length;g++){var h=d[g],i=h.nextSibling;"absolute"!==h.style.position&&(i&&"#text"===i.nodeName&&b._$parent[0].removeChild(i),b._$parent[0].removeChild(h))}for(var g=0;g<c.length;g++){var j=c[g];if("default"!==b._newSort[0].sortBy||"desc"!==b._newSort[0].order||a)f.appendChild(j),f.appendChild(document.createTextNode(" "));else{var k=f.firstChild;f.insertBefore(j,k),f.insertBefore(document.createTextNode(" "),j)}}e?b._$parent[0].insertBefore(f,e):b._$parent[0].appendChild(f),b._execAction("_printSort",1,arguments)},_parseSort:function(a){for(var b=this,c="string"==typeof a?a.split(" "):[a],d=[],e=0;e<c.length;e++){var f="string"==typeof a?c[e].split(":"):["custom",c[e]],g={sortBy:b._helpers._camelCase(f[0]),order:f[1]||"asc"};if(d.push(g),"default"===g.sortBy||"random"===g.sortBy)break}return b._execFilter("_parseSort",d,arguments)},_parseEffects:function(){var a=this,b={opacity:"",transformIn:"",transformOut:"",filter:""},c=function(b,c){if(a.animation.effects.indexOf(b)>-1){if(c){var d=a.animation.effects.indexOf(b+"(");if(d>-1){var e=a.animation.effects.substring(d),f=/\(([^)]+)\)/.exec(e),g=f[1];return{val:g}}}return!0}return!1},d=function(a,b){return b?"-"===a.charAt(0)?a.substr(1,a.length):"-"+a:a},e=function(a,e){for(var f=[["scale",".01"],["translateX","20px"],["translateY","20px"],["translateZ","20px"],["rotateX","90deg"],["rotateY","90deg"],["rotateZ","180deg"]],g=0;g<f.length;g++){var h=f[g][0],i=f[g][1],j=e&&"scale"!==h;b[a]+=c(h)?h+"("+d(c(h,!0).val||i,j)+") ":""}};return b.opacity=c("fade")?c("fade",!0).val||"0":"1",e("transformIn"),a.animation.reverseOut?e("transformOut",!0):b.transformOut=b.transformIn,b.transition={},b.transition=a._getPrefixedCSS("transition","all "+a.animation.duration+"ms "+a.animation.easing+", opacity "+a.animation.duration+"ms linear"),a.animation.stagger=c("stagger")?!0:!1,a.animation.staggerDuration=parseInt(c("stagger")?c("stagger",!0).val?c("stagger",!0).val:100:100),a._execFilter("_parseEffects",b)},_buildState:function(a){var b=this,c={};return b._execAction("_buildState",0),c={activeFilter:""===b._activeFilter?"none":b._activeFilter,activeSort:a&&b._newSortString?b._newSortString:b._activeSort,fail:!b._$show.length&&""!==b._activeFilter,$targets:b._$targets,$show:b._$show,$hide:b._$hide,totalTargets:b._$targets.length,totalShow:b._$show.length,totalHide:b._$hide.length,display:a&&b._newDisplay?b._newDisplay:b.layout.display},a?b._execFilter("_buildState",c):(b._state=c,b._execAction("_buildState",1),void 0)},_goMix:function(a){var b=this,c=function(){b._chrome&&31===b._chrome&&f(b._$parent[0]),b._setInter(),d()},d=function(){var a=window.pageYOffset,c=window.pageXOffset;document.documentElement.scrollHeight,b._getInterMixData(),b._setFinal(),b._getFinalMixData(),window.pageYOffset!==a&&window.scrollTo(c,a),b._prepTargets(),window.requestAnimationFrame?requestAnimationFrame(e):setTimeout(function(){e()},20)},e=function(){b._animateTargets(),0===b._targetsBound&&b._cleanUp()},f=function(a){var b=a.parentElement,c=document.createElement("div"),d=document.createDocumentFragment();b.insertBefore(c,a),d.appendChild(a),b.replaceChild(a,c)},g=b._buildState(!0);b._execAction("_goMix",0,arguments),!b.animation.duration&&(a=!1),b._mixing=!0,b._$container.removeClass(b.layout.containerClassFail),"function"==typeof b.callbacks.onMixStart&&b.callbacks.onMixStart.call(b._domNode,b._state,g,b),b._$container.trigger("mixStart",[b._state,g,b]),b._getOrigMixData(),a&&!b._suckMode?window.requestAnimationFrame?requestAnimationFrame(c):c():b._cleanUp(),b._execAction("_goMix",1,arguments)},_getTargetData:function(a,b){var c,d=this;a.dataset[b+"PosX"]=a.offsetLeft,a.dataset[b+"PosY"]=a.offsetTop,d.animation.animateResizeTargets&&(c=window.getComputedStyle(a),a.dataset[b+"MarginBottom"]=parseInt(c.marginBottom),a.dataset[b+"MarginRight"]=parseInt(c.marginRight),a.dataset[b+"Width"]=a.offsetWidth,a.dataset[b+"Height"]=a.offsetHeight)},_getOrigMixData:function(){var a=this,b=a._suckMode?{boxSizing:""}:window.getComputedStyle(a._$parent[0]),c=b.boxSizing||b[a._vendor+"BoxSizing"];a._incPadding="border-box"===c,a._execAction("_getOrigMixData",0),!a._suckMode&&(a.effects=a._parseEffects()),a._$toHide=a._$hide.filter(":visible"),a._$toShow=a._$show.filter(":hidden"),a._$pre=a._$targets.filter(":visible"),a._startHeight=a._incPadding?a._$parent.outerHeight():a._$parent.height();for(var d=0;d<a._$pre.length;d++){var e=a._$pre[d];a._getTargetData(e,"orig")}a._execAction("_getOrigMixData",1)},_setInter:function(){var a=this;a._execAction("_setInter",0),a._changingLayout&&a.animation.animateChangeLayout?(a._$toShow.css("display",a._newDisplay),a._changingClass&&a._$container.removeClass(a.layout.containerClass).addClass(a._newClass)):a._$toShow.css("display",a.layout.display),a._execAction("_setInter",1)},_getInterMixData:function(){var a=this;a._execAction("_getInterMixData",0);for(var b=0;b<a._$toShow.length;b++){var c=a._$toShow[b];a._getTargetData(c,"inter")}for(var b=0;b<a._$pre.length;b++){var c=a._$pre[b];a._getTargetData(c,"inter")}a._execAction("_getInterMixData",1)},_setFinal:function(){var a=this;a._execAction("_setFinal",0),a._sorting&&a._printSort(),a._$toHide.removeStyle("display"),a._changingLayout&&a.animation.animateChangeLayout&&a._$pre.css("display",a._newDisplay),a._execAction("_setFinal",1)},_getFinalMixData:function(){var a=this;a._execAction("_getFinalMixData",0);for(var b=0;b<a._$toShow.length;b++){var c=a._$toShow[b];a._getTargetData(c,"final")}for(var b=0;b<a._$pre.length;b++){var c=a._$pre[b];a._getTargetData(c,"final")}a._newHeight=a._incPadding?a._$parent.outerHeight():a._$parent.height(),a._sorting&&a._printSort(!0),a._$toShow.removeStyle("display"),a._$pre.css("display",a.layout.display),a._changingClass&&a.animation.animateChangeLayout&&a._$container.removeClass(a._newClass).addClass(a.layout.containerClass),a._execAction("_getFinalMixData",1)},_prepTargets:function(){var b=this,c={_in:b._getPrefixedCSS("transform",b.effects.transformIn),_out:b._getPrefixedCSS("transform",b.effects.transformOut)};b._execAction("_prepTargets",0),b.animation.animateResizeContainer&&b._$parent.css("height",b._startHeight+"px");for(var d=0;d<b._$toShow.length;d++){var e=b._$toShow[d],f=a(e);e.style.opacity=b.effects.opacity,e.style.display=b._changingLayout&&b.animation.animateChangeLayout?b._newDisplay:b.layout.display,f.css(c._in),b.animation.animateResizeTargets&&(e.style.width=e.dataset.finalWidth+"px",e.style.height=e.dataset.finalHeight+"px",e.style.marginRight=-(e.dataset.finalWidth-e.dataset.interWidth)+1*e.dataset.finalMarginRight+"px",e.style.marginBottom=-(e.dataset.finalHeight-e.dataset.interHeight)+1*e.dataset.finalMarginBottom+"px")}for(var d=0;d<b._$pre.length;d++){var e=b._$pre[d],f=a(e),g={x:e.dataset.origPosX-e.dataset.interPosX,y:e.dataset.origPosY-e.dataset.interPosY},c=b._getPrefixedCSS("transform","translate("+g.x+"px,"+g.y+"px)");f.css(c),b.animation.animateResizeTargets&&(e.style.width=e.dataset.origWidth+"px",e.style.height=e.dataset.origHeight+"px",e.dataset.origWidth-e.dataset.finalWidth&&(e.style.marginRight=-(e.dataset.origWidth-e.dataset.interWidth)+1*e.dataset.origMarginRight+"px"),e.dataset.origHeight-e.dataset.finalHeight&&(e.style.marginBottom=-(e.dataset.origHeight-e.dataset.interHeight)+1*e.dataset.origMarginBottom+"px"))}b._execAction("_prepTargets",1)},_animateTargets:function(){var b=this;b._execAction("_animateTargets",0),b._targetsDone=0,b._targetsBound=0,b._$parent.css(b._getPrefixedCSS("perspective",b.animation.perspectiveDistance+"px")).css(b._getPrefixedCSS("perspective-origin",b.animation.perspectiveOrigin)),b.animation.animateResizeContainer&&b._$parent.css(b._getPrefixedCSS("transition","height "+b.animation.duration+"ms ease")).css("height",b._newHeight+"px");for(var c=0;c<b._$toShow.length;c++){var d=b._$toShow[c],e=a(d),f={x:d.dataset.finalPosX-d.dataset.interPosX,y:d.dataset.finalPosY-d.dataset.interPosY},g=b._getDelay(c),h={};d.style.opacity="";for(var i=0;2>i;i++){var j=0===i?j=b._prefix:"";b._ff&&b._ff<=20&&(h[j+"transition-property"]="all",h[j+"transition-timing-function"]=b.animation.easing+"ms",h[j+"transition-duration"]=b.animation.duration+"ms"),h[j+"transition-delay"]=g+"ms",h[j+"transform"]="translate("+f.x+"px,"+f.y+"px)"}(b.effects.transform||b.effects.opacity)&&b._bindTargetDone(e),b._ff&&b._ff<=20?e.css(h):e.css(b.effects.transition).css(h)}for(var c=0;c<b._$pre.length;c++){var d=b._$pre[c],e=a(d),f={x:d.dataset.finalPosX-d.dataset.interPosX,y:d.dataset.finalPosY-d.dataset.interPosY},g=b._getDelay(c);(d.dataset.finalPosX!==d.dataset.origPosX||d.dataset.finalPosY!==d.dataset.origPosY)&&b._bindTargetDone(e),e.css(b._getPrefixedCSS("transition","all "+b.animation.duration+"ms "+b.animation.easing+" "+g+"ms")),e.css(b._getPrefixedCSS("transform","translate("+f.x+"px,"+f.y+"px)")),b.animation.animateResizeTargets&&(d.dataset.origWidth-d.dataset.finalWidth&&1*d.dataset.finalWidth&&(d.style.width=d.dataset.finalWidth+"px",d.style.marginRight=-(d.dataset.finalWidth-d.dataset.interWidth)+1*d.dataset.finalMarginRight+"px"),d.dataset.origHeight-d.dataset.finalHeight&&1*d.dataset.finalHeight&&(d.style.height=d.dataset.finalHeight+"px",d.style.marginBottom=-(d.dataset.finalHeight-d.dataset.interHeight)+1*d.dataset.finalMarginBottom+"px"))}b._changingClass&&b._$container.removeClass(b.layout.containerClass).addClass(b._newClass);for(var c=0;c<b._$toHide.length;c++){for(var d=b._$toHide[c],e=a(d),g=b._getDelay(c),k={},i=0;2>i;i++){var j=0===i?j=b._prefix:"";k[j+"transition-delay"]=g+"ms",k[j+"transform"]=b.effects.transformOut,k.opacity=b.effects.opacity}e.css(b.effects.transition).css(k),(b.effects.transform||b.effects.opacity)&&b._bindTargetDone(e)}b._execAction("_animateTargets",1)},_bindTargetDone:function(b){var c=this,d=b[0];c._execAction("_bindTargetDone",0,arguments),d.dataset.bound||(d.dataset.bound=!0,c._targetsBound++,b.on("webkitTransitionEnd.mixItUp transitionend.mixItUp",function(e){(e.originalEvent.propertyName.indexOf("transform")>-1||e.originalEvent.propertyName.indexOf("opacity")>-1)&&a(e.originalEvent.target).is(c.selectors.target)&&(b.off(".mixItUp"),delete d.dataset.bound,c._targetDone())})),c._execAction("_bindTargetDone",1,arguments)},_targetDone:function(){var a=this;a._execAction("_targetDone",0),a._targetsDone++,a._targetsDone===a._targetsBound&&a._cleanUp(),a._execAction("_targetDone",1)},_cleanUp:function(){var b=this,c=b.animation.animateResizeTargets?"transform opacity width height margin-bottom margin-right":"transform opacity";unBrake=function(){b._$targets.removeStyle("transition",b._prefix)},b._execAction("_cleanUp",0),b._changingLayout?b._$show.css("display",b._newDisplay):b._$show.css("display",b.layout.display),b._$targets.css(b._brake),b._$targets.removeStyle(c,b._prefix).removeAttr("data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom"),b._$hide.removeStyle("display"),b._$parent.removeStyle("height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin",b._prefix),b._sorting&&(b._printSort(),b._activeSort=b._newSortString,b._sorting=!1),b._changingLayout&&(b._changingDisplay&&(b.layout.display=b._newDisplay,b._changingDisplay=!1),b._changingClass&&(b._$parent.removeClass(b.layout.containerClass).addClass(b._newClass),b.layout.containerClass=b._newClass,b._changingClass=!1),b._changingLayout=!1),b._refresh(),b._buildState(),b._state.fail&&b._$container.addClass(b.layout.containerClassFail),b._$show=a(),b._$hide=a(),window.requestAnimationFrame&&requestAnimationFrame(unBrake),b._mixing=!1,"function"==typeof b.callbacks._user&&b.callbacks._user.call(b._domNode,b._state,b),"function"==typeof b.callbacks.onMixEnd&&b.callbacks.onMixEnd.call(b._domNode,b._state,b),b._$container.trigger("mixEnd",[b._state,b]),b._state.fail&&("function"==typeof b.callbacks.onMixFail&&b.callbacks.onMixFail.call(b._domNode,b._state,b),b._$container.trigger("mixFail",[b._state,b])),b._loading&&("function"==typeof b.callbacks.onMixLoad&&b.callbacks.onMixLoad.call(b._domNode,b._state,b),b._$container.trigger("mixLoad",[b._state,b])),b._queue.length&&(b._execAction("_queue",0),b.multiMix(b._queue[0][0],b._queue[0][1],b._queue[0][2]),b._queue.splice(0,1)),b._execAction("_cleanUp",1),b._loading=!1},_getPrefixedCSS:function(a,b,c){var d=this,e={};for(i=0;2>i;i++){var f=0===i?d._prefix:"";e[f+a]=c?f+b:b}return d._execFilter("_getPrefixedCSS",e,arguments)},_getDelay:function(a){var b=this,c="function"==typeof b.animation.staggerSequence?b.animation.staggerSequence.call(b._domNode,a,b._state):a,d=b.animation.stagger?c*b.animation.staggerDuration:0;return b._execFilter("_getDelay",d,arguments)},_parseMultiMixArgs:function(a){for(var b=this,c={command:null,animate:b.animation.enable,callback:null},d=0;d<a.length;d++){var e=a[d];null!==e&&("object"==typeof e||"string"==typeof e?c.command=e:"boolean"==typeof e?c.animate=e:"function"==typeof e&&(c.callback=e))}return b._execFilter("_parseMultiMixArgs",c,arguments)},_parseInsertArgs:function(b){for(var c=this,d={index:0,$object:a(),multiMix:{filter:c._state.activeFilter},callback:null},e=0;e<b.length;e++){var f=b[e];"number"==typeof f?d.index=f:"object"==typeof f&&f instanceof a?d.$object=f:"object"==typeof f&&c._helpers._isElement(f)?d.$object=a(f):"object"==typeof f&&null!==f?d.multiMix=f:"boolean"!=typeof f||f?"function"==typeof f&&(d.callback=f):d.multiMix=!1}return c._execFilter("_parseInsertArgs",d,arguments)},_execAction:function(a,b,c){var d=this,e=b?"post":"pre";if(!d._actions.isEmptyObject&&d._actions.hasOwnProperty(a))for(var f in d._actions[a][e])d._actions[a][e][f].call(d,c)},_execFilter:function(a,b,c){var d=this;if(d._filters.isEmptyObject||!d._filters.hasOwnProperty(a))return b;for(var e in d._filters[a])return d._filters[a][e].call(d,c)},_helpers:{_camelCase:function(a){return a.replace(/-([a-z])/g,function(a){return a[1].toUpperCase()})},_isElement:function(a){return window.HTMLElement?a instanceof HTMLElement:null!==a&&1===a.nodeType&&"string"===a.nodeName}},isMixing:function(){var a=this;return a._execFilter("isMixing",a._mixing)},filter:function(){var a=this,b=a._parseMultiMixArgs(arguments);a._clicking&&(a._toggleString=""),a.multiMix({filter:b.command},b.animate,b.callback)},sort:function(){var a=this,b=a._parseMultiMixArgs(arguments);a.multiMix({sort:b.command},b.animate,b.callback)},changeLayout:function(){var a=this,b=a._parseMultiMixArgs(arguments);a.multiMix({changeLayout:b.command},b.animate,b.callback)},multiMix:function(){var a=this,c=a._parseMultiMixArgs(arguments);if(a._execAction("multiMix",0,arguments),a._mixing)a.animation.queue&&a._queue.length<a.animation.queueLimit?(a._queue.push(arguments),a.controls.enable&&!a._clicking&&a._updateControls(c.command),a._execAction("multiMixQueue",1,arguments)):("function"==typeof a.callbacks.onMixBusy&&a.callbacks.onMixBusy.call(a._domNode,a._state,a),a._$container.trigger("mixBusy",[a._state,a]),a._execAction("multiMixBusy",1,arguments));else{a.controls.enable&&!a._clicking&&(a.controls.toggleFilterButtons&&a._buildToggleArray(),a._updateControls(c.command,a.controls.toggleFilterButtons)),a._queue.length<2&&(a._clicking=!1),delete a.callbacks._user,c.callback&&(a.callbacks._user=c.callback);var d=c.command.sort,e=c.command.filter,f=c.command.changeLayout;a._refresh(),d&&(a._newSort=a._parseSort(d),a._newSortString=d,a._sorting=!0,a._sort()),e!==b&&(e="all"===e?a.selectors.target:e,a._activeFilter=e),a._filter(),f&&(a._newDisplay="string"==typeof f?f:f.display||a.layout.display,a._newClass=f.containerClass||"",(a._newDisplay!==a.layout.display||a._newClass!==a.layout.containerClass)&&(a._changingLayout=!0,a._changingClass=a._newClass!==a.layout.containerClass,a._changingDisplay=a._newDisplay!==a.layout.display)),a._$targets.css(a._brake),a._goMix(c.animate^a.animation.enable?c.animate:a.animation.enable),a._execAction("multiMix",1,arguments)}},insert:function(){var a=this,b=a._parseInsertArgs(arguments),c="function"==typeof b.callback?b.callback:null,d=document.createDocumentFragment(),e=function(){return a._refresh(),a._$targets.length?b.index<a._$targets.length||!a._$targets.length?a._$targets[b.index]:a._$targets[a._$targets.length-1].nextElementSibling:a._$parent[0].children[0]}();if(a._execAction("insert",0,arguments),b.$object){for(var f=0;f<b.$object.length;f++){var g=b.$object[f];d.appendChild(g),d.appendChild(document.createTextNode(" "))}a._$parent[0].insertBefore(d,e)}a._execAction("insert",1,arguments),"object"==typeof b.multiMix&&a.multiMix(b.multiMix,c)},prepend:function(){var a=this,b=a._parseInsertArgs(arguments);a.insert(0,b.$object,b.multiMix,b.callback)},append:function(){var a=this,b=a._parseInsertArgs(arguments);a.insert(a._state.totalTargets,b.$object,b.multiMix,b.callback)},getOption:function(a){var c=this,d=function(a,c){for(var d=c.split("."),e=d.pop(),f=d.length,g=1,h=d[0]||c;(a=a[h])&&f>g;)h=d[g],g++;return a!==b?a[e]!==b?a[e]:a:void 0};return a?c._execFilter("getOption",d(c,a),arguments):c},setOptions:function(b){var c=this;c._execAction("setOptions",0,arguments),"object"==typeof b&&a.extend(!0,c,b),c._execAction("setOptions",1,arguments)},getState:function(){var a=this;return a._execFilter("getState",a._state,a)},forceRefresh:function(){var a=this;a._refresh(!1,!0)},destroy:function(b){var c=this;c._execAction("destroy",0,arguments),c._$body.add(a(c.selectors.sort)).add(a(c.selectors.filter)).off(".mixItUp");for(var d=0;d<c._$targets.length;d++){var e=c._$targets[d];b&&(e.style.display=""),delete e.mixParent}c._execAction("destroy",1,arguments),delete a.MixItUp.prototype._instances[c._id]}},a.fn.mixItUp=function(){var c,d=arguments,e=[],f=function(b,c){var d=new a.MixItUp,e=function(){return("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6).toUpperCase()};d._execAction("_instantiate",0,arguments),b.id=b.id?b.id:"MixItUp"+e(),d._instances[b.id]||(d._instances[b.id]=d,d._init(b,c)),d._execAction("_instantiate",1,arguments)};return c=this.each(function(){if(d&&"string"==typeof d[0]){var c=a.MixItUp.prototype._instances[this.id];if("isLoaded"===d[0])e.push(c?!0:!1);else{var g=c[d[0]](d[1],d[2],d[3]);g!==b&&e.push(g)}}else f(this,d[0])}),e.length?e.length>1?e:e[0]:c},a.fn.removeStyle=function(c,d){return d=d?d:"",this.each(function(){for(var e=this,f=c.split(" "),g=0;g<f.length;g++)for(var h=0;4>h;h++){switch(h){case 0:var i=f[g];break;case 1:var i=a.MixItUp.prototype._helpers._camelCase(i);break;case 2:var i=d+f[g];break;case 3:var i=a.MixItUp.prototype._helpers._camelCase(d+f[g])}if(e.style[i]!==b&&"unknown"!=typeof e.style[i]&&e.style[i].length>0&&(e.style[i]=""),!d&&1===h)break}e.attributes&&e.attributes.style&&e.attributes.style!==b&&""===e.attributes.style.value&&e.attributes.removeNamedItem("style")})}}(jQuery);
/** ==========================================================

* jquery lightGallery.js v1.1.4
* http://sachinchoolur.github.io/lightGallery/
* Released under the MIT License - http://opensource.org/licenses/mit-license.html  ---- FREE ----

=========================================================/**/
;
(function($) {
    "use strict";
    $.fn.lightGallery = function(options) {
        var defaults = {
                mode: 'slide',
                useCSS: true,
                cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
                easing: 'linear', //'for jquery animation',//
                speed: 600,
                addClass: '',

                closable: true,
                loop: false,
                auto: false,
                pause: 4000,
                escKey: true,
                controls: true,
                hideControlOnEnd: false,

                preload: 1, //number of preload slides. will exicute only after the current slide is fully loaded. ex:// you clicked on 4th image and if preload = 1 then 3rd slide and 5th slide will be loaded in the background after the 4th slide is fully loaded.. if preload is 2 then 2nd 3rd 5th 6th slides will be preloaded.. ... ...
                showAfterLoad: true,
                selector: null,
                index: false,

                lang: {
                    allPhotos: 'All photos'
                },
                counter: false,

                exThumbImage: false,
                thumbnail: true,
                showThumbByDefault:false,
                animateThumb: true,
                currentPagerPosition: 'middle',
                thumbWidth: 100,
                thumbMargin: 5,


                mobileSrc: false,
                mobileSrcMaxWidth: 640,
                swipeThreshold: 50,
                enableTouch: true,
                enableDrag: true,

                vimeoColor: 'CCCCCC',
                videoAutoplay: true,
                videoMaxWidth: '855px',

                dynamic: false,
                dynamicEl: [],
                //callbacks

                onOpen: function(plugin) {},
                onSlideBefore: function(plugin) {},
                onSlideAfter: function(plugin) {},
                onSlideNext: function(plugin) {},
                onSlidePrev: function(plugin) {},
                onBeforeClose: function(plugin) {},
                onCloseAfter: function(plugin) {}
            },
            el = $(this),
            plugin = this,
            $children = null,
            index = 0,
            isActive = false,
            lightGalleryOn = false,
            isTouch = document.createTouch !== undefined || ('ontouchstart' in window) || ('onmsgesturechange' in window) || navigator.msMaxTouchPoints,
            $gallery, $galleryCont, $slider, $slide, $prev, $next, prevIndex, $thumb_cont, $thumb, windowWidth, interval, usingThumb = false,
            aTiming = false,
            aSpeed = false;
        var settings = $.extend(true, {}, defaults, options);
        var lightGallery = {
            init: function() {
                el.each(function() {
                    var $this = $(this);
                    if (settings.dynamic) {
                        $children = settings.dynamicEl;
                        index = 0;
                        prevIndex = index;
                        setUp.init(index);
                    } else {
                        if (settings.selector !== null) {
                            $children = $(settings.selector);
                        } else {
                            $children = $this.children();
                        }
                        $children.on('click', function(e) {
                            if (settings.selector !== null) {
                                $children = $(settings.selector);
                            } else {
                                $children = $this.children();
                            }
                            e.preventDefault();
                            e.stopPropagation();
                            index = $children.index(this);
                            prevIndex = index;
                            setUp.init(index);
                        });
                    }
                });
            }
        };
        var setUp = {
            init: function() {
                isActive = true;
                this.structure();
                this.getWidth();
                this.closeSlide();
                this.autoStart();
                this.counter();
                this.slideTo();
                this.buildThumbnail();
                this.keyPress();
                if (settings.index) {
                    this.slide(settings.index);
                    this.animateThumb(settings.index);
                } else {
                    this.slide(index);
                    this.animateThumb(index);
                }
                if (settings.enableDrag) {
                    this.touch();
                };
                if (settings.enableTouch) {
                    this.enableTouch();
                }

                setTimeout(function() {
                    $gallery.addClass('opacity');
                }, 50);
            },
            structure: function() {
                $('body').append('<div id="lightGallery-outer" class="' + settings.addClass + '"><div id="lightGallery-Gallery"><div id="lightGallery-slider"></div><a id="lightGallery-close" class="close"></a></div></div>').addClass('lightGallery');
                $galleryCont = $('#lightGallery-outer');
                $gallery = $('#lightGallery-Gallery');
                if (settings.showAfterLoad === true) {
                    $gallery.addClass('showAfterLoad');
                }
                $slider = $gallery.find('#lightGallery-slider');
                var slideList = '';
                if (settings.dynamic) {
                    for (var i = 0; i < settings.dynamicEl.length; i++) {
                        slideList += '<div class="lightGallery-slide"></div>';
                    }
                } else {
                    $children.each(function() {
                        slideList += '<div class="lightGallery-slide"></div>';
                    });
                }
                $slider.append(slideList);
                $slide = $gallery.find('.lightGallery-slide');
            },
            closeSlide: function() {
                var $this = this;
                if (settings.closable) {
                    $('#lightGallery-outer')
                        .on('click', function(event) {
                            if ($(event.target).is('.lightGallery-slide')) {
                                plugin.destroy(false);
                            }
                        });
                }
                $('#lightGallery-close').bind('click touchend', function() {
                    plugin.destroy(false);
                });
            },
            getWidth: function() {
                var resizeWindow = function() {
                    windowWidth = $(window).width();
                };
                $(window).bind('resize.lightGallery', resizeWindow());
            },
            doCss: function() {
                var support = function() {
                    var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
                    var root = document.documentElement;
                    for (var i = 0; i < transition.length; i++) {
                        if (transition[i] in root.style) {
                            return true;
                        }
                    }
                };
                if (settings.useCSS && support()) {
                    return true;
                }
                return false;
            },
            enableTouch: function() {
                var $this = this;
                if (isTouch) {
                    var startCoords = {},
                        endCoords = {};
                    $('body').on('touchstart.lightGallery', function(e) {
                        endCoords = e.originalEvent.targetTouches[0];
                        startCoords.pageX = e.originalEvent.targetTouches[0].pageX;
                        startCoords.pageY = e.originalEvent.targetTouches[0].pageY;
                    });
                    $('body').on('touchmove.lightGallery', function(e) {
                        var orig = e.originalEvent;
                        endCoords = orig.targetTouches[0];
                        e.preventDefault();
                    });
                    $('body').on('touchend.lightGallery', function(e) {
                        var distance = endCoords.pageX - startCoords.pageX,
                            swipeThreshold = settings.swipeThreshold;
                        if (distance >= swipeThreshold) {
                            $this.prevSlide();
                            clearInterval(interval);
                        } else if (distance <= -swipeThreshold) {
                            $this.nextSlide();
                            clearInterval(interval);
                        }
                    });
                }
            },
            touch: function() {
                var xStart, xEnd;
                var $this = this;
                $('.lightGallery').bind('mousedown', function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    xStart = e.pageX;
                });
                $('.lightGallery').bind('mouseup', function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    xEnd = e.pageX;
                    if (xEnd - xStart > 20) {
                        $this.prevSlide();
                    } else if (xStart - xEnd > 20) {
                        $this.nextSlide();
                    }
                });
            },
            isVideo: function(src, index) {
                var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9_\-]+)/i);
                var vimeo = src.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i);
                var iframe = false;
                if (settings.dynamic) {
                    if (settings.dynamicEl[index].iframe == 'true') {
                        iframe = true;
                    }
                } else {
                    if ($children.eq(index).attr('data-iframe') == 'true') {
                        iframe = true;
                    }
                }
                if (youtube || vimeo || iframe) {
                    return true;
                }
            },
            loadVideo: function(src, _id) {
                var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9_\-]+)/i);
                var vimeo = src.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i);
                var video = '';
                var a = '';
                if (youtube) {
                    if (settings.videoAutoplay === true && lightGalleryOn === false) {
                        a = '?autoplay=1&rel=0&wmode=opaque';
                    } else {
                        a = '?wmode=opaque';
                    }
                    video = '<iframe class="object" width="560" height="315" src="//www.youtube.com/embed/' + youtube[1] + a + '" frameborder="0" allowfullscreen></iframe>';
                } else if (vimeo) {
                    if (settings.videoAutoplay === true && lightGalleryOn === false) {
                        a = 'autoplay=1&amp;';
                    } else {
                        a = '';
                    }
                    video = '<iframe class="object" id="video' + _id + '" width="560" height="315"  src="http://player.vimeo.com/video/' + vimeo[1] + '?' + a + 'byline=0&amp;portrait=0&amp;color=' + settings.vimeoColor + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
                } else {
                    video = '<iframe class="object" frameborder="0" src="' + src + '"  allowfullscreen="true"></iframe>';
                }
                return '<div class="video_cont" style="max-width:' + settings.videoMaxWidth + ' !important;"><div class="video">' + video + '</div></div>';
            },
            addHtml: function(index) {
                var dataSubHtml = null;
                if (settings.dynamic) {
                    dataSubHtml = settings.dynamicEl[index]['sub-html'];
                } else {
                    dataSubHtml = $children.eq(index).attr('data-sub-html');
                }
                if (typeof dataSubHtml !== 'undefined' && dataSubHtml !== null) {
                    var fL = dataSubHtml.substring(0, 1);
                    if (fL == '.' || fL == '#') {
                        dataSubHtml = $(dataSubHtml).html();
                    } else {
                        dataSubHtml = dataSubHtml;
                    }
                    $slide.eq(index).append(dataSubHtml);
                }
            },
            preload: function(index) {
                var newIndex = index;
                for (var k = 0; k <= settings.preload; k++) {
                    if (k >= $children.length - index) {
                        break;
                    }
                    this.loadContent(newIndex + k, true);
                }
                for (var h = 0; h <= settings.preload; h++) {
                    if (newIndex - h < 0) {
                        break;
                    }
                    this.loadContent(newIndex - h, true);
                }
            },
            loadObj: function(r, index) {
                var $this = this;
                $slide.eq(index).find('.object').on('load error', function() {
                    $slide.eq(index).addClass('complete');
                });
                if (r === false) {
                    if (!$slide.eq(index).hasClass('complete')) {
                        $slide.eq(index).find('.object').on('load error', function() {
                            $this.preload(index);
                        });
                    } else {
                        $this.preload(index);
                    }
                }
            },
            loadContent: function(index, rec) {
                var $this = this;
                var i, j, l = $children.length - index;
                var src;

                if (settings.preload > $children.length) {
                    settings.preload = $children.length;
                }
                if (settings.mobileSrc === true && windowWidth <= settings.mobileSrcMaxWidth) {
                    if (settings.dynamic) {
                        src = settings.dynamicEl[index].mobileSrc;
                    } else {
                        src = $children.eq(index).attr('data-responsive-src');
                    }
                } else {
                    if (settings.dynamic) {
                        src = settings.dynamicEl[index].src;
                    } else {
                        src = $children.eq(index).attr('data-src');
                    }
                }
                var time = 0;
                if (rec === true) {
                    time = settings.speed + 400;
                }




                if (typeof src !== 'undefined' && src !== '') {
                    if (!$this.isVideo(src, index)) {
                        setTimeout(function() {
                            if (!$slide.eq(index).hasClass('loaded')) {
                                $slide.eq(index).prepend('<img class="object" src="' + src + '" />');
                                $this.addHtml(index);
                                $slide.eq(index).addClass('loaded');
                            }
                            $this.loadObj(rec, index);
                        }, time);
                    } else {
                        setTimeout(function() {
                            if (!$slide.eq(index).hasClass('loaded')) {
                                $slide.eq(index).prepend($this.loadVideo(src, index));
                                $this.addHtml(index);
                                $slide.eq(index).addClass('loaded');

                                if (settings.auto && settings.videoAutoplay === true) {
                                    clearInterval(interval);
                                }
                            }
                            $this.loadObj(rec, index);
                        }, time);

                    }
                } else {
                     setTimeout(function() {
                        if (!$slide.eq(index).hasClass('loaded')) {
                            var dataHtml = null;
                            if (settings.dynamic) {
                                dataHtml = settings.dynamicEl[index].html;
                            } else {
                                dataHtml = $children.eq(index).attr('data-html');
                            }
                            if (typeof dataHtml !== 'undefined' && dataHtml !== null) {
                                var fL = dataHtml.substring(0, 1);
                                if (fL == '.' || fL == '#') {
                                    dataHtml = $(dataHtml).html();
                                } else {
                                    dataHtml = dataHtml;
                                }
                            }
                            if (typeof dataHtml !== 'undefined' && dataHtml !== null) {
                                $slide.eq(index).append('<div class="video_cont" style="max-width:' + settings.videoMaxWidth + ' !important;"><div class="video">'+dataHtml+'</div></div>');
                            }
                            $this.addHtml(index);
                            $slide.eq(index).addClass('loaded complete');

                            if (settings.auto && settings.videoAutoplay === true) {
                                clearInterval(interval);
                            }
                        }
                        $this.loadObj(rec, index);
                    }, time);
                }

            },
            counter: function() {
                if (settings.counter === true) {
                    var slideCount = $("#lightGallery-slider > div").length;
                    $gallery.append("<div id='lightGallery_counter'><span id='lightGallery_counter_current'></span> / <span id='lightGallery_counter_all'>" + slideCount + "</span></div>");
                }
            },
            buildThumbnail: function() {
                if (settings.thumbnail === true && $children.length > 1) {
                    var $this = this,
                        $close = '';
                    if (!settings.showThumbByDefault) {
                        $close = '<span class="close ib"><i class="bUi-iCn-rMv-16" aria-hidden="true"></i></span>';
                    }
                    $gallery.append('<div class="thumb_cont"><div class="thumb_info">'+$close+'</div><div class="thumb_inner"></div></div>');
                    $thumb_cont = $gallery.find('.thumb_cont');
                    $prev.after('<a class="cLthumb"></a>');
                    $prev.parent().addClass('hasThumb');
                    $gallery.find('.cLthumb').bind('click touchend', function() {
                        $gallery.addClass('open');
                        if ($this.doCss() && settings.mode === 'slide') {
                            $slide.eq(index).prevAll().removeClass('nextSlide').addClass('prevSlide');
                            $slide.eq(index).nextAll().removeClass('prevSlide').addClass('nextSlide');
                        }
                    });
                    $gallery.find('.thumb_cont .close').bind('click touchend', function() {
                        $gallery.removeClass('open');
                    });
                    var thumbInfo = $gallery.find('.thumb_info');
                    var $thumb_inner = $gallery.find('.thumb_inner');
                    var thumbList = '';
                    var thumbImg;
                    if (settings.dynamic) {
                        for (var i = 0; i < settings.dynamicEl.length; i++) {
                            thumbImg = settings.dynamicEl[i].thumb;
                            thumbList += '<div class="thumb"><img src="' + thumbImg + '" /></div>';
                        }
                    } else {
                        $children.each(function() {
                            if (settings.exThumbImage === false || typeof $(this).attr(settings.exThumbImage) == 'undefined' || $(this).attr(settings.exThumbImage) === null) {
                                thumbImg = $(this).find('img').attr('src');
                            } else {
                                thumbImg = $(this).attr(settings.exThumbImage);
                            }
                            thumbList += '<div class="thumb"><img src="' + thumbImg + '" /></div>';
                        });
                    }
                    $thumb_inner.append(thumbList);
                    $thumb = $thumb_inner.find('.thumb');
                    $thumb.css({
                        'margin-right': settings.thumbMargin + 'px',
                        'width': settings.thumbWidth + 'px'
                    });
                    if (settings.animateThumb === true) {
                        var width = ($children.length * (settings.thumbWidth + settings.thumbMargin));
                        $gallery.find('.thumb_inner').css({
                            'width': width + 'px',
                            'position': 'relative',
                            'transition-duration': settings.speed + 'ms'
                        });
                    }
                    $thumb.bind('click touchend', function() {
                        usingThumb = true;
                        var index = $(this).index();
                        $thumb.removeClass('active');
                        $(this).addClass('active');
                        $this.slide(index);
                        $this.animateThumb(index);
                        clearInterval(interval);
                    });
                    thumbInfo.prepend('<span class="ib count">' + settings.lang.allPhotos + ' (' + $thumb.length + ')</span>');
                    if (settings.showThumbByDefault) {
                        $gallery.addClass('open');
                    }
                }
            },
            animateThumb: function(index) {
                if (settings.animateThumb === true) {
                    var thumb_contW = $gallery.find('.thumb_cont').width();
                    var position;
                    switch (settings.currentPagerPosition) {
                        case 'left':
                            position = 0;
                            break;
                        case 'middle':
                            position = (thumb_contW / 2) - (settings.thumbWidth / 2);
                            break;
                        case 'right':
                            position = thumb_contW - settings.thumbWidth;
                    }
                    var left = ((settings.thumbWidth + settings.thumbMargin) * index - 1) - position;
                    var width = ($children.length * (settings.thumbWidth + settings.thumbMargin));
                    if (left > (width - thumb_contW)) {
                        left = width - thumb_contW;
                    }
                    if (left < 0) {
                        left = 0;
                    }
                    if (this.doCss()) {
                        $gallery.find('.thumb_inner').css('transform', 'translate3d(-' + left + 'px, 0px, 0px)');
                    } else {
                        $gallery.find('.thumb_inner').animate({
                            left: -left + "px"
                        }, settings.speed);
                    }
                }
            },
            slideTo: function() {
                var $this = this;
                if (settings.controls === true && $children.length > 1) {
                    $gallery.append('<div id="lightGallery-action"><a id="lightGallery-prev"></a><a id="lightGallery-next"></a></div>');
                    $prev = $gallery.find('#lightGallery-prev');
                    $next = $gallery.find('#lightGallery-next');
                    $prev.bind('click', function() {
                        $this.prevSlide();
                        clearInterval(interval);
                    });
                    $next.bind('click', function() {
                        $this.nextSlide();
                        clearInterval(interval);
                    });
                }
            },
            autoStart: function() {
                var $this = this;
                if (settings.auto === true) {
                    interval = setInterval(function() {
                        if (index + 1 < $children.length) {
                            index = index;
                        } else {
                            index = -1;
                        }
                        index++;
                        $this.slide(index);
                    }, settings.pause);
                }
            },
            keyPress: function() {
                var $this = this;
                $(window).bind('keyup.lightGallery', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (e.keyCode === 37) {
                        $this.prevSlide();
                        clearInterval(interval);
                    }
                    if (e.keyCode === 38 && settings.thumbnail === true && $children.length > 1) {
                        if (!$gallery.hasClass('open')) {
                            if ($this.doCss() && settings.mode === 'slide') {
                                $slide.eq(index).prevAll().removeClass('nextSlide').addClass('prevSlide');
                                $slide.eq(index).nextAll().removeClass('prevSlide').addClass('nextSlide');
                            }
                            $gallery.addClass('open');
                        }
                    } else if (e.keyCode === 39) {
                        $this.nextSlide();
                        clearInterval(interval);
                    }
                    if (e.keyCode === 40 && settings.thumbnail === true && $children.length > 1 && !settings.showThumbByDefault) {
                        if ($gallery.hasClass('open')) {
                            $gallery.removeClass('open');
                        }
                    } else if (settings.escKey === true && e.keyCode === 27) {
                        if (!settings.showThumbByDefault && $gallery.hasClass('open')) {
                            $gallery.removeClass('open');
                        } else {
                            plugin.destroy(false);
                        }
                    }
                });
            },
            nextSlide: function() {
                var $this = this;
                index = $slide.index($slide.eq(prevIndex));
                if (index + 1 < $children.length) {
                    index++;
                    $this.slide(index);
                } else {
                    if (settings.loop) {
                        index = 0;
                        $this.slide(index);
                    } else if (settings.thumbnail === true && $children.length > 1 && !settings.showThumbByDefault) {
                        $gallery.addClass('open');
                    } else {
                        $slide.eq(index).find('.object').addClass('rightEnd');
                        setTimeout(function() {
                            $slide.find('.object').removeClass('rightEnd');
                        }, 400);
                    }
                }
                $this.animateThumb(index);
                settings.onSlideNext.call(this, plugin);
            },
            prevSlide: function() {
                var $this = this;
                index = $slide.index($slide.eq(prevIndex));
                if (index > 0) {
                    index--;
                    $this.slide(index);
                } else {
                    if (settings.loop) {
                        index = $children.length - 1;
                        $this.slide(index);
                    } else if (settings.thumbnail === true && $children.length > 1 && !settings.showThumbByDefault) {
                        $gallery.addClass('open');
                    } else{
                        $slide.eq(index).find('.object').addClass('leftEnd');
                        setTimeout(function() {
                            $slide.find('.object').removeClass('leftEnd');
                        }, 400);
                    }
                }
                $this.animateThumb(index);
                settings.onSlidePrev.call(this, plugin);
            },
            slide: function(index) {
                var $this = this;
                if (lightGalleryOn) {
                    setTimeout(function() {
                        $this.loadContent(index, false);
                    }, settings.speed + 400);
                    if (!$slider.hasClass('on')) {
                        $slider.addClass('on');
                    }
                    if (this.doCss() && settings.speed !== '') {
                        if (!$slider.hasClass('speed')) {
                            $slider.addClass('speed');
                        }
                        if (aSpeed === false) {
                            $slider.css('transition-duration', settings.speed + 'ms');
                            aSpeed = true;
                        }
                    }
                    if (this.doCss() && settings.cssEasing !== '') {
                        if (!$slider.hasClass('timing')) {
                            $slider.addClass('timing');
                        }
                        if (aTiming === false) {
                            $slider.css('transition-timing-function', settings.cssEasing);
                            aTiming = true;
                        }
                    }
                    settings.onSlideBefore.call(this, plugin);
                } else {
                    $this.loadContent(index, false);
                }
                if (settings.mode === 'slide') {
                    var isiPad = navigator.userAgent.match(/iPad/i) !== null;
                    if (this.doCss() && !$slider.hasClass('slide') && !isiPad) {
                        $slider.addClass('slide');
                    } else if (this.doCss() && !$slider.hasClass('useLeft') && isiPad) {
                        $slider.addClass('useLeft');
                    }
                    /*                  if(this.doCss()){
                        $slider.css({ 'transform' : 'translate3d('+(-index*100)+'%, 0px, 0px)' });
                    }*/
                    if (!this.doCss() && !lightGalleryOn) {
                        $slider.css({
                            left: (-index * 100) + '%'
                        });
                        //$slide.eq(index).css('transition','none');
                    } else if (!this.doCss() && lightGalleryOn) {
                        $slider.animate({
                            left: (-index * 100) + '%'
                        }, settings.speed, settings.easing);
                    }
                } else if (settings.mode === 'fade') {
                    if (this.doCss() && !$slider.hasClass('fadeM')) {
                        $slider.addClass('fadeM');
                    } else if (!this.doCss() && !$slider.hasClass('animate')) {
                        $slider.addClass('animate');
                    }
                    if (!this.doCss() && !lightGalleryOn) {
                        $slide.fadeOut(100);
                        $slide.eq(index).fadeIn(100);
                    } else if (!this.doCss() && lightGalleryOn) {
                        $slide.eq(prevIndex).fadeOut(settings.speed, settings.easing);
                        $slide.eq(index).fadeIn(settings.speed, settings.easing);
                    }
                }
                if (index + 1 >= $children.length && settings.auto && settings.loop === false) {
                    clearInterval(interval);
                }
                $slide.eq(prevIndex).removeClass('current');
                $slide.eq(index).addClass('current');
                if (this.doCss() && settings.mode === 'slide') {
                    if (usingThumb === false) {
                        $('.prevSlide').removeClass('prevSlide');
                        $('.nextSlide').removeClass('nextSlide');
                        $slide.eq(index - 1).addClass('prevSlide');
                        $slide.eq(index + 1).addClass('nextSlide');
                    } else {
                        $slide.eq(index).prevAll().removeClass('nextSlide').addClass('prevSlide');
                        $slide.eq(index).nextAll().removeClass('prevSlide').addClass('nextSlide');
                    }
                }
                if (settings.thumbnail === true && $children.length > 1) {
                    $thumb.removeClass('active');
                    $thumb.eq(index).addClass('active');
                }
                if (settings.controls && settings.hideControlOnEnd && settings.loop === false && $children.length > 1) {
                    var l = $children.length;
                    l = parseInt(l) - 1;
                    if (index === 0) {
                        $prev.addClass('disabled');
                        $next.removeClass('disabled');
                    } else if (index === l) {
                        $prev.removeClass('disabled');
                        $next.addClass('disabled');
                    } else {
                        $prev.add($next).removeClass('disabled');
                    }
                }
                prevIndex = index;
                lightGalleryOn === false ? settings.onOpen.call(this, plugin) : settings.onSlideAfter.call(this, plugin);
                setTimeout(function() {
                    lightGalleryOn = true;
                });
                usingThumb = false;
                if (settings.counter) {
                    $("#lightGallery_counter_current").text(index + 1);
                }
                $(window).bind('resize.lightGallery', function() {
                    setTimeout(function() {
                        $this.animateThumb(index);
                    }, 200);
                });
            }
        };
        plugin.isActive = function() {
            if (isActive === true) {
                return true;
            } else {
                return false;
            }

        };
        plugin.destroy = function(d) {
            isActive = false;
            d = typeof d !== 'undefined' ? false : true;
            settings.onBeforeClose.call(this, plugin);
            var lightGalleryOnT = lightGalleryOn;
            lightGalleryOn = false;
            aTiming = false;
            aSpeed = false;
            usingThumb = false;
            clearInterval(interval);
            if (d === true) {
                $children.off('click touch touchstart');
            }
            $('.lightGallery').off('mousedown mouseup');
            $('body').off('touchstart.lightGallery touchmove.lightGallery touchend.lightGallery');
            $(window).off('resize.lightGallery keyup.lightGallery');
            if (lightGalleryOnT === true) {
                $gallery.addClass('fadeM');
                setTimeout(function() {
                    $galleryCont.remove();
                    $('body').removeClass('lightGallery');
                }, 500);
            }
            settings.onCloseAfter.call(this, plugin);
        };
        lightGallery.init();
        return this;
    };
}(jQuery));
// jquery.royalslider v9.4.92
(function(l){function t(b,f){var c,g,a=this,e=navigator.userAgent.toLowerCase();a.uid=l.rsModules.uid++;a.ns=".rs"+a.uid;var d=document.createElement("div").style,j=["webkit","Moz","ms","O"],h="",k=0;for(c=0;c<j.length;c++)g=j[c],!h&&g+"Transform"in d&&(h=g),g=g.toLowerCase(),window.requestAnimationFrame||(window.requestAnimationFrame=window[g+"RequestAnimationFrame"],window.cancelAnimationFrame=window[g+"CancelAnimationFrame"]||window[g+"CancelRequestAnimationFrame"]);window.requestAnimationFrame||
(window.requestAnimationFrame=function(a){var b=(new Date).getTime(),c=Math.max(0,16-(b-k)),d=window.setTimeout(function(){a(b+c)},c);k=b+c;return d});window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)});a.isIPAD=e.match(/(ipad)/);j=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];c=j[1]||"";g=j[2]||"0";
j={};c&&(j[c]=!0,j.version=g);j.chrome&&(j.webkit=!0);a._a=j;a.isAndroid=-1<e.indexOf("android");a.slider=l(b);a.ev=l(a);a._b=l(document);a.st=l.extend({},l.fn.royalSlider.defaults,f);a._c=a.st.transitionSpeed;a._d=0;if(a.st.allowCSS3&&(!j.webkit||a.st.allowCSS3OnWebkit))e=h+(h?"T":"t"),a._e=e+"ransform"in d&&e+"ransition"in d,a._e&&(a._f=h+(h?"P":"p")+"erspective"in d);h=h.toLowerCase();a._g="-"+h+"-";a._h="vertical"===a.st.slidesOrientation?!1:!0;a._i=a._h?"left":"top";a._j=a._h?"width":"height";
a._k=-1;a._l="fade"===a.st.transitionType?!1:!0;a._l||(a.st.sliderDrag=!1,a._m=10);a._n="z-index:0; display:none; opacity:0;";a._o=0;a._p=0;a._q=0;l.each(l.rsModules,function(b,c){"uid"!==b&&c.call(a)});a.slides=[];a._r=0;(a.st.slides?l(a.st.slides):a.slider.children().detach()).each(function(){a._s(this,!0)});a.st.randomizeSlides&&a.slides.sort(function(){return 0.5-Math.random()});a.numSlides=a.slides.length;a._t();a.st.startSlideId?a.st.startSlideId>a.numSlides-1&&(a.st.startSlideId=a.numSlides-
1):a.st.startSlideId=0;a._o=a.staticSlideId=a.currSlideId=a._u=a.st.startSlideId;a.currSlide=a.slides[a.currSlideId];a._v=0;a.msTouch=!1;a.slider.addClass((a._h?"rsHor":"rsVer")+(a._l?"":" rsFade"));d='<div class="rsOverflow"><div class="rsContainer">';a.slidesSpacing=a.st.slidesSpacing;a._w=(a._h?a.slider.width():a.slider.height())+a.st.slidesSpacing;a._x=Boolean(0<a._y);1>=a.numSlides&&(a._z=!1);a._a1=a._z&&a._l?2===a.numSlides?1:2:0;a._b1=6>a.numSlides?a.numSlides:6;a._c1=0;a._d1=0;a.slidesJQ=
[];for(c=0;c<a.numSlides;c++)a.slidesJQ.push(l('<div style="'+(a._l?"":c!==a.currSlideId?a._n:"z-index:0;")+'" class="rsSlide "></div>'));a._e1=d=l(d+"</div></div>");h=a.ns;a.msEnabled=window.navigator.msPointerEnabled;a.msEnabled?(a.msTouch=Boolean(1<window.navigator.msMaxTouchPoints),a.hasTouch=!1,a._n1=0.2,a._j1="MSPointerDown"+h,a._k1="MSPointerMove"+h,a._l1="MSPointerUp"+h,a._m1="MSPointerCancel"+h):(a._j1="mousedown"+h,a._k1="mousemove"+h,a._l1="mouseup"+h,a._m1="mouseup"+h,"ontouchstart"in
window||"createTouch"in document?(a.hasTouch=!0,a._j1+=" touchstart"+h,a._k1+=" touchmove"+h,a._l1+=" touchend"+h,a._m1+=" touchcancel"+h,a._n1=0.5,a.st.sliderTouch&&(a._f1=!0)):(a.hasTouch=!1,a._n1=0.2));a.st.sliderDrag&&(a._f1=!0,j.msie||j.opera?a._g1=a._h1="move":j.mozilla?(a._g1="-moz-grab",a._h1="-moz-grabbing"):j.webkit&&-1!=navigator.platform.indexOf("Mac")&&(a._g1="-webkit-grab",a._h1="-webkit-grabbing"),a._i1());a.slider.html(d);a._o1=a.st.controlsInside?a._e1:a.slider;a._p1=a._e1.children(".rsContainer");
a.msEnabled&&a._p1.css("-ms-touch-action",a._h?"pan-y":"pan-x");a._q1=l('<div class="rsPreloader"></div>');d=a._p1.children(".rsSlide");a._r1=a.slidesJQ[a.currSlideId];a._s1=0;a._e?(a._t1="transition-property",a._u1="transition-duration",a._v1="transition-timing-function",a._w1=a._x1=a._g+"transform",a._f?(j.webkit&&!j.chrome&&a.slider.addClass("rsWebkit3d"),/iphone|ipad|ipod/gi.test(navigator.appVersion),a._y1="translate3d(",a._z1="px, ",a._a2="px, 0px)"):(a._y1="translate(",a._z1="px, ",a._a2="px)"),
a._l?a._p1[a._g+a._t1]=a._g+"transform":(h={},h[a._g+a._t1]="opacity",h[a._g+a._u1]=a.st.transitionSpeed+"ms",h[a._g+a._v1]=a.st.css3easeInOut,d.css(h))):(a._x1="left",a._w1="top");var n;l(window).on("resize"+a.ns,function(){n&&clearTimeout(n);n=setTimeout(function(){a.updateSliderSize()},50)});a.ev.trigger("rsAfterPropsSetup");a.updateSliderSize();a.st.keyboardNavEnabled&&a._b2();if(a.st.arrowsNavHideOnTouch&&(a.hasTouch||a.msTouch))a.st.arrowsNav=!1;a.st.arrowsNav&&(d=a._o1,l('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(d),
a._c2=d.children(".rsArrowLeft").click(function(b){b.preventDefault();a.prev()}),a._d2=d.children(".rsArrowRight").click(function(b){b.preventDefault();a.next()}),a.st.arrowsNavAutoHide&&!a.hasTouch&&(a._c2.addClass("rsHidden"),a._d2.addClass("rsHidden"),d.one("mousemove.arrowshover",function(){a._c2.removeClass("rsHidden");a._d2.removeClass("rsHidden")}),d.hover(function(){a._e2||(a._c2.removeClass("rsHidden"),a._d2.removeClass("rsHidden"))},function(){a._e2||(a._c2.addClass("rsHidden"),a._d2.addClass("rsHidden"))})),
a.ev.on("rsOnUpdateNav",function(){a._f2()}),a._f2());if(a._f1)a._p1.on(a._j1,function(b){a._g2(b)});else a.dragSuccess=!1;var m=["rsPlayBtnIcon","rsPlayBtn","rsCloseVideoBtn","rsCloseVideoIcn"];a._p1.click(function(b){if(!a.dragSuccess){var c=l(b.target).attr("class");if(-1!==l.inArray(c,m)&&a.toggleVideo())return!1;if(a.st.navigateByClick&&!a._h2){if(l(b.target).closest(".rsNoDrag",a._r1).length)return!0;a._i2(b)}a.ev.trigger("rsSlideClick")}}).on("click.rs","a",function(){if(a.dragSuccess)return!1;
a._h2=!0;setTimeout(function(){a._h2=!1},3)});a.ev.trigger("rsAfterInit")}l.rsModules||(l.rsModules={uid:0});t.prototype={constructor:t,_i2:function(b){b=b[this._h?"pageX":"pageY"]-this._j2;b>=this._q?this.next():0>b&&this.prev()},_t:function(){var b;b=this.st.numImagesToPreload;if(this._z=this.st.loop)2===this.numSlides?(this._z=!1,this.st.loopRewind=!0):2>this.numSlides&&(this.st.loopRewind=this._z=!1);this._z&&0<b&&(4>=this.numSlides?b=1:this.st.numImagesToPreload>(this.numSlides-1)/2&&(b=Math.floor((this.numSlides-
1)/2)));this._y=b},_s:function(b,f){function c(a,b){b?e.images.push(a.attr(b)):e.images.push(a.text());if(j){j=!1;e.caption="src"===b?a.attr("alt"):a.contents();e.image=e.images[0];e.videoURL=a.attr("data-rsVideo");var c=a.attr("data-rsw"),d=a.attr("data-rsh");"undefined"!==typeof c&&!1!==c&&"undefined"!==typeof d&&!1!==d?(e.iW=parseInt(c,10),e.iH=parseInt(d,10)):g.st.imgWidth&&g.st.imgHeight&&(e.iW=g.st.imgWidth,e.iH=g.st.imgHeight)}}var g=this,a,e={},d,j=!0;b=l(b);g._k2=b;g.ev.trigger("rsBeforeParseNode",
[b,e]);if(!e.stopParsing)return b=g._k2,e.id=g._r,e.contentAdded=!1,g._r++,e.images=[],e.isBig=!1,e.hasCover||(b.hasClass("rsImg")?(d=b,a=!0):(d=b.find(".rsImg"),d.length&&(a=!0)),a?(e.bigImage=d.eq(0).attr("data-rsBigImg"),d.each(function(){var a=l(this);a.is("a")?c(a,"href"):a.is("img")?c(a,"src"):c(a)})):b.is("img")&&(b.addClass("rsImg rsMainSlideImage"),c(b,"src"))),d=b.find(".rsCaption"),d.length&&(e.caption=d.remove()),e.content=b,g.ev.trigger("rsAfterParseNode",[b,e]),f&&g.slides.push(e),0===
e.images.length&&(e.isLoaded=!0,e.isRendered=!1,e.isLoading=!1,e.images=null),e},_b2:function(){var b=this,f,c,g=function(a){37===a?b.prev():39===a&&b.next()};b._b.on("keydown"+b.ns,function(a){if(!b._l2&&(c=a.keyCode,(37===c||39===c)&&!f))g(c),f=setInterval(function(){g(c)},700)}).on("keyup"+b.ns,function(){f&&(clearInterval(f),f=null)})},goTo:function(b,f){b!==this.currSlideId&&this._m2(b,this.st.transitionSpeed,!0,!f)},destroy:function(b){this.ev.trigger("rsBeforeDestroy");this._b.off("keydown"+
this.ns+" keyup"+this.ns+" "+this._k1+" "+this._l1);this._p1.off(this._j1+" click");this.slider.data("royalSlider",null);l.removeData(this.slider,"royalSlider");l(window).off("resize"+this.ns);b&&this.slider.remove();this.ev=this.slider=this.slides=null},_n2:function(b,f){function c(c,e,f){c.isAdded?(g(e,c),a(e,c)):(f||(f=d.slidesJQ[e]),c.holder?f=c.holder:(f=d.slidesJQ[e]=l(f),c.holder=f),c.appendOnLoaded=!1,a(e,c,f),g(e,c),d._p2(c,f,b),c.isAdded=!0)}function g(a,c){c.contentAdded||(d.setItemHtml(c,
b),b||(c.contentAdded=!0))}function a(a,b,c){d._l&&(c||(c=d.slidesJQ[a]),c.css(d._i,(a+d._d1+p)*d._w))}function e(a){if(k){if(a>n-1)return e(a-n);if(0>a)return e(n+a)}return a}var d=this,j,h,k=d._z,n=d.numSlides;if(!isNaN(f))return e(f);var m=d.currSlideId,p,q=b?Math.abs(d._o2-d.currSlideId)>=d.numSlides-1?0:1:d._y,r=Math.min(2,q),u=!1,t=!1,s;for(h=m;h<m+1+r;h++)if(s=e(h),(j=d.slides[s])&&(!j.isAdded||!j.positionSet)){u=!0;break}for(h=m-1;h>m-1-r;h--)if(s=e(h),(j=d.slides[s])&&(!j.isAdded||!j.positionSet)){t=
!0;break}if(u)for(h=m;h<m+q+1;h++)s=e(h),p=Math.floor((d._u-(m-h))/d.numSlides)*d.numSlides,(j=d.slides[s])&&c(j,s);if(t)for(h=m-1;h>m-1-q;h--)s=e(h),p=Math.floor((d._u-(m-h))/n)*n,(j=d.slides[s])&&c(j,s);if(!b){r=e(m-q);m=e(m+q);q=r>m?0:r;for(h=0;h<n;h++)if(!(r>m&&h>r-1)&&(h<q||h>m))if((j=d.slides[h])&&j.holder)j.holder.detach(),j.isAdded=!1}},setItemHtml:function(b,f){var c=this,g=function(){if(b.images){if(!b.isLoading){var e,f;b.content.hasClass("rsImg")?(e=b.content,f=!0):e=b.content.find(".rsImg:not(img)");
e&&!e.is("img")&&e.each(function(){var a=l(this),c='<img class="rsImg" src="'+(a.is("a")?a.attr("href"):a.text())+'" />';f?b.content=l(c):a.replaceWith(c)});e=f?b.content:b.content.find("img.rsImg");h();e.eq(0).addClass("rsMainSlideImage");b.iW&&b.iH&&(b.isLoaded||c._q2(b),d());b.isLoading=!0;if(b.isBig)l("<img />").on("load.rs error.rs",function(){l(this).off("load.rs error.rs");a([this],!0)}).attr("src",b.image);else{b.loaded=[];b.numStartedLoad=0;e=function(){l(this).off("load.rs error.rs");b.loaded.push(this);
b.loaded.length===b.numStartedLoad&&a(b.loaded,!1)};for(var g=0;g<b.images.length;g++){var j=l("<img />");b.numStartedLoad++;j.on("load.rs error.rs",e).attr("src",b.images[g])}}}}else b.isRendered=!0,b.isLoaded=!0,b.isLoading=!1,d(!0)},a=function(a,c){if(a.length){var d=a[0];if(c!==b.isBig)(d=b.holder.children())&&1<d.length&&k();else if(b.iW&&b.iH)e();else if(b.iW=d.width,b.iH=d.height,b.iW&&b.iH)e();else{var f=new Image;f.onload=function(){f.width?(b.iW=f.width,b.iH=f.height,e()):setTimeout(function(){f.width&&
(b.iW=f.width,b.iH=f.height);e()},1E3)};f.src=d.src}}else e()},e=function(){b.isLoaded=!0;b.isLoading=!1;d();k();j()},d=function(){if(!b.isAppended&&c.ev){var a=c.st.visibleNearby,d=b.id-c._o;if(!f&&!b.appendOnLoaded&&c.st.fadeinLoadedSlide&&(0===d||(a||c._r2||c._l2)&&(-1===d||1===d)))a={visibility:"visible",opacity:0},a[c._g+"transition"]="opacity 400ms ease-in-out",b.content.css(a),setTimeout(function(){b.content.css("opacity",1)},16);b.holder.find(".rsPreloader").length?b.holder.append(b.content):
b.holder.html(b.content);b.isAppended=!0;b.isLoaded&&(c._q2(b),j());b.sizeReady||(b.sizeReady=!0,setTimeout(function(){c.ev.trigger("rsMaybeSizeReady",b)},100))}},j=function(){!b.loadedTriggered&&c.ev&&(b.isLoaded=b.loadedTriggered=!0,b.holder.trigger("rsAfterContentSet"),c.ev.trigger("rsAfterContentSet",b))},h=function(){c.st.usePreloader&&b.holder.html(c._q1.clone())},k=function(){if(c.st.usePreloader){var a=b.holder.find(".rsPreloader");a.length&&a.remove()}};b.isLoaded?d():f?!c._l&&b.images&&
b.iW&&b.iH?g():(b.holder.isWaiting=!0,h(),b.holder.slideId=-99):g()},_p2:function(b){this._p1.append(b.holder);b.appendOnLoaded=!1},_g2:function(b,f){var c=this,g,a="touchstart"===b.type;c._s2=a;c.ev.trigger("rsDragStart");if(l(b.target).closest(".rsNoDrag",c._r1).length)return c.dragSuccess=!1,!0;!f&&c._r2&&(c._t2=!0,c._u2());c.dragSuccess=!1;if(c._l2)a&&(c._v2=!0);else{a&&(c._v2=!1);c._w2();if(a){var e=b.originalEvent.touches;if(e&&0<e.length)g=e[0],1<e.length&&(c._v2=!0);else return}else b.preventDefault(),
g=b,c.msEnabled&&(g=g.originalEvent);c._l2=!0;c._b.on(c._k1,function(a){c._x2(a,f)}).on(c._l1,function(a){c._y2(a,f)});c._z2="";c._a3=!1;c._b3=g.pageX;c._c3=g.pageY;c._d3=c._v=(!f?c._h:c._e3)?g.pageX:g.pageY;c._f3=0;c._g3=0;c._h3=!f?c._p:c._i3;c._j3=(new Date).getTime();if(a)c._e1.on(c._m1,function(a){c._y2(a,f)})}},_k3:function(b,f){if(this._l3){var c=this._m3,g=b.pageX-this._b3,a=b.pageY-this._c3,e=this._h3+g,d=this._h3+a,j=!f?this._h:this._e3,e=j?e:d,d=this._z2;this._a3=!0;this._b3=b.pageX;this._c3=
b.pageY;"x"===d&&0!==g?this._f3=0<g?1:-1:"y"===d&&0!==a&&(this._g3=0<a?1:-1);d=j?this._b3:this._c3;g=j?g:a;f?e>this._n3?e=this._h3+g*this._n1:e<this._o3&&(e=this._h3+g*this._n1):this._z||(0>=this.currSlideId&&0<d-this._d3&&(e=this._h3+g*this._n1),this.currSlideId>=this.numSlides-1&&0>d-this._d3&&(e=this._h3+g*this._n1));this._h3=e;200<c-this._j3&&(this._j3=c,this._v=d);f?this._q3(this._h3):this._l&&this._p3(this._h3)}},_x2:function(b,f){var c=this,g,a="touchmove"===b.type;if(!c._s2||a){if(a){if(c._r3)return;
var e=b.originalEvent.touches;if(e){if(1<e.length)return;g=e[0]}else return}else g=b,c.msEnabled&&(g=g.originalEvent);c._a3||(c._e&&(!f?c._p1:c._s3).css(c._g+c._u1,"0s"),function j(){c._l2&&(c._t3=requestAnimationFrame(j),c._u3&&c._k3(c._u3,f))}());if(c._l3)b.preventDefault(),c._m3=(new Date).getTime(),c._u3=g;else if(e=!f?c._h:c._e3,g=Math.abs(g.pageX-c._b3)-Math.abs(g.pageY-c._c3)-(e?-7:7),7<g){if(e)b.preventDefault(),c._z2="x";else if(a){c._v3();return}c._l3=!0}else if(-7>g){if(e){if(a){c._v3();
return}}else b.preventDefault(),c._z2="y";c._l3=!0}}},_v3:function(){this._r3=!0;this._a3=this._l2=!1;this._y2()},_y2:function(b,f){function c(a){return 100>a?100:500<a?500:a}function g(b,d){if(a._l||f)j=(-a._u-a._d1)*a._w,h=Math.abs(a._p-j),a._c=h/d,b&&(a._c+=250),a._c=c(a._c),a._x3(j,!1)}var a=this,e,d,j,h;d="touchend"===b.type||"touchcancel"===b.type;if(!a._s2||d)if(a._s2=!1,a.ev.trigger("rsDragRelease"),a._u3=null,a._l2=!1,a._r3=!1,a._l3=!1,a._m3=0,cancelAnimationFrame(a._t3),a._a3&&(f?a._q3(a._h3):
a._l&&a._p3(a._h3)),a._b.off(a._k1).off(a._l1),d&&a._e1.off(a._m1),a._i1(),!a._a3&&!a._v2&&f&&a._w3){var k=l(b.target).closest(".rsNavItem");k.length&&a.goTo(k.index())}else{e=!f?a._h:a._e3;if(!a._a3||"y"===a._z2&&e||"x"===a._z2&&!e)if(!f&&a._t2){a._t2=!1;if(a.st.navigateByClick){a._i2(a.msEnabled?b.originalEvent:b);a.dragSuccess=!0;return}a.dragSuccess=!0}else{a._t2=!1;a.dragSuccess=!1;return}else a.dragSuccess=!0;a._t2=!1;a._z2="";var n=a.st.minSlideOffset;d=d?b.originalEvent.changedTouches[0]:
a.msEnabled?b.originalEvent:b;var m=e?d.pageX:d.pageY,p=a._d3;d=a._v;var q=a.currSlideId,r=a.numSlides,u=e?a._f3:a._g3,t=a._z;Math.abs(m-p);e=m-d;d=(new Date).getTime()-a._j3;d=Math.abs(e)/d;if(0===u||1>=r)g(!0,d);else{if(!t&&!f)if(0>=q){if(0<u){g(!0,d);return}}else if(q>=r-1&&0>u){g(!0,d);return}if(f){j=a._i3;if(j>a._n3)j=a._n3;else if(j<a._o3)j=a._o3;else{n=d*d/0.006;k=-a._i3;m=a._y3-a._z3+a._i3;0<e&&n>k?(k+=a._z3/(15/(0.003*(n/d))),d=d*k/n,n=k):0>e&&n>m&&(m+=a._z3/(15/(0.003*(n/d))),d=d*m/n,n=
m);k=Math.max(Math.round(d/0.003),50);j+=n*(0>e?-1:1);if(j>a._n3){a._a4(j,k,!0,a._n3,200);return}if(j<a._o3){a._a4(j,k,!0,a._o3,200);return}}a._a4(j,k,!0)}else p+n<m?0>u?g(!1,d):a._m2("prev",c(Math.abs(a._p-(-a._u-a._d1+1)*a._w)/d),!1,!0,!0):p-n>m?0<u?g(!1,d):a._m2("next",c(Math.abs(a._p-(-a._u-a._d1-1)*a._w)/d),!1,!0,!0):g(!1,d)}}},_p3:function(b){b=this._p=b;this._e?this._p1.css(this._x1,this._y1+(this._h?b+this._z1+0:0+this._z1+b)+this._a2):this._p1.css(this._h?this._x1:this._w1,b)},updateSliderSize:function(b){var f,
c;if(this.st.autoScaleSlider){var g=this.st.autoScaleSliderWidth,a=this.st.autoScaleSliderHeight;this.st.autoScaleHeight?(f=this.slider.width(),f!=this.width&&(this.slider.css("height",f*(a/g)),f=this.slider.width()),c=this.slider.height()):(c=this.slider.height(),c!=this.height&&(this.slider.css("width",c*(g/a)),c=this.slider.height()),f=this.slider.width())}else f=this.slider.width(),c=this.slider.height();if(b||f!=this.width||c!=this.height){this.width=f;this.height=c;this._b4=f;this._c4=c;this.ev.trigger("rsBeforeSizeSet");
this.ev.trigger("rsAfterSizePropSet");this._e1.css({width:this._b4,height:this._c4});this._w=(this._h?this._b4:this._c4)+this.st.slidesSpacing;this._d4=this.st.imageScalePadding;for(f=0;f<this.slides.length;f++)b=this.slides[f],b.positionSet=!1,b&&(b.images&&b.isLoaded)&&(b.isRendered=!1,this._q2(b));if(this._e4)for(f=0;f<this._e4.length;f++)b=this._e4[f],b.holder.css(this._i,(b.id+this._d1)*this._w);this._n2();this._l&&(this._e&&this._p1.css(this._g+"transition-duration","0s"),this._p3((-this._u-
this._d1)*this._w));this.ev.trigger("rsOnUpdateNav")}this._j2=this._e1.offset();this._j2=this._j2[this._i]},appendSlide:function(b,f){var c=this._s(b);if(isNaN(f)||f>this.numSlides)f=this.numSlides;this.slides.splice(f,0,c);this.slidesJQ.splice(f,0,'<div style="'+(this._l?"position:absolute;":this._n)+'" class="rsSlide"></div>');f<this.currSlideId&&this.currSlideId++;this.ev.trigger("rsOnAppendSlide",[c,f]);this._f4(f);f===this.currSlideId&&this.ev.trigger("rsAfterSlideChange")},removeSlide:function(b){var f=
this.slides[b];f&&(f.holder&&f.holder.remove(),b<this.currSlideId&&this.currSlideId--,this.slides.splice(b,1),this.slidesJQ.splice(b,1),this.ev.trigger("rsOnRemoveSlide",[b]),this._f4(b),b===this.currSlideId&&this.ev.trigger("rsAfterSlideChange"))},_f4:function(){var b=this,f=b.numSlides,f=0>=b._u?0:Math.floor(b._u/f);b.numSlides=b.slides.length;0===b.numSlides?(b.currSlideId=b._d1=b._u=0,b.currSlide=b._g4=null):b._u=f*b.numSlides+b.currSlideId;for(f=0;f<b.numSlides;f++)b.slides[f].id=f;b.currSlide=
b.slides[b.currSlideId];b._r1=b.slidesJQ[b.currSlideId];b.currSlideId>=b.numSlides?b.goTo(b.numSlides-1):0>b.currSlideId&&b.goTo(0);b._t();b._l&&b._z&&b._p1.css(b._g+b._u1,"0ms");b._h4&&clearTimeout(b._h4);b._h4=setTimeout(function(){b._l&&b._p3((-b._u-b._d1)*b._w);b._n2();b._l||b._r1.css({display:"block",opacity:1})},14);b.ev.trigger("rsOnUpdateNav")},_i1:function(){this._f1&&this._l&&(this._g1?this._e1.css("cursor",this._g1):(this._e1.removeClass("grabbing-cursor"),this._e1.addClass("grab-cursor")))},
_w2:function(){this._f1&&this._l&&(this._h1?this._e1.css("cursor",this._h1):(this._e1.removeClass("grab-cursor"),this._e1.addClass("grabbing-cursor")))},next:function(b){this._m2("next",this.st.transitionSpeed,!0,!b)},prev:function(b){this._m2("prev",this.st.transitionSpeed,!0,!b)},_m2:function(b,f,c,g,a){var e=this,d,j,h;e.ev.trigger("rsBeforeMove",[b,g]);h="next"===b?e.currSlideId+1:"prev"===b?e.currSlideId-1:b=parseInt(b,10);if(!e._z){if(0>h){e._i4("left",!g);return}if(h>=e.numSlides){e._i4("right",
!g);return}}e._r2&&(e._u2(!0),c=!1);j=h-e.currSlideId;h=e._o2=e.currSlideId;var k=e.currSlideId+j;g=e._u;var l;e._z?(k=e._n2(!1,k),g+=j):g=k;e._o=k;e._g4=e.slidesJQ[e.currSlideId];e._u=g;e.currSlideId=e._o;e.currSlide=e.slides[e.currSlideId];e._r1=e.slidesJQ[e.currSlideId];var k=e.st.slidesDiff,m=Boolean(0<j);j=Math.abs(j);var p=Math.floor(h/e._y),q=Math.floor((h+(m?k:-k))/e._y),p=(m?Math.max(p,q):Math.min(p,q))*e._y+(m?e._y-1:0);p>e.numSlides-1?p=e.numSlides-1:0>p&&(p=0);h=m?p-h:h-p;h>e._y&&(h=e._y);
if(j>h+k){e._d1+=(j-(h+k))*(m?-1:1);f*=1.4;for(h=0;h<e.numSlides;h++)e.slides[h].positionSet=!1}e._c=f;e._n2(!0);a||(l=!0);d=(-g-e._d1)*e._w;l?setTimeout(function(){e._j4=!1;e._x3(d,b,!1,c);e.ev.trigger("rsOnUpdateNav")},0):(e._x3(d,b,!1,c),e.ev.trigger("rsOnUpdateNav"))},_f2:function(){this.st.arrowsNav&&(1>=this.numSlides?(this._c2.css("display","none"),this._d2.css("display","none")):(this._c2.css("display","block"),this._d2.css("display","block"),!this._z&&!this.st.loopRewind&&(0===this.currSlideId?
this._c2.addClass("rsArrowDisabled"):this._c2.removeClass("rsArrowDisabled"),this.currSlideId===this.numSlides-1?this._d2.addClass("rsArrowDisabled"):this._d2.removeClass("rsArrowDisabled"))))},_x3:function(b,f,c,g,a){function e(){var a;if(j&&(a=j.data("rsTimeout")))j!==h&&j.css({opacity:0,display:"none",zIndex:0}),clearTimeout(a),j.data("rsTimeout","");if(a=h.data("rsTimeout"))clearTimeout(a),h.data("rsTimeout","")}var d=this,j,h,k={};isNaN(d._c)&&(d._c=400);d._p=d._h3=b;d.ev.trigger("rsBeforeAnimStart");
d._e?d._l?(d._c=parseInt(d._c,10),c=d._g+d._v1,k[d._g+d._u1]=d._c+"ms",k[c]=g?l.rsCSS3Easing[d.st.easeInOut]:l.rsCSS3Easing[d.st.easeOut],d._p1.css(k),g||!d.hasTouch?setTimeout(function(){d._p3(b)},5):d._p3(b)):(d._c=d.st.transitionSpeed,j=d._g4,h=d._r1,h.data("rsTimeout")&&h.css("opacity",0),e(),j&&j.data("rsTimeout",setTimeout(function(){k[d._g+d._u1]="0ms";k.zIndex=0;k.display="none";j.data("rsTimeout","");j.css(k);setTimeout(function(){j.css("opacity",0)},16)},d._c+60)),k.display="block",k.zIndex=
d._m,k.opacity=0,k[d._g+d._u1]="0ms",k[d._g+d._v1]=l.rsCSS3Easing[d.st.easeInOut],h.css(k),h.data("rsTimeout",setTimeout(function(){h.css(d._g+d._u1,d._c+"ms");h.data("rsTimeout",setTimeout(function(){h.css("opacity",1);h.data("rsTimeout","")},20))},20))):d._l?(k[d._h?d._x1:d._w1]=b+"px",d._p1.animate(k,d._c,g?d.st.easeInOut:d.st.easeOut)):(j=d._g4,h=d._r1,h.stop(!0,!0).css({opacity:0,display:"block",zIndex:d._m}),d._c=d.st.transitionSpeed,h.animate({opacity:1},d._c,d.st.easeInOut),e(),j&&j.data("rsTimeout",
setTimeout(function(){j.stop(!0,!0).css({opacity:0,display:"none",zIndex:0})},d._c+60)));d._r2=!0;d.loadingTimeout&&clearTimeout(d.loadingTimeout);d.loadingTimeout=a?setTimeout(function(){d.loadingTimeout=null;a.call()},d._c+60):setTimeout(function(){d.loadingTimeout=null;d._k4(f)},d._c+60)},_u2:function(b){this._r2=!1;clearTimeout(this.loadingTimeout);if(this._l)if(this._e){if(!b){b=this._p;var f=this._h3=this._l4();this._p1.css(this._g+this._u1,"0ms");b!==f&&this._p3(f)}}else this._p1.stop(!0),
this._p=parseInt(this._p1.css(this._x1),10);else 20<this._m?this._m=10:this._m++},_l4:function(){var b=window.getComputedStyle(this._p1.get(0),null).getPropertyValue(this._g+"transform").replace(/^matrix\(/i,"").split(/, |\)$/g),f=0===b[0].indexOf("matrix3d");return parseInt(b[this._h?f?12:4:f?13:5],10)},_m4:function(b,f){return this._e?this._y1+(f?b+this._z1+0:0+this._z1+b)+this._a2:b},_k4:function(){this._l||(this._r1.css("z-index",0),this._m=10);this._r2=!1;this.staticSlideId=this.currSlideId;
this._n2();this._n4=!1;this.ev.trigger("rsAfterSlideChange")},_i4:function(b,f){var c=this,g=(-c._u-c._d1)*c._w;if(!(0===c.numSlides||c._r2))if(c.st.loopRewind)c.goTo("left"===b?c.numSlides-1:0,f);else if(c._l){c._c=200;var a=function(){c._r2=!1};c._x3(g+("left"===b?30:-30),"",!1,!0,function(){c._r2=!1;c._x3(g,"",!1,!0,a)})}},_q2:function(b){if(!b.isRendered){var f=b.content,c="rsMainSlideImage",g,a=this.st.imageAlignCenter,e=this.st.imageScaleMode,d;b.videoURL&&(c="rsVideoContainer","fill"!==e?g=
!0:(d=f,d.hasClass(c)||(d=d.find("."+c)),d.css({width:"100%",height:"100%"}),c="rsMainSlideImage"));f.hasClass(c)||(f=f.find("."+c));if(f){var j=b.iW,c=b.iH;b.isRendered=!0;if("none"!==e||a){b="fill"!==e?this._d4:0;d=this._b4-2*b;var h=this._c4-2*b,k,l,m={};if("fit-if-smaller"===e&&(j>d||c>h))e="fit";if("fill"===e||"fit"===e)k=d/j,l=h/c,k="fill"==e?k>l?k:l:"fit"==e?k<l?k:l:1,j=Math.ceil(j*k,10),c=Math.ceil(c*k,10);"none"!==e&&(m.width=j,m.height=c,g&&f.find(".rsImg").css({width:"100%",height:"100%"}));
a&&(m.marginLeft=Math.floor((d-j)/2)+b,m.marginTop=Math.floor((h-c)/2)+b);f.css(m)}}}}};l.rsProto=t.prototype;l.fn.royalSlider=function(b){var f=arguments;return this.each(function(){var c=l(this);if("object"===typeof b||!b)c.data("royalSlider")||c.data("royalSlider",new t(c,b));else if((c=c.data("royalSlider"))&&c[b])return c[b].apply(c,Array.prototype.slice.call(f,1))})};l.fn.royalSlider.defaults={slidesSpacing:8,startSlideId:0,loop:!1,loopRewind:!1,numImagesToPreload:4,fadeinLoadedSlide:!0,slidesOrientation:"horizontal",
transitionType:"move",transitionSpeed:600,controlNavigation:"bullets",controlsInside:!0,arrowsNav:!0,arrowsNavAutoHide:!0,navigateByClick:!0,randomizeSlides:!1,sliderDrag:!0,sliderTouch:!0,keyboardNavEnabled:!1,fadeInAfterLoaded:!0,allowCSS3:!0,allowCSS3OnWebkit:!0,addActiveClass:!1,autoHeight:!1,easeOut:"easeOutSine",easeInOut:"easeInOutSine",minSlideOffset:10,imageScaleMode:"fit-if-smaller",imageAlignCenter:!0,imageScalePadding:4,usePreloader:!0,autoScaleSlider:!1,autoScaleSliderWidth:800,autoScaleSliderHeight:400,
autoScaleHeight:!0,arrowsNavHideOnTouch:!1,globalCaption:!1,slidesDiff:2};l.rsCSS3Easing={easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)"};l.extend(jQuery.easing,{easeInOutSine:function(b,f,c,g,a){return-g/2*(Math.cos(Math.PI*f/a)-1)+c},easeOutSine:function(b,f,c,g,a){return g*Math.sin(f/a*(Math.PI/2))+c},easeOutCubic:function(b,f,c,g,a){return g*((f=f/a-1)*f*f+1)+c}})})(jQuery,window);
// jquery.rs.active-class v1.0.1
(function(c){c.rsProto._o4=function(){var b,a=this;if(a.st.addActiveClass)a.ev.on("rsOnUpdateNav",function(){b&&clearTimeout(b);b=setTimeout(function(){a._g4&&a._g4.removeClass("rsActiveSlide");a._r1&&a._r1.addClass("rsActiveSlide");b=null},50)})};c.rsModules.activeClass=c.rsProto._o4})(jQuery);
// jquery.rs.animated-blocks v1.0.7
(function(j){j.extend(j.rsProto,{_p4:function(){function l(){var g=a.currSlide;if(a.currSlide&&a.currSlide.isLoaded&&a._t4!==g){if(0<a._s4.length){for(b=0;b<a._s4.length;b++)clearTimeout(a._s4[b]);a._s4=[]}if(0<a._r4.length){var f;for(b=0;b<a._r4.length;b++)if(f=a._r4[b])a._e?(f.block.css(a._g+a._u1,"0s"),f.block.css(f.css)):f.block.stop(!0).css(f.css),a._t4=null,g.animBlocksDisplayed=!1;a._r4=[]}g.animBlocks&&(g.animBlocksDisplayed=!0,a._t4=g,a._u4(g.animBlocks))}}var a=this,b;a._q4={fadeEffect:!0,
moveEffect:"top",moveOffset:20,speed:400,easing:"easeOutSine",delay:200};a.st.block=j.extend({},a._q4,a.st.block);a._r4=[];a._s4=[];a.ev.on("rsAfterInit",function(){l()});a.ev.on("rsBeforeParseNode",function(a,b,d){b=j(b);d.animBlocks=b.find(".rsABlock").css("display","none");d.animBlocks.length||(d.animBlocks=b.hasClass("rsABlock")?b.css("display","none"):!1)});a.ev.on("rsAfterContentSet",function(b,f){f.id===a.slides[a.currSlideId].id&&setTimeout(function(){l()},a.st.fadeinLoadedSlide?300:0)});
a.ev.on("rsAfterSlideChange",function(){l()})},_v4:function(j,a){setTimeout(function(){j.css(a)},6)},_u4:function(l){var a=this,b,g,f,d,h,e,m;a._s4=[];l.each(function(l){b=j(this);g={};f={};d=null;var c=b.attr("data-move-offset"),c=c?parseInt(c,10):a.st.block.moveOffset;if(0<c&&((e=b.data("move-effect"))?(e=e.toLowerCase(),"none"===e?e=!1:"left"!==e&&("top"!==e&&"bottom"!==e&&"right"!==e)&&(e=a.st.block.moveEffect,"none"===e&&(e=!1))):e=a.st.block.moveEffect,e&&"none"!==e)){var n;n="right"===e||"left"===
e?!0:!1;var k;m=!1;a._e?(k=0,h=a._x1):(n?isNaN(parseInt(b.css("right"),10))?h="left":(h="right",m=!0):isNaN(parseInt(b.css("bottom"),10))?h="top":(h="bottom",m=!0),h="margin-"+h,m&&(c=-c),a._e?k=parseInt(b.css(h),10):(k=b.data("rs-start-move-prop"),void 0===k&&(k=parseInt(b.css(h),10),b.data("rs-start-move-prop",k))));f[h]=a._m4("top"===e||"left"===e?k-c:k+c,n);g[h]=a._m4(k,n)}if(c=b.attr("data-fade-effect")){if("none"===c.toLowerCase()||"false"===c.toLowerCase())c=!1}else c=a.st.block.fadeEffect;
c&&(f.opacity=0,g.opacity=1);if(c||e)d={},d.hasFade=Boolean(c),Boolean(e)&&(d.moveProp=h,d.hasMove=!0),d.speed=b.data("speed"),isNaN(d.speed)&&(d.speed=a.st.block.speed),d.easing=b.data("easing"),d.easing||(d.easing=a.st.block.easing),d.css3Easing=j.rsCSS3Easing[d.easing],d.delay=b.data("delay"),isNaN(d.delay)&&(d.delay=a.st.block.delay*l);c={};a._e&&(c[a._g+a._u1]="0ms");c.moveProp=g.moveProp;c.opacity=g.opacity;c.display="none";a._r4.push({block:b,css:c});a._v4(b,f);a._s4.push(setTimeout(function(b,
d,c,e){return function(){b.css("display","block");if(c){var g={};if(a._e){var f="";c.hasMove&&(f+=c.moveProp);c.hasFade&&(c.hasMove&&(f+=", "),f+="opacity");g[a._g+a._t1]=f;g[a._g+a._u1]=c.speed+"ms";g[a._g+a._v1]=c.css3Easing;b.css(g);setTimeout(function(){b.css(d)},24)}else setTimeout(function(){b.animate(d,c.speed,c.easing)},16)}delete a._s4[e]}}(b,g,d,l),6>=d.delay?12:d.delay))})}});j.rsModules.animatedBlocks=j.rsProto._p4})(jQuery);
// jquery.rs.auto-height v1.0.2
(function(b){b.extend(b.rsProto,{_w4:function(){var a=this;if(a.st.autoHeight){var b,d,e,c=function(c){e=a.slides[a.currSlideId];if(b=e.holder)if((d=b.height())&&void 0!==d)a._c4=d,a._e||!c?a._e1.css("height",d):a._e1.stop(!0,!0).animate({height:d},a.st.transitionSpeed)};a.ev.on("rsMaybeSizeReady.rsAutoHeight",function(a,b){e===b&&c()});a.ev.on("rsAfterContentSet.rsAutoHeight",function(a,b){e===b&&c()});a.slider.addClass("rsAutoHeight");a.ev.one("rsAfterInit",function(){setTimeout(function(){c(!1);
setTimeout(function(){a.slider.append('<div style="clear:both; float: none;"></div>');a._e&&a._e1.css(a._g+"transition","height "+a.st.transitionSpeed+"ms ease-in-out")},16)},16)});a.ev.on("rsBeforeAnimStart",function(){c(!0)});a.ev.on("rsBeforeSizeSet",function(){setTimeout(function(){c(!1)},16)})}}});b.rsModules.autoHeight=b.rsProto._w4})(jQuery);
// jquery.rs.autoplay v1.0.5
(function(b){b.extend(b.rsProto,{_x4:function(){var a=this,d;a._y4={enabled:!1,stopAtAction:!0,pauseOnHover:!0,delay:2E3};!a.st.autoPlay&&a.st.autoplay&&(a.st.autoPlay=a.st.autoplay);a.st.autoPlay=b.extend({},a._y4,a.st.autoPlay);a.st.autoPlay.enabled&&(a.ev.on("rsBeforeParseNode",function(a,c,f){c=b(c);if(d=c.attr("data-rsDelay"))f.customDelay=parseInt(d,10)}),a.ev.one("rsAfterInit",function(){a._z4()}),a.ev.on("rsBeforeDestroy",function(){a.stopAutoPlay();a.slider.off("mouseenter mouseleave");b(window).off("blur"+
a.ns+" focus"+a.ns)}))},_z4:function(){var a=this;a.startAutoPlay();a.ev.on("rsAfterContentSet",function(b,e){!a._l2&&(!a._r2&&a._a5&&e===a.currSlide)&&a._b5()});a.ev.on("rsDragRelease",function(){a._a5&&a._c5&&(a._c5=!1,a._b5())});a.ev.on("rsAfterSlideChange",function(){a._a5&&a._c5&&(a._c5=!1,a.currSlide.isLoaded&&a._b5())});a.ev.on("rsDragStart",function(){a._a5&&(a.st.autoPlay.stopAtAction?a.stopAutoPlay():(a._c5=!0,a._d5()))});a.ev.on("rsBeforeMove",function(b,e,c){a._a5&&(c&&a.st.autoPlay.stopAtAction?
a.stopAutoPlay():(a._c5=!0,a._d5()))});a._e5=!1;a.ev.on("rsVideoStop",function(){a._a5&&(a._e5=!1,a._b5())});a.ev.on("rsVideoPlay",function(){a._a5&&(a._c5=!1,a._d5(),a._e5=!0)});b(window).on("blur"+a.ns,function(){a._a5&&(a._c5=!0,a._d5())}).on("focus"+a.ns,function(){a._a5&&a._c5&&(a._c5=!1,a._b5())});a.st.autoPlay.pauseOnHover&&(a._f5=!1,a.slider.hover(function(){a._a5&&(a._c5=!1,a._d5(),a._f5=!0)},function(){a._a5&&(a._f5=!1,a._b5())}))},toggleAutoPlay:function(){this._a5?this.stopAutoPlay():
this.startAutoPlay()},startAutoPlay:function(){this._a5=!0;this.currSlide.isLoaded&&this._b5()},stopAutoPlay:function(){this._e5=this._f5=this._c5=this._a5=!1;this._d5()},_b5:function(){var a=this;!a._f5&&!a._e5&&(a._g5=!0,a._h5&&clearTimeout(a._h5),a._h5=setTimeout(function(){var b;!a._z&&!a.st.loopRewind&&(b=!0,a.st.loopRewind=!0);a.next(!0);b&&(a.st.loopRewind=!1)},!a.currSlide.customDelay?a.st.autoPlay.delay:a.currSlide.customDelay))},_d5:function(){!this._f5&&!this._e5&&(this._g5=!1,this._h5&&
(clearTimeout(this._h5),this._h5=null))}});b.rsModules.autoplay=b.rsProto._x4})(jQuery);
// jquery.rs.bullets v1.0.1
(function(c){c.extend(c.rsProto,{_i5:function(){var a=this;"bullets"===a.st.controlNavigation&&(a.ev.one("rsAfterPropsSetup",function(){a._j5=!0;a.slider.addClass("rsWithBullets");for(var b='<div class="rsNav rsBullets">',e=0;e<a.numSlides;e++)b+='<div class="rsNavItem rsBullet"><span></span></div>';a._k5=b=c(b+"</div>");a._l5=b.appendTo(a.slider).children();a._k5.on("click.rs",".rsNavItem",function(){a._m5||a.goTo(c(this).index())})}),a.ev.on("rsOnAppendSlide",function(b,c,d){d>=a.numSlides?a._k5.append('<div class="rsNavItem rsBullet"><span></span></div>'):
a._l5.eq(d).before('<div class="rsNavItem rsBullet"><span></span></div>');a._l5=a._k5.children()}),a.ev.on("rsOnRemoveSlide",function(b,c){var d=a._l5.eq(c);d&&d.length&&(d.remove(),a._l5=a._k5.children())}),a.ev.on("rsOnUpdateNav",function(){var b=a.currSlideId;a._n5&&a._n5.removeClass("rsNavSelected");b=a._l5.eq(b);b.addClass("rsNavSelected");a._n5=b}))}});c.rsModules.bullets=c.rsProto._i5})(jQuery);
// jquery.rs.deeplinking v1.0.6 + jQuery hashchange plugin v1.3 Copyright (c) 2010 Ben Alman
(function(b){b.extend(b.rsProto,{_o5:function(){var a=this,g,c,e;a._p5={enabled:!1,change:!1,prefix:""};a.st.deeplinking=b.extend({},a._p5,a.st.deeplinking);if(a.st.deeplinking.enabled){var h=a.st.deeplinking.change,d="#"+a.st.deeplinking.prefix,f=function(){var a=window.location.hash;return a&&(a=parseInt(a.substring(d.length),10),0<=a)?a-1:-1},j=f();-1!==j&&(a.st.startSlideId=j);h&&(b(window).on("hashchange"+a.ns,function(){if(!g){var b=f();0>b||(b>a.numSlides-1&&(b=a.numSlides-1),a.goTo(b))}}),
a.ev.on("rsBeforeAnimStart",function(){c&&clearTimeout(c);e&&clearTimeout(e)}),a.ev.on("rsAfterSlideChange",function(){c&&clearTimeout(c);e&&clearTimeout(e);e=setTimeout(function(){g=!0;window.location.replace((""+window.location).split("#")[0]+d+(a.currSlideId+1));c=setTimeout(function(){g=!1;c=null},60)},400)}));a.ev.on("rsBeforeDestroy",function(){c=e=null;h&&b(window).off("hashchange"+a.ns)})}}});b.rsModules.deeplinking=b.rsProto._o5})(jQuery);
(function(b,a,g){function c(a){a=a||location.href;return"#"+a.replace(/^[^#]*#?(.*)$/,"$1")}"$:nomunge";var e=document,h,d=b.event.special,f=e.documentMode,j="onhashchange"in a&&(f===g||7<f);b.fn.hashchange=function(a){return a?this.bind("hashchange",a):this.trigger("hashchange")};b.fn.hashchange.delay=50;d.hashchange=b.extend(d.hashchange,{setup:function(){if(j)return!1;b(h.start)},teardown:function(){if(j)return!1;b(h.stop)}});var p=function(){var e=c(),d=r(n);e!==n?(q(n=e,d),b(a).trigger("hashchange")):
d!==n&&(location.href=location.href.replace(/#.*/,"")+d);l=setTimeout(p,b.fn.hashchange.delay)},d={},l,n=c(),q=f=function(a){return a},r=f;d.start=function(){l||p()};d.stop=function(){l&&clearTimeout(l);l=g};if(a.attachEvent&&!a.addEventListener&&!j){var k,m;d.start=function(){k||(m=(m=b.fn.hashchange.src)&&m+c(),k=b('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){m||q(c());p()}).attr("src",m||"javascript:0").insertAfter("body")[0].contentWindow,e.onpropertychange=function(){try{"title"===
event.propertyName&&(k.document.title=e.title)}catch(a){}})};d.stop=f;r=function(){return c(k.location.href)};q=function(a,d){var c=k.document,f=b.fn.hashchange.domain;a!==d&&(c.title=e.title,c.open(),f&&c.write('<script>document.domain="'+f+'"\x3c/script>'),c.close(),k.location.hash=a)}}h=d})(jQuery,this);
// jquery.rs.fullscreen v1.0.5
(function(c){c.extend(c.rsProto,{_q5:function(){var a=this;a._r5={enabled:!1,keyboardNav:!0,buttonFS:!0,nativeFS:!1,doubleTap:!0};a.st.fullscreen=c.extend({},a._r5,a.st.fullscreen);if(a.st.fullscreen.enabled)a.ev.one("rsBeforeSizeSet",function(){a._s5()})},_s5:function(){var a=this;a._t5=!a.st.keyboardNavEnabled&&a.st.fullscreen.keyboardNav;if(a.st.fullscreen.nativeFS){a._u5={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",
prefix:""};var b=["webkit","moz","o","ms","khtml"];if(!a.isAndroid)if("undefined"!=typeof document.cancelFullScreen)a._u5.supportsFullScreen=!0;else for(var d=0;d<b.length;d++)if(a._u5.prefix=b[d],"undefined"!=typeof document[a._u5.prefix+"CancelFullScreen"]){a._u5.supportsFullScreen=!0;break}a._u5.supportsFullScreen?(a.nativeFS=!0,a._u5.fullScreenEventName=a._u5.prefix+"fullscreenchange"+a.ns,a._u5.isFullScreen=function(){switch(this.prefix){case "":return document.fullScreen;case "webkit":return document.webkitIsFullScreen;
default:return document[this.prefix+"FullScreen"]}},a._u5.requestFullScreen=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},a._u5.cancelFullScreen=function(){return""===this.prefix?document.cancelFullScreen():document[this.prefix+"CancelFullScreen"]()}):a._u5=!1}a.st.fullscreen.buttonFS&&(a._v5=c('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(a._o1).on("click.rs",function(){a.isFullscreen?a.exitFullscreen():a.enterFullscreen()}))},
enterFullscreen:function(a){var b=this;if(b._u5)if(a)b._u5.requestFullScreen(c("html")[0]);else{b._b.on(b._u5.fullScreenEventName,function(){b._u5.isFullScreen()?b.enterFullscreen(!0):b.exitFullscreen(!0)});b._u5.requestFullScreen(c("html")[0]);return}if(!b._w5){b._w5=!0;b._b.on("keyup"+b.ns+"fullscreen",function(a){27===a.keyCode&&b.exitFullscreen()});b._t5&&b._b2();a=c(window);b._x5=a.scrollTop();b._y5=a.scrollLeft();b._z5=c("html").attr("style");b._a6=c("body").attr("style");b._b6=b.slider.attr("style");
c("body, html").css({overflow:"hidden",height:"100%",width:"100%",margin:"0",padding:"0"});b.slider.addClass("rsFullscreen");var d;for(d=0;d<b.numSlides;d++)a=b.slides[d],a.isRendered=!1,a.bigImage&&(a.isBig=!0,a.isMedLoaded=a.isLoaded,a.isMedLoading=a.isLoading,a.medImage=a.image,a.medIW=a.iW,a.medIH=a.iH,a.slideId=-99,a.bigImage!==a.medImage&&(a.sizeType="big"),a.isLoaded=a.isBigLoaded,a.isLoading=!1,a.image=a.bigImage,a.images[0]=a.bigImage,a.iW=a.bigIW,a.iH=a.bigIH,a.isAppended=a.contentAdded=
!1,b._c6(a));b.isFullscreen=!0;b._w5=!1;b.updateSliderSize();b.ev.trigger("rsEnterFullscreen")}},exitFullscreen:function(a){var b=this;if(b._u5){if(!a){b._u5.cancelFullScreen(c("html")[0]);return}b._b.off(b._u5.fullScreenEventName)}if(!b._w5){b._w5=!0;b._b.off("keyup"+b.ns+"fullscreen");b._t5&&b._b.off("keydown"+b.ns);c("html").attr("style",b._z5||"");c("body").attr("style",b._a6||"");var d;for(d=0;d<b.numSlides;d++)a=b.slides[d],a.isRendered=!1,a.bigImage&&(a.isBig=!1,a.slideId=-99,a.isBigLoaded=
a.isLoaded,a.isBigLoading=a.isLoading,a.bigImage=a.image,a.bigIW=a.iW,a.bigIH=a.iH,a.isLoaded=a.isMedLoaded,a.isLoading=!1,a.image=a.medImage,a.images[0]=a.medImage,a.iW=a.medIW,a.iH=a.medIH,a.isAppended=a.contentAdded=!1,b._c6(a,!0),a.bigImage!==a.medImage&&(a.sizeType="med"));b.isFullscreen=!1;a=c(window);a.scrollTop(b._x5);a.scrollLeft(b._y5);b._w5=!1;b.slider.removeClass("rsFullscreen");b.updateSliderSize();setTimeout(function(){b.updateSliderSize()},1);b.ev.trigger("rsExitFullscreen")}},_c6:function(a){var b=
!a.isLoaded&&!a.isLoading?'<a class="rsImg rsMainSlideImage" href="'+a.image+'"></a>':'<img class="rsImg rsMainSlideImage" src="'+a.image+'"/>';a.content.hasClass("rsImg")?a.content=c(b):a.content.find(".rsImg").eq(0).replaceWith(b);!a.isLoaded&&(!a.isLoading&&a.holder)&&a.holder.html(a.content)}});c.rsModules.fullscreen=c.rsProto._q5})(jQuery);
// jquery.rs.global-caption v1.0
(function(b){b.extend(b.rsProto,{_d6:function(){var a=this;a.st.globalCaption&&(a.ev.on("rsAfterInit",function(){a.globalCaption=b('<div class="rsGCaption"></div>').appendTo(!a.st.globalCaptionInside?a.slider:a._e1);a.globalCaption.html(a.currSlide.caption)}),a.ev.on("rsBeforeAnimStart",function(){a.globalCaption.html(a.currSlide.caption)}))}});b.rsModules.globalCaption=b.rsProto._d6})(jQuery);
// jquery.rs.nav-auto-hide v1.0
(function(b){b.extend(b.rsProto,{_e6:function(){var a=this;if(a.st.navAutoHide&&!a.hasTouch)a.ev.one("rsAfterInit",function(){if(a._k5){a._k5.addClass("rsHidden");var b=a.slider;b.one("mousemove.controlnav",function(){a._k5.removeClass("rsHidden")});b.hover(function(){a._k5.removeClass("rsHidden")},function(){a._k5.addClass("rsHidden")})}})}});b.rsModules.autoHideNav=b.rsProto._e6})(jQuery);
// jquery.rs.tabs v1.0.2
(function(e){e.extend(e.rsProto,{_f6:function(){var a=this;"tabs"===a.st.controlNavigation&&(a.ev.on("rsBeforeParseNode",function(a,d,b){d=e(d);b.thumbnail=d.find(".rsTmb").remove();b.thumbnail.length?b.thumbnail=e(document.createElement("div")).append(b.thumbnail).html():(b.thumbnail=d.attr("data-rsTmb"),b.thumbnail||(b.thumbnail=d.find(".rsImg").attr("data-rsTmb")),b.thumbnail=b.thumbnail?'<img src="'+b.thumbnail+'"/>':"")}),a.ev.one("rsAfterPropsSetup",function(){a._g6()}),a.ev.on("rsOnAppendSlide",
function(c,d,b){b>=a.numSlides?a._k5.append('<div class="rsNavItem rsTab">'+d.thumbnail+"</div>"):a._l5.eq(b).before('<div class="rsNavItem rsTab">'+item.thumbnail+"</div>");a._l5=a._k5.children()}),a.ev.on("rsOnRemoveSlide",function(c,d){var b=a._l5.eq(d);b&&(b.remove(),a._l5=a._k5.children())}),a.ev.on("rsOnUpdateNav",function(){var c=a.currSlideId;a._n5&&a._n5.removeClass("rsNavSelected");c=a._l5.eq(c);c.addClass("rsNavSelected");a._n5=c}))},_g6:function(){var a=this,c;a._j5=!0;c='<div class="rsNav rsTabs">';
for(var d=0;d<a.numSlides;d++)c+='<div class="rsNavItem rsTab">'+a.slides[d].thumbnail+"</div>";c=e(c+"</div>");a._k5=c;a._l5=c.children(".rsNavItem");a.slider.append(c);a._k5.click(function(b){b=e(b.target).closest(".rsNavItem");b.length&&a.goTo(b.index())})}});e.rsModules.tabs=e.rsProto._f6})(jQuery);
// jquery.rs.thumbnails v1.0.5
(function(f){f.extend(f.rsProto,{_h6:function(){var a=this;"thumbnails"===a.st.controlNavigation&&(a._i6={drag:!0,touch:!0,orientation:"horizontal",navigation:!0,arrows:!0,arrowLeft:null,arrowRight:null,spacing:4,arrowsAutoHide:!1,appendSpan:!1,transitionSpeed:600,autoCenter:!0,fitInViewport:!0,firstMargin:!0,paddingTop:0,paddingBottom:0},a.st.thumbs=f.extend({},a._i6,a.st.thumbs),a._j6=!0,!1===a.st.thumbs.firstMargin?a.st.thumbs.firstMargin=0:!0===a.st.thumbs.firstMargin&&(a.st.thumbs.firstMargin=
a.st.thumbs.spacing),a.ev.on("rsBeforeParseNode",function(a,c,b){c=f(c);b.thumbnail=c.find(".rsTmb").remove();b.thumbnail.length?b.thumbnail=f(document.createElement("div")).append(b.thumbnail).html():(b.thumbnail=c.attr("data-rsTmb"),b.thumbnail||(b.thumbnail=c.find(".rsImg").attr("data-rsTmb")),b.thumbnail=b.thumbnail?'<img src="'+b.thumbnail+'"/>':"")}),a.ev.one("rsAfterPropsSetup",function(){a._k6()}),a._n5=null,a.ev.on("rsOnUpdateNav",function(){var e=f(a._l5[a.currSlideId]);e!==a._n5&&(a._n5&&
(a._n5.removeClass("rsNavSelected"),a._n5=null),a._l6&&a._m6(a.currSlideId),a._n5=e.addClass("rsNavSelected"))}),a.ev.on("rsOnAppendSlide",function(e,c,b){e="<div"+a._n6+' class="rsNavItem rsThumb">'+a._o6+c.thumbnail+"</div>";b>=a.numSlides?a._s3.append(e):a._l5.eq(b).before(e);a._l5=a._s3.children();a.updateThumbsSize()}),a.ev.on("rsOnRemoveSlide",function(e,c){var b=a._l5.eq(c);b&&(b.remove(),a._l5=a._s3.children(),a.updateThumbsSize())}))},_k6:function(){var a=this,e="rsThumbs",c=a.st.thumbs,
b="",g,d,h=c.spacing;a._j5=!0;a._e3="vertical"===c.orientation?!1:!0;a._n6=g=h?' style="margin-'+(a._e3?"right":"bottom")+":"+h+'px;"':"";a._i3=0;a._p6=!1;a._m5=!1;a._l6=!1;a._q6=c.arrows&&c.navigation;d=a._e3?"Hor":"Ver";a.slider.addClass("rsWithThumbs rsWithThumbs"+d);b+='<div class="rsNav rsThumbs rsThumbs'+d+'"><div class="'+e+'Container">';a._o6=c.appendSpan?'<span class="thumbIco"></span>':"";for(var j=0;j<a.numSlides;j++)d=a.slides[j],b+="<div"+g+' class="rsNavItem rsThumb">'+d.thumbnail+a._o6+
"</div>";b=f(b+"</div></div>");g={};c.paddingTop&&(g[a._e3?"paddingTop":"paddingLeft"]=c.paddingTop);c.paddingBottom&&(g[a._e3?"paddingBottom":"paddingRight"]=c.paddingBottom);b.css(g);a._s3=f(b).find("."+e+"Container");a._q6&&(e+="Arrow",c.arrowLeft?a._r6=c.arrowLeft:(a._r6=f('<div class="'+e+" "+e+'Left"><div class="'+e+'Icn"></div></div>'),b.append(a._r6)),c.arrowRight?a._s6=c.arrowRight:(a._s6=f('<div class="'+e+" "+e+'Right"><div class="'+e+'Icn"></div></div>'),b.append(a._s6)),a._r6.click(function(){var b=
(Math.floor(a._i3/a._t6)+a._u6)*a._t6;a._a4(b>a._n3?a._n3:b)}),a._s6.click(function(){var b=(Math.floor(a._i3/a._t6)-a._u6)*a._t6;a._a4(b<a._o3?a._o3:b)}),c.arrowsAutoHide&&!a.hasTouch&&(a._r6.css("opacity",0),a._s6.css("opacity",0),b.one("mousemove.rsarrowshover",function(){a._l6&&(a._r6.css("opacity",1),a._s6.css("opacity",1))}),b.hover(function(){a._l6&&(a._r6.css("opacity",1),a._s6.css("opacity",1))},function(){a._l6&&(a._r6.css("opacity",0),a._s6.css("opacity",0))})));a._k5=b;a._l5=a._s3.children();
a.msEnabled&&a.st.thumbs.navigation&&a._s3.css("-ms-touch-action",a._e3?"pan-y":"pan-x");a.slider.append(b);a._w3=!0;a._v6=h;c.navigation&&a._e&&a._s3.css(a._g+"transition-property",a._g+"transform");a._k5.on("click.rs",".rsNavItem",function(){a._m5||a.goTo(f(this).index())});a.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs",function(){a._w6=a._e3?a._c4:a._b4;a.updateThumbsSize(!0)})},updateThumbsSize:function(){var a=this,e=a._l5.first(),c={},b=a._l5.length;a._t6=(a._e3?e.outerWidth():
e.outerHeight())+a._v6;a._y3=b*a._t6-a._v6;c[a._e3?"width":"height"]=a._y3+a._v6;a._z3=a._e3?a._k5.width():a._k5.height();a._o3=-(a._y3-a._z3)-a.st.thumbs.firstMargin;a._n3=a.st.thumbs.firstMargin;a._u6=Math.floor(a._z3/a._t6);if(a._y3<a._z3)a.st.thumbs.autoCenter&&a._q3((a._z3-a._y3)/2),a.st.thumbs.arrows&&a._r6&&(a._r6.addClass("rsThumbsArrowDisabled"),a._s6.addClass("rsThumbsArrowDisabled")),a._l6=!1,a._m5=!1,a._k5.off(a._j1);else if(a.st.thumbs.navigation&&!a._l6&&(a._l6=!0,!a.hasTouch&&a.st.thumbs.drag||
a.hasTouch&&a.st.thumbs.touch))a._m5=!0,a._k5.on(a._j1,function(b){a._g2(b,!0)});a._e&&(c[a._g+"transition-duration"]="0ms");a._s3.css(c);if(a._w3&&(a.isFullscreen||a.st.thumbs.fitInViewport))a._e3?a._c4=a._w6-a._k5.outerHeight():a._b4=a._w6-a._k5.outerWidth()},setThumbsOrientation:function(a,e){this._w3&&(this.st.thumbs.orientation=a,this._k5.remove(),this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"),this._k6(),this._k5.off(this._j1),e||this.updateSliderSize(!0))},_q3:function(a){this._i3=
a;this._e?this._s3.css(this._x1,this._y1+(this._e3?a+this._z1+0:0+this._z1+a)+this._a2):this._s3.css(this._e3?this._x1:this._w1,a)},_a4:function(a,e,c,b,g){var d=this;if(d._l6){e||(e=d.st.thumbs.transitionSpeed);d._i3=a;d._x6&&clearTimeout(d._x6);d._p6&&(d._e||d._s3.stop(),c=!0);var h={};d._p6=!0;d._e?(h[d._g+"transition-duration"]=e+"ms",h[d._g+"transition-timing-function"]=c?f.rsCSS3Easing[d.st.easeOut]:f.rsCSS3Easing[d.st.easeInOut],d._s3.css(h),d._q3(a)):(h[d._e3?d._x1:d._w1]=a+"px",d._s3.animate(h,
e,c?"easeOutCubic":d.st.easeInOut));b&&(d._i3=b);d._y6();d._x6=setTimeout(function(){d._p6=!1;g&&(d._a4(b,g,!0),g=null)},e)}},_y6:function(){this._q6&&(this._i3===this._n3?this._r6.addClass("rsThumbsArrowDisabled"):this._r6.removeClass("rsThumbsArrowDisabled"),this._i3===this._o3?this._s6.addClass("rsThumbsArrowDisabled"):this._s6.removeClass("rsThumbsArrowDisabled"))},_m6:function(a,e){var c=0,b,f=a*this._t6+2*this._t6-this._v6+this._n3,d=Math.floor(this._i3/this._t6);this._l6&&(this._j6&&(e=!0,
this._j6=!1),f+this._i3>this._z3?(a===this.numSlides-1&&(c=1),d=-a+this._u6-2+c,b=d*this._t6+this._z3%this._t6+this._v6-this._n3):0!==a?(a-1)*this._t6<=-this._i3+this._n3&&a-1<=this.numSlides-this._u6&&(b=(-a+1)*this._t6+this._n3):b=this._n3,b!==this._i3&&(c=void 0===b?this._i3:b,c>this._n3?this._q3(this._n3):c<this._o3?this._q3(this._o3):void 0!==b&&(e?this._q3(b):this._a4(b))),this._y6())}});f.rsModules.thumbnails=f.rsProto._h6})(jQuery);
// jquery.rs.video v1.1.1
(function(f){f.extend(f.rsProto,{_z6:function(){var a=this;a._a7={autoHideArrows:!0,autoHideControlNav:!1,autoHideBlocks:!1,autoHideCaption:!1,disableCSS3inFF:!0,youTubeCode:'<iframe src="http://www.youtube.com/embed/%id%?rel=1&autoplay=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>',vimeoCode:'<iframe src="http://player.vimeo.com/video/%id%?byline=0&amp;portrait=0&amp;autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'};a.st.video=
f.extend({},a._a7,a.st.video);a.ev.on("rsBeforeSizeSet",function(){a._b7&&setTimeout(function(){var b=a._r1,b=b.hasClass("rsVideoContainer")?b:b.find(".rsVideoContainer");a._c7&&a._c7.css({width:b.width(),height:b.height()})},32)});var c=a._a.mozilla;a.ev.on("rsAfterParseNode",function(b,e,d){b=f(e);if(d.videoURL){a.st.video.disableCSS3inFF&&c&&(a._e=a._f=!1);e=f('<div class="rsVideoContainer"></div>');var g=f('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');
b.hasClass("rsImg")?d.content=e.append(b).append(g):d.content.find(".rsImg").wrap(e).after(g)}});a.ev.on("rsAfterSlideChange",function(){a.stopVideo()})},toggleVideo:function(){return this._b7?this.stopVideo():this.playVideo()},playVideo:function(){var a=this;if(!a._b7){var c=a.currSlide;if(!c.videoURL)return!1;var b=a._d7=c.content,c=c.videoURL,e,d;c.match(/youtu\.be/i)||c.match(/youtube\.com/i)?(d=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,(d=c.match(d))&&11==
d[7].length&&(e=d[7]),void 0!==e&&(a._c7=a.st.video.youTubeCode.replace("%id%",e))):c.match(/vimeo\.com/i)&&(d=/(www\.)?vimeo.com\/(\d+)($|\/)/,(d=c.match(d))&&(e=d[2]),void 0!==e&&(a._c7=a.st.video.vimeoCode.replace("%id%",e)));a.videoObj=f(a._c7);a.ev.trigger("rsOnCreateVideoElement",[c]);a.videoObj.length&&(a._c7=f('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'),a._c7.find(".rsPreloader").after(a.videoObj),
b=b.hasClass("rsVideoContainer")?b:b.find(".rsVideoContainer"),a._c7.css({width:b.width(),height:b.height()}).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv",function(b){a.stopVideo();b.preventDefault();b.stopPropagation();return!1}),b.append(a._c7),a.isIPAD&&b.addClass("rsIOSVideo"),a._e7(!1),setTimeout(function(){a._c7.addClass("rsVideoActive")},10),a.ev.trigger("rsVideoPlay"),a._b7=!0);return!0}return!1},stopVideo:function(){var a=this;return a._b7?(a.isIPAD&&a.slider.find(".rsCloseVideoBtn").remove(),
a._e7(!0),setTimeout(function(){a.ev.trigger("rsOnDestroyVideoElement",[a.videoObj]);var c=a._c7.find("iframe");if(c.length)try{c.attr("src","")}catch(b){}a._c7.remove();a._c7=null},16),a.ev.trigger("rsVideoStop"),a._b7=!1,!0):!1},_e7:function(a){var c=[],b=this.st.video;b.autoHideArrows&&(this._c2&&(c.push(this._c2,this._d2),this._e2=!a),this._v5&&c.push(this._v5));b.autoHideControlNav&&this._k5&&c.push(this._k5);b.autoHideBlocks&&this.currSlide.animBlocks&&c.push(this.currSlide.animBlocks);b.autoHideCaption&&
this.globalCaption&&c.push(this.globalCaption);if(c.length)for(b=0;b<c.length;b++)a?c[b].removeClass("rsHidden"):c[b].addClass("rsHidden")}});f.rsModules.video=f.rsProto._z6})(jQuery);
// jquery.rs.visible-nearby v1.0.2
(function(d){d.rsProto._f7=function(){var a=this;a.st.visibleNearby&&a.st.visibleNearby.enabled&&(a._g7={enabled:!0,centerArea:0.6,center:!0,breakpoint:0,breakpointCenterArea:0.8,hiddenOverflow:!0,navigateByCenterClick:!1},a.st.visibleNearby=d.extend({},a._g7,a.st.visibleNearby),a.ev.one("rsAfterPropsSetup",function(){a._h7=a._e1.css("overflow","visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent();a.st.visibleNearby.hiddenOverflow||a._h7.css("overflow","visible");a._o1=a.st.controlsInside?
a._h7:a.slider}),a.ev.on("rsAfterSizePropSet",function(){var b,c=a.st.visibleNearby;b=c.breakpoint&&a.width<c.breakpoint?c.breakpointCenterArea:c.centerArea;a._h?(a._b4*=b,a._h7.css({height:a._c4,width:a._b4/b}),a._d=a._b4*(1-b)/2/b):(a._c4*=b,a._h7.css({height:a._c4/b,width:a._b4}),a._d=a._c4*(1-b)/2/b);c.navigateByCenterClick||(a._q=a._h?a._b4:a._c4);c.center&&a._e1.css("margin-"+(a._h?"left":"top"),a._d)}))};d.rsModules.visibleNearby=d.rsProto._f7})(jQuery);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright В© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright В© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*
	jQuery zAccordion Plugin v2.1.0
	Copyright (c) 2010 - 2012 Nate Armagost, http://www.armagost.com/zaccordion
	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function ($) {
	"use strict";
	$.fn.zAccordion = function (method) {
		var defaults = {
			timeout: 6000, /* Time between each slide (in ms). */
			width: null, /* Width of the container. This option is required. */
			slideWidth: null, /* Width of each slide in pixels or width of each slide compared to a 100% container. */
			tabWidth: null, /* Width of each slide's "tab" (when clicked it opens the slide) or width of each tab compared to a 100% container. */
			height: null, /* Height of the container. This option is required. */
			startingSlide: 0, /* Zero-based index of which slide should be displayed. */
			slideClass: null, /* Class prefix of each slide. If left null, no classes will be set. */
			easing: null, /* Easing method. */
			speed: 1200, /* Speed of the slide transition (in ms). */
			auto: true, /* Whether or not the slideshow should play automatically. */
			trigger: "click", /* Event type that will bind to the "tab" (click, mouseover, etc.). */
			pause: true, /* Pause on hover. */
			invert: false, /* Whether or not to invert the slideshow, so the last slide stays in the same position, rather than the first slide. */
			animationStart: function () {}, /* Function called when animation starts. */
			animationComplete: function () {}, /* Function called when animation completes. */
			buildComplete: function () {}, /* Function called after the accordion is finished building. */
			errors: false /* Display zAccordion specific errors. */
		}, helpers = {
			displayError: function (msg, e) {
				if (window.console && e) {
					console.log("zAccordion: " + msg + ".");
				}
			},
			findChildElements: function (t) { /* Function to find the number of child elements. */
				if (t.children().get(0) === undefined) {
					return false;
				} else {
					return true;
				}
			},
			getNext: function (s, c) { /* Returns the 0-index of the next slide. */
				var next = c + 1;
				if (next >= s) {
					next = 0;
				}
				return next;
			},
			fixHeight: function (o) {
				if ((o.height === null) && (o.slideHeight !== undefined)) { /* Removed slideHeight. */
					o.height = o.slideHeight;
					return true;
				} else if ((o.height !== null) && (o.slideHeight === undefined)) {
					return true;
				} else if ((o.height === null) && (o.slideHeight === undefined)) {
					return false;
				}
			},
			getUnits: function (o) {
				if (o !== null) {
					if (o.toString().indexOf("%") > -1) {
						return "%";
					} else if (o.toString().indexOf("px") > -1) {
						return "px";
					} else {
						return "px";
					}
				}
			},
			toInteger: function (o) {
				if (o !== null) {
					return parseInt(o, 10);
				}
			},
			sizeAccordion: function (t, o) { /* Calculate the sizes of the tabs and slides */
				if ((o.width === undefined) && (o.slideWidth === undefined) && (o.tabWidth === undefined)) {
					/* Nothing is defined. */
					helpers.displayError("width must be defined", o.errors);
					return false;
				} else if ((o.width !== undefined) && (o.slideWidth === undefined) && (o.tabWidth === undefined)) {
					/* Only width is defined. */
					/* Check for errors. */
					if ((o.width > 100) && (o.widthUnits === "%")) { /* Check for a width percentage of over 100. */
						helpers.displayError("width cannot be over 100%", o.errors);
						return false;
					} else {
						o.slideWidthUnits = o.widthUnits;
						o.tabWidthUnits = o.widthUnits;
						if (o.widthUnits === "%") { /* Percentages. */
							o.tabWidth = 100 / (t.children().size() + 1); /* Use 100% instead of the defined width. */
							o.slideWidth = 100 - ((t.children().size() - 1) * o.tabWidth);
						} else { /* Pixels. */
							o.tabWidth = o.width / (t.children().size() + 1);
							o.slideWidth = o.width - ((t.children().size() - 1) * o.tabWidth);
						}
						return true;
					}
				} else if ((o.width === undefined) && (o.slideWidth !== undefined) && (o.tabWidth === undefined)) {
					/* Only slideWidth is defined. */
					helpers.displayError("width must be defined", o.errors);
					return false;
				} else if ((o.width === undefined) && (o.slideWidth === undefined) && (o.tabWidth !== undefined)) {
					/* Only tabWidth is defined. */
					helpers.displayError("width must be defined", o.errors);
					return false;
				} else if ((o.width !== undefined) && (o.slideWidth === undefined) && (o.tabWidth !== undefined)) {
					/* width and tabWidth defined. */
					/* Check for errors */
					if (o.widthUnits !== o.tabWidthUnits) {
						helpers.displayError("Units do not match", o.errors);
						return false;
					} else if ((o.width > 100) && (o.widthUnits === "%")) {
						helpers.displayError("width cannot be over 100%", o.errors);
						return false;
					} else if ((((t.children().size() * o.tabWidth) > 100) && (o.widthUnits === "%")) || (((t.children().size() * o.tabWidth) > o.width) && (o.widthUnits === "px"))) {
						helpers.displayError("tabWidth too large for accordion", o.errors);
						return false;
					} else {
						/* Need to define the remaining slideWidth */
						o.slideWidthUnits = o.widthUnits; /* Set the units to be consistent */
						if (o.widthUnits === "%") { /* Percentages */
							o.slideWidth = 100 - ((t.children().size() - 1) * o.tabWidth); /* Use 100% instead of the defined width */
						} else { /* Pixels */
							o.slideWidth = o.width - ((t.children().size() - 1) * o.tabWidth);
						}
						return true;
					}
				} else if ((o.width !== undefined) && (o.slideWidth !== undefined) && (o.tabWidth === undefined)) {
					/* width and slideWidth defined. */
					/* Check for errors. */
					if (o.widthUnits !== o.slideWidthUnits) {
						helpers.displayError("Units do not match", o.errors);
						return false;
					} else if ((o.width > 100) && (o.widthUnits === "%")) {
						helpers.displayError("width cannot be over 100%", o.errors);
						return false;
					} else if (o.slideWidth >= o.width) {
						helpers.displayError("slideWidth cannot be greater than or equal to width", o.errors);
						return false;
					} else if ((((t.children().size() * o.slideWidth) < 100) && (o.widthUnits === "%")) || (((t.children().size() * o.slideWidth) < o.width) && (o.widthUnits === "px"))) { /* Prevents gaps in the accordion. For example, a slider with 4 slides at 150 pixels wide. 4 * 150 = 600. Needs to fill an 800px space. */
						helpers.displayError("slideWidth too small for accordion", o.errors);
						return false;
					} else {
						/* Need to define the remaining tabWidth. */
						o.tabWidthUnits = o.widthUnits; /* Set the units to be consistent. */
						if (o.widthUnits === "%") { /* Percentages. */
							o.tabWidth = (100 - o.slideWidth) / (t.children().size() - 1); /* Use 100% instead of the defined width. */
						} else { /* Pixels. */
							o.tabWidth = (o.width - o.slideWidth) / (t.children().size() - 1);
						}
						return true;
					}
				} else if ((o.width === undefined) && (o.slideWidth !== undefined) && (o.tabWidth !== undefined)) {
					/* slideWidth and tabWidth defined. */
					helpers.displayError("width must be defined", o.errors);
					return false;
				} else if ((o.width !== undefined) && (o.slideWidth !== undefined) && (o.tabWidth !== undefined)) {
					/* width, slideWidth, and tabWidth defined. */
					helpers.displayError("At maximum two of three attributes (width, slideWidth, and tabWidth) should be defined", o.errors);
					return false;
				}
			},
			timer: function (obj) {
				var n = obj.data("next") + 1;
				if (obj.data("pause") && obj.data("inside") && obj.data("auto")) {
					try {
						clearTimeout(obj.data("interval"));
					} catch (e) {}
				} else if (obj.data("pause") && !obj.data("inside") && obj.data("auto")) {
					try {
						clearTimeout(obj.data("interval"));
					} catch (f) {}
					obj.data("interval", setTimeout(function () {
						obj.children(obj.children().get(0).tagName + ":nth-child(" + n + ")").trigger(obj.data("trigger"));
					}, obj.data("timeout")));
				} else if (!obj.data("pause") && obj.data("auto")) {
					try {
						clearTimeout(obj.data("interval"));
					} catch (g) {}
					obj.data("interval", setTimeout(function () {
						obj.children(obj.children().get(0).tagName + ":nth-child(" + n + ")").trigger(obj.data("trigger"));
					}, obj.data("timeout")));
				}
			}
		}, methods = {
			init: function (options) {
				var f, fixattr = ["slideWidth", "tabWidth", "startingSlide", "slideClass", "animationStart", "animationComplete", "buildComplete"];
				for (f = 0; f < fixattr.length; f += 1) {
					if ($(this).data(fixattr[f].toLowerCase()) !== undefined) {
						$(this).data(fixattr[f], $(this).data(fixattr[f].toLowerCase()));
						$(this).removeData(fixattr[f].toLowerCase());
					}
				}
				/* Add new properties to options. */
				options = $.extend(defaults, options, $(this).data());
				/* Check for a height */
				if (this.length <= 0) {
					helpers.displayError("Selector does not exist", options.errors);
					return false;
				} else if (!helpers.fixHeight(options)) {
					helpers.displayError("height must be defined", options.errors);
					return false;
				} else if (!helpers.findChildElements(this)) {
					helpers.displayError("No child elements available", options.errors);
					return false;
				} else if (options.speed > options.timeout) {
					helpers.displayError("Speed cannot be greater than timeout", options.errors);
					return false;
				} else {
					/* Get the correct units */
					options.heightUnits = helpers.getUnits(options.height);
					options.height = helpers.toInteger(options.height);
					options.widthUnits = helpers.getUnits(options.width);
					options.width = helpers.toInteger(options.width);
					options.slideWidthUnits = helpers.getUnits(options.slideWidth);
					options.slideWidth = helpers.toInteger(options.slideWidth);
					options.tabWidthUnits = helpers.getUnits(options.tabWidth);
					options.tabWidth = helpers.toInteger(options.tabWidth);
					if (options.slideClass !== null) {
						options.slideOpenClass = options.slideClass + "-open"; /* Class of open slides. */
						options.slideClosedClass = options.slideClass + "-closed"; /* Class of closed slides. */
						options.slidePreviousClass = options.slideClass + "-previous"; /* Class of the slide that was previously open before a new one was triggered. */
					}
					/* Check for inconsistencies in size. */
					if (!helpers.sizeAccordion(this, options)) {
						return false;
					} else {
						return this.each(function () {
							var o = options, obj = $(this), originals = [], /* inside = false, */ animate, tag, childtag, size, previous = -1; /* o: all of the options (defaults, user options, settings) */
							animate = o.slideWidth - o.tabWidth; /* Number of pixels yet do be displayed on a hidden slide. */
							tag = obj.get(0).tagName; /* Tag type of the container. */
							childtag = obj.children().get(0).tagName; /* Tag type of the children. */
							size = obj.children().size(); /* Number of children. */
							obj.data($.extend({}, {
								auto: o.auto,
								interval: null,
								timeout: o.timeout,
								trigger: o.trigger,
								current: o.startingSlide,
								previous: previous,
								next: helpers.getNext(size, o.startingSlide),
								slideClass: o.slideClass, /* Keeping this around right now only for the sake of the destroy function. */
								inside: false,
								pause: o.pause
							}));
							if (o.heightUnits === "%") {
								o.height = (obj.parent().get(0).tagName === "BODY") ? o.height * 0.01 * $(window).height() : o.height * 0.01 * obj.parent().height();
								o.heightUnits = "px"; /* Need to revert to pixels because CSS 100% height does not cooperate. */
							}
							/* Loop through each of the slides and set the layers. */
							obj.children().each(function (childindex) {
								var zindex, xpos, y;
								xpos = o.invert ? xpos = ((size - 1) * o.tabWidth) - (childindex * o.tabWidth) : childindex * o.tabWidth; /* Used for the position of each slide. */
								originals[childindex] = xpos; /* px position of each open slide. */
								zindex = o.invert ? ((size - 1) - childindex) * 10 : childindex * 10; /* Increase each slide's z-index by 10 so they sit on top of each other. */
								if (o.slideClass !== null) {
									$(this).addClass(o.slideClass); /* Add the slide class to each of the slides. */
								}
								$(this).css({
									"top": 0,
									"z-index": zindex,
									"margin": 0,
									"padding": 0,
									"float": "left",
									"display": "block",
									"position": "absolute",
									"overflow": "hidden",
									"width": o.slideWidth + o.widthUnits,
									"height": o.height + o.heightUnits
								});
								if (childtag === "LI") {
									$(this).css({
										"text-indent": 0
									});
								}
								if (o.invert) {
									$(this).css({ "right": xpos + o.widthUnits, "float": "right" });
								} else {
									$(this).css({ "left": xpos + o.widthUnits, "float": "left" });
								}
								if (childindex === (o.startingSlide)) {
									$(this).css("cursor", "default");
									if (o.slideClass !== null) {
										$(this).addClass(o.slideOpenClass);
									}
								} else {
									$(this).css("cursor", "pointer");
									if (o.slideClass !== null) {
										$(this).addClass(o.slideClosedClass);
									}
									if ((childindex > (o.startingSlide)) && (!o.invert)) {
										y = childindex + 1;
										obj.children(childtag + ":nth-child(" + y + ")").css({
											left: originals[y - 1] + animate + o.widthUnits
										});
									} else if ((childindex < (o.startingSlide)) && (o.invert)) {
										y = childindex + 1;
										obj.children(childtag + ":nth-child(" + y + ")").css({
											right: originals[y - 1] + animate + o.widthUnits
										});
									}
								}
							});
							/* Modify the CSS of the main container. */
							obj.css({
								"display": "block",
								"height": o.height + o.heightUnits,
								"width": o.width + o.widthUnits,
								"padding": 0,
								"position": "relative",
								"overflow": "hidden"
							});
							/* If the container is a list, get rid of any bullets. */
							if ((tag === "UL") || (tag === "OL")) {
								obj.css({
									"list-style": "none"
								});
							}
							obj.hover(function () {
								obj.data("inside", true);
								/* If pause on hover, clear the timer. */
								if (obj.data("pause")) {
									try {
										clearTimeout(obj.data("interval"));
									} catch (e) {}
								}
							}, function () {
								obj.data("inside", false);
								/* Restart the accordion when user moves mouse out of the slides. */
								if (obj.data("auto") && obj.data("pause")) {
									helpers.timer(obj);
								}
							});
							/* Set up the listener to change slides when triggered. */
							obj.children().bind(o.trigger, function () {
								/* Don't do anything if the slide is already open. */
								if ($(this).index() !== obj.data("current")) {
									var i, j, p, c; /* p and c are 1-indexes */
									p = previous + 1; /* Using the 1-index for nth selector. */
									c = obj.data("current") + 1; /* Using the 1-index for nth selector. */
									if ((p !== 0) && (o.slideClass !== null)) {
										obj.children(childtag + ":nth-child(" + p + ")").removeClass(o.slidePreviousClass); /* Remove class for previous slide if previous slide exists. */
									}
									obj.children(childtag + ":nth-child(" + c + ")");
									if (o.slideClass !== null) {
										obj.children(childtag + ":nth-child(" + c + ")").addClass(o.slidePreviousClass);
									}
									previous = obj.data("current");
									obj.data("previous", obj.data("current"));
									p = previous;
									p += 1;
									obj.data("current", $(this).index());
									c = obj.data("current");
									c += 1;
									obj.children().css("cursor", "pointer");
									$(this).css("cursor", "default"); /* Add the open class to the slide tab that was just triggered */
									if (o.slideClass !== null) {
										obj.children().addClass(o.slideClosedClass).removeClass(o.slideOpenClass);
										$(this).addClass(o.slideOpenClass).removeClass(o.slideClosedClass); /* Add the open class to the slide tab that was just triggered */
									}
									obj.data("next", helpers.getNext(size, $(this).index()));
									/* If the slide is not open... */
									helpers.timer(obj);
									o.animationStart();
									if (o.invert) {
										obj.children(childtag + ":nth-child(" + c + ")").stop().animate({ right: originals[obj.data("current")] + o.widthUnits }, o.speed, o.easing, o.animationComplete);
									} else {
										obj.children(childtag + ":nth-child(" + c + ")").stop().animate({ left: originals[obj.data("current")] + o.widthUnits }, o.speed, o.easing, o.animationComplete);
									}
									/* Closing other slides. */
									for (i = 0; i < size; i += 1) {
										j = i + 1;
										if (i < obj.data("current")) {
											if (o.invert) {
												obj.children(childtag + ":nth-child(" + j + ")").stop().animate({
													right: o.width - (j * o.tabWidth) + o.widthUnits
												}, o.speed, o.easing);
											} else {
												obj.children(childtag + ":nth-child(" + j + ")").stop().animate({
													left: originals[i] + o.widthUnits
												}, o.speed, o.easing);
											}
										}
										if (i > obj.data("current")) {
											if (o.invert) {
												obj.children(childtag + ":nth-child(" + j + ")").stop().animate({
													right: (size - j) * o.tabWidth + o.widthUnits
												}, o.speed, o.easing);
											} else {
												obj.children(childtag + ":nth-child(" + j + ")").stop().animate({
													left: originals[i] + animate + o.widthUnits
												}, o.speed, o.easing);
											}
										}
									}
									return false; /* This is important. If a visible link is clicked within the slide, it will open the slide instead of redirecting the link. */
								}
							});
							/* Set up the original timer. */
							if (obj.data("auto")) {
								helpers.timer(obj);
							}
							o.buildComplete();
						});
					}
				}
			},
			stop: function () { /* This will stop the accordion unless the slides are clicked, however, it will not resume the autoplay. */
				if ($(this).data("auto")) {
					clearTimeout($(this).data("interval"));
					$(this).data("auto", false);
				}
			},
			start: function () { /* This will start the accordion back up if it has been stopped. */
				if (!$(this).data("auto")) {
					var n = $(this).data("next") + 1;
					$(this).data("auto", true);
					$(this).children($(this).children().get(0).tagName + ":nth-child(" + n + ")").trigger($(this).data("trigger"));
				}
			},
			trigger: function (x) {
				if ((x >= $(this).children().size()) || (x < 0)) { /* If the triggered slide is out of range, trigger the first slide. */
					x = 0;
				}
				x += 1; /* Use nth-child to trigger slide. */
				$(this).children($(this).children().get(0).tagName + ":nth-child(" + x + ")").trigger($(this).data("trigger"));
			},
			destroy: function (o) {
				var removestyle, removeclasses, prefix = $(this).data("slideClass");
				if (o !== undefined) {
					removestyle = (o.removeStyleAttr !== undefined) ? o.removeStyleAttr : true;
					removeclasses = (o.removeClasses !== undefined) ? o.removeClasses : false;
				}
				clearTimeout($(this).data("interval"));
				$(this).children().stop().unbind($(this).data("trigger"));
				$(this).unbind("mouseenter mouseleave mouseover mouseout");
				if (removestyle) {
					$(this).removeAttr("style");
					$(this).children().removeAttr("style");
				}
				if (removeclasses) {
					$(this).children().removeClass(prefix);
					$(this).children().removeClass(prefix + "-open");
					$(this).children().removeClass(prefix + "-closed");
					$(this).children().removeClass(prefix + "-previous");
				}
				$(this).removeData();
				if (o !== undefined) {
					if (o.destroyComplete !== "undefined") {
						if (typeof(o.destroyComplete.afterDestroy) !== "undefined") {
							o.destroyComplete.afterDestroy();
						}
						if (o.destroyComplete.rebuild) {
							return methods.init.apply(this, [o.destroyComplete.rebuild]);
						}
					}
				}
			}
		};
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === "object" || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error("zAccordion: " + method + " does not exist.");
		}
	};
}(jQuery));
var fakewaffle = ( function ( $, fakewaffle ) {
	'use strict';

	fakewaffle.responsiveTabs = function ( collapseDisplayed ) {

		fakewaffle.currentPosition = 'tabs';

		var tabGroups = $( '.nav-tabs.responsive' );
		var hidden    = '';
		var visible   = '';
		var activeTab = '';

		if ( collapseDisplayed === undefined ) {
			collapseDisplayed = [ 'xs', 'sm' ];
		}

		$.each( collapseDisplayed, function () {
			hidden  += ' hidden-' + this;
			visible += ' visible-' + this;
		} );

		$.each( tabGroups, function () {
			var $tabGroup   = $( this );
			var tabs        = $tabGroup.find( 'li a' );
			var collapseDiv = $( '<div></div>', {
				'class' : 'panel-group responsive' + visible,
				'id'    : 'collapse-' + $tabGroup.attr( 'id' )
			} );

			$.each( tabs, function () {
				var $this          = $( this );
				var oldLinkClass   = $this.attr( 'class' ) === undefined ? '' : $this.attr( 'class' );
				var newLinkClass   = 'accordion-toggle';
				var oldParentClass = $this.parent().attr( 'class' ) === undefined ? '' : $this.parent().attr( 'class' );
				var newParentClass = 'panel panel-default';
				var newHash        = $this.get( 0 ).hash.replace( '#', 'collapse-' );

				if ( oldLinkClass.length > 0 ) {
					newLinkClass += ' ' + oldLinkClass;
				}

				if ( oldParentClass.length > 0 ) {
					oldParentClass = oldParentClass.replace( /\bactive\b/g, '' );
					newParentClass += ' ' + oldParentClass;
					newParentClass = newParentClass.replace( /\s{2,}/g, ' ' );
					newParentClass = newParentClass.replace( /^\s+|\s+$/g, '' );
				}

				if ( $this.parent().hasClass( 'active' ) ) {
					activeTab = '#' + newHash;
				}

				collapseDiv.append(
					$( '<div>' ).attr( 'class', newParentClass ).html(
						$( '<div>' ).attr( 'class', 'panel-heading' ).html(
							$( '<h4>' ).attr( 'class', 'panel-title' ).html(
								$( '<a>', {
									'class'       : newLinkClass,
									'data-toggle' : 'collapse',
									'data-parent' : '#collapse-' + $tabGroup.attr( 'id' ),
									'href'        : '#' + newHash,
									'html'        : $this.html()
								} )
							)
						)
					).append(
						$( '<div>', {
							'id'    : newHash,
							'class' : 'panel-collapse collapse'
						} )
					)
				);
			} );

			$tabGroup.next().after( collapseDiv );
			$tabGroup.addClass( hidden );
			$( '.tab-content.responsive' ).addClass( hidden );
		} );


		fakewaffle.checkResize();
		fakewaffle.bindTabToCollapse();

		if ( activeTab ) {
			$( activeTab ).collapse( 'show' );
		}
	};

	fakewaffle.checkResize = function () {

		if ( $( '.panel-group.responsive' ).is( ':visible' ) === true && fakewaffle.currentPosition === 'tabs' ) {
			fakewaffle.tabToPanel();
			fakewaffle.currentPosition = 'panel';
		} else if ( $( '.panel-group.responsive' ).is( ':visible' ) === false && fakewaffle.currentPosition === 'panel' ) {
			fakewaffle.panelToTab();
			fakewaffle.currentPosition = 'tabs';
		}

	};

	fakewaffle.tabToPanel = function () {

		var tabGroups = $( '.nav-tabs.responsive' );

		$.each( tabGroups, function ( index, tabGroup ) {

			// Find the tab
			var tabContents = $( tabGroup ).next( '.tab-content' ).find( '.tab-pane' );

			$.each( tabContents, function ( index, tabContent ) {
				// Find the id to move the element to
				var destinationId = $( tabContent ).attr( 'id' ).replace ( /^/, '#collapse-' );

				// Convert tab to panel and move to destination
				$( tabContent )
					.removeClass( 'tab-pane' )
					.addClass( 'panel-body' )
					.appendTo( $( destinationId ) );

			} );

		} );

	};

	fakewaffle.panelToTab = function () {

		var panelGroups = $( '.panel-group.responsive' );

		$.each( panelGroups, function ( index, panelGroup ) {

			var destinationId = $( panelGroup ).attr( 'id' ).replace( 'collapse-', '#' );
			var destination   = $( destinationId ).next( '.tab-content' )[ 0 ];

			// Find the panel contents
			var panelContents = $( panelGroup ).find( '.panel-body' );

			// Convert to tab and move to destination
			panelContents
				.removeClass( 'panel-body' )
				.addClass( 'tab-pane' )
				.appendTo( $( destination ) );

		} );

	};

	fakewaffle.bindTabToCollapse = function () {

		var tabs     = $( '.nav-tabs.responsive' ).find( 'li a' );
		var collapse = $( '.panel-group.responsive' ).find( '.panel-collapse' );

		// Toggle the panels when the associated tab is toggled
		tabs.on( 'shown.bs.tab', function ( e ) {
			var $current  = $( e.currentTarget.hash.replace( /#/, '#collapse-' ) );
			$current.collapse( 'show' );

			if ( e.relatedTarget ) {
				var $previous = $( e.relatedTarget.hash.replace( /#/, '#collapse-' ) );
				$previous.collapse( 'hide' );
			}
		} );

		// Toggle the tab when the associated panel is toggled
		collapse.on( 'shown.bs.collapse', function ( e ) {

			// Activate current tabs
			var current = $( e.target ).context.id.replace( /collapse-/g, '#' );
			$( 'a[href="' + current + '"]' ).tab( 'show' );

			// Update the content with active
			var panelGroup = $( e.currentTarget ).closest( '.panel-group.responsive' );
			$( panelGroup ).find( '.panel-body' ).removeClass( 'active' );
			$( e.currentTarget ).find( '.panel-body' ).addClass( 'active' );

		} );
	};

	$( window ).resize( function () {
		fakewaffle.checkResize();
	} );

	return fakewaffle;
}( window.jQuery, fakewaffle || { } ) );

/*! http://tinynav.viljamis.com v1.2 by @viljamis */
(function ($, window, i) {
  $.fn.tinyNav = function (options) {

    // Default settings
    var settings = $.extend({
      'active' : 'selected', // String: Set the "active" class
      'header' : '', // String: Specify text for "header" and show header instead of the active item
      'indent' : '- ', // String: Specify text for indenting sub-items
      'label'  : '' // String: sets the <label> text for the <select> (if not set, no label will be added)
    }, options);

    return this.each(function () {

      // Used for namespacing
      i++;

      var $nav = $(this),
        // Namespacing
        namespace = 'tinynav',
        namespace_i = namespace + i,
        l_namespace_i = '.l_' + namespace_i,
        $select = $('<select/>').attr("id", namespace_i).addClass(namespace + ' ' + namespace_i);

      if ($nav.is('ul,ol')) {

        if (settings.header !== '') {
          $select.append(
            $('<option/>').text(settings.header)
          );
        }

        // Build options
        var options = '';

        $nav
          .addClass('l_' + namespace_i)
          .find('a')
          .each(function () {
            options += '<option value="' + $(this).attr('href') + '">';
            var j;
            for (j = 0; j < $(this).parents('ul, ol').length - 1; j++) {
              options += settings.indent;
            }
            options += $(this).text() + '</option>';
          });

        // Append options into a select
        $select.append(options);

        // Select the active item
        if (!settings.header) {
          $select
            .find(':eq(' + $(l_namespace_i + ' li')
            .index($(l_namespace_i + ' li.' + settings.active)) + ')')
            .attr('selected', true);
        }

        // Change window location
        $select.change(function () {
          window.location.href = $(this).val();
        });

        // Inject select
        $(l_namespace_i).after($select);

        // Inject label
        if (settings.label) {
          $select.before(
            $("<label/>")
              .attr("for", namespace_i)
              .addClass(namespace + '_label ' + namespace_i + '_label')
              .append(settings.label)
          );
        }

      }

    });

  };
})(jQuery, this, 0);

/*! 
 * jQuery Steps v1.1.0 - 09/04/2014
 * Copyright (c) 2014 Rafael Staib (http://www.jquery-steps.com)
 * Licensed under MIT http://www.opensource.org/licenses/MIT
 */
;(function ($, undefined)
{
$.fn.extend({
    _aria: function (name, value)
    {
        return this.attr("aria-" + name, value);
    },

    _removeAria: function (name)
    {
        return this.removeAttr("aria-" + name);
    },

    _enableAria: function (enable)
    {
        return (enable == null || enable) ? 
            this.removeClass("disabled")._aria("disabled", "false") : 
            this.addClass("disabled")._aria("disabled", "true");
    },

    _showAria: function (show)
    {
        return (show == null || show) ? 
            this.show()._aria("hidden", "false") : 
            this.hide()._aria("hidden", "true");
    },

    _selectAria: function (select)
    {
        return (select == null || select) ? 
            this.addClass("current")._aria("selected", "true") : 
            this.removeClass("current")._aria("selected", "false");
    },

    _id: function (id)
    {
        return (id) ? this.attr("id", id) : this.attr("id");
    }
});

if (!String.prototype.format)
{
    String.prototype.format = function()
    {
        var args = (arguments.length === 1 && $.isArray(arguments[0])) ? arguments[0] : arguments;
        var formattedString = this;
        for (var i = 0; i < args.length; i++)
        {
            var pattern = new RegExp("\\{" + i + "\\}", "gm");
            formattedString = formattedString.replace(pattern, args[i]);
        }
        return formattedString;
    };
}

/**
 * A global unique id count.
 *
 * @static
 * @private
 * @property _uniqueId
 * @type Integer
 **/
var _uniqueId = 0;

/**
 * The plugin prefix for cookies.
 *
 * @final
 * @private
 * @property _cookiePrefix
 * @type String
 **/
var _cookiePrefix = "jQu3ry_5teps_St@te_";

/**
 * Suffix for the unique tab id.
 *
 * @final
 * @private
 * @property _tabSuffix
 * @type String
 * @since 0.9.7
 **/
var _tabSuffix = "-t-";

/**
 * Suffix for the unique tabpanel id.
 *
 * @final
 * @private
 * @property _tabpanelSuffix
 * @type String
 * @since 0.9.7
 **/
var _tabpanelSuffix = "-p-";

/**
 * Suffix for the unique title id.
 *
 * @final
 * @private
 * @property _titleSuffix
 * @type String
 * @since 0.9.7
 **/
var _titleSuffix = "-h-";

/**
 * An error message for an "index out of range" error.
 *
 * @final
 * @private
 * @property _indexOutOfRangeErrorMessage
 * @type String
 **/
var _indexOutOfRangeErrorMessage = "Index out of range.";

/**
 * An error message for an "missing corresponding element" error.
 *
 * @final
 * @private
 * @property _missingCorrespondingElementErrorMessage
 * @type String
 **/
var _missingCorrespondingElementErrorMessage = "One or more corresponding step {0} are missing.";

/**
 * Adds a step to the cache.
 *
 * @static
 * @private
 * @method addStepToCache
 * @param wizard {Object} A jQuery wizard object
 * @param step {Object} The step object to add
 **/
function addStepToCache(wizard, step)
{
    getSteps(wizard).push(step);
}

function analyzeData(wizard, options, state)
{
    var stepTitles = wizard.children(options.headerTag),
        stepContents = wizard.children(options.bodyTag);

    // Validate content
    if (stepTitles.length > stepContents.length)
    {
        throwError(_missingCorrespondingElementErrorMessage, "contents");
    }
    else if (stepTitles.length < stepContents.length)
    {
        throwError(_missingCorrespondingElementErrorMessage, "titles");
    }
        
    var startIndex = options.startIndex;

    state.stepCount = stepTitles.length;

    // Tries to load the saved state (step position)
    if (options.saveState && $.cookie)
    {
        var savedState = $.cookie(_cookiePrefix + getUniqueId(wizard));
        // Sets the saved position to the start index if not undefined or out of range 
        var savedIndex = parseInt(savedState, 0);
        if (!isNaN(savedIndex) && savedIndex < state.stepCount)
        {
            startIndex = savedIndex;
        }
    }

    state.currentIndex = startIndex;

    stepTitles.each(function (index)
    {
        var item = $(this), // item == header
            content = stepContents.eq(index),
            modeData = content.data("mode"),
            mode = (modeData == null) ? contentMode.html : getValidEnumValue(contentMode,
                (/^\s*$/.test(modeData) || isNaN(modeData)) ? modeData : parseInt(modeData, 0)),
            contentUrl = (mode === contentMode.html || content.data("url") === undefined) ?
                "" : content.data("url"),
            contentLoaded = (mode !== contentMode.html && content.data("loaded") === "1"),
            step = $.extend({}, stepModel, {
                title: item.html(),
                content: (mode === contentMode.html) ? content.html() : "",
                contentUrl: contentUrl,
                contentMode: mode,
                contentLoaded: contentLoaded
            });

        addStepToCache(wizard, step);
    });
}

/**
 * Triggers the onCanceled event.
 *
 * @static
 * @private
 * @method cancel
 * @param wizard {Object} The jQuery wizard object
 **/
function cancel(wizard)
{
    wizard.triggerHandler("canceled");
}

function decreaseCurrentIndexBy(state, decreaseBy)
{
    return state.currentIndex - decreaseBy;
}

/**
 * Removes the control functionality completely and transforms the current state to the initial HTML structure.
 *
 * @static
 * @private
 * @method destroy
 * @param wizard {Object} A jQuery wizard object
 **/
function destroy(wizard, options)
{
    var eventNamespace = getEventNamespace(wizard);

    // Remove virtual data objects from the wizard
    wizard.unbind(eventNamespace).removeData("uid").removeData("options")
        .removeData("state").removeData("steps").removeData("eventNamespace")
        .find(".actions a").unbind(eventNamespace);

    // Remove attributes and CSS classes from the wizard
    wizard.removeClass(options.clearFixCssClass + " vertical");

    var contents = wizard.find(".content > *");

    // Remove virtual data objects from panels and their titles
    contents.removeData("loaded").removeData("mode").removeData("url");

    // Remove attributes, CSS classes and reset inline styles on all panels and their titles
    contents.removeAttr("id").removeAttr("role").removeAttr("tabindex")
        .removeAttr("class").removeAttr("style")._removeAria("labelledby")
        ._removeAria("hidden");

    // Empty panels if the mode is set to 'async' or 'iframe'
    wizard.find(".content > [data-mode='async'],.content > [data-mode='iframe']").empty();

    var wizardSubstitute = $("<{0} class=\"{1}\"></{0}>".format(wizard.get(0).tagName, wizard.attr("class")));

    var wizardId = wizard._id();
    if (wizardId != null && wizardId !== "")
    {
        wizardSubstitute._id(wizardId);
    }

    wizardSubstitute.html(wizard.find(".content").html());
    wizard.after(wizardSubstitute);
    wizard.remove();

    return wizardSubstitute;
}

/**
 * Triggers the onFinishing and onFinished event.
 *
 * @static
 * @private
 * @method finishStep
 * @param wizard {Object} The jQuery wizard object
 * @param state {Object} The state container of the current wizard
 **/
function finishStep(wizard, state)
{
    var currentStep = wizard.find(".steps li").eq(state.currentIndex);

    if (wizard.triggerHandler("finishing", [state.currentIndex]))
    {
        currentStep.addClass("done").removeClass("error");
        wizard.triggerHandler("finished", [state.currentIndex]);
    }
    else
    {
        currentStep.addClass("error");
    }
}

/**
 * Gets or creates if not exist an unique event namespace for the given wizard instance.
 *
 * @static
 * @private
 * @method getEventNamespace
 * @param wizard {Object} A jQuery wizard object
 * @return {String} Returns the unique event namespace for the given wizard
 */
function getEventNamespace(wizard)
{
    var eventNamespace = wizard.data("eventNamespace");

    if (eventNamespace == null)
    {
        eventNamespace = "." + getUniqueId(wizard);
        wizard.data("eventNamespace", eventNamespace);
    }

    return eventNamespace;
}

function getStepAnchor(wizard, index)
{
    var uniqueId = getUniqueId(wizard);

    return wizard.find("#" + uniqueId + _tabSuffix + index);
}

function getStepPanel(wizard, index)
{
    var uniqueId = getUniqueId(wizard);

    return wizard.find("#" + uniqueId + _tabpanelSuffix + index);
}

function getStepTitle(wizard, index)
{
    var uniqueId = getUniqueId(wizard);

    return wizard.find("#" + uniqueId + _titleSuffix + index);
}

function getOptions(wizard)
{
    return wizard.data("options");
}

function getState(wizard)
{
    return wizard.data("state");
}

function getSteps(wizard)
{
    return wizard.data("steps");
}

/**
 * Gets a specific step object by index.
 *
 * @static
 * @private
 * @method getStep
 * @param index {Integer} An integer that belongs to the position of a step
 * @return {Object} A specific step object
 **/
function getStep(wizard, index)
{
    var steps = getSteps(wizard);

    if (index < 0 || index >= steps.length)
    {
        throwError(_indexOutOfRangeErrorMessage);
    }

    return steps[index];
}

/**
 * Gets or creates if not exist an unique id from the given wizard instance.
 *
 * @static
 * @private
 * @method getUniqueId
 * @param wizard {Object} A jQuery wizard object
 * @return {String} Returns the unique id for the given wizard
 */
function getUniqueId(wizard)
{
    var uniqueId = wizard.data("uid");

    if (uniqueId == null)
    {
        uniqueId = wizard._id();
        if (uniqueId == null)
        {
            uniqueId = "steps-uid-".concat(_uniqueId);
            wizard._id(uniqueId);
        }

        _uniqueId++;
        wizard.data("uid", uniqueId);
    }

    return uniqueId;
}

/**
 * Gets a valid enum value by checking a specific enum key or value.
 * 
 * @static
 * @private
 * @method getValidEnumValue
 * @param enumType {Object} Type of enum
 * @param keyOrValue {Object} Key as `String` or value as `Integer` to check for
 */
function getValidEnumValue(enumType, keyOrValue)
{
    validateArgument("enumType", enumType);
    validateArgument("keyOrValue", keyOrValue);

    // Is key
    if (typeof keyOrValue === "string")
    {
        var value = enumType[keyOrValue];
        if (value === undefined)
        {
            throwError("The enum key '{0}' does not exist.", keyOrValue);
        }

        return value;
    }
    // Is value
    else if (typeof keyOrValue === "number")
    {
        for (var key in enumType)
        {
            if (enumType[key] === keyOrValue)
            {
                return keyOrValue;
            }
        }

        throwError("Invalid enum value '{0}'.", keyOrValue);
    }
    // Type is not supported
    else
    {
        throwError("Invalid key or value type.");
    }
}

/**
 * Routes to the next step.
 *
 * @static
 * @private
 * @method goToNextStep
 * @param wizard {Object} The jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 * @return {Boolean} Indicates whether the action executed
 **/
function goToNextStep(wizard, options, state)
{
    return paginationClick(wizard, options, state, increaseCurrentIndexBy(state, 1));
}

/**
 * Routes to the previous step.
 *
 * @static
 * @private
 * @method goToPreviousStep
 * @param wizard {Object} The jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 * @return {Boolean} Indicates whether the action executed
 **/
function goToPreviousStep(wizard, options, state)
{
    return paginationClick(wizard, options, state, decreaseCurrentIndexBy(state, 1));
}

/**
 * Routes to a specific step by a given index.
 *
 * @static
 * @private
 * @method goToStep
 * @param wizard {Object} The jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 * @param index {Integer} The position (zero-based) to route to
 * @return {Boolean} Indicates whether the action succeeded or failed
 **/
function goToStep(wizard, options, state, index)
{
    if (index < 0 || index >= state.stepCount)
    {
        throwError(_indexOutOfRangeErrorMessage);
    }

    if (options.forceMoveForward && index < state.currentIndex)
    {
        return;
    }

    var oldIndex = state.currentIndex;
    if (wizard.triggerHandler("stepChanging", [state.currentIndex, index]))
    {
        // Save new state
        state.currentIndex = index;
        saveCurrentStateToCookie(wizard, options, state);

        // Change visualisation
        refreshStepNavigation(wizard, options, state, oldIndex);
        refreshPagination(wizard, options, state);
        loadAsyncContent(wizard, options, state);
        startTransitionEffect(wizard, options, state, index, oldIndex, function()
        {
            wizard.triggerHandler("stepChanged", [index, oldIndex]);
        });
    }
    else
    {
        wizard.find(".steps li").eq(oldIndex).addClass("error");
    }

    return true;
}

function increaseCurrentIndexBy(state, increaseBy)
{
    return state.currentIndex + increaseBy;
}

/**
 * Initializes the component.
 *
 * @static
 * @private
 * @method initialize
 * @param options {Object} The component settings
 **/
function initialize(options)
{
    /*jshint -W040 */
    var opts = $.extend(true, {}, defaults, options);

    return this.each(function ()
    {
        var wizard = $(this);
        var state = {
            currentIndex: opts.startIndex,
            currentStep: null,
            stepCount: 0,
            transitionElement: null
        };

        // Create data container
        wizard.data("options", opts);
        wizard.data("state", state);
        wizard.data("steps", []);

        analyzeData(wizard, opts, state);
        render(wizard, opts, state);
        registerEvents(wizard, opts);

        // Trigger focus
        if (opts.autoFocus && _uniqueId === 0)
        {
            getStepAnchor(wizard, opts.startIndex).focus();
        }

        wizard.triggerHandler("init", [opts.startIndex]);
    });
}

/**
 * Inserts a new step to a specific position.
 *
 * @static
 * @private
 * @method insertStep
 * @param wizard {Object} The jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 * @param index {Integer} The position (zero-based) to add
 * @param step {Object} The step object to add
 * @example
 *     $("#wizard").steps().insert(0, {
 *         title: "Title",
 *         content: "", // optional
 *         contentMode: "async", // optional
 *         contentUrl: "/Content/Step/1" // optional
 *     });
 * @chainable
 **/
function insertStep(wizard, options, state, index, step)
{
    if (index < 0 || index > state.stepCount)
    {
        throwError(_indexOutOfRangeErrorMessage);
    }

    // TODO: Validate step object

    // Change data
    step = $.extend({}, stepModel, step);
    insertStepToCache(wizard, index, step);
    if (state.currentIndex !== state.stepCount && state.currentIndex >= index)
    {
        state.currentIndex++;
        saveCurrentStateToCookie(wizard, options, state);
    }
    state.stepCount++;

    var contentContainer = wizard.find(".content"),
        header = $("<{0}>{1}</{0}>".format(options.headerTag, step.title)),
        body = $("<{0}></{0}>".format(options.bodyTag));

    if (step.contentMode == null || step.contentMode === contentMode.html)
    {
        body.html(step.content);
    }

    if (index === 0)
    {
        contentContainer.prepend(body).prepend(header);
    }
    else
    {
        getStepPanel(wizard, (index - 1)).after(body).after(header);
    }

    renderBody(wizard, state, body, index);
    renderTitle(wizard, options, state, header, index);
    refreshSteps(wizard, options, state, index);
    if (index === state.currentIndex)
    {
        refreshStepNavigation(wizard, options, state);
    }
    refreshPagination(wizard, options, state);

    return wizard;
}

/**
 * Inserts a step object to the cache at a specific position.
 *
 * @static
 * @private
 * @method insertStepToCache
 * @param wizard {Object} A jQuery wizard object
 * @param index {Integer} The position (zero-based) to add
 * @param step {Object} The step object to add
 **/
function insertStepToCache(wizard, index, step)
{
    getSteps(wizard).splice(index, 0, step);
}

/**
 * Handles the keyup DOM event for pagination.
 *
 * @static
 * @private
 * @event keyup
 * @param event {Object} An event object
 */
function keyUpHandler(event)
{
    var wizard = $(this),
        options = getOptions(wizard),
        state = getState(wizard);

    if (options.suppressPaginationOnFocus && wizard.find(":focus").is(":input"))
    {
        event.preventDefault();
        return false;
    }

    var keyCodes = { left: 37, right: 39 };
    if (event.keyCode === keyCodes.left)
    {
        event.preventDefault();
        goToPreviousStep(wizard, options, state);
    }
    else if (event.keyCode === keyCodes.right)
    {
        event.preventDefault();
        goToNextStep(wizard, options, state);
    }
}

/**
 * Loads and includes async content.
 *
 * @static
 * @private
 * @method loadAsyncContent
 * @param wizard {Object} A jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 */
function loadAsyncContent(wizard, options, state)
{
    if (state.stepCount > 0)
    {
        var currentIndex = state.currentIndex,
            currentStep = getStep(wizard, currentIndex);

        if (!options.enableContentCache || !currentStep.contentLoaded)
        {
            switch (getValidEnumValue(contentMode, currentStep.contentMode))
            {
                case contentMode.iframe:
                    wizard.find(".content > .body").eq(state.currentIndex).empty()
                        .html("<iframe src=\"" + currentStep.contentUrl + "\" frameborder=\"0\" scrolling=\"no\" />")
                        .data("loaded", "1");
                    break;

                case contentMode.async:
                    var currentStepContent = getStepPanel(wizard, currentIndex)._aria("busy", "true")
                        .empty().append(renderTemplate(options.loadingTemplate, { text: options.labels.loading }));

                    $.ajax({ url: currentStep.contentUrl, cache: false }).done(function (data)
                    {
                        currentStepContent.empty().html(data)._aria("busy", "false").data("loaded", "1");
                        wizard.triggerHandler("contentLoaded", [currentIndex]);
                    });
                    break;
            }
        }
    }
}

/**
 * Fires the action next or previous click event.
 *
 * @static
 * @private
 * @method paginationClick
 * @param wizard {Object} The jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 * @param index {Integer} The position (zero-based) to route to
 * @return {Boolean} Indicates whether the event fired successfully or not
 **/
function paginationClick(wizard, options, state, index)
{
    var oldIndex = state.currentIndex;

    if (index >= 0 && index < state.stepCount && !(options.forceMoveForward && index < state.currentIndex))
    {
        var anchor = getStepAnchor(wizard, index),
            parent = anchor.parent(),
            isDisabled = parent.hasClass("disabled");

        // Enable the step to make the anchor clickable!
        parent._enableAria();
        anchor.click();

        // An error occured
        if (oldIndex === state.currentIndex && isDisabled)
        {
            // Disable the step again if current index has not changed; prevents click action.
            parent._enableAria(false);
            return false;
        }

        return true;
    }

    return false;
}

/**
 * Fires when a pagination click happens.
 *
 * @static
 * @private
 * @event click
 * @param event {Object} An event object
 */
function paginationClickHandler(event)
{
    event.preventDefault();

    var anchor = $(this),
        wizard = anchor.parent().parent().parent().parent(),
        options = getOptions(wizard),
        state = getState(wizard),
        href = anchor.attr("href");

    switch (href.substring(href.lastIndexOf("#") + 1))
    {
        case "cancel":
            cancel(wizard);
            break;

        case "finish":
            finishStep(wizard, state);
            break;

        case "next":
            goToNextStep(wizard, options, state);
            break;

        case "previous":
            goToPreviousStep(wizard, options, state);
            break;
    }
}

/**
 * Refreshs the visualization state for the entire pagination.
 *
 * @static
 * @private
 * @method refreshPagination
 * @param wizard {Object} A jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 */
function refreshPagination(wizard, options, state)
{
    if (options.enablePagination)
    {
        var finish = wizard.find(".actions a[href$='#finish']").parent(),
            next = wizard.find(".actions a[href$='#next']").parent();

        if (!options.forceMoveForward)
        {
            var previous = wizard.find(".actions a[href$='#previous']").parent();
            previous._enableAria(state.currentIndex > 0);
        }

        if (options.enableFinishButton && options.showFinishButtonAlways)
        {
            finish._enableAria(state.stepCount > 0);
            next._enableAria(state.stepCount > 1 && state.stepCount > (state.currentIndex + 1));
        }
        else
        {
            finish._showAria(options.enableFinishButton && state.stepCount === (state.currentIndex + 1));
            next._showAria(state.stepCount === 0 || state.stepCount > (state.currentIndex + 1)).
                _enableAria(state.stepCount > (state.currentIndex + 1) || !options.enableFinishButton);
        }
    }
}

/**
 * Refreshs the visualization state for the step navigation (tabs).
 *
 * @static
 * @private
 * @method refreshStepNavigation
 * @param wizard {Object} A jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 * @param [oldIndex] {Integer} The index of the prior step
 */
function refreshStepNavigation(wizard, options, state, oldIndex)
{
    var currentOrNewStepAnchor = getStepAnchor(wizard, state.currentIndex),
        currentInfo = $("<span class=\"current-info audible\">" + options.labels.current + " </span>"),
        stepTitles = wizard.find(".content > .title");

    if (oldIndex != null)
    {
        var oldStepAnchor = getStepAnchor(wizard, oldIndex);
        oldStepAnchor.parent().addClass("done").removeClass("error")._selectAria(false);
        stepTitles.eq(oldIndex).removeClass("current").next(".body").removeClass("current");
        currentInfo = oldStepAnchor.find(".current-info");
        currentOrNewStepAnchor.focus();
    }

    currentOrNewStepAnchor.prepend(currentInfo).parent()._selectAria().removeClass("done")._enableAria();
    stepTitles.eq(state.currentIndex).addClass("current").next(".body").addClass("current");
}

/**
 * Refreshes step buttons and their related titles beyond a certain position.
 *
 * @static
 * @private
 * @method refreshSteps
 * @param wizard {Object} A jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 * @param index {Integer} The start point for refreshing ids
 */
function refreshSteps(wizard, options, state, index)
{
    var uniqueId = getUniqueId(wizard);

    for (var i = index; i < state.stepCount; i++)
    {
        var uniqueStepId = uniqueId + _tabSuffix + i,
            uniqueBodyId = uniqueId + _tabpanelSuffix + i,
            uniqueHeaderId = uniqueId + _titleSuffix + i,
            title = wizard.find(".title").eq(i)._id(uniqueHeaderId);

        wizard.find(".steps a").eq(i)._id(uniqueStepId)
            ._aria("controls", uniqueBodyId).attr("href", "#" + uniqueHeaderId)
            .html(renderTemplate(options.titleTemplate, { index: i + 1, title: title.html() }));
        wizard.find(".body").eq(i)._id(uniqueBodyId)
            ._aria("labelledby", uniqueHeaderId);
    }
}

function registerEvents(wizard, options)
{
    var eventNamespace = getEventNamespace(wizard);

    wizard.bind("canceled" + eventNamespace, options.onCanceled);
    wizard.bind("contentLoaded" + eventNamespace, options.onContentLoaded);
    wizard.bind("finishing" + eventNamespace, options.onFinishing);
    wizard.bind("finished" + eventNamespace, options.onFinished);
    wizard.bind("init" + eventNamespace, options.onInit);
    wizard.bind("stepChanging" + eventNamespace, options.onStepChanging);
    wizard.bind("stepChanged" + eventNamespace, options.onStepChanged);

    if (options.enableKeyNavigation)
    {
        wizard.bind("keyup" + eventNamespace, keyUpHandler);
    }

    wizard.find(".actions a").bind("click" + eventNamespace, paginationClickHandler);
}

/**
 * Removes a specific step by an given index.
 *
 * @static
 * @private
 * @method removeStep
 * @param wizard {Object} A jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 * @param index {Integer} The position (zero-based) of the step to remove
 * @return Indecates whether the item is removed.
 **/
function removeStep(wizard, options, state, index)
{
    // Index out of range and try deleting current item will return false.
    if (index < 0 || index >= state.stepCount || state.currentIndex === index)
    {
        return false;
    }

    // Change data
    removeStepFromCache(wizard, index);
    if (state.currentIndex > index)
    {
        state.currentIndex--;
        saveCurrentStateToCookie(wizard, options, state);
    }
    state.stepCount--;

    getStepTitle(wizard, index).remove();
    getStepPanel(wizard, index).remove();
    getStepAnchor(wizard, index).parent().remove();

    // Set the "first" class to the new first step button 
    if (index === 0)
    {
        wizard.find(".steps li").first().addClass("first");
    }

    // Set the "last" class to the new last step button 
    if (index === state.stepCount)
    {
        wizard.find(".steps li").eq(index).addClass("last");
    }

    refreshSteps(wizard, options, state, index);
    refreshPagination(wizard, options, state);

    return true;
}

function removeStepFromCache(wizard, index)
{
    getSteps(wizard).splice(index, 1);
}

/**
 * Transforms the base html structure to a more sensible html structure.
 *
 * @static
 * @private
 * @method render
 * @param wizard {Object} A jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 **/
function render(wizard, options, state)
{
    // Create a content wrapper and copy HTML from the intial wizard structure
    var wrapperTemplate = "<{0} class=\"{1}\">{2}</{0}>",
        orientation = getValidEnumValue(stepsOrientation, options.stepsOrientation),
        verticalCssClass = (orientation === stepsOrientation.vertical) ? " vertical" : "",
        contentWrapper = $(wrapperTemplate.format(options.contentContainerTag, "content " + options.clearFixCssClass, wizard.html())),
        stepsWrapper = $(wrapperTemplate.format(options.stepsContainerTag, "steps " + options.clearFixCssClass, "<ul role=\"tablist\"></ul>")),
        stepTitles = contentWrapper.children(options.headerTag),
        stepContents = contentWrapper.children(options.bodyTag);

    // Transform the wizard wrapper and remove the inner HTML
    wizard.attr("role", "application").empty().append(stepsWrapper).append(contentWrapper)
        .addClass(options.cssClass + " " + options.clearFixCssClass + verticalCssClass);

    // Add WIA-ARIA support
    stepContents.each(function (index)
    {
        renderBody(wizard, state, $(this), index);
    });

    stepTitles.each(function (index)
    {
        renderTitle(wizard, options, state, $(this), index);
    });

    refreshStepNavigation(wizard, options, state);
    renderPagination(wizard, options, state);
}

/**
 * Transforms the body to a proper tabpanel.
 *
 * @static
 * @private
 * @method renderBody
 * @param wizard {Object} A jQuery wizard object
 * @param body {Object} A jQuery body object
 * @param index {Integer} The position of the body
 */
function renderBody(wizard, state, body, index)
{
    var uniqueId = getUniqueId(wizard),
        uniqueBodyId = uniqueId + _tabpanelSuffix + index,
        uniqueHeaderId = uniqueId + _titleSuffix + index;

    body._id(uniqueBodyId).attr("role", "tabpanel")._aria("labelledby", uniqueHeaderId)
        .addClass("body")._showAria(state.currentIndex === index);
}

/**
 * Renders a pagination if enabled.
 *
 * @static
 * @private
 * @method renderPagination
 * @param wizard {Object} A jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 */
function renderPagination(wizard, options, state)
{
    if (options.enablePagination)
    {
        var pagination = "<{0} class=\"actions {1}\"><ul role=\"menu\" aria-label=\"{2}\">{3}</ul></{0}>",
            buttonTemplate = "<li><a href=\"#{0}\" role=\"menuitem\">{1}</a></li>",
            buttons = "";

        if (!options.forceMoveForward)
        {
            buttons += buttonTemplate.format("previous", options.labels.previous);
        }

        buttons += buttonTemplate.format("next", options.labels.next);

        if (options.enableFinishButton)
        {
            buttons += buttonTemplate.format("finish", options.labels.finish);
        }

        if (options.enableCancelButton)
        {
            buttons += buttonTemplate.format("cancel", options.labels.cancel);
        }

        wizard.append(pagination.format(options.actionContainerTag, options.clearFixCssClass,
            options.labels.pagination, buttons));

        refreshPagination(wizard, options, state);
        loadAsyncContent(wizard, options, state);
    }
}

/**
 * Renders a template and replaces all placeholder.
 *
 * @static
 * @private
 * @method renderTemplate
 * @param template {String} A template
 * @param substitutes {Object} A list of substitute
 * @return {String} The rendered template
 */
function renderTemplate(template, substitutes)
{
    var matches = template.match(/#([a-z]*)#/gi);

    for (var i = 0; i < matches.length; i++)
    {
        var match = matches[i], 
            key = match.substring(1, match.length - 1);

        if (substitutes[key] === undefined)
        {
            throwError("The key '{0}' does not exist in the substitute collection!", key);
        }

        template = template.replace(match, substitutes[key]);
    }

    return template;
}

/**
 * Transforms the title to a step item button.
 *
 * @static
 * @private
 * @method renderTitle
 * @param wizard {Object} A jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 * @param header {Object} A jQuery header object
 * @param index {Integer} The position of the header
 */
function renderTitle(wizard, options, state, header, index)
{
    var uniqueId = getUniqueId(wizard),
        uniqueStepId = uniqueId + _tabSuffix + index,
        uniqueBodyId = uniqueId + _tabpanelSuffix + index,
        uniqueHeaderId = uniqueId + _titleSuffix + index,
        stepCollection = wizard.find(".steps > ul"),
        title = renderTemplate(options.titleTemplate, {
            index: index + 1,
            title: header.html()
        }),
        stepItem = $("<li role=\"tab\"><a id=\"" + uniqueStepId + "\" href=\"#" + uniqueHeaderId + 
            "\" aria-controls=\"" + uniqueBodyId + "\">" + title + "</a></li>");
        
    stepItem._enableAria(options.enableAllSteps || state.currentIndex > index);

    if (state.currentIndex > index)
    {
        stepItem.addClass("done");
    }

    header._id(uniqueHeaderId).attr("tabindex", "-1").addClass("title");

    if (index === 0)
    {
        stepCollection.prepend(stepItem);
    }
    else
    {
        stepCollection.find("li").eq(index - 1).after(stepItem);
    }

    // Set the "first" class to the new first step button
    if (index === 0)
    {
        stepCollection.find("li").removeClass("first").eq(index).addClass("first");
    }

    // Set the "last" class to the new last step button
    if (index === (state.stepCount - 1))
    {
        stepCollection.find("li").removeClass("last").eq(index).addClass("last");
    }

    // Register click event
    stepItem.children("a").bind("click" + getEventNamespace(wizard), stepClickHandler);
}

/**
 * Saves the current state to a cookie.
 *
 * @static
 * @private
 * @method saveCurrentStateToCookie
 * @param wizard {Object} A jQuery wizard object
 * @param options {Object} Settings of the current wizard
 * @param state {Object} The state container of the current wizard
 */
function saveCurrentStateToCookie(wizard, options, state)
{
    if (options.saveState && $.cookie)
    {
        $.cookie(_cookiePrefix + getUniqueId(wizard), state.currentIndex);
    }
}

function startTransitionEffect(wizard, options, state, index, oldIndex, doneCallback)
{
    var stepContents = wizard.find(".content > .body"),
        effect = getValidEnumValue(transitionEffect, options.transitionEffect),
        effectSpeed = options.transitionEffectSpeed,
        newStep = stepContents.eq(index),
        currentStep = stepContents.eq(oldIndex);

    switch (effect)
    {
        case transitionEffect.fade:
        case transitionEffect.slide:
            var hide = (effect === transitionEffect.fade) ? "fadeOut" : "slideUp",
                show = (effect === transitionEffect.fade) ? "fadeIn" : "slideDown";

            state.transitionElement = newStep;
            currentStep[hide](effectSpeed, function ()
            {
                var wizard = $(this)._showAria(false).parent().parent(),
                    state = getState(wizard);

                if (state.transitionElement)
                {
                    state.transitionElement[show](effectSpeed, function ()
                    {
                        $(this)._showAria();
                    }).promise().done(doneCallback);
                    state.transitionElement = null;
                }
            });
            break;

        case transitionEffect.slideLeft:
            var outerWidth = currentStep.outerWidth(true),
                posFadeOut = (index > oldIndex) ? -(outerWidth) : outerWidth,
                posFadeIn = (index > oldIndex) ? outerWidth : -(outerWidth);

            $.when(currentStep.animate({ left: posFadeOut }, effectSpeed, 
                    function () { $(this)._showAria(false); }),
                newStep.css("left", posFadeIn + "px")._showAria()
                    .animate({ left: 0 }, effectSpeed)).done(doneCallback);
            break;

        default:
            $.when(currentStep._showAria(false), newStep._showAria())
                .done(doneCallback);
            break;
    }
}

/**
 * Fires when a step click happens.
 *
 * @static
 * @private
 * @event click
 * @param event {Object} An event object
 */
function stepClickHandler(event)
{
    event.preventDefault();

    var anchor = $(this),
        wizard = anchor.parent().parent().parent().parent(),
        options = getOptions(wizard),
        state = getState(wizard),
        oldIndex = state.currentIndex;

    if (anchor.parent().is(":not(.disabled):not(.current)"))
    {
        var href = anchor.attr("href"),
            position = parseInt(href.substring(href.lastIndexOf("-") + 1), 0);

        goToStep(wizard, options, state, position);
    }

    // If nothing has changed
    if (oldIndex === state.currentIndex)
    {
        getStepAnchor(wizard, oldIndex).focus();
        return false;
    }
}

function throwError(message)
{
    if (arguments.length > 1)
    {
        message = message.format(Array.prototype.slice.call(arguments, 1));
    }

    throw new Error(message);
}

/**
 * Checks an argument for null or undefined and throws an error if one check applies.
 *
 * @static
 * @private
 * @method validateArgument
 * @param argumentName {String} The name of the given argument
 * @param argumentValue {Object} The argument itself
 */
function validateArgument(argumentName, argumentValue)
{
    if (argumentValue == null)
    {
        throwError("The argument '{0}' is null or undefined.", argumentName);
    }
}

/**
 * Represents a jQuery wizard plugin.
 *
 * @class steps
 * @constructor
 * @param [method={}] The name of the method as `String` or an JSON object for initialization
 * @param [params=]* {Array} Additional arguments for a method call
 * @chainable
 **/
$.fn.steps = function (method)
{
    if ($.fn.steps[method])
    {
        return $.fn.steps[method].apply(this, Array.prototype.slice.call(arguments, 1));
    }
    else if (typeof method === "object" || !method)
    {
        return initialize.apply(this, arguments);
    }
    else
    {
        $.error("Method " + method + " does not exist on jQuery.steps");
    }
};

/**
 * Adds a new step.
 *
 * @method add
 * @param step {Object} The step object to add
 * @chainable
 **/
$.fn.steps.add = function (step)
{
    var state = getState(this);
    return insertStep(this, getOptions(this), state, state.stepCount, step);
};

/**
 * Removes the control functionality completely and transforms the current state to the initial HTML structure.
 *
 * @method destroy
 * @chainable
 **/
$.fn.steps.destroy = function ()
{
    return destroy(this, getOptions(this));
};

/**
 * Triggers the onFinishing and onFinished event.
 *
 * @method finish
 **/
$.fn.steps.finish = function ()
{
    finishStep(this, getState(this));
};

/**
 * Gets the current step index.
 *
 * @method getCurrentIndex
 * @return {Integer} The actual step index (zero-based)
 * @for steps
 **/
$.fn.steps.getCurrentIndex = function ()
{
    return getState(this).currentIndex;
};

/**
 * Gets the current step object.
 *
 * @method getCurrentStep
 * @return {Object} The actual step object
 **/
$.fn.steps.getCurrentStep = function ()
{
    return getStep(this, getState(this).currentIndex);
};

/**
 * Gets a specific step object by index.
 *
 * @method getStep
 * @param index {Integer} An integer that belongs to the position of a step
 * @return {Object} A specific step object
 **/
$.fn.steps.getStep = function (index)
{
    return getStep(this, index);
};

/**
 * Inserts a new step to a specific position.
 *
 * @method insert
 * @param index {Integer} The position (zero-based) to add
 * @param step {Object} The step object to add
 * @example
 *     $("#wizard").steps().insert(0, {
 *         title: "Title",
 *         content: "", // optional
 *         contentMode: "async", // optional
 *         contentUrl: "/Content/Step/1" // optional
 *     });
 * @chainable
 **/
$.fn.steps.insert = function (index, step)
{
    return insertStep(this, getOptions(this), getState(this), index, step);
};

/**
 * Routes to the next step.
 *
 * @method next
 * @return {Boolean} Indicates whether the action executed
 **/
$.fn.steps.next = function ()
{
    return goToNextStep(this, getOptions(this), getState(this));
};

/**
 * Routes to the previous step.
 *
 * @method previous
 * @return {Boolean} Indicates whether the action executed
 **/
$.fn.steps.previous = function ()
{
    return goToPreviousStep(this, getOptions(this), getState(this));
};

/**
 * Removes a specific step by an given index.
 *
 * @method remove
 * @param index {Integer} The position (zero-based) of the step to remove
 * @return Indecates whether the item is removed.
 **/
$.fn.steps.remove = function (index)
{
    return removeStep(this, getOptions(this), getState(this), index);
};

/**
 * Sets a specific step object by index.
 *
 * @method setStep
 * @param index {Integer} An integer that belongs to the position of a step
 * @param step {Object} The step object to change
 **/
$.fn.steps.setStep = function (index, step)
{
    throw new Error("Not yet implemented!");
};

/**
 * Skips an certain amount of steps.
 *
 * @method skip
 * @param count {Integer} The amount of steps that should be skipped
 * @return {Boolean} Indicates whether the action executed
 **/
$.fn.steps.skip = function (count)
{
    throw new Error("Not yet implemented!");
};

/**
 * An enum represents the different content types of a step and their loading mechanisms.
 *
 * @class contentMode
 * @for steps
 **/
var contentMode = $.fn.steps.contentMode = {
    /**
     * HTML embedded content
     *
     * @readOnly
     * @property html
     * @type Integer
     * @for contentMode
     **/
    html: 0,

    /**
     * IFrame embedded content
     *
     * @readOnly
     * @property iframe
     * @type Integer
     * @for contentMode
     **/
    iframe: 1,

    /**
     * Async embedded content
     *
     * @readOnly
     * @property async
     * @type Integer
     * @for contentMode
     **/
    async: 2
};

/**
 * An enum represents the orientation of the steps navigation.
 *
 * @class stepsOrientation
 * @for steps
 **/
var stepsOrientation = $.fn.steps.stepsOrientation = {
    /**
     * Horizontal orientation
     *
     * @readOnly
     * @property horizontal
     * @type Integer
     * @for stepsOrientation
     **/
    horizontal: 0,

    /**
     * Vertical orientation
     *
     * @readOnly
     * @property vertical
     * @type Integer
     * @for stepsOrientation
     **/
    vertical: 1
};

/**
 * An enum that represents the various transition animations.
 *
 * @class transitionEffect
 * @for steps
 **/
var transitionEffect = $.fn.steps.transitionEffect = {
    /**
     * No transition animation
     *
     * @readOnly
     * @property none
     * @type Integer
     * @for transitionEffect
     **/
    none: 0,

    /**
     * Fade in transition
     *
     * @readOnly
     * @property fade
     * @type Integer
     * @for transitionEffect
     **/
    fade: 1,

    /**
     * Slide up transition
     *
     * @readOnly
     * @property slide
     * @type Integer
     * @for transitionEffect
     **/
    slide: 2,

    /**
     * Slide left transition
     *
     * @readOnly
     * @property slideLeft
     * @type Integer
     * @for transitionEffect
     **/
    slideLeft: 3
};

var stepModel = $.fn.steps.stepModel = {
    title: "",
    content: "",
    contentUrl: "",
    contentMode: contentMode.html,
    contentLoaded: false
};

/**
 * An object that represents the default settings.
 * There are two possibities to override the sub-properties.
 * Either by doing it generally (global) or on initialization.
 *
 * @static
 * @class defaults
 * @for steps
 * @example
 *   // Global approach
 *   $.steps.defaults.headerTag = "h3";
 * @example
 *   // Initialization approach
 *   $("#wizard").steps({ headerTag: "h3" });
 **/
var defaults = $.fn.steps.defaults = {
    /**
     * The header tag is used to find the step button text within the declared wizard area.
     *
     * @property headerTag
     * @type String
     * @default "h1"
     * @for defaults
     **/
    headerTag: "h1",

    /**
     * The body tag is used to find the step content within the declared wizard area.
     *
     * @property bodyTag
     * @type String
     * @default "div"
     * @for defaults
     **/
    bodyTag: "div",

    /**
     * The content container tag which will be used to wrap all step contents.
     *
     * @property contentContainerTag
     * @type String
     * @default "div"
     * @for defaults
     **/
    contentContainerTag: "div",

    /**
     * The action container tag which will be used to wrap the pagination navigation.
     *
     * @property actionContainerTag
     * @type String
     * @default "div"
     * @for defaults
     **/
    actionContainerTag: "div",

    /**
     * The steps container tag which will be used to wrap the steps navigation.
     *
     * @property stepsContainerTag
     * @type String
     * @default "div"
     * @for defaults
     **/
    stepsContainerTag: "div",

    /**
     * The css class which will be added to the outer component wrapper.
     *
     * @property cssClass
     * @type String
     * @default "wizard"
     * @for defaults
     * @example
     *     <div class="wizard">
     *         ...
     *     </div>
     **/
    cssClass: "wizard",

    /**
     * The css class which will be used for floating scenarios.
     *
     * @property clearFixCssClass
     * @type String
     * @default "clearfix"
     * @for defaults
     **/
    clearFixCssClass: "clearfix",

    /**
     * Determines whether the steps are vertically or horizontally oriented.
     *
     * @property stepsOrientation
     * @type stepsOrientation
     * @default horizontal
     * @for defaults
     * @since 1.0.0
     **/
    stepsOrientation: stepsOrientation.horizontal,

    /*
     * Tempplates
     */

    /**
     * The title template which will be used to create a step button.
     *
     * @property titleTemplate
     * @type String
     * @default "<span class=\"number\">#index#.</span> #title#"
     * @for defaults
     **/
    titleTemplate: "<span class=\"number\">#index#.</span> #title#",

    /**
     * The loading template which will be used to create the loading animation.
     *
     * @property loadingTemplate
     * @type String
     * @default "<span class=\"spinner\"></span> #text#"
     * @for defaults
     **/
    loadingTemplate: "<span class=\"spinner\"></span> #text#",

    /*
     * Behaviour
     */

    /**
     * Sets the focus to the first wizard instance in order to enable the key navigation from the begining if `true`. 
     *
     * @property autoFocus
     * @type Boolean
     * @default false
     * @for defaults
     * @since 0.9.4
     **/
    autoFocus: false,

    /**
     * Enables all steps from the begining if `true` (all steps are clickable).
     *
     * @property enableAllSteps
     * @type Boolean
     * @default false
     * @for defaults
     **/
    enableAllSteps: false,

    /**
     * Enables keyboard navigation if `true` (arrow left and arrow right).
     *
     * @property enableKeyNavigation
     * @type Boolean
     * @default true
     * @for defaults
     **/
    enableKeyNavigation: true,

    /**
     * Enables pagination if `true`.
     *
     * @property enablePagination
     * @type Boolean
     * @default true
     * @for defaults
     **/
    enablePagination: true,

    /**
     * Suppresses pagination if a form field is focused.
     *
     * @property suppressPaginationOnFocus
     * @type Boolean
     * @default true
     * @for defaults
     **/
    suppressPaginationOnFocus: true,

    /**
     * Enables cache for async loaded or iframe embedded content.
     *
     * @property enableContentCache
     * @type Boolean
     * @default true
     * @for defaults
     **/
    enableContentCache: true,

    /**
     * Shows the cancel button if enabled.
     *
     * @property enableCancelButton
     * @type Boolean
     * @default false
     * @for defaults
     **/
    enableCancelButton: false,

    /**
     * Shows the finish button if enabled.
     *
     * @property enableFinishButton
     * @type Boolean
     * @default true
     * @for defaults
     **/
    enableFinishButton: true,

    /**
     * Not yet implemented.
     *
     * @property preloadContent
     * @type Boolean
     * @default false
     * @for defaults
     **/
    preloadContent: false,

    /**
     * Shows the finish button always (on each step; right beside the next button) if `true`. 
     * Otherwise the next button will be replaced by the finish button if the last step becomes active.
     *
     * @property showFinishButtonAlways
     * @type Boolean
     * @default false
     * @for defaults
     **/
    showFinishButtonAlways: false,

    /**
     * Prevents jumping to a previous step.
     *
     * @property forceMoveForward
     * @type Boolean
     * @default false
     * @for defaults
     **/
    forceMoveForward: false,

    /**
     * Saves the current state (step position) to a cookie.
     * By coming next time the last active step becomes activated.
     *
     * @property saveState
     * @type Boolean
     * @default false
     * @for defaults
     **/
    saveState: false,

    /**
     * The position to start on (zero-based).
     *
     * @property startIndex
     * @type Integer
     * @default 0
     * @for defaults
     **/
    startIndex: 0,

    /*
     * Animation Effect Configuration
     */

    /**
     * The animation effect which will be used for step transitions.
     *
     * @property transitionEffect
     * @type transitionEffect
     * @default none
     * @for defaults
     **/
    transitionEffect: transitionEffect.none,

    /**
     * Animation speed for step transitions (in milliseconds).
     *
     * @property transitionEffectSpeed
     * @type Integer
     * @default 200
     * @for defaults
     **/
    transitionEffectSpeed: 200,

    /*
     * Events
     */

    /**
     * Fires before the step changes and can be used to prevent step changing by returning `false`. 
     * Very useful for form validation. 
     *
     * @property onStepChanging
     * @type Event
     * @default function (event, currentIndex, newIndex) { return true; }
     * @for defaults
     **/
    onStepChanging: function (event, currentIndex, newIndex) { return true; },

    /**
     * Fires after the step has change. 
     *
     * @property onStepChanged
     * @type Event
     * @default function (event, currentIndex, priorIndex) { }
     * @for defaults
     **/
    onStepChanged: function (event, currentIndex, priorIndex) { },

    /**
     * Fires after cancelation. 
     *
     * @property onCanceled
     * @type Event
     * @default function (event) { }
     * @for defaults
     **/
    onCanceled: function (event) { },

    /**
     * Fires before finishing and can be used to prevent completion by returning `false`. 
     * Very useful for form validation. 
     *
     * @property onFinishing
     * @type Event
     * @default function (event, currentIndex) { return true; }
     * @for defaults
     **/
    onFinishing: function (event, currentIndex) { return true; },

    /**
     * Fires after completion. 
     *
     * @property onFinished
     * @type Event
     * @default function (event, currentIndex) { }
     * @for defaults
     **/
    onFinished: function (event, currentIndex) { },

    /**
     * Fires after async content is loaded. 
     *
     * @property onContentLoaded
     * @type Event
     * @default function (event, index) { }
     * @for defaults
     **/
    onContentLoaded: function (event, currentIndex) { },

    /**
     * Fires when the wizard is initialized. 
     *
     * @property onInit
     * @type Event
     * @default function (event) { }
     * @for defaults
     **/
    onInit: function (event, currentIndex) { },

    /**
     * Contains all labels. 
     *
     * @property labels
     * @type Object
     * @for defaults
     **/
    labels: {
        /**
         * Label for the cancel button.
         *
         * @property cancel
         * @type String
         * @default "Cancel"
         * @for defaults
         **/
        cancel: "Cancel",

        /**
         * This label is important for accessability reasons.
         * Indicates which step is activated.
         *
         * @property current
         * @type String
         * @default "current step:"
         * @for defaults
         **/
        current: "current step:",

        /**
         * This label is important for accessability reasons and describes the kind of navigation.
         *
         * @property pagination
         * @type String
         * @default "Pagination"
         * @for defaults
         * @since 0.9.7
         **/
        pagination: "Pagination",

        /**
         * Label for the finish button.
         *
         * @property finish
         * @type String
         * @default "Finish"
         * @for defaults
         **/
        finish: "Finish",

        /**
         * Label for the next button.
         *
         * @property next
         * @type String
         * @default "Next"
         * @for defaults
         **/
        next: "Next",

        /**
         * Label for the previous button.
         *
         * @property previous
         * @type String
         * @default "Previous"
         * @for defaults
         **/
        previous: "Previous",

        /**
         * Label for the loading animation.
         *
         * @property loading
         * @type String
         * @default "Loading ..."
         * @for defaults
         **/
        loading: "Loading ..."
    }
};
})(jQuery);
/*!
 *  GMAP3 Plugin for jQuery
 *  Version   : 6.0.0
 *  Date      : 2014-04-25
 *  Author    : DEMONTE Jean-Baptiste
 *  Contact   : jbdemonte@gmail.com
 *  Web site  : http://gmap3.net
 *  Licence   : GPL v3 : http://www.gnu.org/licenses/gpl.html
 *  
 *  Copyright (c) 2010-2014 Jean-Baptiste DEMONTE
 *  All rights reserved.
 */
!function(t,n){function e(t){return"object"==typeof t}function o(t){return"string"==typeof t}function i(t){return"number"==typeof t}function a(t){return t===n}function r(){q=google.maps,A||(A={verbose:!1,queryLimit:{attempt:5,delay:250,random:250},classes:function(){var n={};return t.each("Map Marker InfoWindow Circle Rectangle OverlayView StreetViewPanorama KmlLayer TrafficLayer BicyclingLayer GroundOverlay StyledMapType ImageMapType".split(" "),function(t,e){n[e]=q[e]}),n}(),map:{mapTypeId:q.MapTypeId.ROADMAP,center:[46.578498,2.457275],zoom:2},overlay:{pane:"floatPane",content:"",offset:{x:0,y:0}},geoloc:{getCurrentPosition:{maximumAge:6e4,timeout:5e3}}})}function s(t,n){return a(t)?"gmap3_"+(n?Z+1:++Z):t}function u(t){var n,e=q.version.split(".");for(t=t.split("."),n=0;n<e.length;n++)e[n]=parseInt(e[n],10);for(n=0;n<t.length;n++){if(t[n]=parseInt(t[n],10),!e.hasOwnProperty(n))return!1;if(e[n]<t[n])return!1}return!0}function l(n,e,o,i,a){function r(e,i){e&&t.each(e,function(t,e){var r=n,s=e;R(e)&&(r=e[0],s=e[1]),i(o,t,function(t){s.apply(r,[a||o,t,u])})})}var s=e.td||{},u={id:i,data:s.data,tag:s.tag};r(s.events,q.event.addListener),r(s.onces,q.event.addListenerOnce)}function d(t){var n,e=[];for(n in t)t.hasOwnProperty(n)&&e.push(n);return e}function c(t,n){var e,o=arguments;for(e=2;e<o.length;e++)if(n in o[e]&&o[e].hasOwnProperty(n))return void(t[n]=o[e][n])}function p(n,e){var o,i,a=["data","tag","id","events","onces"],r={};if(n.td)for(o in n.td)n.td.hasOwnProperty(o)&&"options"!==o&&"values"!==o&&(r[o]=n.td[o]);for(i=0;i<a.length;i++)c(r,a[i],e,n.td);return r.options=t.extend({},n.opts||{},e.options||{}),r}function f(){if(A.verbose){var t,n=[];if(window.console&&z(console.error)){for(t=0;t<arguments.length;t++)n.push(arguments[t]);console.error.apply(console,n)}else{for(n="",t=0;t<arguments.length;t++)n+=arguments[t].toString()+" ";alert(n)}}}function g(t){return(i(t)||o(t))&&""!==t&&!isNaN(t)}function h(t){var n,o=[];if(!a(t))if(e(t))if(i(t.length))o=t;else for(n in t)o.push(t[n]);else o.push(t);return o}function v(n){return n?z(n)?n:(n=h(n),function(o){var i;if(a(o))return!1;if(e(o)){for(i=0;i<o.length;i++)if(t.inArray(o[i],n)>=0)return!0;return!1}return t.inArray(o,n)>=0}):void 0}function m(t,n,e){var i=n?t:null;return!t||o(t)?i:t.latLng?m(t.latLng):t instanceof q.LatLng?t:g(t.lat)?new q.LatLng(t.lat,t.lng):!e&&R(t)&&g(t[0])&&g(t[1])?new q.LatLng(t[0],t[1]):i}function y(t){var n,e;return!t||t instanceof q.LatLngBounds?t||null:(R(t)?2===t.length?(n=m(t[0]),e=m(t[1])):4===t.length&&(n=m([t[0],t[1]]),e=m([t[2],t[3]])):"ne"in t&&"sw"in t?(n=m(t.ne),e=m(t.sw)):"n"in t&&"e"in t&&"s"in t&&"w"in t&&(n=m([t.n,t.e]),e=m([t.s,t.w])),n&&e?new q.LatLngBounds(e,n):null)}function w(t,n,e,i,a){var r=e?m(i.td,!1,!0):!1,s=r?{latLng:r}:i.td.address?o(i.td.address)?{address:i.td.address}:i.td.address:!1,u=s?G.get(s):!1,l=this;s?(a=a||0,u?(i.latLng=u.results[0].geometry.location,i.results=u.results,i.status=u.status,n.apply(t,[i])):(s.location&&(s.location=m(s.location)),s.bounds&&(s.bounds=y(s.bounds)),M().geocode(s,function(o,r){r===q.GeocoderStatus.OK?(G.store(s,{results:o,status:r}),i.latLng=o[0].geometry.location,i.results=o,i.status=r,n.apply(t,[i])):r===q.GeocoderStatus.OVER_QUERY_LIMIT&&a<A.queryLimit.attempt?setTimeout(function(){w.apply(l,[t,n,e,i,a+1])},A.queryLimit.delay+Math.floor(Math.random()*A.queryLimit.random)):(f("geocode failed",r,s),i.latLng=i.results=!1,i.status=r,n.apply(t,[i]))}))):(i.latLng=m(i.td,!1,!0),n.apply(t,[i]))}function L(n,e,o,i){function a(){do s++;while(s<n.length&&!("address"in n[s]));return s>=n.length?void o.apply(e,[i]):void w(r,function(e){delete e.td,t.extend(n[s],e),a.apply(r,[])},!0,{td:n[s]})}var r=this,s=-1;a()}function b(t,n,e){var o=!1;navigator&&navigator.geolocation?navigator.geolocation.getCurrentPosition(function(i){o||(o=!0,e.latLng=new q.LatLng(i.coords.latitude,i.coords.longitude),n.apply(t,[e]))},function(){o||(o=!0,e.latLng=!1,n.apply(t,[e]))},e.opts.getCurrentPosition):(e.latLng=!1,n.apply(t,[e]))}function x(t){var n,o=!1;if(e(t)&&t.hasOwnProperty("get")){for(n in t)if("get"!==n)return!1;o=!t.get.hasOwnProperty("callback")}return o}function M(){return V.geocoder||(V.geocoder=new q.Geocoder),V.geocoder}function I(){var t=[];this.get=function(n){if(t.length){var o,i,a,r,s,u=d(n);for(o=0;o<t.length;o++){for(r=t[o],s=u.length===r.keys.length,i=0;i<u.length&&s;i++)a=u[i],s=a in r.request,s&&(s=e(n[a])&&"equals"in n[a]&&z(n[a])?n[a].equals(r.request[a]):n[a]===r.request[a]);if(s)return r.results}}},this.store=function(n,e){t.push({request:n,keys:d(n),results:e})}}function P(){var t=[],n=this;n.empty=function(){return!t.length},n.add=function(n){t.push(n)},n.get=function(){return t.length?t[0]:!1},n.ack=function(){t.shift()}}function k(){function n(t){return{id:t.id,name:t.name,object:t.obj,tag:t.tag,data:t.data}}function e(t){z(t.setMap)&&t.setMap(null),z(t.remove)&&t.remove(),z(t.free)&&t.free(),t=null}var o={},i={},r=this;r.add=function(t,n,e,a){var u=t.td||{},l=s(u.id);return o[n]||(o[n]=[]),l in i&&r.clearById(l),i[l]={obj:e,sub:a,name:n,id:l,tag:u.tag,data:u.data},o[n].push(l),l},r.getById=function(t,e,o){var a=!1;return t in i&&(a=e?i[t].sub:o?n(i[t]):i[t].obj),a},r.get=function(t,e,a,r){var s,u,l=v(a);if(!o[t]||!o[t].length)return null;for(s=o[t].length;s;)if(s--,u=o[t][e?s:o[t].length-s-1],u&&i[u]){if(l&&!l(i[u].tag))continue;return r?n(i[u]):i[u].obj}return null},r.all=function(t,e,r){var s=[],u=v(e),l=function(t){var e,a;for(e=0;e<o[t].length;e++)if(a=o[t][e],a&&i[a]){if(u&&!u(i[a].tag))continue;s.push(r?n(i[a]):i[a].obj)}};if(t in o)l(t);else if(a(t))for(t in o)l(t);return s},r.rm=function(t,n,e){var a,s;if(!o[t])return!1;if(n)if(e)for(a=o[t].length-1;a>=0&&(s=o[t][a],!n(i[s].tag));a--);else for(a=0;a<o[t].length&&(s=o[t][a],!n(i[s].tag));a++);else a=e?o[t].length-1:0;return a in o[t]?r.clearById(o[t][a],a):!1},r.clearById=function(t,n){if(t in i){var r,s=i[t].name;for(r=0;a(n)&&r<o[s].length;r++)t===o[s][r]&&(n=r);return e(i[t].obj),i[t].sub&&e(i[t].sub),delete i[t],o[s].splice(n,1),!0}return!1},r.objGetById=function(t){var n,e;if(o.clusterer)for(e in o.clusterer)if((n=i[o.clusterer[e]].obj.getById(t))!==!1)return n;return!1},r.objClearById=function(t){var n;if(o.clusterer)for(n in o.clusterer)if(i[o.clusterer[n]].obj.clearById(t))return!0;return null},r.clear=function(t,n,e,i){var a,s,u,l=v(i);if(t&&t.length)t=h(t);else{t=[];for(a in o)t.push(a)}for(s=0;s<t.length;s++)if(u=t[s],n)r.rm(u,l,!0);else if(e)r.rm(u,l,!1);else for(;r.rm(u,l,!1););},r.objClear=function(n,e,a,r){var s;if(o.clusterer&&(t.inArray("marker",n)>=0||!n.length))for(s in o.clusterer)i[o.clusterer[s]].obj.clear(e,a,r)}}function B(n,e,i){function a(t){var n={};return n[t]={},n}function r(){var t;for(t in i)if(i.hasOwnProperty(t)&&!u.hasOwnProperty(t))return t}var s,u={},l=this,d={latLng:{map:!1,marker:!1,infowindow:!1,circle:!1,overlay:!1,getlatlng:!1,getmaxzoom:!1,getelevation:!1,streetviewpanorama:!1,getaddress:!0},geoloc:{getgeoloc:!0}};o(i)&&(i=a(i)),l.run=function(){for(var o,a;o=r();){if(z(n[o]))return s=o,a=t.extend(!0,{},A[o]||{},i[o].options||{}),void(o in d.latLng?i[o].values?L(i[o].values,n,n[o],{td:i[o],opts:a,session:u}):w(n,n[o],d.latLng[o],{td:i[o],opts:a,session:u}):o in d.geoloc?b(n,n[o],{td:i[o],opts:a,session:u}):n[o].apply(n,[{td:i[o],opts:a,session:u}]));u[o]=null}e.apply(n,[i,u])},l.ack=function(t){u[s]=t,l.run.apply(l,[])}}function j(){return V.ds||(V.ds=new q.DirectionsService),V.ds}function O(){return V.dms||(V.dms=new q.DistanceMatrixService),V.dms}function C(){return V.mzs||(V.mzs=new q.MaxZoomService),V.mzs}function E(){return V.es||(V.es=new q.ElevationService),V.es}function S(t){function n(){var t=this;return t.onAdd=function(){},t.onRemove=function(){},t.draw=function(){},A.classes.OverlayView.apply(t,[])}n.prototype=A.classes.OverlayView.prototype;var e=new n;return e.setMap(t),e}function T(n,o,i){function a(t){T[t]||(delete _[t].options.map,T[t]=new A.classes.Marker(_[t].options),l(n,{td:_[t]},T[t],_[t].id))}function r(){return(y=U.getProjection())?(P=!0,j.push(q.event.addListener(o,"zoom_changed",f)),j.push(q.event.addListener(o,"bounds_changed",f)),void h()):void setTimeout(function(){r.apply(B,[])},25)}function u(t){e(O[t])?(z(O[t].obj.setMap)&&O[t].obj.setMap(null),z(O[t].obj.remove)&&O[t].obj.remove(),z(O[t].shadow.remove)&&O[t].obj.remove(),z(O[t].shadow.setMap)&&O[t].shadow.setMap(null),delete O[t].obj,delete O[t].shadow):T[t]&&T[t].setMap(null),delete O[t]}function d(){var t,n,e,o,i,a,r,s,u=Math.cos,l=Math.sin,d=arguments;return d[0]instanceof q.LatLng?(t=d[0].lat(),e=d[0].lng(),d[1]instanceof q.LatLng?(n=d[1].lat(),o=d[1].lng()):(n=d[1],o=d[2])):(t=d[0],e=d[1],d[2]instanceof q.LatLng?(n=d[2].lat(),o=d[2].lng()):(n=d[2],o=d[3])),i=Math.PI*t/180,a=Math.PI*e/180,r=Math.PI*n/180,s=Math.PI*o/180,6371e3*Math.acos(Math.min(u(i)*u(r)*u(a)*u(s)+u(i)*l(a)*u(r)*l(s)+l(i)*l(r),1))}function c(){var t=d(o.getCenter(),o.getBounds().getNorthEast()),n=new q.Circle({center:o.getCenter(),radius:1.25*t});return n.getBounds()}function p(){var t,n={};for(t in O)n[t]=!0;return n}function f(){clearTimeout(m),m=setTimeout(h,25)}function g(t){var n=y.fromLatLngToDivPixel(t),e=y.fromDivPixelToLatLng(new q.Point(n.x+i.radius,n.y-i.radius)),o=y.fromDivPixelToLatLng(new q.Point(n.x-i.radius,n.y+i.radius));return new q.LatLngBounds(o,e)}function h(){if(!x&&!I&&P){var n,e,a,r,s,l,d,f,h,v,m,y=!1,b=[],B={},j=o.getZoom(),C="maxZoom"in i&&j>i.maxZoom,E=p();for(M=!1,j>3&&(s=c(),y=s.getSouthWest().lng()<s.getNorthEast().lng()),n=0;n<_.length;n++)!_[n]||y&&!s.contains(_[n].options.position)||w&&!w(D[n])||b.push(n);for(;;){for(n=0;B[n]&&n<b.length;)n++;if(n===b.length)break;if(r=[],k&&!C){m=10;do for(f=r,r=[],m--,d=f.length?s.getCenter():_[b[n]].options.position,s=g(d),e=n;e<b.length;e++)B[e]||s.contains(_[b[e]].options.position)&&r.push(e);while(f.length<r.length&&r.length>1&&m)}else for(e=n;e<b.length;e++)if(!B[e]){r.push(e);break}for(l={indexes:[],ref:[]},h=v=0,a=0;a<r.length;a++)B[r[a]]=!0,l.indexes.push(b[r[a]]),l.ref.push(b[r[a]]),h+=_[b[r[a]]].options.position.lat(),v+=_[b[r[a]]].options.position.lng();h/=r.length,v/=r.length,l.latLng=new q.LatLng(h,v),l.ref=l.ref.join("-"),l.ref in E?delete E[l.ref]:(1===r.length&&(O[l.ref]=!0),L(l))}t.each(E,function(t){u(t)}),I=!1}}var m,y,w,L,b,x=!1,M=!1,I=!1,P=!1,k=!0,B=this,j=[],O={},C={},E={},T=[],_=[],D=[],U=S(o,i.radius);r(),B.getById=function(t){return t in C?(a(C[t]),T[C[t]]):!1},B.rm=function(t){var n=C[t];T[n]&&T[n].setMap(null),delete T[n],T[n]=!1,delete _[n],_[n]=!1,delete D[n],D[n]=!1,delete C[t],delete E[n],M=!0},B.clearById=function(t){return t in C?(B.rm(t),!0):void 0},B.clear=function(t,n,e){var o,i,a,r,s,u=[],l=v(e);for(t?(o=_.length-1,i=-1,a=-1):(o=0,i=_.length,a=1),r=o;r!==i&&(!_[r]||l&&!l(_[r].tag)||(u.push(E[r]),!n&&!t));r+=a);for(s=0;s<u.length;s++)B.rm(u[s])},B.add=function(t,n){t.id=s(t.id),B.clearById(t.id),C[t.id]=T.length,E[T.length]=t.id,T.push(null),_.push(t),D.push(n),M=!0},B.addMarker=function(t,e){e=e||{},e.id=s(e.id),B.clearById(e.id),e.options||(e.options={}),e.options.position=t.getPosition(),l(n,{td:e},t,e.id),C[e.id]=T.length,E[T.length]=e.id,T.push(t),_.push(e),D.push(e.data||{}),M=!0},B.td=function(t){return _[t]},B.value=function(t){return D[t]},B.marker=function(t){return t in T?(a(t),T[t]):!1},B.markerIsSet=function(t){return Boolean(T[t])},B.setMarker=function(t,n){T[t]=n},B.store=function(t,n,e){O[t.ref]={obj:n,shadow:e}},B.free=function(){var n;for(n=0;n<j.length;n++)q.event.removeListener(j[n]);j=[],t.each(O,function(t){u(t)}),O={},t.each(_,function(t){_[t]=null}),_=[],t.each(T,function(t){T[t]&&(T[t].setMap(null),delete T[t])}),T=[],t.each(D,function(t){delete D[t]}),D=[],C={},E={}},B.filter=function(t){w=t,h()},B.enable=function(t){k!==t&&(k=t,h())},B.display=function(t){L=t},B.error=function(t){b=t},B.beginUpdate=function(){x=!0},B.endUpdate=function(){x=!1,M&&h()},B.autofit=function(t){var n;for(n=0;n<_.length;n++)_[n]&&t.extend(_[n].options.position)}}function _(t,n){var e=this;e.id=function(){return t},e.filter=function(t){n.filter(t)},e.enable=function(){n.enable(!0)},e.disable=function(){n.enable(!1)},e.add=function(t,e,o){o||n.beginUpdate(),n.addMarker(t,e),o||n.endUpdate()},e.getById=function(t){return n.getById(t)},e.clearById=function(t,e){var o;return e||n.beginUpdate(),o=n.clearById(t),e||n.endUpdate(),o},e.clear=function(t,e,o,i){i||n.beginUpdate(),n.clear(t,e,o),i||n.endUpdate()}}function D(n,e,o,i){var a=this,r=[];A.classes.OverlayView.call(a),a.setMap(n),a.onAdd=function(){var n=a.getPanes();e.pane in n&&t(n[e.pane]).append(i),t.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "),function(n,e){r.push(q.event.addDomListener(i[0],e,function(n){t.Event(n).stopPropagation(),q.event.trigger(a,e,[n]),a.draw()}))}),r.push(q.event.addDomListener(i[0],"contextmenu",function(n){t.Event(n).stopPropagation(),q.event.trigger(a,"rightclick",[n]),a.draw()}))},a.getPosition=function(){return o},a.setPosition=function(t){o=t,a.draw()},a.draw=function(){var t=a.getProjection().fromLatLngToDivPixel(o);i.css("left",t.x+e.offset.x+"px").css("top",t.y+e.offset.y+"px")},a.onRemove=function(){var t;for(t=0;t<r.length;t++)q.event.removeListener(r[t]);i.remove()},a.hide=function(){i.hide()},a.show=function(){i.show()},a.toggle=function(){i&&(i.is(":visible")?a.show():a.hide())},a.toggleDOM=function(){a.setMap(a.getMap()?null:n)},a.getDOMElement=function(){return i[0]}}function U(i){function r(){!b&&(b=M.get())&&b.run()}function d(){b=null,M.ack(),r.call(x)}function c(t){var n,e=t.td.callback;e&&(n=Array.prototype.slice.call(arguments,1),z(e)?e.apply(i,n):R(e)&&z(e[1])&&e[1].apply(e[0],n))}function g(t,n,e){e&&l(i,t,n,e),c(t,n),b.ack(n)}function v(n,e){e=e||{};var o=e.td&&e.td.options?e.td.options:0;S?o&&(o.center&&(o.center=m(o.center)),S.setOptions(o)):(o=e.opts||t.extend(!0,{},A.map,o||{}),o.center=n||m(o.center),S=new A.classes.Map(i.get(0),o))}function w(e){var o,a,r=new T(i,S,e),s={},u={},d=[],c=/^[0-9]+$/;for(a in e)c.test(a)?(d.push(1*a),u[a]=e[a],u[a].width=u[a].width||0,u[a].height=u[a].height||0):s[a]=e[a];return d.sort(function(t,n){return t>n}),o=s.calculator?function(n){var e=[];return t.each(n,function(t,n){e.push(r.value(n))}),s.calculator.apply(i,[e])}:function(t){return t.length},r.error(function(){f.apply(x,arguments)}),r.display(function(a){var c,p,f,g,h,v,y=o(a.indexes);if(e.force||y>1)for(c=0;c<d.length;c++)d[c]<=y&&(p=u[d[c]]);p?(h=p.offset||[-p.width/2,-p.height/2],f=t.extend({},s),f.options=t.extend({pane:"overlayLayer",content:p.content?p.content.replace("CLUSTER_COUNT",y):"",offset:{x:("x"in h?h.x:h[0])||0,y:("y"in h?h.y:h[1])||0}},s.options||{}),g=x.overlay({td:f,opts:f.options,latLng:m(a)},!0),f.options.pane="floatShadow",f.options.content=t(document.createElement("div")).width(p.width+"px").height(p.height+"px").css({cursor:"pointer"}),v=x.overlay({td:f,opts:f.options,latLng:m(a)},!0),s.data={latLng:m(a),markers:[]},t.each(a.indexes,function(t,n){s.data.markers.push(r.value(n)),r.markerIsSet(n)&&r.marker(n).setMap(null)}),l(i,{td:s},v,n,{main:g,shadow:v}),r.store(a,g,v)):t.each(a.indexes,function(t,n){r.marker(n).setMap(S)})}),r}function L(n,e,o){var a=[],r="values"in n.td;return r||(n.td.values=[{options:n.opts}]),n.td.values.length?(v(),t.each(n.td.values,function(t,r){var s,u,d,c,f=p(n,r);if(f.options[o])if(f.options[o][0][0]&&R(f.options[o][0][0]))for(u=0;u<f.options[o].length;u++)for(d=0;d<f.options[o][u].length;d++)f.options[o][u][d]=m(f.options[o][u][d]);else for(u=0;u<f.options[o].length;u++)f.options[o][u]=m(f.options[o][u]);f.options.map=S,c=new q[e](f.options),a.push(c),s=I.add({td:f},e.toLowerCase(),c),l(i,{td:f},c,s)}),void g(n,r?a:a[0])):void g(n,!1)}var b,x=this,M=new P,I=new k,S=null;x._plan=function(t){var n;for(n=0;n<t.length;n++)M.add(new B(x,d,t[n]));r()},x.map=function(t){v(t.latLng,t),l(i,t,S),g(t,S)},x.destroy=function(t){I.clear(),i.empty(),S&&(S=null),g(t,!0)},x.overlay=function(n,e){var o=[],a="values"in n.td;return a||(n.td.values=[{latLng:n.latLng,options:n.opts}]),n.td.values.length?(D.__initialised||(D.prototype=new A.classes.OverlayView,D.__initialised=!0),t.each(n.td.values,function(a,r){var s,u,d=p(n,r),c=t(document.createElement("div")).css({border:"none",borderWidth:0,position:"absolute"});c.append(d.options.content),u=new D(S,d.options,m(d)||m(r),c),o.push(u),c=null,e||(s=I.add(n,"overlay",u),l(i,{td:d},u,s))}),e?o[0]:void g(n,a?o:o[0])):void g(n,!1)},x.marker=function(n){var e,o,a,r="values"in n.td,u=!S;return r||(n.opts.position=n.latLng||m(n.opts.position),n.td.values=[{options:n.opts}]),n.td.values.length?(u&&v(),n.td.cluster&&!S.getBounds()?void q.event.addListenerOnce(S,"bounds_changed",function(){x.marker.apply(x,[n])}):void(n.td.cluster?(n.td.cluster instanceof _?(o=n.td.cluster,a=I.getById(o.id(),!0)):(a=w(n.td.cluster),o=new _(s(n.td.id,!0),a),I.add(n,"clusterer",o,a)),a.beginUpdate(),t.each(n.td.values,function(t,e){var o=p(n,e);o.options.position=m(o.options.position?o.options.position:e),o.options.position&&(o.options.map=S,u&&(S.setCenter(o.options.position),u=!1),a.add(o,e))}),a.endUpdate(),g(n,o)):(e=[],t.each(n.td.values,function(t,o){var a,r,s=p(n,o);s.options.position=m(s.options.position?s.options.position:o),s.options.position&&(s.options.map=S,u&&(S.setCenter(s.options.position),u=!1),r=new A.classes.Marker(s.options),e.push(r),a=I.add({td:s},"marker",r),l(i,{td:s},r,a))}),g(n,r?e:e[0])))):void g(n,!1)},x.getroute=function(t){t.opts.origin=m(t.opts.origin,!0),t.opts.destination=m(t.opts.destination,!0),j().route(t.opts,function(n,e){c(t,e===q.DirectionsStatus.OK?n:!1,e),b.ack()})},x.getdistance=function(t){var n;for(t.opts.origins=h(t.opts.origins),n=0;n<t.opts.origins.length;n++)t.opts.origins[n]=m(t.opts.origins[n],!0);for(t.opts.destinations=h(t.opts.destinations),n=0;n<t.opts.destinations.length;n++)t.opts.destinations[n]=m(t.opts.destinations[n],!0);O().getDistanceMatrix(t.opts,function(n,e){c(t,e===q.DistanceMatrixStatus.OK?n:!1,e),b.ack()})},x.infowindow=function(e){var o=[],r="values"in e.td;r||(e.latLng&&(e.opts.position=e.latLng),e.td.values=[{options:e.opts}]),t.each(e.td.values,function(t,s){var u,d,c=p(e,s);c.options.position=m(c.options.position?c.options.position:s.latLng),S||v(c.options.position),d=new A.classes.InfoWindow(c.options),d&&(a(c.open)||c.open)&&(r?d.open(S,c.anchor||n):d.open(S,c.anchor||(e.latLng?n:e.session.marker?e.session.marker:n))),o.push(d),u=I.add({td:c},"infowindow",d),l(i,{td:c},d,u)}),g(e,r?o:o[0])},x.circle=function(n){var e=[],o="values"in n.td;return o||(n.opts.center=n.latLng||m(n.opts.center),n.td.values=[{options:n.opts}]),n.td.values.length?(t.each(n.td.values,function(t,o){var a,r,s=p(n,o);s.options.center=m(s.options.center?s.options.center:o),S||v(s.options.center),s.options.map=S,r=new A.classes.Circle(s.options),e.push(r),a=I.add({td:s},"circle",r),l(i,{td:s},r,a)}),void g(n,o?e:e[0])):void g(n,!1)},x.getaddress=function(t){c(t,t.results,t.status),b.ack()},x.getlatlng=function(t){c(t,t.results,t.status),b.ack()},x.getmaxzoom=function(t){C().getMaxZoomAtLatLng(t.latLng,function(n){c(t,n.status===q.MaxZoomStatus.OK?n.zoom:!1,status),b.ack()})},x.getelevation=function(t){var n,e=[],o=function(n,e){c(t,e===q.ElevationStatus.OK?n:!1,e),b.ack()};if(t.latLng)e.push(t.latLng);else for(e=h(t.td.locations||[]),n=0;n<e.length;n++)e[n]=m(e[n]);if(e.length)E().getElevationForLocations({locations:e},o);else{if(t.td.path&&t.td.path.length)for(n=0;n<t.td.path.length;n++)e.push(m(t.td.path[n]));e.length?E().getElevationAlongPath({path:e,samples:t.td.samples},o):b.ack()}},x.defaults=function(n){t.each(n.td,function(n,o){A[n]=e(A[n])?t.extend({},A[n],o):o}),b.ack(!0)},x.rectangle=function(n){var e=[],o="values"in n.td;return o||(n.td.values=[{options:n.opts}]),n.td.values.length?(t.each(n.td.values,function(t,o){var a,r,s=p(n,o);s.options.bounds=y(s.options.bounds?s.options.bounds:o),S||v(s.options.bounds.getCenter()),s.options.map=S,r=new A.classes.Rectangle(s.options),e.push(r),a=I.add({td:s},"rectangle",r),l(i,{td:s},r,a)}),void g(n,o?e:e[0])):void g(n,!1)},x.polyline=function(t){L(t,"Polyline","path")},x.polygon=function(t){L(t,"Polygon","paths")},x.trafficlayer=function(t){v();var n=I.get("trafficlayer");n||(n=new A.classes.TrafficLayer,n.setMap(S),I.add(t,"trafficlayer",n)),g(t,n)},x.bicyclinglayer=function(t){v();var n=I.get("bicyclinglayer");n||(n=new A.classes.BicyclingLayer,n.setMap(S),I.add(t,"bicyclinglayer",n)),g(t,n)},x.groundoverlay=function(t){t.opts.bounds=y(t.opts.bounds),t.opts.bounds&&v(t.opts.bounds.getCenter());var n,e=new A.classes.GroundOverlay(t.opts.url,t.opts.bounds,t.opts.opts);e.setMap(S),n=I.add(t,"groundoverlay",e),g(t,e,n)},x.streetviewpanorama=function(n){n.opts.opts||(n.opts.opts={}),n.latLng?n.opts.opts.position=n.latLng:n.opts.opts.position&&(n.opts.opts.position=m(n.opts.opts.position)),n.td.divId?n.opts.container=document.getElementById(n.td.divId):n.opts.container&&(n.opts.container=t(n.opts.container).get(0));var e,o=new A.classes.StreetViewPanorama(n.opts.container,n.opts.opts);o&&S.setStreetView(o),e=I.add(n,"streetviewpanorama",o),g(n,o,e)},x.kmllayer=function(n){var e=[],o="values"in n.td;return o||(n.td.values=[{options:n.opts}]),n.td.values.length?(t.each(n.td.values,function(t,o){var a,r,s,d=p(n,o);S||v(),s=d.options,d.options.opts&&(s=d.options.opts,d.options.url&&(s.url=d.options.url)),s.map=S,r=u("3.10")?new A.classes.KmlLayer(s):new A.classes.KmlLayer(s.url,s),e.push(r),a=I.add({td:d},"kmllayer",r),l(i,{td:d},r,a)}),void g(n,o?e:e[0])):void g(n,!1)},x.panel=function(n){v();var e,o,r=0,s=0,u=t(document.createElement("div"));u.css({position:"absolute",zIndex:1e3,visibility:"hidden"}),n.opts.content&&(o=t(n.opts.content),u.append(o),i.first().prepend(u),a(n.opts.left)?a(n.opts.right)?n.opts.center&&(r=(i.width()-o.width())/2):r=i.width()-o.width()-n.opts.right:r=n.opts.left,a(n.opts.top)?a(n.opts.bottom)?n.opts.middle&&(s=(i.height()-o.height())/2):s=i.height()-o.height()-n.opts.bottom:s=n.opts.top,u.css({top:s,left:r,visibility:"visible"})),e=I.add(n,"panel",u),g(n,u,e),u=null},x.directionsrenderer=function(n){n.opts.map=S;var e,o=new q.DirectionsRenderer(n.opts);n.td.divId?o.setPanel(document.getElementById(n.td.divId)):n.td.container&&o.setPanel(t(n.td.container).get(0)),e=I.add(n,"directionsrenderer",o),g(n,o,e)},x.getgeoloc=function(t){g(t,t.latLng)},x.styledmaptype=function(t){v();var n=new A.classes.StyledMapType(t.td.styles,t.opts);S.mapTypes.set(t.td.id,n),g(t,n)},x.imagemaptype=function(t){v();var n=new A.classes.ImageMapType(t.opts);S.mapTypes.set(t.td.id,n),g(t,n)},x.autofit=function(n){var e=new q.LatLngBounds;t.each(I.all(),function(t,n){n.getPosition?e.extend(n.getPosition()):n.getBounds?(e.extend(n.getBounds().getNorthEast()),e.extend(n.getBounds().getSouthWest())):n.getPaths?n.getPaths().forEach(function(t){t.forEach(function(t){e.extend(t)})}):n.getPath?n.getPath().forEach(function(t){e.extend(t)}):n.getCenter?e.extend(n.getCenter()):"function"==typeof _&&n instanceof _&&(n=I.getById(n.id(),!0),n&&n.autofit(e))}),e.isEmpty()||S.getBounds()&&S.getBounds().equals(e)||("maxZoom"in n.td&&q.event.addListenerOnce(S,"bounds_changed",function(){this.getZoom()>n.td.maxZoom&&this.setZoom(n.td.maxZoom)}),S.fitBounds(e)),g(n,!0)},x.clear=function(n){if(o(n.td)){if(I.clearById(n.td)||I.objClearById(n.td))return void g(n,!0);n.td={name:n.td}}n.td.id?t.each(h(n.td.id),function(t,n){I.clearById(n)||I.objClearById(n)}):(I.clear(h(n.td.name),n.td.last,n.td.first,n.td.tag),I.objClear(h(n.td.name),n.td.last,n.td.first,n.td.tag)),g(n,!0)},x.get=function(e,i,a){var r,s,u=i?e:e.td;return i||(a=u.full),o(u)?(s=I.getById(u,!1,a)||I.objGetById(u),s===!1&&(r=u,u={})):r=u.name,"map"===r&&(s=S),s||(s=[],u.id?(t.each(h(u.id),function(t,n){s.push(I.getById(n,!1,a)||I.objGetById(n))}),R(u.id)||(s=s[0])):(t.each(r?h(r):[n],function(n,e){var o;u.first?(o=I.get(e,!1,u.tag,a),o&&s.push(o)):u.all?t.each(I.all(e,u.tag,a),function(t,n){s.push(n)}):(o=I.get(e,!0,u.tag,a),o&&s.push(o))}),u.all||R(r)||(s=s[0]))),s=R(s)||!u.all?s:[s],i?s:void g(e,s)},x.exec=function(n){t.each(h(n.td.func),function(e,o){t.each(x.get(n.td,!0,n.td.hasOwnProperty("full")?n.td.full:!0),function(t,n){o.call(i,n)})}),g(n,!0)},x.trigger=function(n){if(o(n.td))q.event.trigger(S,n.td);else{var e=[S,n.td.eventName];n.td.var_args&&t.each(n.td.var_args,function(t,n){e.push(n)}),q.event.trigger.apply(q.event,e)}c(n),b.ack()}}var A,q,Z=0,z=t.isFunction,R=t.isArray,V={},G=new I;t.fn.gmap3=function(){var n,e=[],o=!0,i=[];for(r(),n=0;n<arguments.length;n++)arguments[n]&&e.push(arguments[n]);return e.length||e.push("map"),t.each(this,function(){var n=t(this),a=n.data("gmap3");o=!1,a||(a=new U(n),n.data("gmap3",a)),1!==e.length||"get"!==e[0]&&!x(e[0])?a._plan(e):i.push("get"===e[0]?a.get("map",!0):a.get(e[0].get,!0,e[0].get.full))}),i.length?1===i.length?i[0]:i:this}}(jQuery);
/*
 * ScrollToFixed
 * https://github.com/bigspotteddog/ScrollToFixed
 * 
 * Copyright (c) 2011 Joseph Cava-Lynch
 * MIT license
 */
(function($) {
    $.isScrollToFixed = function(el) {
        return !!$(el).data('ScrollToFixed');
    };

    $.ScrollToFixed = function(el, options) {
        // To avoid scope issues, use 'base' instead of 'this' to reference this
        // class from internal events and functions.
        var base = this;

        // Access to jQuery and DOM versions of element.
        base.$el = $(el);
        base.el = el;

        // Add a reverse reference to the DOM object.
        base.$el.data('ScrollToFixed', base);

        // A flag so we know if the scroll has been reset.
        var isReset = false;

        // The element that was given to us to fix if scrolled above the top of
        // the page.
        var target = base.$el;

        var position;
        var originalPosition;
        var originalOffsetTop;
        var originalZIndex;

        // The offset top of the element when resetScroll was called. This is
        // used to determine if we have scrolled past the top of the element.
        var offsetTop = 0;

        // The offset left of the element when resetScroll was called. This is
        // used to move the element left or right relative to the horizontal
        // scroll.
        var offsetLeft = 0;
        var originalOffsetLeft = -1;

        // This last offset used to move the element horizontally. This is used
        // to determine if we need to move the element because we would not want
        // to do that for no reason.
        var lastOffsetLeft = -1;

        // This is the element used to fill the void left by the target element
        // when it goes fixed; otherwise, everything below it moves up the page.
        var spacer = null;

        var spacerClass;

        var className;

        // Capture the original offsets for the target element. This needs to be
        // called whenever the page size changes or when the page is first
        // scrolled. For some reason, calling this before the page is first
        // scrolled causes the element to become fixed too late.
        function resetScroll() {
            // Set the element to it original positioning.
            target.trigger('preUnfixed.ScrollToFixed');
            setUnfixed();
            target.trigger('unfixed.ScrollToFixed');

            // Reset the last offset used to determine if the page has moved
            // horizontally.
            lastOffsetLeft = -1;

            // Capture the offset top of the target element.
            offsetTop = target.offset().top;

            // Capture the offset left of the target element.
            offsetLeft = target.offset().left;

            // If the offsets option is on, alter the left offset.
            if (base.options.offsets) {
                offsetLeft += (target.offset().left - target.position().left);
            }

            if (originalOffsetLeft == -1) {
                originalOffsetLeft = offsetLeft;
            }

            position = target.css('position');

            // Set that this has been called at least once.
            isReset = true;

            if (base.options.bottom != -1) {
                target.trigger('preFixed.ScrollToFixed');
                setFixed();
                target.trigger('fixed.ScrollToFixed');
            }
        }

        function getLimit() {
            var limit = base.options.limit;
            if (!limit) return 0;

            if (typeof(limit) === 'function') {
                return limit.apply(target);
            }
            return limit;
        }

        // Returns whether the target element is fixed or not.
        function isFixed() {
            return position === 'fixed';
        }

        // Returns whether the target element is absolute or not.
        function isAbsolute() {
            return position === 'absolute';
        }

        function isUnfixed() {
            return !(isFixed() || isAbsolute());
        }

        // Sets the target element to fixed. Also, sets the spacer to fill the
        // void left by the target element.
        function setFixed() {
            // Only fix the target element and the spacer if we need to.
            if (!isFixed()) {
                // Set the spacer to fill the height and width of the target
                // element, then display it.
                spacer.css({
                    'display' : target.css('display'),
                    'width' : target.outerWidth(true),
                    'height' : target.outerHeight(true),
                    'float' : target.css('float')
                });

                // Set the target element to fixed and set its width so it does
                // not fill the rest of the page horizontally. Also, set its top
                // to the margin top specified in the options.

                cssOptions={
                    'z-index' : base.options.zIndex,
                    'position' : 'fixed',
                    'top' : base.options.bottom == -1?getMarginTop():'',
                    'bottom' : base.options.bottom == -1?'':base.options.bottom,
                    'margin-left' : '0px'
                }
                if (!base.options.dontSetWidth){ cssOptions['width']=target.css('width'); };

                target.css(cssOptions);
                
                target.addClass(base.options.baseClassName);
                
                if (base.options.className) {
                    target.addClass(base.options.className);
                }

                position = 'fixed';
            }
        }

        function setAbsolute() {

            var top = getLimit();
            var left = offsetLeft;

            if (base.options.removeOffsets) {
                left = '';
                top = top - offsetTop;
            }

            cssOptions={
              'position' : 'absolute',
              'top' : top,
              'left' : left,
              'margin-left' : '0px',
              'bottom' : ''
            }
            if (!base.options.dontSetWidth){ cssOptions['width']=target.css('width'); };

            target.css(cssOptions);

            position = 'absolute';
        }

        // Sets the target element back to unfixed. Also, hides the spacer.
        function setUnfixed() {
            // Only unfix the target element and the spacer if we need to.
            if (!isUnfixed()) {
                lastOffsetLeft = -1;

                // Hide the spacer now that the target element will fill the
                // space.
                spacer.css('display', 'none');

                // Remove the style attributes that were added to the target.
                // This will reverse the target back to the its original style.
                target.css({
                    'z-index' : originalZIndex,
                    'width' : '',
                    'position' : originalPosition,
                    'left' : '',
                    'top' : originalOffsetTop,
                    'margin-left' : ''
                });

                target.removeClass('scroll-to-fixed-fixed');

                if (base.options.className) {
                    target.removeClass(base.options.className);
                }

                position = null;
            }
        }

        // Moves the target element left or right relative to the horizontal
        // scroll position.
        function setLeft(x) {
            // Only if the scroll is not what it was last time we did this.
            if (x != lastOffsetLeft) {
                // Move the target element horizontally relative to its original
                // horizontal position.
                target.css('left', offsetLeft - x);

                // Hold the last horizontal position set.
                lastOffsetLeft = x;
            }
        }

        function getMarginTop() {
            var marginTop = base.options.marginTop;
            if (!marginTop) return 0;

            if (typeof(marginTop) === 'function') {
                return marginTop.apply(target);
            }
            return marginTop;
        }

        // Checks to see if we need to do something based on new scroll position
        // of the page.
        function checkScroll() {
            if (!$.isScrollToFixed(target)) return;
            var wasReset = isReset;

            // If resetScroll has not yet been called, call it. This only
            // happens once.
            if (!isReset) {
                resetScroll();
            } else if (isUnfixed()) {
                // if the offset has changed since the last scroll,
                // we need to get it again.

                // Capture the offset top of the target element.
                offsetTop = target.offset().top;

                // Capture the offset left of the target element.
                offsetLeft = target.offset().left;
            }

            // Grab the current horizontal scroll position.
            var x = $(window).scrollLeft();

            // Grab the current vertical scroll position.
            var y = $(window).scrollTop();

            // Get the limit, if there is one.
            var limit = getLimit();

            // If the vertical scroll position, plus the optional margin, would
            // put the target element at the specified limit, set the target
            // element to absolute.
            if (base.options.minWidth && $(window).width() < base.options.minWidth) {
                if (!isUnfixed() || !wasReset) {
                    postPosition();
                    target.trigger('preUnfixed.ScrollToFixed');
                    setUnfixed();
                    target.trigger('unfixed.ScrollToFixed');
                }
            } else if (base.options.maxWidth && $(window).width() > base.options.maxWidth) {
                if (!isUnfixed() || !wasReset) {
                    postPosition();
                    target.trigger('preUnfixed.ScrollToFixed');
                    setUnfixed();
                    target.trigger('unfixed.ScrollToFixed');
                }
            } else if (base.options.bottom == -1) {
                // If the vertical scroll position, plus the optional margin, would
                // put the target element at the specified limit, set the target
                // element to absolute.
                if (limit > 0 && y >= limit - getMarginTop()) {
                    if (!isAbsolute() || !wasReset) {
                        postPosition();
                        target.trigger('preAbsolute.ScrollToFixed');
                        setAbsolute();
                        target.trigger('unfixed.ScrollToFixed');
                    }
                // If the vertical scroll position, plus the optional margin, would
                // put the target element above the top of the page, set the target
                // element to fixed.
                } else if (y >= offsetTop - getMarginTop()) {
                    if (!isFixed() || !wasReset) {
                        postPosition();
                        target.trigger('preFixed.ScrollToFixed');

                        // Set the target element to fixed.
                        setFixed();

                        // Reset the last offset left because we just went fixed.
                        lastOffsetLeft = -1;

                        target.trigger('fixed.ScrollToFixed');
                    }
                    // If the page has been scrolled horizontally as well, move the
                    // target element accordingly.
                    setLeft(x);
                } else {
                    // Set the target element to unfixed, placing it where it was
                    // before.
                    if (!isUnfixed() || !wasReset) {
                        postPosition();
                        target.trigger('preUnfixed.ScrollToFixed');
                        setUnfixed();
                        target.trigger('unfixed.ScrollToFixed');
                    }
                }
            } else {
                if (limit > 0) {
                    if (y + $(window).height() - target.outerHeight(true) >= limit - (getMarginTop() || -getBottom())) {
                        if (isFixed()) {
                            postPosition();
                            target.trigger('preUnfixed.ScrollToFixed');

                            if (originalPosition === 'absolute') {
                                setAbsolute();
                            } else {
                                setUnfixed();
                            }

                            target.trigger('unfixed.ScrollToFixed');
                        }
                    } else {
                        if (!isFixed()) {
                            postPosition();
                            target.trigger('preFixed.ScrollToFixed');
                            setFixed();
                        }
                        setLeft(x);
                        target.trigger('fixed.ScrollToFixed');
                    }
                } else {
                    setLeft(x);
                }
            }
        }

        function getBottom() {
            if (!base.options.bottom) return 0;
            return base.options.bottom;
        }

        function postPosition() {
            var position = target.css('position');

            if (position == 'absolute') {
                target.trigger('postAbsolute.ScrollToFixed');
            } else if (position == 'fixed') {
                target.trigger('postFixed.ScrollToFixed');
            } else {
                target.trigger('postUnfixed.ScrollToFixed');
            }
        }

        var windowResize = function(event) {
            // Check if the element is visible before updating it's position, which
            // improves behavior with responsive designs where this element is hidden.
            if(target.is(':visible')) {
                isReset = false;
                checkScroll();
            }
        }

        var windowScroll = function(event) {
            (!!window.requestAnimationFrame) ? requestAnimationFrame(checkScroll) : checkScroll();
        }

        // From: http://kangax.github.com/cft/#IS_POSITION_FIXED_SUPPORTED
        var isPositionFixedSupported = function() {
            var container = document.body;

            if (document.createElement && container && container.appendChild && container.removeChild) {
                var el = document.createElement('div');

                if (!el.getBoundingClientRect) return null;

                el.innerHTML = 'x';
                el.style.cssText = 'position:fixed;top:100px;';
                container.appendChild(el);

                var originalHeight = container.style.height,
                originalScrollTop = container.scrollTop;

                container.style.height = '3000px';
                container.scrollTop = 500;

                var elementTop = el.getBoundingClientRect().top;
                container.style.height = originalHeight;

                var isSupported = (elementTop === 100);
                container.removeChild(el);
                container.scrollTop = originalScrollTop;

                return isSupported;
            }

            return null;
        }

        var preventDefault = function(e) {
            e = e || window.event;
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.returnValue = false;
        }

        // Initializes this plugin. Captures the options passed in, turns this
        // off for devices that do not support fixed position, adds the spacer,
        // and binds to the window scroll and resize events.
        base.init = function() {
            // Capture the options for this plugin.
            base.options = $.extend({}, $.ScrollToFixed.defaultOptions, options);

            originalZIndex = target.css('z-index')

            // Turn off this functionality for devices that do not support it.
            // if (!(base.options && base.options.dontCheckForPositionFixedSupport)) {
            //     var fixedSupported = isPositionFixedSupported();
            //     if (!fixedSupported) return;
            // }

            // Put the target element on top of everything that could be below
            // it. This reduces flicker when the target element is transitioning
            // to fixed.
            base.$el.css('z-index', base.options.zIndex);

            // Create a spacer element to fill the void left by the target
            // element when it goes fixed.
            spacer = $('<div />');

            position = target.css('position');
            originalPosition = target.css('position');

            originalOffsetTop = target.css('top');

            // Place the spacer right after the target element.
            if (isUnfixed()) base.$el.after(spacer);

            // Reset the target element offsets when the window is resized, then
            // check to see if we need to fix or unfix the target element.
            $(window).bind('resize.ScrollToFixed', windowResize);

            // When the window scrolls, check to see if we need to fix or unfix
            // the target element.
            $(window).bind('scroll.ScrollToFixed', windowScroll);

            // For touch devices, call checkScroll directlly rather than
            // rAF wrapped windowScroll to animate the element
            if ('ontouchmove' in window) {
              $(window).bind('touchmove.ScrollToFixed', checkScroll);
            }

            if (base.options.preFixed) {
                target.bind('preFixed.ScrollToFixed', base.options.preFixed);
            }
            if (base.options.postFixed) {
                target.bind('postFixed.ScrollToFixed', base.options.postFixed);
            }
            if (base.options.preUnfixed) {
                target.bind('preUnfixed.ScrollToFixed', base.options.preUnfixed);
            }
            if (base.options.postUnfixed) {
                target.bind('postUnfixed.ScrollToFixed', base.options.postUnfixed);
            }
            if (base.options.preAbsolute) {
                target.bind('preAbsolute.ScrollToFixed', base.options.preAbsolute);
            }
            if (base.options.postAbsolute) {
                target.bind('postAbsolute.ScrollToFixed', base.options.postAbsolute);
            }
            if (base.options.fixed) {
                target.bind('fixed.ScrollToFixed', base.options.fixed);
            }
            if (base.options.unfixed) {
                target.bind('unfixed.ScrollToFixed', base.options.unfixed);
            }

            if (base.options.spacerClass) {
                spacer.addClass(base.options.spacerClass);
            }

            target.bind('resize.ScrollToFixed', function() {
                spacer.height(target.height());
            });

            target.bind('scroll.ScrollToFixed', function() {
                target.trigger('preUnfixed.ScrollToFixed');
                setUnfixed();
                target.trigger('unfixed.ScrollToFixed');
                checkScroll();
            });

            target.bind('detach.ScrollToFixed', function(ev) {
                preventDefault(ev);

                target.trigger('preUnfixed.ScrollToFixed');
                setUnfixed();
                target.trigger('unfixed.ScrollToFixed');

                $(window).unbind('resize.ScrollToFixed', windowResize);
                $(window).unbind('scroll.ScrollToFixed', windowScroll);

                target.unbind('.ScrollToFixed');

                //remove spacer from dom
                spacer.remove();

                base.$el.removeData('ScrollToFixed');
            });

            // Reset everything.
            windowResize();
        };

        // Initialize the plugin.
        base.init();
    };

    // Sets the option defaults.
    $.ScrollToFixed.defaultOptions = {
        marginTop : 0,
        limit : 0,
        bottom : -1,
        zIndex : 1000,
        baseClassName: 'scroll-to-fixed-fixed'
    };

    // Returns enhanced elements that will fix to the top of the page when the
    // page is scrolled.
    $.fn.scrollToFixed = function(options) {
        return this.each(function() {
            (new $.ScrollToFixed(this, options));
        });
    };
})(jQuery);

/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

(function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function(xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		//get the starting position of each element to have parallax applied to it		
		$this.each(function(){
		    firstTop = $this.offset().top;
		});

		if (outerHeight) {
			getHeight = function(jqo) {
				return jqo.outerHeight(true);
			};
		} else {
			getHeight = function(jqo) {
				return jqo.height();
			};
		}
			
		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || xpos === null) xpos = "50%";
		if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
		if (arguments.length < 3 || outerHeight === null) outerHeight = true;
		
		// function to be called whenever the window is scrolled or resized
		function update(){
			var pos = $window.scrollTop();				

			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);

				// Check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowHeight) {
					return;
				}

				$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
			});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);

/**
 * @preserve Copyright 2011 Syd Lawrence ( www.sydlawrence.com ).
 * Version: 0.2
 *
 * Licensed under MIT and GPLv2.
 *
 * Usage: $('body').videoBG(options);
 *
 */

 (function( $ ){

  $.fn.videoBG = function( selector, options ) {
    if (options === undefined) {
      options = {};
    }
    if (typeof selector === "object") {
      options = $.extend({}, $.fn.videoBG.defaults, selector);
    }
    else if (!selector) {
      options = $.fn.videoBG.defaults;
    }
    else {
      return $(selector).videoBG(options);
    }

    var container = $(this);

    // check if elements available otherwise it will cause issues
    if (!container.length) {
      return;
    }

    // container to be at least relative
    if (container.css('position') == 'static' || !container.css('position')) {
      container.css('position','relative');
    }

    // we need a width
    if (options.width === 0) {
      options.width = container.width();
    }

    // we need a height
    if (options.height === 0) {
      options.height = container.height();
    }

    // get the wrapper
    var wrap = $.fn.videoBG.wrapper();
    wrap.height(options.height)
      .width(options.width);

    // if is a text replacement
    if (options.textReplacement) {

      // force sizes
      options.scale = true;

      // set sizes and forcing text out
      container.width(options.width)
        .height(options.height)
        .css('text-indent','-9999px');
    }
    else {

      // set the wrapper above the video
      wrap.css('z-index',options.zIndex+1);
    }

    // move the contents into the wrapper
    wrap.html(container.clone(true));

    // get the video
    var video = $.fn.videoBG.video(options);

    // if we are forcing width / height
    if (options.scale) {

      // overlay wrapper
      wrap.height(options.height)
        .width(options.width);

      // video
      video.height(options.height)
        .width(options.width);
    }

    // add it all to the container
    container.html(wrap);
    container.append(video);

    return video.find("video")[0];
  };

  // set to fullscreen
  $.fn.videoBG.setFullscreen = function($el) {
    var windowWidth = $(window).width(),
    windowHeight = $(window).height();

    $el.css('min-height',0).css('min-width',0);
    $el.parent().width(windowWidth).height(windowHeight);
    // if by width
    var shift = 0;
    if (windowWidth / windowHeight > $el.aspectRatio) {
      $el.width(windowWidth).height('auto');
      // shift the element up
      var height = $el.height();
      shift = (height - windowHeight) / 2;
      if (shift < 0) {
        shift = 0;
      }
      $el.css("top",-shift);
    } else {
      $el.width('auto').height(windowHeight);
      // shift the element left
      var width = $el.width();
      shift = (width - windowWidth) / 2;
      if (shift < 0) {
        shift = 0;
      }
      $el.css("left",-shift);

      // this is a hack mainly due to the iphone
      if (shift === 0) {
        var t = setTimeout(function() {
          $.fn.videoBG.setFullscreen($el);
        },500);
      }
    }

    $('body > .videoBG_wrapper').width(windowWidth).height(windowHeight);

  };

  // get the formatted video element
  $.fn.videoBG.video = function(options) {

    $('html, body').scrollTop(-1);

    // video container
    var $div = $('<div/>');
    $div.addClass('videoBG')
      .css('position',options.position)
      .css('z-index',options.zIndex)
      .css('top',0)
      .css('left',0)
      .css('height',options.height)
      .css('width',options.width)
      .css('opacity',options.opacity)
      .css('overflow','hidden');

    // video element
    var $video = $('<video/>');
    $video.css('position','absolute')
      .css('z-index',options.zIndex)
      .attr('poster',options.poster)
      .css('top',0)
      .css('left',0)
      .css('min-width','100%')
      .css('min-height','100%');

    if (options.autoplay) {
      $video.attr('autoplay',options.autoplay);
    }

    // if fullscreen
    if (options.fullscreen) {
      $video.bind('canplay',function() {
        // set the aspect ratio
        $video.aspectRatio = $video.width() / $video.height();
        $.fn.videoBG.setFullscreen($video);
      });

      // listen out for screenresize
      var resizeTimeout;
      $(window).resize(function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
          $.fn.videoBG.setFullscreen($video);
        },100);
      });
      $.fn.videoBG.setFullscreen($video);
    }


    // video standard element
    var v = $video[0];

    // if meant to loop
    if (options.loop) {
      loops_left = options.loop;

      // cant use the loop attribute as firefox doesnt support it
      $video.bind('ended', function(){

        // if we have some loops to throw
        if (loops_left) {
          // replay that bad boy
          v.play();
        }

        // if not forever
        if (loops_left !== true) {
          // one less loop
          loops_left--;
        }
      });
    }

    // when can play, play
    $video.bind('canplay', function(){

      if (options.autoplay) {
        // replay that bad boy
        v.play();
      }

    });


    // if supports video
    if ($.fn.videoBG.supportsVideo()) {

      // supports webm
      if ($.fn.videoBG.supportType('webm')){

        // play webm
        $video.attr('src',options.webm);
      }
      // supports mp4
      else if ($.fn.videoBG.supportType('mp4')) {

        // play mp4
        $video.attr('src',options.mp4);
      }
      // throw ogv at it then
      else {

        // play ogv
        $video.attr('src',options.ogv);
      }

    }

    // image for those that dont support the video
    var $img = $('<img/>');
    $img.attr('src',options.poster)
      .css('position','absolute')
      .css('z-index',options.zIndex)
      .css('top',0)
      .css('left',0)
      .css('min-width','100%')
      .css('min-height','100%');

    // add the image to the video
    // if suuports video
    if ($.fn.videoBG.supportsVideo()) {
      // add the video to the wrapper
      $div.html($video);
    }

    // nope - whoa old skool
    else {

      // add the image instead
      $div.html($img);
    }

    // if text replacement
    if (options.textReplacement) {

      // force the heights and widths
      $div.css('min-height',1).css('min-width',1);
      $video.css('min-height',1).css('min-width',1);
      $img.css('min-height',1).css('min-width',1);

      $div.height(options.height).width(options.width);
      $video.height(options.height).width(options.width);
      $img.height(options.height).width(options.width);
    }

    if ($.fn.videoBG.supportsVideo()) {
      v.play();
    }
    return $div;
  };

  // check if suuports video
  $.fn.videoBG.supportsVideo = function() {
    return (document.createElement('video').canPlayType);
  };

  // check which type is supported
  $.fn.videoBG.supportType = function(str) {

    // if not at all supported
    if (!$.fn.videoBG.supportsVideo()) {
      return false;
    }

    // create video
    var v = document.createElement('video');

    // check which?
    switch (str) {
      case 'webm' :
        return (v.canPlayType('video/webm; codecs="vp8, vorbis"'));
      case 'mp4' :
        return (v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'));
      case 'ogv' :
        return (v.canPlayType('video/ogg; codecs="theora, vorbis"'));
    }
    // nope
    return false;
  };

  // get the overlay wrapper
  $.fn.videoBG.wrapper = function() {
    var $wrap = $('<div/>');
    $wrap.addClass('videoBG_wrapper')
      .css('position','absolute')
      .css('top',0)
      .css('left',0);
    return $wrap;
  };

  // these are the defaults
  $.fn.videoBG.defaults = {
    mp4:'',
    ogv:'',
    webm:'',
    poster:'',
    autoplay:true,
    loop:true,
    scale:false,
    position:"absolute",
    opacity:1,
    textReplacement:false,
    zIndex:0,
    width:0,
    height:0,
    fullscreen:false,
    imgFallback:true
  };

})( jQuery );
;/********************************************
	-	THEMEPUNCH TOOLS Ver. 1.0     -
	 Last Update of Tools 09.10.2013
*********************************************/




/*!
 * VERSION: 1.11.2
 * DATE: 2013-11-11
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function(t){"use strict";var e=t.GreenSockGlobals||t;if(!e.TweenLite){var i,s,r,n,a,o=function(t){var i,s=t.split("."),r=e;for(i=0;s.length>i;i++)r[s[i]]=r=r[s[i]]||{};return r},l=o("com.greensock"),h=1e-10,_=[].slice,u=function(){},m=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e}}(),f={},p=function(i,s,r,n){this.sc=f[i]?f[i].sc:[],f[i]=this,this.gsClass=null,this.func=r;var a=[];this.check=function(l){for(var h,_,u,m,c=s.length,d=c;--c>-1;)(h=f[s[c]]||new p(s[c],[])).gsClass?(a[c]=h.gsClass,d--):l&&h.sc.push(this);if(0===d&&r)for(_=("com.greensock."+i).split("."),u=_.pop(),m=o(_.join("."))[u]=this.gsClass=r.apply(r,a),n&&(e[u]=m,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+i.split(".").join("/"),[],function(){return m}):"undefined"!=typeof module&&module.exports&&(module.exports=m)),c=0;this.sc.length>c;c++)this.sc[c].check()},this.check(!0)},c=t._gsDefine=function(t,e,i,s){return new p(t,e,i,s)},d=l._class=function(t,e,i){return e=e||function(){},c(t,[],function(){return e},i),e};c.globals=e;var v=[0,0,1,1],g=[],T=d("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?v.concat(e):v},!0),w=T.map={},P=T.register=function(t,e,i,s){for(var r,n,a,o,h=e.split(","),_=h.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=h[_],r=s?d("easing."+n,null,!0):l.easing[n]||{},a=u.length;--a>-1;)o=u[a],w[n+"."+o]=w[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(r=T.prototype,r._calcEnd=!1,r.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},i=["Linear","Quad","Cubic","Quart","Quint,Strong"],s=i.length;--s>-1;)r=i[s]+",Power"+s,P(new T(null,null,1,s),r,"easeOut",!0),P(new T(null,null,2,s),r,"easeIn"+(0===s?",easeNone":"")),P(new T(null,null,3,s),r,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var y=d("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});r=y.prototype,r.addEventListener=function(t,e,i,s,r){r=r||0;var o,l,h=this._listeners[t],_=0;for(null==h&&(this._listeners[t]=h=[]),l=h.length;--l>-1;)o=h[l],o.c===e&&o.s===i?h.splice(l,1):0===_&&r>o.pr&&(_=l+1);h.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==n||a||n.wake()},r.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},r.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i)};var b=t.requestAnimationFrame,k=t.cancelAnimationFrame,A=Date.now||function(){return(new Date).getTime()},S=A();for(i=["ms","moz","webkit","o"],s=i.length;--s>-1&&!b;)b=t[i[s]+"RequestAnimationFrame"],k=t[i[s]+"CancelAnimationFrame"]||t[i[s]+"CancelRequestAnimationFrame"];d("Ticker",function(t,e){var i,s,r,o,l,h=this,_=A(),m=e!==!1&&b,f=function(t){S=A(),h.time=(S-_)/1e3;var e,n=h.time-l;(!i||n>0||t===!0)&&(h.frame++,l+=n+(n>=o?.004:o-n),e=!0),t!==!0&&(r=s(f)),e&&h.dispatchEvent("tick")};y.call(h),h.time=h.frame=0,h.tick=function(){f(!0)},h.sleep=function(){null!=r&&(m&&k?k(r):clearTimeout(r),s=u,r=null,h===n&&(a=!1))},h.wake=function(){null!==r&&h.sleep(),s=0===i?u:m&&b?b:function(t){return setTimeout(t,0|1e3*(l-h.time)+1)},h===n&&(a=!0),f(2)},h.fps=function(t){return arguments.length?(i=t,o=1/(i||60),l=this.time+o,h.wake(),void 0):i},h.useRAF=function(t){return arguments.length?(h.sleep(),m=t,h.fps(i),void 0):m},h.fps(t),setTimeout(function(){m&&(!r||5>h.frame)&&h.useRAF(!1)},1500)}),r=l.Ticker.prototype=new l.events.EventDispatcher,r.constructor=l.Ticker;var x=d("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,Q){a||n.wake();var i=this.vars.useFrames?G:Q;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});n=x.ticker=new l.Ticker,r=x.prototype,r._dirty=r._gc=r._initted=r._paused=!1,r._totalTime=r._time=0,r._rawPrevTime=-1,r._next=r._last=r._onUpdate=r._timeline=r.timeline=null,r._paused=!1;var C=function(){a&&A()-S>2e3&&n.wake(),setTimeout(C,2e3)};C(),r.play=function(t,e){return arguments.length&&this.seek(t,e),this.reversed(!1).paused(!1)},r.pause=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!0)},r.resume=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!1)},r.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},r.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},r.reverse=function(t,e){return arguments.length&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},r.render=function(){},r.invalidate=function(){return this},r.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},r._enabled=function(t,e){return a||n.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},r._kill=function(){return this._enabled(!1,!1)},r.kill=function(t,e){return this._kill(t,e),this},r._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},r._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},r.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=m(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},r.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},r.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},r.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},r.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},r.totalTime=function(t,e,i){if(a||n.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&this.render(t,e,!1)}return this},r.progress=r.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},r.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},r.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||h,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},r.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._totalTime,!0)),this):this._reversed},r.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){a||t||n.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==s&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var R=d("core.SimpleTimeline",function(t){x.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});r=R.prototype=new x,r.constructor=R,r.kill()._gc=!1,r._first=r._last=null,r._sortChildren=!1,r.add=r.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._timeline&&this._uncache(!0),this},r._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t.timeline=null,t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),this._timeline&&this._uncache(!0)),this},r.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},r.rawTime=function(){return a||n.wake(),this._totalTime};var D=d("TweenLite",function(e,i,s){if(x.call(this,i,s),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?j[D.defaultOverwrite]:"number"==typeof l?l>>0:j[l],(o||e instanceof Array||e.push&&m(e))&&"number"!=typeof e[0])for(this._targets=a=_.call(e,0),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(_.call(n,0))):(this._siblings[r]=B(n,this,!1),1===l&&this._siblings[r].length>1&&q(n,this,null,1,this._siblings[r])):(n=a[r--]=D.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=B(e,this,!1),1===l&&this._siblings.length>1&&q(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)},!0),E=function(e){return e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},I=function(t,e){var i,s={};for(i in t)F[i]||i in e&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!N[i]||N[i]&&N[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};r=D.prototype=new x,r.constructor=D,r.kill()._gc=!1,r.ratio=0,r._firstPT=r._targets=r._overwrittenProps=r._startAt=null,r._notifyPluginsOfEnabled=!1,D.version="1.11.2",D.defaultEase=r._ease=new T(null,null,1,1),D.defaultOverwrite="auto",D.ticker=n,D.autoSleep=!0,D.selector=t.$||t.jQuery||function(e){return t.$?(D.selector=t.$,t.$(e)):t.document?t.document.getElementById("#"===e.charAt(0)?e.substr(1):e):e};var O=D._internals={isArray:m,isSelector:E},N=D._plugins={},L=D._tweenLookup={},U=0,F=O.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},j={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},G=x._rootFramesTimeline=new R,Q=x._rootTimeline=new R;Q._startTime=n.time,G._startTime=n.frame,Q._active=G._active=!0,x._updateRoot=function(){if(Q.render((n.time-Q._startTime)*Q._timeScale,!1,!1),G.render((n.frame-G._startTime)*G._timeScale,!1,!1),!(n.frame%120)){var t,e,i;for(i in L){for(e=L[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete L[i]}if(i=Q._first,(!i||i._paused)&&D.autoSleep&&!G._first&&1===n._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||n.sleep()}}},n.addEventListener("tick",x._updateRoot);var B=function(t,e,i){var s,r,n=t._gsTweenID;if(L[n||(t._gsTweenID=n="t"+U++)]||(L[n]={target:t,tweens:[]}),e&&(s=L[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return L[n].tweens},q=function(t,e,i,s,r){var n,a,o,l;if(1===s||s>=4){for(l=r.length,n=0;l>n;n++)if((o=r[n])!==e)o._gc||o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var _,u=e._startTime+h,m=[],f=0,p=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(_=_||$(e,0,p),0===$(o,_,p)&&(m[f++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale+h>u&&((p||!o._initted)&&2e-10>=u-o._startTime||(m[f++]=o)));for(n=f;--n>-1;)o=m[n],2===s&&o._kill(i,t)&&(a=!0),(2!==s||!o._firstPT&&o._initted)&&o._enabled(!1,!1)&&(a=!0);return a},$=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*h>n-e?h:(n+=t.totalDuration()/t._timeScale/r)>e+h?0:n-e-h};r._init=function(){var t,e,i,s,r=this.vars,n=this._overwrittenProps,a=this._duration,o=r.immediateRender,l=r.ease;if(r.startAt){if(this._startAt&&this._startAt.render(-1,!0),r.startAt.overwrite=0,r.startAt.immediateRender=!0,this._startAt=D.to(this.target,0,r.startAt),o)if(this._time>0)this._startAt=null;else if(0!==a)return}else if(r.runBackwards&&0!==a)if(this._startAt)this._startAt.render(-1,!0),this._startAt=null;else{i={};for(s in r)F[s]&&"autoCSS"!==s||(i[s]=r[s]);if(i.overwrite=0,i.data="isFromStart",this._startAt=D.to(this.target,0,i),r.immediateRender){if(0===this._time)return}else this._startAt.render(-1,!0)}if(this._ease=l?l instanceof T?r.easeParams instanceof Array?l.config.apply(l,r.easeParams):l:"function"==typeof l?new T(l,r.easeParams):w[l]||D.defaultEase:D.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],n?n[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,n);if(e&&D._onPluginEvent("_onInitAllProps",this),n&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),r.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=r.onUpdate,this._initted=!0},r._initProps=function(e,i,s,r){var n,a,o,l,h,_;if(null==e)return!1;this.vars.css||e.style&&e!==t&&e.nodeType&&N.css&&this.vars.autoCSS!==!1&&I(this.vars,e);for(n in this.vars){if(_=this.vars[n],F[n])_&&(_ instanceof Array||_.push&&m(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(N[n]&&(l=new N[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:l._priority},a=l._overwriteProps.length;--a>-1;)i[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=h={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},h.s=h.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),h.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-h.s||0;h&&h._next&&(h._next._prev=h)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&q(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):o},r.render=function(t,e,i){var s,r,n,a,o=this._time,l=this._duration;if(t>=l)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===l&&(a=this._rawPrevTime,(0===t||0>a||a===h)&&a!==t&&(i=!0,a>h&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t?t:h);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&this._rawPrevTime>h)&&(r="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===l&&(this._rawPrevTime>=0&&(i=!0),this._rawPrevTime=a=!e||t?t:h)):this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var _=t/l,u=this._easeType,m=this._easePower;(1===u||3===u&&_>=.5)&&(_=1-_),3===u&&(_*=2),1===m?_*=_:2===m?_*=_*_:3===m?_*=_*_*_:4===m&&(_*=_*_*_*_),this.ratio=1===u?1-_:2===u?_:.5>t/l?_/2:1-_/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;this._time&&!s?this.ratio=this._ease.getRatio(this._time/l):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||g))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||i&&0===this._time&&0===o||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||g)),r&&(this._gc||(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||g),0===l&&this._rawPrevTime===h&&a!==h&&(this._rawPrevTime=0)))}},r._kill=function(t,e){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var i,s,r,n,a,o,l,h;if((m(e)||E(e))&&"number"!=typeof e[0])for(i=e.length;--i>-1;)this._kill(t,e[i])&&(o=!0);else{if(this._targets){for(i=this._targets.length;--i>-1;)if(e===this._targets[i]){a=this._propLookup[i]||{},this._overwrittenProps=this._overwrittenProps||[],s=this._overwrittenProps[i]=t?this._overwrittenProps[i]||{}:"all";break}}else{if(e!==this.target)return!1;a=this._propLookup,s=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(a){l=t||a,h=t!==s&&"all"!==s&&t!==a&&("object"!=typeof t||!t._tempKill);for(r in l)(n=a[r])&&(n.pg&&n.t._kill(l)&&(o=!0),n.pg&&0!==n.t._overwriteProps.length||(n._prev?n._prev._next=n._next:n===this._firstPT&&(this._firstPT=n._next),n._next&&(n._next._prev=n._prev),n._next=n._prev=null),delete a[r]),h&&(s[r]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return o},r.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this},r._enabled=function(t,e){if(a||n.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=B(s[i],this,!0);else this._siblings=B(this.target,this,!0)}return x.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?D._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new D(t,e,s)},D.delayedCall=function(t,e,i,s,r){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:r,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:D.selector(t)||t;var i,s,r,n;if((m(t)||E(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(D.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=B(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=D.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var M=d("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=M.prototype},!0);if(r=M.prototype,M.version="1.10.1",M.API=2,r._firstPT=null,r._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},r.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=0|e+(e>0?.5:-.5):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},r._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},r._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},M.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===M.API&&(N[(new t[e])._propName]=t[e]);return!0},c.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=d("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){M.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new M(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,M.activate([a]),a},i=t._gsQueue){for(s=0;i.length>s;s++)i[s]();for(r in f)f[r].func||t.console.log("GSAP encountered missing dependency: com.greensock."+r)}a=!1}})(window);
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=window.GreenSockGlobals||window,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},p=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},f=u("Back",p("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),p("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),p("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),p=u,f=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--p>-1;)i=f?Math.random():1/u*p,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),f?s+=Math.random()*r-.5*r:p%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),p=u;--p>-1;)a=l[p],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),f},!0)}),window._gsDefine&&window._gsQueue.pop()();
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o={},l=a.prototype=new t("css");l.constructor=a,a.version="1.11.2",a.API=2,a.defaultTransformPerspective=0,l="px",a.suffixMap={top:l,right:l,bottom:l,left:l,width:l,height:l,fontSize:l,padding:l,margin:l,perspective:l};var h,u,_,p,f,c,d=/(?:\d|\-\d|\.\d|\-\.\d)+/g,m=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/[^\d\-\.]/g,y=/(?:\d|\-|\+|=|#|\.)*/g,T=/opacity *= *([^)]*)/,x=/opacity:([^;]*)/,w=/alpha\(opacity *=.+?\)/i,b=/^(rgb|hsl)/,P=/([A-Z])/g,S=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,k=function(t,e){return e.toUpperCase()},C=/(?:Left|Right|Width)/i,A=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,O=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,M=Math.PI/180,L=180/Math.PI,N={},X=document,F=X.createElement("div"),I=X.createElement("img"),E=a._internals={_specialProps:o},Y=navigator.userAgent,z=function(){var t,e=Y.indexOf("Android"),i=X.createElement("div");return _=-1!==Y.indexOf("Safari")&&-1===Y.indexOf("Chrome")&&(-1===e||Number(Y.substr(e+8,1))>3),f=_&&6>Number(Y.substr(Y.indexOf("Version/")+8,1)),p=-1!==Y.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y),c=parseFloat(RegExp.$1),i.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",t=i.getElementsByTagName("a")[0],t?/^0.55/.test(t.style.opacity):!1}(),U=function(t){return T.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},B=function(t){window.console&&console.log(t)},j="",V="",q=function(t,e){e=e||F;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(V=3===s?"ms":i[s],j="-"+V.toLowerCase()+"-",V+t):null},W=X.defaultView?X.defaultView.getComputedStyle:function(){},Q=a.getStyle=function(t,e,i,s,r){var n;return z||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||W(t,null))?(t=i.getPropertyValue(e.replace(P,"-$1").toLowerCase()),n=t||i.length?t:i[e]):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):U(t)},Z=function(t,e,i,s,r){if("px"===s||!s)return i;if("auto"===s||!i)return 0;var n,a=C.test(e),o=t,l=F.style,h=0>i;return h&&(i=-i),"%"===s&&-1!==e.indexOf("border")?n=i/100*(a?t.clientWidth:t.clientHeight):(l.cssText="border:0 solid red;position:"+Q(t,"position")+";line-height:0;","%"!==s&&o.appendChild?l[a?"borderLeftWidth":"borderTopWidth"]=i+s:(o=t.parentNode||X.body,l[a?"width":"height"]=i+s),o.appendChild(F),n=parseFloat(F[a?"offsetWidth":"offsetHeight"]),o.removeChild(F),0!==n||r||(n=Z(t,e,i,s,!0))),h?-n:n},H=function(t,e,i){if("absolute"!==Q(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=Q(t,"margin"+s,i);return t["offset"+s]-(Z(t,e,parseFloat(r),r.replace(y,""))||0)},$=function(t,e){var i,s,r={};if(e=e||W(t,null))if(i=e.length)for(;--i>-1;)r[e[i].replace(S,k)]=e.getPropertyValue(e[i]);else for(i in e)r[i]=e[i];else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0!==r[i]&&(r[i.replace(S,k)]=e[i]);return z||(r.opacity=U(t)),s=be(t,e,!1),r.rotation=s.rotation,r.skewX=s.skewX,r.scaleX=s.scaleX,r.scaleY=s.scaleY,r.x=s.x,r.y=s.y,we&&(r.z=s.z,r.rotationX=s.rotationX,r.rotationY=s.rotationY,r.scaleZ=s.scaleZ),r.filters&&delete r.filters,r},G=function(t,e,i,s,r){var n,a,o,l={},h=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(v,"")?n:0:H(t,a),void 0!==h[a]&&(o=new _e(h,a,h[a],o)));if(s)for(a in s)"className"!==a&&(l[a]=s[a]);return{difs:l,firstMPT:o}},K={width:["Left","Right"],height:["Top","Bottom"]},J=["marginLeft","marginRight","marginTop","marginBottom"],te=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=K[e],n=r.length;for(i=i||W(t,null);--n>-1;)s-=parseFloat(Q(t,"padding"+r[n],i,!0))||0,s-=parseFloat(Q(t,"border"+r[n]+"Width",i,!0))||0;return s},ee=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(v,"")),e.oy=parseFloat(r.replace(v,""))),s+" "+r+(i.length>2?" "+i[2]:"")},ie=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},se=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*Number(t.substr(2))+e:parseFloat(t)},re=function(t,e,i,s){var r,n,a,o,l=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),a=Number(n[0].replace(v,""))*(-1===t.indexOf("rad")?1:L)-("="===t.charAt(1)?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),l>o&&o>-l&&(o=0),o},ne={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ae=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},oe=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ne[t]?ne[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(d),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=ae(r+1/3,e,i),t[1]=ae(r,e,i),t[2]=ae(r-1/3,e,i),t):(t=t.match(d)||ne.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):ne.black},le="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(l in ne)le+="|"+l+"\\b";le=RegExp(le+")","gi");var he=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(le)||[""])[0]:"",a=t.split(n).join("").match(g)||[],o=t.substr(0,t.indexOf(a[0])),l=")"===t.charAt(t.length-1)?")":"",h=-1!==t.indexOf(" ")?" ":",",u=a.length,_=u>0?a[0].replace(d,""):"";return u?r=e?function(t){var e,p,f,c;if("number"==typeof t)t+=_;else if(s&&D.test(t)){for(c=t.replace(D,"|").split("|"),f=0;c.length>f;f++)c[f]=r(c[f]);return c.join(",")}if(e=(t.match(le)||[n])[0],p=t.split(e).join("").match(g)||[],f=p.length,u>f--)for(;u>++f;)p[f]=i?p[0|(f-1)/2]:a[f];return o+p.join(h)+h+e+l+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=_;else if(s&&D.test(t)){for(n=t.replace(D,"|").split("|"),p=0;n.length>p;p++)n[p]=r(n[p]);return n.join(",")}if(e=t.match(g)||[],p=e.length,u>p--)for(;u>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(h)+l}:function(t){return t}},ue=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var l,h=(i+"").split(" ");for(o={},l=0;4>l;l++)o[t[l]]=h[l]=h[l]||h[(l-1)/2>>0];return r.parse(e,o,n,a)}},_e=(E._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,l=1e-6;o;)e=a[o.v],o.r?e=e>0?0|e+.5:0|e-.5:l>e&&e>-l&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),pe=(E._parseToProxy=function(t,e,i,s,r,n){var a,o,l,h,u,_=s,p={},f={},c=i._transform,d=N;for(i._transform=null,N=e,s=u=i.parse(t,e,s,r),N=d,n&&(i._transform=c,_&&(_._prev=null,_._prev&&(_._prev._next=null)));s&&s!==_;){if(1>=s.type&&(o=s.p,f[o]=s.s+s.c,p[o]=s.s,n||(h=new _e(s,"s",o,h,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)l="xn"+a,o=s.p+"_"+l,f[o]=s.data[l],p[o]=s[l],n||(h=new _e(s,l,o,h,s.rxp[l]));s=s._next}return{proxy:p,end:f,firstMPT:h,pt:u}},E.CSSPropTween=function(t,e,s,r,a,o,l,h,u,_,p){this.t=t,this.p=e,this.s=s,this.c=r,this.n=l||e,t instanceof pe||n.push(this.n),this.r=h,this.type=o||0,u&&(this.pr=u,i=!0),this.b=void 0===_?s:_,this.e=void 0===p?s+r:p,a&&(this._next=a,a._prev=this)}),fe=a.parseComplex=function(t,e,i,s,r,n,a,o,l,u){i=i||n||"",a=new pe(t,e,0,0,a,u?2:1,null,!1,o,i,s),s+="";var _,p,f,c,g,v,y,T,x,w,P,S,R=i.split(", ").join(",").split(" "),k=s.split(", ").join(",").split(" "),C=R.length,A=h!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(R=R.join(" ").replace(D,", ").split(" "),k=k.join(" ").replace(D,", ").split(" "),C=R.length),C!==k.length&&(R=(n||"").split(" "),C=R.length),a.plugin=l,a.setRatio=u,_=0;C>_;_++)if(c=R[_],g=k[_],T=parseFloat(c),T||0===T)a.appendXtra("",T,ie(g,T),g.replace(m,""),A&&-1!==g.indexOf("px"),!0);else if(r&&("#"===c.charAt(0)||ne[c]||b.test(c)))S=","===g.charAt(g.length-1)?"),":")",c=oe(c),g=oe(g),x=c.length+g.length>6,x&&!z&&0===g[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(k[_]).join("transparent")):(z||(x=!1),a.appendXtra(x?"rgba(":"rgb(",c[0],g[0]-c[0],",",!0,!0).appendXtra("",c[1],g[1]-c[1],",",!0).appendXtra("",c[2],g[2]-c[2],x?",":S,!0),x&&(c=4>c.length?1:c[3],a.appendXtra("",c,(4>g.length?1:g[3])-c,S,!1)));else if(v=c.match(d)){if(y=g.match(m),!y||y.length!==v.length)return a;for(f=0,p=0;v.length>p;p++)P=v[p],w=c.indexOf(P,f),a.appendXtra(c.substr(f,w-f),Number(P),ie(y[p],P),"",A&&"px"===c.substr(w+P.length,2),0===p),f=w+P.length;a["xs"+a.l]+=c.substr(f)}else a["xs"+a.l]+=a.l?" "+c:c;if(-1!==s.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,_=1;a.l>_;_++)S+=a["xs"+_]+a.data["xn"+_];a.e=S+a["xs"+_]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ce=9;for(l=pe.prototype,l.l=l.pr=0;--ce>0;)l["xn"+ce]=0,l["xs"+ce]="";l.xs0="",l._next=l._prev=l.xfirst=l.data=l.plugin=l.setRatio=l.rxp=null,l.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var de=function(t,e){e=e||{},this.p=e.prefix?q(t)||t:t,o[t]=o[this.p]=this,this.format=e.formatter||he(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},me=E._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new de(n[s],e)},ge=function(t){if(!o[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";me(t,{parser:function(t,i,s,r,n,a,l){var h=(window.GreenSockGlobals||window).com.greensock.plugins[e];return h?(h._cssRegister(),o[s].parse(t,i,s,r,n,a,l)):(B("Error: "+e+" js file not loaded."),n)}})}};l=de.prototype,l.parseComplex=function(t,e,i,s,r,n){var a,o,l,h,u,_,p=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),l=i.replace(D,"|").split("|")):p&&(o=[e],l=[i])),l){for(h=l.length>o.length?l.length:o.length,a=0;h>a;a++)e=o[a]=o[a]||this.dflt,i=l[a]=l[a]||this.dflt,p&&(u=e.indexOf(p),_=i.indexOf(p),u!==_&&(i=-1===_?l:o,i[a]+=" "+p));e=o.join(", "),i=l.join(", ")}return fe(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},l.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){me(t,{parser:function(t,s,r,n,a,o){var l=new pe(t,r,0,0,a,2,r,!1,i);return l.plugin=o,l.setRatio=e(t,s,n._tween,r),l},priority:i})};var ve="scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),ye=q("transform"),Te=j+"transform",xe=q("transformOrigin"),we=null!==q("perspective"),be=function(t,e,i,s){if(t._gsTransform&&i&&!s)return t._gsTransform;var r,n,o,l,h,u,_,p,f,c,d,m,g,v=i?t._gsTransform||{skewY:0}:{skewY:0},y=0>v.scaleX,T=2e-5,x=1e5,w=179.99,b=w*M,P=we?parseFloat(Q(t,xe,e,!1,"0 0 0").split(" ")[2])||v.zOrigin||0:0;for(ye?r=Q(t,Te,e,!0):t.currentStyle&&(r=t.currentStyle.filter.match(A),r=r&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),v.x||0,v.y||0].join(","):""),n=(r||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],o=n.length;--o>-1;)l=Number(n[o]),n[o]=(h=l-(l|=0))?(0|h*x+(0>h?-.5:.5))/x+l:l;if(16===n.length){var S=n[8],R=n[9],k=n[10],C=n[12],O=n[13],D=n[14];if(v.zOrigin&&(D=-v.zOrigin,C=S*D-n[12],O=R*D-n[13],D=k*D+v.zOrigin-n[14]),!i||s||null==v.rotationX){var N,X,F,I,E,Y,z,U=n[0],B=n[1],j=n[2],V=n[3],q=n[4],W=n[5],Z=n[6],H=n[7],$=n[11],G=Math.atan2(Z,k),K=-b>G||G>b;v.rotationX=G*L,G&&(I=Math.cos(-G),E=Math.sin(-G),N=q*I+S*E,X=W*I+R*E,F=Z*I+k*E,S=q*-E+S*I,R=W*-E+R*I,k=Z*-E+k*I,$=H*-E+$*I,q=N,W=X,Z=F),G=Math.atan2(S,U),v.rotationY=G*L,G&&(Y=-b>G||G>b,I=Math.cos(-G),E=Math.sin(-G),N=U*I-S*E,X=B*I-R*E,F=j*I-k*E,R=B*E+R*I,k=j*E+k*I,$=V*E+$*I,U=N,B=X,j=F),G=Math.atan2(B,W),v.rotation=G*L,G&&(z=-b>G||G>b,I=Math.cos(-G),E=Math.sin(-G),U=U*I+q*E,X=B*I+W*E,W=B*-E+W*I,Z=j*-E+Z*I,B=X),z&&K?v.rotation=v.rotationX=0:z&&Y?v.rotation=v.rotationY=0:Y&&K&&(v.rotationY=v.rotationX=0),v.scaleX=(0|Math.sqrt(U*U+B*B)*x+.5)/x,v.scaleY=(0|Math.sqrt(W*W+R*R)*x+.5)/x,v.scaleZ=(0|Math.sqrt(Z*Z+k*k)*x+.5)/x,v.skewX=0,v.perspective=$?1/(0>$?-$:$):0,v.x=C,v.y=O,v.z=D}}else if(!(we&&!s&&n.length&&v.x===n[4]&&v.y===n[5]&&(v.rotationX||v.rotationY)||void 0!==v.x&&"none"===Q(t,"display",e))){var J=n.length>=6,te=J?n[0]:1,ee=n[1]||0,ie=n[2]||0,se=J?n[3]:1;v.x=n[4]||0,v.y=n[5]||0,u=Math.sqrt(te*te+ee*ee),_=Math.sqrt(se*se+ie*ie),p=te||ee?Math.atan2(ee,te)*L:v.rotation||0,f=ie||se?Math.atan2(ie,se)*L+p:v.skewX||0,c=u-Math.abs(v.scaleX||0),d=_-Math.abs(v.scaleY||0),Math.abs(f)>90&&270>Math.abs(f)&&(y?(u*=-1,f+=0>=p?180:-180,p+=0>=p?180:-180):(_*=-1,f+=0>=f?180:-180)),m=(p-v.rotation)%180,g=(f-v.skewX)%180,(void 0===v.skewX||c>T||-T>c||d>T||-T>d||m>-w&&w>m&&false|m*x||g>-w&&w>g&&false|g*x)&&(v.scaleX=u,v.scaleY=_,v.rotation=p,v.skewX=f),we&&(v.rotationX=v.rotationY=v.z=0,v.perspective=parseFloat(a.defaultTransformPerspective)||0,v.scaleZ=1)}v.zOrigin=P;for(o in v)T>v[o]&&v[o]>-T&&(v[o]=0);return i&&(t._gsTransform=v),v},Pe=function(t){var e,i,s=this.data,r=-s.rotation*M,n=r+s.skewX*M,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,l=(0|Math.sin(r)*s.scaleX*a)/a,h=(0|Math.sin(n)*-s.scaleY*a)/a,u=(0|Math.cos(n)*s.scaleY*a)/a,_=this.t.style,p=this.t.currentStyle;if(p){i=l,l=-h,h=-i,e=p.filter,_.filter="";var f,d,m=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,x="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+h+", M22="+u,w=s.x,b=s.y;if(null!=s.ox&&(f=(s.oxp?.01*m*s.ox:s.ox)-m/2,d=(s.oyp?.01*g*s.oy:s.oy)-g/2,w+=f-(f*o+d*l),b+=d-(f*h+d*u)),v?(f=m/2,d=g/2,x+=", Dx="+(f-(f*o+d*l)+w)+", Dy="+(d-(f*h+d*u)+b)+")"):x+=", sizingMethod='auto expand')",_.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(O,x):x+" "+e,(0===t||1===t)&&1===o&&0===l&&0===h&&1===u&&(v&&-1===x.indexOf("Dx=0, Dy=0")||T.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&_.removeAttribute("filter")),!v){var P,S,R,k=8>c?1:-1;for(f=s.ieOffsetX||0,d=s.ieOffsetY||0,s.ieOffsetX=Math.round((m-((0>o?-o:o)*m+(0>l?-l:l)*g))/2+w),s.ieOffsetY=Math.round((g-((0>u?-u:u)*g+(0>h?-h:h)*m))/2+b),ce=0;4>ce;ce++)S=J[ce],P=p[S],i=-1!==P.indexOf("px")?parseFloat(P):Z(this.t,S,parseFloat(P),P.replace(y,""))||0,R=i!==s[S]?2>ce?-s.ieOffsetX:-s.ieOffsetY:2>ce?f-s.ieOffsetX:d-s.ieOffsetY,_[S]=(s[S]=Math.round(i-R*(0===ce||2===ce?1:k)))+"px"}}},Se=function(){var t,e,i,s,r,n,a,o,l,h,u,_,f,c,d,m,g,v,y,T,x,w,b,P,S,R,k=this.data,C=this.t.style,A=k.rotation*M,O=k.scaleX,D=k.scaleY,L=k.scaleZ,N=k.perspective;if(p&&(P=C.top?"top":C.bottom?"bottom":parseFloat(Q(this.t,"top",null,!1))?"bottom":"top",T=Q(this.t,P,null,!1),S=parseFloat(T)||0,R=T.substr((S+"").length)||"px",k._ffFix=!k._ffFix,C[P]=(k._ffFix?S+.05:S-.05)+R,S=1e-4,S>O&&O>-S&&(O=L=2e-5),S>D&&D>-S&&(D=L=2e-5)),A||k.skewX)v=Math.cos(A),y=Math.sin(A),t=v,r=y,k.skewX&&(A-=k.skewX*M,v=Math.cos(A),y=Math.sin(A)),e=-y,n=v;else{if(!(k.rotationY||k.rotationX||1!==L||N))return C[ye]="translate3d("+k.x+"px,"+k.y+"px,"+k.z+"px)"+(1!==O||1!==D?" scale("+O+","+D+")":""),void 0;t=n=1,e=r=0}u=1,i=s=a=o=l=h=_=f=c=0,d=N?-1/N:0,m=k.zOrigin,g=1e5,A=k.rotationY*M,A&&(v=Math.cos(A),y=Math.sin(A),l=u*-y,f=d*-y,i=t*y,a=r*y,u*=v,d*=v,t*=v,r*=v),A=k.rotationX*M,A&&(v=Math.cos(A),y=Math.sin(A),T=e*v+i*y,x=n*v+a*y,w=h*v+u*y,b=c*v+d*y,i=e*-y+i*v,a=n*-y+a*v,u=h*-y+u*v,d=c*-y+d*v,e=T,n=x,h=w,c=b),1!==L&&(i*=L,a*=L,u*=L,d*=L),1!==D&&(e*=D,n*=D,h*=D,c*=D),1!==O&&(t*=O,r*=O,l*=O,f*=O),m&&(_-=m,s=i*_,o=a*_,_=u*_+m),s=(T=(s+=k.x)-(s|=0))?(0|T*g+(0>T?-.5:.5))/g+s:s,o=(T=(o+=k.y)-(o|=0))?(0|T*g+(0>T?-.5:.5))/g+o:o,_=(T=(_+=k.z)-(_|=0))?(0|T*g+(0>T?-.5:.5))/g+_:_,C[ye]="matrix3d("+[(0|t*g)/g,(0|r*g)/g,(0|l*g)/g,(0|f*g)/g,(0|e*g)/g,(0|n*g)/g,(0|h*g)/g,(0|c*g)/g,(0|i*g)/g,(0|a*g)/g,(0|u*g)/g,(0|d*g)/g,s,o,_,N?1+-_/N:1].join(",")+")"},Re=function(){var t,e,i,s,r,n,a,o,l,h=this.data,u=this.t,_=u.style;p&&(t=_.top?"top":_.bottom?"bottom":parseFloat(Q(u,"top",null,!1))?"bottom":"top",e=Q(u,t,null,!1),i=parseFloat(e)||0,s=e.substr((i+"").length)||"px",h._ffFix=!h._ffFix,_[t]=(h._ffFix?i+.05:i-.05)+s),h.rotation||h.skewX?(r=h.rotation*M,n=r-h.skewX*M,a=1e5,o=h.scaleX*a,l=h.scaleY*a,_[ye]="matrix("+(0|Math.cos(r)*o)/a+","+(0|Math.sin(r)*o)/a+","+(0|Math.sin(n)*-l)/a+","+(0|Math.cos(n)*l)/a+","+h.x+","+h.y+")"):_[ye]="matrix("+h.scaleX+",0,0,"+h.scaleY+","+h.x+","+h.y+")"};me("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D",{parser:function(t,e,i,s,n,a,o){if(s._transform)return n;var l,h,u,_,p,f,c,d=s._transform=be(t,r,!0,o.parseTransform),m=t.style,g=1e-6,v=ve.length,y=o,T={};if("string"==typeof y.transform&&ye)u=m.cssText,m[ye]=y.transform,m.display="block",l=be(t,null,!1),m.cssText=u;else if("object"==typeof y){if(l={scaleX:se(null!=y.scaleX?y.scaleX:y.scale,d.scaleX),scaleY:se(null!=y.scaleY?y.scaleY:y.scale,d.scaleY),scaleZ:se(null!=y.scaleZ?y.scaleZ:y.scale,d.scaleZ),x:se(y.x,d.x),y:se(y.y,d.y),z:se(y.z,d.z),perspective:se(y.transformPerspective,d.perspective)},c=y.directionalRotation,null!=c)if("object"==typeof c)for(u in c)y[u]=c[u];else y.rotation=c;l.rotation=re("rotation"in y?y.rotation:"shortRotation"in y?y.shortRotation+"_short":"rotationZ"in y?y.rotationZ:d.rotation,d.rotation,"rotation",T),we&&(l.rotationX=re("rotationX"in y?y.rotationX:"shortRotationX"in y?y.shortRotationX+"_short":d.rotationX||0,d.rotationX,"rotationX",T),l.rotationY=re("rotationY"in y?y.rotationY:"shortRotationY"in y?y.shortRotationY+"_short":d.rotationY||0,d.rotationY,"rotationY",T)),l.skewX=null==y.skewX?d.skewX:re(y.skewX,d.skewX),l.skewY=null==y.skewY?d.skewY:re(y.skewY,d.skewY),(h=l.skewY-d.skewY)&&(l.skewX+=h,l.rotation+=h)}for(null!=y.force3D&&(d.force3D=y.force3D,f=!0),p=d.force3D||d.z||d.rotationX||d.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,p||null==y.scale||(l.scaleZ=1);--v>-1;)i=ve[v],_=l[i]-d[i],(_>g||-g>_||null!=N[i])&&(f=!0,n=new pe(d,i,d[i],_,n),i in T&&(n.e=T[i]),n.xs0=0,n.plugin=a,s._overwriteProps.push(n.n));return _=y.transformOrigin,(_||we&&p&&d.zOrigin)&&(ye?(f=!0,i=xe,_=(_||Q(t,i,r,!1,"50% 50%"))+"",n=new pe(m,i,0,0,n,-1,"transformOrigin"),n.b=m[i],n.plugin=a,we?(u=d.zOrigin,_=_.split(" "),d.zOrigin=(_.length>2&&(0===u||"0px"!==_[2])?parseFloat(_[2]):u)||0,n.xs0=n.e=m[i]=_[0]+" "+(_[1]||"50%")+" 0px",n=new pe(d,"zOrigin",0,0,n,-1,n.n),n.b=u,n.xs0=n.e=d.zOrigin):n.xs0=n.e=m[i]=_):ee(_+"",d)),f&&(s._transformType=p||3===this._transformType?3:2),n},prefix:!0}),me("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),me("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,l,h,u,_,p,f,c,d,m,g,v,y,T,x,w,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(d=parseFloat(t.offsetWidth),m=parseFloat(t.offsetHeight),o=e.split(" "),l=0;b.length>l;l++)this.p.indexOf("border")&&(b[l]=q(b[l])),_=u=Q(t,b[l],r,!1,"0px"),-1!==_.indexOf(" ")&&(u=_.split(" "),_=u[0],u=u[1]),p=h=o[l],f=parseFloat(_),v=_.substr((f+"").length),y="="===p.charAt(1),y?(c=parseInt(p.charAt(0)+"1",10),p=p.substr(2),c*=parseFloat(p),g=p.substr((c+"").length-(0>c?1:0))||""):(c=parseFloat(p),g=p.substr((c+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=Z(t,"borderLeft",f,v),x=Z(t,"borderTop",f,v),"%"===g?(_=100*(T/d)+"%",u=100*(x/m)+"%"):"em"===g?(w=Z(t,"borderLeft",1,"em"),_=T/w+"em",u=x/w+"em"):(_=T+"px",u=x+"px"),y&&(p=parseFloat(_)+c+g,h=parseFloat(u)+c+g)),a=fe(P,b[l],_+" "+u,p+" "+h,!1,"0px",a);return a},prefix:!0,formatter:he("0px 0px 0px 0px",!1,!0)}),me("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,l,h,u,_,p,f="background-position",d=r||W(t,null),m=this.format((d?c?d.getPropertyValue(f+"-x")+" "+d.getPropertyValue(f+"-y"):d.getPropertyValue(f):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==m.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=Q(t,"backgroundImage").replace(R,""),p&&"none"!==p)){for(o=m.split(" "),l=g.split(" "),I.setAttribute("src",p),h=2;--h>-1;)m=o[h],u=-1!==m.indexOf("%"),u!==(-1!==l[h].indexOf("%"))&&(_=0===h?t.offsetWidth-I.width:t.offsetHeight-I.height,o[h]=u?parseFloat(m)/100*_+"px":100*(parseFloat(m)/_)+"%");m=o.join(" ")}return this.parseComplex(t.style,m,g,n,a)},formatter:ee}),me("backgroundSize",{defaultValue:"0 0",formatter:ee}),me("perspective",{defaultValue:"0px",prefix:!0}),me("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),me("transformStyle",{prefix:!0}),me("backfaceVisibility",{prefix:!0}),me("userSelect",{prefix:!0}),me("margin",{parser:ue("marginTop,marginRight,marginBottom,marginLeft")}),me("padding",{parser:ue("paddingTop,paddingRight,paddingBottom,paddingLeft")}),me("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,l,h;return 9>c?(l=t.currentStyle,h=8>c?" ":",",o="rect("+l.clipTop+h+l.clipRight+h+l.clipBottom+h+l.clipLeft+")",e=this.format(e).split(",").join(h)):(o=this.format(Q(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),me("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),me("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),me("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,"borderTopWidth",r,!1,"0px")+" "+Q(t,"borderTopStyle",r,!1,"solid")+" "+Q(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(le)||["#000"])[0]}}),me("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var ke=function(t){var e,i=this.t,s=i.filter||Q(this.data,"filter"),r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!Q(this.data,"filter")):(i.filter=s.replace(w,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("opacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(T,"opacity="+r))};me("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(Q(t,"opacity",r,!1,"1")),l=t.style,h="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),h&&1===o&&"hidden"===Q(t,"visibility",r)&&0!==e&&(o=0),z?n=new pe(l,"opacity",o,e-o,n):(n=new pe(l,"opacity",100*o,100*(e-o),n),n.xn1=h?1:0,l.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=ke),h&&(n=new pe(l,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n}});var Ce=function(t,e){e&&(t.removeProperty?t.removeProperty(e.replace(P,"-$1").toLowerCase()):t.removeAttribute(e))},Ae=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.className=0===t?this.b:this.e;for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ce(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.className!==this.e&&(this.t.className=this.e)};me("className",{parser:function(t,e,s,n,a,o,l){var h,u,_,p,f,c=t.className,d=t.style.cssText;if(a=n._classNamePT=new pe(t,s,0,0,a,2),a.setRatio=Ae,a.pr=-11,i=!0,a.b=c,u=$(t,r),_=t._gsClassPT){for(p={},f=_.data;f;)p[f.p]=1,f=f._next;_.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:c.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.className=a.e,h=G(t,u,$(t),l,p),t.className=c,a.data=h.firstMPT,t.style.cssText=d,a=a.xfirst=n.parse(t,h.difs,a,o)),a}});var Oe=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n=this.t.style,a=o.transform.parse;if("all"===this.e)n.cssText="",r=!0;else for(e=this.e.split(","),s=e.length;--s>-1;)i=e[s],o[i]&&(o[i].parse===a?r=!0:i="transformOrigin"===i?xe:o[i].p),Ce(n,i);r&&(Ce(n,ye),this.t._gsTransform&&delete this.t._gsTransform)}};for(me("clearProps",{parser:function(t,e,s,r,n){return n=new pe(t,s,0,0,n,2),n.setRatio=Oe,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),l="bezier,throwProps,physicsProps,physics2D".split(","),ce=l.length;ce--;)ge(l[ce]);l=a.prototype,l._firstPT=null,l._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,h=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=W(t,""),n=this._overwriteProps;var l,p,c,d,m,g,v,y,T,w=t.style;if(u&&""===w.zIndex&&(l=Q(t,"zIndex",r),("auto"===l||""===l)&&(w.zIndex=0)),"string"==typeof e&&(d=w.cssText,l=$(t,r),w.cssText=d+";"+e,l=G(t,l,$(t)).difs,!z&&x.test(e)&&(l.opacity=parseFloat(RegExp.$1)),e=l,w.cssText=d),this._firstPT=p=this.parse(t,e,null),this._transformType){for(T=3===this._transformType,ye?_&&(u=!0,""===w.zIndex&&(v=Q(t,"zIndex",r),("auto"===v||""===v)&&(w.zIndex=0)),f&&(w.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):w.zoom=1,c=p;c&&c._next;)c=c._next;y=new pe(t,"transform",0,0,null,2),this._linkCSSP(y,null,c),y.setRatio=T&&we?Se:ye?Re:Pe,y.data=this._transform||be(t,r,!0),n.pop()}if(i){for(;p;){for(g=p._next,c=d;c&&c.pr>p.pr;)c=c._next;(p._prev=c?c._prev:m)?p._prev._next=p:d=p,(p._next=c)?c._prev=p:m=p,p=g}this._firstPT=d}return!0},l.parse=function(t,e,i,n){var a,l,u,_,p,f,c,d,m,g,v=t.style;for(a in e)f=e[a],l=o[a],l?i=l.parse(t,f,a,this,i,n,e):(p=Q(t,a,r)+"",m="string"==typeof f,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||m&&b.test(f)?(m||(f=oe(f),f=(f.length>3?"rgba(":"rgb(")+f.join(",")+")"),i=fe(v,a,p,f,!0,"transparent",i,0,n)):!m||-1===f.indexOf(" ")&&-1===f.indexOf(",")?(u=parseFloat(p),c=u||0===u?p.substr((u+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(u=te(t,a,r),c="px"):"left"===a||"top"===a?(u=H(t,a,r),c="px"):(u="opacity"!==a?0:1,c="")),g=m&&"="===f.charAt(1),g?(_=parseInt(f.charAt(0)+"1",10),f=f.substr(2),_*=parseFloat(f),d=f.replace(y,"")):(_=parseFloat(f),d=m?f.substr((_+"").length)||"":""),""===d&&(d=s[a]||c),f=_||0===_?(g?_+u:_)+d:e[a],c!==d&&""!==d&&(_||0===_)&&(u||0===u)&&(u=Z(t,a,u,c),"%"===d?(u/=Z(t,a,100,"%")/100,u>100&&(u=100),e.strictUnits!==!0&&(p=u+"%")):"em"===d?u/=Z(t,a,1,"em"):(_=Z(t,a,_,d),d="px"),g&&(_||0===_)&&(f=_+u+d)),g&&(_+=u),!u&&0!==u||!_&&0!==_?void 0!==v[a]&&(f||"NaN"!=f+""&&null!=f)?(i=new pe(v,a,_||u||0,0,i,-1,a,!1,0,p,f),i.xs0="none"!==f||"display"!==a&&-1===a.indexOf("Style")?f:p):B("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,u,_-u,i,0,a,h!==!1&&("px"===d||"zIndex"===a),0,p,f),i.xs0=d)):i=fe(v,a,p,f,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},l.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=e>0?0|e+.5:0|e-.5:n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;)2!==r.type?r.t[r.p]=r.e:r.setRatio(t),r=r._next},l._enableTransforms=function(t){this._transformType=t||3===this._transformType?3:2,this._transform=this._transform||be(this._target,r,!0)},l._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},l._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var De=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)De(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push($(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||De(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o=e.to(t,i,s),l=[o],h=[],u=[],_=[],p=e._internals.reservedProps;for(t=o._targets||o.target,De(t,h,_),o.render(i,!0),De(t,u),o.render(0,!0),o._enabled(!0),r=_.length;--r>-1;)if(n=G(_[r],h[r],u[r]),n.firstMPT){n=n.difs;for(a in s)p[a]&&(n[a]=s[a]);l.push(e.to(_[r],i,n))}return l},t.activate([a]),a},!0)}),window._gsDefine&&window._gsQueue.pop()();

// WAIT FOR IMAGES
/*
 * waitForImages 1.4
 * -----------------
 * Provides a callback when all images have loaded in your given selector.
 * http://www.alexanderdickson.com/
 *
 *
 * Copyright (c) 2011 Alex Dickson
 * Licensed under the MIT licenses.
 * See website for more info.
 *
 */

(function(e,t){
		e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};e.expr[":"].uncached=function(t){var n=document.createElement("img");n.src=t.src;return e(t).is('img[src!=""]')&&!n.complete};e.fn.waitForImages=function(t,n,r){if(e.isPlainObject(arguments[0])){n=t.each;r=t.waitForAll;t=t.finished}t=t||e.noop;n=n||e.noop;r=!!r;if(!e.isFunction(t)||!e.isFunction(n)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var i=e(this),s=[];if(r){var o=e.waitForImages.hasImageProperties||[],u=/url\((['"]?)(.*?)\1\)/g;i.find("*").each(function(){var t=e(this);if(t.is("img:uncached")){s.push({src:t.attr("src"),element:t[0]})}e.each(o,function(e,n){var r=t.css(n);if(!r){return true}var i;while(i=u.exec(r)){s.push({src:i[2],element:t[0]})}})})}else{i.find("img:uncached").each(function(){s.push({src:this.src,element:this})})}var f=s.length,l=0;if(f==0){t.call(i[0])}e.each(s,function(r,s){var o=new Image;e(o).bind("load error",function(e){l++;n.call(s.element,l,f,e.type=="load");if(l==f){t.call(i[0]);return false}});o.src=s.src})})};
		e.fn.swipe=function(t){if(!this)return false;var n={fingers:1,threshold:75,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,click:null,triggerOnTouchEnd:true,allowPageScroll:"auto"};var r="left";var i="right";var s="up";var o="down";var u="none";var f="horizontal";var l="vertical";var c="auto";var h="start";var p="move";var d="end";var v="cancel";var m="ontouchstart"in window,g=m?"touchstart":"mousedown",y=m?"touchmove":"mousemove",b=m?"touchend":"mouseup",w="touchcancel";var E="start";if(t.allowPageScroll==undefined&&(t.swipe!=undefined||t.swipeStatus!=undefined))t.allowPageScroll=u;if(t)e.extend(n,t);return this.each(function(){function t(){var e=S();if(e<=45&&e>=0)return r;else if(e<=360&&e>=315)return r;else if(e>=135&&e<=225)return i;else if(e>45&&e<135)return o;else return s}function S(){var e=H.x-B.x;var t=B.y-H.y;var n=Math.atan2(t,e);var r=Math.round(n*180/Math.PI);if(r<0)r=360-Math.abs(r);return r}function x(){return Math.round(Math.sqrt(Math.pow(B.x-H.x,2)+Math.pow(B.y-H.y,2)))}function T(e,t){if(n.allowPageScroll==u){e.preventDefault()}else{var a=n.allowPageScroll==c;switch(t){case r:if(n.swipeLeft&&a||!a&&n.allowPageScroll!=f)e.preventDefault();break;case i:if(n.swipeRight&&a||!a&&n.allowPageScroll!=f)e.preventDefault();break;case s:if(n.swipeUp&&a||!a&&n.allowPageScroll!=l)e.preventDefault();break;case o:if(n.swipeDown&&a||!a&&n.allowPageScroll!=l)e.preventDefault();break}}}function N(e,t){if(n.swipeStatus)n.swipeStatus.call(_,e,t,direction||null,distance||0);if(t==v){if(n.click&&(P==1||!m)&&(isNaN(distance)||distance==0))n.click.call(_,e,e.target)}if(t==d){if(n.swipe){n.swipe.call(_,e,direction,distance)}switch(direction){case r:if(n.swipeLeft)n.swipeLeft.call(_,e,direction,distance);break;case i:if(n.swipeRight)n.swipeRight.call(_,e,direction,distance);break;case s:if(n.swipeUp)n.swipeUp.call(_,e,direction,distance);break;case o:if(n.swipeDown)n.swipeDown.call(_,e,direction,distance);break}}}function C(e){P=0;H.x=0;H.y=0;B.x=0;B.y=0;F.x=0;F.y=0}function L(e){e.preventDefault();distance=x();direction=t();if(n.triggerOnTouchEnd){E=d;if((P==n.fingers||!m)&&B.x!=0){if(distance>=n.threshold){N(e,E);C(e)}else{E=v;N(e,E);C(e)}}else{E=v;N(e,E);C(e)}}else if(E==p){E=v;N(e,E);C(e)}M.removeEventListener(y,A,false);M.removeEventListener(b,L,false)}function A(e){if(E==d||E==v)return;var r=m?e.touches[0]:e;B.x=r.pageX;B.y=r.pageY;direction=t();if(m){P=e.touches.length}E=p;T(e,direction);if(P==n.fingers||!m){distance=x();if(n.swipeStatus)N(e,E,direction,distance);if(!n.triggerOnTouchEnd){if(distance>=n.threshold){E=d;N(e,E);C(e)}}}else{E=v;N(e,E);C(e)}}function O(e){var t=m?e.touches[0]:e;E=h;if(m){P=e.touches.length}distance=0;direction=null;if(P==n.fingers||!m){H.x=B.x=t.pageX;H.y=B.y=t.pageY;if(n.swipeStatus)N(e,E)}else{C(e)}M.addEventListener(y,A,false);M.addEventListener(b,L,false)}var M=this;var _=e(this);var D=null;var P=0;var H={x:0,y:0};var B={x:0,y:0};var F={x:0,y:0};try{this.addEventListener(g,O,false);this.addEventListener(w,C)}catch(I){}})}
})(jQuery)

;/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 4.1.1 (02.12.2013)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
**************************************************************************/

function revslider_showDoubleJqueryError(e){var t="Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";t+="<br> This includes make eliminates the revolution slider libraries, and make it not work.";t+="<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";t+="<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";t="<span style='font-size:16px;color:#BC0C06;'>"+t+"</span>";jQuery(e).show().html(t)}(function(e,t){function n(e){var t=[],n;var r=window.location.href.slice(window.location.href.indexOf(e)+1).split("_");for(var i=0;i<r.length;i++){r[i]=r[i].replace("%3D","=");n=r[i].split("=");t.push(n[0]);t[n[0]]=n[1]}return t}function r(n,r){try{if(r.hideThumbsUnderResoluition!=0&&r.navigationType=="thumb"){if(r.hideThumbsUnderResoluition>e(window).width())e(".tp-bullets").css({display:"none"});else e(".tp-bullets").css({display:"block"})}}catch(i){}n.find(".defaultimg").each(function(t){b(e(this),r)});var s=0;if(r.forceFullWidth=="on")s=0-r.container.parent().offset().left;try{n.parent().find(".tp-bannershadow").css({width:r.width,left:s})}catch(i){}var o=n.find(">ul >li:eq("+r.act+") .slotholder");var a=n.find(">ul >li:eq("+r.next+") .slotholder");T(n,r);a.find(".defaultimg").css({opacity:0});o.find(".defaultimg").css({opacity:1});a.find(".defaultimg").each(function(){var n=e(this);if(n.data("kenburn")!=t)n.data("kenburn").restart()});var f=n.find(">ul >li:eq("+r.next+")");q(f,r,true);u(r,n);y(n,r)}function s(){var e=["android","webos","iphone","ipad","blackberry","Android","webos",,"iPod","iPhone","iPad","Blackberry","BlackBerry"];var t=false;for(i in e){if(navigator.userAgent.split(e[i]).length>1){t=true}}return t}function o(t,n){var r=e('<div style="display:none;"/>').appendTo(e("body"));r.html("<!--[if "+(n||"")+" IE "+(t||"")+"]><a>&nbsp;</a><![endif]-->");var i=r.find("a").length;r.remove();return i}function u(e,t){e.cd=0;if(e.videoplaying!=true){var n=t.find(".tp-bannertimer");if(n.length>0){n.stop();n.css({width:"0%"});n.animate({width:"100%"},{duration:e.delay-100,queue:false,easing:"linear"})}clearTimeout(e.thumbtimer);e.thumbtimer=setTimeout(function(){c(t);y(t,e)},200)}}function a(e,t){e.cd=0;var n=t.find(".tp-bannertimer");if(n.length>0){n.stop(true,true);n.css({width:"0%"})}clearTimeout(e.thumbtimer)}function f(e,t){e.cd=0;N(t,e);var n=t.find(".tp-bannertimer");if(n.length>0){n.stop();n.css({width:"0%"});if(e.videoplaying!=true)n.animate({width:"100%"},{duration:e.delay-100,queue:false,easing:"linear"})}}function l(n,r){var i=n.parent();if(r.navigationType=="thumb"||r.navsecond=="both"){i.append('<div class="tp-bullets tp-thumbs '+r.navigationStyle+'"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>')}var s=i.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer");var o=s.parent();o.width(r.thumbWidth*r.thumbAmount);o.height(r.thumbHeight);o.parent().width(r.thumbWidth*r.thumbAmount);o.parent().height(r.thumbHeight);n.find(">ul:first >li").each(function(e){var i=n.find(">ul:first >li:eq("+e+")");if(i.data("thumb")!=t)var o=i.data("thumb");else var o=i.find("img:first").attr("src");s.append('<div class="bullet thumb" style="width:'+r.thumbWidth+"px;height:"+r.thumbHeight+'px;"><img src="'+o+'"></div>');var u=s.find(".bullet:first")});var u=10;s.find(".bullet").each(function(t){var i=e(this);if(t==r.slideamount-1)i.addClass("last");if(t==0)i.addClass("first");i.width(r.thumbWidth);i.height(r.thumbHeight);if(u<i.outerWidth(true))u=i.outerWidth(true);i.click(function(){if(r.transition==0&&i.index()!=r.act){r.next=i.index();f(r,n)}})});var a=u*n.find(">ul:first >li").length;var l=s.parent().width();r.thumbWidth=u;if(l<a){e(document).mousemove(function(t){e("body").data("mousex",t.pageX)});s.parent().mouseenter(function(){var t=e(this);t.addClass("over");var r=t.offset();var i=e("body").data("mousex")-r.left;var s=t.width();var o=t.find(".bullet:first").outerWidth(true);var u=o*n.find(">ul:first >li").length;var a=u-s+15;var f=a/s;i=i-30;var l=0-i*f;if(l>0)l=0;if(l<0-u+s)l=0-u+s;h(t,l,200)});s.parent().mousemove(function(){var t=e(this);var r=t.offset();var i=e("body").data("mousex")-r.left;var s=t.width();var o=t.find(".bullet:first").outerWidth(true);var u=o*n.find(">ul:first >li").length-1;var a=u-s+15;var f=a/s;i=i-3;if(i<6)i=0;if(i+3>s-6)i=s;var l=0-i*f;if(l>0)l=0;if(l<0-u+s)l=0-u+s;h(t,l,0)});s.parent().mouseleave(function(){var t=e(this);t.removeClass("over");c(n)})}}function c(e){var t=e.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer");var n=t.parent();var r=n.offset();var i=n.find(".bullet:first").outerWidth(true);var s=n.find(".bullet.selected").index()*i;var o=n.width();var i=n.find(".bullet:first").outerWidth(true);var u=i*e.find(">ul:first >li").length;var a=u-o;var f=a/o;var l=0-s;if(l>0)l=0;if(l<0-u+o)l=0-u+o;if(!n.hasClass("over")){h(n,l,200)}}function h(e,t,n){TweenLite.to(e.find(".tp-thumbcontainer"),.2,{left:t,ease:Power3.easeOut,overwrite:"auto"})}function p(t,n){if(n.navigationType=="bullet"||n.navigationType=="both"){t.parent().append('<div class="tp-bullets simplebullets '+n.navigationStyle+'"></div>')}var r=t.parent().find(".tp-bullets");t.find(">ul:first >li").each(function(e){var n=t.find(">ul:first >li:eq("+e+") img:first").attr("src");r.append('<div class="bullet"></div>');var i=r.find(".bullet:first")});r.find(".bullet").each(function(r){var i=e(this);if(r==n.slideamount-1)i.addClass("last");if(r==0)i.addClass("first");i.click(function(){var e=false;if(n.navigationArrows=="withbullet"||n.navigationArrows=="nexttobullets"){if(i.index()-1==n.act)e=true}else{if(i.index()==n.act)e=true}if(n.transition==0&&!e){if(n.navigationArrows=="withbullet"||n.navigationArrows=="nexttobullets"){n.next=i.index()-1}else{n.next=i.index()}f(n,t)}})});r.append('<div class="tpclear"></div>');y(t,n)}function d(e,n){var r=e.find(".tp-bullets");var i="";var s=n.navigationStyle;if(n.navigationArrows=="none")i="visibility:hidden;display:none";n.soloArrowStyle="default";if(n.navigationArrows!="none"&&n.navigationArrows!="nexttobullets")s=n.soloArrowStyle;e.parent().append('<div style="'+i+'" class="tp-leftarrow tparrows '+s+'"></div>');e.parent().append('<div style="'+i+'" class="tp-rightarrow tparrows '+s+'"></div>');e.parent().find(".tp-rightarrow").click(function(){if(n.transition==0){if(e.data("showus")!=t&&e.data("showus")!=-1)n.next=e.data("showus")-1;else n.next=n.next+1;e.data("showus",-1);if(n.next>=n.slideamount)n.next=0;if(n.next<0)n.next=0;if(n.act!=n.next)f(n,e)}});e.parent().find(".tp-leftarrow").click(function(){if(n.transition==0){n.next=n.next-1;n.leftarrowpressed=1;if(n.next<0)n.next=n.slideamount-1;f(n,e)}});y(e,n)}function v(n,r){e(document).keydown(function(e){if(r.transition==0&&e.keyCode==39){if(n.data("showus")!=t&&n.data("showus")!=-1)r.next=n.data("showus")-1;else r.next=r.next+1;n.data("showus",-1);if(r.next>=r.slideamount)r.next=0;if(r.next<0)r.next=0;if(r.act!=r.next)f(r,n)}if(r.transition==0&&e.keyCode==37){r.next=r.next-1;r.leftarrowpressed=1;if(r.next<0)r.next=r.slideamount-1;f(r,n)}});y(n,r)}function m(e,t){if(t.touchenabled=="on")e.swipe({data:e,swipeRight:function(){if(t.transition==0){t.next=t.next-1;t.leftarrowpressed=1;if(t.next<0)t.next=t.slideamount-1;f(t,e)}},swipeLeft:function(){if(t.transition==0){t.next=t.next+1;if(t.next==t.slideamount)t.next=0;f(t,e)}},allowPageScroll:"auto"})}function g(e,t){var n=e.parent().find(".tp-bullets");var r=e.parent().find(".tparrows");if(n==null){e.append('<div class=".tp-bullets"></div>');var n=e.parent().find(".tp-bullets")}if(r==null){e.append('<div class=".tparrows"></div>');var r=e.parent().find(".tparrows")}e.data("hidethumbs",t.hideThumbs);n.addClass("hidebullets");r.addClass("hidearrows");n.hover(function(){n.addClass("hovered");clearTimeout(e.data("hidethumbs"));n.removeClass("hidebullets");r.removeClass("hidearrows")},function(){n.removeClass("hovered");if(!e.hasClass("hovered")&&!n.hasClass("hovered"))e.data("hidethumbs",setTimeout(function(){n.addClass("hidebullets");r.addClass("hidearrows")},t.hideThumbs))});r.hover(function(){n.addClass("hovered");clearTimeout(e.data("hidethumbs"));n.removeClass("hidebullets");r.removeClass("hidearrows")},function(){n.removeClass("hovered")});e.on("mouseenter",function(){e.addClass("hovered");clearTimeout(e.data("hidethumbs"));n.removeClass("hidebullets");r.removeClass("hidearrows")});e.on("mouseleave",function(){e.removeClass("hovered");if(!e.hasClass("hovered")&&!n.hasClass("hovered"))e.data("hidethumbs",setTimeout(function(){n.addClass("hidebullets");r.addClass("hidearrows")},t.hideThumbs))})}function y(t,n){var r=t.parent();var i=r.find(".tp-bullets");if(n.navigationType=="thumb"){i.find(".thumb").each(function(t){var r=e(this);r.css({width:n.thumbWidth*n.bw+"px",height:n.thumbHeight*n.bh+"px"})});var s=i.find(".tp-mask");s.width(n.thumbWidth*n.thumbAmount*n.bw);s.height(n.thumbHeight*n.bh);s.parent().width(n.thumbWidth*n.thumbAmount*n.bw);s.parent().height(n.thumbHeight*n.bh)}var o=r.find(".tp-leftarrow");var u=r.find(".tp-rightarrow");if(n.navigationType=="thumb"&&n.navigationArrows=="nexttobullets")n.navigationArrows="solo";if(n.navigationArrows=="nexttobullets"){o.prependTo(i).css({"float":"left"});u.insertBefore(i.find(".tpclear")).css({"float":"left"})}var a=0;if(n.forceFullWidth=="on")a=0-n.container.parent().offset().left;if(n.navigationArrows!="none"&&n.navigationArrows!="nexttobullets"){o.css({position:"absolute"});u.css({position:"absolute"});if(n.soloArrowLeftValign=="center")o.css({top:"50%",marginTop:n.soloArrowLeftVOffset-Math.round(o.innerHeight()/2)+"px"});if(n.soloArrowLeftValign=="bottom")o.css({top:"auto",bottom:0+n.soloArrowLeftVOffset+"px"});if(n.soloArrowLeftValign=="top")o.css({bottom:"auto",top:0+n.soloArrowLeftVOffset+"px"});if(n.soloArrowLeftHalign=="center")o.css({left:"50%",marginLeft:a+n.soloArrowLeftHOffset-Math.round(o.innerWidth()/2)+"px"});if(n.soloArrowLeftHalign=="left")o.css({left:0+n.soloArrowLeftHOffset+a+"px"});if(n.soloArrowLeftHalign=="right")o.css({right:0+n.soloArrowLeftHOffset-a+"px"});if(n.soloArrowRightValign=="center")u.css({top:"50%",marginTop:n.soloArrowRightVOffset-Math.round(u.innerHeight()/2)+"px"});if(n.soloArrowRightValign=="bottom")u.css({top:"auto",bottom:0+n.soloArrowRightVOffset+"px"});if(n.soloArrowRightValign=="top")u.css({bottom:"auto",top:0+n.soloArrowRightVOffset+"px"});if(n.soloArrowRightHalign=="center")u.css({left:"50%",marginLeft:a+n.soloArrowRightHOffset-Math.round(u.innerWidth()/2)+"px"});if(n.soloArrowRightHalign=="left")u.css({left:0+n.soloArrowRightHOffset+a+"px"});if(n.soloArrowRightHalign=="right")u.css({right:0+n.soloArrowRightHOffset-a+"px"});if(o.position()!=null)o.css({top:Math.round(parseInt(o.position().top,0))+"px"});if(u.position()!=null)u.css({top:Math.round(parseInt(u.position().top,0))+"px"})}if(n.navigationArrows=="none"){o.css({visibility:"hidden"});u.css({visibility:"hidden"})}if(n.navigationVAlign=="center")i.css({top:"50%",marginTop:n.navigationVOffset-Math.round(i.innerHeight()/2)+"px"});if(n.navigationVAlign=="bottom")i.css({bottom:0+n.navigationVOffset+"px"});if(n.navigationVAlign=="top")i.css({top:0+n.navigationVOffset+"px"});if(n.navigationHAlign=="center")i.css({left:"50%",marginLeft:a+n.navigationHOffset-Math.round(i.innerWidth()/2)+"px"});if(n.navigationHAlign=="left")i.css({left:0+n.navigationHOffset+a+"px"});if(n.navigationHAlign=="right")i.css({right:0+n.navigationHOffset-a+"px"})}function b(n,r){r.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css({height:r.container.height()});r.container.closest(".rev_slider_wrapper").css({height:r.container.height()});r.width=parseInt(r.container.width(),0);r.height=parseInt(r.container.height(),0);r.bw=r.width/r.startwidth;r.bh=r.height/r.startheight;if(r.bh>r.bw)r.bh=r.bw;if(r.bh<r.bw)r.bw=r.bh;if(r.bw<r.bh)r.bh=r.bw;if(r.bh>1){r.bw=1;r.bh=1}if(r.bw>1){r.bw=1;r.bh=1}r.height=Math.round(r.startheight*(r.width/r.startwidth));if(r.height>r.startheight&&r.autoHeight!="on")r.height=r.startheight;if(r.fullScreen=="on"){r.height=r.bw*r.startheight;var i=r.container.parent().width();var s=e(window).height();if(r.fullScreenOffsetContainer!=t){try{var o=r.fullScreenOffsetContainer.split(",");e.each(o,function(t,n){s=s-e(n).outerHeight(true);if(s<r.minFullScreenHeight)s=r.minFullScreenHeight})}catch(u){}}r.container.parent().height(s);r.container.css({height:"100%"});r.height=s}else{r.container.height(r.height)}r.slotw=Math.ceil(r.width/r.slots);if(r.fullSreen=="on")r.sloth=Math.ceil(e(window).height()/r.slots);else r.sloth=Math.ceil(r.height/r.slots);if(r.autoHeight=="on")r.sloth=Math.ceil(n.height()/r.slots)}function w(n,r){n.find(".tp-caption").each(function(){e(this).addClass(e(this).data("transition"));e(this).addClass("start")});n.find(">ul:first").css({overflow:"hidden",width:"100%",height:"100%",maxHeight:n.parent().css("maxHeight")});if(r.autoHeight=="on"){n.find(">ul:first").css({overflow:"hidden",width:"100%",height:"100%",maxHeight:"none"});n.css({maxHeight:"none"});n.parent().css({maxHeight:"none"})}n.find(">ul:first >li").each(function(n){var r=e(this);r.css({width:"100%",height:"100%",overflow:"hidden"});if(r.data("link")!=t){var i=r.data("link");var s="_self";var o=2;if(r.data("slideindex")=="back")o=0;var u=r.data("linktoslide");if(r.data("target")!=t)s=r.data("target");if(i=="slide"){r.append('<div class="tp-caption sft slidelink" style="z-index:'+o+';" data-x="0" data-y="0" data-linktoslide="'+u+'" data-start="0"><a><div></div></a></div>')}else{u="no";r.append('<div class="tp-caption sft slidelink" style="z-index:'+o+';" data-x="0" data-y="0" data-linktoslide="'+u+'" data-start="0"><a target="'+s+'" href="'+i+'"><div></div></a></div>')}}});n.parent().css({overflow:"visible"});n.find(">ul:first >li >img").each(function(n){var i=e(this);i.addClass("defaultimg");if(i.data("lazyload")!=t&&i.data("lazydone")!=1){}else{b(i,r)}i.wrap('<div class="slotholder" style="width:100%;height:100%;"'+'data-duration="'+i.data("duration")+'"'+'data-zoomstart="'+i.data("zoomstart")+'"'+'data-zoomend="'+i.data("zoomend")+'"'+'data-rotationstart="'+i.data("rotationstart")+'"'+'data-rotationend="'+i.data("rotationend")+'"'+'data-ease="'+i.data("ease")+'"'+'data-duration="'+i.data("duration")+'"'+'data-bgpositionend="'+i.data("bgpositionend")+'"'+'data-bgposition="'+i.data("bgposition")+'"'+'data-duration="'+i.data("duration")+'"'+'data-kenburns="'+i.data("kenburns")+'"'+'data-easeme="'+i.data("ease")+'"'+'data-bgfit="'+i.data("bgfit")+'"'+'data-bgfitend="'+i.data("bgfitend")+'"'+'data-owidth="'+i.data("owidth")+'"'+'data-oheight="'+i.data("oheight")+'"'+"></div>");if(r.dottedOverlay!="none"&&r.dottedOverlay!=t)i.closest(".slotholder").append('<div class="tp-dottedoverlay '+r.dottedOverlay+'"></div>');var s=i.attr("src");var u=i.data("lazyload");var a=i.data("bgfit");var f=i.data("bgrepeat");var l=i.data("bgposition");if(a==t)a="cover";if(f==t)f="no-repeat";if(l==t)l="center center";var c=i.closest(".slotholder");i.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="'+i.data("lazyload")+'" data-bgfit="'+a+'"data-bgposition="'+l+'" data-bgrepeat="'+f+'" data-lazydone="'+i.data("lazydone")+'" data-src="'+s+'" style="background-color:'+i.css("backgroundColor")+";background-repeat:"+f+";background-image:url("+s+");background-size:"+a+";background-position:"+l+';width:100%;height:100%;"></div>');if(o(8)){c.find(".tp-bgimg").css({backgroundImage:"none","background-image":"none"});c.find(".tp-bgimg").append('<img class="ieeightfallbackimage defaultimg" src="'+s+'" style="width:100%">')}i.css({opacity:0});i.data("li-id",n)})}function E(e,n,r,i){var s=e;var u=s.find(".defaultimg");var a=s.data("zoomstart");var f=s.data("rotationstart");if(u.data("currotate")!=t)f=u.data("currotate");if(u.data("curscale")!=t)a=u.data("curscale");b(u,n);var l=u.data("src");var c=u.css("background-color");var h=n.width;var p=n.height;if(n.autoHeight=="on")p=n.container.height();var d=u.data("fxof");if(d==t)d=0;fullyoff=0;var v=0;var m=u.data("bgfit");var g=u.data("bgrepeat");var y=u.data("bgposition");if(m==t)m="cover";if(g==t)g="no-repeat";if(y==t)y="center center";if(s.data("kenburns")=="on"){m=a;if(m.toString().length<4)m=A(m,s,n)}if(o(8)){var w=l;l=""}if(i=="horizontal"){if(!r)var v=0-n.slotw;for(var E=0;E<n.slots;E++){s.append('<div class="slot" style="position:absolute;'+"top:"+(0+fullyoff)+"px;"+"left:"+(d+E*n.slotw)+"px;"+"overflow:hidden;width:"+n.slotw+"px;"+"height:"+p+'px">'+'<div class="slotslide" style="position:absolute;'+"top:0px;left:"+v+"px;"+"width:"+n.slotw+"px;"+"height:"+p+'px;overflow:hidden;">'+'<div style="background-color:'+c+";"+"position:absolute;top:0px;"+"left:"+(0-E*n.slotw)+"px;"+"width:"+h+"px;height:"+p+"px;"+"background-image:url("+l+");"+"background-repeat:"+g+";"+"background-size:"+m+";background-position:"+y+';">'+"</div></div></div>");if(a!=t&&f!=t)TweenLite.set(s.find(".slot").last(),{rotationZ:f});if(o(8)){s.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="'+w+'" style="width:100%">');x(s,n)}}}else{if(!r)var v=0-n.sloth;for(var E=0;E<n.slots+2;E++){s.append('<div class="slot" style="position:absolute;'+"top:"+(fullyoff+E*n.sloth)+"px;"+"left:"+d+"px;"+"overflow:hidden;"+"width:"+h+"px;"+"height:"+n.sloth+'px">'+'<div class="slotslide" style="position:absolute;'+"top:"+v+"px;"+"left:0px;width:"+h+"px;"+"height:"+n.sloth+"px;"+'overflow:hidden;">'+'<div style="background-color:'+c+";"+"position:absolute;"+"top:"+(0-E*n.sloth)+"px;"+"left:0px;"+"width:"+h+"px;height:"+p+"px;"+"background-image:url("+l+");"+"background-repeat:"+g+";"+"background-size:"+m+";background-position:"+y+';">'+"</div></div></div>");if(a!=t&&f!=t)TweenLite.set(s.find(".slot").last(),{rotationZ:f});if(o(8)){s.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="'+w+'" style="width:100%">');x(s,n)}}}}function S(e,n,r){var i=e;var s=i.find(".defaultimg");var u=i.data("zoomstart");var a=i.data("rotationstart");if(s.data("currotate")!=t)a=s.data("currotate");if(s.data("curscale")!=t)u=s.data("curscale")*100;b(s,n);var f=s.data("src");var l=s.css("backgroundColor");var c=n.width;var h=n.height;if(n.autoHeight=="on")h=n.container.height();var p=s.data("fxof");if(p==t)p=0;fullyoff=0;var d=0;if(o(8)){var v=f;f=""}var m=0;if(n.sloth>n.slotw)m=n.sloth;else m=n.slotw;if(!r){var d=0-m}n.slotw=m;n.sloth=m;var g=0;var y=0;var w=s.data("bgfit");var E=s.data("bgrepeat");var S=s.data("bgposition");if(w==t)w="cover";if(E==t)E="no-repeat";if(S==t)S="center center";if(i.data("kenburns")=="on"){w=u;if(w.toString().length<4)w=A(w,i,n)}for(var T=0;T<n.slots;T++){y=0;for(var N=0;N<n.slots;N++){i.append('<div class="slot" '+'style="position:absolute;'+"top:"+(fullyoff+y)+"px;"+"left:"+(p+g)+"px;"+"width:"+m+"px;"+"height:"+m+"px;"+'overflow:hidden;">'+'<div class="slotslide" data-x="'+g+'" data-y="'+y+'" '+'style="position:absolute;'+"top:"+0+"px;"+"left:"+0+"px;"+"width:"+m+"px;"+"height:"+m+"px;"+'overflow:hidden;">'+'<div style="position:absolute;'+"top:"+(0-y)+"px;"+"left:"+(0-g)+"px;"+"width:"+c+"px;"+"height:"+h+"px;"+"background-color:"+l+";"+"background-image:url("+f+");"+"background-repeat:"+E+";"+"background-size:"+w+";background-position:"+S+';">'+"</div></div></div>");y=y+m;if(o(8)){i.find(".slot ").last().find(".slotslide").append('<img src="'+v+'">');x(i,n)}if(u!=t&&a!=t)TweenLite.set(i.find(".slot").last(),{rotationZ:a})}g=g+m}}function x(e,t){if(o(8)){var n=e.find(".ieeightfallbackimage");if(t.startwidth/t.startheight<e.data("owidth")/e.data("oheight"))n.css({width:"auto",height:"100%"});else n.css({width:"100%",height:"auto"});var r=n.width(),i=n.height();if(e.data("bgposition")=="center center")n.css({position:"absolute",top:t.height/2-i/2+"px",left:t.width/2-r/2+"px"});if(e.data("bgposition")=="center top"||e.data("bgposition")=="top center")n.css({position:"absolute",top:"0px",left:t.width/2-r/2+"px"});if(e.data("bgposition")=="center bottom"||e.data("bgposition")=="bottom center")n.css({position:"absolute",bottom:"0px",left:t.width/2-r/2+"px"});if(e.data("bgposition")=="right top"||e.data("bgposition")=="top right")n.css({position:"absolute",top:"0px",right:"0px"});if(e.data("bgposition")=="right bottom"||e.data("bgposition")=="bottom right")n.css({position:"absolute",bottom:"0px",right:"0px"});if(e.data("bgposition")=="right center"||e.data("bgposition")=="center right")n.css({position:"absolute",top:t.height/2-i/2+"px",right:"0px"});if(e.data("bgposition")=="left bottom"||e.data("bgposition")=="bottom left")n.css({position:"absolute",bottom:"0px",left:"0px"});if(e.data("bgposition")=="left center"||e.data("bgposition")=="center left")n.css({position:"absolute",top:t.height/2-i/2+"px",left:"0px"})}}function T(n,r,i){if(i==t)i==80;setTimeout(function(){n.find(".slotholder .slot").each(function(){clearTimeout(e(this).data("tout"));e(this).remove()});r.transition=0},i)}function N(e,n){try{var r=e.find(">ul:first-child >li:eq("+n.act+")")}catch(i){var r=e.find(">ul:first-child >li:eq(1)")}n.lastslide=n.act;var s=e.find(">ul:first-child >li:eq("+n.next+")");var o=s.find(".defaultimg");if(o.data("lazyload")!=t&&o.data("lazyload")!="undefined"&&o.data("lazydone")!=1){o.css({backgroundImage:'url("'+s.find(".defaultimg").data("lazyload")+'")'});o.data("src",s.find(".defaultimg").data("lazyload"));o.data("lazydone",1);o.data("orgw",0);s.data("loadeddone",1);e.find(".tp-loader").css({display:"block"}).transition({opacity:1,duration:300});var f=new Image;f.onload=function(){setTimeout(function(){a(n,e)},180);s.waitForImages(function(){o.data("lazydone",1);s.data("owidth",f.width);s.data("oheight",f.height);s.find(".slotholder").data("owidth",f.width);s.find(".slotholder").data("oheight",f.height);setTimeout(function(){u(n,e)},190);b(o,n);y(e,n);b(o,n);C(e,n);e.find(".tp-loader").transition({opacity:0,duration:300});setTimeout(function(){e.find(".tp-loader").css({display:"none"})},2200)})};f.src=s.find(".defaultimg").data("lazyload")}else{if(s.data("loadeddone")==t){var f=new Image;f.onload=function(){s.data("loadeddone",1);s.data("owidth",f.width);s.data("oheight",f.height);s.find(".slotholder").data("owidth",f.width);s.find(".slotholder").data("oheight",f.height);s.waitForImages(function(){b(o,n);y(e,n);b(o,n);C(e,n)})};f.src=s.find(".defaultimg").data("src")}else{C(e,n)}}}function C(n,r){function x(){e.each(v,function(e,t){if(t[0]==p||t[8]==p){l=t[1];d=t[2];y=b}b=b+1})}n.trigger("revolution.slide.onbeforeswap");r.transition=1;r.videoplaying=false;try{var i=n.find(">ul:first-child >li:eq("+r.act+")")}catch(s){var i=n.find(">ul:first-child >li:eq(1)")}r.lastslide=r.act;var u=n.find(">ul:first-child >li:eq("+r.next+")");var a=i.find(".slotholder");var f=u.find(".slotholder");i.css({visibility:"visible"});u.css({visibility:"visible"});if(f.data("kenburns")=="on")k(n,r);if(r.ie){if(p=="boxfade")p="boxslide";if(p=="slotfade-vertical")p="slotzoom-vertical";if(p=="slotfade-horizontal")p="slotzoom-horizontal"}if(u.data("delay")!=t){r.cd=0;r.delay=u.data("delay")}else{r.delay=r.origcd}i.css({left:"0px",top:"0px"});u.css({left:"0px",top:"0px"});if(u.data("differentissplayed")=="prepared"){u.data("differentissplayed","done");u.data("transition",u.data("savedtransition"));u.data("slotamount",u.data("savedslotamount"));u.data("masterspeed",u.data("savedmasterspeed"))}if(u.data("fstransition")!=t&&u.data("differentissplayed")!="done"){u.data("savedtransition",u.data("transition"));u.data("savedslotamount",u.data("slotamount"));u.data("savedmasterspeed",u.data("masterspeed"));u.data("transition",u.data("fstransition"));u.data("slotamount",u.data("fsslotamount"));u.data("masterspeed",u.data("fsmasterspeed"));u.data("differentissplayed","prepared")}var l=0;var c=u.data("transition").split(",");var h=u.data("nexttransid");if(h==t){h=0;u.data("nexttransid",h)}else{h=h+1;if(h==c.length)h=0;u.data("nexttransid",h)}var p=c[h];var d=0;if(p=="slidehorizontal"){p="slideleft";if(r.leftarrowpressed==1)p="slideright"}if(p=="slidevertical"){p="slideup";if(r.leftarrowpressed==1)p="slidedown"}var v=[["boxslide",0,1,10,0,"box",false,null,0],["boxfade",1,0,10,0,"box",false,null,1],["slotslide-horizontal",2,0,0,200,"horizontal",true,false,2],["slotslide-vertical",3,0,0,200,"vertical",true,false,3],["curtain-1",4,3,0,0,"horizontal",true,true,4],["curtain-2",5,3,0,0,"horizontal",true,true,5],["curtain-3",6,3,25,0,"horizontal",true,true,6],["slotzoom-horizontal",7,0,0,400,"horizontal",true,true,7],["slotzoom-vertical",8,0,0,0,"vertical",true,true,8],["slotfade-horizontal",9,0,0,500,"horizontal",true,null,9],["slotfade-vertical",10,0,0,500,"vertical",true,null,10],["fade",11,0,1,300,"horizontal",true,null,11],["slideleft",12,0,1,0,"horizontal",true,true,12],["slideup",13,0,1,0,"horizontal",true,true,13],["slidedown",14,0,1,0,"horizontal",true,true,14],["slideright",15,0,1,0,"horizontal",true,true,15],["papercut",16,0,0,600,"",null,null,16],["3dcurtain-horizontal",17,0,20,100,"vertical",false,true,17],["3dcurtain-vertical",18,0,10,100,"horizontal",false,true,18],["cubic",19,0,20,600,"horizontal",false,true,19],["cube",19,0,20,600,"horizontal",false,true,20],["flyin",20,0,4,600,"vertical",false,true,21],["turnoff",21,0,1,1600,"horizontal",false,true,22],["incube",22,0,20,600,"horizontal",false,true,23],["cubic-horizontal",23,0,20,500,"vertical",false,true,24],["cube-horizontal",23,0,20,500,"vertical",false,true,25],["incube-horizontal",24,0,20,500,"vertical",false,true,26],["turnoff-vertical",25,0,1,1600,"horizontal",false,true,27],["fadefromright",12,1,1,0,"horizontal",true,true,28],["fadefromleft",15,1,1,0,"horizontal",true,true,29],["fadefromtop",14,1,1,0,"horizontal",true,true,30],["fadefrombottom",13,1,1,0,"horizontal",true,true,31],["fadetoleftfadefromright",12,2,1,0,"horizontal",true,true,32],["fadetorightfadetoleft",15,2,1,0,"horizontal",true,true,33],["fadetobottomfadefromtop",14,2,1,0,"horizontal",true,true,34],["fadetotopfadefrombottom",13,2,1,0,"horizontal",true,true,35],["parallaxtoright",12,3,1,0,"horizontal",true,true,36],["parallaxtoleft",15,3,1,0,"horizontal",true,true,37],["parallaxtotop",14,3,1,0,"horizontal",true,true,38],["parallaxtobottom",13,3,1,0,"horizontal",true,true,39],["scaledownfromright",12,4,1,0,"horizontal",true,true,40],["scaledownfromleft",15,4,1,0,"horizontal",true,true,41],["scaledownfromtop",14,4,1,0,"horizontal",true,true,42],["scaledownfrombottom",13,4,1,0,"horizontal",true,true,43],["zoomout",13,5,1,0,"horizontal",true,true,44],["zoomin",13,6,1,0,"horizontal",true,true,45],["notransition",26,0,1,0,"horizontal",true,null,46]];var m=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];var g=[16,17,18,19,20,21,22,23,24,25,26,27];var l=0;var d=1;var y=0;var b=0;var w=new Array;if(p=="random"){p=Math.round(Math.random()*v.length-1);if(p>v.length-1)p=v.length-1}if(p=="random-static"){p=Math.round(Math.random()*m.length-1);if(p>m.length-1)p=m.length-1;p=m[p]}if(p=="random-premium"){p=Math.round(Math.random()*g.length-1);if(p>g.length-1)p=g.length-1;p=g[p]}x();if(o(8)&&l>15&&l<28){p=Math.round(Math.random()*m.length-1);if(p>m.length-1)p=m.length-1;p=m[p];b=0;x()}var T=-1;if(r.leftarrowpressed==1||r.act>r.next)T=1;r.leftarrowpressed=0;if(l>26)l=26;if(l<0)l=0;var N=300;if(u.data("masterspeed")!=t&&u.data("masterspeed")>99&&u.data("masterspeed")<4001)N=u.data("masterspeed");w=v[y];n.parent().find(".bullet").each(function(){var t=e(this);t.removeClass("selected");if(r.navigationArrows=="withbullet"||r.navigationArrows=="nexttobullets"){if(t.index()-1==r.next)t.addClass("selected")}else{if(t.index()==r.next)t.addClass("selected")}});n.find(">li").each(function(){var t=e(this);if(t.index!=r.act&&t.index!=r.next)t.css({"z-index":16})});i.css({"z-index":18});u.css({"z-index":20});u.css({opacity:0});if(i.index()!=u.index()&&r.firststart!=1){W(i,r)}q(u,r);if(u.data("slotamount")==t||u.data("slotamount")<1){r.slots=Math.round(Math.random()*12+4);if(p=="boxslide")r.slots=Math.round(Math.random()*6+3);else if(p=="flyin")r.slots=Math.round(Math.random()*4+1)}else{r.slots=u.data("slotamount")}if(u.data("rotate")==t)r.rotate=0;else if(u.data("rotate")==999)r.rotate=Math.round(Math.random()*360);else r.rotate=u.data("rotate");if(!e.support.transition||r.ie||r.ie9)r.rotate=0;if(r.firststart==1){i.css({opacity:0});r.firststart=0}N=N+w[4];if((l==4||l==5||l==6)&&r.slots<3)r.slots=3;if(w[3]!=0)r.slots=Math.min(r.slots,w[3]);if(l==9)r.slots=r.width/20;if(l==10)r.slots=r.height/20;if(w[5]=="box"){if(w[7]!=null)S(a,r,w[7]);if(w[6]!=null)S(f,r,w[6])}else if(w[5]=="vertical"||w[5]=="horizontal"){if(w[7]!=null)E(a,r,w[7],w[5]);if(w[6]!=null)E(f,r,w[6],w[5])}if(l<12||l>16)u.css({opacity:1});if(l==0){f.find(".defaultimg").css({opacity:0});var C=Math.ceil(r.height/r.sloth);var L=0;f.find(".slotslide").each(function(t){var s=e(this);L=L+1;if(L==C)L=0;TweenLite.fromTo(s,N/600,{opacity:0,top:0-r.sloth,left:0-r.slotw,rotation:r.rotate},{opacity:1,transformPerspective:600,top:0,left:0,scale:1,rotation:0,delay:(t*15+L*30)/1500,ease:Power2.easeOut,onComplete:function(){if(t==r.slots*r.slots-1){P(n,r,f,a,u,i)}}})})}if(l==1){f.find(".defaultimg").css({opacity:0});var A;f.find(".slotslide").each(function(t){var n=e(this);rand=Math.random()*N+300;rand2=Math.random()*500+200;if(rand+rand2>A)A=rand2+rand2;TweenLite.fromTo(n,rand/1e3,{opacity:0,transformPerspective:600,rotation:r.rotate},{opacity:1,ease:Power2.easeInOut,rotation:0,delay:rand2/1e3})});setTimeout(function(){P(n,r,f,a,u,i)},N+300)}if(l==2){f.find(".defaultimg").css({opacity:0});a.find(".slotslide").each(function(){var t=e(this);TweenLite.to(t,N/1e3,{left:r.slotw,rotation:0-r.rotate,onComplete:function(){P(n,r,f,a,u,i)}})});f.find(".slotslide").each(function(){var t=e(this);TweenLite.fromTo(t,N/1e3,{left:0-r.slotw,rotation:r.rotate,transformPerspective:600},{left:0,rotation:0,ease:Power2.easeOut,onComplete:function(){P(n,r,f,a,u,i)}})})}if(l==3){f.find(".defaultimg").css({opacity:0});a.find(".slotslide").each(function(){var t=e(this);TweenLite.to(t,N/1e3,{top:r.sloth,rotation:r.rotate,transformPerspective:600,onComplete:function(){P(n,r,f,a,u,i)}})});f.find(".slotslide").each(function(){var t=e(this);TweenLite.fromTo(t,N/1e3,{top:0-r.sloth,rotation:r.rotate,transformPerspective:600},{top:0,rotation:0,ease:Power2.easeOut,onComplete:function(){P(n,r,f,a,u,i)}})})}if(l==4||l==5){f.find(".defaultimg").css({opacity:0});setTimeout(function(){a.find(".defaultimg").css({opacity:0})},100);var O=N/1e3;var M=O;a.find(".slotslide").each(function(t){var n=e(this);var i=t*O/r.slots;if(l==5)i=(r.slots-t-1)*O/r.slots/1.5;TweenLite.to(n,O*3,{transformPerspective:600,top:0+r.height,opacity:.5,rotation:r.rotate,ease:Power2.easeInOut,delay:i})});f.find(".slotslide").each(function(t){var s=e(this);var o=t*O/r.slots;if(l==5)o=(r.slots-t-1)*O/r.slots/1.5;TweenLite.fromTo(s,O*3,{top:0-r.height,opacity:.5,rotation:r.rotate,transformPerspective:600},{top:0,opacity:1,rotation:0,ease:Power2.easeInOut,delay:o,onComplete:function(){if(t==r.slots-1){P(n,r,f,a,u,i)}}})})}if(l==6){if(r.slots<2)r.slots=2;f.find(".defaultimg").css({opacity:0});setTimeout(function(){a.find(".defaultimg").css({opacity:0})},100);a.find(".slotslide").each(function(t){var n=e(this);if(t<r.slots/2)var i=(t+2)*60;else var i=(2+r.slots-t)*60;TweenLite.to(n,(N+i)/1e3,{top:0+r.height,opacity:1,rotation:r.rotate,transformPerspective:600,ease:Power2.easeInOut})});f.find(".slotslide").each(function(t){var s=e(this);if(t<r.slots/2)var o=(t+2)*60;else var o=(2+r.slots-t)*60;TweenLite.fromTo(s,(N+o)/1e3,{top:0-r.height,opacity:1,rotation:r.rotate,transformPerspective:600},{top:0,opacity:1,rotation:0,ease:Power2.easeInOut,onComplete:function(){if(t==Math.round(r.slots/2)){P(n,r,f,a,u,i)}}})})}if(l==7){N=N*2;f.find(".defaultimg").css({opacity:0});setTimeout(function(){a.find(".defaultimg").css({opacity:0})},100);a.find(".slotslide").each(function(){var t=e(this).find("div");TweenLite.to(t,N/1e3,{left:0-r.slotw/2+"px",top:0-r.height/2+"px",width:r.slotw*2+"px",height:r.height*2+"px",opacity:0,rotation:r.rotate,transformPerspective:600,ease:Power2.easeOut})});f.find(".slotslide").each(function(t){var s=e(this).find("div");TweenLite.fromTo(s,N/1e3,{left:0,top:0,opacity:0,transformPerspective:600},{left:0-t*r.slotw+"px",ease:Power2.easeOut,top:0+"px",width:r.width,height:r.height,opacity:1,rotation:0,delay:.1,onComplete:function(){P(n,r,f,a,u,i)}})})}if(l==8){N=N*3;f.find(".defaultimg").css({opacity:0});a.find(".slotslide").each(function(){var t=e(this).find("div");TweenLite.to(t,N/1e3,{left:0-r.width/2+"px",top:0-r.sloth/2+"px",width:r.width*2+"px",height:r.sloth*2+"px",transformPerspective:600,opacity:0,rotation:r.rotate})});f.find(".slotslide").each(function(t){var s=e(this).find("div");TweenLite.fromTo(s,N/1e3,{left:0,top:0,opacity:0,transformPerspective:600},{left:0+"px",top:0-t*r.sloth+"px",width:f.find(".defaultimg").data("neww")+"px",height:f.find(".defaultimg").data("newh")+"px",opacity:1,rotation:0,onComplete:function(){P(n,r,f,a,u,i)}})})}if(l==9||l==10){f.find(".defaultimg").css({opacity:0});var _=0;f.find(".slotslide").each(function(t){var n=e(this);_++;TweenLite.fromTo(n,N/1e3,{opacity:0,transformPerspective:600,left:0,top:0},{opacity:1,ease:Power2.easeInOut,delay:t*4/1e3})});setTimeout(function(){P(n,r,f,a,u,i)},N+_*4)}if(l==11||l==26){f.find(".defaultimg").css({opacity:0,position:"relative"});var _=0;if(l==26)N=0;f.find(".slotslide").each(function(t){var n=e(this);TweenLite.fromTo(n,N/1e3,{opacity:0},{opacity:1,ease:Power2.easeInOut})});setTimeout(function(){P(n,r,f,a,u,i)},N+15)}if(l==12||l==13||l==14||l==15){setTimeout(function(){a.find(".defaultimg").css({opacity:0})},100);f.find(".defaultimg").css({opacity:0});var D=r.width;var H=r.height;var B=f.find(".slotslide");if(r.fullWidth=="on"||r.fullSreen=="on"){D=B.width();H=B.height()}var j=0;var F=0;if(l==12)j=D;else if(l==15)j=0-D;else if(l==13)F=H;else if(l==14)F=0-H;var I=1;var R=1;var U=1;var z=Power2.easeInOut;var X=Power2.easeInOut;var V=N/1e3;var $=V;if(d==1)I=0;if(d==2)I=0;if(d==3){z=Power2.easeInOut;X=Power1.easeInOut;i.css({position:"absolute","z-index":20});u.css({position:"absolute","z-index":15});V=N/1200}if(d==4||d==5)R=.6;if(d==6)R=1.4;if(d==5||d==6){U=1.4;I=0;D=0;H=0;j=0;F=0}if(d==6)U=.6;TweenLite.fromTo(B,V,{left:j,top:F,scale:U,opacity:I,rotation:r.rotate},{opacity:1,rotation:0,left:0,top:0,scale:1,ease:X,onComplete:function(){P(n,r,f,a,u,i);i.css({position:"absolute","z-index":18});u.css({position:"absolute","z-index":20})}});var J=a.find(".slotslide");if(d==4||d==5){D=0;H=0}if(d!=1){if(l==12)TweenLite.to(J,$,{left:0-D+"px",scale:R,opacity:I,rotation:r.rotate,ease:z});else if(l==15)TweenLite.to(J,$,{left:D+"px",scale:R,opacity:I,rotation:r.rotate,ease:z});else if(l==13)TweenLite.to(J,$,{top:0-H+"px",scale:R,opacity:I,rotation:r.rotate,ease:z});else if(l==14)TweenLite.to(J,$,{top:H+"px",scale:R,opacity:I,rotation:r.rotate,ease:z})}u.css({opacity:1})}if(l==16){i.css({position:"absolute","z-index":20});u.css({position:"absolute","z-index":15});i.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>');i.find(".tp-half-one").clone(true).appendTo(i).addClass("tp-half-two");i.find(".tp-half-two").removeClass("tp-half-one");var D=r.width;var H=r.height;if(r.autoHeight=="on")H=n.height();i.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:'+D+"px;height:"+H+'px;"></div>');i.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:'+D+"px;height:"+H+'px;"></div>');i.find(".tp-half-two .defaultimg").css({position:"absolute",top:"-50%"});i.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px"></div>');TweenLite.set(i.find(".tp-half-two"),{width:D,height:H,overflow:"hidden",zIndex:15,position:"absolute",top:H/2,left:"0px",transformPerspective:600,transformOrigin:"center bottom"});TweenLite.set(i.find(".tp-half-one"),{width:D,height:H/2,overflow:"visible",zIndex:10,position:"absolute",top:"0px",left:"0px",transformPerspective:600,transformOrigin:"center top"});var K=i.find(".defaultimg");var Q=Math.round(Math.random()*20-10);var G=Math.round(Math.random()*20-10);var Y=Math.round(Math.random()*20-10);var Z=Math.random()*.4-.2;var et=Math.random()*.4-.2;var tt=Math.random()*1+1;var nt=Math.random()*1+1;TweenLite.fromTo(i.find(".tp-half-one"),N/1e3,{width:D,height:H/2,position:"absolute",top:"0px",left:"0px",transformPerspective:600,transformOrigin:"center top"},{scale:tt,rotation:Q,y:0-H-H/4,ease:Power2.easeInOut});setTimeout(function(){TweenLite.set(i.find(".tp-half-one"),{overflow:"hidden"})},50);TweenLite.fromTo(i.find(".tp-half-one"),N/2e3,{opacity:1,transformPerspective:600,transformOrigin:"center center"},{opacity:0,delay:N/2e3});TweenLite.fromTo(i.find(".tp-half-two"),N/1e3,{width:D,height:H,overflow:"hidden",position:"absolute",top:H/2,left:"0px",transformPerspective:600,transformOrigin:"center bottom"},{scale:nt,rotation:G,y:H+H/4,ease:Power2.easeInOut});TweenLite.fromTo(i.find(".tp-half-two"),N/2e3,{opacity:1,transformPerspective:600,transformOrigin:"center center"},{opacity:0,delay:N/2e3});if(i.html()!=null)TweenLite.fromTo(u,(N-200)/1e3,{opacity:0,scale:.8,x:r.width*Z,y:H*et,rotation:Y,transformPerspective:600,transformOrigin:"center center"},{rotation:0,scale:1,x:0,y:0,opacity:1,ease:Power2.easeInOut});f.find(".defaultimg").css({opacity:1});setTimeout(function(){i.css({position:"absolute","z-index":18});u.css({position:"absolute","z-index":20});f.find(".defaultimg").css({opacity:1});a.find(".defaultimg").css({opacity:0});if(i.find(".tp-half-one").length>0){i.find(".tp-half-one .defaultimg").unwrap();i.find(".tp-half-one .slotholder").unwrap()}i.find(".tp-half-two").remove();r.transition=0;r.act=r.next},N);u.css({opacity:1})}if(l==17){f.find(".defaultimg").css({opacity:0});f.find(".slotslide").each(function(t){var s=e(this);TweenLite.fromTo(s,N/800,{opacity:0,rotationY:0,scale:.9,rotationX:-110,transformPerspective:600,transformOrigin:"center center"},{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,rotationY:0,ease:Power3.easeOut,delay:t*.06,onComplete:function(){if(t==r.slots-1)P(n,r,f,a,u,i)}})})}if(l==18){f.find(".defaultimg").css({opacity:0});f.find(".slotslide").each(function(t){var s=e(this);TweenLite.fromTo(s,N/500,{opacity:0,rotationY:310,scale:.9,rotationX:10,transformPerspective:600,transformOrigin:"center center"},{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,rotationY:0,ease:Power3.easeOut,delay:t*.06,onComplete:function(){if(t==r.slots-1)P(n,r,f,a,u,i)}})})}if(l==19||l==22){f.find(".defaultimg").css({opacity:0});setTimeout(function(){a.find(".defaultimg").css({opacity:0})},100);var rt=u.css("z-index");var it=i.css("z-index");var st=90;var I=1;if(T==1)st=-90;if(l==19){var ot="center center -"+r.height/2;I=0}else{var ot="center center "+r.height/2}TweenLite.fromTo(f,N/2e3,{transformPerspective:600,z:0,x:0,rotationY:0},{rotationY:1,ease:Power1.easeInOut,z:-40});TweenLite.fromTo(f,N/2e3,{transformPerspective:600,z:-40,rotationY:1},{rotationY:0,z:0,ease:Power1.easeInOut,x:0,delay:3*(N/4e3)});TweenLite.fromTo(a,N/2e3,{transformPerspective:600,z:0,x:0,rotationY:0},{rotationY:1,x:0,ease:Power1.easeInOut,z:-40});TweenLite.fromTo(a,N/2e3,{transformPerspective:600,z:-40,x:0,rotationY:1},{rotationY:0,z:0,x:0,ease:Power1.easeInOut,delay:3*(N/4e3)});f.find(".slotslide").each(function(t){var s=e(this);TweenLite.fromTo(s,N/1e3,{left:0,rotationY:r.rotate,opacity:I,top:0,scale:.8,transformPerspective:600,transformOrigin:ot,rotationX:st},{left:0,rotationY:0,opacity:1,top:0,z:0,scale:1,rotationX:0,delay:t*50/1e3,ease:Power2.easeInOut,onComplete:function(){if(t==r.slots-1)P(n,r,f,a,u,i)}});TweenLite.to(s,.1,{opacity:1,delay:t*50/1e3+N/3e3})});a.find(".slotslide").each(function(t){var s=e(this);var o=-90;if(T==1)o=90;TweenLite.fromTo(s,N/1e3,{opacity:1,rotationY:0,top:0,z:0,scale:1,transformPerspective:600,transformOrigin:ot,rotationX:0},{opacity:1,rotationY:r.rotate,top:0,scale:.8,rotationX:o,delay:t*50/1e3,ease:Power2.easeInOut,onComplete:function(){if(t==r.slots-1)P(n,r,f,a,u,i)}});TweenLite.to(s,.1,{opacity:0,delay:t*50/1e3+(N/1e3-N/1e4)})})}if(l==20){f.find(".defaultimg").css({opacity:0});setTimeout(function(){a.find(".defaultimg").css({opacity:0})},100);var rt=u.css("z-index");var it=i.css("z-index");if(T==1){var ut=-r.width;var st=70;var ot="left center -"+r.height/2}else{var ut=r.width;var st=-70;var ot="right center -"+r.height/2}f.find(".slotslide").each(function(t){var s=e(this);TweenLite.fromTo(s,N/1500,{left:ut,rotationX:40,z:-600,opacity:I,top:0,transformPerspective:600,transformOrigin:ot,rotationY:st},{left:0,delay:t*50/1e3,ease:Power2.easeInOut});TweenLite.fromTo(s,N/1e3,{rotationX:40,z:-600,opacity:I,top:0,scale:1,transformPerspective:600,transformOrigin:ot,rotationY:st},{rotationX:0,opacity:1,top:0,z:0,scale:1,rotationY:0,delay:t*50/1e3,ease:Power2.easeInOut,onComplete:function(){if(t==r.slots-1)P(n,r,f,a,u,i)}});TweenLite.to(s,.1,{opacity:1,delay:t*50/1e3+N/2e3})});a.find(".slotslide").each(function(t){var s=e(this);if(T!=1){var o=-r.width;var l=70;var c="left center -"+r.height/2}else{var o=r.width;var l=-70;var c="right center -"+r.height/2}TweenLite.fromTo(s,N/1e3,{opacity:1,rotationX:0,top:0,z:0,scale:1,left:0,transformPerspective:600,transformOrigin:c,rotationY:0},{opacity:1,rotationX:40,top:0,z:-600,left:o,scale:.8,rotationY:l,delay:t*50/1e3,ease:Power2.easeInOut,onComplete:function(){if(t==r.slots-1)P(n,r,f,a,u,i)}});TweenLite.to(s,.1,{opacity:0,delay:t*50/1e3+(N/1e3-N/1e4)})})}if(l==21||l==25){f.find(".defaultimg").css({opacity:0});setTimeout(function(){a.find(".defaultimg").css({opacity:0})},100);var rt=u.css("z-index");var it=i.css("z-index");if(T==1){var ut=-r.width;var st=110;if(l==25){var ot="center top 0";rot2=-st;st=r.rotate}else{var ot="left center 0";rot2=r.rotate}}else{var ut=r.width;var st=-110;if(l==25){var ot="center bottom 0";rot2=-st;st=r.rotate}else{var ot="right center 0";rot2=r.rotate}}f.find(".slotslide").each(function(t){var s=e(this);TweenLite.fromTo(s,N/1500,{left:0,rotationX:rot2,z:0,opacity:0,top:0,scale:1,transformPerspective:600,transformOrigin:ot,rotationY:st},{left:0,rotationX:0,top:0,z:0,scale:1,rotationY:0,delay:t*100/1e3+N/1e4,ease:Power2.easeInOut,onComplete:function(){if(t==r.slots-1)P(n,r,f,a,u,i)}});TweenLite.to(s,.3,{opacity:1,delay:t*100/1e3+N*.2/2e3+N/1e4})});if(T!=1){var ut=-r.width;var st=90;if(l==25){var ot="center top 0";rot2=-st;st=r.rotate}else{var ot="left center 0";rot2=r.rotate}}else{var ut=r.width;var st=-90;if(l==25){var ot="center bottom 0";rot2=-st;st=r.rotate}else{var ot="right center 0";rot2=r.rotate}}a.find(".slotslide").each(function(t){var n=e(this);TweenLite.fromTo(n,N/3e3,{left:0,rotationX:0,z:0,opacity:1,top:0,scale:1,transformPerspective:600,transformOrigin:ot,rotationY:0},{left:0,rotationX:rot2,top:0,z:0,scale:1,rotationY:st,delay:t*100/1e3,ease:Power1.easeInOut});TweenLite.to(n,.2,{opacity:0,delay:t*50/1e3+(N/3e3-N/1e4)})})}if(l==23||l==24){f.find(".defaultimg").css({opacity:0});setTimeout(function(){a.find(".defaultimg").css({opacity:0})},100);var rt=u.css("z-index");var it=i.css("z-index");var st=-90;if(T==1)st=90;var I=1;if(l==23){var ot="center center -"+r.width/2;I=0}else{var ot="center center "+r.width/2}var at=0;TweenLite.fromTo(f,N/2e3,{transformPerspective:600,z:0,x:0,rotationY:0},{rotationY:1,ease:Power1.easeInOut,z:-90});TweenLite.fromTo(f,N/2e3,{transformPerspective:600,z:-90,rotationY:1},{rotationY:0,z:0,ease:Power1.easeInOut,x:0,delay:3*(N/4e3)});TweenLite.fromTo(a,N/2e3,{transformPerspective:600,z:0,x:0,rotationY:0},{rotationY:1,x:0,ease:Power1.easeInOut,z:-90});TweenLite.fromTo(a,N/2e3,{transformPerspective:600,z:-90,x:0,rotationY:1},{rotationY:0,z:0,x:0,ease:Power1.easeInOut,delay:3*(N/4e3)});f.find(".slotslide").each(function(t){var s=e(this);TweenLite.fromTo(s,N/1e3,{left:at,rotationX:r.rotate,opacity:I,top:0,scale:1,transformPerspective:600,transformOrigin:ot,rotationY:st},{left:0,rotationX:0,opacity:1,top:0,z:0,scale:1,rotationY:0,delay:t*50/1e3,ease:Power2.easeInOut,onComplete:function(){if(t==r.slots-1)P(n,r,f,a,u,i)}});TweenLite.to(s,.1,{opacity:1,delay:t*50/1e3+N/3e3})});st=90;if(T==1)st=-90;a.find(".slotslide").each(function(t){var s=e(this);TweenLite.fromTo(s,N/1e3,{left:0,opacity:1,rotationX:0,top:0,z:0,scale:1,transformPerspective:600,transformOrigin:ot,rotationY:0},{left:at,opacity:1,rotationX:r.rotate,top:0,scale:1,rotationY:st,delay:t*50/1e3,ease:Power2.easeInOut,onComplete:function(){if(t==r.slots-1)P(n,r,f,a,u,i)}});TweenLite.to(s,.1,{opacity:0,delay:t*50/1e3+(N/1e3-N/1e4)})})}var ft={};ft.slideIndex=r.next+1;n.trigger("revolution.slide.onchange",ft);setTimeout(function(){n.trigger("revolution.slide.onafterswap")},N);n.trigger("revolution.slide.onvideostop")}function k(n,r){try{var i=n.find(">ul:first-child >li:eq("+r.act+")")}catch(s){var i=n.find(">ul:first-child >li:eq(1)")}r.lastslide=r.act;var o=n.find(">ul:first-child >li:eq("+r.next+")");var u=i.find(".slotholder");var a=o.find(".slotholder");a.find(".defaultimg").each(function(){var n=e(this);if(n.data("kenburn")!=t)n.data("kenburn").restart();TweenLite.killTweensOf(n,false);TweenLite.set(n,{scale:1,rotationZ:0});n.data("bgposition",a.data("bgposition"));n.data("currotate",a.data("rotationstart"));n.data("curscale",a.data("bgfit"))})}function L(n,r){try{var i=n.find(">ul:first-child >li:eq("+r.act+")")}catch(s){var i=n.find(">ul:first-child >li:eq(1)")}r.lastslide=r.act;var u=n.find(">ul:first-child >li:eq("+r.next+")");var a=i.find(".slotholder");var f=u.find(".slotholder");var l=f.data("bgposition"),c=f.data("bgpositionend"),h=f.data("zoomstart")/100,p=f.data("zoomend")/100,d=f.data("rotationstart"),v=f.data("rotationend"),m=f.data("bgfit"),g=f.data("bgfitend"),y=f.data("easeme"),b=f.data("duration")/1e3;if(m==t)m=100;if(g==t)g=100;m=A(m,f,r);g=A(g,f,r);if(h==t)h=1;if(p==t)p=1;if(d==t)d=0;if(v==t)v=0;if(h<1)h=1;if(p<1)p=1;f.find(".defaultimg").each(function(){var t=e(this);t.data("kenburn",TweenLite.fromTo(t,b,{transformPerspective:1200,backgroundSize:m,z:0,backgroundPosition:l,rotationZ:d},{yoyo:2,rotationZ:v,ease:y,backgroundSize:g,backgroundPosition:c,onUpdate:function(){t.data("bgposition",t.css("backgroundPosition"));if(!o(8))t.data("currotate",D(t));if(!o(8))t.data("curscale",t.css("backgroundSize"))}}))})}function A(e,t,n){var r=t.data("owidth");var i=t.data("oheight");var s=n.container.width()/r;var o=i*s;var u=o/n.container.height()*e;return e+"% "+u+"%"}function O(e){var t=e.css("-webkit-transform")||e.css("-moz-transform")||e.css("-ms-transform")||e.css("-o-transform")||e.css("transform");return t}function M(e){return e.replace(/^matrix(3d)?\((.*)\)$/,"$2").split(/, /)}function _(e){var t=M(O(e)),n=1;if(t[0]!=="none"){var r=t[0],i=t[1],s=10;n=Math.round(Math.sqrt(r*r+i*i)*s)/s}return n}function D(e){var t=e.css("-webkit-transform")||e.css("-moz-transform")||e.css("-ms-transform")||e.css("-o-transform")||e.css("transform");if(t!=="none"){var n=t.split("(")[1].split(")")[0].split(",");var r=n[0];var i=n[1];var s=Math.round(Math.atan2(i,r)*(180/Math.PI))}else{var s=0}return s<0?s+=360:s}function P(e,t,n,r,i,s){T(e,t);n.find(".defaultimg").css({opacity:1});if(i.index()!=s.index())r.find(".defaultimg").css({opacity:0});t.act=t.next;c(e);if(n.data("kenburns")=="on")L(e,t)}function H(t){var n=t.target.getVideoEmbedCode();var r=e("#"+n.split('id="')[1].split('"')[0]);var i=r.closest(".tp-simpleresponsive");var s=r.parent().data("player");if(t.data==YT.PlayerState.PLAYING){var o=i.find(".tp-bannertimer");var u=o.data("opt");o.stop();if(r.closest(".tp-caption").data("volume")=="mute")s.mute();u.videoplaying=true;u.videostartednow=1}else{var o=i.find(".tp-bannertimer");var u=o.data("opt");if(t.data!=-1){if(u.conthover==0)o.animate({width:"100%"},{duration:u.delay-u.cd-100,queue:false,easing:"linear"});u.videoplaying=false;u.videostoppednow=1}}if(t.data==0&&u.nextslideatend==true)u.container.revnext()}function B(e,t,n){if(e.addEventListener)e.addEventListener(t,n,false);else e.attachEvent(t,n,false)}function j(t,n){var r=$f(t);var i=e("#"+t);var s=i.closest(".tp-simpleresponsive");r.addEvent("ready",function(e){if(n)r.api("play");r.addEvent("play",function(e){var t=s.find(".tp-bannertimer");var n=t.data("opt");t.stop();n.videoplaying=true;if(i.closest(".tp-caption").data("volume")=="mute")r.api("setVolume","0")});r.addEvent("finish",function(e){var t=s.find(".tp-bannertimer");var n=t.data("opt");if(n.conthover==0)t.animate({width:"100%"},{duration:n.delay-n.cd-100,queue:false,easing:"linear"});n.videoplaying=false;n.videostartednow=1;if(n.nextslideatend==true)n.container.revnext()});r.addEvent("pause",function(e){var t=s.find(".tp-bannertimer");var n=t.data("opt");if(n.conthover==0)t.animate({width:"100%"},{duration:n.delay-n.cd-100,queue:false,easing:"linear"});n.videoplaying=false;n.videostoppednow=1})})}function F(n,r){if(r==t)r=e(n["b"]).attr("id");var i=e("#"+r);var s=i.closest(".tp-simpleresponsive");n.on("play",function(){if(i.closest(".tp-caption").data("volume")=="mute")n.volume(0);var t=e("body").find(".tp-bannertimer");var r=t.data("opt");t.stop();try{r.videoplaying=true}catch(s){}});n.on("pause",function(){var e=s.find(".tp-bannertimer");var t=e.data("opt");if(t.conthover==0)e.animate({width:"100%"},{duration:t.delay-t.cd-100,queue:false,easing:"linear"});t.videoplaying=false;t.videostoppednow=1});n.on("ended",function(){var e=s.find(".tp-bannertimer");var t=e.data("opt");if(t.conthover==0)e.animate({width:"100%"},{duration:t.delay-t.cd-100,queue:false,easing:"linear"});t.videoplaying=false;t.videostoppednow=1;if(t.nextslideatend==true)t.container.revnext()});n.on("loadedmetadata",function(e){var n=0;var r=0;for(var o in this){try{if(this[o].hasOwnProperty("videoWidth"))n=this[o].videoWidth;if(this[o].hasOwnProperty("videoHeight"))r=this[o].videoHeight}catch(u){}}var a=n/r;if(i.data("mediaAspect")==t)i.data("mediaAspect",a);if(i.closest(".tp-caption").data("forcecover")==1)I(i,s)})}function I(e,t){var n=t.width();var r=t.height();var i=e.data("mediaAspect");var s=n/r;e.parent().find(".vjs-poster").css({width:"100%",height:"100%"});if(s<i){e.width(r*i).height(r);e.css("top",0).css("left",-(r*i-n)/2).css("height",r);e.find(".vjs-tech").css("width",r*i)}else{e.width(n).height(n/i);e.css("top",-(n/i-r)/2).css("left",0).css("height",n/i);e.find(".vjs-tech").css("width","100%")}}function q(n,r,i){var s=0;var o=0;n.find(".tp-caption").each(function(n){s=r.width/2-r.startwidth*r.bw/2;var u=r.bw;var a=r.bh;if(r.fullScreen=="on")o=r.height/2-r.startheight*r.bh/2;if(r.autoHeight=="on")o=r.container.height()/2-r.startheight*r.bh/2;if(o<0)o=0;var f=e(this);var l=0;if(r.width<r.hideCaptionAtLimit&&f.data("captionhidden")=="on"){f.addClass("tp-hidden-caption");l=1}else{if(r.width<r.hideAllCaptionAtLimit||r.width<r.hideAllCaptionAtLilmit){f.addClass("tp-hidden-caption");l=1}else{f.removeClass("tp-hidden-caption")}}if(l==0){if(f.data("linktoslide")!=t&&!f.hasClass("hasclicklistener")){f.addClass("hasclicklistener");f.css({cursor:"pointer"});if(f.data("linktoslide")!="no"){f.click(function(){var t=e(this);var n=t.data("linktoslide");if(n!="next"&&n!="prev"){r.container.data("showus",n);r.container.parent().find(".tp-rightarrow").click()}else if(n=="next")r.container.parent().find(".tp-rightarrow").click();else if(n=="prev")r.container.parent().find(".tp-leftarrow").click()})}}if(s<0)s=0;var c="iframe"+Math.round(Math.random()*1e3+1);if(f.find("iframe").length>0||f.find("video").length>0){if(f.data("autoplayonlyfirsttime")==true||f.data("autoplayonlyfirsttime")=="true"){f.data("autoplay",true)}f.find("iframe").each(function(){var n=e(this);r.nextslideatend=f.data("nextslideatend");if(f.data("thumbimage")!=t&&f.data("thumbimage").length>2&&f.data("autoplay")!=true&&!i){f.find(".tp-thumb-image").remove();f.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url('+f.data("thumbimage")+'); background-size:cover"></div>')}if(n.attr("src").toLowerCase().indexOf("youtube")>=0){if(!n.hasClass("HasListener")){try{n.attr("id",c);var s;if(f.data("autoplay")==true)s=new YT.Player(c,{events:{onStateChange:H,onReady:function(e){e.target.playVideo()}}});else s=new YT.Player(c,{events:{onStateChange:H}});n.addClass("HasListener");f.data("player",s)}catch(o){}}else{if(f.data("autoplay")==true){var s=f.data("player");f.data("timerplay",setTimeout(function(){if(f.data("forcerewind")=="on")s.seekTo(0);s.playVideo()},f.data("start")))}}f.find(".tp-thumb-image").click(function(){TweenLite.to(e(this),.3,{opacity:0,ease:Power3.easeInOut,onComplete:function(){f.find(".tp-thumb-image").remove()}});var t=f.data("player");t.playVideo()})}else{if(n.attr("src").toLowerCase().indexOf("vimeo")>=0){if(!n.hasClass("HasListener")){n.addClass("HasListener");n.attr("id",c);var u=n.attr("src");var a={},l=u,h=/([^&=]+)=([^&]*)/g,p;while(p=h.exec(l)){a[decodeURIComponent(p[1])]=decodeURIComponent(p[2])}if(a["player_id"]!=t)u=u.replace(a["player_id"],c);else u=u+"&player_id="+c;try{u=u.replace("api=0","api=1")}catch(o){}u=u+"&api=1";n.attr("src",u);var s=f.find("iframe")[0];$f(s).addEvent("ready",function(){j(c,f.data("autoplay"))})}else{if(f.data("autoplay")==true){var n=f.find("iframe");var d=n.attr("id");var v=$f(d);f.data("timerplay",setTimeout(function(){if(f.data("forcerewind")=="on")v.api("seekTo",0);v.api("play")},f.data("start")))}}f.find(".tp-thumb-image").click(function(){TweenLite.to(e(this),.3,{opacity:0,ease:Power3.easeInOut,onComplete:function(){f.find(".tp-thumb-image").remove()}});var t=f.find("iframe");var n=t.attr("id");var r=$f(n);r.api("play")})}}});if(f.find("video").length>0){f.find("video").each(function(n){var i=e(this).parent();if(f.data("dottedoverlay")!="none"&&f.data("dottedoverlay")!=t)if(f.find(".tp-dottedoverlay").length!=1)i.append('<div class="tp-dottedoverlay '+f.data("dottedoverlay")+'"></div>');var s=16/9;if(f.data("aspectratio")=="4:3")s=4/3;i.data("mediaAspect",s);I(i,r.container);if(i.hasClass("video-js")){r.nextslideatend=f.data("nextslideatend");if(!i.hasClass("HasListener")){i.addClass("HasListener");var o="videoid_"+Math.round(Math.random()*1e3+1);i.attr("id",o);videojs(o).ready(function(){F(this,o)})}else{o=i.attr("id")}i.find(".vjs-poster").css({display:"block"});if(f.data("autoplay")==true){var u=e("body").find("#"+r.container.attr("id")).find(".tp-bannertimer");setTimeout(function(){u.stop();r.videoplaying=true},200);videojs(o).ready(function(){var e=this;try{if(f.data("forcerewind")=="on")e.currentTime(0)}catch(t){}i.data("timerplay",setTimeout(function(){if(f.data("forcerewind")=="on")e.currentTime(0);if(i.closest(".tp-caption").data("volume")=="mute")e.volume(0);setTimeout(function(){e.play(0);i.find(".vjs-poster").css({display:"none"})},50)},10+f.data("start")))})}if(i.data("ww")==t)i.data("ww",i.width());if(i.data("hh")==t)i.data("hh",i.height());videojs(o).ready(function(){if(!f.hasClass("fullscreenvideo")){var e=videojs(o);try{e.width(i.data("ww")*r.bw);e.height(i.data("hh")*r.bh)}catch(t){}}});if(i.closest(".tp-caption").data("forcecover")==1){I(i,r.container);i.addClass("fullcoveredvideo")}}})}if(f.data("autoplay")==true){var h=e("body").find("#"+r.container.attr("id")).find(".tp-bannertimer");setTimeout(function(){h.stop();r.videoplaying=true},200);r.videoplaying=true;if(f.data("autoplayonlyfirsttime")==true||f.data("autoplayonlyfirsttime")=="true"){f.data("autoplay",false);f.data("autoplayonlyfirsttime",false)}}}var p=0;var d=0;if(f.find("img").length>0){var v=f.find("img");if(v.data("ww")==t)v.data("ww",v.width());if(v.data("hh")==t)v.data("hh",v.height());var m=v.data("ww");var g=v.data("hh");v.width(m*r.bw);v.height(g*r.bh);p=v.width();d=v.height()}else{if(f.find("iframe").length>0||f.find(".video-js").length>0){var v=f.find("iframe");v.css({display:"block"});if(f.data("ww")==t){f.data("ww",v.width())}if(f.data("hh")==t)f.data("hh",v.height());var m=f.data("ww");var g=f.data("hh");var y=f;if(y.data("fsize")==t)y.data("fsize",parseInt(y.css("font-size"),0)||0);if(y.data("pt")==t)y.data("pt",parseInt(y.css("paddingTop"),0)||0);if(y.data("pb")==t)y.data("pb",parseInt(y.css("paddingBottom"),0)||0);if(y.data("pl")==t)y.data("pl",parseInt(y.css("paddingLeft"),0)||0);if(y.data("pr")==t)y.data("pr",parseInt(y.css("paddingRight"),0)||0);if(y.data("mt")==t)y.data("mt",parseInt(y.css("marginTop"),0)||0);if(y.data("mb")==t)y.data("mb",parseInt(y.css("marginBottom"),0)||0);if(y.data("ml")==t)y.data("ml",parseInt(y.css("marginLeft"),0)||0);if(y.data("mr")==t)y.data("mr",parseInt(y.css("marginRight"),0)||0);if(y.data("bt")==t)y.data("bt",parseInt(y.css("borderTop"),0)||0);if(y.data("bb")==t)y.data("bb",parseInt(y.css("borderBottom"),0)||0);if(y.data("bl")==t)y.data("bl",parseInt(y.css("borderLeft"),0)||0);if(y.data("br")==t)y.data("br",parseInt(y.css("borderRight"),0)||0);if(y.data("lh")==t)y.data("lh",parseInt(y.css("lineHeight"),0)||0);var b=r.width;var w=r.height;if(b>r.startwidth)b=r.startwidth;if(w>r.startheight)w=r.startheight;if(!f.hasClass("fullscreenvideo"))f.css({"font-size":y.data("fsize")*r.bw+"px","padding-top":y.data("pt")*r.bh+"px","padding-bottom":y.data("pb")*r.bh+"px","padding-left":y.data("pl")*r.bw+"px","padding-right":y.data("pr")*r.bw+"px","margin-top":y.data("mt")*r.bh+"px","margin-bottom":y.data("mb")*r.bh+"px","margin-left":y.data("ml")*r.bw+"px","margin-right":y.data("mr")*r.bw+"px","border-top":y.data("bt")*r.bh+"px","border-bottom":y.data("bb")*r.bh+"px","border-left":y.data("bl")*r.bw+"px","border-right":y.data("br")*r.bw+"px","line-height":y.data("lh")*r.bh+"px",height:g*r.bh+"px","white-space":"nowrap"});else{s=0;o=0;f.data("x",0);f.data("y",0);var E=r.height;if(r.autoHeight=="on")E=r.container.height();f.css({width:r.width,height:E})}v.width(m*r.bw);v.height(g*r.bh);p=v.width();d=v.height()}else{f.find(".tp-resizeme, .tp-resizeme *").each(function(){z(e(this),r)});if(f.hasClass("tp-resizeme")){f.find("*").each(function(){z(e(this),r)})}z(f,r);d=f.outerHeight(true);p=f.outerWidth(true);var S=f.outerHeight();var x=f.css("backgroundColor");f.find(".frontcorner").css({borderWidth:S+"px",left:0-S+"px",borderRight:"0px solid transparent",borderTopColor:x});f.find(".frontcornertop").css({borderWidth:S+"px",left:0-S+"px",borderRight:"0px solid transparent",borderBottomColor:x});f.find(".backcorner").css({borderWidth:S+"px",right:0-S+"px",borderLeft:"0px solid transparent",borderBottomColor:x});f.find(".backcornertop").css({borderWidth:S+"px",right:0-S+"px",borderLeft:"0px solid transparent",borderTopColor:x})}}if(r.fullScreenAlignForce=="on"){u=1;a=1;s=0;o=0}if(f.data("voffset")==t)f.data("voffset",0);if(f.data("hoffset")==t)f.data("hoffset",0);var T=f.data("voffset")*u;var N=f.data("hoffset")*u;var C=r.startwidth*u;var k=r.startheight*u;if(r.fullScreenAlignForce=="on"){C=r.container.width();k=r.container.height()}if(f.data("x")=="center"||f.data("xcenter")=="center"){f.data("xcenter","center");f.data("x",(C/2-f.outerWidth(true)/2)/u+N)}if(f.data("x")=="left"||f.data("xleft")=="left"){f.data("xleft","left");f.data("x",0/u+N)}if(f.data("x")=="right"||f.data("xright")=="right"){f.data("xright","right");f.data("x",(C-f.outerWidth(true)+N)/u)}if(f.data("y")=="center"||f.data("ycenter")=="center"){f.data("ycenter","center");f.data("y",(k/2-f.outerHeight(true)/2)/a+T)}if(f.data("y")=="top"||f.data("ytop")=="top"){f.data("ytop","top");f.data("y",0/r.bh+T)}if(f.data("y")=="bottom"||f.data("ybottom")=="bottom"){f.data("ybottom","bottom");f.data("y",(k-f.outerHeight(true)+T)/u)}if(f.data("start")==t)f.data("start",1e3);var L=f.data("easing");if(L==t)L="Power1.easeOut";var A=f.data("start")/1e3;var O=f.data("speed")/1e3;var M=u*f.data("x")+s;var _=r.bh*f.data("y")+o;if(r.fullScreenAlignForce=="on")_=f.data("y")+o;TweenLite.killTweensOf(f,false);clearTimeout(f.data("reversetimer"));var D=0,P=M,B=_,q=2,U=1,W=0,V=1,$=1,J=1,K=0,Q=0,G=0,Y=0,Z=0,et=0,tt=0,nt="center,center",rt=300,it=0,st=false,ot=0;if(f.data("repeat")!=t)it=f.data("repeat");if(f.data("yoyo")!=t)st=f.data("yoyo");if(f.data("repeatdelay")!=t)ot=f.data("repeatdelay");if(f.hasClass("customin")){var ut=f.data("customin").split(";");e.each(ut,function(e,t){t=t.split(":");var n=t[0],r=t[1];if(n=="rotationX")Q=parseInt(r,0);if(n=="rotationY")G=parseInt(r,0);if(n=="rotationZ")Y=parseInt(r,0);if(n=="scaleX")$=parseFloat(r);if(n=="scaleY")J=parseFloat(r);if(n=="opacity")tt=parseFloat(r);if(n=="skewX")Z=parseInt(r,0);if(n=="skewY")et=parseInt(r,0);if(n=="x")P=M+parseInt(r,0);if(n=="y")B=_+parseInt(r,0);if(n=="z")q=parseInt(r,0);if(n=="transformOrigin")nt=r.toString();if(n=="transformPerspective")rt=parseInt(r,0)})}if(f.hasClass("randomrotate")){V=Math.random()*3+1;K=Math.round(Math.random()*200-100);P=M+Math.round(Math.random()*200-100);B=_+Math.round(Math.random()*200-100)}if(f.hasClass("lfr")||f.hasClass("skewfromright"))P=15+r.width;if(f.hasClass("lfl")||f.hasClass("skewfromleft"))P=-15-p;if(f.hasClass("sfl")|f.hasClass("skewfromleftshort"))P=M-50;if(f.hasClass("sfr")|f.hasClass("skewfromrightshort"))P=M+50;if(f.hasClass("lft"))B=-25-d;if(f.hasClass("lfb"))B=25+r.height;if(f.hasClass("sft"))B=_-50;if(f.hasClass("sfb"))B=_+50;if(f.hasClass("skewfromright")||f.hasClass("skewfromrightshort"))Z=-85;if(f.hasClass("skewfromleft")||f.hasClass("skewfromleftshort"))Z=85;if(R().toLowerCase()=="safari"){Q=0;G=0}P=Math.round(P);B=Math.round(B);M=Math.round(M);_=Math.round(_);if(f.hasClass("customin")){f.data("anim",TweenLite.fromTo(f,O,{scaleX:$,scaleY:J,rotationX:Q,rotationY:G,rotationZ:Y,x:0,y:0,left:P,top:B,z:q,opacity:tt,transformPerspective:rt,transformOrigin:nt,visibility:"hidden"},{left:M,top:_,scaleX:1,scaleY:1,rotationX:0,rotationY:0,rotationZ:0,skewX:0,skewY:0,z:0,x:0,y:0,visibility:"visible",opacity:1,delay:A,ease:L,overwrite:"all"}))}else{f.data("anim",TweenLite.fromTo(f,O,{scale:V,rotationX:0,rotationY:0,skewY:0,rotation:K,left:P+"px",top:B+"px",opacity:0,z:0,x:0,y:0,skewX:Z,transformPerspective:600,visibility:"visible"},{left:M+"px",top:_+"px",scale:1,skewX:0,rotation:0,z:0,visibility:"visible",opacity:1,delay:A,ease:L,overwrite:"all",yoyo:st,repeat:it,repeatDelay:ot}))}f.data("killall",setTimeout(function(){f.css({transform:"none","-moz-transform":"none","-webkit-transform":"none"})},O*1e3+A*1e3+20));f.data("timer",setTimeout(function(){if(f.hasClass("fullscreenvideo"))f.css({display:"block"})},f.data("start")));if(f.data("end")!=t)X(f,r,f.data("end")/1e3)}});var u=e("body").find("#"+r.container.attr("id")).find(".tp-bannertimer");u.data("opt",r)}function R(){var e=navigator.appName,t=navigator.userAgent,n;var r=t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);if(r&&(n=t.match(/version\/([\.\d]+)/i))!=null)r[2]=n[1];r=r?[r[1],r[2]]:[e,navigator.appVersion,"-?"];return r[0]}function U(){var e=navigator.appName,t=navigator.userAgent,n;var r=t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);if(r&&(n=t.match(/version\/([\.\d]+)/i))!=null)r[2]=n[1];r=r?[r[1],r[2]]:[e,navigator.appVersion,"-?"];return r[1]}function z(e,n){if(e.data("fsize")==t)e.data("fsize",parseInt(e.css("font-size"),0)||0);if(e.data("pt")==t)e.data("pt",parseInt(e.css("paddingTop"),0)||0);if(e.data("pb")==t)e.data("pb",parseInt(e.css("paddingBottom"),0)||0);if(e.data("pl")==t)e.data("pl",parseInt(e.css("paddingLeft"),0)||0);if(e.data("pr")==t)e.data("pr",parseInt(e.css("paddingRight"),0)||0);if(e.data("mt")==t)e.data("mt",parseInt(e.css("marginTop"),0)||0);if(e.data("mb")==t)e.data("mb",parseInt(e.css("marginBottom"),0)||0);if(e.data("ml")==t)e.data("ml",parseInt(e.css("marginLeft"),0)||0);if(e.data("mr")==t)e.data("mr",parseInt(e.css("marginRight"),0)||0);if(e.data("bt")==t)e.data("bt",parseInt(e.css("borderTopWidth"),0)||0);if(e.data("bb")==t)e.data("bb",parseInt(e.css("borderBottomWidth"),0)||0);if(e.data("bl")==t)e.data("bl",parseInt(e.css("borderLeftWidth"),0)||0);if(e.data("br")==t)e.data("br",parseInt(e.css("borderRightWidth"),0)||0);if(e.data("lh")==t)e.data("lh",parseInt(e.css("lineHeight"),0)||0);if(e.data("minwidth")==t)e.data("minwidth",parseInt(e.css("minWidth"),0)||0);if(e.data("minheight")==t)e.data("minheight",parseInt(e.css("minHeight"),0)||0);if(e.data("maxwidth")==t)e.data("maxwidth",parseInt(e.css("maxWidth"),0)||"none");if(e.data("maxheight")==t)e.data("maxheight",parseInt(e.css("maxHeight"),0)||"none");if(e.data("wan")==t)e.data("wan",e.css("-webkit-transition"));if(e.data("moan")==t)e.data("moan",e.css("-moz-animation-transition"));if(e.data("man")==t)e.data("man",e.css("-ms-animation-transition"));if(e.data("ani")==t)e.data("ani",e.css("transition"));e.css("-webkit-transition","none");e.css("-moz-transition","none");e.css("-ms-transition","none");e.css("transition","none");TweenLite.set(e,{fontSize:Math.round(e.data("fsize")*n.bw)+"px",paddingTop:Math.round(e.data("pt")*n.bh)+"px",paddingBottom:Math.round(e.data("pb")*n.bh)+"px",paddingLeft:Math.round(e.data("pl")*n.bw)+"px",paddingRight:Math.round(e.data("pr")*n.bw)+"px",marginTop:e.data("mt")*n.bh+"px",marginBottom:e.data("mb")*n.bh+"px",marginLeft:e.data("ml")*n.bw+"px",marginRight:e.data("mr")*n.bw+"px",borderTopWidth:Math.round(e.data("bt")*n.bh)+"px",borderBottomWidth:Math.round(e.data("bb")*n.bh)+"px",borderLeftWidth:Math.round(e.data("bl")*n.bw)+"px",borderRightWidth:Math.round(e.data("br")*n.bw)+"px",lineHeight:Math.round(e.data("lh")*n.bh)+"px",whiteSpace:"nowrap",minWidth:e.data("minwidth")*n.bw+"px",minHeight:e.data("minheight")*n.bh+"px"});setTimeout(function(){e.css("-webkit-transition",e.data("wan"));e.css("-moz-transition",e.data("moan"));e.css("-ms-transition",e.data("man"));e.css("transition",e.data("ani"))},30);if(e.data("maxheight")!="none")e.css({maxHeight:e.data("maxheight")*n.bh+"px"});if(e.data("maxwidth")!="none")e.css({maxWidth:e.data("maxwidth")*n.bw+"px"})}function W(t,n){t.find(".tp-caption").each(function(t){var r=e(this);if(r.find("iframe").length>0){try{var i=r.find("iframe");var s=i.attr("id");var o=$f(s);o.api("pause");clearTimeout(r.data("timerplay"))}catch(u){}try{var a=r.data("player");a.stopVideo();clearTimeout(r.data("timerplay"))}catch(u){}}if(r.find("video").length>0){try{r.find("video").each(function(t){var n=e(this).parent();var r=n.attr("id");clearTimeout(n.data("timerplay"));videojs(r).ready(function(){var e=this;e.pause()})})}catch(u){}}try{X(r,n,0)}catch(u){}})}function X(n,r,i){var s=n.data("endspeed");if(s==t)s=n.data("speed");s=s/1e3;var o=n.data("endeasing");if(o==t)o=Power1.easeInOut;if(n.hasClass("ltr")||n.hasClass("ltl")||n.hasClass("str")||n.hasClass("stl")||n.hasClass("ltt")||n.hasClass("ltb")||n.hasClass("stt")||n.hasClass("stb")||n.hasClass("skewtoright")||n.hasClass("skewtorightshort")||n.hasClass("skewtoleft")||n.hasClass("skewtoleftshort")){S=0;if(n.hasClass("skewtoright")||n.hasClass("skewtorightshort"))S=35;if(n.hasClass("skewtoleft")||n.hasClass("skewtoleftshort"))S=-35;var u=0;var a=0;if(n.hasClass("ltr")||n.hasClass("skewtoright"))u=r.width+60;else if(n.hasClass("ltl")||n.hasClass("skewtoleft"))u=0-(r.width+60);else if(n.hasClass("ltt"))a=0-(r.height+60);else if(n.hasClass("ltb"))a=r.height+60;else if(n.hasClass("str")||n.hasClass("skewtorightshort")){u=50;oo=0}else if(n.hasClass("stl")||n.hasClass("skewtoleftshort")){u=-50;oo=0}else if(n.hasClass("stt")){a=-50;oo=0}else if(n.hasClass("stb")){a=50;oo=0}if(n.hasClass("skewtorightshort"))u=u+220;if(n.hasClass("skewtoleftshort"))u=u-220;n.data("outanim",TweenLite.to(n,s,{x:u,y:a,scale:1,rotation:0,skewX:S,opacity:0,delay:i,z:0,overwrite:"auto",ease:o,onStart:function(){if(n.data("anim")!=t)n.data("anim").pause()}}))}else if(n.hasClass("randomrotateout")){n.data("outanim",TweenLite.to(n,s,{left:Math.random()*r.width,top:Math.random()*r.height,scale:Math.random()*2+.3,rotation:Math.random()*360-180,z:0,opacity:0,delay:i,ease:o,onStart:function(){if(n.data("anim")!=t)n.data("anim").pause()}}))}else if(n.hasClass("fadeout")){n.data("outanim",TweenLite.to(n,s,{opacity:0,delay:i,ease:o,onStart:function(){if(n.data("anim")!=t)n.data("anim").pause()}}))}else if(n.hasClass("customout")){var f=0,l=0,c=0,h=2,p=1,d=0,v=1,m=1,g=1,y=0,b=0,w=0,E=0,S=0,x=0,T=0,N="center,center",C=300;var k=n.data("customout").split(";");e.each(k,function(e,t){t=t.split(":");var n=t[0],r=t[1];if(n=="rotationX")b=parseInt(r,0);if(n=="rotationY")w=parseInt(r,0);if(n=="rotationZ")E=parseInt(r,0);if(n=="scaleX")m=parseFloat(r);if(n=="scaleY")g=parseFloat(r);if(n=="opacity")T=parseFloat(r);if(n=="skewX")S=parseInt(r,0);if(n=="skewY")x=parseInt(r,0);if(n=="x")l=parseInt(r,0);if(n=="y")c=parseInt(r,0);if(n=="z")h=parseInt(r);if(n=="transformOrigin")N=r;if(n=="transformPerspective")C=parseInt(r,0)});n.data("outanim",TweenLite.to(n,s,{scaleX:m,scaleY:g,rotationX:b,rotationY:w,rotationZ:E,x:l,y:c,z:h,opacity:T,delay:i,ease:o,overwrite:"auto",onStart:function(){if(n.data("anim")!=t)n.data("anim").pause();TweenLite.set(n,{transformPerspective:C,transformOrigin:N,overwrite:"auto"})}}))}else{clearTimeout(n.data("reversetimer"));n.data("reversetimer",setTimeout(function(){n.data("anim").reverse()},i*1e3))}}function V(t,n){t.children().each(function(){try{e(this).die("click")}catch(t){}try{e(this).die("mouseenter")}catch(t){}try{e(this).die("mouseleave")}catch(t){}try{e(this).unbind("hover")}catch(t){}});try{t.die("click","mouseenter","mouseleave")}catch(r){}clearInterval(n.cdint);t=null}function $(n,r){r.cd=0;r.loop=0;if(r.stopAfterLoops!=t&&r.stopAfterLoops>-1)r.looptogo=r.stopAfterLoops;else r.looptogo=9999999;if(r.stopAtSlide!=t&&r.stopAtSlide>-1)r.lastslidetoshow=r.stopAtSlide;else r.lastslidetoshow=999;r.stopLoop="off";if(r.looptogo==0)r.stopLoop="on";if(r.slideamount>1&&!(r.stopAfterLoops==0&&r.stopAtSlide==1)){var i=n.find(".tp-bannertimer");if(i.length>0){i.css({width:"0%"});if(r.videoplaying!=true)i.animate({width:"100%"},{duration:r.delay-100,queue:false,easing:"linear"})}i.data("opt",r);r.cdint=setInterval(function(){if(e("body").find(n).length==0)V(n,r);if(n.data("conthover-changed")==1){r.conthover=n.data("conthover");n.data("conthover-changed",0)}if(r.conthover!=1&&r.videoplaying!=true&&r.width>r.hideSliderAtLimit){r.cd=r.cd+100}if(r.fullWidth!="on")if(r.width>r.hideSliderAtLimit)n.parent().removeClass("tp-hide-revslider");else n.parent().addClass("tp-hide-revslider");if(r.videostartednow==1){n.trigger("revolution.slide.onvideoplay");r.videostartednow=0}if(r.videostoppednow==1){n.trigger("revolution.slide.onvideostop");r.videostoppednow=0}if(r.cd>=r.delay){r.cd=0;r.act=r.next;r.next=r.next+1;if(r.next>n.find(">ul >li").length-1){r.next=0;r.looptogo=r.looptogo-1;if(r.looptogo<=0){r.stopLoop="on"}}if(r.stopLoop=="on"&&r.next==r.lastslidetoshow-1){clearInterval(r.cdint);n.find(".tp-bannertimer").css({visibility:"hidden"});n.trigger("revolution.slide.onstop")}N(n,r);if(i.length>0){i.css({width:"0%"});if(r.videoplaying!=true)i.animate({width:"100%"},{duration:r.delay-100,queue:false,easing:"linear"})}}},100);n.hover(function(){if(r.onHoverStop=="on"){r.conthover=1;i.stop();n.trigger("revolution.slide.onpause");var s=n.find(">ul >li:eq("+r.next+") .slotholder");s.find(".defaultimg").each(function(){var n=e(this);if(n.data("kenburn")!=t)n.data("kenburn").pause()})}},function(){if(n.data("conthover")!=1){n.trigger("revolution.slide.onresume");r.conthover=0;if(r.onHoverStop=="on"&&r.videoplaying!=true){i.animate({width:"100%"},{duration:r.delay-r.cd-100,queue:false,easing:"linear"})}var s=n.find(">ul >li:eq("+r.next+") .slotholder");s.find(".defaultimg").each(function(){var n=e(this);if(n.data("kenburn")!=t)n.data("kenburn").play()})}})}}e.fn.extend({revolution:function(i){e.fn.revolution.defaults={delay:9e3,startheight:500,startwidth:960,fullScreenAlignForce:"off",autoHeight:"off",hideThumbs:200,thumbWidth:100,thumbHeight:50,thumbAmount:3,navigationType:"bullet",navigationArrows:"solo",hideThumbsOnMobile:"off",hideBulletsOnMobile:"off",hideArrowsOnMobile:"off",hideThumbsUnderResoluition:0,navigationStyle:"round",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,keyboardNavigation:"on",touchenabled:"on",onHoverStop:"on",stopAtSlide:-1,stopAfterLoops:-1,hideCaptionAtLimit:0,hideAllCaptionAtLimit:0,hideSliderAtLimit:0,shadow:0,fullWidth:"off",fullScreen:"off",minFullScreenHeight:0,fullScreenOffsetContainer:"",dottedOverlay:"none",forceFullWidth:"off"};i=e.extend({},e.fn.revolution.defaults,i);return this.each(function(){var o=i;if(o.fullWidth!="on"&&o.fullScreen!="on")o.autoHeight="off";if(o.fullScreen=="on")o.autoHeight="on";if(o.fullWidth!="on"&&o.fullScreen!="on")forceFulWidth="off";var u=e(this);if(o.fullWidth=="on"&&o.autoHeight=="off")u.css({maxHeight:o.startheight+"px"});if(s()&&o.hideThumbsOnMobile=="on"&&o.navigationType=="thumb")o.navigationType="none";if(s()&&o.hideBulletsOnMobile=="on"&&o.navigationType=="bullet")o.navigationType="none";if(s()&&o.hideBulletsOnMobile=="on"&&o.navigationType=="both")o.navigationType="none";if(s()&&o.hideArrowsOnMobile=="on")o.navigationArrows="none";if(o.forceFullWidth=="on"){var a=u.parent().offset().left;var f=u.parent().css("marginBottom");var c=u.parent().css("marginTop");if(f==t)f=0;if(c==t)c=0;u.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:'+c+";margin-bottom:"+f+'" class="forcefullwidth_wrapper_tp_banner"></div>');u.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:'+u.height()+'px"></div>');u.css({backgroundColor:u.parent().css("backgroundColor"),backgroundImage:u.parent().css("backgroundImage")});u.parent().css({left:0-a+"px",position:"absolute",width:e(window).width()});o.width=e(window).width()}try{if(o.hideThumbsUnderResolution>e(window).width()&&o.hideThumbsUnderResolution!=0){u.parent().find(".tp-bullets.tp-thumbs").css({display:"none"})}else{u.parent().find(".tp-bullets.tp-thumbs").css({display:"block"})}}catch(h){}if(!u.hasClass("revslider-initialised")){u.addClass("revslider-initialised");if(u.attr("id")==t)u.attr("id","revslider-"+Math.round(Math.random()*1e3+5));o.firefox13=false;o.ie=!e.support.opacity;o.ie9=document.documentMode==9;var y=e.fn.jquery.split("."),b=parseFloat(y[0]),E=parseFloat(y[1]),S=parseFloat(y[2]||"0");if(b==1&&E<7){u.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+y+" <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>")}if(b>1)o.ie=false;if(!e.support.transition)e.fn.transition=e.fn.animate;u.find(".caption").each(function(){e(this).addClass("tp-caption")});if(s()){u.find(".tp-caption").each(function(){if(e(this).data("autoplay")==true)e(this).data("autoplay",false)})}var x=0;var T=0;var C=0;u.find(".tp-caption iframe").each(function(t){try{if(e(this).attr("src").indexOf("you")>0&&x==0){x=1;var n=document.createElement("script");n.src="http://www.youtube.com/player_api";var r=document.getElementsByTagName("script")[0];var i=true;e("head").find("*").each(function(){if(e(this).attr("src")=="http://www.youtube.com/player_api")i=false});if(i)r.parentNode.insertBefore(n,r)}}catch(s){}});u.find(".tp-caption iframe").each(function(t){try{if(e(this).attr("src").indexOf("vim")>0&&T==0){T=1;var n=document.createElement("script");n.src="http://a.vimeocdn.com/js/froogaloop2.min.js";var r=document.getElementsByTagName("script")[0];var i=true;e("head").find("*").each(function(){if(e(this).attr("src")=="http://a.vimeocdn.com/js/froogaloop2.min.js")i=false});if(i)r.parentNode.insertBefore(n,r)}}catch(s){}});u.find(".tp-caption video").each(function(t){try{if(e(this).hasClass("video-js")&&C==0){C=1;var n=document.createElement("script");n.src=o.videoJsPath+"video.js";var r=document.getElementsByTagName("script")[0];var i=true;e("head").find("*").each(function(){if(e(this).attr("src")==o.videoJsPath+"video.js")i=false});if(i){r.parentNode.insertBefore(n,r);e("head").append('<link rel="stylesheet" type="text/css" href="'+o.videoJsPath+'video-js.min.css" media="screen" />');e("head").append('<script> videojs.options.flash.swf = "'+o.videoJsPath+'video-js.swf";</script>')}}}catch(s){}});if(o.shuffle=="on"){for(var k=0;k<u.find(">ul:first-child >li").length;k++){var L=Math.round(Math.random()*u.find(">ul:first-child >li").length);u.find(">ul:first-child >li:eq("+L+")").prependTo(u.find(">ul:first-child"))}}o.slots=4;o.act=-1;o.next=0;if(o.startWithSlide!=t)o.next=o.startWithSlide;var A=n("#")[0];if(A.length<9){if(A.split("slide").length>1){var O=parseInt(A.split("slide")[1],0);if(O<1)O=1;if(O>u.find(">ul:first >li").length)O=u.find(">ul:first >li").length;o.next=O-1}}o.origcd=o.delay;o.firststart=1;if(o.navigationHOffset==t)o.navOffsetHorizontal=0;if(o.navigationVOffset==t)o.navOffsetVertical=0;u.append('<div class="tp-loader"></div>');if(u.find(".tp-bannertimer").length==0)u.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');var M=u.find(".tp-bannertimer");if(M.length>0){M.css({width:"0%"})}u.addClass("tp-simpleresponsive");o.container=u;o.slideamount=u.find(">ul:first >li").length;if(u.height()==0)u.height(o.startheight);if(o.startwidth==t||o.startwidth==0)o.startwidth=u.width();if(o.startheight==t||o.startheight==0)o.startheight=u.height();o.width=u.width();o.height=u.height();o.bw=o.startwidth/u.width();o.bh=o.startheight/u.height();if(o.width!=o.startwidth){o.height=Math.round(o.startheight*(o.width/o.startwidth));u.height(o.height)}if(o.shadow!=0){u.parent().append('<div class="tp-bannershadow tp-shadow'+o.shadow+'"></div>');var a=0;if(o.forceFullWidth=="on")a=0-o.container.parent().offset().left;u.parent().find(".tp-bannershadow").css({width:o.width,left:a})}u.find("ul").css({display:"none"});var _=u;if(o.lazyLoad=="on"){var D=u.find("ul >li >img").first();if(D.data("lazyload")!=t)D.attr("src",D.data("lazyload"));D.data("lazydone",1);_=D.parent()}_.waitForImages(function(){u.find("ul").css({display:"block"});w(u,o);if(o.slideamount>1)p(u,o);if(o.slideamount>1)l(u,o);if(o.slideamount>1)d(u,o);if(o.keyboardNavigation=="on")v(u,o);m(u,o);if(o.hideThumbs>0)g(u,o);u.waitForImages(function(){u.find(".tp-loader").fadeOut(600);setTimeout(function(){N(u,o);if(o.slideamount>1)$(u,o);u.trigger("revolution.slide.onloaded")},600)})});e(window).resize(function(){if(e("body").find(u)!=0)if(o.forceFullWidth=="on"){var t=o.container.closest(".forcefullwidth_wrapper_tp_banner").offset().left;o.container.parent().css({left:0-t+"px",width:e(window).width()})}if(u.outerWidth(true)!=o.width){r(u,o)}});try{if(o.hideThumbsUnderResoluition!=0&&o.navigationType=="thumb"){if(o.hideThumbsUnderResoluition>e(window).width())e(".tp-bullets").css({display:"none"});else e(".tp-bullets").css({display:"block"})}}catch(h){}u.find(".tp-scrollbelowslider").on("click",function(){var t=0;try{t=e("body").find(o.fullScreenOffsetContainer).height()}catch(n){}try{t=t-e(this).data("scrolloffset")}catch(n){}e("body,html").animate({scrollTop:u.offset().top+u.find(">ul >li").height()-t+"px"},{duration:400})})}})},revscroll:function(t){return this.each(function(){var n=e(this);e("body,html").animate({scrollTop:n.offset().top+n.find(">ul >li").height()-t+"px"},{duration:400})})},revredraw:function(t){return this.each(function(){var t=e(this);var n=t.parent().find(".tp-bannertimer");var i=n.data("opt");r(t,i)})},revpause:function(t){return this.each(function(){var t=e(this);t.data("conthover",1);t.data("conthover-changed",1);t.trigger("revolution.slide.onpause");var n=t.parent().find(".tp-bannertimer");n.stop()})},revresume:function(t){return this.each(function(){var t=e(this);t.data("conthover",0);t.data("conthover-changed",1);t.trigger("revolution.slide.onresume");var n=t.parent().find(".tp-bannertimer");var r=n.data("opt");n.animate({width:"100%"},{duration:r.delay-r.cd-100,queue:false,easing:"linear"})})},revnext:function(t){return this.each(function(){var t=e(this);t.parent().find(".tp-rightarrow").click()})},revprev:function(t){return this.each(function(){var t=e(this);t.parent().find(".tp-leftarrow").click()})},revmaxslide:function(t){return e(this).find(">ul:first-child >li").length},revcurrentslide:function(t){var n=e(this);var r=n.parent().find(".tp-bannertimer");var i=r.data("opt");return i.act},revlastslide:function(t){var n=e(this);var r=n.parent().find(".tp-bannertimer");var i=r.data("opt");return i.lastslide},revshowslide:function(t){return this.each(function(){var n=e(this);n.data("showus",t);n.parent().find(".tp-rightarrow").click()})}});})(jQuery)