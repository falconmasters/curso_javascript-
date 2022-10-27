/*
	El operador ternario nos permite hacer condicionales abarcando menos codigo que si utilizaramos un condicional if.
*/

// Ejemplo de condicional sin operador ternario.
// const edad = 15;
// let accesoPermitido;

// if (edad > 18) {
// 	accesoPermitido = true;
// } else {
// 	accesoPermitido = false;
// }

// Ejemplo con operador ternario
const edad = 15;
const accesoPermitido = edad > 18 ? true : false;

// Ejemplo 2 - No siempre es necsario guardar el valor en una variable
edad >= 18 ? console.log('Mayor de edad') : console.log('Menor de edad');
