import data from '../data/fotos';
import { cargarImagen } from './cargarImagen';

const galeria = document.getElementById('galeria');

const slideClick = (e) => {
	// Obtenemos la categoria activa de la galeria.
	const categoriaActiva = galeria.dataset.categoria;

	// Obtenemos la ruta de la imagen accediendo al objeto de fotos y comparando el id del slide con el de las fotos.
	let id;
	let ruta;
	let nombre;
	let descripcion;

	data.fotos[categoriaActiva].forEach((foto) => {
		if (foto.id === parseInt(e.target.dataset.idFoto)) {
			id = foto.id;
			ruta = foto.ruta;
			nombre = foto.nombre;
			descripcion = foto.descripcion;
		}
	});

	// Cargamos toda la informacion de la nueva imagen
	cargarImagen(id, nombre, ruta, descripcion);
};

export default slideClick;
