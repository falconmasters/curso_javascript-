/*
	📌 Cuando agregamos un evento a un elemento ese evento se propaga a los elementos hijo.

	Existen dos tipos de propagación de eventosÑ
	- bubbling (valor por defecto)
	- capturing

	Al definir un evento podemos pasar como tercer parametro verdadero o falso
	dependiendo de si queremos trabajar con capturing o bubbling.
	Por defecto sera falso.

	false - bubbling
	true - capturing
*/

/*
	📌 Bubbling
	En bubbling el elemento hijo reacciona primero y despues el elemento padre.
	Si no establecemos el tercer parametro, por defecto sera false - capturing
*/
// document.querySelector('.contenedor').addEventListener(
// 	'click',
// 	() => {
// 		console.log('Click en el contenedor');
// 	},
// false; // Solo es necesario ponerlo en el evento que propaga a los hijos.
// );

// document.querySelector('.caja').addEventListener('click', () => {
// 	console.log('Click en la caja');
// });

/*
	📌 Capturing
	En capturing el elemento padre reacciona primero y despues el elemento hijo.
*/
document.querySelector('.contenedor').addEventListener(
	'click',
	() => {
		console.log('Click en el contenedor');
	},
	true
);

document.querySelector('.caja').addEventListener('click', () => {
	console.log('Click en la caja');
});
