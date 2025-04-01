import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runReserve(name, subject) {
  try {
    let rPath = path.join(__dirname, 'logs', 'reservations.txt');
    let rdataPromise = fs.promises.readFile(rPath, 'utf-8');

    console.log('reserving...');
    let wdata = `${name}: ${subject}`;

    let rdata = await rdataPromise;
    if (rdata.includes(name)) {
      console.log(name + 'already booked');
    } else {
      await fs.promises.appendFile(rPath, wdata, 'utf-8');
      console.log('done');
    }
  } catch (nofileErr) {
    console.error('nofileErr');
    return;
  }
}
runReserve('이승기', '스피닝');
