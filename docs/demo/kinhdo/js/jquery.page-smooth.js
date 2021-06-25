$(document).ready(function() {

"use strict";

var aChildren = $("#gnavi li").children(); // find the a children of the list items
        var aArray = []; // create the empty aArray
        for (var i=0; i < aChildren.length; i++) {    
            var aChild = aChildren[i];
            var ahref = $(aChild).attr('href');
            aArray.push(ahref);
        } // this for loop fills the aArray with attribute href values
        
        $(window).scroll(function(){
            var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
            var windowHeight = $(window).height(); // get the height of the window
            var docHeight = $(document).height();
            
            for (var i=0; i < aArray.length; i++) {
                var theID = aArray[i];
                var divPos = $(theID).offset().top; // get the offset of the div from the top of page
                var divHeight = $(theID).height(); // get the height of the div in question
                if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                    $("a[href='" + theID + "']").parents('ul').find('li').removeClass("current");
                    $("a[href='" + theID + "']").parent('li').addClass("current");
                } else {
                    //$("a[href='" + theID + "']").parent('li').removeClass("current");
                    $("a[href='" + theID + "']").parent('li').removeClass("current");
                }
            }
            
            if(windowPos + windowHeight == docHeight) {
                if (!$("#gnavi li:last-child").hasClass("current")) {
                    var navActiveCurrent = $(".current");
                    $("a[href='" + navActiveCurrent + "']").parent('li').removeClass("current");
                    $("#gnavi li:last-child").addClass("current");
                }
            }
            
        });

});