/*
	📌 Expresiones Regulares dentro de formularios
	Podemos usar expresiones regulares para validar los campos de una forma más precisa.

	Guía de expresiones regulares:
	https://www.youtube.com/watch?v=wfogZfIS03U

	Ejemplo:
	https://regexr.com/71ua4
*/
const formulario = document.forms['formulario-donacion'];
formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const correo = formulario.correo.value;
	const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

	/*
		El metodo test lo podemos aplicar sobre una expresion regular
		Nos devuelve true o false dependiendo de si paso la prueba
	*/

	if (!expresionRegular.test(correo)) {
		console.log('El correo es invalido');
		return;
	}

	console.log('Enviando datos');
	console.log(correo);
});
