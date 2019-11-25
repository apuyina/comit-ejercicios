/* 2. Subir un mensaje.
Crear

    Endpoint: /mensajes
    Método: POST
    Headers
        token: [token obtenido al autentificarse]
    Respuesta: Identificador del mensaje
*/

var fs = require('fs')
var fetch = require('node-fetch')
var https = require('https')
var url = 'https://msn-comit.herokuapp.com/mensajes'

async function postear() {
	var respuesta = await fetch(url, {
		method: 'POST'
		Headers: {
			token: '5ec945bd192d1c1f6434'
		}
		body: 'Hola mundo'
	})
    var posteo = await respuesta.text()
    console.log(posteo)
}

postear()