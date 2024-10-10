;$(window).trigger("scroll");
$(window).trigger("resize");
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

// Video////////////////////////////////////////////////////////////////////////////
if($('#player-ga').length){
  var myPlayer,
    changeVideo;

  videojs("player-ga",{"techOrder": ["html5","flash","youtube"],"src":""}).ready(function(){
    myPlayer = this;
  });

}
function changeVideo(src,poster,type,techOrder){//,preload,techOrder,quality,autoplay,youtubecontrol,control
  var netech = '["'+techOrder+'"]';
  myPlayer.src({"type":type,"src":src,"poster": poster,"techOrder":netech});
  myPlayer.play()
}

// Other Functions////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
"use strict";

  autoCutStr();
  
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
  $("[data-bg-po]").each(function() {
    var backanimc = $(this).attr('data-bg-po');
    $(this).css("background-position", "#" + backanimc + "");
  });  


  //Change IMG Source
  $("[data-changeimg-src]").click(function() {
    var backanim = $(this).attr('data-changeimg-src');
    var backanimto = $(this).attr('data-changeimg');
    $('#' + backanimto).fadeIn('slow', function() {
      $(this).attr('src', '' + backanim + '');
    });
  });


});

/*===========================================================*/
$(window).load(function() {
"use strict";

});

