import fs from 'fs';
import path from 'path';
import { json } from 'stream/consumers';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PetAlbumManager {
  records = [];
  constructor() {
    let rdata = fs.readFileSync(
      path.join(__dirname, 'pet_album.json'),
      'utf-8'
    );

    this.records = JSON.parse(rdata);

    console.log(JSON.stringify(this.records, 'null', 2));
  }
  addRecord(recordObj) {}
}

export { PetAlbumManager };
