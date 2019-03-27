const year = (new Date()).getFullYear();
const yearSpan = document.getElementById("current-year");
yearSpan.textContent = year;

const form = document.getElementById("collatz-form");
form.addEventListener("submit", function(e) {
	e.preventDefault();

	let number = Number(document.getElementById("collatz-form-input").value);
	let count = 0;

	// if (number == "") { // If no value was entered...
	// 	// Make output area changes
	// 	console.log("Enter a value.");
	// } else if (typeof(number) !== "number") { // If the value enter is not a number...
	// 	// Make output area changes
	// 	console.log("Enter a numerical value.");
	// } else if (number % 1 !== 0) { // If the value entered is not an integer...
	// 	// Make output area changes
	// 	console.log("Enter an integral value.");
	// } else if (number <= 0) { // If the value enter is less or equal to 0...
	// 	// Make output area changes
	// 	console.log("Enter a non-zero positive value.");
	// } else { // If the value is valid...
	// 	const calculation = document.getElementById("collatz-output-calculation");
	// 	let line = document.createElement("p");
	// 	line.id = "line";
	// 	// console.log(number);
	// 	while (number != 1) {
	// 		++count;
	// 		calculation.textContent = "";
	// 		let previous = number;
	// 		if (number % 2 === 0) {
	// 			number = number / 2;
	// 			console.log(`${count}: ${previous} / 2 = ${number}`);
	// 		} else {
	// 			number = (number * 3) + 1;
	// 			console.log(`${count}: ${previous} x 3 + 1 = ${number}`);
	// 		}
	// 	}

	// 	console.log(`It took ${count} runs to get to 1`);
	// }

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
			let index = document.createElement("span");
			index.textContent = `${count}: `;
			let expression = document.createElement("span");
			let result = document.createElement("span");
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
		// console.log(`It took ${count} turns to get to 1`);
	}
});