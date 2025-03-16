const fs = require('fs');
const path = require('path');

let fpath1 = path.join(__dirname, 'example.txt');

let data1 = fs.readFileSync(fpath1);
console.log(data1.toString());

fs.readFile(fpath1, (err, data2) => {
  if (err) console.error(err);
  else console.log(data2.toString());
});
