<a href="https://www.codewars.com/kata/523f5d21c841566fde000009"> Problem link </a>

**DESCRIPTION:**


**Solution:**

```
function arrayDiff(a, b) {
    for (Num of b){
      if (a.includes(Num)){ // Si el elemento existe hacer
          a = a.filter(function(valor) { return valor !== Num;});  // Devolver los valores distintos a Num
      }
  }
  return a
}

```
