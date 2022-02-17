// 1

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

// a) 10,50
// b)  nao aconteceria nada 

/////////////////////////////////

// 2

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta);

/* essa funçao faria que o texto voltasse em tamanho minusculo e se houvesse a palavra cenoura diria se é true ou false */ 

// i.   `Eu gosto de cenoura` = true
// ii.  `CENOURA é bom pra vista`= true
// iii. `Cenouras crescem na terra`= true

// exercicio de escrita 

// a
function imprimir(){


 console.log("eu sou guilherme tenho 18 anos, moro em sao paulo e sou estudante")

  
}

imprimir()

// b 

function informaçoes(nome, idade, cidade, profissao){

    const frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`;

    return frase

}
console.log(informaçoes("guilherme", 18, "sao paulo", "estudante"));

// 2

// a

function somar(a, b){
    const soma = a + b
    return soma

}

console.log(somar(1,4))

// b 

function booleam(a, b){
    const bool = a > b
    return bool

}

console.log(booleam(1,10))

// c 

function par(a){
    const resultadoPar = a % 2 === 0
    return resultadoPar

}

console.log(par(8))

// d 

function letra() {
 let frase = prompt("Digite uma frase")
 let tamanhoFrase = frase.length
 let fraseMaiscula = frase.toUpperCase()

 console.log(`Frase maíscula: ${fraseMaiscula}, tamanho da frase: ${tamanhoFrase}`)
}

letra()

//  3 


/
function mais(a, b){
    return a + b

}

function subtracao(a, b){
    return a - b

}

function multiplicaçao(a, b){
    return a * b

}

function divisao(a, b){
    return a * b

}

const resultado = prompt("digite o numero")
console.log(`Números inseridos: ${resultado} Soma: ${soma} Diferença: ${subtracaoo} Multiplicação: ${mutliplicacaoo} Divisão: ${divisaoo}`)

divisao()
mutliplicacao()
subtracao()






