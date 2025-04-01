import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  let filePath = path.join(__dirname, 'logs', 'workout_log.txt');
  //console.log(filePath);
  if (fs.existsSync(filePath)) {
    let data = await fs.promises.readFile(filePath, 'utf-8');
    console.log(data);
  } else {
    console.log('not exist');
  }
})();
