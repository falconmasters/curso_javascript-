/*
	📌 A los elementos del DOM que obtenemos, Javascript les
	 agrega metodos y propiedades que nos permitiran modificarlos.
*/

/* 📌 elemento.innerHTML
	Nos permite cambiar el contenido HTML de un elemento
*/
const primeraCaja = document.querySelectorAll('.caja')[0];
primeraCaja.innerHTML = '<b>Hola!</b>';

/* 📌 elemento.attribute
	Nos permite acceder y cambiar atributos del elemento.
*/
primeraCaja.id = 'nuevoId';

/* 📌 elemento.setAttribute()
	Nos permite agregar o establecer el valor de un atributo del elemento
*/
primeraCaja.setAttribute('class', 'caja activa');
primeraCaja.setAttribute('data-id', 1);
console.log(primeraCaja);

/* 📌 elemento.style.property
	Nos permite cambiar los estilos css de un elemento
*/
const contenedor2Caja1 = document.querySelector('#contenedor2 .caja');
contenedor2Caja1.style.background = '#000';
contenedor2Caja1.style.color = '#fff';
contenedor2Caja1.style.textTransform = 'uppercase';
