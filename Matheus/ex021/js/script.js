// Com  break podemos encerrar uma instrução
// Com o continue podemos pular uma instrução
// Utilizados na maioria das vezes em loops

for(var i = 10; i > 0; i--) {
    
    console.log(i)
    
    if(i === 5) {
        break
    }
}

console.log('Deu o break')

var x = 0

while(x < 100) {

    x += 10

    if(x === 20 || x === 90 || x === 50) {
        console.log('Continue')
        continue
    }

    console.log('Testando contine' + x)

}