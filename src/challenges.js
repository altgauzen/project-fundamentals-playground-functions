// Desafio 1

function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}
compareTrue(false, true);

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
    higherNumber = numbersArray[index];
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
  let encodeString = string.replace(/a/gi, '1')
  .replace(/e/gi, '2')
  .replace(/i/gi, '3')
  .replace(/o/gi, '4')
  .replace(/u/gi, '5');
  return encodeString;
}
console.log(encode('hi, there!'));

function decode(string) {
  let decodeString = string.replace(/1/gi, 'a')
  .replace(/2/gi, 'e')
  .replace(/3/gi, 'i')
  .replace(/4/gi, 'o')
  .replace(/5/gi, 'u');
  return decodeString;
}
console.log(decode('h3 th2r2!'));


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