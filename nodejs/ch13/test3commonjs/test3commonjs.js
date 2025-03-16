const path = require('path');
const fs = require('fs');

let fpath = path.join(__dirname, 'logs', 'members.txt');
let data = '이승기: 체중 68kg, 벤치프레스 80kg\n';

if (fs.existsSync(fpath)) {
  fs.appendFile(fpath, data, (err) => {
    if (err) console.error(err);
    else {
      console.log('회원 정보가 성공적으로 추가되었습니다.');
      let rdata = fs.readFileSync(fpath);
      console.log(rdata.toString());
    }
  });
} else {
  console.log('회원 정보 파일이 없습니다.');
}
