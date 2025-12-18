var lista = ['Carro', 'Moto', 'Ônibus', 'Skate', 'Patins']

var listaUl = document.createElement('ul')

var body = document.getElementsByTagName('body')

body[0].appendChild(listaUl)

var listaNoBody = document.getElementsByTagName('ul')

for(var n = 0; n < lista.length; n++) {
    var liFor = document.createElement('li')

    var textoLi = document.createTextNode(lista[n])

    liFor.appendChild(textoLi)

    listaNoBody[0].appendChild(liFor)
}