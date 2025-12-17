// O Operador lógico || é conhecido também como OR
// Quando usamos o ||, ele retorna true caso uma das operações retorne verdadeiro.
// O OR retorna false apenas se as duas expressões são verdadeiro

var idade = 16
var nome = 'Gustavo'

if (nome == 'Gustavo' || idade > 14) {
    console.log('Pode entrar na aula de esgrima')
} else {
    console.log('Não pode entrar')
}


if (nome == 'Gustavo' && (30 > 20 || 10 == 10)) {
    console.log('Testado')
} else {
    console.log('Não entrou')
}