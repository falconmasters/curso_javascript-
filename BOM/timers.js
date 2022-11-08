/*
	📌 Eventos de Tiempo
	El Browser Object Model tambien nos da acceso a eventos de tiempo que nos permitiran
	ejecutar código cada cierto tiempo.

	Tenemos 2 metodos disponibles para trabajar con tiempo:
	- setTimeOut
	- setInterval
*/

/*
	📌 window.setTimeOut()
	Nos permite ejecutar una funcion despues de cierto tiempo.
*/

// const saludo = () => {
// 	console.log('Hola!');
// };

// const iniciar = () => {
// 	console.log('Iniciando Timer');
// 	setTimeout(saludo, 5000);
// };

/*
	setTimeout nos devuelve un un id para identificar el temporizador.
	Podemos guardar ese id y luego utilizarlo para limpiar el temporizador.
*/
// let id;
// const iniciar = () => {
// 	console.log('Iniciamos el timeout');
// 	id = setTimeout(() => {
// 		console.log('Hola!');
// 	}, 5000);

// 	// Podemos acortarlo:
// 	// setTimeout(() => console.log('Saludos Carlos!'), 1000);
// };

// const parar = () => {
// 	console.log('Paramos la ejecución del timeout');
// 	clearTimeout(id);
// };

/*
	📌 window.setInterval()
	Nos permite ejecutar una funcion cada cierto tiempo.
*/
let cuenta = 0;
let id;

const iniciar = () => {
	id = setInterval(() => {
		cuenta++;
		console.log(cuenta);
	}, 1000);
};

const parar = () => {
	console.log('Paramos la cuenta');
	clearInterval(id);
};
