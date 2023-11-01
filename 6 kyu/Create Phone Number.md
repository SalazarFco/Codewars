<a href="https://www.codewars.com/kata/525f50e3b73515a6db000b83"> Problem link </a>

**DESCRIPTION:**

Write a function named ```first_non_repeating_letter``` that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input ```'stress'```, the function should return ```'t'```, since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input ```'sTreSS'``` should return ```'T'```.

If a string contains all repeating characters, it should return an empty string (```""```) or None ```--``` see sample tests.

**Solution:**

```

function firstNonRepeatingLetter(s) {
  var kk = s.split("") // Se pasa el string a un array "hola" = ['h','o','l','a']
  var kk1 = s.toLowerCase().split("") // Se crea un array pero se aseguta que todan sean minúsculas por la igualdad
  

    for (var i = 0; i < kk.length ; i++) {

      if(i === kk.length){  // Si se ha llegado al último elemento entonces este no se ha repetido nunca.
        return kk[i+1] // Se devuelve en el elemento original donde no se ha aplicado la función minúsculas
      }
      var sd = kk1.slice(0, i).concat(kk1.slice(i + 1)); // Se crea un nuevo array sin el elemento kk1[i]

        if (!sd.includes(kk1[i])){ // Si el intervalo no contiene al elemento, entonces no se repite
          return kk[i]; // Se devuelve en el elemento original donde no se ha aplicado la función minúsculas
        }

        
        
    }

    return '';



  }

```
