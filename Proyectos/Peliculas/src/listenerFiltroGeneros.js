const contenedor = document.getElementById('filtro-generos');
contenedor.addEventListener('click', (e) => {
	e.preventDefault();

	if (e.target.closest('button')) {
		// Eliminamos la clase active de cualquier otro boton.
		contenedor.querySelector('.btn--active')?.classList.remove('btn--active');

		// Agregamos la clase active al boton que clickamos.
		e.target.classList.add('btn--active');
	}
});
