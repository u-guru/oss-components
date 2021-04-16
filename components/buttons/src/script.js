$(".checkbox-container input").click(function(){
	$(this).parent("div").parent(".checkbox-container").siblings("button").toggleClass("activate");
});