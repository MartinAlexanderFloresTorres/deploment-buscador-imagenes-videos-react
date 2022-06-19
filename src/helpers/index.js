//=============== Calcular paginas totales ===============//
const calcularPaginas = (total, registroPagina) => {
  return Math.ceil(total / registroPagina);
};

//=============== Retornar un numero aleatorio del 1 al 10 ===============//
const Aleatorio = () => {
  return Math.floor(Math.floor(Math.random() * 15) + Math.random() * 15 + 1);
};

//=============== Evento de Scroll ===============//
const Scroll = (fn) => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      fn(true);
    } else {
      fn(false);
    }
  });
};
export { calcularPaginas, Aleatorio, Scroll };
