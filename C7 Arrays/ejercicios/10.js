function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  return array.find(str => str.length >= 5);

}

module.exports = obtenerPrimerStringLargo;
