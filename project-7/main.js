const generateButton = document.getElementById("generate");
const lengthInput = document.getElementById("lenght");

const RAW_LETTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const RAW_NUMBERS = "0123456789";
const RAW_SPECIAL_CHARS = '!@#$%^&*(),.?":{}|<>-_';

function generate(lenght) {
	if (lenght < 4) {
		return "The lenght must be greater or equal to 4";
	}
	const symbols = RAW_SPECIAL_CHARS.split("");
	const letters = RAW_LETTERS.split("");
	const numbers = RAW_NUMBERS.split("");

	let password = "";

	for (let i = 0; i < lenght; i++) {
		if (i === 0) {
			password += letters[Math.floor(Math.random() * letters.length)];
		} else {
			const random = Math.floor(Math.random() * 3);
			if (random === 0) {
				password += letters[Math.floor(Math.random() * letters.length)];
			} else if (random === 1) {
				password += numbers[Math.floor(Math.random() * numbers.length)];
			} else {
				password += symbols[Math.floor(Math.random() * symbols.length)];
			}
		}
	}

	return password;
}

generateButton.addEventListener("click", () => {
	try {
		const password = generate(parseInt(lengthInput.value));
		document.getElementById("result").innerHTML = password;
	} catch (error) {
		document.getElementById("result").innerHTML = error;
	}
});
