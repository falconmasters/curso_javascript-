'use strict';

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

console.log('Soy codigo que se ejecuta desde el archivo emptyExport.js');

const correo = 'correo@correo.com';

/* 
	📌 Named Imports
	Podemos importar variables y funciones que han sido exportadas mediante la palabra "export".
	Podemos importarlas con el mismo nombre o podemos usar un alias usando la palabra "as".
	Normalmente todos los import se establecen al inicio del documento.
*/
console.log(obtenerUsuario());
console.log(correo);
