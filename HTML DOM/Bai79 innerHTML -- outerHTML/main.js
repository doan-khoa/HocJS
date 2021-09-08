//Attribute

var boxElement = document.querySelector('.box');

//thay toàn bộ element trong thẻ h1
boxElement.innerHTML = '<h1 title="heading">new heading</h1>';
console.log(boxElement.innerHTML);

//thay luôn thẻ h1
boxElement.outerHTML = '<span>test</span>';
console.log(boxElement.outerHTML);

//h1 bị xóa nhưng vẫn còn trong "bộ nhớ"
console.log(boxElement);
