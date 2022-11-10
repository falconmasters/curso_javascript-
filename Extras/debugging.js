/*
	📌 Debugging con javascript

	Hacer debugging significa encontrar errores que podamos tener en nuestra aplicación.
	Existen varias formas de hacerlo:
	
	- mediante mensajes de consola como console.log(),
	- mediante las herramientas de desarrollador del navegador web
		- breakpoints
		- palabra "debugger"
*/

const usuario = {
	nombre: '',
	edad: 0,
	acceso_permitido: true,
};

// Registramos los datos del usuario
document.getElementById('boton1').addEventListener('click', () => {
	usuario.nombre = prompt('Ingresa tu nombre');

	/*
		📌 Mediante consola
	*/
	console.log(usuario);

	/*
		📌 Mediante palabra debugger
	*/
	// debugger;

	/*
		📌 Mediante breakpoint
	*/

	usuario.edad = prompt('Ingresa tu edad');

	if (usuario.edad >= 18) {
		acceso_permitido = true;
	} else {
		acceso_permitido = false;
	}
});
