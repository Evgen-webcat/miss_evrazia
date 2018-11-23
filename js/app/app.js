$(document).ready(function () {
    $('.link').click(function (event) {
        event.preventDefault();

        var screen = $(this).attr('href');
        var scrollTo = $(screen).offset().top - 50;

        $('html, body').animate({
            scrollTop: scrollTo
        }, 1000);
    });

    $('.burger').click(function (event) {
        event.preventDefault();

        $(this).toggleClass('open');
        $('.menu_wrap').fadeToggle(300);
    });

    if ($(window).width() <= 1200) {
        $('.menu_point_link').click(function (event) {
            event.preventDefault();

            $('.burger').toggleClass('open');
            $('.menu_wrap').fadeToggle(300);
        });
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > 140) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });

    $('.call').click(function (event) {
        event.preventDefault();

        $('.locker, .modal').fadeIn();
    });

    $('.close_button, .locker').click(function (event) {
        event.preventDefault();

        $('.locker, .modal').fadeOut();
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

    $('.phone_input').each(function () {
        $(this).mask('+375 (99) 999-99-99');

        $(this).click(function () {
            if ($(this).val() == '+375 (__) ___-__-__') {
                $(this).setCursorPosition(6);
            }
        });
    });

    $.fn.setCursorPosition = function (pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    $('#form').on('submit', function (event) {
        event.preventDefault();
        var form = $(this).serialize();
        $.ajax({
            url: 'send.php',
            data: form,
            success: function () {
                window.location.href = 'thanks.html';
            }
        });
    });

    $('#call').on('submit', function (event) {
        event.preventDefault();
        var form = $(this).serialize();
        $.ajax({
            url: 'send-phone.php',
            data: form,
            success: function () {
                window.location.href = 'thanks.html';
            }
        });
    });
});
