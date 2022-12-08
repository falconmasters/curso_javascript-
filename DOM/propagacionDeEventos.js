/*
	📌 Propagación de eventos
	Nota importante:
	Cuando agregamos un evento a un elemento, todos los elementos que esten dentro del que recibio el evento
	tambien recibiran el mismo evento.

	Es decir que si le aplicamos un evento a un contenedor padre, todos los hijos tendran tambien el evento.
*/
const contenedor = document.getElementById('contenedor1');
contenedor.addEventListener('click', (e) => {
	console.log('Hiciste click en el contenedor');
});

primeraCaja.addEventListener('click', (e) => {
	// Podemos evitar la propagación:
	e.stopPropagation();

	console.log('Hiciste click en la caja1');
});
