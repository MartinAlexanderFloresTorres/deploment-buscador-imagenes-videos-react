import Item from "./Item";

function Resultados({
  resultados,
  setInformacion,
  setModal,
  totalPaginas,
  paginaActual,
  setPaginaActual,
  video
}) {
  const handleSiguiente = () => {
    if (paginaActual < totalPaginas) {
      setPaginaActual(paginaActual + 1);
    }
  };
  const handleAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  return (
    <>
      {resultados.length > 0 ? (
        <>
          <div className="contenedor__imagenes">
            {resultados.map((resultado) => (
              <Item
                key={resultado.id}
                resultado={resultado}
                setInformacion={setInformacion}
                setModal={setModal}
                video={video}
              />
            ))}
          </div>
          <section className="contenedor__botones">
            <a
              href="#contenedor"
              className="contenedor__pagianacionBtn"
              onClick={() => handleAnterior()}
            >
              Anterior
            </a>
            <a
              href="#contenedor"
              className="contenedor__pagianacionBtn"
              onClick={() => handleSiguiente()}
            >
              Siguiente
            </a>
          </section>
          <div className="contenedor__paginaTotales">
            {paginaActual} de {totalPaginas}
          </div>
        </>
      ) : (
        <div className="alerta">
          No se encontraron resultados intente nuevamente
        </div>
      )}
    </>
  );
}

export default Resultados;
