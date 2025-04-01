import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

//const fs = require('fs');

console.log(fs.readdirSync(__dirname));

function asyncTask() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('asyncTask Done!');
      res('done data');
    }, 5000);
  });
}

async function job() {
  let result = await asyncTask();
  console.log('11', result);

  asyncTask().then((d) => console.log('22', d));
  console.log('33');
}

job();
