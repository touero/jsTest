// let name = prompt('name')
// let age = prompt('age')
// let gender = prompt('gender')

// document.write(name, age, gender)
let r = Number(prompt('r'));
// let r = paserInt(prompt('r'));
// let r = paserFloat(prompt('r'));
console.log(typeof r);
if (!isNaN(r)){
  const PI = 3.141592653;
  document.write(`area of ​​circle: ${r * r * PI}`);
}else{
  alert('Error it is not number ');
}