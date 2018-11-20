$(document).ready(function () {
    $('.img_slider').slick({
        slidesToShow: 3,
        prevArrow: '<div class="slick-prev"><div class="slick-prev_wrap"></div></div>',
        nextArrow: '<div class="slick-next"><div class="slick-next_wrap"></div></div>'
    });

    $('.video_slider').slick({
        prevArrow: '<div class="slick-prev"><div class="slick-prev_wrap"></div></div>',
        nextArrow: '<div class="slick-next"><div class="slick-next_wrap"></div></div>'
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
