import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

async function addMember(name, meta) {
  let filePath = path.join(__dirname, 'logs', 'members.txt');

  if (fs.existsSync(filePath)) {
    let data = `${name}: ${meta}\n`;
    await fs.promises.appendFile(filePath, data, 'utf-8');
    console.log('finish');
  } else {
    console.log('not exists');
  }
}

addMember('이승기', '체중 68kg, 벤치프레스 80kg');
