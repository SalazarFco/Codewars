<a href="https://www.codewars.com/kata/545cedaa9943f7fe7b000048"> Problem link </a>

**DESCRIPTION:**

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

**Solution:**

```

function isPangram(string){
    A1 = "abcdefghijklmnopqrstuvwxyz" // Abecedario
    alphabet1 = A1.split("");  // Se transforma el string en array
    A2 = A1.toUpperCase()     // Mayusculas
    alphabet2 = A2.split("");
    sss = string.split("")
    len = A1.length;           // Cantidad de letras
    i=0;
    while(true){
     if (i===len){             //
      return false;
    } else if ((sss.includes(A1[i])) === true){ // Incluye minuscula?
        if (i === len-1){     // Se esta 1 ya que parte de [0]
            return true;
        }
        i=i+1
    
    } else if ((sss.includes(A2[i])) === true){ // Incluye mayuscula?
        if (i === len-1){ // Se esta 1 ya que parte de [0]
            return true;
        }
        i=i+1
    } else{
        return false;
    }
     }
 }

```
