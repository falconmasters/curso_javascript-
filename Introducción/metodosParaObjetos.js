const usuario = {
	nombre: 'Carlos',
	edad: 27,
	amigos: ['Alejandro', 'Cesar', 'Manuel'],
	saludo: () => {
		console.log('Hola!');
	},
};

/*
	📌 Métodos propios
	Los objetos pueden tener métodos personalizados.
*/
usuario.saludo();

/*
	📌 Object.keys()
	Nos devuelve un arreglo con las llaves (keys) del objeto.
*/
const resultado = Object.keys(usuario);

/*
	📌 Object.values()
	Nos devuelve un arreglo con los valores (values) del objeto.
*/
// const resultado = Object.values(usuario);

/*
	📌 Object.entries()
	Nos devuelve un arreglo con las parejas de clave y valor del objeto.
*/
// const resultado = Object.entries(usuario);
console.log(resultado);

/*
	Con estos métodos se pueden hacer muchas cosas,
	como por ejemplo usarlos para contar el numero de propiedades.
*/
const entradas = Object.entries(usuario);
console.log(`El objeto tiene ${entradas.length} propiedades`);
