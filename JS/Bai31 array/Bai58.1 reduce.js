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

function coinHandler(accumulator, currentValue, currentIndex, originArray) {
	i++;

	var total = accumulator + currentValue.coin;

	console.table({
		'Lượt chạy: ': i,
		'Biến tích trữ: ': accumulator,
		'Giá khóa học: ': currentValue.coin,
		'Tích trữ được: ': total,
	});
	return total;
}

var totalCoin = courses.reduce(coinHandler, 0);

console.log(totalCoin);
