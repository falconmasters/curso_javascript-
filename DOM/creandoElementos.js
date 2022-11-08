/*
	📌 Agregando elementos al DOM
	
	Pasos a seguir:
	1. Crear un elemento del DOM
	2. Agregarle texto y atributos
	3. Insertar el elemento dentro del DOM
*/

const agregarCaja = () => {
	/*
		📌 1. Creamos el elemento
		createElement - Recibe como parametro una cadena de texto con la etiqueta que queremos crear.
	*/
	const nuevaCaja = document.createElement('div');

	/*
		📌 2. Agregamos texto y atributos
	*/
	// caja.innerHTML = '<b>Nuevo texto!</b>';
	nuevaCaja.innerText = 'Nueva caja!';
	nuevaCaja.setAttribute('id', 'nuevo-id');
	nuevaCaja.setAttribute('class', 'caja activa');

	/*
		📌 2. Agregamos el elemento al DOM
	*/
	const contenedor = document.getElementById('contenedor2');
	contenedor.appendChild(nuevaCaja);
};
