$(document).ready(function (){
    $("#link-about").click(function (){
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 500);
    });
    $("#link-menu").click(function (){
        $('html, body').animate({
            scrollTop: $("#menu").offset().top
        }, 500);
    });
    $("#link-delivery").click(function (){
        $('html, body').animate({
            scrollTop: $("#delivery").offset().top
        }, 500);
    });
    $("#link-contact").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 500);
    });

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.navigation__btn-to-top').fadeIn();
        } else {
            $('.navigation__btn-to-top').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.navigation__btn-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    
});