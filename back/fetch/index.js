var fetch = require('node-fetch')
var url = 'https://emoji-aleatorio.herokuapp.com/emoji'

async function obtenerEmoji() {
    var resultado = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    var json = await resultado.json()
    console.log(json.emoji)
}

obtenerEmoji()