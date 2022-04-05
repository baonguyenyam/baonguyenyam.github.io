$(document).ready(function () {

	var $grid = $(".allitems").masonry({
		itemSelector: ".item",
		// columnWidth: ".item",
		// percentPosition: true,
		// gutter: 10,
		fitWidth: false
	});

	$grid.imagesLoaded().progress(function () {
		$grid.masonry("layout");
	});

	$(window).on('resize', function () {
		$grid.masonry("layout");
	})


});