/*
	📌 Sets
	Los sets son una especie de arreglo que pero solo puede contener valores unicos.
*/

// Crear un set
const colores = new Set(['rojo', 'verde', 'azul']);

// Agregar valores al set
colores.add('amarillo');

// Si intentamos agregar un valor repetido al set, este no se agregara
colores.add('amarillo');
console.log(colores);

// Set tambien tiene el metodo forEach para recorrer los elementos
colores.forEach((color) => console.log(color));

// Los set pueden contener cualquier tipo de dato.
const numeros = new Set([1, 2, 3, 4, 4, 4, 5]);
console.log(numeros);
