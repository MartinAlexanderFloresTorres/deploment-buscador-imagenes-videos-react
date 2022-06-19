import { useState } from "react";

function Imagenes({ setBusquedad, spiner, setPaginaActual }) {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      const input = e.target.childNodes[0];
      input.classList.add("active");
      setError(true);
      setTimeout(() => {
        if (error === false) {
          input.classList.remove("active");
          setError(false);
        }
      }, 2000);
      return;
    }
    setPaginaActual(1);
    setBusquedad(search);
    setError(false);
  };

  const handleBusquedad = (e) => {
    setPaginaActual(1);
    setBusquedad(e.target.textContent);
  };

  return (
    <section className="baner">
      <div className="baner__contenedor max-width">
        <div>
          <h1 className="baner__titulo">
            Increíbles Imágenes Gratis Para Descargar
          </h1>
          <p className="baner__parrafo">
            Nuestro banco de imágenes tiene más de 1 millón de imágenes y videos
            compartidos por nuestra talentosa comunidad.
          </p>

          <div className="baner__formulario">
            <div className="baner_buscador">
              <span className="baner__search">
                <i className="bx bx-search ico" />
              </span>
              <form
                className={`${spiner ? "baner__form active" : "baner__form"}`}
                onSubmit={handleSubmit}
              >
                <input
                  className="baner__input"
                  type="text"
                  id="busqueda"
                  placeholder="Buscar imagenes, vectores, videos y musica"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit" className="boton boton--black">
                  <span className="boton__texto">Buscar</span>
                  <span className="boton__spinner">
                    <i className="bx bx-loader-circle bx-spin ico" />
                  </span>
                </button>
              </form>
            </div>
            <p className="baner__link">
              Imágenes populares:{" "}
              <a
                className="baner__link"
                onClick={(e) => handleBusquedad(e)}
                href="#"
              >
                flores
              </a>
              ,{" "}
              <a
                className="baner__link"
                onClick={(e) => handleBusquedad(e)}
                href="#"
              >
                madre
              </a>
              ,{" "}
              <a
                className="baner__link"
                onClick={(e) => handleBusquedad(e)}
                href="#"
              >
                fondos
              </a>
              ,{" "}
              <a
                className="baner__link"
                onClick={(e) => handleBusquedad(e)}
                href="#"
              >
                familia
              </a>
              ,{" "}
              <a
                className="baner__link"
                onClick={(e) => handleBusquedad(e)}
                href="#"
              >
                mujer
              </a>
              ,{" "}
              <a
                className="baner__link"
                onClick={(e) => handleBusquedad(e)}
                href="#"
              >
                mama
              </a>
              ,{" "}
              <a
                className="baner__link"
                onClick={(e) => handleBusquedad(e)}
                href="#"
              >
                niños
              </a>
              ,{" "}
              <a
                className="baner__link"
                onClick={(e) => handleBusquedad(e)}
                href="#"
              >
                naturaleza
              </a>
              ,{" "}
              <a
                className="baner__link"
                onClick={(e) => handleBusquedad(e)}
                href="#"
              >
                paisaje
              </a>
              ,{" "}
              <a
                className="baner__link"
                onClick={(e) => handleBusquedad(e)}
                href="#"
              >
                tecnologia
              </a>
              ,{" "}
              <a
                className="baner__link"
                onClick={(e) => handleBusquedad(e)}
                href="#"
              >
                oficina
              </a>
              .
            </p>
          </div>
        </div>
        <p className="baner__gratis">Imágenes gratis</p>
      </div>
    </section>
  );
}

export default Imagenes;
