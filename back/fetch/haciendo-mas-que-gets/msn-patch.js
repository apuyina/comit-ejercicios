/*4. Actualizar un mensaje.
Modificar

    Endpoint: /mensajes
    Método: PATCH
    Body: texto
    Headers
        token: [token obtenido al autentificarse]
        id: [identificador del mensaje]

*/

var fs = require('fs')
var fetch = require('node-fetch')
var https = require('https')
var url = 'https://msn-comit.herokuapp.com/mensajes'

async function modificar() {
    var respuesta = await fetch(url, {
        method: 'PATCH',
        headers: {
        	token: '3dc8eb9a429d9622d349',
        	id: '7e108b3a8828ac5163309c'
        },
        body: 'Hola mundoOOOOO'
    })
    var contenido = await respuesta.text()
    console.log(contenido)
}
modificar()