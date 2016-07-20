/**
 * Created by admin on 2016/7/17.
 */
$(function () {
    $(".l1").hover(function () {
        var $line = $("#line");
        $(this).css("color", "blue");
        $line.stop().animate({
            top: $(this).position().top + 43,
            left: $(this).position().left,
            width: $(this).innerWidth()
        }, 300);

    }, function () {
        $(this).css("color", "gray");
        $("#line").stop().animate({
            left: 0,
            width: "66px"
        }, 300);
    });
    var $i1 = $("#i1");
    var $a = $("#a2,#a3");
    var $root3 = $("#root3");
    $(window).resize(function () {

        if ($root3.width() <= 983) {
            $i1.addClass("img-responsive");
            $a.hide();
        }
        else {
            $i1.removeClass("img-responsive");
            $a.show();

        }
        if ($root3.width() <= 1600) {
            $i1.removeClass("imgBorder");

            $("#pic").removeClass("marginLeft");
        }
        else {
            $i1.addClass("imgBorder");
            $("#pic").addClass("marginLeft");

        }
        if($root3.width() <= 968){
            $(".centerImg").css("float","none");
        }
        else{
            $(".centerImg").css("float", "left");
        }

    });
});
