// Subido el 26-10-2023

function digPow(n, p){
    const a = Array.from(String(n), Number) // Se obtiene un array donde cada elemento es un dígito del número n
    Suma = 0;
  for (let Num of a){  //Se repite para todos los elementos de a
    
    Suma += Math.pow(Num,p);  // Se suma el elemento pasado y se iguala
     p=p+1;

  }

  if (Number.isInteger(Suma/n) === true){     // Para ver si división da un número entero posito
    return Suma/n;
  } else {
    return -1;
  }


  }


  // Lo de abajo es para comprobar distias cosas

  const a = Array.from(String(33), Number);

  console.log(a)
  console.log(Number.isInteger(89/1))
  console.log(a.length)
  b = digPow(89, 1)
  console.log(digPow(89, 1))
  console.log(digPow(92, 1))
  console.log(digPow(695, 2))
  console.log(digPow(46288, 3))