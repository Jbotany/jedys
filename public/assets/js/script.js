$(document).ready(function() {

    $('.buttonUp').click(function() {
        $('body, html').animate({
            scrollTop: 0,
        }, 300);

    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 100 ){
            $('.buttonUp').fadeIn('1000');
        } else {
            $('.buttonUp').fadeOut('1000');
        }
    });
});