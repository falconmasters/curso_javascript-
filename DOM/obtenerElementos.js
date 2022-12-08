/*
	📌 El Document Object Model nos da metodos que podemos utilizar
	para poder obtener elementos de la página web.
	- getElementById
	- children
	- parentElement
	- getElementsByTagName
	- getElementsByClassName
	- querySelectorAll
	- querySelector
	- closest
	- matches
*/

/*
	📌 getElementById
	Nos permite obtener un elemento en base a su atributo id
*/
const contenedor1 = document.getElementById('contenedor1');
console.log(contenedor1);

/* 
	📌 children
	Nos permite obtener los elementos hijo
*/
console.log(contenedor1.children);

/*
	📌 parentElement
	Nos permite obtener el elemento padre de un elemento
*/
console.log(contenedor1.parentElement);

/*
	📌 getElementsByTagName
	Nos permite obtener una colección de elementos en base a la etiqueta.
	Nota: Devuelve una colección HTML. Una colección no es un arreglo.
*/
const divs = document.getElementsByTagName('div');
console.log(divs);

// Las colecciones incluyen algunas propiedades especiales como length
console.log(`Tenemos ${divs.length} divs en la página`);

/*
	📌 getElementsByClassName
	Nos permite obtener una colección de elementos en base a su clase CSS.
	Nota: Devuelve una colección HTML.
*/
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

/*
	📌 querySelector
	Nos devuelve el primer elemento que coincida con un selector estilo CSS.
	Nota: Devuelve un nodelist.
*/
const primeraCaja = document.querySelector('#contenedor1 .caja');
console.log(primeraCaja);

/*
	📌 querySelectorAll
	Nos permite obtener una colección de elementos en base a un selector estilo CSS.
	Nota: Devuelve un nodelist. 
*/
const cajas = document.querySelectorAll('.contenedor-principal .caja');
console.log(cajas);

// nodelist tiene un metodo de tipo foreach para recorrer los elementos.
cajas.forEach((caja) => {
	console.log(caja.innerHTML);
});

/* 
	📌 closest
	Nos permite buscar de adentro hacia afuera en busca de un elemento
*/
const ultimaCaja = document.querySelector('.caja:last-child');
console.log(ultimaCaja.closest('.contenedor-principal'));

/* 
	📌 Podemos encadenar todos los metodos para obtener elementos.
*/
/* 
	Muchas veces con querySelector resolvemos casi cualquier caso.
	Pero aun asi tendremos situaciones donde tendremos que encadenar selectores.
*/
const contenedor2 = document.getElementById('contenedor2');
const contenedor2Caja2 = contenedor2.querySelector('.caja');
console.log(contenedor2Caja2);
