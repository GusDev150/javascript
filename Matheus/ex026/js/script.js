// O objeto Number, pai dos números, contém métodos muito úteis para trabalahar com números em JS
// A maioria dos tipos de dado tamném tem um objeto pai, como: String, Object e Array

// parseFloat 10.0

let x = '12.999'

console.log(typeof x)

console.log(parseFloat(x))

console.log(typeof x)

console.log(Number.parseFloat('12.999'))

// parseInt

var g = '10'

console.log(parseInt(g))

var c = 16.96

console.log(parseInt(c))

// toFixed

console.log(23.9982310938120.toFixed(1))

// is NaN (true = false, false = true)

console.log(isNaN('teste'))
console.log(isNaN(12))
console.log(isNaN('14'))

// MAX_VALUE E MIN_VALUE

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

console.log(2.7976931348623157e+308)