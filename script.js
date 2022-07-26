//Prática guiada 1

// const nome = prompt("Qual é o seu nome?")
// const cor = prompt("Qual sua cor predileta?")

// Introduzindo citação

// const citacao = prompt("Qual sua citação favorita?")

//Manipulando string

// const nomeMaiusculas = nome.toUpperCase()
// console.log(nomeMaiusculas)
//Imprimir a mensagem

//const stringConcatenada = "A cor favorita de " + nome +  " é " + cor 
//console.log('STRING CONCATENADA', stringConcatenada)//concatenação

// const templateString = `A cor favorita de ${nome} é ${cor}`
// console.log('TEMPLATE STRING',templateString)

//alteração de string 1
// const stringConcatenada = 'A cor favorita de ' + nome +  " é " + cor + ' e sua citação predileta é: \'' + citacao + ' \'.' 
// console.log('STRING CONCATENADA', stringConcatenada)//concatenação

//alteração 2
// const templateString = `Nome: ${nome} \nCor favorita é: ${cor}`
// console.log('TEMPLATE STRING',templateString)

//Manipulando strings
// const stringConcatenada = "A cor favorita de " + nomeMaiusculas +  " é " + cor 
// console.log('STRING CONCATENADA', stringConcatenada)//concatenação

// const templateString = `Nome: ${nomeMaiusculas} \nCor favorita é: ${cor}`
// console.log('TEMPLATE STRING',templateString)

//Quantos caracteres tem o nome
// const tamanho = nome.length
// console.log("O seu nome tem", tamanho , "caracteres")
//TEM a letra A
// const temA = nomeMaiusculas.includes("A")
// console.log("Seu nome tem a letra A? " , temA)

//Exercício de fixação

const nome = prompt("Qual é o seu nome?")
const email = prompt("Qual é o seu e-mail?")
const nomeDoUsuario = nome
const emailDoUsuario = email
const tamanho = nome.length

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso . \nBoas vindas , ${nomeDoUsuario}! ,seu nome tem ${tamanho} caracteres`)

const frase1 = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso . \nBoas vindas , ${nomeDoUsuario}! ,seu nome tem ${tamanho} caracteres`
const novaFrase = frase1.replaceAll("r","l")
console.log(novaFrase)

const stringSubstituida = emailDoUsuario.includes("@")
console.log(`Seu e-mail possui: ${stringSubstituida}`)





