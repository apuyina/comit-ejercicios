/*Crear un programa que haga un http GET al endpoint http://itsthisforthat.com/api.php?json y mostrar la respuesta en consola.*/
var http = require("http")

var url = 'http://itsthisforthat.com/api.php?json'

var conexion = http.get(url, function(response) {
  var data = ""

  response.setEncoding("utf8")
  response.on("data", function(bloque) {
    data += bloque
  })
  response.on("end", function() {
    console.log(`Respuesta: ${data}\n`)
    var json = JSON.parse(data)
    console.log(`Atributos: ${Object.keys(json)}\n`)
    console.log(`Valores: ${Object.values(json)}\n`)
  })
})

conexion.on("error", function(error) {
  console.error(error)
})