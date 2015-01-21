$(document).ready(function(){
	// add logged-in class if #admin-bar exists
	if ($('#admin-bar').text().trim().length || $('#admin-bar').children().length) { $('body').addClass('logged-in'); }

	// change logo
	$('#storelogoimage').attr('src','https://webskillet.github.io/Deerfield_Designs/images/deerfield_logo_points.png');

	// add tagline after the logo
	$('h1.header-logo').after('<div class="tagline"><h2>Custom Screenprinting and Embroidery</h2><p>Organic | Recycled | Fair Trade<br />Mad River Valley, Vermont<br />(802) 496-4224</p></div>');

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
		$(openTab).show().addClass('active');
		$('body').addClass(openTab.substring(1));
		$('#header-nav-'+openTab.substring(1)).addClass('active');
		$('.tablink a').click(function(event){
			event.preventDefault();
			$('.tab').hide().removeClass('active');
			$('.tablink').removeClass('active');
			var target = $(this).attr('href');
			$(target).show().addClass('active');
			$(this).parent().addClass('active');
			$('body').removeClass('who what why how');
			$('body').addClass(target.substring(1));
			$('body, html').animate({
				scrollTop : $(this).closest('.header-nav').offset().top
			}, 500);
		});
	}

	// change text for selecting garment
	$('.item-user-options li a').each(function(){
		if (jQuery(this).text().trim() == 'Create your own design') {
			jQuery(this).html('<span class="icon-customize icon-sprite"></span> Select this garment');
		}
	});

	// add upload button to footer
	$('#quote-callout').append('<h3 id="upload-design-prompt">Need to upload your design?</h3><p>If you need to upload your logo or art without creating on order or a quote you can do it here.</p><a class="btn-primary btn" href="/Deerfield_Designs/designstudio">Upload Your Design</a>');
	// add logos to footer
	$('.footer-links').before('<div id="logos-block"><img class="membership-logos" src="https://webskillet.github.io/Deerfield_Designs/images/1percent-logo.png" /><img class="membership-logos" src="https://webskillet.github.io/Deerfield_Designs/images/fairlabor-logo.png" /><img class="membership-logos" src="https://webskillet.github.io/Deerfield_Designs/images/organictextiles-logo.png" /></div>');
	//add tagline to footer
	$('.footer-links').prepend('<p style="margin-bottom:10px;">America\'s Largest Selection of Sustainable Apparel</p><p style="color:rgb(89, 89, 89);">151 Mad River Canoe Rd, Waitsfield, VT 05673</p>');

});
