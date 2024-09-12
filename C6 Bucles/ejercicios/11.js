function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  console.log(num > 20 && num < 50);
  return num > 20 && num < 50;
}

module.exports = estaEnRango;

estaEnRango(43)
estaEnRango(60)
estaEnRango(22)
estaEnRango(1)