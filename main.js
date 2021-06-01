setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock(){
	const currentDate = new Date()
	const secondsRatio = currentDate.getSeconds() / 60
	const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
	const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

	setRotation(secondHand, secondsRatio)
	setRotation(minuteHand, minutesRatio)
	setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio){
	element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock()


var color = ["#403d3d","#2b303b", "#08132b","#000000"]
var i = 0;
document.querySelector("button").addEventListener("click", function(){
i = i < color.length ? ++i : 0;
document.querySelector("body").style.background = color[i]
})


function showTime(){
var date = new Date();
var h = date.getHours(); // 0 - 23
var m = date.getMinutes(); // 0 - 59
var s = date.getSeconds(); // 0 - 59
			

h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

var time = h + ":" + m + ":" + s;
document.getElementById("MyClockDisplay").innerText = time;
document.getElementById("MyClockDisplay").textContent = time;

setTimeout(showTime, 1000);
}

showTime();


