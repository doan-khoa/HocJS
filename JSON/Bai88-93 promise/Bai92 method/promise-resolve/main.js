// promise luôn luôn resolve

var promise = Promise.resolve('Success!');

promise
	.then(function (result) {
		console.log('result: ', result);
	})
	.catch(function (err) {
		console.log('err: ', err);
	});
