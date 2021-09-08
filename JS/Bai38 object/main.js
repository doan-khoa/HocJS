//Object In javaScipt
myInfo = {
	name: 'Son Dang',
	age: 19,
	address: 'Ha Noi, VN', //Gọi là key hoặc thuộc tính cũng được
	//đặt func trong đây
	getName: function () {
		return this.name; //trong trường hợp nó là function thì gọi là phương thức
	},
	// Ta cũng có thể định nghĩa mảng trong object
	listPoint: ['PointA', 'PointB', 'PointC', 'PointD'],
};
//truy xuất theo func
console.log(myInfo.getName());
//Truy xuất theo mảng
console.log(myInfo.listPoint);
console.log(myInfo.listPoint[1]);
