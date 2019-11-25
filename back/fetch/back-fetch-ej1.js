/*Hacer un programa que obtenga una URL por parámetro cuando se ejecute, y muestre por consola
la respuesta en forma de texto*/

var fetch = require('node-fetch')
var url = process.argv[2]

async function get() {
  var respuesta = await fetch(url, {
    headers: {
      Accept: 'text/plain'
    }
  })

  var texto = await respuesta.text()
  console.log(texto)
}

get()