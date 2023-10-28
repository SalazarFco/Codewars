function nbYear(p0, percent, aug, p) {
    i = 0;
    while(true){
    
      pp = Math.ceil(p0 + p0*percent/100 + aug)
      
      if (pp >= p){
        i = i+1;
        return i
        break;
      }
      i = i+1;
      p0 = pp;
    }
  }
  
  a = nbYear(1500, 5, 100, 5000) 
  b = nbYear(1500000, 2.5, 10000, 2000000)
  c = nbYear(1500000, 0.25, 1000, 2000000)
  console.log(a)
  console.log(b)
  console.log(c)