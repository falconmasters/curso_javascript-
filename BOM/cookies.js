/*
	📌 Cookies
	Las cookies son pequeños archivos de texto que se guardan en la computadora del usuario.
	Estos archivos o cookies se utilizan para guardar información y que no se pierda al refrescar la página.
	
	Usos:
	- Guardar informacion del usuario que no queremos guardar en la base de datos.
	- Guardar preferencias o configuración del usuario.

	Las cookies se escriben como las variables:
	identificador=valor

	Otro uso de las cookies es cuando un navegador web va a mandar hacer un peticion a un servidor,
	las cookies que pertenecen a esa pagina son enviadas en la petición.
	De esta forma la información se guarda en la computadora del usuario pero el servidor puede acceder a ella.

	Con Javascript podemos, crear, editar y borrar cookies.
*/

/*
	Crear una cookie
	Al crear la cookie podemos tambien especificar cuando expira la cookie.
	Nota: Si no usamos la extension de Live Server no funcionara correctamente.
*/
const crearCookie = () => {
	document.cookie = 'nombre=Carlos';

	// Con expiración:
	// document.cookie = 'nombre=Carlos; expires=1 Jan 2023 01:00:00 UTC';
};

const iniciarSesion = () => {
	const usuario = prompt('Usuario:');
	document.cookie = `usuario=${usuario};expires=1 Dec 2022 01:00:00 UTC`;
	alert('Sesión Iniciada');
};

/*
	Leer cookies
*/
// const cookies = document.cookie;
// console.log(cookies);

/*
	Forma para obtener el usuario de las cookies.
*/
// Definimos la variable donde guardaremos el usuario
let usuario;

// Transformamos las cookies en un arreglo.
const cookies = document.cookie.split(';');

// Recorremos las cookies.
cookies.forEach((cookie) => {
	// Por cada cookie obtenemos su propiedad.
	const propiedad = cookie.split('=')[0];
	// Si la propiedad es usuario.
	if (propiedad === 'usuario') {
		// Tomamos el valor y lo guardamos en la variable.
		usuario = cookie.split('=')[1];
	}
});

// Comprobamos si hay un usuario;
if (usuario) {
	console.log('Hola ' + usuario);
} else {
	console.log('Por favor inicia sesión');
}

/*
	📌 Modificar cookies
	Para modificar una cookie basta con sobreescribir la anterior.
	Por ejemplo si iniciamos sesión con otro nombre.
*/

/*
	📌 Borrar cookies
	Para borrar una cookie tenemos que poner la fecha de expiración en el pasado.
	El navegador detectara que la cookie ya expiro y al reiniciar el navegador se borrara.
*/
const cerrarSesion = () => {
	document.cookie = 'usuario=; expires=01 Jan 2000 00:00:00 UTC';
	console.log('Hasta luego!');
};
