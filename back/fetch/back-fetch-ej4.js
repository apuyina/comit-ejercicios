/*Hacer un programa que obtenga una URL de una página, como https://nperrin.io , y guarda
la respuesta en un archivo llamado salida.html*/

var fs = require ('fs')

var fetch = require('node-fetch')
var url = process.argv[2]

async function get() {
  var respuesta = await fetch(url)
  var data = await respuesta.text()
  fs.writeFileSync('salida.html', data)
}

get()