/*
	📌 Localstorage
	Localstorage es una API del navegador que nos va a permitir poder 
	guardar información de forma local, asi como las cookies.
*/

document.getElementById('boton1').addEventListener('click', () => {
	const nombre = prompt('Escribe tu nombre:');
	window.localStorage.setItem('nombre', nombre);
});

document.getElementById('boton2').addEventListener('click', () => {
	window.localStorage.removeItem('nombre');
});

// Comprobamos si hay un nombre guardado
if (window.localStorage.nombre) {
	console.log('Hola', window.localStorage.nombre);
} else {
	console.log('Hola usuario anonimo');
}

/*
	📌 Local Storage vs cookies

	Local Storage:
		- Se utilizan para guardar información de forma local.
		- Tiene un limite de 5mb por dominio.
		- La información de localstorage no tiene expiración. (se puede borrar con ccleaner por ejemplo)
	Cookies:
		- Se utilizan para mandar informacion entre el cliente (navegador web) y el servidor
		- Tienen un limite de 4kb.
		- Pueden tener fecha de expiración.
*/
