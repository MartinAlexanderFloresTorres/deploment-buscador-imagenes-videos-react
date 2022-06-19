import imgUserDefault from "../img/userDefault.webp";
import { downloadImage } from "../helpers/DescargarImagen";

function Item({ resultado, setInformacion, setModal }) {
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
        src={largeImageURL}
        alt="imagen"
        onClick={() => abrirModal()}
      />

      <div className="contenedor__description">
        <button
          className="contenedor__descargar"
          title="Descargar imagen"
          onClick={() => downloadImage(largeImageURL, "imagen")}
        >
          <i className="bx bxs-download ico"></i>
        </button>
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
