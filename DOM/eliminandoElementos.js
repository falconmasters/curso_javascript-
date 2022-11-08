/*
	📌 Eliminar elementos del DOM
*/

const eliminarCaja = () => {
	const cajaAEliminar = document.querySelector('#contenedor1 .caja');

	if (cajaAEliminar) {
		const padre = cajaAEliminar.parentElement;
		padre.removeChild(cajaAEliminar);
	}
};
