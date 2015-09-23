$(document).ready(function(){
	$("a.scroll").on("click", function(){
		href = $(this).attr("href");
		if($(href).length != 0) {
			$("body,html").animate({ scrollTop: $(href).offset().top }, 1000);
		}
	});
)};