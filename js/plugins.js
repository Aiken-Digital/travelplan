$(document).ready(function() {
	$("#menu-toggle").click(function () {
	  $('#menu').toggleClass('active');
	  $('section').toggleClass('offset');
	  $('.masthead').toggleClass('offset');
	});
	
	$(".heart").click(function () {
	  $(this).toggleClass('liked').text('');
	});
});