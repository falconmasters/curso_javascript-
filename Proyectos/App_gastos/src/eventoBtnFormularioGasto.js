const boton = document.getElementById('toggle-form-gasto');
const formularioGasto = document.getElementById('formulario-gasto');

// Funcion que cierra el formulario
const cerrarFormularioGasto = () => {
	// Ponemos el boton de cerrar y ocultamos el formulario
	boton.classList.remove('agregar-gasto__btn--active');
	formularioGasto.classList.remove('formulario-gasto--active');
};

// Funcion que abre el formulario
const abrirFormularioGasto = (modo = 'agregarGasto') => {
	// Ponemos el boton de abrir y mostramos el formulario
	boton.classList.add('agregar-gasto__btn--active');
	formularioGasto.classList.add('formulario-gasto--active');

	// Si abrimos el formulario en modo editarGasto cambiamos los textos.
	if (modo === 'editarGasto') {
		// Agregamos un dataset al formulario para indicar el modo.
		document.getElementById('formulario-gasto').dataset.modo = 'editarGasto';
		// Cambiamos los textos del titulo y boton.
		document.querySelector('.formulario-gasto__titulo').innerText = 'Editar Gasto';
		document.querySelector('.formulario-gasto__btn').innerText = 'Editar Gasto';
		// Salimos paramos la ejecución del resto de la funcion.
		return;
	}

	// Agregamos un dataset al formulario para indicar el modo.
	document.getElementById('formulario-gasto').dataset.modo = 'agregarGasto';
	// Cambiamos los textos del titulo y boton.
	document.querySelector('.formulario-gasto__titulo').innerText = 'Agregar Gasto';
	document.querySelector('.formulario-gasto__btn').innerText = 'Agregar Gasto';
};

boton.addEventListener('click', (e) => {
	e.preventDefault();

	// Pasamos la lista de clases a un arreglo y comprobamos si tiene la clase active.
	if ([...formularioGasto.classList].includes('formulario-gasto--active')) {
		cerrarFormularioGasto();
	} else {
		abrirFormularioGasto();
	}
});

export { cerrarFormularioGasto, abrirFormularioGasto };
