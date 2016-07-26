/**
 * Created by admin on 2016/7/24.
 */
(function ($) {
    $.extend({
        "pointClick":function (h1,h2,h3,h4) {
            var tmp = {
                $fixedLocation1: $("#fixedLocation1"),
                $backTop: $("#backTop"),
                $floatRight: $(".floatRight")

            };

            $(window).scroll(function () {
                var height = $(document).scrollTop();
                var child = $(".fixGroup");
                if(h1 != null){
                    if (height >= h1) {
                        tmp.$fixedLocation1.fadeIn();
                        child.eq(0).addClass("show");
                    }
                    else {
                        tmp.$fixedLocation1.fadeOut();
                        child.eq(0).removeClass("show");
                    }
                }
                if(h2 != null){
                    if (height >= h2) {
                        tmp.$backTop.show();

                    }
                    else {
                        tmp.$backTop.hide();
                    }
                }
                if(h3 != null){
                    if (height >= h3) {
                        child.eq(0).removeClass("show");
                        child.eq(1).addClass("show");
                    }
                    else {
                        child.eq(1).removeClass("show");
                        child.eq(0).addClass("show");
                    }
                }
               
                
                
                
               
                

            }).resize(function () {
                if(h4 != null){
                    if ($(document).width() < h4) {
                        tmp.$floatRight.removeClass("pull-right");
                    }
                    else {
                        tmp.$floatRight.addClass("pull-right");
                    }
                }
               

            });
        }
    });


})(jQuery);
