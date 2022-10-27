/*
	📌 Propiedades y Métodos Estaticos
	Para poder acceder a las propiedades y metodos de una clase, 
	primero tenemos que crear un nuevo objeto apartir de una clase.

	Esto lo podemos cambiar utilizando propiedades y métodos estaticos.
*/
class Usuario {
	constructor(nombre, correo) {
		this.nombre = nombre;
		this.correo = correo;

		console.log('Se ha creado un usuario en la base de datos');
	}

	static borrar(id_usuario) {
		console.log(`El usuario con el id: ${id_usuario} ha sido borrado de la base de datos`);

		/* Si usamos metodos estaticos, no vamos a poder acceder al nombre y correo, 
		porque para eso necesitabamos el constructor */
		// console.log(this.nombre);
	}

	// Tambien funciona con propiedades
	static registrados = 1000;
}

// Para poder borrar al usuario teniamos que crear un objeto primero:
// const usuario = new Usuario('carlos', 'correo@correo.com');

// Si tenemos una propiedad o metodo estatico podemos acceder sin crear el objeto.
Usuario.borrar(1);
console.log(Usuario.registrados);
