// O Operador lógico ! é conhecico também como NOT
// Este operador muda o valor que a expressão retornou
// Se recebeu true vira dalse, se recebeu false vira true

if (!false) {
    console.log('Passou!')
} else {
    console.log('Não passou!')
}

var nome = 'Gustavo' 

if (!(nome == 'Julia')) {
    console.log('Ok')
}