const botonesEmail = document.querySelectorAll('[data-action="abrir-ventana-correo"]');
const ventanaCorreo = document.getElementById('ventana-correo');

botonesEmail.forEach((boton) =>
	boton.addEventListener('click', (e) => {
		e.preventDefault();
		ventanaCorreo.classList.add('ventana--active');
	})
);

// Eventlistener para cerrar ventana con el boton.
ventanaCorreo.querySelector('button[data-action="cerrar-ventana"]').addEventListener('click', (e) => {
	e.preventDefault();
	ventanaCorreo.classList.remove('ventana--active');
});

// Eventlistener para cerrar ventana con el overlay.
ventanaCorreo.querySelector('.ventana__overlay').addEventListener('click', (e) => {
	e.preventDefault();
	if (e.target.matches('.ventana__overlay')) {
		ventanaCorreo.classList.remove('ventana--active');
	}
});
