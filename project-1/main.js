const modal = document.querySelector("#modal");
const modal_container = document.querySelector(".m-container");

let count = 0;

function generateColor() {
	const R = Math.floor(Math.random() * 256);
	const G = Math.floor(Math.random() * 256);
	const B = Math.floor(Math.random() * 256);
	const middle = Math.floor((R + G + B) / 3);
	return [`rgb(${R}, ${G}, ${B})`, middle > 128 ? "black" : "white"];
}

function changeColor() {
	const color = generateColor();
	document.body.style.backgroundColor = color[0];
	document.body.style.color = color[1];
	count++;
	if (count === 10) {
		modal_container.innerHTML =
			'<p>I saw a chameleon!</p> <button id="close">Ok</button> <button id="want">I want to be a chameleon</button>';
		modal.style.display = "flex";
		document.getElementById("close").addEventListener("click", () => {
			modal.style.display = "none";
		});
		document.getElementById("want").addEventListener("click", () => {
			modal.style.display = "none";
			setInterval(() => {
				changeColor();
			}, 1000);
		});
	}
}
const button = document.getElementById("change-color");
button.addEventListener("click", changeColor);
