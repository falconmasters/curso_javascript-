/*
	📌 Async y Await 
	Son sentencias que nos permitiran poder trabajar con codigo asíncrono
	de una forma mas sencilla.

	Async - nos permite definir que dentro de una funcion trabajaremos con codigo asyncrono.
	Await - nos permite detener la ejecución de codigo y esperar a que se resuelva una promesa.
*/

// Ejemplo anterior de una funcion que devuelve una promesa (Sin Async/Await)
const fetchPosts = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const posts = ['Post 1', 'Post 2', 'Post 3'];
			const error = false;

			if (error) {
				reject('Hubo un error al intentar obtener los posts');
			} else {
				resolve(posts);
			}
		}, 2000);
	});
};

// Obtentiendo los posts (con then y catch)
// obtenerPosts()
// 	.then((posts) => {
// 		console.log(posts);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// Obtentiendo los posts (con async y catch)
const mostrarPosts = async () => {
	// Sin TRY / CATCH
	// const posts = await fetchPosts();
	// console.log(posts);

	// CON TRY / CATCH
	// Si la promesa se rechazo y queremos obtener el error podemos trabajar con try catch.
	try {
		const posts = await fetchPosts();
		console.log(posts);
	} catch (error) {
		console.log(error);
	}
};

obtenerPosts();
