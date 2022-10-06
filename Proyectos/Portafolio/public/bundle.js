'use strict';

const botonesEmail = document.querySelectorAll('[data-action="abrir-ventana-correo"]');
const ventanaCorreo = document.getElementById('ventana-correo');

botonesEmail.forEach((boton) =>
	boton.addEventListener('click', (e) => {
		e.preventDefault();
		ventanaCorreo.classList.add('ventana--active');
	})
);

// Eventlistener para cerrar ventana con el boton.
ventanaCorreo.querySelector('button[data-action="cerrar-ventana"]').addEventListener('click', (e) => {
	e.preventDefault();
	ventanaCorreo.classList.remove('ventana--active');
});

// Eventlistener para cerrar ventana con el overlay.
ventanaCorreo.querySelector('.ventana__overlay').addEventListener('click', (e) => {
	e.preventDefault();
	if (e.target.matches('.ventana__overlay')) {
		ventanaCorreo.classList.remove('ventana--active');
	}
});

const galeria = document.getElementById('trabajos');
const observer = new IntersectionObserver(
	(entries) => {
		// Nos aseguramos de que haya pasado al menos medio segundo.
		if (entries[0].time > 500) {
			const trabajos = galeria.querySelectorAll('.trabajos__imagenes a');
			trabajos.forEach((trabajo, index) => {
				setTimeout(() => {
					trabajo.classList.add('trabajos__trabajo--visible');
				}, index * 200);
			});
		}
	},
	{
		rootMargin: '0px 0px 0px 0px',
		threshold: 0.5,
	}
);

window.addEventListener('load', observer.observe(galeria));

const trabajos = document.getElementById('trabajos');
const ventanaTrabajos = document.getElementById('ventana-trabajos');

const datos = [
	{
		id: '1',
		titulo: 'Trabajo #1',
		texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
		fecha: '1 de Enero de 2023',
	},
	{
		id: '2',
		titulo: 'Trabajo #2',
		texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
		fecha: '1 de Enero de 2023',
	},
	{
		id: '3',
		titulo: 'Trabajo #3',
		texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
		fecha: '1 de Enero de 2023',
	},
	{
		id: '4',
		titulo: 'Trabajo #4',
		texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
		fecha: '1 de Enero de 2023',
	},
	{
		id: '5',
		titulo: 'Trabajo #5',
		texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
		fecha: '1 de Enero de 2023',
	},
	{
		id: '6',
		titulo: 'Trabajo #6',
		texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
		fecha: '1 de Enero de 2023',
	},
];

trabajos.addEventListener('click', (e) => {
	e.preventDefault();

	// Comprobamos que el usuario de click en un trabajo
	const trabajoClickeado = e.target.closest('.trabajos__trabajo');

	if (trabajoClickeado) {
		// Obtenemos el id del trabajo clickeado
		const id = trabajoClickeado.dataset.id;

		// Extraemos la info del trabajo
		const trabajo = datos.filter((trabajo) => {
			if (trabajo.id === id) {
				return trabajo;
			}
		});

		ventanaTrabajos.querySelector('.ventana__titulo').innerText = trabajo[0].titulo;
		ventanaTrabajos.querySelector('.ventana__fecha').innerText = trabajo[0].fecha;
		ventanaTrabajos.querySelector('.ventana__parrafo').innerText = trabajo[0].texto;
		ventanaTrabajos.querySelector('.ventana__imagen').src = trabajoClickeado.querySelector('img').src;
	}
	ventanaTrabajos.classList.add('ventana--active');
});

// Eventlistener para cerrar ventana con el boton.
ventanaTrabajos.querySelector('button[data-action="cerrar-ventana"]').addEventListener('click', (e) => {
	e.preventDefault();
	ventanaTrabajos.classList.remove('ventana--active');
});

// Eventlistener para cerrar ventana con el overlay.
ventanaTrabajos.querySelector('.ventana__overlay').addEventListener('click', (e) => {
	e.preventDefault();
	if (e.target.matches('.ventana__overlay')) {
		ventanaTrabajos.classList.remove('ventana--active');
	}
});

const slider = document.getElementById('slider');

// Codepen fuente del slider:
// https://codepen.io/kellyex/pen/KKwwdYg?editors=0010

// Variable que guarda el estado de si tenemos el click presionado.
let clickPresionado = false;
let coordenadaInicial;
let scrollLeft; // Guardamos la posicion del scroll del slider

const presiona = (e) => {
	// console.log('presiona');
	clickPresionado = true;

	// e.pageX - Coordenada horizontal del evento. En que coordenada dimos click con respecto al documento.
	// slider.offsetLeft - El espacio entre el slider y la parte izquierda del documento.
	coordenadaInicial = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;

	console.log('startX: ', e.pageX);
	console.log('slider.offsetLeft: ', slider.offsetLeft);
	console.log('scrollLeft: ', slider.scrollLeft);
};
const mueve = (e) => {
	if (!clickPresionado) {
		return;
	}

	// console.log('mueve');
	// Espaciado entre la coordenada de inicio del slider y donde dimos click.
	const espaciado = e.pageX - slider.offsetLeft;
	const distanciaRecorrida = espaciado - coordenadaInicial;

	console.log('distancia: ', distanciaRecorrida);
	console.log('scrollLeft: ', scrollLeft);

	// Desplazamos el scroll.
	// A la posicion inicial del scroll cuando dimos click le restamos la distancia.
	slider.scrollLeft = scrollLeft - distanciaRecorrida;
};
const suelta = (e) => {
	// console.log('suelta');
	clickPresionado = false;
};

slider.addEventListener('mousedown', presiona);
slider.addEventListener('mousemove', mueve);
slider.addEventListener('mouseup', suelta);

/**
 * Funcion que se encarga de animar nuestros textos.
 * @param {DOMElement} texto Elemento del dom que queremos animar.
 */

const animarTexto = (texto, delay = 0) => {
	const numeroDeLetras = texto.dataset.texto.length;

	// Activamos el cursor cuando comienza la animacion.
	const cursor = texto.querySelector('.hero__cursor');
	cursor.classList.add('hero__cursor--visible');

	// Por cada letra, la agregamos al DOM con 100ms de separacion.
	for (let i = 0; i < numeroDeLetras; i++) {
		setTimeout(() => {
			const letra = document.createElement('span');
			letra.append(texto.dataset.texto[i]);
			texto.append(letra);
		}, 100 * i);
	}

	// Cambiamos la clase del cursor cuando termine la animacion de letras.
	setTimeout(() => {
		// Obtenemos los cursores.
		const cursores = [...texto.closest('.hero__header').querySelectorAll('.hero__cursor')];
		// Obtenemos el index del cursor actual.
		const indexCursorActual = cursores.indexOf(cursor);

		// Comprobamos que el cursor no sea el ultimo.
		if (indexCursorActual < cursores.length - 1) {
			// Si no es el ultimo, ocultamos el cursor.
			cursor.classList.remove('hero__cursor--visible');
		} else {
			// Si es el ultimo, le ponemos la clase de active.
			cursor.classList.add('hero__cursor--active');
		}
	}, 100 * numeroDeLetras);

	// Retornamos una promesa para saber cuando la animacion acabo.
	return new Promise((resolve) => setTimeout(resolve, 100 * numeroDeLetras));
};

// Ejecutamos las animaciones cuando termina de cargar.
window.addEventListener('load', async () => {
	await animarTexto(document.querySelector('.hero__titulo--uno'));
	await animarTexto(document.querySelector('.hero__titulo--dos'));

	document.querySelectorAll('.hero__burbuja')[0].classList.add('hero__burbuja--active-1');
	document.querySelectorAll('.hero__burbuja')[1].classList.add('hero__burbuja--active-2');
});
//# sourceMappingURL=bundle.js.map
