const elements = [
	"january",
	"february",
	"march",
	"april",
	"may",
	"june",
	"july",
	"august",
	"september",
	"october",
	"november",
	"december",
];

const content = document.getElementById("content");
let query = "";

content.addEventListener("input", () => {
	query = content.value;
	update();
});

function update() {
	const list = document.getElementById("list");
	list.innerHTML = "";
	for (let i = 0; i < elements.length; i++) {
		if (!elements[i].toLowerCase().includes(query.toLowerCase())) {
			continue;
		}
		list.innerHTML += `<li>${elements[i]}</li>`;
	}
}

update();
