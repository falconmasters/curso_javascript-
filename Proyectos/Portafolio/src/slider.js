const slider = document.getElementById('slider');

// Variable que guarda el estado de si tenemos el click presionado.
let clickPresionado = false;
let coordenadaInicial;
let scrollLeft; // Guardamos la posicion del scroll del slider

const presiona = (e) => {
	// console.log('presiona');
	clickPresionado = true;

	// e.pageX - Coordenada horizontal del evento. En que coordenada dimos click con respecto al documento.
	// slider.offsetLeft - El espacio entre el slider y la parte izquierda del documento.
	coordenadaInicial = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;

	console.log('startX: ', e.pageX);
	console.log('slider.offsetLeft: ', slider.offsetLeft);
	console.log('scrollLeft: ', slider.scrollLeft);
};
const mueve = (e) => {
	if (!clickPresionado) {
		return;
	}

	// console.log('mueve');
	// Espaciado entre la coordenada de inicio del slider y donde dimos click.
	const espaciado = e.pageX - slider.offsetLeft;
	const distanciaRecorrida = espaciado - coordenadaInicial;

	console.log('distancia: ', distanciaRecorrida);
	console.log('scrollLeft: ', scrollLeft);

	// Desplazamos el scroll.
	// A la posicion inicial del scroll cuando dimos click le restamos la distancia.
	slider.scrollLeft = scrollLeft - distanciaRecorrida;
};
const suelta = (e) => {
	// console.log('suelta');
	clickPresionado = false;
};

slider.addEventListener('mousedown', presiona);
slider.addEventListener('mousemove', mueve);
slider.addEventListener('mouseup', suelta);
