import './vendor';
import './helpers';

// слайдер рецептов
$('.recipe').slick({
	arrows: false,
	slidesToShow: 5,
	autoplay: true,
	responsive: [{
		breakpoint: 1023,
		settings: {
			dots: true,
			slidesToShow: 4
		}
	},
	{
		breakpoint: 799,
		settings: {
			dots: true,
			slidesToShow: 3
		}
	},
		{
		breakpoint: 600,
		settings: {
			dots: true,
			slidesToShow: 2
		}
	},
		{
		breakpoint: 400,
		settings: {
			dots: true,
			slidesToShow: 1
		}
	}]
});

// слайдер блока "круто с нами"
$('.cool').slick({
	arrows: false,
	slidesToShow: 3,
	autoplay: true,
	responsive: [{
		breakpoint: 1399,
		settings: {
			dots: true,
			slidesToShow: 2
		}
	},
		{
		breakpoint: 800,
		settings: {
			dots: true,
			slidesToShow: 1
		}
	}]
});

// слайдер отзывов
$('.users').slick({
	arrows: false,
	slidesToShow: 3,
	autoplay: true,
	responsive: [{
		breakpoint: 991,
		settings: {
			dots: true,
			slidesToShow: 2
		}
	},
		{
		breakpoint: 639,
		settings: {
			dots: true,
			slidesToShow: 1
		}
	}]
});

// display: flex вместо display: inline-block у тега от слайдера
$('.slick-slide > div > div').css({display:"flex"});

// плавный переход на якорь (форму с полем емэйла)
$('.btn').on('click', function() {
	let link = $(this).attr("href");
	$("html, body").animate({scrollTop: $(link).offset().top+"px"});
	return false;
});