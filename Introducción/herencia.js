/*
	📌 Herencia
	La herencia nos permite crear clases tomando las propiedades y metodos de otras clases.
*/

class Usuario {
	constructor(usuario, password) {
		this.usuario = usuario;
		this.password = password;
	}

	obtenerPosts() {
		const posts = ['post1', 'post2'];
		return posts;
	}
}

class Moderador extends Usuario {
	constructor(usuario, password, permisos) {
		// Super nos permite copair todos los metodos y propiedades de la clase original.
		// Incluyendo el constructor, por eso le pasamos los parametros usuario y password.
		super(usuario, password);
		this.permisos = permisos;
	}

	borrarPost(id) {
		if (this.permisos.includes('borrar')) {
			console.log(`El post con el ${id} ha sido borrado`);
		} else {
			console.log('No tienes los suficientes permisos para borrar posts');
		}
	}
}

const usuario1 = new Usuario('carlos', '123');
console.log(usuario1.permisos);
console.log(usuario1.obtenerPosts());

// El usuario 2 es un moderador
const usuario2 = new Moderador('arturo', '123', ['borrar', 'editar']);
// Tambien puede acceder a los metodos y propiedades de la clase Usuario.
console.log(usuario2.tipo);
console.log(usuario2.obtenerPosts());
usuario2.borrarPost(1);
