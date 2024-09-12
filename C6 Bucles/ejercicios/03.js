function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if (x > y) {
    console.log(x);
    return x;
  }
  if (y > x);{
  console.log(y);
  return y;
  }
  return x;
}

module.exports = obtenerMayor;

obtenerMayor(3, 6);