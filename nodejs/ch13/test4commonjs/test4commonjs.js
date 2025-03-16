const path = require('path');
const fs = require('fs');

let fpath1 = path.join(__dirname, 'logs', 'workout_log.txt');
let fpath2 = path.join(__dirname, 'logs', 'backup_log.txt');

let rs = fs.createReadStream(fpath1);
if (rs == null) {
  console.log('error');
}

let ws = fs.createWriteStream('ddd' + fpath2);

rs.pipe(ws)
  .on('error', (err) => {
    console.error(`백업중 오류 ${err}`);
  })
  .on('finish', () => {
    console.log('backup wanryo');
  });
