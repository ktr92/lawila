

$(function() {
    $('#menu_open').click(function(event) {
        $(this).toggleClass('active');	
        $('.header__mainmenu').animate({'width': 'toggle'});
    });
	
	$('.mobilemenu').click(function(event) {      
        $('.header__menu').slideToggle();
    });
	
	$('.closemenu').click(function(event) {      
        $('.header__menu').slideToggle();
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
        $('.serts__slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: true,
            dots: false,
			 centerMode: true,
			speed:700,
		
			centerPadding: '0',
			 variableWidth: true,
			variableHeight: true,
            prevArrow: $('.serts__left'),
            nextArrow: $('.serts__right'),

        });

    } catch (err) {}
	$('.serts__slide.slick-slide.slick-cloned a').removeAttr('data-lightbox');
	
	try {
        $('.reviews__slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: true,
            dots: false,
			 centerMode: false,
			speed:700,
			
            prevArrow: $('.reviews__left'),
            nextArrow: $('.reviews__right'),
			responsive: [
				{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                   
                    }
                },
				{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                       
                    }
                },

                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
						centerPadding: '35%',
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

        

    } catch (err) {}
	$('.reviews__slide.slick-slide.slick-cloned a').removeAttr('data-lightbox');

    lightbox.option({
        'resizeDuration': 20,
        'wrapAround': true
    });


	
});

$(document).ready(function() {
    jQuery("a.scrollto").click(function() {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top - 30;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1100);
        return false;
    });
});



$(document).ready(function() {
    $('.close-modal').on('click', close_modal);
    $('#modal_close_href').on('click', close_modal);

    function close_modal() {
        $('.dom-popup').css("display", "none");
    }
});