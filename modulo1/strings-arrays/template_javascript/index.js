let array
console.log('a. ', array)
// indefinido

array = null
console.log('b. ', array)
//null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//11

let i = 0
console.log('d. ', array[i])
// 3

array[i+1] = 19
console.log('e. ', array)
// 11 {3,18,5,6,7,8,9,10,11,12,13}

const valor = array[i+6]
console.log('f. ', valor)
// 9

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// OLI MUNDO 8

// 1

const nome = prompt("Digite seu nome")
const email = prompt("Digite seu email")

console.log("O email: " + email + " foi cadastrado com sucesso.Seja bem-vinda(o) " + nome)

// 2

const listaComida = ["arroz","feijao","macarrao","alface","tomate"]

console.log("Essas sao as minhas comidas preferidas", listaComida)

// 3

const listaDeTarefas = prompt["digite 3 tarefas"]

console.log(listaDeTarefas)

const removeLista = prompt("remova uma tarefa que ja realizou", listaDeTarefas.splice())

console.log(listaDeTarefas)
