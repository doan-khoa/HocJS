// 1. preventDefault

var aElements = document.links;

for (var i = 0; i < aElements.length; ++i) {
	aElements[i].onclick = function (e) {
		if (!e.target.href.startsWith('https://f8.edu.vn')) {
			e.preventDefault();
		}
	};
}
