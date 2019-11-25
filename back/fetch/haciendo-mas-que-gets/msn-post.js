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
        method: 'POST',
        headers: {
        	token: '3dc8eb9a429d9622d349'
        },
        body: 'Hola mundo'
    })
    var contenido = await respuesta.text()
    console.log(contenido)
}
postear()