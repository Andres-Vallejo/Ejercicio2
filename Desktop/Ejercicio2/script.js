function mayorArray(arr) {
    if (arr.length === 0) {
      return null;
    } else if (arr.length === 1) {
      return arr[0];
    } else {
      var mayor = arr[0];
      var countImpares = 0;
  
      for (var i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
          mayor = arr[i];
        }
      }
  
      var j = 0;
      while (j < arr.length) {
        console.log(arr[j]);
        j++;
      }
  
      var k = 0;
      do {
        if (arr[k] % 2 !== 0) {
          countImpares++;
        }
        k++;
      } while (k < arr.length);
  
      console.log("La cantidad de numeros impares es:", countImpares);
  
      return mayor;
    }
  }
  
 
  var array = [2];
  var resultado = mayorArray(array);
  console.log("El numero mayor es:", resultado);
  