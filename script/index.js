$(function(){
    //슬라이드
    let num = 0;
    setInterval(function(){
        num++;
        if(num>2) {num = 0}
        $('.slide').removeClass('active')
        $('.slide').eq(num).addClass('active')
    },3000)

    //팝업
    $('#open').click(function(){
        $('.popup').addClass('active')
    })
    $('#close').click(function(){
        $('.popup').removeClass('active')
    })
})