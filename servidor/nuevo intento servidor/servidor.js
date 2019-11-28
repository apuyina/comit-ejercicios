var http = require("http")
var url = require('url')

var servidor = http.createServer(function(consulta,respuesta) {
	if (consulta.url === "/usuario") {
        respuesta.end("Este es el contenido lpmmm")
        console.log("Escuchando...")
	}
})

servidor.listen(3000)