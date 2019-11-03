var arr = [1, "hola", 5.5, false, [1, 2], "otro hola"];

var funcion = x => {
  let typeArr = [];
  let counts = {};

  x.forEach(element => {
    typeArr.push(typeof element);
  });

  typeArr.forEach(element => {
    counts[element] = (counts[element] || 0) + 1;
  });

  console.log(typeArr);
  console.log(counts);
};
funcion(arr);
