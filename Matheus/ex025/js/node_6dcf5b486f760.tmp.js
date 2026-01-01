// Utilizando let e const podemos criar escopo até em instruções como if
// Deixando o código mais confiável
// Separando cada bloco em um escopo

let x = 5 // var x = 5

const y = 10

// No const não podemos alterar o valor original, como por exemplo 'y = 12'

// Como o próprio nome diz, é uma constante, ou seja, não é alterado

x = 12

console.log(x)

console.log('const' + y)

if(true) {
    
    let x = 20

    console.log(x)

    const y = 50

    console.log('const if' + y)
}

console.log(x)


if(20 > 10) {

    const y = 100

    console.log('const if 2 ' + y)

}


for(let x = 0; x = 10; x++) {
    console.log(x)
}