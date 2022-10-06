import cargarGastos from './cargarGastos';
import cargarTotalGastado from './cargarTotalGastado';
import { abrirFormularioGasto } from './eventoBtnFormularioGasto';

const gastos = document.getElementById('gastos');
gastos.addEventListener('click', (e) => {
	e.preventDefault();

	const target = e.target;

	if (target.closest('.gasto__info')) {
		const gasto = target.closest('.gasto__info').parentElement;
		if (gasto.scrollLeft > 0) {
			target.closest('.gasto__info').scrollIntoView({
				behavior: 'smooth',
				inline: 'start',
				block: 'nearest',
			});
		} else {
			gasto.querySelector('.gasto__acciones').scrollIntoView({
				behavior: 'smooth',
				inline: 'start',
				block: 'nearest',
			});
		}
	}

	// Editar gasto
	if (target.closest('[data-accion="editar-gasto"]')) {
		// Obtenemos el id del gasto que queremos editar.
		const id = target.closest('.gasto').dataset.id;

		// Obtenemos los gastos guardados
		const gastosGuardados = JSON.parse(window.localStorage.getItem('gastos'));
		let indexGastoAEditar;

		if (gastosGuardados) {
			// Obtenemos el index del gasto guardado que queremos editar.
			gastosGuardados.forEach((gasto, index) => {
				if (gasto.id === id) {
					indexGastoAEditar = index;
				}
			});

			// Extraemos la descripcion y el precio del gasto guardado.
			const { descripcion, precio } = gastosGuardados[indexGastoAEditar];

			// Le ponemos la descripcion y el precio a los inputs del formulario.
			document.querySelector('#formulario-gasto #descripcion').value = descripcion;
			document.querySelector('#formulario-gasto #precio').value = precio;
			document.querySelector('#formulario-gasto').dataset.id = id;
		}

		cargarGastos();
		cargarTotalGastado();
		// Abrimos el formulario gasto en modo editar.
		abrirFormularioGasto('editarGasto');
	}

	// Eliminar gasto
	if (target.closest('[data-accion="eliminar-gasto"]')) {
		// Obtenemos el id del gasto que queremos eliminar.
		const id = target.closest('.gasto').dataset.id;

		// Obtenemos los gastos guardados
		const gastosGuardados = JSON.parse(window.localStorage.getItem('gastos'));

		if (gastosGuardados) {
			const nuevosGastos = gastosGuardados.filter((gasto) => {
				if (gasto.id !== id) {
					return gasto;
				}
			});

			window.localStorage.setItem('gastos', JSON.stringify(nuevosGastos));
		}

		cargarGastos();
		cargarTotalGastado();
	}
});
