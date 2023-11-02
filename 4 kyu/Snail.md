<a href="https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1"> Problem link </a>

**DESCRIPTION:**

Given an ```n x n``` array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

```
array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
```

For better understanding, please follow the numbers of the next array consecutively:

```
array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
```

This image will illustrate things more clearly:

<img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*f3yEq5LHQIq0Vk2K_9kuRw.png">

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array ```[[]]```.

**Solution:**

```

function snail(array) {
  var kKk =[]
  var contador = 0
  N = array.length;  // NxN
  if (array[0].length === 0) {return [];} // Si la entrada es [[]] devolver []
  while(contador <= N*N){
    if (array.length === 1) {kKk[contador]=array[0][0]; return kKk} // 
        for (var i = 0; i <= array[0].length-1 ; i++) {  // Desde ezquina superior izquierda a esquina derecha
          kKk[contador] = array[0][i]
          contador += 1; 
             }

             array = array.splice(1,array.length) //Se corta la primera fila que ya sido ocupada en kKk
             array =array[0].map((val, index) => array.map(row => row[row.length-1-index])); // Giro anti-horario de la matriz
           
} return kKk

}

```
