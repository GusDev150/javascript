let l = document.querySelector('section#result')

function somar() {
    let r = document.querySelector('section#result')
    let n1 = Number(window.prompt('Digite o primeiro número'))
    let n2 = Number(window.prompt('Digite o segundo número'))
    
    let soma = n1 + n2
    r.innerHTML += `<p>A soma entre ${n1} e ${n2} é igual a ${soma}.</p>`
}

function limpar (){
    l.innerHTML = '<p>Clique no botão acima para somar<p>'
}
