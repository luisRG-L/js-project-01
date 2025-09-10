const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const time = document.getElementsByTagName("p")[0];

let timer = null;
let seconds = 0;

function update() {
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);

	const su = (seconds % 60) % 10;
	const sd = Math.floor((seconds % 60) / 10);
	const ss = `${sd}${su}`;

	const mu = (minutes % 60) % 10;
	const md = Math.floor((minutes % 60) / 10);
	const ms = `${md}${mu}`;

	const hu = hours % 10;
	const hd = Math.floor(hours / 10);
	const hs = `${hd}${hu}`;

	time.innerHTML = `${hs}:${ms}:${ss}`;
}

function startTimer() {
	if (timer) {
		clearInterval(timer);
	}
	timer = setInterval(() => {
		seconds++;
		update();
	}, 1000);
}

function stopTimer() {
	clearInterval(timer);
}

function resetTimer() {
	clearInterval(timer);
	seconds = 0;
	update();
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

update();
