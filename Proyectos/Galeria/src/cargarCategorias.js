/**
 * Archivo que se encarga de cargar las categorias.
 */

import dataCategorias from './data/categorias';
const { categorias } = dataCategorias;
const contenedorCategorias = document.getElementById('categorias');

// Cargamos las categorias en la pagina principal.
categorias.forEach((categoria) => {
	const nuevaCategoria = document.createElement('a');
	const plantilla = `
		<img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
		<div class="categoria__datos">
			<p class="categoria__nombre">${categoria.nombre}</p>
			<p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos</p>
		</div>
	`;

	// Agregamos la clase, href, dataset y la plantilla a la nueva categoria.
	nuevaCategoria.classList.add('categoria');
	nuevaCategoria.href = '#';
	nuevaCategoria.dataset.categoria = categoria.id;
	nuevaCategoria.innerHTML = plantilla;

	// Agregamos la categoria al contenedor de las categorias.
	contenedorCategorias.append(nuevaCategoria);
});
