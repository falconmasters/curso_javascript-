import './ventanaCorreo';
import './animarGaleria';
import './galeria';
import './slider';

import animarTexto from './animarTexto';

// Ejecutamos las animaciones cuando termina de cargar.
window.addEventListener('load', async () => {
	await animarTexto(document.querySelector('.hero__titulo--uno'));
	await animarTexto(document.querySelector('.hero__titulo--dos'));

	document.querySelectorAll('.hero__burbuja')[0].classList.add('hero__burbuja--active-1');
	document.querySelectorAll('.hero__burbuja')[1].classList.add('hero__burbuja--active-2');
});
