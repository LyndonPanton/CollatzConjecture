const year = (new Date()).getFullYear();
const yearSpan = document.getElementById("current-year");
yearSpan.textContent = year;

const form = document.getElementById("collatz-form");
form.addEventListener("submit", function(e) {
	e.preventDefault();

	let number = Number(document.getElementById("collatz-form-input").value);
	let count = 0;

	let area = document.getElementById("collatz-output-calculation");

	if (number == "") { // If no value was entered..
		console.log("Enter a value that is not 0.");
		area.textContent = "Enter a value";
	} else if (typeof(number) !== "number") { // If the value enter was not a number..
		console.log("Enter a numerical value");
		area.textContent = "Enter a numerical value";
	}  else if (number <= 0) { // If the value entered was not positive..
		console.log("Enter a non-zero positive value");
		area.textContent = "Enter a non-zero positive value";
	} else if (number % 1 !== 0) { // If the value entered was not an integer..
		console.log("Enter an integral value");
		area.textContent = "Enter an integral value";
	} else { // If the value entered was valid..
		console.log("Valid value entered");
		while (area.firstChild) {
			area.removeChild(area.firstChild);
		}

		while (number !== 1) {
			++count;

			let line = document.createElement("div");
			line.className = "collatz-output-line";

			let index = document.createElement("span");
			index.className = "collatz-output-index";
			index.textContent = `${count}: `;

			let expression = document.createElement("span");
			expression.className = "collatz-output-expression";

			let result = document.createElement("span");
			result.className = "collatz-output-result";

			let previous = number;

			if (number % 2 === 0) {
				number = number / 2;
				expression.textContent = `${previous} / 2 = `;
			} else {
				number = (number * 3) + 1;
				expression.textContent = `(${previous} * 3) + 1 = `;
			}

			result.textContent = `${number}`;

			line.appendChild(index);
			line.appendChild(expression);
			line.appendChild(result);

			area.appendChild(line);
		}

		document.getElementById("collatz-output-count").textContent = count;
	}
});