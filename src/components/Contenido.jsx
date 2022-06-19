import React from "react";
import Spiner from "./Spiner";
import Resultados from "../Resultados";

function Contenido({
  spiner,
  resultados,
  setInformacion,
  setModal,
  totalPaginas,
  paginaActual,
  setPaginaActual,
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
        />
      )}
    </div>
  );
}

export default Contenido;
