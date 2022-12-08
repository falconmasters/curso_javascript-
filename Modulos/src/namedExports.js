/*
	📌 Named Exports
	
	Podemos exportar variables y funciones utilizando named exports o default exports.
	Cuando trabajamos con named exports podemos exportar multiples cosas.
	Podemos exportar de dos formas:
	- Agregando la palabra export antes de la variable.
	- Al final de documento
*/

// Forma 1 - Palabra export
export const nombre = 'Carlos Arturo';

export const obtenerPosts = () => {
	return ['Post1', 'Post2', 'Post3'];
};

// Forma 2 - Final del documento
// const nombre = 'Carlos Arturo';

// const obtenerPosts = () => {
// 	return ['Post1', 'Post2', 'Post3'];
// };

// export { nombre, obtenerPosts };
