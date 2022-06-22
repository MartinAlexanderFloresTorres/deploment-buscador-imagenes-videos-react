const consultarApi = async (parametros) => {
  const {
    busqueda,
    registroPagina,
    paginaActual,
    setTotalPaginas,
    calcularPaginas,
    setResultados,
    setSpiner,
    video,
  } = parametros;
  const key = "27369194-e1326f92c0966fa4cdd731f8a";

  try {
    if (!video) {
      setSpiner(true);
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&image_type=photo&per_page=${registroPagina}&page=${paginaActual}&lang=es`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setTotalPaginas(calcularPaginas(resultado.totalHits, registroPagina));
      setResultados(resultado.hits);
      setSpiner(false);
    } else{
      setSpiner(true);
      const url = `https://pixabay.com/api/videos/?key=${key}&q=${busqueda}&per_page=${registroPagina}&page=${paginaActual}&lang=es`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setTotalPaginas(calcularPaginas(resultado.totalHits, registroPagina));
      setResultados(resultado.hits);
      setSpiner(false);
    }
  } catch (error) {
    console.error(error);
  }
};
export default consultarApi;
