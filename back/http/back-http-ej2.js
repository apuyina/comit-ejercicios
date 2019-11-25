/*2. Como el ejercicio anterior, solo que ahora debe responder con un JSON { "respuesta": "mundo" }. 
Usar la función JSON.stringify(objeto) para enviar la respuesta como texto.*/

var http = require("http")
var respuesta = {
	respuesta : "Mundo"
}

var servidor = http.createServer(function(consulta,res) {
	if (consulta.url === "/hola") {
		res.end(JSON.stringify(respuesta));
		console.log(respuesta)
	}
})

servidor.listen(3000)