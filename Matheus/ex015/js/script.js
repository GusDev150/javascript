// Nas linguagens de programação exisem os operadores lógicos
// Estes operadores realizam comparações para que seja retornado um true ou false
// Decidindo então o fluxo da aplicação
// Utilizando principalmente nas intruções de condição e repetição, em conjunto dos operadores de comparação

var idade = 16
var nome = 'Gustavo'

if (nome == 'Gustavo' && idade == 16) { // Quando usamos o &&, ambas informações necessitam estar corretas para passar pelo if
    console.log('O Gustavo pode entrar na aula de esgrima')
} else {
    console.log('Este não é o Gustavo')
}

if((1 == 1 && 3 > 2) && true) {
    console.log('Passou')
}

if (nome === 'Gustavo' && idade >= 14) {
    console.log('Passou novamente!')
}