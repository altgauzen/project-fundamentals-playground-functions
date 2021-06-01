// Desafio 10
/* Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro chamado name com um nome.

Para cada tecnologia no array, crie um objeto com a seguinte estrutura:

  {
  tech: "NomeTech",
  name: name
}
Estes objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo tech no objeto.

A saída da sua função deve ser uma lista de objetos ordenada pelo campo tech dos objetos com o formato acima.
*/
function techList(arrayTech, name) {
  let techObject = [];
  let arrayInOrder = arrayTech.sort();
  if (arrayInOrder == 0) {
    return 'Vazio!';
  } else {
    for (let index = 0; index < arrayInOrder.length; index += 1) {
      techObject.push({ tech:arrayInOrder[index], name:name });
    }
  }
  return techObject;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Alexandre'));

// Desafio 11
function generatePhoneNumber(arrayPhoneNumber) {
  let objPhoneNumber = {};
  //objPhoneNumber.0 = 
  objPhoneNumber.prop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  console.log(objPhoneNumber);
  let phoneNumber = (' ');
  if (arrayPhoneNumber.length != 11) {
    return 'Array com tamanho incorreto.';
  } else if (arrayPhoneNumber){

  }
  
  {
    for (let index = 0; index < arrayPhoneNumber.length; index += 1) {
      
      
      objPhoneNumber += (arrayPhoneNumber[index]);
    }
  }
  return objPhoneNumber;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
