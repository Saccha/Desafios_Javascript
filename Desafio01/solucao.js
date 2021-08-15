let n = parseInt(gets())
let rafa = parseInt(gets())
let temp = rafa;

while(true){
  let x = parseInt(gets())
  
  if(!x){
    rafa >= temp
    ?console.log("S")
    :console.log("N")
    break;
  }
  
  if(x > temp){
    temp = x;
  }
}
