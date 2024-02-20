// alert('hello, outside js!');

document.write('<h1>title</h1>');

console.log('check log');

// let checkString;
// checkString = 'checkString';
// let checkString = 'checkString', overCheckString = 'over check string'
let checkString = 'check string';
console.log(checkString);
// Error: let ... 
checkString = 'over check string';
// console.log(checkString, overCheckString)
console.log(checkString);


let content = prompt('test prompt content write to document: ');
document.write(content);