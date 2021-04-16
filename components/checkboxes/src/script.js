$(".checkbox input").click(function(){
	$(this).parent("div").parent(".checkbox").siblings(".state").toggleClass("activate");
});

// var path = document.querySelector('path#line2');
// var length = path.getTotalLength();
// console.log(length)