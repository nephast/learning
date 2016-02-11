// Element is marked as "done"
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Element is deleted
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if (event.which === 13){
		//Grabbing new todo text from input
		var todoText = $(this).val();
		// Cleaning input
		$(this).val("");
		//Create new li and add it to ul
		$("ul").append("<li><span> <i class='fa fa-trash'></i> </span>" +  todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});



