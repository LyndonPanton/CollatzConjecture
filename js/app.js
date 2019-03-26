const year = (new Date()).getFullYear();
const yearSpan = document.getElementById("current-year");
yearSpan.textContent = year;

const form = document.getElementById("collatz-form");
form.addEventListener("submit", function(e) {
	e.preventDefault();
});