const term = require('terminal-kit').terminal;
const https = require('node:https');

function printUsers(users) {
	this.clear();
	this.bold.blue.underline('			LIST OF ALL USERS\n\n');
	this.table([
		['PERSONAL\nINFORMATION', 'USER`S	   \nADDRESS', 'USER`S\nCONTACTS    ']
	], {
		hasBorder: true,
		borderChars: 'lightRounded',
		borderAttr: { color: 'red' },
		firstCellTextAttr: { bgColor: 'green' },
		firstRowTextAttr: { bgColor: 'green' },
		width: 60,
		fit: true
	});
	users.forEach(item => {
		this.table([
			[`^RUser ^RID: ^Y${item.id}\n^RName: ^W${item.name} (${item.username})\n^REmail: ^Y${item.email}`,
			`^GStreet: ^Y${item.address.street}\n^GSuite: ^W${item.address.suite}\n^GCity: ^W${item.address.city}\n^GZipCode: ^W${item.address.zipcode}\n^GGeo: ^Blat: ^W${item.address.geo.lat}\n	 ^Blng: ^W${item.address.geo.lng}`,
			`^GPhone: ^W${item.phone}\n^GWebsite: ^W${item.website}\n^GCompany:\n^BName: ^W${item.company.name}\n^BCatch phrase: ^W${item.company.catchPhrase}\n^BBS: ^W${item.company.bs}`],
		], {
			hasBorder: true,
			contentHasMarkup: true,
			borderChars: 'lightRounded',
			borderAttr: { color: 'blue' },
			textAttr: { bgColor: 'white' },
			firstRowTextAttr: { bgColor: 'black' },
			width: 60
		});
	});
};

https.get('https://jsonplaceholder.typicode.com/users', (res) => {
	let data = ''
	res.on('data', (chunk) => {
		data += chunk;
	});
	res.on('end', () => {
		const objUsers = JSON.parse(data)
		printUsers.call(term, objUsers)
	})
}).on('error', (error) => {
	console.error('Error: ' + error.message);
});
