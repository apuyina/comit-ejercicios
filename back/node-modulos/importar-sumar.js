var sumar = require('./exportar-sumar.js')
var restar = require('./exportar-restar.js')

var n1 = parseInt(process.argv[2])
var n2 = parseInt(process.argv[3])

sumar(n1,n2)
restar(n1,n2)
