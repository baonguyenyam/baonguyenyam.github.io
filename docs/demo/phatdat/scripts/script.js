// JavaScript Document
// Menu Top
ddsmoothmenu.init({ mainmenuid: "navmenu",  orientation: 'v',classname: 'ddsmoothmenu',  contentsource: "markup"})

var $j = jQuery.noConflict();

$j(document).ready(function() {
	
	//Sub Menu Scroll
	$j('.productSubItems').subMenuScroll();
	$j('.projectSubItems').subMenuScroll();
	// Tabs
	$j('#newsTabs,#projectTabs,#productTabs').Tabs();
	
	// Images Product detail
	var listSlide = $j(".productImgSlide .imgSlides .items").children();
	var listNumber = $j(".productImgSlide .proBtnSlide").find("a");
	var currentSlide = 0;
	
	slideTimeout = setInterval(function(){runSlideProductImg();}, 4000);
	
	function runSlideProductImg() {
		$j(listSlide[currentSlide]).fadeOut(700);
		$j(listNumber[currentSlide]).removeClass("active");
		currentSlide += 1;
		if(currentSlide > listSlide.length - 1) {
			currentSlide = 0;
		}
		$j(listSlide[currentSlide]).fadeIn(700);
		$j(listNumber[currentSlide]).addClass("active");
	}
	
	$j(".productImgSlide .proBtnSlide ul li a").click(function () {
		clearTimeout(slideTimeout);
		$j(listSlide[currentSlide]).fadeOut(700);
		$j(listNumber[currentSlide]).removeClass("active");
		currentSlide = parseInt($j(this).attr("rel"));
		$j(listSlide[currentSlide]).fadeIn(700);
		$j(listNumber[currentSlide]).addClass("active");
	});
	
	// Video
	$j(".video").click(function(){$j.fancybox({'padding': 0,'autoScale': false,'transitionIn':'none','transitionOut':'none','title':this.title,'width':640,'height':385,'href':this.href.replace(new RegExp("watch\\?v=", "i"),'v/'),'type':'swf','swf':{'wmode':'transparent','allowfullscreen':'true',}}); return false;});
	
	// news gallery scroll image thumb;
	var el = $j(".scrollThumb");
	var totalItems = el.find(".items a").size();
	el.scrollable({
		onSeek: function(event, i) {
			if(i > 0) el.parent().find(".prev").css("visibility", "visible");
			if(i == 0) el.parent().find(".prev").css("visibility", "hidden");
			if((totalItems - 8) == i) {
				if(i % 8 < 8) el.parent().find(".next").css("visibility", "hidden");
			}
			else if((totalItems - 8) > i) {
				el.parent().find(".next").css("visibility", "visible");
			}
		}
	});
	
	$j(".scrollThumb .items a").click(function() {
		if ($j(this).hasClass("active")) { return; }
		var url = $j(this).attr("href");
		var wrap = $j("#image_wrap").fadeTo("medium", 0.5);
		var img = new Image();
		img.onload = function() {
			wrap.fadeTo("fast", 1);
			wrap.find("img").attr("src", url);
		};
		img.src = url;
		$j(".scrollThumb .items a").removeClass("active");
		$j(this).addClass("active");
		return false;
	}).filter(":first").click(function(){return false});
	
});

// JavaScript Document
$j.fn.subMenuScroll = function() {
	var el = $j(this);
	var totalItems = el.find(".list_items .item").size();
	el.scrollable({
		onSeek: function(event, i) {
			if(i > 0) el.parent().find(".prev").css("visibility", "visible");
			if(i == 0) el.parent().find(".prev").css("visibility", "hidden");
			if((totalItems - 5) == i) {
				if(i % 5 < 5) el.parent().find(".next").css("visibility", "hidden");
			}
			else if((totalItems - 5) > i) {
				el.parent().find(".next").css("visibility", "visible");
			}
		}
	});
};

$j.fn.Tabs = function(){
	var el = $j(this)
	el.find('ul#tabs li').each(function(){							
		$j(this).find('a').click(function(){
			if(!$j(this).parent().is('.active')){				   
				el.find('ul#tabs li.active').removeClass('active');			   
				$j(this).parent().addClass('active');
				var contentElement = $j(this).attr('href'); 
				el.find('#contentTabs .activeTab').addClass('hideTab');
				el.find('#contentTabs .activeTab').removeClass('activeTab');
				$j(contentElement).removeClass('hideTab');
				$j(contentElement).addClass('activeTab');
				
			}
			return false;
		});
	});
};