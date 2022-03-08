$(document).ready(function () {

	var $grid =  $('.allitems').masonry({
		itemSelector: '.item'
	})
	$('.allitems').masonry('layout');
	$grid.on('layoutComplete', function () {
		$('.allitems').masonry('layout');
	});
	setTimeout(function () {
		$('.allitems').masonry('layout');
	}, 1000);

});