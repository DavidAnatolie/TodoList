// Checking Off todos
$("ul").on("click", "li", function() {
	$(this).toggleClass("done");
})

// Deleting todos
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	// No 'event bubbling'
	event.stopPropagation();
})

// Creating todos
$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		var newTodoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span> <i class='fa fa-trash'></i> </span> " + newTodoText + "</li>");
	}
})

// Plus icon
$("#plus").click(function() {
	$("input[type='text']").fadeToggle();
})