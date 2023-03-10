class product {
	id;
	name;
	description;
	price;
	weight;
	size;
	constructor(parametrs) {
		this.id = parametrs.id;
		this.name = parametrs.name;
		this.description = parametrs.description;
		this.price = parametrs.price;
		this.weight = parametrs.weight;
		this.size = parametrs.size;
	};
	exchange(x) {
		if (x === 'USD') {
			return this.price = this.price / 4.25
		} else if (x === 'EUR') {
			return this.price = this.price / 4.60
		} else if (x === 'UAN') {
			return this.price = this.price * 8.30
		};
	};
};
class Cart {
	product = []
	discounte = 50;
	addProduct(item) {
		this.product.push(item)
	};
	deleteProduct(index) {
		this.product.splice(index, 1)
	};
	getFullPrice() {
		return 'Cost: ' + this.product.reduce((sum, item) => sum + item.price, 0);
	};
	discountedPrice() {
		const fullPrice = this.product.reduce((sum, item) => sum + item.price, 0);
		const fullPriceRedate = fullPrice - (fullPrice / 100 * this.discounte)
		return 'Cost with your personal discount: ' + fullPriceRedate;
	};
	deliveryPrice(min, fixed) {
		const fullCartPrice = this.product.reduce((sum, item) => sum + item.price, 0);
		const discountedPrice = fullCartPrice - (fullCartPrice / 100 * this.discounte)
		let deliveryPrice;
		if (discountedPrice >= min) {
			deliveryPrice = 'You can benefit from the free delivery.'
		} else if (discountedPrice < min) {
			deliveryPrice = 'Your shipping coast: ' + fixed;
		} return deliveryPrice;
	};
	howManyProducts() {
		return this.product.length
	};
	getUniqueProducts() {
		const uniqueId = new Set();
		this.product.forEach(item =>
			uniqueId.add(item.id));
		return uniqueId.size;
	};
};

const productOne = new product({
	id: 1215,
	name: 'Asus',
	description: 'Laptop',
	price: 14550,
	weight: '4kg',
	size: 'L'
})
const productTwo = new product({
	id: 1796,
	name: 'Apple',
	description: 'IPhone',
	price: 14000,
	weight: '40gr',
	size: 'S'
})
const productThree = new product({
	id: 3946,
	name: 'Lenovo',
	description: 'Tablet',
	price: 2500,
	weight: '0.5kg',
	size: 'M'
})
const productFour = new product({
	id: 3946,
	name: 'Lenovo',
	description: 'Tablet',
	price: 2500,
	weight: '0.5kg',
	size: 'M'
})
const cart = new Cart(
)
cart.addProduct(productOne);
cart.addProduct(productTwo);
cart.addProduct(productThree);
cart.addProduct(productFour);
console.log(cart.getFullPrice(), cart.discountedPrice(), cart.deliveryPrice(10000, 500), cart.howManyProducts(), cart.getUniqueProducts())