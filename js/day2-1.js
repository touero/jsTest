// Bubble Sort
let content = 'bubble sort'
console.log(content);
document.write('<h1>' + content + '</h1>')

let size = prompt('random size int: ')

let randomNumbers = [];
for (let i = 0; i < size; i++) {
  // Math.random() ==> [0,1)
  let randomNumber = Math.floor(Math.random() * 1000) + 1;
  randomNumbers.push(randomNumber);
}
console.log(randomNumbers);

for (let i = 0; i < randomNumbers.length; i++) {
  for (let j = 0; j < randomNumbers.length; j++) {
    if (randomNumbers[j] > randomNumbers[j + 1]) {
      let temp = randomNumbers[j];
      randomNumbers[j] = randomNumbers[j + 1];
      randomNumbers[j + 1] = temp;
    }
  }
}
console.log(randomNumbers);
console.log(randomNumbers.length);

document.write('<span>' + randomNumbers + '</span>');