/*2. En una carpeta:
crear un archivo que exporte la función "siguiente", el cual retorne el siguiente de un número.
crear un archivo que exporte la función "suma", el cual retorne la suma de 2 números.
crear un archivo "main.js", el cual obtenga 2 números por parámetro y muestre por consola la 
suma del siguiente del primer parámetro, con el segundo parámetro.
Usando las funciones definidas en los otros archivos*/
var sumar = require('./exportar-sumar.js')
var siguiente = require('./exportar-siguiente.js')

var n1 = parseInt(process.argv[2])
var n2 = parseInt(process.argv[3])

sumar((siguiente(n1)),n2)