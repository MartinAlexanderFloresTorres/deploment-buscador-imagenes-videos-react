function Footer() {
  return (
    <section className="contenedor max-width">
      <div className="descubrir">
        <div>
          <p className="descubrir__title">
            Imágenes y videos gratuitos que puedes usar desde cualquier lugar
          </p>
          <p className="descubrir__parrafo">
            White y Pixabay es una comunidad dinámica de creativos que comparten
            imágenes y videos sin derechos de autor. Todos los contenidos se
            publican bajo la Licencia Pixabay, que los hace seguros para usar
            sin pedir permiso o dar crédito al artista, incluso con fines
            comerciales.
          </p>
          <a className="descubrir__enlace" href="#">
            Aprenda más...
          </a>
        </div>
        <p className="descubrir__copy">
          This site is protected by reCAPTCHA and the Google{" "}
          <a className="descubrir__link" href="#">
            Privacy Policy
          </a>{" "}
          and <a href="#">Terms</a> of{" "}
          <a className="descubrir__link" href="#">
            Service apply
          </a>{" "}
          .
        </p>
      </div>
    </section>
  );
}

export default Footer;
