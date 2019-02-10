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



// ***********COKIE ALERT***************

(function() {
    //copyright JGA 2013 under MIT License
    var monster={set:function(e,t,n,r){var i=new Date,s="",o=typeof t,u="";r=r||"/",n&&(i.setTime(i.getTime()+n*24*60*60*1e3),s="; expires="+i.toGMTString());if(o==="object"&&o!=="undefined"){if(!("JSON"in window))throw"Bummer, your browser doesn't support JSON parsing.";u=JSON.stringify({v:t})}else u=escape(t);document.cookie=e+"="+u+s+"; path="+r},get:function(e){var t=e+"=",n=document.cookie.split(";"),r="",i="",s={};for(var o=0;o<n.length;o++){var u=n[o];while(u.charAt(0)==" ")u=u.substring(1,u.length);if(u.indexOf(t)===0){r=u.substring(t.length,u.length),i=r.substring(0,1);if(i=="{"){s=JSON.parse(r);if("v"in s)return s.v}return r=="undefined"?undefined:unescape(r)}}return null},remove:function(e){this.set(e,"",-1)},increment:function(e,t){var n=this.get(e)||0;this.set(e,parseInt(n,10)+1,t)},decrement:function(e,t){var n=this.get(e)||0;this.set(e,parseInt(n,10)-1,t)}};

    if (monster.get('cookieinfo') === 'true') {
        return false;
    }

    var container = document.createElement('div'),
        link = document.createElement('button');;

    container.setAttribute('id', 'cookieinfo');
    container.setAttribute('class', 'cookie-alert');
    container.innerHTML = '<p>Ta strona wykorzystuje pliki cookie.</p> <a href="https://pl.wikipedia.org/wiki/HTTP_cookie" target="_blank">Więcej informacji.</a>';

    link.setAttribute('href', '#');
    link.setAttribute('title', 'Zamknij');
    link.innerHTML = 'OK';

    function clickHandler(e) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }

        container.setAttribute('style', 'opacity: 1');

        var interval = window.setInterval(function() {
            container.style.opacity -= 0.01;

            if (container.style.opacity <= 0.02) {
                document.body.removeChild(container);
                window.clearInterval(interval);
                monster.set('cookieinfo', 'true', 365);
            }
        }, 4);
    }

    if (link.addEventListener) {
        link.addEventListener('click', clickHandler);
    } else {
        link.attachEvent('onclick', clickHandler);
    }

    container.appendChild(link);
    document.body.appendChild(container);

    return true;
})();


})