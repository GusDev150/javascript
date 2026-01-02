// Funcionam como um array associatico de outras linguagens
// Podemos criar propriedades com chave e valor
// A ideia é guardar um conjunto de valores para utilizar posteriormente

var obj = {
    Nome: 'Gustavo',
    Idade: 16,
    EstadoCivil: 'Solteiro',
    EstaTrabalhando: false,
}

console.log(obj)

console.log(typeof obj)

console.log(obj.Nome)
console.log(obj.Idade)
console.log(obj.EstadoCivil)
console.log(obj.EstaTrabalhando)

console.log(`O meu nome é ${obj.Nome}!`)

obj.Nome = "Guilherme"

console.log(obj.Nome)

console.log(obj.Nome)

obj.graduacao = true

console.log(obj)