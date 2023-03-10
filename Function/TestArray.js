const users = [
	{
		name: 'user1',
		groups: ['admin', 'moderator', 'techlid', 'senior']
	},
	{
		name: 'user2',
		groups: ['sisadmin', 'admin', 'dev', 'midl']
	},
	{
		name: 'user3',
		groups: ['moderator', 'sisadmin', 'techlid', 'midl']
	},
	{
		name: 'user4',
		groups: ['lid', 'meneger', 'moderator', 'senior']
	},
	{
		name: 'user5',
		groups: ['lid', 'sis', 'techlid', 'jun']
	},
	{
		name: 'user6',
		groups: ['techlid', 'sis', 'dev', 'jun']
	},
	{
		name: 'user 7',
		groups: ['meneger', 'dev', 'LOL', 'midl']
	},
]
function usersGroups(users) {
	const set = new Set();
	users.forEach(x => {
		x.groups.forEach(y => {
			set.add(y);
		});
	});
	console.log([...set])
}
usersGroups(users);