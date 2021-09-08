var btn = document.querySelector('button');

function viec1(e) {
	e.stopPropagation();
	console.log('dang lam 1');
}
function viec2(e) {
	e.stopPropagation();
	console.log('dang lam 2');
}
btn.addEventListener('click', viec1);
btn.addEventListener('click', viec2);

setTimeout(function () {
	btn.removeEventListener('click', viec1);
}, 3000);
