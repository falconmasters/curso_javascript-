/*
	📌 Métodos y propiedades para cadenas de texto
*/

/*
	📌 .length - Devuelve el numero de caracteres de una cadena de texto 
*/
// const texto = 'Hola yo soy Carlos!';
// console.log(texto.length);

/*
	📌 .indexOf() .lastIndexOf() - Devuelve el index del primer/último caracter especificado.
*/
// const texto = 'Hola yo soy Carlos!';
// console.log(texto.indexOf('o')); // 1
// console.log(texto.lastIndexOf('o')); // 16

/*
	📌 .slice() - Devuelve un fragmento de una cadena de texto.
	1er parametro - index desde donde queremos cortar
	2do parametro (opcional) - index hasta donde queremos cortar
*/
// const texto = 'Hola yo soy Carlos!';
// console.log(texto.slice(12, 18)); // Carlos

// La cadena de texto original no es modificada.
// console.log(texto);

// Si solo establecemos el primer parametro cortara desde esa posición.
// console.log(texto.slice(8)); // soy Carlos

// Si ponemos un valor negativo indicamos que queremos empezar de derecha a izquierda.
//console.log(texto.slice(-7, -1)); // Carlos

/*
	📌 .replace() - Devuelve una cadena de texto en donde remplaza un valor por otro.
	1er parametro - el texto que queremos remplazar
	2do parametro - el texto que queremos poner
*/
// const texto = 'Hola yo soy Carlos!';
// console.log(texto.replace('Carlos', 'Arturo')); // Hola yo soy Arturo!

/*
	📌 .split() - Convierte una cadena de texto en un arreglo.
	Tenemos que especificar donde cortar cada elemento.

	1er parametro - el caracter que funcionara como separador.
*/
// const texto = 'Hola yo soy Carlos!';
// console.log(texto.split(' '));

/*
	📌 .toUpperCase() .toLowerCase()
	Devuelve una cadena de texto de puras minisculas/mayusculas.
*/
// const texto = 'Hola yo soy Carlos!';
// console.log(texto.toUpperCase());
// console.log(texto.toLowerCase());

/*
	📌 Métodos para eliminar espaciados:
	.trim() - Devuelve una cadena de texto (String)	
	que elimina los espacios en blanco al inicio y final de una cadena de texto.

	.trimStart() - Igual que .trim() pero solo elimina espacios del inicio.
	.trimEnd() - Igual que .trim() pero solo elimina espacios del final.
*/
const texto = '   Hola yo soy Carlos!   ';
console.log(texto);

console.log(texto.trim());
console.log(texto.trimStart());
console.log(texto.trimEnd());
