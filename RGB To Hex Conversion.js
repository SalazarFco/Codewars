// https://www.codewars.com/kata/513e08acc600c94f01000001

function rgb(r, g, b) {
    r = Math.max(0, Math.min(255, r)); // Define los números entre 0 y 255
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));


    
     rr = r.toString(16).toUpperCase() // Formato Hex en mayúscula
     gg = g.toString(16).toUpperCase() 
     bb = b.toString(16).toUpperCase() 
     
     if (r<16){   // El formato hexadecimal tiene 1 dígito en el intervalo decimal de 0 a 15. Es por esto que se agrega un cero a la izquierda.
        rr='0'+ rr
     }
      if (g<16){
        gg='0'+ gg
     } 
     if (b<16){
        bb = '0'+ bb
     }

    return (rr + gg + bb );
}

yourNumber= 61
hexString = yourNumber.toString(16);

console.log(hexString.toUpperCase())
console.log(rgb(11,193,216))
r=12
g=13
v=14
     a = r.toString(16).toUpperCase() 
     b = g.toString(16).toUpperCase() 
     c = b.toString(16).toUpperCase() 
    return ("#" + a + b + c + "#");

console.log(c)