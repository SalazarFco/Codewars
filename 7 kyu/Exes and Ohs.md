<a href="https://www.codewars.com/kata/55908aad6620c066bc00002a"> Problem link </a>

**DESCRIPTION:**

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

```
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

```

**Solution:**

```
function XO(str) {
    o=0;
    x=0;
    palabra = str.split('')

   for (let a of palabra){

    if (a==='x' || a==='X'){
        x=x+1;
    } else if (a === 'o' || a==='O')
    o=o+1;
   }
   
   if (x === o){
        return true
    
   } else{
    return false
   }
    
}

```
