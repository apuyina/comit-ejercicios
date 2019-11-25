/*1. Crear un programa que inicialice un servidor en el puerto 3000, el mismo debe responder ante el endpoint /hola con el texto "mundo".*/
var http = require("http")

var servidor = http.createServer(function(consulta,respuesta) {
	if (consulta.url === "/hola") {
		respuesta.end("mundo")
	}
})

servidor.listen(3000)