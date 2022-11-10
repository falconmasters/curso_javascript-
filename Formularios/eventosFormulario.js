/*
	📌 Eventos para formularios
	Al trabajar con formularios podemos utilizar eventos para detectar 
	ciertas acciones y poder reaccionar ante ello.

	Por ejemplo podemos agregar event listeners para reaccionar:
	- Cuando el usuario intente enviar el formulario
	- Cuando el usuario cambie un valor en un input
	- Cuando el usuario elimine el foco de atención de un input,
	- Más
*/

const formulario = document.forms['formulario-donacion'];

/*
	📌 Evento submit
	Nos permite detectar cuando el usuario intenta enviar un formulario.
*/
formulario.addEventListener('submit', (e) => {
	// Tenemos que prevenir el comportamiento de otra forma el formulario enviara los datos
	// Y se reiniciara la página, por lo que el resto del código no se ejecutara.
	e.preventDefault();

	console.log('Enviando datos');
});

/*
	📌 Evento Change
	Nos permite detectar cuando hay un cambio en el valor de un input, select o textarea.
	Se ejecuta cuando cambiamos el valor del input y damos click fuera.
*/
formulario.pais.addEventListener('change', (e) => {
	console.log('El pais cambio');

	// Podemos obtener el nuevo valor
	console.log('El nuevo valor es: ' + e.target.value);
});

// Para los radio button y checkbox tenemos que agregar un eventlistener por input
formulario['cantidad-5'].addEventListener('change', () => console.log('La cantidad cambio'));
formulario['cantidad-10'].addEventListener('change', () => console.log('La cantidad cambio'));

formulario.fecha.addEventListener('change', () => console.log('La fecha cambio'));

/*
	📌 Evento Focus
	Nos permite detectar cuando un input recibe el foco de atención.
*/
// formulario.correo.addEventListener('focus', (e) => {
// 	console.log('El input correo ahora es el foco de atención');
// });

/*
	📌 Evento Blur
	Nos permite detectar cuando un input pierde el foco de atención.
*/
// formulario.correo.addEventListener('blur', (e) => {
// 	console.log('El input correo ya no es el foco de atención');
// });

/*
	📌 Evento keydown
	Nos permite detectar cuando una tecla es presionada sobre un input.
*/
formulario.correo.addEventListener('keydown', (e) => {
	// El evento nos devuelve que tecla fue presionada
	console.log(e);
});

/*
	📌 Evento keyup
	Se ejecuta cuando un una tecla es levantada al escribir sobre un input.
*/
formulario.correo.addEventListener('keydown', (e) => {
	// El evento nos devuelve que tecla fue presionada
	console.log(e);
});
