const obtenerGenero = (id, generos) => {
	let genero;

	generos.forEach((elemento) => {
		if (id === elemento.id) {
			genero = elemento.name;
		}
	});

	return genero;
};

export default obtenerGenero;
