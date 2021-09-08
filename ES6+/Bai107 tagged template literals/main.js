function highlight([first, ...strings], ...values) {
	// Vì strings và values có cùng độ dài và phần tử theo quy luật ta thấy
	return values.reduce(
		(acc, curr, index) => `${acc}<span>${curr}</span>${strings[index]}`,
		first // Đây là initial value: giá trị ban đầu
	);
}
var brand = 'F8';
var course = 'Javascript';
const html = highlight`Học lập trình ${course} tại ${brand}!`;
console.log(html);

document.getElementById('box').innerHTML = html;
