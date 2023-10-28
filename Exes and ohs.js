// https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) { 
    o=0;
    x=0;
    palabra = str.split('') // Para tenerlo como array

   for (let a of palabra){  

    if (a==='x' || a==='X'){  // Es minuscula o mayuscula
        x=x+1;
    } else if (a === 'o' || a==='O') // Es minuscula o mayuscula
    o=o+1;
   }
   
   if (x === o){  // Tienen la misma cantidad?
        return true
    
   } else{
    return false
   }
    
}


