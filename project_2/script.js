//var fonts = [ "helvetica", "serif", "monospace"];
//var randomColor = color(Math.floor(Math.random()*180), Math.floor(Math.random()*60), Math.floor(Math.random()*225));
//          
//    var newColor = color(Math.floor(Math.random()*220), Math.floor(Math.random()*160), Math.floor(Math.random()*225));


// THE SENTENCE

$(function(){
	var ticker = 0;
	var sentence = ["<p> <div class = 'bigText'>Yanzhi Lai</div></p>",  "<p>is</p>" , "<p> a </p>", "<p>interdisciplinary</p>", "<p>designer.</p>" , "<p> She </p>", "<p>does</p>", "<p><div class = 'bigText'><a href = 'pd.html'> Product Design,</a></p></div>" , "<p><a href = 'uiux.html'> <div class = 'bigText'>UI/UX Design,</div></a></p>" , "<p><a href = 'film.html'><div class = 'bigText'>Filmmaking,</a></p>", "<p>and</p>", "<p><a href = 'stuff.html'><div class = 'bigText'>Some Other Stuff.</a></p></div>" ,"<a href = 'film/passenger.html'><img src='imgs/2.jpg'> </a>", " <p> <a href = 'mailto:yanzhilai10@gmail.com'> Contact her</a></p>"];

	var fadeDuration = 1000;
	
	
	
$(document).click(function(e){
			//div creation
			var div = $(' <div class = "text" id = "blah"> <div class = "textAnimation">')
				.css({
					"left":e.pageX + 'px',
					"top": e.pageY + 'px',
					"border": '5px', 
					"color": newColor,
					"animation":'slide-tb 02s ',
					"font-family": newFont,
					"background": newBgColor,
				})
			.append(sentence[ticker])
			.appendTo(document.body);
			ticker+=1;
		    $("#blah").attr("id",ticker)
	
			if(ticker >= 2){
			//create svg line
			div1 = $('#' + ticker);
			div2 = $('#' + (ticker-1));
			var pos1 = div1.position();
			var pos2 = div2.position();
			
			//var svg = document.getElementById('svg');
			//var newEl = document.createElementNS("https://www.w3.org/2000/svg", 'path');
			//newEl.setAttribute("d", "M" + pos1.left + "" + pos1.top + "" + pos2.left + "" + pos2.top);
			//newEl.style.stroke = "#000";
			//newEl.style.strokeWidth = "2px";
			//svg.appendChild(newEl);
				
			d3.select("#svg").append("polyline").attr("d", "M" + pos1.left + " " + pos1.top + " " + pos2.left + " " + pos2.top)
			.attr("stroke", "#000")
			.attr("stroke-width", "2px");
			}
					
});	
	
	$(document).ready(function(){
		var div = $(' <div class = "background"> ')
				.css({
					 
					"color": 'newColor',
				})
	});
	
	
	
});

	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDay();
	var hours = date.getHours();
	var minutes = date.getMinutes();

	var timestamp =  month +  "/" + day + "/" + year + " " + hours + ":" + minutes;
	$('#date').text(timestamp)
  

//RAMDOM TEXT STYLE

var fonts = ["monospace", "Lato", "sans-serif", "Chakra Petch", "Playfair Display"];
var colors = ["black", "chocolate", "green", "goldenrod", "salmon"];

var bgColors = ["#043E3F","yellow","#D2AC2F","#BF9266"];


var newFont = fonts[Math.floor(Math.random()*fonts.length)];
var newColor = colors[Math.floor(Math.random()*colors.length)];
var newBgColor = bgColors[Math.floor(Math.random()*bgColors.length)]




//CHANGING BACKGROUND COLOR
var c = document.getElementById("c");
var ctx = c.getContext("2d");
var cH;
var cW;
var bgColor = "#F4F6F1";
var animations = [];
var circles = [];

var colorPicker = (function() {
  var colors = [ "#F4F6F1", "#EAEBE7", "#BFC1BD", "#DFE8D1", "#FFE9E5"];
  var index = 0;
  function next() {
    index = index++ < colors.length-1 ? index : 0;
    return colors[index];
  }
  function current() {
    return colors[index]
  }
  return {
    next: next,
    current: current
  }
})();

function removeAnimation(animation) {
  var index = animations.indexOf(animation);
  if (index > -1) animations.splice(index, 1);
}

function calcPageFillRadius(x, y) {
  var l = Math.max(x - 0, cW - x);
  var h = Math.max(y - 0, cH - y);
  return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
}

function addClickListeners() {
  document.addEventListener("touchstart", handleEvent);
  document.addEventListener("mousedown", handleEvent);
};

function handleEvent(e) {
    if (e.touches) { 
      e.preventDefault();
      e = e.touches[0];
    }
    var currentColor = colorPicker.current();
    var nextColor = colorPicker.next();
    var targetR = calcPageFillRadius(e.pageX, e.pageY);
    var rippleSize = Math.min(200, (cW * .4));
    var minCoverDuration = 750;
    
    var pageFill = new Circle({
      x: e.pageX,
      y: e.pageY,
      r: 0,
      fill: nextColor
    });
    var fillAnimation = anime({
      targets: pageFill,
      r: targetR,
      duration:  Math.max(targetR / 2 , minCoverDuration ),
      easing: "easeOutQuart",
      complete: function(){
        bgColor = pageFill.fill;
        removeAnimation(fillAnimation);
      }
    });
    
    var ripple = new Circle({
      x: e.pageX,
      y: e.pageY,
      r: 0,
      fill: currentColor,
      stroke: {
        width: 3,
        color: currentColor
      },
      opacity: 1
    });
    var rippleAnimation = anime({
      targets: ripple,
      r: rippleSize,
      opacity: 0,
      easing: "easeOutExpo",
      duration: 900,
      complete: removeAnimation
    });
    
    var particles = [];
    for (var i=0; i<32; i++) {
      var particle = new Circle({
        x: e.pageX,
        y: e.pageY,
        fill: currentColor,
        r: anime.random(24, 48)
      })
      particles.push(particle);
    }
    var particlesAnimation = anime({
      targets: particles,
      x: function(particle){
        return particle.x + anime.random(rippleSize, -rippleSize);
      },
      y: function(particle){
        return particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15);
      },
      r: 0,
      easing: "easeOutExpo",
      duration: anime.random(1000,1300),
      complete: removeAnimation
    });
    animations.push(fillAnimation, rippleAnimation, particlesAnimation);
}

function extend(a, b){
  for(var key in b) {
    if(b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
}

var Circle = function(opts) {
  extend(this, opts);
}

Circle.prototype.draw = function() {
  ctx.globalAlpha = this.opacity || 1;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
  if (this.stroke) {
    ctx.strokeStyle = this.stroke.color;
    ctx.lineWidth = this.stroke.width;
    ctx.stroke();
  }
  if (this.fill) {
    ctx.fillStyle = this.fill;
    ctx.fill();
  }
  ctx.closePath();
  ctx.globalAlpha = 1;
}

var animate = anime({
  duration: Infinity,
  update: function() {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, cW, cH);
    animations.forEach(function(anim) {
      anim.animatables.forEach(function(animatable) {
        animatable.target.draw();
      });
    });
  }
});

var resizeCanvas = function() {
  cW = window.innerWidth;
  cH = window.innerHeight;
  c.width = cW * devicePixelRatio;
  c.height = cH * devicePixelRatio;
  ctx.scale(devicePixelRatio, devicePixelRatio);
};

(function init() {
  resizeCanvas();
  if (window.CP) {
    // CodePen's loop detection was causin' problems
    // and I have no idea why, so...
    window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000; 
  }
  window.addEventListener("resize", resizeCanvas);
  addClickListeners();
  if (!!window.location.pathname.match(/fullcpgrid/)) {
    startFauxClicking();
  }
  handleInactiveUser();
})();

function handleInactiveUser() {
  var inactive = setTimeout(function(){
    fauxClick(cW/2, cH/2);
  }, 2000);
  
  function clearInactiveTimeout() {
    clearTimeout(inactive);
    document.removeEventListener("mousedown", clearInactiveTimeout);
    document.removeEventListener("touchstart", clearInactiveTimeout);
  }
  
  document.addEventListener("mousedown", clearInactiveTimeout);
  document.addEventListener("touchstart", clearInactiveTimeout);
}

function startFauxClicking() {
  setTimeout(function(){
    fauxClick(anime.random( cW * .2, cW * .8), anime.random(cH * .2, cH * .8));
    startFauxClicking();
  }, anime.random(200, 900));
}

function fauxClick(x, y) {
  var fauxClick = new Event("mousedown");
  fauxClick.pageX = x;
  fauxClick.pageY = y;
  document.dispatchEvent(fauxClick);
}