var courses = [
	{
		id: 1,
		name: 'Javascript',
		coin: 100,
	},
	{
		id: 2,
		name: 'HTML, CSS',
		coin: 200,
	},
	{
		id: 3,
		name: 'Ruby',
		coin: 220,
	},
	{
		id: 4,
		name: 'PHP',
		coin: 200,
	},
	{
		id: 5,
		name: 'ReactJS',
		coin: 480,
	},
];

var i = 0;

var totalCoin = courses.reduce(function (total, course) {
	return total + course.coin;
}, 0);

console.log(totalCoin);
