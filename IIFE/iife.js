// Nội dung: Là hàm chạy ngay lập tức / ko thể truy cập

// Cách viết (phải có dấu ";" ở đầu câu hoặc cuối câu đứng trc)
(function value() {
	// code
})();

const value = (function () {
	// code
})();

// Vd:
const app = (function () {
	// Private
	const cars = [];

	return {
		get(index) {
			return cars[index];
		},
		add(car) {
			cars.push(car);
		},
		encodeURIComponent(index, car) {
			cars[index] = car;
		},
		delete(index) {
			cars.splice(index, 1);
		},
	};
})();
