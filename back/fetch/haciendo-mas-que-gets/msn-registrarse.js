/*
Siguiendo la documentación:
1. Registrarse.

    Endpoint: /login
    Método: GET
    Respuesta: token para autentificarse
*/

var fs = require('fs')
var fetch = require('node-fetch')
var https = require('https')
var url = 'https://msn-comit.herokuapp.com/login'

async function registrarse() {
	var resultado = await fetch(url, {
	})
	var token = await resultado.text()
	console.log(token)
	return token
}

token = registrarse()

module.exports = registrarse