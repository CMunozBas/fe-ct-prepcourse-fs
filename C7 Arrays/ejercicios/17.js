function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
 return arrayOfNums.reduce((suma, valorActual) => suma + valorActual, 0);
}

module.exports = agregarNumeros;
