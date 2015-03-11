$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $('.wrapper').addClass("scroll");
        } else if ($(this).scrollTop() <= 700 && $('.wrapper').hasClass("scroll")) {
            $('.wrapper').removeClass("scroll");
        }
    });//scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.wrapper').addClass("f_scroll");
        } else if ($(this).scrollTop() <= 300 && $('.wrapper').hasClass("f_scroll")) {
            $('.wrapper').removeClass("f_scroll");
        }
    });//scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.wrapper').addClass("s_scroll");
        } else if ($(this).scrollTop() <= 500 && $('.wrapper').hasClass("s_scroll")) {
            $('.wrapper').removeClass("s_scroll");
        }
    });//scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 75) {
            $('.wrapper').addClass("z_scroll");
        } else if ($(this).scrollTop() <= 75 && $('.wrapper').hasClass("z_scroll")) {
            $('.wrapper').removeClass("z_scroll");
        }
    });//scroll

   new $.scrolldeck({
        buttons: '.nav-button',
        slides: '.slide',
        duration: 600,
        easing: 'easeInOutExpo',
        offset: 0
    });

    $(".btn-slide").click(function () {
//        $(".menu").slideToggle("slow");
        $(".nav_up").toggleClass("nav");
        $(this).toggleClass("active");
    });


    $(".nav-button").click(function () {
        $(".nav_up.nav").removeClass("nav");
        $(".btn-slide").removeClass("active");
    });


    if (!isMobile.any) {

        var wow = new WOW(
            {
                boxClass: 'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0,          // distance to the element when triggering the animation (default is 0)
                mobile: false,       // trigger animations on mobile devices (default is true)
                live: true,       // act on asynchronously loaded content (default is true)
                callback: function (box) {
                    // the callback is fired every time an animation is started
                    // the argument that is passed in is the DOM node being animated
                }
            }
        );
        wow.init();
    }

    $(".menu-opener").click(function () {
        $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
    });

    if (isMobile.any) {
             $('.emergency span b').css({"color": "#100709"})
        }


});