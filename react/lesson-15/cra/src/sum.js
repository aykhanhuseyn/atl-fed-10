function sum(a, b, precision = 2) {
	// return parseFloat((a + b).toFixed(precision));
	return (
		(a * Math.pow(10, precision) + b * Math.pow(10, precision)) /
		Math.pow(10, precision)
	);
	// return a + b;
}

export default sum;
