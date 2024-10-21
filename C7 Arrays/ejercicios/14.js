function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  for (let i = 0; i <= array.length; i++){
    i = array.filter(num => num > 10);
    return i.length;
  }
}

module.exports = contarElementosMayoresA10;
