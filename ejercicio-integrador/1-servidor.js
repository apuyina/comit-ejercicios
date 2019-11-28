/*Servidor

Crear un servidor que responda ante un recurso que ustedes elijan, como "usuario", "puntaje", ..., con las acciones GET, POST, DELETE y PATCH.

Esto significa que si se hace un GET a "usuario", el servidor debería responderme con una lista de usuarios. Si se hace un POST a "usuario", se debería crear uno nuevo.*/

var http = require('http')
var url = "http://localhost:3000"
var fetch = require('node-fetch')
var fs = require('fs')
var path = require('path')
var ruta_puntajes = './puntajes.json'


var servidor = http.createServer(function(consulta,respuesta) {
	if (consulta.url === "/puntajes") {
        respuesta.end("Este es el contenido lpmmm")
        console.log("Escuchando...")
        if (consulta.method==='GET') {
            respuesta.setHeader('Content-Type', 'application/json')
            var lista_de_puntajes = puntajes.texto()
            respuesta.end(`{ Puntajes: ${lista_de_puntajes} }`)
        } else if (consulta.method==='POST'){
            var data = ''
            consulta.on('data', function (bloque_de_texto) {
            data += bloque_de_texto
        }
	}
})

servidor.listen(3000)