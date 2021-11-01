$("header .gnb li").click(function(){
    $(this).next().addClass("select");
})

var typingBool = false; 
var typingIdx=0; 
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length;

// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
if(typingBool==false){ // 타이핑이 진행되지 않았다면 
    typingBool=true; 
    var tyInt = setInterval(typing,100); // 반복동작 
} 
    
function typing(){ 
$(".typing ul li").removeClass("on");
$(".typing ul li").eq(liIndex).addClass("on");
if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
    $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
    typingIdx++; 
} else{ if(liIndex<liLength-1){
    //다음문장으로  가기위해 인덱스를 1증가
    liIndex++; 
    //다음문장을 타이핑하기위한 셋팅
    typingIdx=0;
    typingBool = false; 
    typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
    
    //다음문장 타이핑전 1초 쉰다
        clearInterval(tyInt);
        //타이핑종료
    
        setTimeout(function(){
        //.2초후에 다시 타이핑 반복 시작
        tyInt = setInterval(typing,100);
        },200);
    } else if(liIndex==liLength-1){
        
        //마지막 문장까지 써지면 반복종료
        clearInterval(tyInt);
    }
} 
}



/* .menu .btn클릭하면 .menu나옴  */
$(".menu .btn").click(function(){
    $(".menu").toggleClass("on");
});
/* 스크롤시 메뉴 위치알려줌 */
$(window).scroll(function(){
    var sc = $(this).scrollTop();
    console.log(sc);
    if(sc >= 0){
        $(".menu_box .m").addClass("select");
        $(".menu_box .m2").removeClass("select");
        $(".menu_box .m3").removeClass("select");
        $(".menu_box .m4").removeClass("select");
    }
    if(sc >= 900){
        $(".menu_box .m2").addClass("select");
        $(".menu_box .m").removeClass("select");
        $(".menu_box .m3").removeClass("select");
        $(".menu_box .m4").removeClass("select");
    }
    if(sc >= 1700){
        $(".menu_box .m3").addClass("select");
        $(".menu_box .m").removeClass("select");
        $(".menu_box .m2").removeClass("select");
        $(".menu_box .m4").removeClass("select");
    }
    if(sc >= 2000){
        $(".menu_box .m4").addClass("select");
        $(".menu_box .m").removeClass("select");
        $(".menu_box .m2").removeClass("select");
        $(".menu_box .m3").removeClass("select");
    }
});


/* 메뉴클릭시 이동 */
$('.m').click(function(){
    $('body,html').animate({'scrollTop':'00px'},500);
});
$('.m2').click(function(){
    $('body,html').animate({'scrollTop':'970px'},500);
});
$('.m3').click(function(){
    $('body,html').animate({'scrollTop':'1870px'},500);
});
$('.m4').click(function(){
    $('body,html').animate({'scrollTop':'4557px'},500);
});




/* Skills bar */
$(window).scroll(function(){
    var sc = $(this).scrollTop();
    //console.log(sc);
    if(sc > 970){
        $(".skills .empty").addClass("on");
    }
});