const fetchGeneros = async (filtro = 'movie') => {
	const tipo = filtro === 'movie' ? 'movie' : 'tv';
	const url = `https://api.themoviedb.org/3/genre/${tipo}/list?api_key=b07dda1337fcfe0e08af7d3d2597908c&language=es-MX`;

	try {
		const resultados = await fetch(url);
		const datos = await resultados.json();
		return datos.genres;
	} catch (e) {
		console.log(e);
	}
};

export default fetchGeneros;
