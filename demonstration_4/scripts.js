$( document ).ready(function() {

//7
$('#oval').css('background-color', 'black');

//8
$('#triangle').click(function(){
	
	$('#triangle').css('border-bottom', '0vw solid tan');
	$('#triangle').css('border-top', '20vw solid tan');
	
});

//9
$("#cross").mouseenter(function(){
	$('#cross').css('transform','rotate(180deg)');
});
	
	
//10
$("#cross").mouseleave(function(){
	$('#cross').css('transform','rotate(0deg)');
});
	
//11
$("#mouseY").mousemove(function(event){
	//console.log("it works!")
	var parentOffset = $("#lineX").parent().offset();
	var relY = event.pageY - parentOffset.top + 1;
	//console.log(relY);
	$('#lineX').css('top', relY);
	
});
	
	
$("#mouseX").mousemove(function(event){
	var parentOffset = $("#lineY").parent().offset();
	var relX = event.pageX - parentOffset.left + 1;
	$('#lineY').css('left', relX);
	
});
	
$("body").mousemove(function(event){
	
	var mouseX = event.pageX;
	var mouseY = event.pageY;

	$('#dot').css('top', mouseY - 10);
	$('#dot').css('left', mouseX - 10);
});
	
	
	
});
	
