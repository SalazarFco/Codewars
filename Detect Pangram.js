

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
    } else{  // Si no tiene una letra automaticamente la frase no es un Pangram
        return false;
    }
     }
 }
xxxx = isPangram("The quick brown fox jumps over the lazy dog.")
console.log(xxxx)

x1 = isPangram("Cwm fjord bank glyphs vext quiz")
console.log(x1)


alpha = "abcdefghijklmnopqrstuvwxyz."
alphabet = x.split("");
console.log(alphabet[1])
console.log(alphabet)
console.log(alpha.toUpperCase())