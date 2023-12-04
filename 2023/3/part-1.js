const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'input.txt');
// prepare for the worst and hope for the best
fs.readFile(filePath, 'utf8', async(e, data) => {
  let lines = [];
  let numbers = [];
  let final = 0;
  data.split('\n').forEach((line) => {
    line = line.trim();
    let lineObj = line.split('');
    lines.push(lineObj);  
  })
  function findFullNumber(line, index) {
    let start = index;
    while(!isNaN(line[start])){start--;}
    start++;
    let end = index;
    while(!isNaN(line[end])){end++;}
    // end--;
    let number = line.slice(start, end);
    return number.join('');
  };

  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if(lines[i][j] !== "." && isNaN(lines[i][j])){
        if(lines[i-1] && !isNaN(lines[i-1][j])){ numbers.push(findFullNumber(lines[i-1], j)); }
        if(lines[i+1] && !isNaN(lines[i+1][j])){ numbers.push(findFullNumber(lines[i+1], j)); }
        if(lines[i][j-1] && !isNaN(lines[i][j-1])){ numbers.push(findFullNumber(lines[i], j-1)); }
        if(lines[i][j+1] && !isNaN(lines[i][j+1])){ numbers.push(findFullNumber(lines[i], j+1)); }
        if(lines[i-1] && !isNaN(lines[i-1][j-1])){ numbers.push(findFullNumber(lines[i-1], j-1)); }
        if(lines[i-1] && !isNaN(lines[i-1][j+1])){ numbers.push(findFullNumber(lines[i-1], j+1)); }
        if(lines[i+1] && !isNaN(lines[i+1][j-1])){ numbers.push(findFullNumber(lines[i+1], j-1)); }
        if(lines[i+1] && !isNaN(lines[i+1][j+1])){ numbers.push(findFullNumber(lines[i+1], j+1)); }
      }
    }
  }
  numbers.forEach((num) => {
    final = final + parseInt(num);
  });
  console.log(final);
});
