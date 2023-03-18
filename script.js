function calculateBMI() {
	// Get input values
	var weight = document.getElementById("weight").value;
	var height = document.getElementById("height").value;

	// Calculate BMI
	var bmi = weight / ((height / 100) * (height / 100));

	// Display result
	document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(1);
}
