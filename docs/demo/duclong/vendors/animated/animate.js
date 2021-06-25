/********************************/
/*********************/
/****** SINWAY ******/
/********************/

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
				$('[data-fade]').each( function(i){
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


