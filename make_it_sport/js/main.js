$(function() {
	$.scrollify({
		section:".panel", // селектор для секций (разделов) на странице
      easing: "easeOutExpo",
      scrollSpeed: 1100,
	});
});

$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 400, 'linear');
});
