// Desafio 10
/*Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro chamado name com um nome.

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
    if (arrayTech.sort() === 0) {
      return 'Vazio!';
    } else {
      for (let index = 0; index < arrayTech.length; index += 1)  {
        techObject.push({tech:arrayTech[index], name:name});
      }
    }  
  return techObject;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Alexandre'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

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
