class User {
	name;
	lastName;
	email;
	cart = [];
	isAuthorizes = false;
	constructor(par) {
		this.name = par.name;
		this.lastName = par.lastName;
		this.email = par.email;
	}
	authorize() {
		this.isAuthorizes = true;
	}
	logout() {
		this.isAuthorizes = false;
	}
	pushCart(item) {
		if (this.isAuthorizes) {
			this.cart.push(item)
		} else throw new Error('User is not authorized');
	}
}

const userOne = new User({
	name: 'Sasha',
	lastName: 'Hordiichuk',
	email: 'aleksandrhordiichuk@gmail.com',
})

const userTwo = new User({
	name: 'Julia',
	lastName: 'Bialko',
	email: 'juliabialko@gmail.com',
})
userOne.authorize();
userOne.pushCart({ name: 'laptop', price: 0 })
userOne.pushCart({ name: 'laptop', price: 1 })
userOne.pushCart({ name: 'laptop', price: 2 })
console.log(userOne.cart.length)