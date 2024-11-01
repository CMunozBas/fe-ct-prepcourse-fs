const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let suma = 0;
  for (let prop in objeto) {
    suma += 1;
  }
  return suma;
};

module.exports = contarPropiedades;
