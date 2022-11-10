/*
	📌 API para trabajar con fechas 
	Javascript expone su API para que podamos trabajar con fechas.

	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/*
	📌 Crear un objeto de fecha
	Para poder trabajar con fechas primero tenemos que crear un objeto de fecha.
*/
// Fecha actual
const fechaActual = new Date();

// Con una cadena de texto
// año-mes-diaThoras:minutos:segundos
const cumpleaños = new Date('1995-09-07T12:00:00');
console.log(cumpleaños);

/*
	📌 Metodos para trabajar con fechas
*/
// Convertir objeto de fecha a cadena de texto
console.log(fechaActual.toString());
console.log(fechaActual.toDateString());
console.log(fechaActual.toTimeString());

// Obtener mes
console.log(fechaActual.getMonth());

// Obtener día
console.log(fechaActual.getDate());

// Obtener año
console.log(fechaActual.getFullYear());

/*
	Si queremos hacer cosas más complejas con fechas podemos usar librerias como date-fns
	https://date-fns.org/
*/
