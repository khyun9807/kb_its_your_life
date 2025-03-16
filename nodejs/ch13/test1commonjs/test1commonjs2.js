const fs = require('fs');

const path = require('path');

const data = '"김종국, 나이: 45, 체중: 80kg, 운동: 벤치프레스 100kg"';

let fpath = path.join(__dirname, 'members', 'kim_jong_kook.txt');

// fs.writeFileSync(fpath, data);

fs.writeFile(fpath, data, (err1) => {
  if (err1) {
    console.error(err1);
  } else {
    console.log('생성완료');
  }
});

// let rdata = fs.readFileSync(fpath);
fs.readFile(fpath, (err2, rdata) => {
  if (err2) {
    console.error(err2);
  } else {
    console.log(rdata);

    let finfo = path.parse(fpath);

    console.log(`디렉터리 경로: ${path.basename(finfo.dir)}`);
    console.log(`파일 이름: ${finfo.base}`);
    console.log(`파일 확장자: ${finfo.ext}`);
    console.log(`파일 이름(확장자 제외): ${finfo.name}`);
  }
});
