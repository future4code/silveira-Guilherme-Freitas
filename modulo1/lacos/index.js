// Exercícios de interpretação de código

/*
1. O código está fazendo um laço começando do número 0 e passando para a condição de enquanto esse número for menor que 5 o laço não finaliza, então para cada valor entre 0 e 4, o laço executa o código dentro do bloco, e incrementa +1 para o número, executando uma variável que vai
receber o número do laço, sempre acrescentado do número anterior
O resultado impresso no console vai ser igual a 10.

2.
a) Será impresso no console apenas os valores maiores que 18 da lista.
19
21
23
25
27
30

b) Sim, se há possibilidade para isso usando o seguinte comando:
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  let indice = lista.indexOf(numero)
  console.log(`O indice do número ${numero} é ${indice}`)
}

3. O resultado seria uma sequência de asteriscos

*/

// exercícios de escrita de código

// exercício 1
const numeroPets = Number(prompt('Quantos PETs você tem?'))
const nomesDosPets = []

//a)
if (numeroPets === 0) {
    console.log('Que pena! Você pode adotar um pet!')

//b)

} else if (numeroPets > 0) {
    for (let i = 1; i <= numeroPets; i++) {
        const petNome = prompt(`Digite o nome do seu PET número ${i}`)
        nomesDosPets.push(petNome)
    }

//c)
    console.log(nomesDosPets)

}


// Exercício 2
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//a)
const imprimeValores = (array) => {
    for (let valor of array) {
        console.log(valor)
    }
}
console.log('Valores originais: ')
imprimeValores(arrayOriginal)

// b)
const imprimeValoresDividido = (array) => {
    for (let valor of array) {
        const divisao = valor/10
        console.log(divisao)
    }
}
console.log('Valores originais dividido por 10: ')
imprimeValoresDividido(arrayOriginal)

//c)
const arrayPares = (array) => {
    const arrayDePares = []
    for (let valor of array) {
        if (valor % 2 === 0) {
            arrayDePares.push(valor)
        }
    }
    console.log(arrayDePares)
}
console.log('Nova array apenas com os valores pares da array original: ')
arrayPares(arrayOriginal)

//d)
const novaArray = (array) => {
    const arrayStrings = []
    for (let i = 0; i < array.length; i++) {
        const numero = array[i]
        arrayStrings.push(`O elemento do índex ${i} é: ${numero}`)
    }
    console.log(arrayStrings)
}

novaArray(arrayOriginal)

//e)
const maiorEMenor = (array) => {
    let valorMaximo = 0
    let valorMinimo = 9999999
    for (let valor of array) {
        if (valor > valorMaximo) {
            valorMaximo = valor
        } else if (valor < valorMinimo) {
            valorMinimo = valor
        }
    }
    console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)
}

maiorEMenor(arrayOriginal)
