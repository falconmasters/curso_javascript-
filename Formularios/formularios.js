/*
	📌 Formularios

	Tenemos dos formas de acceder a los formularios.
	- Mediante el objeto forms
	- Mediante métodos del DOM
*/

/*
	📌 Mediante el objeto forms
*/
/*
	El objeto forms contiene los formularios del documento.
	Podemos acceder a cada uno mediante su id
	Tambien podemos acceder a los inputs mediante su id o name
	console.log(document.forms['formulario-donacion']['correo']);

/*
	📌 Mediante métodos del DOM 
*/
const correo = document.querySelector('#formulario-donacion [name="correo"]');

/*
	📌 Cada input tiene propiedades a las que podemos acceder	
	para obtener sus atributos, valores, etc.
*/
const botonEnviar = document.getElementById('btnEnviar').addEventListener('click', (e) => {
	// Prevenimos el comportamiento por defecto del boton.
	// Por defecto los botones dentro de una etiqueta <form> intentaran enviar los datos
	// mediante una petición POST a la propia página y como parametros en la barra de direcciones.
	// e.preventDefault();

	// Obtener el valor de un input
	console.log(correo.value);
	console.log(document.forms['formulario-donacion']['pais'].value);

	// Podemos ahorrarnos codigo
	const formulario = document.forms['formulario-donacion'];

	console.log(formulario['donacion'].value);

	// formulario es un objeto asi que podemos acceder tambien de esta forma:
	console.log(formulario.fecha.value);

	// Para elementos que tengan un guion si tenemos que usar brackets
	console.log(formulario['terminos-y-condiciones'].checked);
});
