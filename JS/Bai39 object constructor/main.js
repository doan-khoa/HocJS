function User(firstName, lastName, avatar) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.avatar = avatar;

	this.getName = function () {
		return `${this.firstName} ${this.lastName}`;
	};
}
var author = new User('Thu Ba', 'Đào', 'Avatar');
var user = new User('Sơn', 'Đặng', 'Avatar');

author.title = 'Thông minh xinh đẹp';
user.comment = 'Chia sẻ dạo tại F8';

console.log(author.getName());
console.log(user.constructor);
