let countTime = 0;
let n = setInterval(function(){
  document.write(`<div>setInterval test 1s, it will not stop forever until meet clearInterval.</div>\n`);
  countTime++;
  if (countTime > 5){
    clearInterval(n);
  }
}, 1000)
