const fs = require('fs');
const path = require('path');

let dpath1 = path.join(__dirname, 'tempdir0/tempdir1');
let dpath2 = path.join(__dirname, 'tempdir0/tempdir2');

fs.mkdirSync(dpath1, { recursive: true });
fs.mkdir(dpath2, { recursive: true }, (err) => {
  if (err) console.error(err);
  else {
    fs.rmSync(dpath1, { recursive: true });
    fs.rm(__dirname + '/tempdir0', { recursive: true }, (err2) => {
      if (err2) console.error(err2);
      else console.log('complete');
    });
  }
});
