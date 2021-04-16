$(".dropdown > div > a").click(function(){
	$(this).toggleClass("active");
	$(this).parent().next().toggleClass("active");
});

$(".checkbox-container input").click(function(){
	$(this).parent("div").parent(".checkbox-container").siblings(".dropdown").toggleClass("activate");
});

// var path = document.querySelector('path.check-stroke');
// var length = path.getTotalLength();
// console.log(length)