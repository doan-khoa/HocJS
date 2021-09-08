var newArray = [
	{
		id: 1,
		name: 'Tôi',
		age: 23,
	},
	{
		id: 2,
		name: 'Em',
		age: 28,
	},
	{
		id: 3,
		name: 'Anh',
		age: 20,
	},
];

/*
	Array methods:
		forEach()
		every()
		some()
		find()
		filter()
*/

//forEach: Duyệt qua từng phần tử của mảng
newArray.forEach(function (aArray, index) {
	console.log(index, aArray);
});

//every: kiểm tra từng phần tử của mảng, khi thấy điều kiện sai thì ngừng luôn
var isTuoi = newArray.every(function (params) {
	return newArray.age === 23; //callback
}); // Tất cả đúng thì trả về true
console.log(isTuoi);

//some: Kiểm tra từng phần tử(chỉ cần 1 đúng là trả về true)
var enoughAge = newArray.some(function (Tuoidu, index) {
	return newArray.age === 23;
});
console.log(enoughAge);

//find : tìm kiếm
var findName = newArray.find(function (timName, index) {
	console.log(index);
	return newArray.name === 'Em';
});
console.log(findName);
