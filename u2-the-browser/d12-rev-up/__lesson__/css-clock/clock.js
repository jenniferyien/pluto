var minuteHand = document.querySelector("#minute-hand");
var secondHand = document.querySelector("#second-hand");
var hourHand = document.querySelector("#hour-hand");
var date 
var clock = function(){
	var secondDegs = 0;
	var minuteDegs = 0;
	var hourDegs = 0;
	var time = window.setInterval(function(){
		secondDegs += 6;
		minuteDegs += 1/10;
		hourDegs += 1/120;
		secondHand.style.transform = "rotate("+secondDegs+"deg)";
		minuteHand.style.transform = "rotate("+minuteDegs+"deg)";
		hourHand.style.transform = "rotate("+hourDegs+"deg)";
	}, 1000);

}

window.addEventListener("load",clock);