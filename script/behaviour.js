$(function() {
	var $image = $("#header_image");
	var $menu_container = $("#menu_container");
	var $page_container = $("#page_container");
	var paragraphs = $('p.content');
	var headers = $('h1.header');

	paragraphs.fadeIn(1000);
	headers.fadeIn(1000);

	$(document).delegate('div.card', 'click', function() {
		window.location = $(this).find("a.data").attr('href');
	});

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 225) {
			$menu_container.removeClass("mc_not_scrolled").addClass("mc_scrolled");
			$image.removeClass("hi_not_scrolled").addClass("hi_scrolled");
			$page_container.css("margin-top","150px");
		} else {
			$menu_container.removeClass("mc_scrolled").addClass("mc_not_scrolled");
			$image.removeClass("hi_scrolled").addClass("hi_not_scrolled");
			$page_container.css("margin-top","0");
		}
	});
});
