let input = parseInt(gets());
let list = [];
let exit = 0;

function prefix(prefix, word) {
  return word.startsWith(prefix);
}

do {
  for (let i = 0; i < input; i++) {
    let word = gets();
    list.map(w => {
      if (w.length < word.length) {
        prefix(w, word) && exit++;
      } else {
        prefix(word, w) && exit++;
      }
    });
    list.push(word);
  }
  if (exit > 0) {
    console.log(`Conjunto Ruim`);
  } else {
    console.log(`Conjunto Bom`);
  }
  exit = 0;
  list = [];
  input = parseInt(gets());
} while (input !== 0);
