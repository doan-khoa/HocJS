// promise luôn luôn reject

var promise = Promise.reject('Error!');

promise
	.then(function (result) {
		console.log('result: ', result);
	})
	.catch(function (err) {
		console.log('err: ', err);
	});
