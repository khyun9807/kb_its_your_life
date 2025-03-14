const fs = require('fs');

const path = require('path');

const data = '"김종국, 나이: 45, 체중: 80kg, 운동: 벤치프레스 100kg"';

let fpath = path.join(__dirname, 'members', 'kim_jong_kook.txt');

fs.writeFileSync(fpath, data);
console.log('생성완료');

let rdata = fs.readFileSync(fpath);

let finfo = path.parse(fpath);

console.log(`디렉터리 경로: ${path.basename(finfo.dir)}`);
console.log(`파일 이름: ${finfo.base}`);
console.log(`파일 확장자: ${finfo.ext}`);
console.log(`파일 이름(확장자 제외): ${finfo.name}`);
