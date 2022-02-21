// exercicio interpretaçao de codigo
// 1.a) Matheus nachetergaele virginia cavendish canal globo 14

// 2.a)
/*
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"

	nome: "Juba", 
	idade: 3, 
	raca: "SRD"


	nome: "Jubo", 
	idade: 3, 
	raca: "SRD"


b) O comando "...nomeDoObjeto" cria uma cópia do objeto mencionado e também dessa forma se consegue adicionar ou alterar suas propriedades.

3.a)
console.log(minhaFuncao(pessoa, "backender")) = irá retornar o valor "false" para a chave "backender"
console.log(minhaFuncao(pessoa, "altura")) = irá retornar o valor "undefined".

b) No primeiro console se há o valor false pois foi acessado a propriedade backender dentro do objeto pessoa. Já no caso do segundo console
se há um problema, apresenta o valor undefined, pois não há essa chave dentro do objeto pessoa.

*/
const pessoa = {
    nome: "guilherme",
    apelidos: ["guh", "guilhermin", "gui"]
}

function imprimeMensagem(objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}

imprimeMensagem(pessoa)

//b)
let copiaDePessoa = {
    ...pessoa,
    apelidos: ["wallace", "dan", "carlao"]
}

imprimeMensagem(copiaDePessoa)

// Exercício 2.
//a)
let informaçoes1 = {
    nome: 'guilherme',
    idade: 20,
    profissao: 'Estudante'
}

let informaçoes2 = {
    nome: 'lais',
    idade: 40,
    profissao: 'garconete'
}

//b)
function array(objeto) {
    let nome = objeto.nome
    let caracteresNome = objeto.nome.length
    let idade = objeto.idade
    let profissao = objeto.profissao
    let caracteresProfissao = objeto.profissao.length
    let arrayDeDados = [nome, caracteresNome, idade, profissao, caracteresProfissao]
    console.log(arrayDeDados)
    return arrayDeDados
}

array(informaçoes1)
array(informaçoes2)

// Exercício 3.
//a)
const carrinho = []

//b)
const fruta1 = {
    nome: 'laranja',
    disponibilidade: true
}

const fruta2 = {
    nome: 'morango',
    disponibilidade: true
}

const fruta3 = {
    nome: 'uva',
    disponibilidade: true
}

//c)
function preencherCarrinho(objeto) {
    return carrinho.push(objeto)
}

preencherCarrinho(fruta1)
preencherCarrinho(fruta2)
preencherCarrinho(fruta3)

//d)
console.log(carrinho)
