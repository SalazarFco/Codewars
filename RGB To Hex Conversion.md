**DESCRIPTION:**

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

```
Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
```
<a href="https://www.codewars.com/kata/513e08acc600c94f01000001"> Problem link </a>

**Solution:**

```
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
```

