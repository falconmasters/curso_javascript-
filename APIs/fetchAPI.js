/*
	📌 Fetch API
	Es una API del navegador que nos permite hacer peticiones a servidores.
	Esta api nos devuelve una promesa, por lo que podemos trabajar con async await
*/

/*
	Nota: existen muchas paginas que nos permiten subir un pequeño archivo JSON 
	durante unos minutos para hacer pruebas.
	
	Despues de unos minutos o varias peticiones puede que deje de funcionar 
	y tengamos que volver a subir el json.

	https://www.npoint.io/
*/

const endpoint = 'https://api.npoint.io/28eb8a275f10ea60b175';

const respuesta = fetch(endpoint)
	.then((respuesta) => {
		console.log('El servidor respondio');
		console.log(respuesta);

		// Extraemos el body
		const promesa = respuesta.json();
		promesa
			.then((datos) => {
				console.log(datos);
			})
			.catch((error) => {
				console.log(error);
			});
	})
	.catch((error) => {
		console.log(error);
	});

/*
	📌 Ejemplo con Async/Await
*/
const obtenerDatos = async () => {
	const respuesta = await fetch(endpoint);
	const datos = await respuesta.json();
	console.log(datos);
};
obtenerDatos();
