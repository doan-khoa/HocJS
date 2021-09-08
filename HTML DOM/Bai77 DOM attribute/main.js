//Attribute

var headingElement = document.querySelector('h1');

headingElement.title = 'heading-title';
headingElement.className = 'heading';
headingElement.setAttribute('id', 'heading-id');
console.log(headingElement.getAttribute('class'));
