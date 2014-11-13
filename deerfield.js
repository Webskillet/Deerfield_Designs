$(document).ready(function(){
	// add custom menu
	$('.header-nav > ul > li:not(#header-nav-products)').remove();
	var menuHtml = '
		<li id="header-nav-who tablink"><a href="#who">Who</a></li>
		<li id="header-nav-what tablink"><a href="#what">What</a></li>
		<li id="header-nav-why tablink"><a href="#why">Why</a></li>
		<li id="header-nav-how tablink"><a href="#how">How</a></li>';
	$('.header-nav > ul').prepend(menuHtml);

	// tabs functionality
	// tabs should be set up like this: <div id="who" class="tab"> [content] </div>
	$('.tab').hide();
	$('#who').show();
	$('.tablink a').click(function(event){
		event.preventDefault();
		$('.tab').hide();
		$($(this).attr('href')).show();
	});
});
