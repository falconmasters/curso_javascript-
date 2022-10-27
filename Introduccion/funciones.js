/*
	Las funciones son bloques de código que nos permiten repetir acciones sin tener que duplicar código.
	Un ejemplo muy comun de donde se utilizan es cuando presionamos un boton, invocamos una funcion y ejecuta el codigo.
*/

// 📌 Forma #1
// function saludo() {
// console.log('Hola!');
// }

/* 📌 Invocamos la funcion
	Podemos invocar las funciones dentro de nuestro código, o con diferentes eventos.
	Por ejemplo cuando el usuario de click en un boton.
	
	Nota: Los parentesis son lo que invoca la función. Si no usamos parentesis solo tenemos una referencia de la función.
*/
// saludo(); // Invocamos la funcion
// const variable = saludo; // Guardamos la funcion en una variable

// 📌 Forma #2 - Asignando una funcion a una variable.
// const saludo = function () {
// 	console.log('Hola!');
// };
// saludo();

// 📌 Forma #3 - Funcion de tipo flecha
// const saludo = () => {
// 	console.log('Hola!');
// };
// saludo();

/*
	📌 En las funciones podemos definir parametros, que son valores que la funcion puede utilizar.
 - Parametros: los valores especificados en la definicion
 - Argumentos: los valores que le pasamos a la funcion cuando la invocamos.
*/

// const saludo = (nombre = 'amigo') => {
// 	console.log(`Hola, ${nombre}!`);
// };

// saludo('Carlos');
// saludo();

/*
	📌 Multiples parametros
*/
// const operacion = (tipo, numero1, numero2) => {
// 	console.log(tipo);

// 	if (tipo === 'suma') {
// 		console.log(numero1 + numero2);
// 	} else if (tipo === 'resta') {
// 		console.log(numero1 - numero2);
// 	}
// };

// operacion('resta', 2, 5);

/*
	Una buena practica es que las funciones se encarguen de realizar una sola tarea.
	La funcion anterior hace la operacion y luego la publica. Podemos optimizar el codigo con un return.
*/
/*
	📌 Sentencia Return
	La sentencia return nos permite que la funcion devuelva/retorne un valor.
	El return para la ejecucion del código dentro de la funcion.
*/
const operacion = (tipo, numero1, numero2) => {
	let resultado;

	if (tipo === 'suma') {
		resultado = numero1 + numero2;
		// return resultado;
	} else if (tipo === 'resta') {
		resultado = numero1 - numero2;
		// return resultado;
	}

	return resultado;
	console.log('Este codigo no se ejecuta');
};

console.log(operacion('resta', 10, 1));
console.log(operacion('suma', 100, 11));

const variable = operacion('suma', 5, 5);
console.log(variable);

// Las funciones de tipo flecha las podemos resumir en una linea de codigo
const operacion2 = (tipo, numero1, numero2) => (tipo === 'suma' ? numero1 + numero2 : numero1 - numero2);
console.log(operacion2('', 1, 1));
