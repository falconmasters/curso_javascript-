import data from './../data/fotos';
const galeria = document.getElementById('galeria');

/**
 * Funcion que se encarga de cargar la imagen activa.
 * @param {String} id ID de la imagen
 * @param {String} nombre Nombre o titulo de la imagen
 * @param {String} ruta Ruta a la imagen
 * @param {String} descripcion Descripcion de la imagen
 */
const cargarImagen = (id, nombre, ruta, descripcion) => {
	galeria.querySelector('.galeria__imagen').dataset.idImagen = id;
	galeria.querySelector('.galeria__titulo').innerText = nombre;
	galeria.querySelector('.galeria__imagen').src = ruta;
	galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;

	// Eliminamos la clase active de cualquier slide.
	galeria.querySelectorAll('.galeria__carousel-slide--active').forEach((elemento) => {
		elemento.classList.remove('galeria__carousel-slide--active');
	});

	// Marcamos la imagen del carousel como activa.
	const categoriaActual = galeria.dataset.categoria;
	const fotos = data.fotos[categoriaActual];

	let indexImagenActual;
	// Recorremos las imagenes en busca de una que tenga el id de la imagen actual y obtenemos su index.
	fotos.forEach((foto, index) => {
		if (foto.id === id) {
			indexImagenActual = index;
		}
	});

	// Ponemos la clase active en el elemento que fue clickeado.
	if (galeria.querySelectorAll('.galeria__carousel-slide').length > 0) {
		galeria
			.querySelectorAll('.galeria__carousel-slide')
			[indexImagenActual].classList.add('galeria__carousel-slide--active');
	}
};

const cargarAnteriorSiguiente = (direccion) => {
	const categoriaActual = galeria.dataset.categoria;
	const fotos = data.fotos[categoriaActual];

	// Obtenemos el ID de la imagen actual y lo transformamos en un numero.
	const idImagenActual = parseInt(galeria.querySelector('.galeria__imagen').dataset.idImagen);

	let indexImagenActual;
	// Recorremos las imagenes en busca de una que tenga el id de la imagen actual y obtenemos su index.
	fotos.forEach((foto, index) => {
		if (foto.id === idImagenActual) {
			indexImagenActual = index;
		}
	});

	if (direccion === 'siguiente') {
		// Comprobamos si aun hay mas fotos despues de la actual
		if (fotos[indexImagenActual + 1]) {
			const { id, nombre, ruta, descripcion } = fotos[indexImagenActual + 1];
			cargarImagen(id, nombre, ruta, descripcion);
		}
	} else if (direccion === 'anterior') {
		// Comprobamos si aun hay mas fotos despues de la actual
		if (fotos[indexImagenActual - 1]) {
			const { id, nombre, ruta, descripcion } = fotos[indexImagenActual - 1];
			cargarImagen(id, nombre, ruta, descripcion);
		}
	}
};

export { cargarImagen, cargarAnteriorSiguiente };
