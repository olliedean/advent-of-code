const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'input.txt');

fs.readFile(filePath, 'utf8', async(e, data) => {
  let final = 0;
  data.split('\n').forEach((line) => {
    line = line.trim();
    line = line.split(':');

    let winningNumbers = line[1].split('|')[0].split(' ').filter((num) => { return num !== '' });
    let myNumbers = line[1].split('|')[1].split(' ').filter((num) => { return num !== '' });
    
    let lineFinal = 0;
    winningNumbers.forEach((num) => {
      if (myNumbers.includes(num)) {
        console.log(num + ' is a winning number!')
        if(lineFinal === 0) lineFinal = 1;
        else lineFinal = lineFinal * 2;
      }
    });
    final = final + lineFinal;
  });
  console.log(final);
});