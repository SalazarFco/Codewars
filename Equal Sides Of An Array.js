// https://www.codewars.com/kata/5679aa472b8f57fb8c000047


function findEvenIndex(arr)
{
  N = 0
  while(N <= arr.length){
    sumi = 0;
    sumd = 0;
      if (N===0)  {  // Sin contar el primer dígito (igual a 0)
          for (let der of arr.slice(1)){ 
            sumd += der;
          }
          if (sumd === 0){
            return N;
          }

          } else if (N===arr.length) {   // Sin contar el último dígito (igual a 0)
            for (let der of arr.slice(0,N-1)){ 
                sumd += der;
              }
              if (sumd == 0){
                return 0;
              }



          } else {  // Todos los casos del medio del array
      Izquierda =  arr.slice(0,N);
      Derecha = arr.slice(N+1,arr.length);
      
      for (let izq of Izquierda){ 
        sumi += izq;
      }
      for (let der of Derecha){ 
        sumd += der;
      }
      if (sumi == sumd){
        return N;
      }
      }
      N = N+1;
  }
  return -1;
}

