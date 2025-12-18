// Funções são blocos de códigos reutilizáveis
// Ou seja,, evitamos a repetição da lógica de um programa em diversas partes do código
// A função precisa ser invocada para ser executada

function primeiraFuncao() {

    console.log('Hello Worls das Funções')

}

primeiraFuncao()

function dizerNome(nome) {

    console.log('O nome é ' + nome)

}
dizerNome('Matheus')

var nomeDoBancoDeDados = 'João'

dizerNome(nomeDoBancoDeDados)

function soma(a, b) {
    var soma = a + b
    return soma
}

var somaUm = soma(1, 2)

console.log(somaUm)

var somaDois = soma(4, 7)

console.log(somaDois)