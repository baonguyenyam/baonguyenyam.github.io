;
function autoCutStr(prefix) {

    if (!prefix || prefix === undefined) {
        prefix = "autoCutStr_";
    }
    $('[class^="' + prefix + '"]').each(function () {
        if ($(this).length > 0) {
            var str = $(this).html();
            str = str.replace('<br/>', '');
            str = str.replace('<br>', '');
            $(this).html(str);
            var len = parseInt($(this).attr("class").substr($(this).attr("class").lastIndexOf("_") + 1));
            var length = str.length;
            if (length > len) {
                if (str.charAt(len) == ' ') {
                    str = str.substr(0, len);
                }
                else {
                    str = str.substr(0, len);
                    str = str.substr(0, str.lastIndexOf(" "));
                }
                $(this).html(str + "...");
            }
        }

    });
};
$(document).ready(function() {
 autoCutStr();
"use strict";

  //Load background for div
  $("[data-bg]").each(function() {
    var backanim = $(this).attr('data-bg');
    $(this).css("background-image", "url(" + backanim + ")");
  });
  $("[data-bg-size]").each(function() {
    var backanim = $(this).attr('data-bg-size');
    $(this).css("background-size", backanim);
  });
  $("[data-color]").each(function() {
    var backanimc = $(this).attr('data-color');
    $(this).css("background-color", "#" + backanimc + "");
  });


//Icon Home Page
setTimeout(function() {
  $('.iconpro').addClass('animated bounceIn').show();
}, 3000);
setTimeout(function() {
  $('.iconvideo').addClass('animated bounceIn').show();
}, 4000);


setInterval(function() {
  $('#dgditem06').addClass('animated bounceInDown').show();
}, 1400);
setInterval(function() {
  $('#dgditem05').addClass('animated bounceInDown').show();
}, 1600);
setInterval(function() {
  $('#dgditem04').addClass('animated bounceInDown').show();
}, 1800);
setInterval(function() {
  $('#dgditem03').addClass('animated bounceInDown').show();
}, 2000);
setInterval(function() {
  $('#dgditem02').addClass('animated bounceInDown').show();
}, 2200);



//Animated
//Goi mi
setTimeout(function() {
  $('#mitom').addClass('animated bounceInUp').show();
}, 1000);
setTimeout(function() {
  $("#mitom").addClass('rotate');
}, 2000);
setTimeout(function() {
  $("#mitom .behind").show(400);
}, 2400);
setTimeout(function() {
  $("#ne01").show(300);
}, 2700);
setTimeout(function() {
  $("#ne02").show(400);
}, 2800);
setTimeout(function() {
  $("#ne03").show(500);
}, 2900);
setTimeout(function() {
  $('#mitom').addClass('animated bounceOut').hide();
}, 4500);

//Card
var inSlider = setInterval(function() {
  $("#card").addClass('animated twisterInUp duration5').show();
}, 2800);
var timesCalled = 0;
var t = setInterval(function() {
    $('.flip-container').toggleClass('fl');
    timesCalled++;
    if (timesCalled === 13)
        clearInterval(t);
}, 350);
//Stamp
setTimeout(function() {
  $('#stamp').addClass('animated bombRightOut duration5').hide(500);
}, 6000);
setTimeout(function() {
  $('#card .flip-container').addClass('animated tada');
}, 8000);

setTimeout(function() {
  $('#gold .g01').delay(200).show(0).toggleClass('animated Goldup duration5');
  $('#gold .g02').delay(300).show(0).toggleClass('animated Goldup duration4');
  $('#gold .g03').delay(400).show(0).toggleClass('animated Goldup duration2');
  $('#gold .g04').delay(600).show(0).toggleClass('animated Goldup duration5');
  $('#gold .g05').delay(800).show(0).toggleClass('animated Goldup duration4');
  $('#gold .g06').delay(1000).show(0).toggleClass('animated Goldup duration4');
  $('#gold .g07').delay(1200).show(0).toggleClass('animated Goldup duration3');
  $('#gold .g08').delay(1400).show(0).toggleClass('animated Goldup duration3');
  $('#gold .g09').delay(1600).show(0).toggleClass('animated Goldup duration4');
  $('#gold .g010').delay(1800).show(0).toggleClass('animated Goldup duration4');
  $('#gold .g011').delay(2000).show(0).toggleClass('animated Goldup duration3');
  $('#gold .g012').delay(2200).show(0).toggleClass('animated Goldup duration5');  
}, 9000);

setTimeout(function() {
  //$(location).attr('href', 'http://www.google.com');
}, 13000);

// var timesCalledtcx = 0;
// var tcx = setInterval(function() {
//   $('#gold .g01').delay(200).show(0).addClass('animated Goldup duration5');
//   $('#gold .g02').delay(300).show(0).addClass('animated Goldup duration4');
//   $('#gold .g03').delay(400).show(0).addClass('animated Goldup duration2');
//   $('#gold .g04').delay(600).show(0).addClass('animated Goldup duration5');
//   $('#gold .g05').delay(800).show(0).addClass('animated Goldup duration4');
//   $('#gold .g06').delay(1000).show(0).addClass('animated Goldup duration4');
//   $('#gold .g07').delay(1200).show(0).addClass('animated Goldup duration3');
//   $('#gold .g08').delay(1400).show(0).addClass('animated Goldup duration3');
//   $('#gold .g09').delay(1600).show(0).addClass('animated Goldup duration4');
//   $('#gold .g010').delay(1800).show(0).addClass('animated Goldup duration4');
//   $('#gold .g011').delay(2000).show(0).addClass('animated Goldup duration3');
//   $('#gold .g012').delay(2200).show(0).addClass('animated Goldup duration5');  
//   timesCalledtcx++;
//     if (timesCalledtcx === 100)
//         clearInterval(tcx);
// }, 12000);



  //Change IMG Source
  $("[data-changeimg-src]").click(function() {
    var backanim = $(this).attr('data-changeimg-src');
    var backanimto = $(this).attr('data-changeimg');
    $('#' + backanimto).fadeOut('fast', function() {
      $(this).attr('src', '' + backanim + '').fadeIn(200);
      //$(this);
    });
  });


$('.modal').on('shown.bs.modal', function() {
        var initWindowHeight = $('.modal').outerHeight();
        var initModalHeight = $('.modal-dialog').outerHeight();
        var initModalWidth = $('.modal-dialog').outerWidth();
        $('.modal-dialog').css({'margin-top':''+(initWindowHeight-initModalHeight)/2+'px'});
});

$('#indexModal').modal('show');

//Index Slider
  var revapi;
  revapi = jQuery('.index #indexslider .tp-banner').revolution({
    //dottedOverlay:"twoxtwo",
    delay:10000,
      startwidth:1170,
      startheight:500,
      hideThumbs:10,
      fullWidth:"on",
      fullScreen:"on",
      onHoverStop:"off", 
      navigationHAlign:"center",
      navigationHOffset:0,
      // navigationVOffset:0,
      fullScreenOffsetContainer: ""
  });



$(".scrollbar").mCustomScrollbar();

$('.logo').append($('.sitelogo>a').clone());
$('.mobile-tel').append($('.tel').clone());

});


/*===========================================================*/



$(window).load(function() {

  //Scrollbar
  $(".scrollbar").mCustomScrollbar();

});