const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'input.txt');

fs.readFile(filePath, 'utf8', async(e, data) => {
  let final = 0;
  data.split('\n').forEach((line) => {
    highestLineColors = {
      red: 0,
      green: 0,
      blue: 0
    }
    line.split(':')[1].split(';').forEach((seg) => {
      seg.split(',').forEach((color) => {
        color = color.trim();
        segCount = parseInt(color.split(' ')[0]);
        segColor = color.split(' ')[1];
        if (segCount > highestLineColors[segColor]) {
          highestLineColors[segColor] = segCount;
        }
      });
    });
    console.log(highestLineColors);
    final = final + (highestLineColors.red * highestLineColors.green * highestLineColors.blue);
  });
  console.log(final);
});