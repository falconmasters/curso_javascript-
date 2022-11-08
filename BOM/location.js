/*
	📌 window.location
	Nos permite obtener la url de la barra de direcciones y cargar nuevos documentos.
	Recordar que podemos acceder a location directamente.
*/

// href - Retorna la URL de la página actual
console.log(location.href);

// hostname - Retorna el host de la página actual
// Abriendo el archivo local nos retorna undefined pero podemos probar desde la consola en otra pagina.
console.log(location.hostname);

// pathname - Retorna la ruta y archivo de la pagina actual
console.log(location.pathname);

// procotol - Retorna el protocolo utilizado
console.log(location.protocol);

// assign - Nos permite cargar un nuevo documento
const cargarDocumento = () => {
	location.assign('https://google.com');
};

/*
	📌 window.history
	Contiene el historial de la pestaña de nuestro navegador.
	Nos permite regresar o ir adelante.
*/

const regresar = () => {
	history.back();
	// history.forward();
};
