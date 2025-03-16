const fs = require('fs').promises;
const path = require('path');

function func(cname) {
  let fpath = path.join(__dirname, 'logs', 'checkin.txt');

  path;

  let curdate = new Date();

  let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      let str = `${cname}: 출석 완료 (${curdate.getFullYear()}-${
        curdate.getMonth() + 1
      }-${
        curdate.getDate() + 1
      } ${curdate.getHours()}:${curdate.getMinutes()})`;
      resolve(str);
    }, 1000);
  });

  return prom;
}

async function func2(cname) {
  let fpath = path.join(__dirname, 'logs', 'checkin.txt');
  console.log('출석 중 ...');
  let rdata = await fs.readFile(fpath);
  let strdata = rdata.toString();

  if (strdata.includes(cname)) {
    console.log(`${cname} 회원님은 이미 출석 했음`);
  } else {
    let funcresult = await func(cname);
    console.log(funcresult);

    await fs.appendFile(fpath, funcresult + '\n');
    console.log('출석 기록됨');
  }
}

func2('이승기');
