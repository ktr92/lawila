

$(function() {
    $('#menu_open').click(function(event) {
        $(this).toggleClass('active');	
        $('.header__mainmenu').animate({'width': 'toggle'});
    });
	    
});



$(window).scroll(function() {
    scroll = $(window).scrollTop();

    if (scroll >= 700) $('#header').addClass('fixed');
    else $('#header').removeClass('fixed');
});




$(document).ready(function() {
    new WOW().init();
    $("input[type=tel]").mask("+7 (999) 999-99-99");

    try {
        $('.slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            dots: true,
            prevArrow: $('.slidernav__left'),
            nextArrow: $('.slidernav__right'),

        });

    } catch (err) {}

    lightbox.option({
        'resizeDuration': 20,
        'wrapAround': true
    });

});

$(document).ready(function() {
    jQuery("a.scrollto").click(function() {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top - 90;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1100);
        return false;
    });
});





if ($(window).width() <= 767) {
    try {
        $('.team__items').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: true,
            dots: false,
            prevArrow: $('.team__left'),
            nextArrow: $('.team__right'),
            responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },

                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

    } catch (err) {}
};





$(document).ready(function() {
    $('.close-modal').on('click', close_modal);
    $('#modal_close_href').on('click', close_modal);

    function close_modal() {
        $('.dom-popup').css("display", "none");
    }
});