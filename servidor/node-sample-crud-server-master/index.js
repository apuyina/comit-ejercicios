var http = require('http')
var url = require('url')
var crypto = require('crypto')
var fs = require('fs')
var path = require('path')
var ruta_bd = './perros.json'

function bd_values() {
    var perros_texto = fs.readFileSync(ruta_bd, 'utf-8').replace(/\n/, '')
    var perros_array = JSON.parse(perros_texto)
    var diccionario = new Map()
    perros_array.forEach(function (perro) {
        diccionario.set(perro.id, perro)
    })
    return diccionario
}

function bd_texto() {
    return fs.readFileSync(ruta_bd, 'utf-8').replace(/\n/g, '')
}

function bd_get(id) {
    var perros = bd_values()
    return perros.get(id)
}

function bd_set(id, perro) {
    var perros = bd_values()
    perros.set(id, perro)
    var perros_array = Array.from(perros.values())
    fs.writeFileSync(ruta_bd, JSON.stringify(perros_array))
}

function bd_delete(id) {
    var perros = bd_values()
    var borro = perros.delete(id)
    if (borro) {
        var perros_array = Array.from(perros.values())
        fs.writeFileSync(ruta_bd, JSON.stringify(perros_array))
    }
    return borro
}

var db_perros = {
    set: bd_set,
    delete: bd_delete,
    values: bd_values,
    get: bd_get,
    texto: bd_texto
}

function id_aleatorio() {
    return crypto.randomBytes(10).toString('hex')
}

function decodificar_contenido(contenido) {
    var contenido_bien = decodeURIComponent(contenido)
    return new url.URLSearchParams(contenido_bien)
}

var servidor = http.createServer(function (consulta, respuesta) {
    if (consulta.method === 'OPTIONS') {
        respuesta.setHeader('Access-Control-Allow-Origin', '*')
        respuesta.setHeader('Access-Control-Allow-Headers', 'id_perro, content-type')
        respuesta.setHeader('Access-Control-Allow-Methods', 'POST, DELETE, GET, OPTIONS, PATCH')
        return respuesta.end('')
    }
    
    // responder con recursos estáticos si la url no incluye `/api`
    if (!consulta.url.includes('/api')) {
        // esto no tiene en cuenta nada de seguridad
        try {
            var recurso = fs.readFileSync(path.join('./front', consulta.url))
            respuesta.end(recurso)
        } catch {
            respuesta.statusCode = 404
            respuesta.end('Recurso no encontrado')
        }
    }

    if (consulta.url === '/api/perros') {
        respuesta.setHeader('Access-Control-Allow-Origin', '*')

        // crear un perro
        if (consulta.method === 'POST') {
            var contenido = ''
            consulta.on('data', function (bloque_texto) {
               contenido += bloque_texto 
            })
            consulta.on('end', function () {
                var contenido_en_partes = decodificar_contenido(contenido)
                var id_perro = id_aleatorio()
                var nuevo_perro = {
                    id: id_perro,
                    nombre: contenido_en_partes.get('nombre'),
                    color: contenido_en_partes.get('color')
                }
                db_perros.set(id_perro, nuevo_perro)
                respuesta.end(id_perro)
            })
        }

        // leer listado perros
        if (consulta.method === 'GET') {
            respuesta.setHeader('Content-Type', 'application/json')
            var respuesta_contenido = db_perros.texto()
            respuesta.end(`{ respuesta: ${respuesta_contenido} }`)
        }
        
        // borrar perro
        if (consulta.method === 'DELETE') {
            var id_perro_a_borrar = consulta.headers.id_perro
            var respuesta_borrado = db_perros.delete(id_perro_a_borrar)
            respuesta.end(respuesta_borrado.toString())
        }

        // actualizar perro
        if (consulta.method === 'PATCH') {
            var id_perro = consulta.headers.id_perro
            var perro = db_perros.get(id_perro)

            if (!perro) {
                respuesta.statusCode = 404
                return respuesta.end('Perro no encontrado')
            }
            
            var contenido = ''
            consulta.on('data', function (bloque_texto) {
               contenido += bloque_texto 
            })
            consulta.on('end', function () {
                var contenido_en_partes = JSON.parse(decodeURIComponent(contenido))
                db_perros.set(id_perro, {
                    nombre: contenido_en_partes.nombre,
                    color: contenido_en_partes.color,
                    id: id_perro
                })
                respuesta.end('actualizado!')
            })
        }
    } else {
        respuesta.statusCode = 404
        respuesta.end('Recurso no existe :(')
    }
})

servidor.listen(3000, function () {
    console.log('Estoy escuchando en el puerto 3000')
})
