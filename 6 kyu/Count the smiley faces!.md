<a href="https://www.codewars.com/kata/583203e6eb35d7980400002a"> Problem link </a>

**DESCRIPTION:**

Given an array (arr) as an argument complete the function ```countSmileys``` that should return the total number of smiling faces.

Rules for a smiling face:

<ul>
  <li>Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ; </li>
  <li>A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~</li>
  <li>Every smiling face must have a smiling mouth that should be marked with either ) or D</li>
</ul>

No additional characters are allowed except for those mentioned.

Valid smiley face examples: ```:) :D ;-D :~)```

Invalid smiley faces: ```;( :> :} :]```

**Solution:**

```

function countSmileys(arr) {
    count = 0;
    for (let h of arr){
       
        if (((h[0] ===':' || h[0] ===';')  && (h[1] ===')' || h[1] ==='D')) || ( (h[0] ===';' || h[0] ===':') && (h[1] ==='-' || h[1] ==='~') && (h[2] ==='D' || h[2] ===')'))) {
           count = count+1;
        }
    }
    return count
  }

```
