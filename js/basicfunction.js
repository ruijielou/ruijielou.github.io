/**
 * Created by sally on 2016/4/23.
 */
$(document).ready(function(){
    InitPage();
    $(window).resize(function(){
        InitPage();
    });

});

function InitPage(){
    var winHeight=$(window).height();
    $("html").css("font-size", $(document).width() / 1920 * 100 + "%");
    var content1Top=(winHeight-$("#section1Content").height())/2;
    $("#section1Content").css("padding-top",content1Top+"px");
    var content3Top=(winHeight-$("#section3Content").height())/2;
    $("#section3Content").css("padding-top",content3Top+"px");
    var content4Top=(winHeight-$("#section4Content").height())/2;
    $("#section4Content").css("padding-top",content4Top+"px");
}
