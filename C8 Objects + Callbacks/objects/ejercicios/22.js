function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   let string1 = str1.toLowerCase().replace(/\s+/g, '');
   let string2 = str2.toLowerCase().replace(/\s+/g, '');
   if (string1.length !== string2.length){
      return false;
   }
   let palabra1 = string1.split("").sort().join("");
   let palabra2 = string2.split("").sort().join("");
   return palabra1 === palabra2;
   
}

module.exports = esAnagrama;
