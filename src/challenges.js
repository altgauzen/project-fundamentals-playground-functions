// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}
compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
   return area;
}
calcArea(51, 1);

// Desafio 3
function splitSentence(sentence) {
  let arraySentence = [];
  //for (index = 0; index < sentence.lenght; index += 1) {
    arraySentence = sentence.split(' ');
    //returne arraySentence;
  return arraySentence;
}
console.log(splitSentence('vamo que vamo'))

// Desafio 4
function concatName(array) {
  
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolilo']))

// Desafio 5
function footballPoints() {
  //variavel numero de vitorias 
  let wins;
  // receba numero de vitorias
  // variavel numero de empates
  let ties;
  //receba numero de empates
  // retorne quantidade de pontos que o time marcou
  return footballPoints;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
