import React from "react";
import Spiner from "./Spiner";
import Resultados from "./Resultados";

function ContenidoImagen({
  spiner,
  resultados,
  setInformacion,
  setModal,
  totalPaginas,
  paginaActual,
  setPaginaActual,
  video
}) {
  return (
    <div className="contenedor" id="contenedor">
      {spiner ? (
        <Spiner />
      ) : (
        <Resultados
          resultados={resultados}
          setInformacion={setInformacion}
          setModal={setModal}
          totalPaginas={totalPaginas}
          paginaActual={paginaActual}
          setPaginaActual={setPaginaActual}
          video={video}
        />
      )}
    </div>
  );
}

export default ContenidoImagen;
