$(document).ready(function () {
    $('.menu_point_link').click(function () {
        var screen = $(this).attr('href');
        var scrollTo = $(screen).offset().top;
        console.log(screen);
        console.log(scrollTo);

        $('html, body').animate({
            scrollTop: scrollTo
        }, 1000);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 140) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });

    $('.img_slider').slick({
        slidesToShow: 3,
        prevArrow: '<div class="slick-prev"><div class="slick-prev_wrap"></div></div>',
        nextArrow: '<div class="slick-next"><div class="slick-next_wrap"></div></div>',
        responsive: [{
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.video_slider').slick({
        prevArrow: '<div class="slick-prev"><div class="slick-prev_wrap"></div></div>',
        nextArrow: '<div class="slick-next"><div class="slick-next_wrap"></div></div>'
    });

    $('.partners_slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});
