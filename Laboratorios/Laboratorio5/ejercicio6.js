var miArray = [1, 3, 2, 6, 4, 8, 7];
var funcOrdenar = unArray => {
  console.log(unArray);
  console.log(unArray.length);
  var aux;
  for (i = 0; i < unArray.length - 1; i++) {
    for (x = i + 1; x < unArray.length; x++) {
      if (unArray[i] > unArray[x]) {
        aux = unArray[i];
        unArray[i] = unArray[x];
        unArray[x] = aux;
      }
    }
  }
  console.log(unArray);
};
funcOrdenar(miArray);
