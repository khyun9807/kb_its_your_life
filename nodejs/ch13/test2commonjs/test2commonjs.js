const fs = require('fs');
const path = require('path');

let dpath = path.join(__dirname, 'logs');

let files = fs.readdirSync(dpath);

if (files.length > 0) {
  console.log('운동 기록 출력 완료!');
} else {
  console.log('운동 기록 파일 없음');
}

for (let i = 0; i < files.length; i++) {
  let fname = files[i];

  let fpath = path.join(dpath, fname);

  fs.readFile(fpath, (err, data) => {
    if (err) console.error(err);
    else console.log(data.toString());
  });
}
