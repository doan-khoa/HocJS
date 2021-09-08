Array.prototype.myforEach = function (callback) {
	for (var index in this) {
		if (this.hasOwnProperty(index)) {
			callback(this[index], index, this);
		}
	}
};

var courses = ['Javascript', 'PHP', 'Ruby'];

courses.myforEach(function (course, index, array) {
	console.log(course, index, array);
});

//ko return
