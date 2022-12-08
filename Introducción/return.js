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
