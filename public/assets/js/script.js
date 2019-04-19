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

$(document).ready(function () {

    let counter = 20;
    $('.counter').text(counter);

    $('.egg-007').click(function () {
        $(this).hide();
        counter--;
        $('.counter').text(counter);
    });
    $('.egg-014').click(function () {
        $(this).hide();
        counter--;
        $('.counter').text(counter);
    });
    $('.egg-015').click(function () {
        $(this).hide();
        counter--;
        $('.counter').text(counter);
    });
    $('.egg-017').click(function () {
        $(this).hide();
        counter--;
        $('.counter').text(counter);
    });
    $('.egg-018').click(function () {
        $(this).hide();
        counter--;
        $('.counter').text(counter);
    });


});
