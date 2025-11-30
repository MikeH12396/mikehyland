function calc(){
	// Preset array of numbers
	var numbers = [1,2,3,4,5];

	// Initialize max with the first number in the array
	var max = numbers[0];

	// Loop through the array to find the largest number
	for (var i = 1; i < numbers.length; i++) {
		if (numbers[i] > max) {
			max = numbers[i];
		}
	}
	// Show the largest number
	alert("The largest number is: " + max);
}