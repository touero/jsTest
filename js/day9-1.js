const liNodeList = document.querySelectorAll('ul li');
console.log(liNodeList);

function getRandomColor(){
  const colorArray = ['red', 'pink', 'green', 'blue', 'grown', 'yellow'];
  let index = Math.floor(Math.random() * colorArray.length);
  return colorArray[index];
}

liNodeList.forEach(liNode => {
  console.log(liNode);
  liNode.style.color = getRandomColor();
});