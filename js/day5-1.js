let numbers = [0, 1, 100, 2, 3, 4, 5];
console.log(numbers);

for (let i =0; i < numbers.length; i++){
  if (100 === numbers[i]){
    numbers.splice(numbers[i]);
  }
}
numbers.shift();
numbers.pop();
numbers.push(1000);