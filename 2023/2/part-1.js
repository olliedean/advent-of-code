const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'input.txt');

fs.readFile(filePath, 'utf8', async(e, data) => {
  let final = 0;
  data.split('\n').forEach((line) => {
    loaded = {
      red: 12,
      green: 13,
      blue: 14
    }
    ok = true;
    id = parseInt(line.split(':')[0].replace(/[a-zA-Z]/g, '').trim());
    console.log(id);

    line.split(':')[1].split(';').forEach((seg) => {
      seg.split(',').forEach((color) => {
        color = color.trim();
        segCount = parseInt(color.split(' ')[0]);
        segColor = color.split(' ')[1];
        if (loaded[segColor] < segCount) {
          console.log(seg + ' too much');
          ok = false;
        }
      });
    });
    if(ok) {
      console.log(line.split(':')[0] + ' ok (' + final + ')');
      final += id;
    }
  });

  console.log(final);
});