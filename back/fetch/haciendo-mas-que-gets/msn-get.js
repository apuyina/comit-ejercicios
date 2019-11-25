/*3. Ver sus mensajes.
Leer

    Endpoint: /mensajes
    Método: GET
    Headers
        token: [token obtenido al autentificarse]
    Respuesta: lista de mensajes
*/

var fs = require('fs')
var fetch = require('node-fetch')
var https = require('https')
var url = 'https://msn-comit.herokuapp.com/mensajes'

async function leer() {
    var respuesta = await fetch(url, {
        method: 'GET',
        headers: {
        	token: '3dc8eb9a429d9622d349',
        },
    })
    var contenido = await respuesta.text()
    console.log(contenido)
}
leer()