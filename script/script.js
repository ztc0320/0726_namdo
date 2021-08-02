$(function(){
        // 1열일 경우
    // $(".mainLi").mouseover(function(){
    //     $(this).children("ul.subMenu").stop().slideDown(400);
    // });
    // $(".mainLi").mouseout(function(){
    //     $(this).children("ul.subMenu").stop().slideUp(900);
    // });
    // 2열일 경우
    $(".mainLi").mouseover(function(){
        $(this).children("ul.subMenu").stop().fadeIn(400);
    });
    $(".mainLi").mouseout(function(){
        $(this).children("ul.subMenu").stop().fadeOut(200);
    });

    // 슬라이드 쇼 세로형
    setInterval(fnSlide, 3000);
    // function fnSlide(){
    //     $("#shuttleFrame").animate(
    //         {"margin-top": "-350px"},
    //         1600,
    //         function(){
    //             $("#slide a").eq(0).insertAfter("#slide a:last-child");
    //             $(this).css({"margin-top": "0"});
    //         }
    //     );
    // }
    // 슬라이드 쇼 가로형
    // function fnSlide(){
    //     $("#shuttleFrame").animate(
    //         {"margin-left": "-780px"},
    //         1600,
    //         function(){
    //             $("#slide a").eq(0).insertAfter("#slide a:last-child");
    //             $(this).css({"margin-left": "0"});
    //         }
    //     );
    // }
    // 슬라이드 쇼 교차형
    function fnSlide(){
        $("#slide a").eq(0).fadeOut(500,
            function(){
                $(this).insertAfter("#slide a:last-child");
            });
        $("#slide a").eq(1).fadeIn(1000);
    }

    // 레이어 팝업
    $("tr#popPoint").click(function(){
        $("div#layerBG").css("display", "block");
    });
    $("#closeBtnArea>button").click(function(){
        $("div#layerBG").css("display", "none");
    });

});