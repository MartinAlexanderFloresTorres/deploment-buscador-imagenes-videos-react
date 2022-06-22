import imgUserDefault from "../img/userDefault.webp";
import { downloadImage } from "../helpers/DescargarImagen";

function Item({ resultado, setInformacion, setModal, video }) {
  const { largeImageURL, user, userImageURL, user_id } = resultado;

  const abrirModal = () => {
    setInformacion(resultado);
    setModal(true);
  };
  return (
    <div className="contenedor__item">
      <img
        width="100"
        heght="100"
        className="contenedor__img"
        src={
          !video
            ? largeImageURL
            : `https://i.vimeocdn.com/video/${resultado.picture_id}_200x150.jpg`
        }
        alt="imagen"
        onClick={() => abrirModal()}
      />

      <div className="contenedor__description">
        {!video ? (
          <button
            className="contenedor__descargar"
            title="Descargar imagen"
            onClick={() => downloadImage(largeImageURL, "imagen")}
          >
            <i className="bx bxs-download ico"></i>
          </button>
        ) : (
          <button
            className="verVideo boton"
            title="Ver Video"
            onClick={() => abrirModal()}
          >
            <i className="bx bxs-movie-play ico" />{" "}
          </button>
        )}
        <div className="contenedor__user">
          <img
            width="100"
            heght="100"
            className="contenedor__userImg"
            src={`${userImageURL ? userImageURL : imgUserDefault}`}
            alt={`user${user_id}`}
          />
          <p className="contendor__userText">
            {user ? user : "Usuario Desconocido"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
