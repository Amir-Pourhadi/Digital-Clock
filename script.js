setInterval(() => {
	const currentTime = new Date();
	let hours = currentTime.getHours();
	let minutes = currentTime.getMinutes();
	let seconds = currentTime.getSeconds();

	const period = hours >= 12 ? "PM" : "AM";
	if (hours > 12) hours -= 12;
	if (minutes < 10) minutes = "0" + minutes;
	if (seconds < 10) seconds = "0" + seconds;

	const clockTime = `${hours}:${minutes}:${seconds} ${period}`;
	document.getElementById("clock").innerText = clockTime;
}, 1000);
