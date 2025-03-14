const fs = require('fs');
const path = require('path');

let fpath1 = path.join(__dirname, 'example.txt');
let fpath2 = path.join(__dirname, 'examplecopy.txt');
let fpath3 = path.join(__dirname, 'examplecopy2.txt');

if (fs.existsSync(fpath1)) {
  let data = fs.readFileSync(fpath1);
  fs.writeFileSync(fpath2, data);
} else {
  console.log('there"s no ' + fpath1);
}

if (fs.existsSync(fpath2)) {
  let data = fs.readFileSync(fpath2);
  fs.writeFile(fpath3, data, (err) => {
    if (err) console.error(err);

    data = fs.readFileSync(fpath3);
    console.log(data.toString());
  });
} else {
  console.log('there"s no ' + fpath2);
}
