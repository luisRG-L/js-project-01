const el_list = [];

const btn = document.getElementsByClassName("add")[0];
const delete_btn = document.getElementById("delete-completed");
const err = document.getElementsByClassName("err")[0];

function ListComponent(props) {
	return `<li id="item-${props.name}">
		${props.name}
		<input type="checkbox" id="done-${props.name}" ${props.done ? "checked" : ""}>
		</li>`;
}

function update() {
	const list = document.getElementById("list");
	list.innerHTML = "";
	for (let i = 0; i < el_list.length; i++) {
		list.innerHTML += ListComponent(el_list[i]);
	}
	el_list.forEach((item) => {
		const checkbox = document.getElementById(`done-${item.name}`);
		if (checkbox) {
			checkbox.addEventListener("change", () => {
				item.done = checkbox.checked;
				save();
				const el = document.getElementById(`item-${item.name}`);
				if (checkbox.checked) {
					el.style.textDecoration = "line-through";
				} else {
					el.style.textDecoration = "none";
				}
			});
		}
	});
}

function save() {
	localStorage.setItem("list", JSON.stringify(el_list));
}

btn.addEventListener("click", () => {
	const name = document.getElementById("name").value;
	add(name);
	document.getElementById("name").value = "";
});

delete_btn.addEventListener("click", () => {
	const elements = el_list.filter((item) => item.done);
	elements.forEach((item) => {
		document.getElementById(`item-${item.name}`).remove();
		el_list.splice(el_list.indexOf(item), 1);
	});
	update();
	save();
});

function add(name, done = false) {
	err.innerHTML = "";
	if (name === "") {
		err.innerHTML = "Name cannot be empty";
		return;
	}
	if (el_list.find((item) => item.name === name)) {
		err.innerHTML = "Name already exists";
		return;
	}
	el_list.push({
		name,
		done,
	});
	update();
}
function load() {
	const list = JSON.parse(localStorage.getItem("list"));
	if (list) {
		list.forEach(item => {
			add(item.name, item.done);
		});
		update();
	}
}
if (el_list.length === 0) {
	load();
}