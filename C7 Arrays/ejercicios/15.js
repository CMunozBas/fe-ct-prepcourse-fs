function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let may = array.reduce(
    (may, valor, i, arr) =>
      valor > arr[may] ? i : may, 0);
    return may;
}

module.exports = encontrarIndiceMayor;
