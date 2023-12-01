const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'input.txt');

fs.readFile(filePath, 'utf8', async(e, data) => {
  let final = 0;
  data.split('\n').forEach((line) => {
    nums = line.replace(/[a-zA-Z]/g, '').trim();
    const num = nums[0] + nums.slice(-1)[0];
    final += parseInt(num);
  });
  console.log(final);
});