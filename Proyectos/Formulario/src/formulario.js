import marcarPaso from './marcarPaso';
import siguientePaso from './siguientePaso';
import validarCantidad from './validaciones/validarCantidad';
import validarNombre from './validaciones/validarNombre';
import validarCorreo from './validaciones/validarCorreo';

const formulario = document.getElementById('formulario');

// Reiniciando scroll al cargar el formulario.
formulario.querySelector('.formulario__body').scrollLeft = 0;

// Eventlistener para comprobar los campos de formulario cuando el usuario corrige.
formulario.addEventListener('keyup', (e) => {
	if (e.target.tagName === 'INPUT') {
		if (e.target.id === 'cantidad') {
			validarCantidad();
		} else if (e.target.id === 'nombre-receptor') {
			validarNombre();
		} else if (e.target.id === 'correo-receptor') {
			validarCorreo();
		}
	}
});

const btnFormulario = document.getElementById('formulario__btn');
btnFormulario.addEventListener('click', (e) => {
	e.preventDefault();

	// Validamos el paso actual.
	const pasoActual = document.querySelector('.linea-pasos__paso-check--active').closest('.linea-pasos__paso')
		.dataset.paso;

	if (pasoActual === 'cantidad') {
		if (validarCantidad()) {
			marcarPaso('cantidad');
			siguientePaso();
		}
	} else if (pasoActual === 'datos') {
		if (validarNombre() && validarCorreo()) {
			marcarPaso('datos');
			siguientePaso();
		}
	} else if (pasoActual === 'metodo') {
		marcarPaso('metodo');

		// Paso final, confirmación
		const opciones = { style: 'currency', currency: 'MXN' };
		const formatoMoneda = new Intl.NumberFormat('es-MX', opciones);

		// Obtenemos los valores del formulario y los pasamos a la seccion de confirmar.
		document.querySelector('[data-valor="cantidad"] span').innerText = formatoMoneda.format(
			formulario.cantidad.value
		);
		document.querySelector('[data-valor="nombre-receptor"] span').innerText = formulario['nombre-receptor'].value;
		document.querySelector('[data-valor="correo-receptor"] span').innerText = formulario['correo-receptor'].value;
		document.querySelector('[data-valor="metodo"] span').innerText = formulario.metodo.value;

		// Cambiamos el texto del btn a 'Transferir'
		btnFormulario.querySelector('span').innerText = 'Transferir';

		// Agregamos la clase que deshabilita el boton.
		btnFormulario.classList.add('formulario__btn--disabled');

		// Ocultamos el icono de siguiente.
		btnFormulario
			.querySelector('[data-icono="siguiente"]')
			.classList.remove('formulario__btn-contenedor-icono--active');

		// Mostramos el icono del banco.
		btnFormulario.querySelector('[data-icono="banco"]').classList.add('formulario__btn-contenedor-icono--active');

		siguientePaso();

		// Eliminamos la clase de disabled despues de 4 segundos.
		setTimeout(() => {
			btnFormulario.classList.remove('formulario__btn--disabled');
		}, 4000);

		// Comprobamos si estamos en el paso actual y el boton no tiene la clase de disabled
	} else if (pasoActual === 'confirmacion' && !btnFormulario.matches('.formulario__btn--disabled')) {
		// Aqui se haria una peticion al servidor, una redireccion, etc.

		// Cambiamos el texto del btn a 'Transferir'
		btnFormulario.querySelector('span').innerText = 'Transfiriendo';
		// Agregamos la clase que deshabilita el boton.
		btnFormulario.classList.add('formulario__btn--disabled');

		setTimeout(() => {
			formulario.classList.add('formulario--hidden');
			document.getElementById('alerta').classList.add('alerta--active');
		}, 4000);
	} else {
		siguientePaso();
	}
});
