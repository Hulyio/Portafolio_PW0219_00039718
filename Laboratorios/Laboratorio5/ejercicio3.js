var num = 4;
var arr = [1, 2, 3, 4, 3, 2, 5, 4];
var cuantasOcurrencias = (unNumero, unArreglo) => {
  var ocurrencias = 0;
  for (let index = 0; index < unArreglo.length; index++) {
    if (unNumero == unArreglo[index]) {
      ocurrencias++;
    }
  }
  return ocurrencias;
};
cuantasOcurrencias(num, arr);
