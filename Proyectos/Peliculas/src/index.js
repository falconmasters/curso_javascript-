import cargarTitulos from './cargarTitulos';
import cargarGeneros from './cargarGeneros';
import './listenerFiltroTipo';
import './listenerFiltroGeneros';
import './listenerBuscar';
import './paginacion';
import './listenerItems';
import './listenerPopup';
import fetchPopulares from './fetchPopulares';

const cargar = async () => {
	// Obtenemos los resultados.
	const resultados = await fetchPopulares('movie');

	if (resultados) {
		// Los cargamos en el DOM.
		cargarTitulos(resultados);
	}
};

cargar();
cargarGeneros('movie');
