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

});

$(document).ready(function() {
  var deck = new $.scrolldeck({
    buttons: '.nav-button',
    slides: '.slide',
    duration: 600,
    easing: 'easeInOutExpo',
	offset: 0
  });
});

$(document).ready(function(){
    $(".btn-slide").click(function(){
//        $(".menu").slideToggle("slow");
        $(".nav_up").toggleClass("nav");
        $(this).toggleClass("active");
    });

});

$(document).ready(function(){
    $(".nav-button").click(function(){
        $(".nav_up.nav").removeClass("nav");
        $(".btn-slide").removeClass("active");
    });

});
