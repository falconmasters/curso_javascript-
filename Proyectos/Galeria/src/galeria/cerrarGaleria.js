const galeria = document.getElementById('galeria');

const cerrarGaleria = () => {
	// Agregamos un overflow hidden al body.
	document.body.style.overflow = '';

	// Agregamos la clase active a la galeria.
	galeria.classList.remove('galeria--active');
};

export default cerrarGaleria;
