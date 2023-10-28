// https://www.codewars.com/kata/563b662a59afc2b5120000c6

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
  
