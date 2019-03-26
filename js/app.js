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

	}
});