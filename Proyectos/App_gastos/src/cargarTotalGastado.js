import isThisMonth from 'date-fns/isThisMonth';
import { parseISO } from 'date-fns';

const cargarTotalGastado = () => {
	const contenedorTotalGastado = document.getElementById('total-gastado');
	const gastos = JSON.parse(window.localStorage.getItem('gastos'));
	let total = 0;

	if (gastos) {
		const gastosDelMes = gastos.filter((gasto) => {
			if (isThisMonth(parseISO(gasto.fecha))) {
				return gasto;
			}
		});

		if (gastosDelMes) {
			gastosDelMes.forEach((gasto) => {
				total += parseFloat(gasto.precio);
			});
		}
	}
	// Formateamos el numero y lo agregamos al contenedor.
	const formatoMoneda = new Intl.NumberFormat('en-MX', { style: 'currency', currency: 'MXN' });
	contenedorTotalGastado.innerText = formatoMoneda.format(total);
};

export default cargarTotalGastado;
