/*6. Siguiendo nuevamente con lo anterior, pero ahora vamos a aceptar el método `POST` a nuestro endpoint `/emoji`. Cuando obtengamos un `POST` tendremos que agregar a la lista de emojis el que nos hayan pasado en el `body` de la conexión.

El servidor deberá seguir funcionando como antes para los métodos `GET` a `/emoji`.

No se olviden de responderle algo aunque les hagan `POST`.

### Aclaración importante

Ahora se está declarando la lista de emojis en la función `obtenerEmoji`. Para que se pueda acceder globalmente la variable `emojis`, la misma deberá ser declarada afuera de la función, y es la variable que luego se va a tener que usar.

Para agregar un emoji pueden usar la función `push` de Arrays.

```js
var colores = ['rojo', 'amarillo']

colores.push('azul')

console.log(colores) //> ['rojo', 'amarillo', 'azul']
```*/