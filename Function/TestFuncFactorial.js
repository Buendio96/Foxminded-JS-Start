const factorial = (number) => {
	if (typeof number == 'undefined') {
		throw new Error('Number has been found, please put a correct symbol')
	} else if (typeof number !== 'number') {
		throw new Error('Number isn`t a number, please put a correct symbol')
	}
	let X = 1;
	for (let i = 1; i <= number; i++) {
		X = X * i;
	}
	return X;
}
try {
	console.log(factorial(9));
} catch (error) {
	console.error(error);
}