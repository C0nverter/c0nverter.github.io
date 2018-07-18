$(function() {
	var $image = $("#header_image");
	var $menu_container = $("#menu_container");
	var $page_container = $("#page_container");

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 225) {
			console.log("Scroll exceeded.");
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
