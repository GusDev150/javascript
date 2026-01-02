// Os métodos de string também auxiliam na sua modificação
// Podemos por exemplo deixar a fonte em caixa alta ou baixa em JS

// toLowerCase and toUpperCase

var frase = 'Essa é a frase que vamos manipular'

var fraseCaixaAlta = frase.toUpperCase()

console.log(fraseCaixaAlta)

console.log(frase.toLowerCase())

// trim

var nome = '                       Matheus                        '

var nomeTrim = nome.trim()

console.log(nomeTrim)

// split

console.log(frase.split(' '))

var tags = 'Php, JavaScript, HTML, CSS'

console.log(tags.split(', '))

// lastIndexOf

var fraseDois = 'Eu quero a última palavra dessa frase teste'

console.log(fraseDois.indexOf('teste')) // A primeira letra

console.log(fraseDois.lastIndexOf('teste')) // A última letra