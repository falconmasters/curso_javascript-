/*
	📌 En las funciones podemos definir parametros, que son valores que la funcion puede utilizar.
*/
/*
 - Parametros: los valores especificados en la definición
 - Argumentos: los valores que le pasamos a la función cuando la invocamos.
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

// Las funciones de tipo flecha las podemos resumir en una linea de codigo
const operacion2 = (tipo, numero1, numero2) => (tipo === 'suma' ? numero1 + numero2 : numero1 - numero2);
console.log(operacion2('', 1, 1));
