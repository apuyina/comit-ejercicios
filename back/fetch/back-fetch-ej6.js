/* Usando headers
2. Hacer un programa que obtenga una URL por parámetro cuando se ejecute, y  que muestre por consola la respuesta en forma de JSON.
Se agrega el header Accept: text/plain a la consulta, y mostrar por consola el texto entrante, solo que ahora con el header
Accept: text/html, y guardarlo en un archivo salida.html.
Con la URL https://emoji-aleatorio.herokuapp.com/emoji.*/

var fs = require ('fs')
var fetch = require('node-fetch')
var https = require('https')
var url = 'https://emoji-aleatorio.herokuapp.com/emoji'

async function get() {
  var respuesta = await fetch(url, {
  	headers: {
      Accept: 'application/JSON'
    }
  })
  var json = await respuesta.json()
  console.log(json)
}

async function getxt() {
	var respuesta = await fetch(url, {
		headers: {
			Accept: 'text/html'
		}
	})
	var texto = await respuesta.text()
	console.log(texto);
	fs.writeFileSync('salida.html', texto)
}

get()
getxt()