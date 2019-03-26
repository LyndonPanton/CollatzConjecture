const year = (new Date()).getFullYear();
const yearSpan = document.getElementById("current-year");
yearSpan.textContent = year;

const form = document.getElementById("collatz-form");
form.addEventListener("submit", function(e) {
	e.preventDefault();

	let number = Number(document.getElementById("collatz-form-input").value);
	let count = 0;

	if (number == "") { // If no value was entered...
		// Make output area changes
		console.log("Enter a value.");
	} else if (typeof(number) !== "number") { // If the value enter is not a number...
		// Make output area changes
		console.log("Enter a numerical value.");
	} else if (number % 1 !== 0) { // If the value entered is not an integer...
		// Make output area changes
		console.log("Enter an integral value.");
	} else if (number <= 0) { // If the value enter is less or equal to 0...
		// Make output area changes
		console.log("Enter a non-zero positive value.");
	} else { // If the value is valid...
		const calculation = document.getElementById("collatz-output-calculation");
		let line = document.createElement("p");
		line.id = "line";
		// console.log(number);
		while (number != 1) {
			++count;
			calculation.textContent = "";
			let previous = number;
			if (number % 2 === 0) {
				number = number / 2;
				console.log(`${count}: ${previous} / 2 = ${number}`);
			} else {
				number = (number * 3) + 1;
				console.log(`${count}: ${previous} x 3 + 1 = ${number}`);
			}
		}

		console.log(`It took ${count} runs to get to 1`);
	}
});