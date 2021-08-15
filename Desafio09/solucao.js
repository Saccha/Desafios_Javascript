let qtde = parseInt(gets())

for(let i = 0; i < qtde; i++) {
  let placa = gets();
  
  if(placaValida(placa) == false || placa.length < 6){
    console.log('FALHA')
  }else{
    if(placa[7] == 1 || placa[7] == 2) {
      console.log('SEGUNDA')
    }else if(placa[7] == 3 || placa[7] == 4){
      console.log('TERCA')
    }else if(placa[7] == 5 || placa[7] == 6){
      console.log('QUARTA')
    }else if(placa[7] == 7 || placa[7] == 8){
      console.log('QUINTA')
    }else if(placa[7] == 9 || placa[7] == 0){
      console.log('SEXTA')
    }
  }
}

function placaValida(placa) {
  const regexPlaca = /^[A-Z]{3}[-][0-9]{4}$/;
  
  if(regexPlaca.test(placa)){
    return true;
  } else {
    return false;
  }
}
