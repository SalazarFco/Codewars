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

a = "hola"

console.log(a.slice(2))

var s = [20,10,-80,10,10,15,35];
var p = s.slice(0,1);
var x = s.slice(1);
console.log(p);
console.log(x);
ss=0;
for (let f of x){ 
    ss += f;
  }
  console.log(ss)

 a = findEvenIndex([20,10,-80,10,10,15,35])
 console.log(a)
vv = [20,10,-80,10,10,15,35];
 k = console.log(vv[9])