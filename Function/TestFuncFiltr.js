const arrayNum = [
	2, -13, 412, -13, 1, -4, 13, -14, 12, 123, -123, -32, -32, 1, -14, 12, -123, -32, 10, -123, -32, -32, 1, -14, 12, -123, -32, 10
]


function filtrForArray(x, y) {
	const result = []
	x.forEach(item => {
		if (item > y) {
			result.push(item);
		};
	});
	return result.length;
};


const end = filtrForArray(arrayNum, 0)
console.log(end)
