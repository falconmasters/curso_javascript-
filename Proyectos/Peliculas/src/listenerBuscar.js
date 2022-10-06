import cargarTitulos from './cargarTitulos';
import fetchBusqueda from './fetchBusqueda';

const btn = document.getElementById('btn-buscar');

btn.addEventListener('click', async (e) => {
	e.preventDefault();

	const resultados = await fetchBusqueda();
	cargarTitulos(resultados);
});
