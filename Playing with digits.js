// https://www.codewars.com/kata/5552101f47fc5178b1000050

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


