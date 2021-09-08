// 1. New Promise
// 2. Executor

// Trạng thái của promise:
// 1. Pending: đang chờ
// 2. Fulfilled: thành công
// 3. Rejected: thất bại

var promise = new Promise(
	// Executor
	function (resolve, reject) {
		// Logic
		// Thành công: resolve()
		// Thất bại: reject()

		// Fake call API
		reject('Co loi!');
	}
);

promise
	.then(function (courses) {
		console.log(courses);
	})
	.catch(function (error) {
		console.log(error);
	})
	.finally(function () {
		console.log('Done!');
	});
