/*
	📌 Maps
	Los mapas en javascript son como los objetos pero en donde 
	las llaves (propiedades) pueden ser de cualquier tipo, incluyendo objetos.
*/

const correo = {
	correo: 'correo@correo.com',
};

const mapa = new Map([
	['nombre', 'Carlos'],
	[true, 'verdadero'],
	[
		correo,
		{
			password: '123',
		},
	],
]);

// console.log(mapa);

// Obtener un valor
// console.log(mapa.get('nombre'));
// console.log(mapa.get(true));
// console.log(mapa.get(correo));

// Los mapas tambien tienen un metodo foreach
// En los mapas primero va el valor y luego la propiedad
mapa.forEach((valor, propiedad) => console.log(valor, propiedad));
