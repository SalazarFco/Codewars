// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s){
    p = s.split('') // Para dividir el string en un array que comienza con [0]
    
    if (p.length === 1){
        return p[0]
    } else if (p.length % 2 === 0){   // Se devuelve el par
      a = Math.ceil((p.length-1)/2);   // Valor superior aproximado
      b = Math.floor((p.length-1)/2);  // Valor inferior aproximado
      oo =p[b]+p[a]
    return oo
    } else{
        return p[Math.floor(p.length/2)]   // Se devuelve el impar
    }
}

