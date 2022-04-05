$(document).ready(function () {

	if (navigator.userAgent.match(/(iPad|iPhone|iPod|webOS|Safari)/gi) && $(window).width() < 1366) {
		$('head').append('<style>.section-services:before, .home-news:after, .home-news:before, .home-clients:before{background-attachment: scroll !important;}</style>');
	}

});