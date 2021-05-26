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
    arraySentence = sentence.split(' ');
    return arraySentence;
}
splitSentence('vamo que vamo');

// Desafio 4

function concatName(array) {
  let firstItem = array[0];
  let lastItem = array[array.length - 1];
  let string = lastItem + ', ' + firstItem;
  return string;
}
concatName(['foguete', 'não', 'tem', 'ré']);

// Desafio 5

function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}
console.log(footballPoints(1, 2));

// Desafio 6

function highestCount(numbersArray) {
  let higherNumber = numbersArray[0];
  let counter = 0;
    for (let index = 0; index < numbersArray.length; index += 1) {
      if (higherNumber < numbersArray[index]) {
        higherNumber = numbersArray[index] 
      }
    }
    for (index of numbersArray) {
      if (index === higherNumber) {
        counter += 1;
      }
    }
  return counter;
}
highestCount([0, 4, 4, 4, 9, 2, 1]);

// Desafio 7 

function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
(catAndMouse(1, 0, 2));

// Desafio 8

function fizzBuzz(array) {
  let returnArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 3 == 0) && (array[index] % 5 == 0)) {
        returnArray[index] = ('fizzBuzz');
    } else if ((array[index] % 3 != 0) && (array[index] % 5 == 0)) {
        returnArray[index] = ('buzz');
    } else if ((array[index] % 3 == 0) && (array[index] % 5 != 0)) {
        returnArray[index] = ('fizz');
    } else {
        returnArray[index] = ('bug!');
    }
  }
  return returnArray;
}
console.log(fizzBuzz([7, 9]));

// Desafio 9

function encode(string) {
  let codigo = {a:1, e:2, i:3, o:4, u:5};
  let encodeString = '';
}
console.log('hi, there')

function decode() {

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