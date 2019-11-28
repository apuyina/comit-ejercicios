var http = require('http')
var url = "http://localhost:3000"

//Crear servidor
var servidor = http.createServer(function(consulta,respuesta) {
	if (consulta.url === "/usuario") {
        respuesta.end("Creo que funciona ahre")
        console.log("Servidor funcionando...")
        if (consulta.method==='GET') {
            async function obtener() {
                var respuesta = await fetch(url, {
                    mode:"no-cors",
                })
                var contenido = await respuesta.text()
                console.log(contenido)
                console.log("Todavía no hay contenido pero anda xdxdxx")
            } obtener()
        } else if (consulta.method==='POST') {

        } else if (consulta.method==='PATCH') {

        }
	} else {
        respuesta.statusCode = 404
        respuesta.end('Recurso no existe :(')
    }
})

servidor.listen(3000)

//Leer el archivo usuarios.json
