const a = document.getElementById("a");
const b = document.getElementById("b");
const result = document.getElementById("result");

let count = 0;

function calculate(operation) {
	const an = parseInt(a.value);
	const bn = parseInt(b.value);
	if (isNaN(an) || isNaN(bn)) {
		result.innerHTML = "Please enter a number";
		return;
	}
	switch (operation) {
		case "+":
			result.innerHTML = an + bn;
			break;
		case "-":
			result.innerHTML = an - bn;
			break;
		case "*":
			result.innerHTML = an * bn;
			break;
		case "/":
			if (bn === 0) {
				result.innerHTML = "You can't divide by zero";
				count++;
				return;
			}
			result.innerHTML = an / bn;
			break;
		default:
			result.innerHTML = "";
	}
}

const plus = document.getElementById("plus");
plus.addEventListener("click", () => {
	calculate("+");
});

const minus = document.getElementById("minus");
minus.addEventListener("click", () => {
	calculate("-");
});

const multiply = document.getElementById("multiply");
multiply.addEventListener("click", () => {
	calculate("*");
});

const divide = document.getElementById("divide");
divide.addEventListener("click", () => {
	calculate("/");
});
