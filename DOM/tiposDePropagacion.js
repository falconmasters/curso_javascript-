/*
	📌 	Cuando agregamos un evento a un elemento ese evento se propaga a los elementos hijo.
*/
/*
	📌 Bubbling (false, por defecto)
	En bubbling el evento del elemento hijo reacciona primero y despues el evento del elemento padre.
	
	📌 Capturing (true)
	En capturing el elemento padre reacciona primero y despues el elemento hijo.
*/
document.querySelector('.contenedor').addEventListener(
	'click',
	() => {
		console.log('Click en el contenedor');
	},
	false // Solo es necesario ponerlo en el elemento padre.
);

document.querySelector('.caja').addEventListener('click', () => {
	console.log('Click en la caja');
});

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
