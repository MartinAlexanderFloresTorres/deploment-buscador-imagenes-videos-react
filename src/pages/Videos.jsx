import { useState, useEffect } from "react";
import SearchVideo from "../components/SearchVideo";
import Contenido from "../components/Contenido";
import Modal from "../components/Modal";
import consultarApi from "../config/Api";
import { calcularPaginas, Aleatorio } from "../helpers";

const registroPagina = 15;
const video = true;
function Videos() {
  const [busqueda, setBusquedad] = useState("colores");
  const [spiner, setSpiner] = useState(false);
  const [paginaActual, setPaginaActual] = useState(Aleatorio());

  const [totalPaginas, setTotalPaginas] = useState(0);
  const [modal, setModal] = useState(false);
  const [informacion, setInformacion] = useState({});
  const [resultados, setResultados] = useState([]);

  //=============== Consultar api ===============//
  useEffect(() => {
    consultarApi({
      busqueda,
      registroPagina,
      paginaActual,
      setTotalPaginas,
      calcularPaginas,
      setResultados,
      setSpiner,
      video: true,
    });
  }, [busqueda, paginaActual]);

  return (
    <>
      <SearchVideo
        setBusquedad={setBusquedad}
        spiner={spiner}
        setPaginaActual={setPaginaActual}
      />
      <Contenido
        spiner={spiner}
        resultados={resultados}
        setInformacion={setInformacion}
        setModal={setModal}
        totalPaginas={totalPaginas}
        paginaActual={paginaActual}
        setPaginaActual={setPaginaActual}
        video={video}
      />
      {modal && (
        <Modal
          informacion={informacion}
          setInformacion={setInformacion}
          setModal={setModal}
          video={video}
        />
      )}
    </>
  );
}

export default Videos;
