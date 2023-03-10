class Product {
	#id;
	#name;
	#price;
	#discription;
	constructor(params) {
		this.#id = params.id;
		this.#name = params.name;
		this.#price = params.price;
		this.#discription = params.discription;
	};
	get id() {
		return `Id: ${this.#id}`
	};
	set id(id) {
		this.#id = 'Your new personality ID: ' + id;
	};
	get name() {
		return `Product name: ${this.#name}`
	};
	set name(name) {
		this.#name = name;
	};
	get price() {
		return this.#price;
	};
	set price(price) {
		this.#price = price;
	};
	get discription() {
		return this.#discription;
	};
	set discription(discription) {
		this.#discription = discription;
	}
	getPrice(x) {
		if (x === 'USD') {
			return Math.floor(this.price / 4.25) + ' $'
		} else if (x === 'EUR') {
			return Math.floor(this.price / 4.60) + ' €'
		} else if (x === 'UAN') {
			return Math.floor(this.price * 8.30) + ' ₴'
		};
	};
	getInfo() {
		return this.#discription;
	};
};


class Laptop extends Product {
	size;
	weight;
	mark;
	constructor(params) {
		super(params)
		this.size = params.size;
		this.weight = params.weight;
		this.mark = params.mark;
	};
	getInfo() {
		return (`This laptop from the brand: ${this.name} ${this.mark}\n Discrition: ${this.discription}\n The weight of this product consists of: ${this.weight} (in kilograms)\n The size of this product: ${this.size} (in centimeters)`)
	}
};


class Monitor extends Product {
	diagonal;
	weight;
	typeOfMatrix;
	brightness;
	constructor(params) {
		super(params)
		this.diagonal = params.diagonal;
		this.weight = params.weight;
		this.typeOfMatrix = params.typeOfMatrix;
		this.brightness = params.brightness;
	};
	getInfo() {
		return (`This monitor from the brand: ${this.name}\n Discrition: ${this.discription}\n Type of matrix and display brightness: ${this.typeOfMatrix} /${this.brightness} cd/m²\n The weight of this product consists of: ${this.weight} (in kilograms)
		`)
	}
};


class Headphone extends Product {
	frequency;
	type;
	weight;
	constructor(params) {
		super(params)
		this.frequency = params.frequency;
		this.type = params.type;
		this.weight = params.weight;
	};
	getInfo() {
		return (`This headphones from the brand: ${this.name} (${this.type})\n Discrition: ${this.discription}\n The weight of this product consists of: ${this.weight} (in grams)\n The frequency sound: ${this.frequency} `)
	}
};

const asus = new Laptop({
	id: 1001,
	name: 'Asus',
	price: 5400,
	discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
	size: '50x40x3.2',
	weight: 3.4,
	mark: 'TUF Gaming'

});
const lenovo = new Laptop({
	id: 020,
	name: 'Lenovo',
	price: 5780,
	discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
	size: '48x40x2',
	weight: 4,
	mark: 'Legion'
});

const hp = new Monitor({
	id: 301,
	name: 'HP',
	price: '1600',
	discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, necessitatibus!',
	diagonal: 34,
	weight: 1.2,
	typeOfMatrix: 'IPS',
	brightness: 350,
});
const samsung = new Monitor({
	id: 312,
	name: 'Samsung',
	price: 1540,
	discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, necessitatibus!',
	diagonal: 37,
	weight: 1.1,
	typeOfMatrix: 'VA',
	brightness: 400,
});

const huawei = new Headphone({
	id: 2131,
	name: 'Huawei',
	price: 130,
	discription: 'Lorem ipsum dolor sit amet.',
	frequency: 5 + 'Hz / ' + 14 + 'kHz',
	type: 'Vacuum / In-ear',
	weight: 21,
});
const iPods = new Headphone({
	id: 4121,
	name: 'iPods',
	price: 800,
	discription: 'Lorem ipsum dolor sit amet.',
	frequency: 6 + 'Hz / ' + 10 + 'kHz',
	type: 'In-ear',
	weight: 26
});


const newFunction = (array, currency) => {
	let a = array.id + ', ' + array.name + ', It costs: ' + array.price + 'zl, or ' + array.getPrice(currency) + `\n`;
	console.log(a, array, `\n`, array.getInfo())
}

newFunction(lenovo, 'UAN')