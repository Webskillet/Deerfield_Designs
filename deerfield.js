$(document).ready(function(){
	// add logged-in class if #admin-bar exists
	if ($('#admin-bar').length) { $('body').addClass('logged-in'); }

	// test to see if we're on the home page
	var isHome = false;
	var urlBase = window.location.origin + window.location.pathname;
	if (window.location.pathname.toLowerCase() == '/deerfield_designs/stores/page/1000000/homepage') {
		$('body').addClass('home');
		urlBase = '';
		isHome = true;
	}

	// add custom menu
	$('.header-nav > ul > li:not(#header-nav-products)').remove();
	$('li#header-nav-products a').html('Wares&nbsp;<span class="arrow-down"></span>');
	var menuHtml = '<li id="header-nav-who" class="tablink"><a href="'+urlBase+'#who">Who</a></li>';
	menuHtml += '<li id="header-nav-what" class="tablink"><a href="'+urlBase+'#what">What</a></li>';
	menuHtml += '<li id="header-nav-why" class="tablink"><a href="'+urlBase+'#why">Why</a></li>';
	menuHtml += '<li id="header-nav-how" class="tablink"><a href="'+urlBase+'#how">How</a></li>';
	$('.header-nav > ul').prepend(menuHtml);

	if (isHome) {
		var openTab = $(window.location.hash).hasClass('tab') ? window.location.hash : '#who';
		$('.tab').hide();
		$('#who').show();
		$('.tablink a').click(function(event){
			event.preventDefault();
			$('.tab').hide();
			$($(this).attr('href')).show();
		});
	}
});
