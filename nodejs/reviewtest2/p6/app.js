import { dir } from 'console';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function recordAttend(name) {
  let curdate = new Date();
  let dirPath = path.join(__dirname, 'logs');
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  let checkinPath = path.join(dirPath, 'checkin.txt');

  console.log('attending...');

  let data = `${name}: attend finish (${curdate.getFullYear()}-${
    curdate.getMonth() + 1
  }-${curdate.getDate()} ${curdate.getHours()}:${curdate.getMinutes()})\n`;

  if (!fs.existsSync(checkinPath)) {
    fs.writeFileSync(checkinPath, data, 'utf-8');
    console.log('record finish');
  } else {
    let dup = `${name}: attend finish (${curdate.getFullYear()}-${
      curdate.getMonth() + 1
    }-${curdate.getDate()}`;
    let rdata = await fs.promises.readFile(checkinPath, 'utf-8');

    if (rdata.includes(dup)) {
      console.log('already attend');
    } else {
      await fs.promises.appendFile(checkinPath, data, 'utf-8');
      console.log('record finish');
    }
  }
}

recordAttend('유재석');
