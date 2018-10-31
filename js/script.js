$(document).ready(function () {
	$('.header-button-menu').click(function () {
		$('.header-nav').addClass('header-nav-active');
	});

	$('.header-button-menu-exit').click(function () {
		$('.header-nav').removeClass('header-nav-active')

	});
});