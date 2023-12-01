const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'input.txt');

const numberDict = {
  one: 'o1e',
  two: 't2o',
  three: 't3e',
  four: 'f4e',
  five: 'f5e',
  six: 's6x',
  seven: 's7n',
  eight: 'e8t',
  nine: 'n9e',
};

fs.readFile(filePath, 'utf8', async (e, data) => {
  let final = 0;

  data.split('\n').forEach((line) => {

    Object.keys(numberDict).forEach(key => {
      line = line.replaceAll(key, numberDict[key]);
    })

    nums = line.replace(/[a-zA-Z]/g, '').trim();

    const num = nums[0] + nums[nums.length - 1];
    final += parseInt(num);
  });

  console.log(final);
});