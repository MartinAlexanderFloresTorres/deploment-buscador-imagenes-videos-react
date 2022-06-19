import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
import Imagenes from "./components/Imagenes";
import Contenido from "./components/Contenido";
import Modal from "./components/Modal";
import { calcularPaginas, Aleatorio, Scroll } from "./helpers/index";
import consultarApi from "./config/Api";

const registroPagina = 15;

function App() {
  const [scroll, setScroll] = useState(false);
  const [busqueda, setBusquedad] = useState("Romance");
  const [totalPaginas, setTotalPaginas] = useState(0);
  const [paginaActual, setPaginaActual] = useState(Aleatorio());
  const [resultados, setResultados] = useState([]);
  const [spiner, setSpiner] = useState(false);
  const [modal, setModal] = useState(false);
  const [informacion, setInformacion] = useState({});

  //=============== Evento de scroll ===============//
  useEffect(() => {
    Scroll(setScroll);
  }, []);

  //=============== Consultar api ===============//
  useEffect(() => {
    const parametros = {
      busqueda,
      registroPagina,
      paginaActual,
      setTotalPaginas,
      calcularPaginas,
      setResultados,
      setSpiner,
    };
    consultarApi(parametros);
  }, [busqueda, paginaActual]);

  return (
    <>
      <Header />
      <Imagenes
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
      />
      {modal && (
        <Modal
          informacion={informacion}
          setInformacion={setInformacion}
          setModal={setModal}
        />
      )}
      <ScrollUp scroll={scroll} />
      <Footer />
    </>
  );
}

export default App;
