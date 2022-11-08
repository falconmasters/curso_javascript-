/*
	📌 window.navigator
	Contiene informacion del navegador web del usuario
*/

// Comprobar si las cookies estan activadas
console.log('Cookies activadas:', navigator.cookieEnabled);

//Obtener el encabezado que el navegador envia.
/* 
	Nota: No utilizarlo para detectar el navegador del usuario:
	- Ya que varios navegadores pueden usar el mismo encabezado
	- Y se puede editar manualmente
*/
console.log(navigator.userAgent);

// Obtener el lenguaje del navegador web del usuario
console.log(navigator.language);

// Obtener si el navegador web esta conectado a internet
console.log(navigator.onLine);
