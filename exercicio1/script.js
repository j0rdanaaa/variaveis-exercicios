/* let nome 
let idade

console.log(typeof(nome), typeof idade)
Foi impresso undefined pq são variáveis sem valores.


nome = prompt('Qual o seu nome?')
idade = Number(prompt('Qual a sua idade?'))
console.log(typeof(nome), typeof idade)

console.log("Olá pessoal, meu nome é", nome, "Eu tenho", idade)
console.log(`Olá ${nome} você tem ${idade}`)
console.log("Olá pessoal, meu nome é " + nome + " Eu tenho " + idade)
*/
let touca = 'Você gosta de touca?'
let meia = 'Você gosta de meia?'
let temporal = 'Você gosta de temporal?'

console.log(touca, meia, temporal)

let respostaA = prompt(touca)
let respostaB = prompt(meia)
let respostaC = prompt(temporal)

console.log(respostaA, respostaB, respostaC)
console.log(`${touca} - ${respostaA}`)
${touca} - ${respostaA}
${meia} - ${respostaB}
${temporal} - ${respostaC}
