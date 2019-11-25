/*3. En una carpeta:
crear un archivo que varias funciones
    - multiplicar: multiplica 2 números que recibe por parámetros.
    - restar: resta 2 números que recibe por parámetros.
    - sumar: suma 2 números que recibe por parámetro.
crear un archivo "main.js" que importe las funciones anteriores,
y muestre por consola la multiplicación, resta y suma de los 2 números
que reciba por parámetro el programa (3 console.log).*/

function sumar(n1,n2){
    console.log (n1 + n2)
}
function restar(n1,n2){
    console.log (n1 - n2)
}
function multiplicar(n1,n2){
    console.log (n1 * n2)
}

module.exports =  {
    sumar: sumar,
    restar: restar,
    multiplicar: multiplicar
}