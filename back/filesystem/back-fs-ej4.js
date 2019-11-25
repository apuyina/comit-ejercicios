/* 4. Crear un programa que cree un archivo "index.html", que contenga como contenido: */

var fs = require ('fs')

fs.writeFileSync('index.html',`
<html lang="es">
	<head>
		<title>@titulo@</title>
	</head>
	<body>
		<h1>@titulo@</h1>
		<h2>@subtitulo@</h2>
		<p>@descripcion@</p>
	</body>
</html>`)