//Асинхроность и синхроность/блок.интервал и не блок.интервал

/* function delayTime() {
	const endTime = Date.now() + 5000;
	while (Date.now() < endTime) { }
};

console.time('Time')
delayTime();
console.timeEnd('Time')
 */

/* console.time('Time')
setTimeout(() => {
	console.log('asdasdasdasd');
}, 3450);
console.timeEnd('Time') */

/* console.time('Time')
setInterval(() => {
	console.log('This');
}, 1000);
console.timeEnd('Time')
 */
/* const fs = require('fs');
fs.readFile('text.csv', (err, datta) => {
	console.log('read 1 time')
})
fs.readFile('text.csv', (err, datta) => {
	console.log('read 2 time')
})
fs.readFile('text.csv', (err, datta) => {
	console.log('read 3 time')
})
fs.readFile('text.csv', (err, datta) => {
	console.log('read 4 time')
})
fs.readFile('text.csv', (err, datta) => {
	console.log('read 5 time')
}) */

/* const fs = require('fs');

console.time('t');
for (let i = 0; i < 50000; i++) {
	fs.readFileSync('text.csv');
};
console.timeEnd('t');

console.time('T');
let count = 0;
for (let i = 0; i < 50000; i++) {
	fs.readFile('text.csv', (err, data) => {
		count++;
		if (count >= 50000) {
			console.timeEnd('T');
		};
	});
};
 */

i = {
	"id": 1,
	"name": "Leanne Graham",
	"username": "Bret",
	"email": "Sincere@april.biz",
	"address": {
		"street": "Kulas Light",
		"suite": "Apt. 556",
		"city": "Gwenborough",
		"zipcode": "92998-3874",
		"geo": {
			"lat": "-37.3159",
			"lng": "81.1496"
		}
	},
	"phone": "1-770-736-8031 x56442",
	"website": "hildegard.org",
	"company": {
		"name": "Romaguera-Crona",
		"catchPhrase": "Multi-layered client-server neural-net",
		"bs": "harness real-time e-markets"
	}
}


