// 2. stopPropagation

document.querySelector('div').onclick = function () {
	console.log('DIV');
};

document.querySelector('button').onclick = function (e) {
	e.stopPropagation();
	console.log('Click me!');
};
