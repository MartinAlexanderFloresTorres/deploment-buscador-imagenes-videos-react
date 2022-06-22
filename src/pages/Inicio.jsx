import { useState, useEffect } from "react";
import SearchImagen from "../components/searchImagen";
import Contenido from "../components/Contenido";
import Modal from "../components/Modal";
import { calcularPaginas, Aleatorio } from "../helpers/index";
import consultarApi from "../config/Api";

const registroPagina = 15;
const video = false;

function Inicio() {
  const [busqueda, setBusquedad] = useState("Romance");
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
      video: false,
    });
  }, [busqueda, paginaActual]);

  return (
    <>
      <SearchImagen
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

export default Inicio;
