/*
	📌 Default Exports
	Cuando trabajamos con default exports solo podemos exportar una cosa del archivo.
	Con la ventaja de que podemos importarlo con el nombre que queramos
	
	Podemos exportar de dos formas:
	- Mediante las palabras export default antes de la variable. (No podemos usar var, const, let)
	- Al final de documento mediante las palabras export default <nombre_variable>
*/

// Forma 1 - mediante palabras export default
// export default () => {
// 	return {
// 		nombre: 'Carlos',
// 		correo: 'correo@correo.com',
// 	};
// };

// Forma 2 - Final del documento
const obtenerUsuario = () => {
	return {
		nombre: 'Carlos',
		correo: 'correo@correo.com',
	};
};

export default obtenerUsuario;
