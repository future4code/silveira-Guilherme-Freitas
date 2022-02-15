const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", false)

resultado = bool1 && bool2 && bool3 
console.log("b. ", false) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", true)

console.log("d. ", typeof resultado) /*boolean*/


let primeiroNumero = +prompt("Digite um numero!")
let segundoNumero = +prompt("Digite outro numero!")
/* o probelma era que estava em forma de string */

const soma = primeiroNumero + segundoNumero

console.log(soma) 


// exercicio de escrita

//1

const idade = +prompt("Qual é sua idade?")
const idadeAmigo = +prompt("Idade do seu melhor amigo?")
const diferencaIdade = idade - idadeAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?",idade >= idadeAmigo )

console.log("Nossa diferença de idade é de ", diferencaIdade," ano(s).")

// 2

const par = +prompt("Insira um numero par")
const restoDaDivisao =  par % 4  
console.log("Resto da divisao:", restoDaDivisao)
/*O codigo segue um padra que independente do numero par que vc colocar ele sempre dara 2*/
/* e se caso o ususario colocar um numero impar dara 1 */

// 3 

const idadeEmAnos = prompt("qual é sua idade em anos?")

const idadeEmDias = idadeEmAnos * 365
const idadeHoras = 8640 * idadeEmAnos
const idadeMeses = 12 * idadeEmAnos

console.log("Sua idade em dias:", idadeEmDias)
console.log("Sua idade em horas:", idadeHoras)
console.log("Sua idade em meses:", idadeMeses)

// 4
const primeiro = +prompt("Digite o primeiro numeoro")
const segundo = +prompt("Digite o segundo numeoro")
let resultado1 = primeiro / segundo  === 0
let resultado2 = segundo / primeiro === 0

console.log ("O primeiro numero é maior que o segundo/", primeiro > segundo) 
console.log("O primeiro numero é divisível pelo segundo?", resultado1 )
console.log("O primeiro numero é igual ao segundo?", primeiro === segundo)
console.log("O segundo numero é divisível pelo primeiro?", resultado2 ) 







