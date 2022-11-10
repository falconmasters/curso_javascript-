/* Switch es un bloque similar a elseif, nos permite ejecutar codigo cuando un valor sea igual a otro  */
// switch (valorAComprobar) {
// 	case 'valor1':
// 		// Ejecutamos codigo 1
// 		break;
// 	case 'valor2':
// 		// Ejecutamos código 2
// 		break;
// 	default:
// 	// Ejecuta código por defecto
// }

const usuario = {
	edad: 27,
	pais: 'mexico',
};

// Condicional elseif
// if (usuario.pais === 'mexico') {
// 	console.log('El usuario es mexicano');
// } else if (usuario.pais === 'españa') {
// 	console.log('El usuario es español');
// } else if (usuario.pais === 'argentina') {
// 	console.log('El usuario es argentino');
// } else {
// 	console.log('El usuario es de otro pais');
// }

// Nota: no olvidarnos de la palabra break.

switch (usuario.pais) {
	case 'mexico':
		console.log('El usuario es mexicano');
		break;
	case 'españa' && edad >= 18:
		console.log('El usuario es español');
		break;
	case 'argentina':
		console.log('El usuario es argentino');
		break;
	default:
		console.log('El usuario es de otro pais');
}

/*
	Cuando usar else if y cuando switch.
	elseif nos permite tener condicionales mas complejos:
		} else if (usuario.pais === 'españa' && usuario.edad >= 18) {

	switch nos permite ejecutar codigo si una variable contiene X valor:
		case 'españa':
*/
