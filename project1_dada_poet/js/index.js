//RANDOM PAGE STYLING

function myFunction() {
    location.reload();
}


function applyRandCSS(){
  var css = ["1.css", "2.css", "3.css", "4.css", "5.css", "6.css","7.css",  "8.css"];
  var randomFile = css[Math.round(Math.random()*(css.length-1))];
  var ss = document.createElement("link");

  ss.type = "text/css";
  ss.rel = "stylesheet";
  ss.href = randomFile;

  document.getElementsByTagName("head")[0].appendChild(ss);
}
	applyRandCSS()



// MY POEM


// WORDS

var prep = ['about', 'above', 'across', 'after', 'against', 'among', 'around', 'at'];
var noun = ['miracle','ocean', 'fireworks', 'reality', 'passengers', 'heart', 'nature', 'roses', 'lion', 'tiger', 'penguin', 'apple', 'dream', 'stars', 'goddess','Happinesss'];
var adj = ['a sparkling', 'a spicy', 'a passionate', 'a bright', 'a bubbly', 'a sentimental', 'an absurd', 'a radical', 'a rebellious','a dusty','a vivid','','a bizarre'];
//var article = ['a', 'an', 'the'];
//var subject = ['I', 'he', 'she', 'they', 'it'];
var verbPrep = ['sit at', 'jump into', 'fall into', 'slide past'];
var verb = ['Inspire', 'guide', 'kiss', 'improve', 'imagine', 'motivate'];
var articleNoun = ['A cat', 'The ocean', 'A wine glass', 'A lion', 'An apple', 'A shooting star','The snow'];
var adj2 = ['a dreamy', 'a delightful', 'a dreadful', 'a reckless', 'an invisible', 'a warm-hearted'];


// SENTANCE STRUCTURES

var Sentance1 = 
				"<p>" + "Like" + " " + adj[Math.floor(Math.random()*adj.length)] + " " + 
				noun[Math.floor(Math.random()*noun.length)] + "." + "</br>" + "</p>";

var Sentance2 = 
				"<p>" + "I" + " " + verbPrep[Math.floor(Math.random()*verbPrep.length)] + " "  + adj[Math.floor(Math.random()*adj.length)] + " " + noun[Math.floor(Math.random()*noun.length)] + ". " + "</br>"+ "</p>";

var Sentance3 = 
				 "<p>" + articleNoun[Math.floor(Math.random()*articleNoun.length)] + " " + prep[Math.floor(Math.random()*prep.length)] + " " + " " + noun[Math.floor(Math.random()*noun.length)] + ". " + "</br>"+ "</p>";

var Sentance4 = 
				"<p>" + articleNoun[Math.floor(Math.random()*articleNoun.length)] + " " + verb[Math.floor(Math.random()*verb.length)] + " " + adj2[Math.floor(Math.random()*adj2.length)] + " " + noun[Math.floor(Math.random()*noun.length)] + ". " + "</p>";

var Sentance5 = 
				"<p>" + "I" + " " + verbPrep[Math.floor(Math.random()*verbPrep.length)] + " " + adj[Math.floor(Math.random()*adj.length)] + " " + noun[Math.floor(Math.random()*noun.length)] + ". " + "</p>";

var Sentance6 = 
				"<p>" + " " + verb[Math.floor(Math.random()*verb.length)] + " " + " " + adj[Math.floor(Math.random()*adj.length)] + " " + noun[Math.floor(Math.random()*noun.length)] + ". " + "</p>";
                 	
//POEM STRUCTURES


//SET SENTANCES
var sentances = [ Sentance1 , Sentance2 , Sentance3 , Sentance4, Sentance5,  Sentance6];

//GET RANDOM FIRST SENTANCE
var randomFirst = Math.floor(Math.random()*sentances.length);
//GET RANDOM LENGTH
var numberOfSentances = Math.floor(Math.random()*sentances.length);


//FIRST SENTANCE
	$('#Poem1').append("<div id='first'>" + sentances[randomFirst] + "</div>");

for(i=0; i<numberOfSentances;i++){
	if(i==randomFirst){
	}
	else{
		//ALL THE REST OF THE SENTANCES
		$('#Poem1').append( "<div id='sentance"+i+"'>" + sentances[i] + "<div>");
		}

}
								   
