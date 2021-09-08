// optional chaining (?.)
const obj = {
	getName(value) {
		console(value);
	},
};
// khi nghi vấn hàm getName có tồn tại ko
obj.getName?.(123);
