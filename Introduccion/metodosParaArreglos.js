const colores = ['Rojo', 'Verde', 'Azul'];

// length (propiedad) - Nos permite conocer la cantidad de elementos de un arreglo.
// console.log(colores.length);

// toString - Nos permite transformar un arreglo a una cadena de texto para poder mostrarlo en el navegador.
document.body.innerHTML = colores.toString();

// push - Nos permite agregar un elemento al final de un arreglo.
colores.push('Amarillo');

// pop - Nos permite eliminar el ultimo elemento de un arrreglo.
colores.pop();

// concat - Nos permite juntar dos arreglos en uno solo.
const arreglo1 = [1, 2, 3];
const arreglo2 = ['A', 'B', 'C'];
const arreglo3 = arreglo1.concat(arreglo2);

// join - Nos permite transformar un arreglop a una cadena de texto y separar cada elemento.
// console.log(colores.join('|'));

// sort - Nos permite ordenar un arreglo de cadenas de texto, de forma alfabetica.
const letras = ['c', 'b', 'd', 'a'];
console.log(letras.sort());

// Tambien puede ordenar numeros.
const numeros = [3, 2, 4, 1];
console.log(numeros.sort());

// reverse - Nos permite ordenar un arreglo de forma descendente.
console.log(letras.reverse());
console.log(numeros.reverse());
