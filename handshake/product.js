////click image shows up attempt
//$(function(){
//	var ticker = 0;
//	var sentence = ["<p> <div class = 'myName' onclick = 'reload()'>Yanzhi Lai</div></p>", "<p> <div class = ''>is a designer.</div></p>","<p> <div class = ''>she does</div></p>", "<p><div class = 'bigText'><a href = '../project_2%20copy%206/product/index.html'>Product Design,</a></p></div>" , "<p><a href = 'graphic.html'> <div class = 'bigText'>Graphic Design</div></a></p>" , "<p><a href = 'film.html'><div class = 'bigText'>Filmmaking</a></p>", "<p> <div class = ''>and</div></p>", "<p><a href = 'stuff.html'><div class = 'bigText'>Other Stuff</a></p></div>" ," <p> <a href = 'mailto:yanzhilai10@gmail.com'> Contact her</a></p>"];
//
//	var fadeDuration = 1000;
//	
//	
//$(document).mousemove(function(e) {
//    $('.logo').offset({
//        left: e.pageX - 0,
//        top: e.pageY - 5
//    });
//});
//
//$(clicker).click(function(e){
//			$(".clickMe").fadeOut()
//			if(ticker >= sentence.length-1){
//				while(textClassList[0])
//					{
//						textClassList[0].parentNode.removeChild(textClassList[0]);
//					}
//				ticker = 0;
//			}
//			//div creation
//			var div = $(' <div class = "text" id = "blah"> <div class = "textAnimation">')
//				.css({
//					
//					
//				})
//			.append(sentence[ticker])
//			.appendTo(document.body);
//			ticker+=1;
//			$("#blah").attr("id",ticker) // finds the blah id and makes it equal to ticker			
//
//	});
//
//	
	
//	
//var title01 = document.getElementById("title01");
//var image01 = document.getElementById("mo");
//
//$(title01).mouseenter(function(){
//	$(image01).css("transform", "scale(1)");
//})
//$(title01).mouseleave(function(){
//	$(image01).css("transform", "scale(0)");
//})

//img1 toggle

var img1 = document.getElementById("img1");
	        img1.style.display = "none";

function toggle1() {
    if (img1.style.display === "none") {
        img1.style.display = "block";
    } else {
        img1.style.zindex = "block";
    }
}

//img2 toggle

var img2 = document.getElementById("img2");
	        img2.style.display = "none";

function toggle2() {
    if (img2.style.display === "none") {
        img2.style.display = "block";
    } else {
        img2.style.display = "block";
    }
}

//img3 toggle

var img3 = document.getElementById("img3");
	        img3.style.display = "none";

function toggle3() {
    if (img3.style.display === "none") {
        img3.style.display = "block";
    } else {
        img3.style.display = "block";
    }
}

//img4 toggle

var img4 = document.getElementById("img4");
	        img4.style.display = "none";

function toggle4() {
    if (img4.style.display === "none") {
        img4.style.display = "block";
    } else {
        img4.style.display = "block";
    }
}