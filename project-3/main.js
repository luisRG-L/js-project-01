const el_list = [];

function ListComponent(props) {
	return `<li id="${props.name}">
		${props.name}
		<button id="delete-${props.name}">Delete</button>
		</li>`;
}

const btn = document.getElementsByClassName("add")[0];
const err = document.getElementsByClassName("err")[0];

btn.addEventListener("click", () => {
	const name = document.getElementById("name").value;
	err.innerHTML = "";
	if (name === "") {
		err.innerHTML = "Name cannot be empty";
		return;
	}
	if (el_list.includes(name)) {
		err.innerHTML = "Name already exists";
		return;
	}
	const list = document.getElementById("list");
	list.innerHTML += ListComponent({ name });
	el_list.push(name);
	document.getElementById("name").value = "";
	document.getElementById(`delete-${name}`).addEventListener("click", () => {
		document.getElementById(name).remove();
		el_list.splice(el_list.indexOf(name), 1);
	});
});
