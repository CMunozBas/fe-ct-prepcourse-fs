function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
  console.log(Number.isInteger(num));
  return Number.isInteger(num);
}

module.exports = esEntero;


esEntero(10284367)
esEntero(20.5)
esEntero(-0.3)
esEntero(-2)
