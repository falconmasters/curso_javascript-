const validarNombre = () => {
	// Aceptamos cualquier digito (0-9), y un punto con decimales (opcional)
	const expRegNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

	// Obtenemos el input
	const inputNombre = formulario['nombre-receptor'];

	// Comprobamos que el nombre sea correcto.
	if (!expRegNombre.test(inputNombre.value)) {
		inputNombre.classList.add('formulario__input--error');
		return false;
	} else {
		inputNombre.classList.remove('formulario__input--error');
		return true;
	}
};

export default validarNombre;
