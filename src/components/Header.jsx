import { Link, useLocation } from "react-router-dom";
import imgLogo from "../img/logo2.png";
import imgUser from "../img/userMartin.jpg";

const body = document.querySelector("body");
function Header() {
  const location = useLocation();

  const handleMenu = () => {
    body.classList.toggle("active");
  };
  return (
    <header className="header">
      <section className="header__contenedor max-width">
        <div className="header__left">
          <a title="inicio" href="/">
            <img src={imgLogo} alt="logo" />
          </a>
        </div>
        <div className="header__right">
          <nav className="header__navegacion">
            <Link
              to="/"
              className={`${
                location.pathname === "/"
                  ? "header__link active"
                  : "header__link"
              }`}
            >
              Fotos
            </Link>
            <Link
              to="/videos"
              className={`${
                location.pathname === "/videos"
                  ? "header__link active"
                  : "header__link"
              }`}
            >
              Videos
            </Link>
            <div className="header__contacto">
              <a
                className="header__link"
                title="facebook"
                href="https://web.facebook.com/garena.flores.9"
                target="_blank"
              >
                <i className="bx bxl-facebook-circle" />
                <span className="header__TextoContacto">Martin Flores</span>
              </a>
              <a
                className="header__link"
                title="instragram"
                href="https://www.instagram.com/martin_flores_28/"
                target="_blank"
              >
                <i className="bx bxl-instagram" />
                <span className="header__TextoContacto">martin_flores_28</span>
              </a>
            </div>
          </nav>

          <div className="header__opciones">
            <a
              className="header__icoUser"
              href="https://web.facebook.com/garena.flores.9"
              target="_blank"
              title="facebook"
            >
              <img className="icoUser" src={imgUser} alt="user" />
            </a>
            <button className="boton">
              <i className="bx bx-cloud-upload ico" /> Subir
            </button>
            <div className="menu" onClick={handleMenu}>
              <i className="bx bx-menu ico" />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
