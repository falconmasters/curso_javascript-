/* 📌 Los template strings son una nueva forma que tenemos en Javascript (ES6) para trabajar con cadenas de texto y que estas puedan incluir expresiones de javascript. Como variables por ejemplo.
 
También se les conoce como template literals. */
const nombre = 'Carlos';

// Formas de trabajar con variables y cadenas de texto.
// console.log('Hola ' + nombre + ' buenos dias.');

// Con template strings.
console.log(`Hola ${nombre} buenos dias`);

// Podemos trabajar con variables y operadores.
const amigos = ['Alejandro', 'Cesar', 'Manuel'];
console.log(`${nombre} tiene ${amigos.length} amigos`);

// Tambien son muy utiles para trabajar con HTML.
const plantilla = `
	<h1>${nombre} tiene ${amigos.length} amigos</h1>
`;

// Accedemos al objeto del documento.
// Luego a la propiedad body.
// Luego a la propiead innerHTML y le establecemos la plantilla.
document.body.innerHTML = plantilla;
