/*
	📌 Código Asíncrono
	Es código que se ejecuta de fondo y permite que las siguientes sentencias se ejecuten.
*/

// Se ejecuta la primer sentencia
// console.log('Ejecuta sentencia 1');

/* 
	Despues se ejecuta el timeout.
 	setTimeout() es una funcion asincrona.
	Es decir que se ejecuta de fondo, y continua con las siguientes sentencias.
*/
// setTimeout(() => {
// 	console.log('Ejecuta sentencia 2');
// }, 2000);

// Por lo tanto la tercera sentencia no espera a que la segunda acabe.
// console.log('Ejecuta sentencia 3');

/*
	📌 Promesas
	Las promesas son estructuras que nos van a permitir poder detener la ejecucion de codigo
	hasta que termine de ejecutarse el proceso pendiente.
	
	Por ejemplo si queremos obtenerPosts de una base de datos, queremos esperar a que acabe el proceso
	de obtener todos los post, y una vez que los obtenemos poder continuar con el código.
*/

// Definiendo una promesa
const promesa = new Promise((resolve, reject) => {
	// Codigo que puede tardar un tiempo.

	/* 
		Cuando ya se acabo de realizar la operacion podemos indicarlo mediante resolve()
		A resolve le podemos pasar como parametro información.
		Ejemplo: los datos que obtuvo de una base de datos.
	*/
	resolve('datos');

	/* 
		Si hubo algun error podemos rechazar la promesa con reject()
		Tambien podemos pasarle como parametro información del error.
	*/
	reject('Hubo un error');
});

/* 
	Acceder a la promesa

	Estados de una promesa:
	- cumplida (fulfilled) - La acción relacionada con la promesa se realizó correctamente.
    - rechazada (rejected) - La acción relacionada con la promesa fracasó.
    - pendiente (pending) - Aún esta en progreso la acción relacionada con la promesa.
 */
console.log(promesa);

/*
	Acceder a la promesa no nos sirve de nada,queremos poder ejecutar codigo una vez que
	termino la acción relacionada y poder acceder a información que nos devolvio.

	Para eso podemos usar then y catch.
*/
promesa
	.then((datos) => {
		console.log(datos);
	})
	.catch((error) => {
		console.log(error);
	});

/*
	📌 Ejemplo de una promesa:
	obtenerPosts es una funcion que queremos que sea Asíncrona, para que obtenga los post de fondo.
	Para eso obtenerPosts puede devolver una promesa para indicarnos cuando termino de obtener los posts.
*/

const obtenerPosts = () => {
	return new Promise((resolve, reject) => {
		console.log('Obteniendo posts ...');
		// Aqui va la llamada al servidor para obtener los datos de la BD.
		// Normalmente seria una peticion fetch.

		let posts = [];

		setTimeout(() => {
			posts = ['Post 1', 'Post 2', 'Post 3'];
			// Una vez que obtuvimos los post y todo es correcto resolvemos la promesa.
			if (posts.length > 0) {
				// Si hay post resolvemos la promesa y pasamos los posts.
				resolve(posts);
			} else {
				// Si no hay posts rechazamos la promesa.
				reject('No se encontraron posts');
			}
		}, 3000);
	});
};

// No nos sirve de nada acceder a la funcion de esta forma:
console.log(obtenerPosts());

// Si queremos obtener los datos lo hacemos con then.
obtenerPosts()
	.then((posts) => {
		console.log(posts);
	})
	.catch((error) => {
		console.log(error);
	});
