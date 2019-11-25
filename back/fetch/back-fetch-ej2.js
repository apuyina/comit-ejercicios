/*Hacer un programa que obtenga una URL por parámetro cuando se ejecute, y muestre por consola
la respuesta en forma de JSON*/

var fetch = require('node-fetch')
var url = process.argv[2]

async function get() {
  var respuesta = await fetch(url, {
  	headers: {
      Accept: 'application/JSON'
    }
  })
  var json = await respuesta.json()
  console.log(json)
}

get()