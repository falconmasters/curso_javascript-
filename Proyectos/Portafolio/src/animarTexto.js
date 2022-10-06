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

export default animarTexto;
