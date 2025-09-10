const a = document.getElementById("a");
const b = document.getElementById("b");
const result = document.getElementById("result");

const modal = document.getElementById("modal");

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
			if (bn === 0 && count < 5) {
				result.innerHTML = "You can't divide by zero";
				count++;
				if (count === 5) {
					modal.innerHTML =
						'<p>Ok, I will divide you better</p> <button id="close">Ok</button>';
					modal.style.display = "flex";
					document
						.getElementById("close")
						.addEventListener("click", () => {
							modal.style.display = "none";
						});
				} else if (count === 3) {
					modal.innerHTML =
						'<p>Please, don\'t divide by zero</p> <button id="close">Ok</button>';
					modal.style.display = "flex";
					document
						.getElementById("close")
						.addEventListener("click", () => {
							modal.style.display = "none";
						});
				} 
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
	calculate('+');
});

const minus = document.getElementById("minus");
minus.addEventListener("click", () => {
	calculate('-');
});

const multiply = document.getElementById("multiply");
multiply.addEventListener("click", () => {
	calculate('*');
});

const divide = document.getElementById("divide");
divide.addEventListener("click", () => {
	calculate('/');
});