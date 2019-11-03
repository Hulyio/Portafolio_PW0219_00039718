var arr = [1, 2, 3, 4, 3, 2, 5, 4];
var recibirArregloNumeros = unArreglo => {
  var sum = 0;
  for (let index = 0; index < unArreglo.length; index++) {
    sum = sum + unArreglo[index];
  }
  console.log("la suma del array es: " + sum);
  var prom = sum / unArreglo.length;
  console.log("el promedio fue: " + prom);
};
recibirArregloNumeros(arr);
