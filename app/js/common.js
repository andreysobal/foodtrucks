console.log("loaded!");
// smooth scroll to the anchor id
function scrollToTop() {
	var top = $('#top').offset().top;
	setTimeout(function() {
		$('html, body').animate({
			scrollTop: top
		}, 1500);
	}, 10);
}
