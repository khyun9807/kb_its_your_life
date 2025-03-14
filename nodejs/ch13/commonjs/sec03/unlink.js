const fs = require('fs');
const path = require('path');

fs.writeFileSync(__dirname + 'deletable1.txt', 'xx');
fs.writeFileSync(__dirname + 'deletable2.txt', 'zz');

fs.unlinkSync(__dirname + 'deletable1.txt');

if (fs.existsSync(__dirname + 'deletable1.txt')) console.log('failed');
else console.log('congrats');

fs.unlink(__dirname + 'deletable2.txt', (err) => {
  if (err) console.error(err);
  else {
    if (fs.existsSync(__dirname + 'deletable2.txt')) console.log('failed');
    else console.log('congrats');
  }
});
