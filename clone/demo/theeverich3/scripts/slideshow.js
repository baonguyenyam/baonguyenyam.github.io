// JavaScript Document
$.urlParam = function(name){ var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(top.window.location.href); return (results !== null) ? results[1] : 0; }

$(document).ready(function() {
	var listSlide = $(".slideshow").children();
	var listNumber = $(".slide_number ul").find("li");
	var currentSlide = 0;
	
	var slideTimeout;
	
	function runSlide() {
		$(listSlide[currentSlide]).fadeOut(2000);
		//$(listNumber[currentSlide]).removeClass("active");
		$(listNumber[currentSlide]).fadeOut(2000);
		currentSlide += 1;
		if(currentSlide > listSlide.length - 1) {
			currentSlide = 0;
		}
		$(listSlide[currentSlide]).fadeIn(2000);
		//$(listNumber[currentSlide]).addClass("active");
		$(listNumber[currentSlide]).fadeIn(2000);
	}
	
	$(".slide_number .next").click(function () {
		clearTimeout(slideTimeout);
		$(listSlide[currentSlide]).fadeOut(2000);
		//$(listNumber[currentSlide]).removeClass("active");
		$(listNumber[currentSlide]).fadeOut(2000);
		
		currentSlide += 1;
		if(currentSlide > listSlide.length - 1) {
			currentSlide = 0;
		}
		
		$(listSlide[currentSlide]).fadeIn(2000);
		//$(listNumber[currentSlide]).addClass("active");
		$(listNumber[currentSlide]).fadeIn(2000);
		//slideTimeout = setInterval(function(){runSlide();}, 4000);
	});
	
	$(".slide_number .prev").click(function () {
		clearTimeout(slideTimeout);
		$(listSlide[currentSlide]).fadeOut(2000);
		//$(listNumber[currentSlide]).removeClass("active");
		$(listNumber[currentSlide]).fadeOut(2000);

		
		currentSlide -= 1;
		if(currentSlide < 0 ) {
			currentSlide = listSlide.length - 1;
		}
		
		$(listSlide[currentSlide]).fadeIn(2000);
		//$(listNumber[currentSlide]).addClass("active");
		$(listNumber[currentSlide]).fadeIn(2000);
		//slideTimeout = setInterval(function(){runSlide();}, 4000);
	});
	
	
	
	var listIntro = $(".windows").children();
	var currentIntro = 0;
	var timeToOut = 0;
	var introTimeout;
	
	function runSlideIntro() {
		$(listIntro[currentIntro]).hide();
		currentIntro += 1;
		if(currentIntro > listIntro.length - 1) {
			clearTimeout(introTimeout);
			$(".intro_wrapper").fadeOut(1000);
			slideTimeout = setInterval(function(){runSlide();}, 6000);
		}
		else {
			$(listIntro[currentIntro]).show();
		}
	}
	
	$(".intro_page").fadeIn(5000, function() {
		$(".intro_wrapper").css({"background-color" : "transparent"});
		introTimeout = setInterval(function(){runSlideIntro();}, 150 + timeToOut);
	});
	
	if($.urlParam('key') == 'true'){
		setInterval(function(){runSlide();}, 6000);
	}
	
	$(function () {
		var tabContainers = $('div.ontab > div');
		tabContainers.hide().filter(':first').show();
		$('div.tabs ul.tabNavigation a').click(function () {
				tabContainers.hide();
				tabContainers.filter(this.hash).show();
				$('div.tabs ul.tabNavigation a').removeClass('selected');
				$(this).addClass('selected');
				return false;
		}).filter(':first').click();
	});
	
});

