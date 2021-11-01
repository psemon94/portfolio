// 스크롤탑
$(".btn_top").click(function(){
    $('html, body').animate({ scrollTop : 0 }, 600);
    //return false;
} );

//gnb 슬라이드
$(".gnb_main").on("mouseover focusin", function(){
    $(".g_sub").slideDown(400);
});
$("header").on("mouseleave focusout", function(){
    $(".g_sub").stop().slideUp(400);
});

//gnb 동그라미 drop
$("#gnb > li").hover(
    function(){
        $(this).addClass("drop");
    }
    ,
    function(){
        $(this).removeClass("drop");
    }
);
/*순서에맞춰서*/
$(".g_sub .wrap div ul:nth-child(1)").hover(
    function(){
        $("#gnb > li:nth-child(1)").addClass("drop");
    },
    function(){
        $("#gnb > li:nth-child(1)").removeClass("drop");
    }
)
$(".g_sub .wrap div ul:nth-child(2)").hover(
    function(){
        $("#gnb > li:nth-child(2)").addClass("drop");
    },
    function(){
        $("#gnb > li:nth-child(2)").removeClass("drop");
    }
)
$(".g_sub .wrap div ul:nth-child(3)").hover(
    function(){
        $("#gnb > li:nth-child(3)").addClass("drop");
    },
    function(){
        $("#gnb > li:nth-child(3)").removeClass("drop");
    }
)
$(".g_sub .wrap div ul:nth-child(4)").hover(
    function(){
        $("#gnb > li:nth-child(4)").addClass("drop");
    },
    function(){
        $("#gnb > li:nth-child(4)").removeClass("drop");
    }
)
$(".g_sub .wrap div ul:nth-child(5)").hover(
    function(){
        $("#gnb > li:nth-child(5)").addClass("drop");
    },
    function(){
        $("#gnb > li:nth-child(5)").removeClass("drop");
    }
)
$(".g_sub .wrap div ul:nth-child(6)").hover(
    function(){
        $("#gnb > li:nth-child(6)").addClass("drop");
    },
    function(){
        $("#gnb > li:nth-child(6)").removeClass("drop");
    }
)

//snb슬라이드up/down
$("#snb li").on("mouseover focusin", function(){
    $(this).children("ul").slideDown(300);
});
$("#snb li").on("mouseleave focusout", function(){
    $(this).children("ul").slideUp(300);
});

//메인비주얼 이미지
var time = 1000;
var iw = $(".slide img").width();
var inum = $(".slide li").length;

$(".slide").css({"width":iw * inum}); // ul의 길이

// 이미지가 5초마다 자동으로 넘어가라
// 텍스트가 이미지의 순서에 맞게 같이 넘어가라
// 이미지 순서에 맞는 리스트가 .select가 적용
// .select를 순서대로 옮겨야함..
var n = 0;
var ln = $(".txtlist > li").length;
//console.log(ln); //3

function auto(){
    n++;

    $(".slide").animate({left:-iw},time,function(){
        $(this).append($(".slide li:first-child")).css({"left":0});
    });

    if(n < ln){ //ln=3
        $(".txtlist > li").eq(n).addClass("select").siblings().removeClass();
    }else{
        $(".txtlist > li").eq(0).addClass("select").siblings().removeClass();
        n = 0;
    }
};

var timer = setInterval("auto()",5000);
$("#main_visual").hover(
    function(){
        clearInterval(timer);
    },
    function(){
        timer = setInterval("auto()",5000);
    }
);

/* #product 동영상 */
// .vod_bar의 li를 클릭시
// .vod_bar의 선택된 li에 .active
// .main_vod_list의 같은 순서의 li에 .active
$(".vod_bar li").click(function(){
    $(this).addClass("active").siblings().removeClass();
    //var vl = $(this).index();
    //var vd = $(".main_vod_list li").eq(vl).children().attr("data-src");

    //$(".main_vod_list li").eq(vl).addClass("active").siblings().removeClass();
    //$(".main_vod_list li").eq(vl).children().attr("src","data-src");
});
$(".vod_bar li:nth-child(1)").click(function(){
    $(".main_vod_list li iframe").attr("src","https://www.youtube.com/embed/k7lmuG0_fRE")
});
$(".vod_bar li:nth-child(2)").click(function(){
    $(".main_vod_list li iframe").attr("src","https://www.youtube.com/embed/4CndJ7HyOro")
});
$(".vod_bar li:nth-child(3)").click(function(){
    $(".main_vod_list li iframe").attr("src","https://www.youtube.com/embed/vVatU7qVS7o")
});
$(".vod_bar li:nth-child(4)").click(function(){
    $(".main_vod_list li iframe").attr("src","https://www.youtube.com/embed/0yZUFRhwavY")
});

/* #news 슬라이더 */
var nw = $(".news_slide").width();
var nl = $(".news_wrap li").length;

$(".news_wrap").css({"width":nw * nl}); // ul의 길이

function news(){
    n++;

    $(".news_wrap").animate({left:-nw},700,function(){
        $(this).append($(".news_wrap li:first-child")).css({"left":"-55px"});
    });
};

var timer = setInterval("news()",3000);
$(".news_wrap").hover(    
    function(){
        clearInterval(timer);
    },
    function(){
        timer = setInterval("news()",3000);
    }
);

/* 모바일 해더 스크롤 */
$(window).scroll(function(){
    var sc = $(this).scrollTop();
    //console.log(sc);
    if(sc > 0){
        $(".m_header").addClass("on");
    }else{
        $(".m_header").removeClass("on");
    }
});

/* 모바일메뉴 햄버거메뉴 */
$("#nav_on").click(function(){
    $("nav").css({"display":"block"});
});
$("#nav_off").click(function(){
    $("nav").css({"display":"none"});
});

/* 모바일 gnb안의 메뉴들 */
$("nav #gnb_m > li").click(function(){
    $("nav #gnb_m > li ul").slideUp(300); //초기화?
    $(this).children("ul").stop().slideToggle(300);
});

/* #gnb_m li a:after 화살표 */
$("#gnb_m > li > a").click(function(){
    $(this).toggleClass("on").parent().siblings().children().removeClass();
});

/* .lang버튼 */
$(".lang a").click(function(){
    $(this).addClass("select").siblings().removeClass();
});