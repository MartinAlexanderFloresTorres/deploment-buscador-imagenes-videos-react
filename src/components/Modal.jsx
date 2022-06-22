import { useState, useEffect } from "react";
import { downloadImage } from "../helpers/DescargarImagen";
import imgUserDefault from "../img/userDefault.webp";
const body = document.querySelector("body");

function Modal({ informacion, setInformacion, setModal, video }) {
  const [screen, setScrenn] = useState(false);

  const {
    tags,
    largeImageURL,
    downloads,
    likes,
    comments,
    user,
    userImageURL,
    pageURL,
    id,
  } = informacion;

  useEffect(() => {
    if (Object.keys(informacion).length > 0) {
      body.classList.add("hidden");
    }
  }, []);

  useEffect(() => {
    const imagen = document.querySelector(".modal__image");
    if (screen) {
      imagen.requestFullscreen();
    } else {
      if (document.fullscreen) {
        document.exitFullscreen();
      }
    }
  }, [screen]);

  const handleCerrarModal = (e) => {
    if (e.target.classList.contains("modal")) {
      setModal(false);
      setInformacion({});
      body.classList.remove("hidden");
    }
    if (e.target.classList.contains("modal__close")) {
      setModal(false);
      setInformacion({});
      body.classList.remove("hidden");
    }
  };

  return (
    <section className="modal" onClick={(e) => handleCerrarModal(e)}>
      <section className="modal__contenedor">
        <div className="modal__item">
          <div className="modal__top">
            <div className="modal__usuario">
              <img
                className="modal__imagenUsuario"
                src={`${userImageURL ? userImageURL : imgUserDefault}`}
                alt="user"
              />
              <div>
                <p className="modal__userText">
                  {user ? user : "Usuario Desconocido"}
                </p>
                <p className="modal__arroba">
                  {user ? `${"@" + user}` : "@Usuario Desconocido"}
                </p>
              </div>
            </div>
            <div className="modal__opciones">
              {!video && (
                <button
                  onClick={() => downloadImage(largeImageURL, "imagen")}
                  className="boton"
                  title="Descargar imagen"
                >
                  Descargar gratis
                </button>
              )}
              <div
                className="modal__close"
                onClick={(e) => handleCerrarModal(e)}
              >
                <i className="bx bx-x ico" />
              </div>
            </div>
          </div>
          <div className="modal__imagen">
            <div
              className={`${screen ? "modal__image active" : "modal__image"}`}
            >
              <div className="contenidoModal">
                {!video ? (
                  <img src={largeImageURL} alt="imagen" />
                ) : (
                  <video
                    width="100"
                    heght="100"
                    src={informacion.videos.tiny.url}
                    alt="video"
                    controls
                  ></video>
                )}
              </div>
              {!video && (
                <div className="moda__fullScreen">
                  <span className="fullScreen" onClick={() => setScrenn(true)}>
                    <i className="bx bx-fullscreen ico" />
                  </span>
                  <span className="exitScreen" onClick={() => setScrenn(false)}>
                    <i className="bx bx-exit-fullscreen ico" />
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="modal__bottom">
            <div className="modal__descripcion">
              <div>
                <p className="modal__destiTulo">
                  <i className="bx bxs-comment ico" />
                  <b>Comentarios:</b>
                </p>
                <span className="modal__descText">{comments}</span>
              </div>
              <div>
                <p className="modal__destiTulo">
                  <i className="bx bxs-cloud-download" />
                  <b>Descargas:</b>
                </p>
                <span className="modal__descText">{downloads}</span>
              </div>
              <div>
                <p className="modal__destiTulo">
                  <i className="bx bxs-like" />
                  <b>Likes:</b>
                </p>
                <span className="modal__descText">{likes}</span>
              </div>
              <div>
                <p className="modal__destiTulo">
                  <i className="bx bxs-purchase-tag-alt" />
                  <b>Etiquetas:</b>
                </p>
                <span className="modal__descText">{tags}</span>
              </div>

              {video && (
                <div>
                  <p className="modal__destiTulo">
                    <i className="bx bxs-purchase-tag-alt" />
                    <b>Duracion:</b>
                  </p>
                  <span className="modal__descText">
                    {informacion.duration}s
                  </span>
                </div>
              )}
            </div>
            <div className="modal__compartir">
              <a
                className="modal__compartirLink"
                target="_blank"
                href={!video ? largeImageURL : informacion.videos.tiny.url}
              >
                <i className="bx bx-link-alt" />{" "}
                {!video ? "visualizar" : "Reproducir"}
              </a>
              <a
                className="modal__compartirLink"
                target="_blank"
                href={!video ? pageURL : `https://pixabay.com/videos/id-${id}/`}
              >
                <i className="bx bxs-info-circle" /> Información
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Modal;
