// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');

1. PARENTS AND CHILDREN
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor ='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);
// also reads the white space inbetween item lists, for example, as text so it is advidable not to use it

// children
// console.log(itemList.children)
// does not read the white space inbetween the items; returns an HTML collection instead of a node list
// console.log(itemList.children[1]); -> to select a specific one
// itemList.chldren[1].style.backgroundColor = 'yellow;

// firstChild
console.log(itemLis.firstChild); 
like childNodes it reads the whitespace between lines so it does not actually get you the first child element unless you write your code without breaks
what you want to use instead is probably:

firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

lastChild
lastElementChild 
behave like firstElement and firstElementChild

2. SIBLINGS
nextSibling
nextElementSibling

previousSibling
previousElementSibling 
