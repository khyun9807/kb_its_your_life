const fs = require('fs');
const path = require('path');

let files1 = fs.readdirSync('.');

console.log(files1);

// let fpath='.';
let fpath = path.dirname(__dirname);

fs.readdir(fpath, (err, files2) => {
  if (err) console.error(err);
  else console.log(files2);
});
