<a href="https://www.codewars.com/kata/563b662a59afc2b5120000c6"> Problem link </a>

**DESCRIPTION:**

In a small town the population is ```p0 = 1000``` at the beginning of a year. The population regularly increases by ```2 percent``` per year and moreover ```50``` new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = ```1200``` inhabitants?

**Solution:**

```

function nbYear(p0, percent, aug, p) {
    i = 0;
    while(true){
    
      pp = Math.floor(p0 + p0*percent/100 + aug)
      
      if (pp >= p){
        i = i+1;
        return i
        break;
      }
      i = i+1;
      p0 = pp;
    }
  }

```
