/* 📌 Los arreglos son variables que nos permiten guardar multiples valores
	Cada valor puede ser de cualquier tipo.
*/
const arreglo = ['Texto', 456, true, { propiedad: 'valor' }, [0, 1, 2, 3]];
console.log(arreglo);

// Podemos acceder a los elementos del arreglo en base a su posicion.
// Empezando por el 0 (index)
const amigos = ['Alejandro', 'Manuel', 'Cesar'];
console.log(amigos[0]);

/* 📌 Otra forma de trabajar con arreglos es definirlo y luego llenarlo */
const colores = [];
colores[0] = 'Rojo';
colores[1] = 'Verde';

// Podemos saltarnos elementos
colores[3] = 'Blanco';

// Podemos sobreescribir valores
colores[3] = 'Amarillo';

/* Los arreglos dentro de javascript son objetos.
Esto es porque javascript les agrega una capa de propiedades y metodos.
*/
// Propiedad length, nos permite conocer cuantos elementos tiene un arreglo.
console.log('El arreglo colores tiene: ' + colores.length + ' colores');

// Metodo push, nos permite agregar elementos al final del arreglo.
colores.push('Azul');
console.log(colores);
