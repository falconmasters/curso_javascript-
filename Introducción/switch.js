/* 📌 
	Switch es un bloque de codigo similar a elseif
	que nos permite ejecutar código en base a una condición, en este caso cuando un valor sea igual a otro.
*/

const usuario = {
	edad: 27,
	pais: 'mexico',
};

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

/*
	Cuando usar else if y cuando switch.
	elseif nos permite tener condiciones mas complejas:
		} else if (usuario.pais === 'españa' && usuario.edad >= 18) {

	switch nos permite ejecutar codigo si una variable contiene X valor:
		case 'españa':
*/
