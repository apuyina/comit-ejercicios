/*crear un archivo "main.js" que importe las funciones anteriores,
y muestre por consola la multiplicación, resta y suma de los 2 números
que reciba por parámetro el programa (3 console.log).*/

var funciones = require('./ejercicio3.js')

var n1 = parseInt(process.argv[2])
var n2 = parseInt(process.argv[3])
 
funciones.restar(n1,n2)
funciones.sumar(n1,n2)
funciones.multiplicar(n1,n2)