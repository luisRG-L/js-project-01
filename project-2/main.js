const modal = document.getElementsByClassName("modal-container")[0];

let count = 0;

function update() {
	document.getElementById("counter").innerHTML = count;
	if (count > 1000) {
		modal.innerHTML =
			'<p>Wait... You are a hacker...</p> <button id="close">Ok</button>';
	} else if (count === 500) {
		modal.innerHTML = '<p>Are you sure?</p> <button id="close">Ok</button>';
	} else if (count === 200) {
		modal.innerHTML =
			'<p>Are you a robot?</p> <button id="close">Ok</button>';
	} else if (count === 100) {
		modal.innerHTML =
			'<p>You clicked a lot</p> <button id="close">Ok</button>';
	}
	if (count === 100 || count === 200 || count === 500 || count === 1000) {
		modal.style.display = "flex";
		document.getElementById("close").addEventListener("click", () => {
			modal.style.display = "none";
		});
	}
}

function increment() {
	count++;
	update();
}

const button = document.getElementById("clicker");
button.addEventListener("click", increment);

update();
