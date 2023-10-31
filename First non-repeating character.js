// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

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

g = "dmaahdmaahqajnqajnyqy7uyqy7umwnqmwnqm313m313sgys9sgys9szbaszban6pxn6pxypb64gypb64glhtwlhtws7q2os7q2o0"
ss = g.split("")
ss1 = ss.slice(1,ss.length)
ss3 = kk.slice(0, 1).concat(kk.slice(1 + 1))
console.log(ss1.includes(ss[0]))
console.log(ss1)
 x = firstNonRepeatingLetter(g)

 console.log(x)