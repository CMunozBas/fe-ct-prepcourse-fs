function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let suma = resultadosTest.reduce((total, nota) => total + nota, 0);
  let promedio = suma / resultadosTest.length;
  return promedio;
}

module.exports = promedioResultadosTest;
