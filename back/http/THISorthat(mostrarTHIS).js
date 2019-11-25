/*Como el ejercicio anterior, solo que ahora debe mostrar el valor del atributo this en consola.*/
var http = require("http")

var url = 'http://itsthisforthat.com/api.php?json'

var conexion = http.get(url, function(response) {
  var data = ""

  response.setEncoding("utf8")
  response.on("data", function(bloque) {
    data = bloque
  })
  response.on("end", function() {
    var json = JSON.parse(data)
    console.log(`This: ${json.this}\n`)
  })
})