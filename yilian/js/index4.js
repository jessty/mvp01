/**
 * Created by admin on 2016/7/17.
 */
$(function () {
    $(window).resize(function () {
        if ($("#root4").width() <= 695) {
            $(".pa").css({width: "600px",height:"600px"}).addClass("img-responsive");
        }
        else {
            $(".pa").css({width: "340px", height:"auto"}).removeClass("img-responsive");
        }
    })
});