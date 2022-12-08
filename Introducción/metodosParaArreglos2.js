/* 📌 .indexOf()
	Obtenemos el primer index de un elemento.
	Si no hay elemento nos retorna -1
*/
const nombres = ['Carlos', 'Rafael', 'Estefania', 'Rodrigo', 'Rafael', 'Gema', 'Diana', 'Sara'];
console.log(nombres.indexOf('Rafael')); // 1
console.log(nombres.indexOf('Sergio')); // -1

/* 
	📌 .lastIndexOf() 
	Obtenemos el ultimo index de un elemento.
*/
console.log(nombres.lastIndexOf('Rafael')); // 4

/* 	
	📌 .foreach()
	Nos permite ejecutar una funcion por cada elemento
*/
nombres.forEach((nombre, index) => {
	console.log(`Hola ${nombre} (index: ${index})`);
});

/* 
	📌 .find()
	Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornemos.
*/
// Ejemplo donde obtenemos el primer nombre que empiece por una letra.
const letra = 'E';
const resultado = nombres.find((nombre) => {
	// Por cada elemento del arreglo ejecutamos la funcion
	// Si la primera letra de un dia empieza por A lo devolvemos.

	if (nombre[0] === letra) {
		return nombre;
	}
});
console.log(resultado);

/* 
	📌 .map()
	Nos permite ejecutar una función por cada elemento y crear un nuevo arreglo
	en base a los resultados de esa función.
*/
// Ejemplo: Crear arreglo que contiene los nombres en mayusculas.
const nombresMayusculas = nombres.map((nombre) => {
	return nombre.toUpperCase();
});

// Forma corta:
//const nombresMayusculas = nombres.map((nombre) => nombre.toUpperCase());
console.log(nombresMayusculas);

/* 📌 .filter()
	Nos permite ejecutar una funcion por cada elemento 
	y luego crear un arreglo en base a los resultados de esa función. 
*/
// Ejemplo: Crear un arreglo que contenga los nombres que tengan 4 letras.
const nombres4Letras = nombres.filter((nombre) => {
	if (nombre.length === 4) {
		return nombre;
	}
});
console.log(nombres4Letras);

/* 
	📌 .includes()
	Nos permite saber si el arreglo contiene un elemento especificado 
*/
console.log(nombres.includes('Julio')); // false
console.log(nombres.includes('Carlos')); // true

/* 
	📌 .every()
	Nos permite ejecutar un condicional sobre cada elemento y 
	nos devuelve true si TODOS los elemento cumplieron la condición.
*/
// Ejemplo: Comprobamos que todos los nombres sean cadenas de texto.
const nombresValidos = nombres.every((nombre) => {
	if (typeof nombre === 'string') {
		return true;
	} else {
		return false;
	}
});
console.log('¿Todos los nombres son validos? ' + nombresValidos); // True

/* 
	📌 .some()
	Nos permite ejecutar un condicional sobre cada elemento y
	nos devuelve true si algun elemento cumplio la condición. 
*/
const arregloInvalido = nombres.some((nombre) => {
	if (typeof nombre !== 'string') {
		return true;
	} else {
		return false;
	}
});
console.log('¿El arreglo es invalido? ' + arregloInvalido);
// true si hay algun valor invalido
// false si no hay algun valor invalido
