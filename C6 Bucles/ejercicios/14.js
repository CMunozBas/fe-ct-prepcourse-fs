function operadoresLogicos(num1, num2, num3) {
  // La función recibe tres números distintos.
  // Si num1 es mayor a num2 y a num3, y además es positivo, retorna ---> "Numero 1 es mayor y positivo".
  // Si alguno de los tres números es negativo, retorna ---> "Hay negativos".
  // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retorna el nuevo valor.
  // Si todos los argumentos son cero, retorna ---> "Error".
  // Si no se cumple ninguna de las condiciones anteriores, retorna false.
  // Tu código:
  if (num1 > num2 && num1 > num3 && num1 > 0){
    console.log("Numero 1 es mayor y positivo");
    return "Numero 1 es mayor y positivo";
  }else if (num1 < 0 || num2 < 0 || num3 < 0){
    console.log("Hay negativos");
    return "Hay negativos";
  }else if (num3 > num1 && num3 > num2){
    console.log(num3 + 1);
    return num3 + 1;
  }else if (num1 === 0 && num2 === 0 && num3 === 0){
    console.log("Error");
    return "Error";
  }else {
    console.log("false");
    return false;
  }
}

module.exports = operadoresLogicos;



operadoresLogicos(1, 30, 9)

operadoresLogicos(100, 30, 99)

operadoresLogicos(0, 0, 0)
operadoresLogicos(10, -30, -99)
operadoresLogicos(100, 0, 1000)