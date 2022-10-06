import { v4 as uuidv4 } from 'uuid';

import cargarGastos from './cargarGastos';
import cargarTotalGastado from './cargarTotalGastado';
import { cerrarFormularioGasto } from './eventoBtnFormularioGasto';
const formulario = document.querySelector('#formulario-gasto form');

/**
 * Comprobamos que la descripcion cumpla con la expresion regular:
 * Solo letras, numeros, _ y -
 */
const descripcion = formulario.descripcion;
const precio = formulario.precio;

const expRegDescripcion = /^[a-zA-Z0-9\_\- ]{4,30}$/;

// Aceptamos cualquier digito (0-9), y un punto con decimales (opcional)
const expRegPrecio = /^\d+(\.\d+)?$/;

const comprobarDescripcion = () => {
	if (!expRegDescripcion.test(descripcion.value)) {
		// Si la expresion es incorrecta marcamos error
		descripcion.classList.add('formulario-gasto__input--error');

		formulario.descripcion.parentElement
			.querySelector('.formulario-gasto__leyenda')
			.classList.add('formulario-gasto__leyenda--active');

		// Si la descripcion es incorrecta retornamos false
		return false;
	} else {
		// Limpiamos los errores
		descripcion.classList.remove('formulario-gasto__input--error');

		formulario.descripcion.parentElement
			.querySelector('.formulario-gasto__leyenda')
			.classList.remove('formulario-gasto__leyenda--active');
		// Si la descripcion es correcta retornamos true
		return true;
	}
};

const comprobarPrecio = () => {
	if (!expRegPrecio.test(precio.value)) {
		// Si la expresion es incorrecta marcamos error
		precio.classList.add('formulario-gasto__input--error');

		formulario.precio.parentElement
			.querySelector('.formulario-gasto__leyenda')
			.classList.add('formulario-gasto__leyenda--active');
		// Si la descripcion es incorrecta retornamos false
		return false;
	} else {
		// Limpiamos los errores
		precio.classList.remove('formulario-gasto__input--error');

		formulario.precio.parentElement
			.querySelector('.formulario-gasto__leyenda')
			.classList.remove('formulario-gasto__leyenda--active');
		// Si la descripcion es correcta retornamos true
		return true;
	}
};

// Event listener para cuando los input pierden pierde el focus.
descripcion.addEventListener('blur', (e) => comprobarDescripcion());
precio.addEventListener('blur', (e) => comprobarPrecio());

// Event listener para cuando el input tiene un error y el usuario empieza a escribir para corregirlo.
descripcion.addEventListener('keyup', (e) => {
	// Comprobamos si el input tiene la clase de error
	if ([...e.target.classList].includes('formulario-gasto__input--error')) {
		// Comprobamos la descripcion.
		comprobarDescripcion();
	}
});

// Event listener para cuando el input tiene un error y el usuario empieza a escribir para corregirlo.
precio.addEventListener('keyup', (e) => {
	// Comprobamos si el input tiene la clase de error
	if ([...e.target.classList].includes('formulario-gasto__input--error')) {
		// Comprobamos la descripcion.
		comprobarPrecio();
	}
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	// Obtenemos el modo del formulario
	const modo = formulario.closest('.formulario-gasto')?.dataset?.modo;

	// Comprobamos que la descripcion y el precio sean correctos.
	if (comprobarDescripcion() && comprobarPrecio()) {
		// Creamos un objeto para el nuevo gasto.
		const nuevoGasto = {
			id: uuidv4(),
			fecha: new Date(),
			descripcion: descripcion.value,
			precio: precio.value,
		};

		// Obtenemos los gastos de local storage y agregamos el nuevo.
		const gastosGuardados = JSON.parse(window.localStorage.getItem('gastos'));

		if (modo === 'agregarGasto') {
			// Comprobamos si hay gastos
			if (gastosGuardados) {
				// Creamos una nueva lista de gastos que incluya el nuevo.
				const nuevosGastos = [...gastosGuardados, nuevoGasto];
				window.localStorage.setItem('gastos', JSON.stringify(nuevosGastos));
			} else {
				// Agregamos el primer gasto
				window.localStorage.setItem('gastos', JSON.stringify([{ ...nuevoGasto }]));
			}
		} else if (modo === 'editarGasto') {
			// Obtenemos el ID del gasto a editar.
			const id = document.getElementById('formulario-gasto').dataset?.id;

			// Obtenemos los valores de la descripcion y el precio.
			const descripcion = document.querySelector('#formulario-gasto #descripcion').value;
			const precio = document.querySelector('#formulario-gasto #precio').value;

			// Obtenemos el index del elemento a editar.
			let indexGastoAEditar;
			if (id && gastosGuardados) {
				gastosGuardados.forEach((gasto, index) => {
					if (gasto.id === id) {
						indexGastoAEditar = index;
					}
				});
			}

			// Hacemos una copia de los gastos guardados para poder editarla.
			const nuevosGastos = [...gastosGuardados];

			// Acceder al gasto que queremos editar, y ponerle todas las propiedades que ya tiene.
			// Y sobreescribimos con los nuevos cambios.
			nuevosGastos[indexGastoAEditar] = {
				...gastosGuardados[indexGastoAEditar],
				descripcion: descripcion,
				precio: precio,
			};

			// Remplazamos el localstorage con los nuevos gastos.
			window.localStorage.setItem('gastos', JSON.stringify(nuevosGastos));
		}

		// Cargamos los gastos en la interfaz.
		cargarGastos();
		cargarTotalGastado();
		cerrarFormularioGasto();

		descripcion.value = '';
		precio.value = '';
	}
});
