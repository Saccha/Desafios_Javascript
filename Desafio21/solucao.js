
let joias = [];
let pare = 0;

while (pare !== 1) {
  let casos = gets()
  
  if (casos == 0) {
    pare = 1;
  } else {
    for (i=1; i<=casos.length; i++) {
      joias.push(casos);
    }
  }
}

let unicos = joias.filter(function(elem, pos, self) {
  return self.indexOf(elem) == pos;
})

console.log(unicos.length);
