function ScrollUp({ scroll }) {
  return (
    <a href="#" className={`${scroll ? "subir active" : "subir"}`}>
      <i className="bx bxs-chevron-up-circle ico" />
    </a>
  );
}

export default ScrollUp;
