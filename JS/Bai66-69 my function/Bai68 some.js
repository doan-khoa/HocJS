Array.prototype.mysome = function (callback) {
	for (var index in this) {
		if (this.hasOwnProperty(index)) {
			if (callback(this[index], index, this)) {
				return true;
			}
		}
	}
	return false;
};

/*
Array.prototype.mysome = function (callback) {
	var output = false;

	for (var index in this) {
		if (this.hasOwnProperty(index)) {
			if (callback(this[index], index, this)) {
				output = true;
				break;
			}
		}
	}
	return output;
};
*/

var courses = [
	{
		name: 'Javascript',
		coin: 680,
		isFinish: true,
	},
	{
		name: 'PHP',
		coin: 860,
		isFinish: false,
	},
	{
		name: 'Ruby',
		coin: 980,
		isFinish: false,
	},
];

var result = courses.mysome(function (course, index, array) {
	return course.isFinish;
});

console.log(result);
