//  ARRAYS - PARTE 2 - MÉTODOS DE ARRAYS

const arr1 = [30, 12, 45, 34, 29]
let arr2 = []

//  Fatiamento: slice

console.log(arr1.slice(0, 2))
console.log(arr1.slice(2))

console.clear()

//  Adicionando elementos: push(addDepois) | unshift(addInicio)

console.log('Antes de adicionar:', arr2)

arr2.push(10, 20, 30)
arr2.push(40)

console.log('Depois de adicionar:', arr2)

console.log('Antes de adicionar com unshift:', arr2)

arr2.unshift(0)

console.log('Depois de adicionar com unshift:', arr2)

console.clear()

//  Removendo elementos: pop | shift

console.log('Antes de remover com o pop:', arr2)

const elementoRemovido = arr2.pop()

console.log('Depois de remover com o pop:', arr2)
console.log('O elemento removido foi', elementoRemovido)



console.log('Antes de remover com o shift:', arr2)

arr2.shift()

console.log('Depois de remover com o shift:', arr2)

console.clear()

//  Concatenando arrays: concat



//  Buscando elementos: indexOf  | lastIndesOf

//  Descobrindo a existência de um elemento: includes

//  Invertendo arrays: reverse

//  
