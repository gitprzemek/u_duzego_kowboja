$(document).ready(function (){
    const linkList = document.getElementsByClassName("navigation__link");


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
    $(".about__btn--menu").click(function (){
        $('html, body').animate({
            scrollTop: $("#menu").offset().top
        }, 500);
    });
    $("#link-delivery").click(function (){
        $('html, body').animate({
            scrollTop: $("#delivery").offset().top
        }, 500);
    });
    $("#link-delivery-m").click(function (){
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

    $('.navigation__btn--burger').click(function(){
        $(".navigation__container").toggleClass("navigation__container--active");
        $(".navigation__btn--burger").toggleClass("navigation__btn--active");
    });
    $('.navigation__link').click(function(){
        $(".navigation__container").toggleClass("navigation__container--active");
        $(".navigation__btn").toggleClass("navigation__btn--active");
    });

})
