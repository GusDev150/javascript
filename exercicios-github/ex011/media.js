function media() {
    let nom = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(prompt(`Qual foi a primeira nota de ${nom}`))
    let n2 = Number(prompt(`Além de ${n1}, qual foi a outra nota de ${nom}?`))
    med = (n1 + n2) / 2

    let msg // cria uma váriavel e deixa ela vazia
    if (med >= 6) { // Se por acaso a média foi 6.0 ou mais...
        msg = 'Meus parabéns!'
    } else { // senão
        msg = 'Estude um pouco mais!'
    }
    // O if é uma estrutura que cria ima CONDIÇÃO, que executa um bloco de comandos ou outro, dependendo do resultado de um teste lógico.

    let res = document.getElementById('situacao')
    res.innerHTML = `<p>Calculando a média final de <mark>${nom}</mark>.</p>`
    res.innerHTML += `<p>A notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`
    res.innerHTML += `<p>A média final será <mark>${med}</mark>.</p>`
    res.innerHTML += `<p>A mensagem que temos é : <strong style='color:red;'>${msg}</strong></p>`
}