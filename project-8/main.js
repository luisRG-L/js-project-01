const text = document.getElementById("text");
const result = document.getElementById("result");
const check = document.getElementById("check");

check.addEventListener("click", () => {
	const text = document.getElementById("text").value;

	const characters = text.split("").filter((char) => !char.match(/[ \n]/));
	const words = text.split(" ");

	const charCount = characters.length;
	const wordCount = words.length;

	result.innerHTML = `Characters: ${charCount}, Words: ${wordCount}`;
});
