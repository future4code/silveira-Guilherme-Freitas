//1.
/*  faz um teste condicional, para verificar se o resto da divisão desse número por 2 é igual a 0. Imprimindo se for divisivel for zero "Passou
no teste." e caso o resto não seja igual a zero "Não passou no teste"

b) Número pares

c)  valores ímpares

2.
a) lê a fruta inserida pelo usuário 
por fim usa-se o comando switch case para que sê atribua o valor de preço para a fruta mencionada.
b) ira mostrar no console o preço de R$ 2,25
c) Iria assumir o valor de R$ 5 pois

3.
a) A para que o usuário digite um número, que será verificado  no programa.
b)atribuindo o valor -10, não irá imprimir nada e apenas irá repetir o erro de que a variável "mensagem"
não foi definida
c) irá apresentar erro de variável 'mensagem' não definida. Isso vaia acontecer porque a declaração dessa variável foi descrita dentro da condicional if e dessa forma ela faz parte do escopo filho, mas ao chamar o console.log('mensagem') fora da condicional o codigo quebra, pois ele não consegue ler uma variável que está presente apenas no escopo filho, e sim  no escopo global 


*/

// Exercícios de escrita de código

// Exercício 1.
//a)
const Idade = prompt('Qual é a sua idade?')

//b)
const idadeUsuario = Number(Idade)

//c)
if (idadeUsuario >= 18) {
    console.log('Você pode dirigir.')
} else {
    console.log('Você não pode dirigir.')
}

// Exercício 2.
const turnoAula = prompt('Qual o turno que você estuda? Responda: (M) para matutino, (V) para vespertino e (N) para noturno').toUpperCase()

if (turnoAula === "M") {
    console.log('Bom dia!')
} else if (turnoAula === "V") {
    console.log('Boa tarde!')
} else if (turnoAula === "N") {
    console.log('Boa noite!')
}

// Exercício 3
const turno = prompt('Qual o turno que você estuda? Responda: (M) para matutino, (V) para vespertino e (N) para noturno').toUpperCase()

let turnoSwitch
switch (turno) {
    case 'M':
        console.log('Bom dia!')
        break
    case 'V':
        console.log('Boa tarde!')
        break
    case 'N':
        console.log('Boa noite')
        break
    default:
        console.log('Você não inseriu a letra informada.')
        break
}  

// Exercício 4
const generoFilme = prompt('Qual é o gênero do filme?')
const precoIngresso = Number(prompt('Qual é o preço do ingresso?'))

if (generoFilme === 'fantasia' && precoIngresso < 15) {
    console.log('Bom filme!')
} else {
    console.log('Escolha outro filme :(')
}
