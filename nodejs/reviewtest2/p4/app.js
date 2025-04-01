import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

async function backup() {
  let targetPath = path.join(__dirname, 'logs', 'workout_log.txt');
  let copyPath = path.join(__dirname, 'log', 'backup_log.txt');

  let rs = fs.createReadStream(targetPath, 'utf-8');
  let ws = fs.createWriteStream(copyPath, 'utf-8');

  rs.pipe(ws);

  rs.on('error', (err) => {
    console.log(err);
  });

  ws.on('error', (err) => {
    console.log('error at write');
  });
}

backup();
