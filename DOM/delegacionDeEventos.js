/*
	📌 Delegación de Eventos
	Gracias a la propagacion de eventos podemos evitar agregar un eventListener por cada elemento que tengamos,
	y agregar solamente un eventListener al elemento padre y que decida ejecutar código o no.
*/

/* 
	📌 Ejemplo sin delegación de eventos.
	Tenemos que agregar un evento por cada caja.
	Si tenemos muchas cajas esto puede ser un problema de rendimiento.
	
	Ademas de que tendremos problemas si hay elementos que son agregados o eliminados de forma dinamica.
 */
// const cajas = document.querySelectorAll('.caja');
// cajas.forEach((caja) => {
// 	caja.addEventListener('click', (e) => {
// 		console.log(`Click en la caja ${e.target.innerText}`);
// 	});
// });

/* 
	📌 Ejemplo con delegación de eventos.
	Agregamos solo un evento al contenedor padre.
	Al ser solo un evento es más optimo.
	
	Al trabajar con delegación de eventos no nos preocupamos 
	si hay elementos que son agregados o eliminados de forma dinamica
 */
const contenedorPadre = document.getElementById('contenedor1');
contenedorPadre.addEventListener('click', (e) => {
	// console.log('Ejecuta!');
	// Ejecuta si hacemos click en el contenedor o en los elementos hijos.

	// if (e.target.classList.contains('caja')) {
	// 	// Ejecuta solo si el elemento que fue clickeado tiene la clase caja.
	// 	console.log(`Hiciste click en la caja ${e.target.innerText}`);
	// }

	/* 
		📌 .matches()
		Con matches tambien podemos comprobar que el elemento tenga la clase caja.
		Con matches tenemos mas flexibilidad.
	*/
	if (e.target.matches('div.caja')) {
		// Ejecuta solo si el elemento que fue clickeado tiene la clase caja.
		console.log(`Hiciste click en la caja ${e.target.innerText}`);
	}
});
