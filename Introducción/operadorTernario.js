/*
	El operador ternario nos permite hacer condicionales abarcando menos codigo que si utilizaramos un condicional if.
*/

// Ejemplo de condicional sin operador ternario.
// const boleto = 'vip';
// let codigoDeAcceso;

// if (boleto === vip) {
// 	codigoDeAcceso = 'VIP-123-456-789';
// } else {
// 	codigoDeAcceso = 'Regular-123-456-789';
// }

// Ejemplo con operador ternario
const boleto = 'vip';
const codigoDeAcceso = boleto === 'VIP' ? 'VIP-123-456-789' : 'Regular-123-456-789';

// Ejemplo 2 - No siempre es necsario guardar el valor en una variable
boleto === 'VIP' ? console.log('Tu boleto es VIP-123-456-789') : console.log('Tu boleto es Regular-123-456-789');
