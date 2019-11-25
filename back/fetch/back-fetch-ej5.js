/*Usando headers
1.
Hacer un programa que obtenga una URL por parámetro cuando se ejecute, y  que muestre por consola la respuesta en forma de JSON.
Se agrega el header Accept: text/plain a la consulta, y mostrar por consola el texto entrante.
Con la URL https://emoji-aleatorio.herokuapp.com/emoji.*/

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
			Accept: 'text/plain'
		}
	})
	var texto = await respuesta.text()
	console.log(texto)
}

get()
getxt()