
// https://www.codewars.com/kata/583203e6eb35d7980400002a

function countSmileys(arr) {
    count = 0;
    for (let h of arr){
       
        if (((h[0] ===':' || h[0] ===';')  && (h[1] ===')' || h[1] ==='D')) || ( (h[0] ===';' || h[0] ===':') && (h[1] ==='-' || h[1] ==='~') && (h[2] ==='D' || h[2] ===')'))) {
           count = count+1;
        }
    }
    return count
  }

  console.log(countSmileys([':)', ';(', ';}', ':-D']))
