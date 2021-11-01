    // gnb 스크롤
    $(window).scroll(function(){
        var sc = $(this).scrollTop();
        //console.log(sc);
        if(sc >= 80){
            $("#gnb").addClass("fix");
        }else{
            $("#gnb").removeClass("fix");
        }
    });

    // gnb 마우스올리면
    $("#gnb").on("mouseover focusin",function(){
        $(this).addClass("down pc");
    });
    $("#gnb").on("mouseleave focusout",function(){
        $(this).removeClass("down pc");
    });

    // 모바일 메뉴버튼 클릭시
    $("#logo > a").click(function(){
        $("#gnb_m").toggleClass("on")
        $(".g_sub_m").slideUp(300);
    });

    // 대메뉴클릭시 소메뉴 slide
    $(".g_main_m").click(function(){
        $(".g_sub_m").slideUp(300);
        $(this).next(".g_sub_m").stop().slideToggle(300);
    });

    // #gall 이미지슬라이드
    $("#gall .next").click(function(){
        $("#gall .slide").animate({left:-395},500,function(){
            $(this).append($("#gall .slide li:first-child")).css({"left":0});
        });
    });
    $("#gall .prev").click(function(){
        $("#gall .slide").prepend($("#gall .slide li:last-child")).css({"left":-395}).animate({left:0},500);
    });


    // 100%메인비주얼 이미지슬라이드
    $("#index_main .slide").append($("#index_main .slide li:first-child").clone());
    // 첫번째 슬라이드를 복제해서 뒤로보내라 (.clone(); : 복사)
    // 먼저 복사를 해줘야지 length가 복제된것까지 카운트를 할 수 있습니다.

    var ln = $("#index_main .slide li").length;
    $("#index_main .slide").css({"width":ln*100+"%"});
    $("#index_main .slide li").css({"width":100 / ln + "%"});

    var n = 0;

    function auto(){
        n++;

        if(n>=ln-1){ // -1은 가짜리스트를 빼줘야함
            $("#index_main .slide").animate({left:-n*100+"%"},700,function(){
                $(this).css({"left":0});
            });
        n = 0;
        } else{
            $("#index_main .slide").animate({left:-n*100+"%"},700);
        }
    };

    var timer = setInterval("auto()",3000);
    $("#index_main").hover(
        function(){
            clearInterval(timer);
        },
        function(){
            timer = setInterval("auto()",3000);
        }
    );

    $("#index_main .next").click(function(){
        auto();
    });

    $("#index_main .prev").click(function(){
        n--;
        if (n<0) {
            $("#index_main .slide").css({"left":-(ln-1)*100+"%"});
            n=ln-2;
        } 
        $("#index_main .slide").animate({left:-n*100+"%"},700);
    });