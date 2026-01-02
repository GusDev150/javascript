// Caso a instrução de if seja negativa, podemos adicionar else
// Que será a outra condicional a ser executada
// Podemos então criar uma bifurcação no código
// Já o else if tem a possibilidade de fazer outra verificação e adicionar mais um bloco de código

var nome = 'Gustavo'

if (nome == 'Romário') {
    console.log('O nome dele é Romário')
} else if(nome == 'Gustavo') {
    console.log('Seu nome é Gustavo')
} else if (nome == 'Rodrigo') {
    console.log('Seu nome é Rodrigo')
} else {
    console.log('Você possui outro nome!')
}


var idade = 18

if (idade > 20) {
    console.log('Ele pode entrar na festa!')
} else if (idade >= 18) {
    console.log('Só pode entrar com autorização!')
} else {
    console.log('Não pode entrar na festa! Ele(a) é menor de idade!')
}


if (nome == 'Gustavo') {
    console.log('teste')
} else {
    console.log('testando')
}