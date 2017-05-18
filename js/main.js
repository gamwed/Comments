$(document).ready(function(){
	function newcom(){
		var msg = $("#com").val();
		$('<div id="comment"><div id="name">Саша Мироненко</div><div id="data">17 Апрель 2017</div><div id="text">'+msg+'</div>').insertAfter("#comment");	
	};
	$("#submitt").click(newcom);

var isCtrl = false;
$(document).keyup(function (e) {
 
	if(e.which == 17) isCtrl=false;
}).keydown(function (e) {
 
	if(e.which == 17) isCtrl=true;
	if(e.which == 13 && isCtrl == true) {newcom()}
	});	
});