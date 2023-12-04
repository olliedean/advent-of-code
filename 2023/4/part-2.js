// code is fucked and i dont have time to finish
// sorry elves, you've been gamble blocked


const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'input.txt');

fs.readFile(filePath, 'utf8', async(e, data) => {
  let final = 0;
  let left = [];
  data.split('\n').forEach((line) => {
    if(left === 0) return;
    final++;
    line = line.trim();
    line = line.split(':');
    let cardNum = line[0].split(' ')[1];

    let winningNumbers = line[1].split('|')[0].split(' ').filter((num) => { return num !== '' });
    let myNumbers = line[1].split('|')[1].split(' ').filter((num) => { return num !== '' });
    
    winningNumbers.forEach((num) => {
      if (myNumbers.includes(num)) {

        console.log(num + ' is a winning number!')
        left = left + 1;
      }
    });
  });
  console.log(final);
});