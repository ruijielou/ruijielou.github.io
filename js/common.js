/**
 * Created by sally on 2016/4/24.
 */
$(document).ready(function () {
    InitPage();
    $(window).resize(function () {
        InitPage();
    });

});

function InitPage() {
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    $("html").css("font-size", $(document).width() / 1920 * 100 + "%");
    $(".section").css("height", "1080px");

}
