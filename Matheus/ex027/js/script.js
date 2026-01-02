// O objeto String também possui métodos muito úteis
// Que vão nos auziliar a manusear teztos nos nossos softwares

// length
var nome = 'Matheus'

console.log(nome.length)

var obj = 'bola'

console.log(obj.length)

// indexOf

console.log(nome[0])

var frase = 'O rato roeu a roupa do rei de Roma'

console.log(frase.indexOf('roeu')) // Mostra aonde começa a palavra 'roeu'

console.log(frase[7])

// slice

var roeu = frase.slice(7, 11)

console.log(roeu)

// replace

var novaFrase = frase.replace('roeu', 'comeu')

console.log(novaFrase)