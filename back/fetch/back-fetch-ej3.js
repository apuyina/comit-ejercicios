/*Hacer un programa que obtenga una URL por parámetro cuando se ejecute, y muestre por consola
el atributo EMOJI de la respuesta. Usar esta URL para asegurarse de que la respuesta tenga este
atributo: https://emoji-aleatorio.herokuapp.com/emoji */

var fetch = require('node-fetch')
var url = process.argv[2]

async function get() {
	var respuesta = await fetch(url)
	var data = await respuesta.json()
	console.log(data.emoji)
}
get()