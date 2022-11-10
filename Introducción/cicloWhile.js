/*
	📌 Ciclo While
	Es similar a for, pero con la diferencia de que solo tenemos un condicional.
	Mientras se cumpla el condicional se ejecutara el ciclo.
*/

// Ciclo infinito! Cuidado!
// while (true) {
// 	console.log('Hola');
// }

let contador = 0;
while (contador <= 10) {
	// console.log(contador);
	contador++;
}

/*
	📌 Ciclo Do While
	Es similar al ciclo while, con la diferencia de que ejecuta el bloque de código al menos una vez.
*/
let i = 0;
do {
	console.log(i);
	i++; // Cuidado porque si no ponemos el incremento tendremos un loop infinito.
} while (i <= 10);
