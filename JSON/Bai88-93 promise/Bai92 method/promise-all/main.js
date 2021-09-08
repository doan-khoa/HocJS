var promise1 = new Promise(function (resolve) {
	setTimeout(function () {
		resolve([1]);
	}, 2000);
});

var promise2 = new Promise(function (resolve) {
	setTimeout(function () {
		resolve([2, 3]);
	}, 5000);
});

// Dùng chạy nhiều promise cùng lúc
// Nếu all resolve / 1 reject thì reject (và ngược lại)

Promise.all([promise1, promise2]).then(function (result) {
	var result1 = result[0];
	var result2 = result[1];

	console.log(result1.concat(result2));
});
