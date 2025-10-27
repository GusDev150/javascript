function mediaAnual(){
    
    let dados = document.querySelector('section#resultAnual')
    
    let nome = window.prompt('Qual é nome do aluno?')
    let idade = Number(window.prompt('Quantos anos ele tem?'))
    
    let nota1 = Number(window.prompt(`Primeira nota de ${nome}`))
    let nota2 = Number(window.prompt(`Segunda nota de ${nome}`))
    let nota3 = Number(window.prompt(`Terceira nota de ${nome}`))
    let nota4 = Number(window.prompt(`Quarta nota de ${nome}`))
    
    let mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4

    dados.innerHTML += `
        <p>O aluno <mark>${nome}</mark>, com ${idade} anos, teve as seguintes notas:</p>
        <ul>
            <li>1º bimestre ${nota1.toFixed(1)}</li>
            <li>2º bimestre ${nota2.toFixed(1)}</li>
            <li>3º bimestre ${nota3.toFixed(1)}</li>
            <li>4º bimestre ${nota4.toFixed(1)}</li>
        </ul>
        <p>Sua média final é <strong>${mediaFinal.toFixed(1)}</strong>.</p>
    `
}
function mediaSemestral(){
    let res = document.querySelector('section#resultSemestral')
    
    let nome = window.prompt('Qual é o nome do aluno?')
    let idade = Number(window.prompt('Quantos anos ele tem?'))
    
    let n1 = Number(window.prompt(`Qual foi a nota do Primeiro bimestre do ${nome} ?`))
    let n2 = Number(window.prompt(`Qual foi a nota do Segundo Bimestre do ${nome} ?`))

    let somaFinal = (n1 + n2) / 2

    res.innerHTML += `
        O aluno <mark>${nome}</mark>, com ${idade} anos, teve as seguintes notas:</p>
        <ul>
            <li>1º bimestre ${n1.toFixed(1)}</li>
            <li>2º bimestre ${n2.toFixed(1)}</li>
        </ul>
        <p>Sua média Semestral é <strong>${somaFinal.toFixed(1)}</strong>.
        `
}