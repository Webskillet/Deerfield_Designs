$(document).ready(function(){
	// add logged-in class if #admin-bar exists
	if ($('#admin-bar').text().trim().length || $('#admin-bar').children().length) { $('body').addClass('logged-in'); }

	// add tagline after the logo
	$('h1.header-logo').after('<div class="tagline"><h2>Custom Screenprinting & Embroidery</h2><p>Organic | Recycled | Fair Trade</p></div>');

	// test to see if we're on the home page
	var isHome = false;
	var urlBase = window.location.origin + '/Deerfield_Designs/Stores/Page/1000000/Deerfield_Designs';
	if (window.location.pathname.toLowerCase() == '/deerfield_designs/stores/page/1000000/deerfield_designs') {
		$('body').addClass('home');
		urlBase = '';
		isHome = true;
	}

	// add custom menu
	$('.header-nav > ul > li:not(#header-nav-products)').remove();
	$('li#header-nav-products > a').html('Wares&nbsp;<span class="arrow-down"></span>');
	var menuHtml = '<li id="header-nav-who" class="tablink"><a href="'+urlBase+'#who">Who</a></li>';
	menuHtml += '<li id="header-nav-what" class="tablink"><a href="'+urlBase+'#what">What</a></li>';
	menuHtml += '<li id="header-nav-why" class="tablink"><a href="'+urlBase+'#why">Why</a></li>';
	menuHtml += '<li id="header-nav-how" class="tablink"><a href="'+urlBase+'#how">How</a></li>';
	$('.header-nav > ul').prepend(menuHtml);

	// stuff to do on the front page
	if (isHome) {
		$('#footer-callout > .container').append('<img id="dd-people" src="https://webskillet.github.io/Deerfield_Designs/images/dd_people.png" />');

		var openTab = '#who';
		if ($(window.location.hash).hasClass('tab')) {
			window.setTimeout(function(){$('body, html').scrollTop($('.header-nav').offset().top)},100);
			openTab = window.location.hash;
		}
		$('.tab').hide();
		$(openTab).show();
		$('body').addClass(openTab.substring(1));
		$('.tablink a').click(function(event){
			event.preventDefault();
			$('.tab').hide();
			var target = $(this).attr('href');
			$(target).show();
			$('body').removeClass('who what why how');
			$('body').addClass(target.substring(1));
			$('body, html').animate({
				scrollTop : $(this).closest('.header-nav').offset().top
			}, 500);
		});
	}

	// add logos to footer
	// actually will add via css for now ...  $('.footer-links').before('<div class="tagline"><h2>Custom Screenprinting & Embroidery</h2><p>Organic | Recycled | Fair Trade</p></div>');
	
});
