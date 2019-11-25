var fs = require('fs')
var fetch = require('node-fetch')
var https = require('https')
var url = 'https://msn-comit.herokuapp.com/doc'

async function obtener() {
	var resultado = await fetch(url, {
		headers: {
			'Pastafrola': 'membrillo'
		}
	})
	var contenido = await resultado.text()
	console.log(contenido)
	fs.writeFileSync('documentacion.html',contenido)
}

obtener()