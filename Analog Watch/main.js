

setInterval(()=>{
	var a = new Date();

	var saniye = document.querySelector("#secs");
	var deqiqe = document.querySelector("#mins");
	var saat = document.querySelector("#hrs");

	saniye.style.transform = `rotateZ(${a.getSeconds()*6+a.getMilliseconds()/166.6}deg)`;
	deqiqe.style.transform = `rotateZ(${a.getMinutes()*6+a.getSeconds()/10}deg)`;
	hrs.style.transform = `rotateZ(${a.getHours()*30+a.getMinutes()/2}deg)`;



},1);