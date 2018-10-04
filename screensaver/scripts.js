$(document).ready(function(){
	
	var bgImages = ["imgs/MO.jpg","imgs/liffaa.jpg","imgs/florr.jpg","imgs/pass1.jpg","imgs/pass2.jpg","imgs/pass3.jpg"];
	var count = bgImages.length
	var ticker = 0; // tick 
	var time = 0;
	
	var message = "Hello"
	var name = "User"
	var date = new Date();
	
	
	$("#text").text(message + " " + name + ",");
	$("#date").text(date);
	
	function screensaver(){
		
		var url = "url(" +bgImages[ticker] + ")";
		$("#screensaver").css("background-image", url);
		
		var tickerText = (ticker + 1) + "/" + count ;
		$("#ticker").text(tickerText);
		
		ticker+=1;
		if(ticker == count){
			ticker = 0;
		}
	}
	//screensaver();
	
	
	
	$(document).click(function(){
	//	screensaver();
	})
	
	
	setInterval (function(){
		screensaver()
	},2000)
	

	$(document).mousemove(function(){
		ticker=0;
		time=0;
		$("#screensaver").css("opacity",0)
		$t("#ticker").css("opacity",0)
	})
	
	setInterval(function(){
		time+=1;
		if(time>2){
			$("#screensaver").css("opacity",1)
			$("#ticker").css("opacity", 1)
		}
		else{
			
		}
	},1000)
s

})