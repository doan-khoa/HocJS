// ClassList property

var boxElement = document.querySelector('.box');
// add : thêm class vào element
boxElement.classList.add('red');

// contains : kiểm tra class có nằm trong element hay ko
console.log(boxElement.classList.contains('red'));

// remove : xóa class trong element
boxElement.classList.remove('red');

// toggle : thêm/xóa class vào element như tắt/bật input
setInterval(() => {
	boxElement.classList.toggle('red');
}, 1000);

// in ra các class theo value
console.log(boxElement.classList.value);
