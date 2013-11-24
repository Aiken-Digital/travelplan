(function () {
	// Page Transition
	$("[data-href]").on("click", function() {
		var target = $(this).data("href");
		
		// hide/show page
		$("section:not(.hide)").fadeOut(200, function() {
			$(this).addClass("hide");
			$("section#"+target).removeClass("hide");
		});
		// $("section:not(.hide)").fadeOut(200, function() {
		// 	$(this).addClass("hide");
		// });

		// $("section#"+target).fadeIn(200, function() {
		// 	$("section#"+target).removeClass("hide");
		// });
		
		// remove/add class to header
		$(".masthead nav").removeClass();
		$(".masthead nav").addClass("open-"+target);
	});

	// Flights outbound on click
	$(".outbound .flights .box").on("click", function() {
		$(this).siblings(".box").toggleClass("hide");
	});

	// Flights return on click
	$(".return .flights .box").on("click", function() {
		$(this).siblings(".box").toggleClass("hide");
	});

	// Itinerary next day
	$("#itinerary #day1 .next-day").on("click", function() {
		$("#day1").addClass("hide");
		$("#day2").removeClass("hide");
	});

	$("#itinerary #day2 .previous-day").on("click", function() {
		$("#day2").addClass("hide");
		$("#day1").removeClass("hide");
	});

	// Book
	$("[data-action='book']").on("click", function() {
		alert("You have successfully book your trip. Bon Voyage");
	});

}() );