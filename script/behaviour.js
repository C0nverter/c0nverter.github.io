$(function() {
	var $image = $("#header_image");
	var $menu_container = $("#menu_container");
	var $page_container = $("#page_container");
	var paragraphs = $('p.content');
	var lists = $('ul.content');
	var headers = $('h1.header');

	headers.fadeIn(1000);
	paragraphs.fadeIn(1000);
	lists.fadeIn(1000);

	$(document).delegate('div.card', 'click', function() {
		window.location = $(this).find("a.data").attr('href');
	});

	$(window).scroll(function() {
		var image_margin;
		if ($("#header").height() == 225) {
			image_margin = 0;
		} else {
			image_margin = $image.height()+50;
		}
		var scroll = $(window).scrollTop();
		var menu_height = image_margin + $("#header").height();
		if (scroll >= menu_height) {
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
