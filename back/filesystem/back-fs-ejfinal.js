/* Crear un programa que cree una carpeta con la siguiente estructura:

titulo/
|__ index.html
|__ estilos.css
La carpeta deberá tener el mismo título que el que aparece en el archivo config.json.*/
var fs = require('fs')
var config = require('./config.json')

fs.mkdirSync(config.titulo)

var contenidoHtml = fs.writeFileSync('./El gran título/index.html',`
<html lang="es">
	<head>
		<title>@titulo@</title>
		<link rel="stylesheet" href="./estilos.css">
	</head>
	<body>
		<h1>@titulo@</h1>
		<h2>@subtitulo@</h2>
		<p>@descripcion@</p>
	</body>
</html>`)

contenido = fs.readFileSync('./El gran título/index.html','utf-8')
contenido = contenido.replace("@titulo@", config.titulo);
contenido = contenido.replace("@subtitulo@", config.subtitulo);
contenido = contenido.replace("@descripcion@", config.descripcion);

console.log(contenido)

fs.writeFileSync('./El gran título/estilos.css',
`body {
    margin: 0;
    text-align: center;
    background-color: tomato;
}

h1 {
    background-color: #333;
    color: #fafafa;
    padding: 20px;
}`)