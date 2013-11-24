(function () {
	// Hide and Show Page
	$("[data-href]").on("click", function() {
		var target = $(this).data("href");
		$("section#"target"").removeClass("hide");
		$("[data-page='"+target+"']").removeClass("");
	});
}() );