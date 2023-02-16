/*
	📌 JSON
	Javascript Object Notation
*/

/*
	- Es un formato que se utiliza para mandar información de un sitio a otro.
	- Por ejemplo cuando mandamos obtener informacion de un servidor este nos respondera con un objeto JSON.
	- Son muy similares a un objeto de javascript.
	- Todos los lenguajes de programación tienen funciones para leer json.
	- Es una de las formas mas comunes de pasar información porque es muy fácil de usar.
*/

/*
	📌 Tipos de datos que podemos usar en JSON:
	- cadena de texto
	- numeros
	- objetos (en formato JSON)
	- arreglos
	- booleanos
	- null

	Tipos de datos que NO podemos usar en JSON:
    - funciones
    - objetos de fecha
    - undefined
*/

// datos.json
const datos = `
{
	"id": 1,
	"nombre": "Carlos Arturo",
	"suscriptor_activo": true,
	"posts": [
		{
			"id": 1,
			"titulo": "Titulo del primer post",
			"texto": "texto del primer post ..."
		},
		{
			"id": 2,
			"titulo": "Titulo del segundo post",
			"texto": "texto del segundo post ..."
		}
	]
}
`;

/*
	📌 parse()
	Le pasamos una cadena de texto con formato JSON y nos devuelve objeto de javascript.
*/
console.log(JSON.parse(datos));

/*
	📌 stringify()
	Nos permite pasarle un objeto de javascript y nos devuelve una cadena de texto con objeto en formato JSON
*/
const usuario = {
	nombre: 'Carlos',
	correo: 'correo@correo.com',
	coloresFavoritos: ['azul', 'rojo', 'negro'],
};

console.log(JSON.stringify(usuario));
