
// THE SENTENCE

var clicker = document.getElementById('clicker');
var textClassList = document.getElementsByClassName('text');

$(function(){
	var ticker = 0;
	var sentence = ["<p> <div class = 'myName' >Yanzhi Lai</div></p>", "<p> <div class = ''>is a designer.</div></p>","<p> <div class = ''>she does</div></p>", "<p><div class = 'bigText'><a href = 'product.html'>Product Design,</a></p></div>" , "<p><a href = 'graphic.html'> <div class = 'bigText'>Graphic Design,</div></a></p>" , "<p><a href = 'film.html'><div class = 'bigText'>Filmmaking,</a></p>", "<p> <div class = ''>and</div></p>", "<p><a href = 'other.html'><div class = 'bigText'>Other Stuff.</a></p></div>" ," <p> <div class = 'bigText'><a href = 'mailto:yanzhilai10@gmail.com'> Contact her</a></p></div>"];

	var fadeDuration = 1000;
	
	
$(document).mousemove(function(e) {
    $('.logo').offset({
        left: e.pageX - 0,
        top: e.pageY - 5
    });
});

//text
	
$(clicker).click(function(e){
			$(".clickMe").fadeOut()
			if(ticker >= sentence.length){
				while(textClassList[0])
					{
						textClassList[0].parentNode.removeChild(textClassList[0]);
					}
				ticker = 0;
			}
			//div creation
			var div = $(' <div class = "text" id = "blah"> <div class = "textAnimation">')
				.css({
					"left":e.pageX + 'px',
					"top": e.pageY + 'px',
					"font-family": newFont,
					"letter-spacing": '2px',
					"font-weight": '400',
					"text-transform": 'lowercase',
					"letter-spacing": '2px',
					"font-size": '15px',
//					"border-width": '1px', 
//					"color": newColor,
//					"animation":'slide-tb 02s ',
//					"font-family": newFont,
//					"background": 'none',
//					"border-style":'solid',
//					"border-color": newBgColor,
//					"animation":'slide-tb 02s, borderColors 20s infinite alternate',
//					"z-index":zIndex,
					
				})
			.append(sentence[ticker])
			.appendTo(document.body);
			ticker+=1;
			$("#blah").attr("id",ticker) // finds the blah id and makes it equal to ticker			
			
				var div = $(' <div class = "text" id = "oval"> ')
				.css({
					"left":e.pageX + 'px',
					"top": e.pageY + 'px',
					"border-width": '1px', 
					"color": newColor,		
					"background": 'none',
					"border-style":'solid',
					"border-width":'1px',
					"animation":'slide-tb 02s, borderColors 20s infinite alternate',
					"border-radius":' 60%',
					"height": '1000px',
					"width": '150px',
	
					"cursor":'none',
					"border-style": 'solid'
				})	
			.append()
			.appendTo(document.body);
	});
});



//RAMDOM TEXT STYLE

var fonts = ["Lato"];
var colors = [ "black"];
var bgColors = ["yellow","green","cyan"];


var newFont = fonts[Math.floor(Math.random()*fonts.length)];
var newColor = colors[Math.floor(Math.random()*colors.length)];
var newBgColor = bgColors[Math.floor(Math.random()*bgColors.length)]


//toggle from dada

function toggle() {
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
}


////fade out text
//
//setTimeout(fade_out, 5000);
//
//function fade_out() {
//  $("#n").fadeOut().empty();
//}

//renew page

function reload() {
    location.reload();
}