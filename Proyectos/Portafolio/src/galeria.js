const trabajos = document.getElementById('trabajos');
const ventanaTrabajos = document.getElementById('ventana-trabajos');

const datos = [
	{
		id: '1',
		titulo: 'Trabajo #1',
		texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
		fecha: '1 de Enero de 2023',
	},
	{
		id: '2',
		titulo: 'Trabajo #2',
		texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
		fecha: '1 de Enero de 2023',
	},
	{
		id: '3',
		titulo: 'Trabajo #3',
		texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
		fecha: '1 de Enero de 2023',
	},
	{
		id: '4',
		titulo: 'Trabajo #4',
		texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
		fecha: '1 de Enero de 2023',
	},
	{
		id: '5',
		titulo: 'Trabajo #5',
		texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
		fecha: '1 de Enero de 2023',
	},
	{
		id: '6',
		titulo: 'Trabajo #6',
		texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
		fecha: '1 de Enero de 2023',
	},
];

trabajos.addEventListener('click', (e) => {
	e.preventDefault();

	// Comprobamos que el usuario de click en un trabajo
	const trabajoClickeado = e.target.closest('.trabajos__trabajo');

	if (trabajoClickeado) {
		// Obtenemos el id del trabajo clickeado
		const id = trabajoClickeado.dataset.id;

		// Extraemos la info del trabajo
		const trabajo = datos.filter((trabajo) => {
			if (trabajo.id === id) {
				return trabajo;
			}
		});

		ventanaTrabajos.querySelector('.ventana__titulo').innerText = trabajo[0].titulo;
		ventanaTrabajos.querySelector('.ventana__fecha').innerText = trabajo[0].fecha;
		ventanaTrabajos.querySelector('.ventana__parrafo').innerText = trabajo[0].texto;
		ventanaTrabajos.querySelector('.ventana__imagen').src = trabajoClickeado.querySelector('img').src;
	}
	ventanaTrabajos.classList.add('ventana--active');
});

// Eventlistener para cerrar ventana con el boton.
ventanaTrabajos.querySelector('button[data-action="cerrar-ventana"]').addEventListener('click', (e) => {
	e.preventDefault();
	ventanaTrabajos.classList.remove('ventana--active');
});

// Eventlistener para cerrar ventana con el overlay.
ventanaTrabajos.querySelector('.ventana__overlay').addEventListener('click', (e) => {
	e.preventDefault();
	if (e.target.matches('.ventana__overlay')) {
		ventanaTrabajos.classList.remove('ventana--active');
	}
});
