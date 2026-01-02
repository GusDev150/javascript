// São comumente utilizados para verificação nas estruturas de condição
// Temos os seguintes operadores: ==, !=, >, <, >=, <=
// A partir de uma expressão de comparação podemos obter um true ou false

var idade = 19
var possuiCarro = 0

if (idade >= 18) {
    console.log('Você pode fazer a CNH')
} 

if (idade <= 17) {
    console.log('Não pode fazer a CNH')
}

if(possuiCarro) {
    console.log('O usuário já pode andar de carro')
}

var nome = 'Gustavo'

if(nome == 'Gustavo') {
    console.log('O seu nome é Gustavo')
}

if (nome != 'Gustavo') {
    console.log('O seu nome não é Gustavo')
}

if (20 > 10) {
    console.log('Passou')
}

if (100 < 20) {
    console.log('Passou 2')
}