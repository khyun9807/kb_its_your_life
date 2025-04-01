import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function makeMembersDir() {
  let targetPath = path.join(__dirname, 'members');

  let isExist = fs.existsSync(targetPath);
  if (!isExist) {
    fs.mkdirSync(targetPath);
  }
}

function makeMember(fname, data) {
  makeMembersDir();

  let dirPath = path.join(__dirname, 'members');
  let filePath = path.join(dirPath, fname);

  fs.writeFileSync(filePath, data, 'utf-8');

  let pobj = path.parse(filePath);
  for (let p in pobj) {
    console.log(`${p}: ${pobj[p]}`);
  }
}

makeMember(
  'kim_jong_kook.txt',
  '김종국, 나이: 45, 체중: 80kg, 운동: 벤치프레스 100kg\n'
);
