/**
 * Created by sally on 2016/4/23.
 */
$(document).ready(function () {
    $("#imageleft").click(function () {
        var currentNum = Number($(this).attr("data-current"));
        if (currentNum > 0) {
            var preNum = currentNum - 1;
            $(this).attr("data-current", preNum);
            $("[name='section2Img']").removeClass("active");
            $("[name='section2Img'][data-num='" + preNum + "']").addClass("active");
            $("[name='section2Font']").removeClass("active");
            $("[name='section2Font'][data-num='" + preNum + "']").addClass("active");
        }
    });

    $("#imageright").click(function () {
        var currentNum = Number($("#imageleft").attr("data-current"));
        var maxNum = Number($("#imageleft").attr("data-max"));
        if (maxNum > currentNum) {
            var preNum = currentNum + 1;
            $("#imageleft").attr("data-current", preNum);
            $("[name='section2Img']").removeClass("active");
            $("[name='section2Img'][data-num='" + preNum + "']").addClass("active");
            $("[name='section2Font']").removeClass("active");
            $("[name='section2Font'][data-num='" + preNum + "']").addClass("active");
        }
    });

    $("#onlineleft").click(function () {
        var currentNum = Number($(this).attr("data-current"));
        if (currentNum > 0) {
            var preNum = currentNum - 1;
            $(this).attr("data-current", preNum);
            $("[name='section3Img']").removeClass("active");
            $("[name='section3Img'][data-num='" + preNum + "']").addClass("active");
            $("[name='section3Font']").removeClass("active");
            $("[name='section3Font'][data-num='" + preNum + "']").addClass("active");
        }
    });

    $("#onlineright").click(function () {
        var currentNum = Number($("#onlineleft").attr("data-current"));
        var maxNum = Number($("#onlineleft").attr("data-max"));
        if (maxNum > currentNum) {
            var preNum = currentNum + 1;
            $("#onlineleft").attr("data-current", preNum);
            $("[name='section3Img']").removeClass("active");
            $("[name='section3Img'][data-num='" + preNum + "']").addClass("active");
            $("[name='section3Font']").removeClass("active");
            $("[name='section3Font'][data-num='" + preNum + "']").addClass("active");
        }
    });

    $(document).on("scroll",function(){
        var a = $(".offlineSection").offset().top;
        console.log($(window).scrollTop());
        console.log(a);
        if (($(window).scrollTop()) > a ) {

           // $(".offlineImg").eq(0).addClass("current");
            $(".offlineImg").eq(0).animate({top:"20.75rem",left:"1.65rem"});
            $(".offlineImg").eq(1).animate({top:"28.3rem",left:"10.75rem"});
            $(".offlineImg").eq(2).animate({top:"25.65rem",left:"23.2rem"});
            $(".offlineImg").eq(3).animate({top:"14.9rem",left:"28.1rem"});
            $(".offlineImg").eq(4).animate({top:"4.05rem",left:"22.7rem"});
            $(".offlineImg").eq(5).animate({top:"0.95rem",left:"11.4rem"});
            $(".offlineImg").eq(6).animate({top:"8.75rem",left:"1.95rem"});
        }else if(($(window).scrollTop()) < a){
            $(".offlineImg").animate({top: "14rem",left:"14rem"});

           // $(".offlineImg").css({top: "0",left:"0"},1000);
        }
    });



});
