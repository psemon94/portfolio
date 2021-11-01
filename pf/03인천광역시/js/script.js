$(".all_menu").click(function(){
    $(".hamburger").toggleClass("on");
});

$(".field > a").click(function(){
    $(this).next(".field_box").toggleClass("on");
});



/* 슬라이드 탭메뉴 */
// $(".tap_01").click(function(){
//     $(".slider_02").css({"display":"none"});
//     $(".slider_01").css({"display":"flex"});
//     $(".tap_02").children(".page").css({"display":"none"});
//     $(this).children(".page").css({"display":"flex"});
// });
// $(".tap_02").click(function(){
//     $(".slider_01").css({"display":"none"});
//     $(".slider_02").css({"display":"flex"});
//     $(".tap_01").children(".page").css({"display":"none"});
//     $(this).children(".page").css({"display":"flex"});
// });

/* 슬라이드_01 */
// ul들을 담고 있는 .slide_box의 너비
var bw1 = $(".slide_box").width();
console.log(bw1);
// slider 안의 div의 갯수
var inum1 = $(".slider_01 div").length;
console.log(inum1);
// slider 안의 div의 너비
var lw = $(".slider_01 div").css({"width" : bw1});

// ul의 길이 = box의 너비 * li의 갯수
$(".slider_01").css({"width" : bw1 * inum1});
// li의 길이 = ul의 너비 / li의 갯수
$(".slider_01 div").css({"width" : bw1});

// var time = 1000;
// var n = 0

// function auto(){
//     n++
//     $(".slider_01").animate({left:-lw},time,function(){
//         $(this).append($(".slider_01 li:first-child"));
//     });
// };

// var timer = setInterval("auto()",1200);
// $(".slider_01").hover(
//     function(){
//         clearInterval(timer);
//     },
//     function(){
//         timer = setInterval("auto()",1200);
//     }
// );



/* 슬라이드 시작/멈춤 버튼 */
$(".play").click(function(){
    $(this).css({"display":"none"});
    $(this).siblings(".pause").css({"display":"block"});
});
$(".pause").click(function(){
    $(this).css({"display":"none"});
    $(this).siblings(".play").css({"display":"block"});
});


$(".notes_left > ul > li").click(function(){
    $(this).addClass("on").siblings().removeClass();
});