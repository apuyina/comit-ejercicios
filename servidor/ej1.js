var http = require('http')
var url = require('url')
var crypto = require('crypto')
var fs = require('fs')
var path = require('path')
var ruta_bd = './usuarios.json'

//Crear servidor
var servidor = http.createServer(function(consulta,respuesta) {
	if (consulta.url === "/usuario") {
		respuesta.end("Creo que funciona ahre")
	}
})

servidor.listen(3000)

//Otener el contenido del servidor
var url = "http://localhost:3000/usuario"
        
    async function recibir() {
        var respuesta = await fetch(url, {
            mode:"no-cors",
            method: 'GET'
        })
        var contenido = await respuesta.text()
        alert(contenido)
        }