// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("Insira um numero"));
  let largura = Number(prompt("Digite outro numero"));
  let resultado = altura * largura
  console.log(resultado)
  
}
console.log(calculaAreaRetangulo(3,5))


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Insira ano atual"))
  let anoNascimento = Number(prompt("Insira seu ano de nascimento"))
  let idade = anoAtual - anoNascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso/(altura**2);
  return imc

}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite seu nome");
  const idade = Number(prompt("digite sua idade"));
  const email = prompt("Digite seu email");
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const primeira = prompt("Digite seu primeira cor")
  const segunda = prompt("Digite sua segunda cor")
  const terceira = prompt("Digite seu terceira cor")
  let arrayCores = [primeira, segunda, terceira]
  console.log(arrayCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let valor = custo/valorIngresso
  return valor

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const compare = string1.length === string2.length
  return compare

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length -1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let guarda = array[0]
  array[0] = array[array.length -1]
  array[array.length -1] = guarda
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let iguais = string1.toLowerCase() === string2.toLowerCase()
  return iguais

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual1 = prompt('Qual é o ano que estamos?')
  let nascimento = prompt('Em que ano você nasceu?')
  let carteiraEmissao = prompt('Data de emissão da carteira de identidade:')
  let idade = anoAtual1 - nascimento
  let diferencaAnos = anoAtual1 - carteiraEmissao
  
  const condicao1 = (idade <= 20 && diferencaAnos >= 5) 
  const condicao2 = ((idade > 20 && idade <=50) && diferencaAnos >= 10) 
  const condicao3 = (idade > 50 && diferencaAnos >= 15) 

  console.log(condicao1 || condicao2 || condicao3)


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const cond1 = ((ano % 4 === 0) && (ano % 100 === 0) && (ano % 400 === 0))
  const cond2 = ((ano % 4 === 0) && (ano % 100 !== 0))

  return (cond1 || cond2)

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let maiorIdade = prompt('Você tem mais de 18 anos?')
  let ensino = prompt('Você possui ensino médio completo?')
  let disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')

  const inscricao = ((maiorIdade === "sim") && (ensino === "sim") && (disponibilidade === 'sim'))
  console.log(inscricao)

}